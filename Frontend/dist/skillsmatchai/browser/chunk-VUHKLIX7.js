import {
  MatGridList,
  MatGridListModule,
  MatGridTile
} from "./chunk-BBIAJ2Q6.js";
import "./chunk-TY75XVNR.js";
import {
  MatOption,
  MatSelect,
  MatSelectModule
} from "./chunk-E3ACTAIE.js";
import "./chunk-A56WDMG5.js";
import "./chunk-PPMKGYHC.js";
import "./chunk-Y6AS25U4.js";
import {
  MatFormFieldModule
} from "./chunk-UN2WUTJ4.js";
import "./chunk-OIZAD6NR.js";
import "./chunk-EBTVSD4W.js";
import "./chunk-JAHJITDP.js";
import "./chunk-JWDN46VP.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-7XCVZ5KQ.js";
import {
  MatFormField,
  MatLabel
} from "./chunk-ZR2S3JFV.js";
import {
  CommonModule,
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
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-HLRG3ATU.js";

// src/app/admin/components/platform-analytics/platform-analytics.component.ts
function PlatformAnalyticsComponent_mat_option_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const range_r1 = ctx.$implicit;
    \u0275\u0275property("value", range_r1.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", range_r1.viewValue, " ");
  }
}
function PlatformAnalyticsComponent_mat_grid_tile_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-grid-tile")(1, "mat-card", 8)(2, "mat-card-header")(3, "mat-card-title");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "mat-card-subtitle")(6, "mat-icon");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "mat-card-content")(10, "div", 9);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const metric_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(metric_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r2.getTrendClass(metric_r2.trend));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getTrendIcon(metric_r2.trend), " ");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", metric_r2.change, "% change ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", metric_r2.value, " ", metric_r2.unit, " ");
  }
}
var PlatformAnalyticsComponent = class _PlatformAnalyticsComponent {
  selectedTimeRange = "7d";
  timeRanges = [
    { value: "24h", viewValue: "Last 24 Hours" },
    { value: "7d", viewValue: "Last 7 Days" },
    { value: "30d", viewValue: "Last 30 Days" },
    { value: "90d", viewValue: "Last 90 Days" }
  ];
  metrics = [
    {
      name: "Active Users",
      value: 1250,
      change: 12.5,
      unit: "users",
      trend: "up"
    },
    {
      name: "Job Postings",
      value: 342,
      change: -3.2,
      unit: "jobs",
      trend: "down"
    },
    {
      name: "Applications",
      value: 1256,
      change: 8.7,
      unit: "applications",
      trend: "up"
    },
    {
      name: "Matches Made",
      value: 89,
      change: 0,
      unit: "matches",
      trend: "stable"
    }
  ];
  constructor() {
  }
  ngOnInit() {
  }
  getTrendIcon(trend) {
    switch (trend) {
      case "up":
        return "trending_up";
      case "down":
        return "trending_down";
      default:
        return "trending_flat";
    }
  }
  getTrendClass(trend) {
    return `trend-${trend}`;
  }
  exportData() {
    console.log("Export analytics data");
  }
  refreshData() {
    console.log("Refresh analytics data");
  }
  static \u0275fac = function PlatformAnalyticsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PlatformAnalyticsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PlatformAnalyticsComponent, selectors: [["app-platform-analytics"]], decls: 22, vars: 3, consts: [[1, "platform-analytics-container"], [3, "valueChange", "value"], [3, "value", 4, "ngFor", "ngForOf"], ["cols", "2", "rowHeight", "200px", "gutterSize", "16"], [4, "ngFor", "ngForOf"], ["mat-button", "", "color", "primary", 3, "click"], ["mat-button", "", "color", "accent", 3, "click"], [3, "value"], [1, "metric-card"], [1, "metric-value"]], template: function PlatformAnalyticsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "mat-card")(2, "mat-card-header")(3, "mat-card-title");
      \u0275\u0275text(4, "Platform Analytics");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "mat-form-field")(6, "mat-label");
      \u0275\u0275text(7, "Time Range");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "mat-select", 1);
      \u0275\u0275twoWayListener("valueChange", function PlatformAnalyticsComponent_Template_mat_select_valueChange_8_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedTimeRange, $event) || (ctx.selectedTimeRange = $event);
        return $event;
      });
      \u0275\u0275template(9, PlatformAnalyticsComponent_mat_option_9_Template, 2, 2, "mat-option", 2);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(10, "mat-card-content")(11, "mat-grid-list", 3);
      \u0275\u0275template(12, PlatformAnalyticsComponent_mat_grid_tile_12_Template, 12, 7, "mat-grid-tile", 4);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "mat-card-actions")(14, "button", 5);
      \u0275\u0275listener("click", function PlatformAnalyticsComponent_Template_button_click_14_listener() {
        return ctx.exportData();
      });
      \u0275\u0275elementStart(15, "mat-icon");
      \u0275\u0275text(16, "download");
      \u0275\u0275elementEnd();
      \u0275\u0275text(17, " Export Data ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "button", 6);
      \u0275\u0275listener("click", function PlatformAnalyticsComponent_Template_button_click_18_listener() {
        return ctx.refreshData();
      });
      \u0275\u0275elementStart(19, "mat-icon");
      \u0275\u0275text(20, "refresh");
      \u0275\u0275elementEnd();
      \u0275\u0275text(21, " Refresh ");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275twoWayProperty("value", ctx.selectedTimeRange);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.timeRanges);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.metrics);
    }
  }, dependencies: [CommonModule, NgForOf, MatCardModule, MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle, MatGridListModule, MatGridList, MatGridTile, MatIconModule, MatIcon, MatButtonModule, MatButton, MatSelectModule, MatFormField, MatLabel, MatSelect, MatOption, MatFormFieldModule], styles: ["\n\n.platform-analytics-container[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.metric-card[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n.metric-value[_ngcontent-%COMP%] {\n  font-size: 2em;\n  font-weight: bold;\n  text-align: center;\n  margin-top: 20px;\n}\n.trend-up[_ngcontent-%COMP%] {\n  color: #4caf50;\n}\n.trend-down[_ngcontent-%COMP%] {\n  color: #f44336;\n}\n.trend-stable[_ngcontent-%COMP%] {\n  color: #2196f3;\n}\nmat-card-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n/*# sourceMappingURL=platform-analytics.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PlatformAnalyticsComponent, { className: "PlatformAnalyticsComponent", filePath: "src/app/admin/components/platform-analytics/platform-analytics.component.ts", lineNumber: 119 });
})();
export {
  PlatformAnalyticsComponent
};
//# sourceMappingURL=chunk-VUHKLIX7.js.map
