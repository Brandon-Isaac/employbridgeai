import {
  MatMenu,
  MatMenuItem,
  MatMenuModule,
  MatMenuTrigger
} from "./chunk-FNCPAWZB.js";
import {
  MatDialogModule
} from "./chunk-V7IWYFU7.js";
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow,
  MatRowDef,
  MatTable,
  MatTableModule
} from "./chunk-LP4LRPBU.js";
import "./chunk-A56WDMG5.js";
import "./chunk-PPMKGYHC.js";
import "./chunk-Y6AS25U4.js";
import "./chunk-EBTVSD4W.js";
import "./chunk-OIBNGD5S.js";
import "./chunk-JAHJITDP.js";
import "./chunk-JWDN46VP.js";
import {
  MatChip,
  MatChipsModule
} from "./chunk-X24OG3IF.js";
import {
  MatIconModule
} from "./chunk-7XCVZ5KQ.js";
import "./chunk-ZR2S3JFV.js";
import {
  CommonModule,
  DatePipe,
  MatButtonModule,
  MatCard,
  MatCardContent,
  MatCardHeader,
  MatCardModule,
  MatCardTitle,
  MatIconButton,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-HLRG3ATU.js";

// src/app/admin/components/user-management/user-management.component.ts
function UserManagementComponent_th_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 13);
    \u0275\u0275text(1, "Email");
    \u0275\u0275elementEnd();
  }
}
function UserManagementComponent_td_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const user_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(user_r1.email);
  }
}
function UserManagementComponent_th_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 13);
    \u0275\u0275text(1, "Role");
    \u0275\u0275elementEnd();
  }
}
function UserManagementComponent_td_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 14)(1, "mat-chip", 15);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const user_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("color", ctx_r2.getRoleColor(user_r2.role));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", user_r2.role, " ");
  }
}
function UserManagementComponent_th_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 13);
    \u0275\u0275text(1, "Status");
    \u0275\u0275elementEnd();
  }
}
function UserManagementComponent_td_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 14)(1, "mat-chip", 15);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const user_r4 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("color", ctx_r2.getStatusColor(user_r4.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", user_r4.status, " ");
  }
}
function UserManagementComponent_th_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 13);
    \u0275\u0275text(1, "Created At");
    \u0275\u0275elementEnd();
  }
}
function UserManagementComponent_td_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 14);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const user_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, user_r5.createdAt), " ");
  }
}
function UserManagementComponent_th_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 13);
    \u0275\u0275text(1, "Last Login");
    \u0275\u0275elementEnd();
  }
}
function UserManagementComponent_td_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 14);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const user_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, user_r6.lastLogin), " ");
  }
}
function UserManagementComponent_th_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 13);
    \u0275\u0275text(1, "Actions");
    \u0275\u0275elementEnd();
  }
}
function UserManagementComponent_td_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 14)(1, "button", 16);
    \u0275\u0275element(2, "i", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "mat-menu", null, 0)(5, "button", 18);
    \u0275\u0275listener("click", function UserManagementComponent_td_24_Template_button_click_5_listener() {
      const user_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.editUser(user_r8));
    });
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7, "Edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 18);
    \u0275\u0275listener("click", function UserManagementComponent_td_24_Template_button_click_8_listener() {
      const user_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.suspendUser(user_r8));
    });
    \u0275\u0275elementStart(9, "span");
    \u0275\u0275text(10, "Suspend");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "button", 18);
    \u0275\u0275listener("click", function UserManagementComponent_td_24_Template_button_click_11_listener() {
      const user_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.deleteUser(user_r8));
    });
    \u0275\u0275elementStart(12, "span");
    \u0275\u0275text(13, "Delete");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const menu_r9 = \u0275\u0275reference(4);
    \u0275\u0275advance();
    \u0275\u0275property("matMenuTriggerFor", menu_r9);
  }
}
function UserManagementComponent_tr_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 19);
  }
}
function UserManagementComponent_tr_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 20);
  }
}
var UserManagementComponent = class _UserManagementComponent {
  displayedColumns = [
    "email",
    "role",
    "status",
    "createdAt",
    "lastLogin",
    "actions"
  ];
  users = [
    {
      id: "1",
      email: "jobseeker@example.com",
      role: "JOB_SEEKER",
      status: "active",
      createdAt: /* @__PURE__ */ new Date("2024-01-01"),
      lastLogin: /* @__PURE__ */ new Date("2024-03-20")
    },
    {
      id: "2",
      email: "employer@example.com",
      role: "EMPLOYER",
      status: "active",
      createdAt: /* @__PURE__ */ new Date("2024-01-15"),
      lastLogin: /* @__PURE__ */ new Date("2024-03-19")
    }
  ];
  constructor() {
  }
  ngOnInit() {
  }
  getRoleColor(role) {
    switch (role) {
      case "ADMIN":
        return "primary";
      case "EMPLOYER":
        return "accent";
      default:
        return "";
    }
  }
  getStatusColor(status) {
    switch (status) {
      case "active":
        return "primary";
      case "suspended":
        return "warn";
      default:
        return "";
    }
  }
  editUser(user) {
    console.log("Edit user:", user);
  }
  suspendUser(user) {
    console.log("Suspend user:", user);
  }
  deleteUser(user) {
    console.log("Delete user:", user);
  }
  static \u0275fac = function UserManagementComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UserManagementComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserManagementComponent, selectors: [["app-user-management"]], decls: 27, vars: 3, consts: [["menu", "matMenu"], [1, "user-management-container"], ["mat-table", "", 1, "users-table", 3, "dataSource"], ["matColumnDef", "email"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "role"], ["matColumnDef", "status"], ["matColumnDef", "createdAt"], ["matColumnDef", "lastLogin"], ["matColumnDef", "actions"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], [3, "color"], ["mat-icon-button", "", 3, "matMenuTriggerFor"], [1, "fas", "fa-ellipsis-v"], ["mat-menu-item", "", 3, "click"], ["mat-header-row", ""], ["mat-row", ""]], template: function UserManagementComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1)(1, "mat-card")(2, "mat-card-header")(3, "mat-card-title");
      \u0275\u0275text(4, "User Management");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "mat-card-content")(6, "table", 2);
      \u0275\u0275elementContainerStart(7, 3);
      \u0275\u0275template(8, UserManagementComponent_th_8_Template, 2, 0, "th", 4)(9, UserManagementComponent_td_9_Template, 2, 1, "td", 5);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementContainerStart(10, 6);
      \u0275\u0275template(11, UserManagementComponent_th_11_Template, 2, 0, "th", 4)(12, UserManagementComponent_td_12_Template, 3, 2, "td", 5);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementContainerStart(13, 7);
      \u0275\u0275template(14, UserManagementComponent_th_14_Template, 2, 0, "th", 4)(15, UserManagementComponent_td_15_Template, 3, 2, "td", 5);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementContainerStart(16, 8);
      \u0275\u0275template(17, UserManagementComponent_th_17_Template, 2, 0, "th", 4)(18, UserManagementComponent_td_18_Template, 3, 3, "td", 5);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementContainerStart(19, 9);
      \u0275\u0275template(20, UserManagementComponent_th_20_Template, 2, 0, "th", 4)(21, UserManagementComponent_td_21_Template, 3, 3, "td", 5);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementContainerStart(22, 10);
      \u0275\u0275template(23, UserManagementComponent_th_23_Template, 2, 0, "th", 4)(24, UserManagementComponent_td_24_Template, 14, 1, "td", 5);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275template(25, UserManagementComponent_tr_25_Template, 1, 0, "tr", 11)(26, UserManagementComponent_tr_26_Template, 1, 0, "tr", 12);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275property("dataSource", ctx.users);
      \u0275\u0275advance(19);
      \u0275\u0275property("matHeaderRowDef", ctx.displayedColumns);
      \u0275\u0275advance();
      \u0275\u0275property("matRowDefColumns", ctx.displayedColumns);
    }
  }, dependencies: [
    CommonModule,
    DatePipe,
    MatTableModule,
    MatTable,
    MatHeaderCellDef,
    MatHeaderRowDef,
    MatColumnDef,
    MatCellDef,
    MatRowDef,
    MatHeaderCell,
    MatCell,
    MatHeaderRow,
    MatRow,
    MatButtonModule,
    MatIconButton,
    MatIconModule,
    MatChipsModule,
    MatChip,
    MatCardModule,
    MatCard,
    MatCardContent,
    MatCardHeader,
    MatCardTitle,
    MatDialogModule,
    MatMenuModule,
    MatMenu,
    MatMenuItem,
    MatMenuTrigger
  ], styles: ["\n\n.user-management-container[_ngcontent-%COMP%] {\n  padding: 20px;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.users-table[_ngcontent-%COMP%] {\n  width: 100%;\n}\nmat-card[_ngcontent-%COMP%] {\n  padding: 20px;\n  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);\n}\n.users-table[_ngcontent-%COMP%] {\n  width: 100%;\n  overflow-x: auto;\n  margin-top: 20px;\n}\nmat-header-cell[_ngcontent-%COMP%], \nmat-cell[_ngcontent-%COMP%] {\n  padding: 10px;\n  text-align: left;\n}\nmat-header-row[_ngcontent-%COMP%], \nmat-row[_ngcontent-%COMP%] {\n  display: table-row;\n}\nmat-header-cell[_ngcontent-%COMP%] {\n  font-weight: bold;\n  background-color: #f4f4f4;\n}\nbutton[mat-icon-button][_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n@media screen and (max-width: 768px) {\n  .users-table[_ngcontent-%COMP%] {\n    display: block;\n    overflow-x: auto;\n  }\n  .users-table[_ngcontent-%COMP%]   mat-header-cell[_ngcontent-%COMP%], \n   .users-table[_ngcontent-%COMP%]   mat-cell[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  mat-card[_ngcontent-%COMP%] {\n    padding: 10px;\n  }\n  .user-management-container[_ngcontent-%COMP%] {\n    padding: 15px;\n  }\n  .users-table[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .users-table[_ngcontent-%COMP%]   mat-row[_ngcontent-%COMP%] {\n    display: block;\n    margin-bottom: 10px;\n  }\n  .users-table[_ngcontent-%COMP%]   mat-header-row[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .users-table[_ngcontent-%COMP%]   mat-row[_ngcontent-%COMP%]   mat-cell[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    padding: 10px;\n    border: 1px solid #ddd;\n    margin-bottom: 10px;\n  }\n  .users-table[_ngcontent-%COMP%]   mat-row[_ngcontent-%COMP%]   mat-cell[_ngcontent-%COMP%]   .mat-chip[_ngcontent-%COMP%] {\n    margin-top: 10px;\n  }\n  .users-table[_ngcontent-%COMP%]   mat-column-createdAt[_ngcontent-%COMP%], \n   .users-table[_ngcontent-%COMP%]   mat-column-lastLogin[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media screen and (max-width: 480px) {\n  .users-table[_ngcontent-%COMP%]   mat-row[_ngcontent-%COMP%]   mat-cell[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n  button[mat-icon-button][_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n/*# sourceMappingURL=user-management.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserManagementComponent, { className: "UserManagementComponent", filePath: "src/app/admin/components/user-management/user-management.component.ts", lineNumber: 212 });
})();
export {
  UserManagementComponent
};
//# sourceMappingURL=chunk-2OSHE6IN.js.map
