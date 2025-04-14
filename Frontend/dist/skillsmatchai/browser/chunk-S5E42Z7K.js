import {
  MatGridList,
  MatGridListModule,
  MatGridTile
} from "./chunk-BBIAJ2Q6.js";
import "./chunk-TY75XVNR.js";
import {
  MatProgressBar,
  MatProgressBarModule
} from "./chunk-CG4BWGIE.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-7XCVZ5KQ.js";
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
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-HLRG3ATU.js";

// src/app/admin/components/system-monitoring/system-monitoring.component.ts
function SystemMonitoringComponent_mat_grid_tile_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-grid-tile")(1, "mat-card", 3)(2, "mat-card-header")(3, "mat-card-title");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "mat-card-subtitle")(6, "mat-icon");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "mat-card-content");
    \u0275\u0275element(10, "mat-progress-bar", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "mat-card-actions")(12, "button", 5);
    \u0275\u0275listener("click", function SystemMonitoringComponent_mat_grid_tile_2_Template_button_click_12_listener() {
      const metric_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.viewDetails(metric_r2));
    });
    \u0275\u0275text(13, " View Details ");
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
    \u0275\u0275textInterpolate2(" ", metric_r2.value, " ", metric_r2.unit, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("mode", "determinate")("value", metric_r2.value)("color", ctx_r2.getStatusColor(metric_r2.status));
  }
}
var SystemMonitoringComponent = class _SystemMonitoringComponent {
  metrics = [
    {
      name: "CPU Usage",
      value: 75,
      unit: "%",
      status: "warning",
      trend: "up"
    },
    {
      name: "Memory Usage",
      value: 60,
      unit: "%",
      status: "normal",
      trend: "stable"
    },
    {
      name: "Disk Space",
      value: 85,
      unit: "%",
      status: "warning",
      trend: "up"
    },
    {
      name: "Network Traffic",
      value: 45,
      unit: "Mbps",
      status: "normal",
      trend: "down"
    }
  ];
  constructor() {
  }
  ngOnInit() {
  }
  getStatusColor(status) {
    switch (status) {
      case "normal":
        return "primary";
      case "warning":
        return "accent";
      case "critical":
        return "warn";
      default:
        return "";
    }
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
  viewDetails(metric) {
    console.log("View details for:", metric);
  }
  static \u0275fac = function SystemMonitoringComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SystemMonitoringComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SystemMonitoringComponent, selectors: [["app-system-monitoring"]], decls: 3, vars: 1, consts: [[1, "system-monitoring-container"], ["cols", "2", "rowHeight", "200px", "gutterSize", "16"], [4, "ngFor", "ngForOf"], [1, "metric-card"], [3, "mode", "value", "color"], ["mat-button", "", "color", "primary", 3, "click"]], template: function SystemMonitoringComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "mat-grid-list", 1);
      \u0275\u0275template(2, SystemMonitoringComponent_mat_grid_tile_2_Template, 14, 9, "mat-grid-tile", 2);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.metrics);
    }
  }, dependencies: [CommonModule, NgForOf, MatCardModule, MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle, MatGridListModule, MatGridList, MatGridTile, MatIconModule, MatIcon, MatProgressBarModule, MatProgressBar, MatButtonModule, MatButton], styles: ["\n\n.system-monitoring-container[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.metric-card[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n.trend-up[_ngcontent-%COMP%] {\n  color: #4caf50;\n}\n.trend-down[_ngcontent-%COMP%] {\n  color: #f44336;\n}\n.trend-stable[_ngcontent-%COMP%] {\n  color: #2196f3;\n}\n/*# sourceMappingURL=system-monitoring.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SystemMonitoringComponent, { className: "SystemMonitoringComponent", filePath: "src/app/admin/components/system-monitoring/system-monitoring.component.ts", lineNumber: 81 });
})();
export {
  SystemMonitoringComponent
};
//# sourceMappingURL=chunk-S5E42Z7K.js.map
