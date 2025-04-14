import {
  MatPaginatorModule,
  MatSortModule
} from "./chunk-ZYU6KWYV.js";
import {
  MatDialogModule
} from "./chunk-V7IWYFU7.js";
import {
  MatSelectModule
} from "./chunk-E3ACTAIE.js";
import {
  MatProgressBar,
  MatProgressBarModule
} from "./chunk-CG4BWGIE.js";
import {
  MatTableModule
} from "./chunk-LP4LRPBU.js";
import {
  MatTooltipModule
} from "./chunk-YIAVA7GS.js";
import "./chunk-A56WDMG5.js";
import "./chunk-PPMKGYHC.js";
import "./chunk-Y6AS25U4.js";
import {
  MatInputModule
} from "./chunk-FTOYA6FG.js";
import "./chunk-R4MWSHXU.js";
import {
  MatFormFieldModule
} from "./chunk-UN2WUTJ4.js";
import "./chunk-OIZAD6NR.js";
import "./chunk-EBTVSD4W.js";
import "./chunk-OIBNGD5S.js";
import "./chunk-JAHJITDP.js";
import "./chunk-JWDN46VP.js";
import {
  MatChip,
  MatChipSet,
  MatChipsModule
} from "./chunk-X24OG3IF.js";
import {
  MatIconModule
} from "./chunk-7XCVZ5KQ.js";
import {
  FormsModule,
  ReactiveFormsModule
} from "./chunk-ZR2S3JFV.js";
import {
  CommonModule,
  DatePipe,
  MatButton,
  MatButtonModule,
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardModule,
  MatCardSubtitle,
  MatCardTitle,
  NgForOf,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-HLRG3ATU.js";

// src/app/admin/components/ai-model-management/ai-model-management.component.ts
function AIModelManagementComponent_mat_card_4_mat_chip_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-chip");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const feature_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", feature_r2, " ");
  }
}
function AIModelManagementComponent_mat_card_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-card", 3)(1, "mat-card-header")(2, "mat-card-title");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-card-subtitle");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "mat-card-content")(7, "div", 4)(8, "span");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275element(10, "mat-progress-bar", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 6)(12, "div", 7)(13, "span");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 7)(16, "span");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 7)(19, "span");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "div", 8)(22, "mat-chip-set");
    \u0275\u0275template(23, AIModelManagementComponent_mat_card_4_mat_chip_23_Template, 2, 1, "mat-chip", 9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 10);
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "mat-card-actions")(28, "button", 11);
    \u0275\u0275listener("click", function AIModelManagementComponent_mat_card_4_Template_button_click_28_listener() {
      const model_r3 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.retrainModel(model_r3));
    });
    \u0275\u0275text(29, " Train ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "button", 12);
    \u0275\u0275listener("click", function AIModelManagementComponent_mat_card_4_Template_button_click_30_listener() {
      const model_r3 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.deployModel(model_r3));
    });
    \u0275\u0275text(31, " Deploy ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "button", 13);
    \u0275\u0275listener("click", function AIModelManagementComponent_mat_card_4_Template_button_click_32_listener() {
      const model_r3 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.deleteModel(model_r3));
    });
    \u0275\u0275text(33, " Delete ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const model_r3 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(model_r3.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(model_r3.type);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Status: ", model_r3.status, "");
    \u0275\u0275advance();
    \u0275\u0275property("mode", "determinate")("value", model_r3.trainingProgress);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Accuracy: ", model_r3.accuracy, "%");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Precision: ", model_r3.precision, "%");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Recall: ", model_r3.recall, "%");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", model_r3.features);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" Last Updated: ", \u0275\u0275pipeBind1(26, 10, model_r3.lastUpdated), " ");
  }
}
var AIModelManagementComponent = class _AIModelManagementComponent {
  models = [
    {
      id: "1",
      name: "Job Matching Model",
      type: "Recommendation",
      status: "Active",
      trainingProgress: 100,
      accuracy: 92.5,
      precision: 89.3,
      recall: 91.8,
      features: ["Skills", "Experience", "Education", "Location"],
      lastUpdated: /* @__PURE__ */ new Date("2024-03-15")
    },
    {
      id: "2",
      name: "Resume Analysis Model",
      type: "NLP",
      status: "Training",
      trainingProgress: 75,
      accuracy: 88.3,
      precision: 85.7,
      recall: 87.2,
      features: ["Text Analysis", "Keyword Extraction", "Format Detection"],
      lastUpdated: /* @__PURE__ */ new Date("2024-03-10")
    }
  ];
  constructor() {
  }
  ngOnInit() {
  }
  retrainModel(model) {
    console.log("Retraining model:", model);
  }
  deployModel(model) {
    console.log("Deploying model:", model);
  }
  deleteModel(model) {
    console.log("Deleting model:", model);
  }
  static \u0275fac = function AIModelManagementComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AIModelManagementComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AIModelManagementComponent, selectors: [["app-ai-model-management"]], decls: 5, vars: 1, consts: [[1, "ai-model-management-container"], [1, "model-list"], ["class", "model-card", 4, "ngFor", "ngForOf"], [1, "model-card"], [1, "model-status"], [3, "mode", "value"], [1, "model-metrics"], [1, "metric"], [1, "model-features"], [4, "ngFor", "ngForOf"], [1, "last-updated"], ["mat-button", "", "color", "primary", 3, "click"], ["mat-button", "", "color", "accent", 3, "click"], ["mat-button", "", "color", "warn", 3, "click"]], template: function AIModelManagementComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h2");
      \u0275\u0275text(2, "AI Model Management");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 1);
      \u0275\u0275template(4, AIModelManagementComponent_mat_card_4_Template, 34, 12, "mat-card", 2);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275property("ngForOf", ctx.models);
    }
  }, dependencies: [
    CommonModule,
    NgForOf,
    DatePipe,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatCard,
    MatCardActions,
    MatCardContent,
    MatCardHeader,
    MatCardSubtitle,
    MatCardTitle,
    MatButtonModule,
    MatButton,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatChipsModule,
    MatChip,
    MatChipSet,
    MatProgressBarModule,
    MatProgressBar,
    MatTooltipModule,
    MatDialogModule
  ], styles: ["\n\n.ai-model-management-container[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.model-list[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  gap: 20px;\n  margin-top: 20px;\n}\n.model-card[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.model-status[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 10px;\n}\n.model-metrics[_ngcontent-%COMP%] {\n  margin: 10px 0;\n}\n.model-features[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\nmat-card-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n/*# sourceMappingURL=ai-model-management.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AIModelManagementComponent, { className: "AIModelManagementComponent", filePath: "src/app/admin/components/ai-model-management/ai-model-management.component.ts", lineNumber: 140 });
})();
export {
  AIModelManagementComponent
};
//# sourceMappingURL=chunk-KQVYSG24.js.map
