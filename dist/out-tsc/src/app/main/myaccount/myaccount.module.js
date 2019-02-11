"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var core_2 = require("@ngx-translate/core");
var shared_module_1 = require("@fuse/shared.module");
var myaccount_component_1 = require("./myaccount.component");
var material_1 = require("@angular/material");
var ngx_charts_1 = require("@swimlane/ngx-charts");
var routes = [
    {
        path: 'myaccount',
        component: myaccount_component_1.MyaccountComponent
    }
];
var MyaccountModule = /** @class */ (function () {
    function MyaccountModule() {
    }
    MyaccountModule = __decorate([
        core_1.NgModule({
            declarations: [
                myaccount_component_1.MyaccountComponent
            ],
            imports: [
                router_1.RouterModule.forChild(routes),
                material_1.MatButtonModule,
                material_1.MatIconModule,
                material_1.MatCheckboxModule,
                material_1.MatGridListModule,
                ngx_charts_1.NgxChartsModule,
                core_2.TranslateModule,
                shared_module_1.FuseSharedModule
            ],
            exports: [
                myaccount_component_1.MyaccountComponent
            ]
        })
    ], MyaccountModule);
    return MyaccountModule;
}());
exports.MyaccountModule = MyaccountModule;
//# sourceMappingURL=myaccount.module.js.map