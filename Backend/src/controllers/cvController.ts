import { Request, Response } from 'express';
import { CV, User } from '../src/entities';
import { AppDataSource } from '../data-source';
import fs from 'fs';
import path from 'path';

const cvRepository = AppDataSource.getRepository(CV);
const userRepository = AppDataSource.getRepository(User);

// Helper function to extract skills from CV text (simplified example)
const extractSkillsFromText = (text: string): string[] => {
  const commonSkills = [
    'JavaScript', 'TypeScript', 'React', 'Angular', 'Node.js',
    'Python', 'Java', 'C#', 'SQL', 'PostgreSQL', 'MongoDB',
    'HTML', 'CSS', 'AWS', 'Azure', 'Docker', 'Kubernetes',
    'Machine Learning', 'TensorFlow', 'PyTorch', 'Data Analysis'
  ];

  const foundSkills = commonSkills.filter(skill => 
    text.toLowerCase().includes(skill.toLowerCase())
  );

  return foundSkills;
};

export const uploadCV = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).user.userId;
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }

    const user = await userRepository.findOne({ where: { id: userId } });
    if (!user) {
      // Clean up uploaded file
      fs.unlinkSync(req.file.path);
      return res.status(404).json({ message: 'User not found' });
    }

    // Check if user already has a CV
    const existingCV = await cvRepository.findOne({ where: { user: { id: userId } });
    if (existingCV) {
      // Delete old file
      if (fs.existsSync(existingCV.filePath)) {
        fs.unlinkSync(existingCV.filePath);
      }
      await cvRepository.delete(existingCV.id);
    }

    // Read file content for skill extraction
    const fileContent = fs.readFileSync(req.file.path, 'utf-8');
    const extractedSkills = extractSkillsFromText(fileContent);

    const cv = new CV();
    cv.user = user;
    cv.fileName = req.file.originalname;
    cv.filePath = req.file.path;
    cv.extractedSkills = extractedSkills;

    await cvRepository.save(cv);
    res.status(201).json(cv);
  } catch (error) {
    if (req.file && fs.existsSync(req.file.path)) {
      fs.unlinkSync(req.file.path);
    }
    res.status(500).json({ message: 'Error uploading CV', error });
  }
};

export const getCV = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const cv = await cvRepository.findOne({
      where: { user: { id: userId } },
    });

    if (!cv) {
      return res.status(404).json({ message: 'CV not found' });
    }

    res.json(cv);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching CV', error });
  }
};

export const deleteCV = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).user.userId;
    const cv = await cvRepository.findOne({
      where: { user: { id: userId } },
    });

    if (!cv) {
      return res.status(404).json({ message: 'CV not found' });
    }

    if (fs.existsSync(cv.filePath)) {
      fs.unlinkSync(cv.filePath);
    }

    await cvRepository.delete(cv.id);
    res.json({ message: 'CV deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting CV', error });
  }
};

export const extractSkillsFromCV = async (req: Request, res: Response) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }

    // Read file content for skill extraction
    const fileContent = fs.readFileSync(req.file.path, 'utf-8');
    const extractedSkills = extractSkillsFromText(fileContent);

    // Clean up the uploaded file
    fs.unlinkSync(req.file.path);

    res.json({ skills: extractedSkills });
  } catch (error) {
    if (req.file && fs.existsSync(req.file.path)) {
      fs.unlinkSync(req.file.path);
    }
    res.status(500).json({ message: 'Error extracting skills from CV', error });
  }
};
import { OpenAI } from 'openai';
import { CV, User, Experience, Education, Skill } from '../src/entities';
import { AppDataSource } from '../data-source';
const experienceRepository = AppDataSource.getRepository(Experience);
const educationRepository = AppDataSource.getRepository(Education);
const skillRepository = AppDataSource.getRepository(Skill);

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// ... (keep existing uploadCV, getCV, deleteCV, extractSkillsFromCV functions)

export const generateAICV = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).user.userId;

    // Get all user data needed for CV
    const user = await userRepository.findOne({
      where: { id: userId },
      relations: ['skills', 'experiences', 'educations'],
    });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Prepare prompt for AI
    const prompt = `Generate a professional CV in Markdown format for ${user.name} with the following details:
    
    Skills: ${user.skills?.map(skill => skill.name).join(', ') || 'None'}
    
    Work Experience:
    ${user.experiences?.map(exp => `
    - ${exp.title} at ${exp.company} (${exp.startDate.toLocaleDateString()} - ${exp.current ? 'Present' : exp.endDate?.toLocaleDateString()})
      ${exp.description}
    `).join('\n') || 'No experience listed'}
    
    Education:
    ${user.educations?.map(edu => `
    - ${edu.degree} in ${edu.fieldOfStudy} from ${edu.institution} (${edu.startDate.toLocaleDateString()} - ${edu.current ? 'Present' : edu.endDate?.toLocaleDateString()})
      ${edu.description || ''}
    `).join('\n') || 'No education listed'}
    
    Include sections for:
    1. Professional Summary (3-4 sentences)
    2. Skills (grouped by category if possible)
    3. Work Experience (with bullet points of key achievements)
    4. Education
    5. Any other relevant sections (Projects, Certifications, etc.)
    
    Format the CV professionally with proper Markdown headings and bullet points.`;

    // Call OpenAI API
    const completion = await openai.chat.completions.create({
      messages: [
        { 
          role: 'system', 
          content: 'You are a professional CV writer. Generate well-structured CVs in Markdown format based on user-provided information.' 
        },
        { role: 'user', content: prompt }
      ],
      model: 'gpt-4',
    });

    const cvContent = completion.choices[0].message.content;

    if (!cvContent) {
      return res.status(500).json({ message: 'Failed to generate CV content' });
    }

    // Save generated CV to database
    let cv = await cvRepository.findOne({ where: { user: { id: userId } } });
    if (!cv) {
      cv = new CV();
      cv.user = user;
    }

    cv.fileName = `${user.name.replace(/\s+/g, '_')}_CV_${new Date().toISOString().split('T')[0]}.md`;
    cv.filePath = `generated/${cv.fileName}`;
    cv.extractedSkills = user.skills?.map(skill => skill.name) || [];

    // Ensure directory exists
    if (!fs.existsSync('generated')) {
      fs.mkdirSync('generated');
    }

    // Save markdown file
    fs.writeFileSync(cv.filePath, cvContent);

    await cvRepository.save(cv);

    res.json({
      message: 'CV generated successfully',
      cv: {
        id: cv.id,
        fileName: cv.fileName,
        downloadUrl: `/api/cvs/download/${cv.id}`,
        content: cvContent,
      },
    });
  } catch (error) {
    console.error('Error generating AI CV:', error);
    res.status(500).json({ message: 'Error generating CV', error });
  }
};

export const downloadCV = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const cv = await cvRepository.findOne({ where: { id } });

    if (!cv || !fs.existsSync(cv.filePath)) {
      return res.status(404).json({ message: 'CV not found' });
    }

    res.download(cv.filePath, cv.fileName);
  } catch (error) {
    res.status(500).json({ message: 'Error downloading CV', error });
  }
};