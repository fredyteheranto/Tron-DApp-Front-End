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
var home_component_1 = require("./home.component");
var material_1 = require("@angular/material");
var routes = [
    {
        path: 'home',
        component: home_component_1.HomeComponent
    },
    {
        path: "home/:id",
        component: home_component_1.HomeComponent
    }
];
var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        core_1.NgModule({
            declarations: [
                home_component_1.HomeComponent
            ],
            imports: [
                router_1.RouterModule.forChild(routes),
                material_1.MatButtonModule,
                material_1.MatIconModule,
                core_2.TranslateModule,
                shared_module_1.FuseSharedModule
            ],
            exports: [
                home_component_1.HomeComponent
            ]
        })
    ], HomeModule);
    return HomeModule;
}());
exports.HomeModule = HomeModule;
//# sourceMappingURL=home.module.js.map