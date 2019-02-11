"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/common/http");
var animations_1 = require("@angular/platform-browser/animations");
var router_1 = require("@angular/router");
var material_moment_adapter_1 = require("@angular/material-moment-adapter");
var material_1 = require("@angular/material");
var core_2 = require("@ngx-translate/core");
require("hammerjs");
var fuse_module_1 = require("@fuse/fuse.module");
var shared_module_1 = require("@fuse/shared.module");
var components_1 = require("@fuse/components");
var fuse_config_1 = require("app/fuse-config");
var app_component_1 = require("app/app.component");
var layout_module_1 = require("app/layout/layout.module");
var home_module_1 = require("app/main/home/home.module");
var about_module_1 = require("app/main/about/about.module");
var legalnotices_module_1 = require("app/main/legalnotices/legalnotices.module");
var signup_module_1 = require("app/main/signup/signup.module");
var login_module_1 = require("app/main/login/login.module");
var myaccount_module_1 = require("app/main/myaccount/myaccount.module");
var appRoutes = [
    {
        path: '**',
        redirectTo: 'home'
    },
    {
        path: 'legalnotices',
        redirectTo: 'legalnotices'
    },
    {
        path: 'login',
        redirectTo: 'login'
    },
    {
        path: 'signup',
        redirectTo: 'signup'
    },
    {
        path: 'myaccount',
        redirectTo: 'myaccount'
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                animations_1.BrowserAnimationsModule,
                http_1.HttpClientModule,
                router_1.RouterModule.forRoot(appRoutes),
                core_2.TranslateModule.forRoot(),
                // Material moment date module
                material_moment_adapter_1.MatMomentDateModule,
                // Material
                material_1.MatButtonModule,
                material_1.MatIconModule,
                // Fuse modules
                fuse_module_1.FuseModule.forRoot(fuse_config_1.fuseConfig),
                components_1.FuseProgressBarModule,
                shared_module_1.FuseSharedModule,
                components_1.FuseSidebarModule,
                components_1.FuseThemeOptionsModule,
                // App modules
                layout_module_1.LayoutModule,
                home_module_1.HomeModule,
                about_module_1.AboutModule,
                legalnotices_module_1.LegalnoticesModule,
                signup_module_1.SignupModule,
                login_module_1.LoginModule,
                myaccount_module_1.MyaccountModule
            ],
            bootstrap: [
                app_component_1.AppComponent
            ]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map