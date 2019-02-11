"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var translation_loader_service_1 = require("@fuse/services/translation-loader.service");
var en_1 = require("./i18n/en");
var tr_1 = require("./i18n/tr");
var platform_browser_1 = require("@angular/platform-browser");
var LoginComponent = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {FuseTranslationLoaderService} _fuseTranslationLoaderService
     */
    function LoginComponent(meta, titleService, _fuseTranslationLoaderService) {
        this.meta = meta;
        this.titleService = titleService;
        this._fuseTranslationLoaderService = _fuseTranslationLoaderService;
        this._fuseTranslationLoaderService.loadTranslations(en_1.locale, tr_1.locale);
        this.titleService.setTitle("Login to Health Port");
        this.meta.addTags([
            { name: 'robots', content: 'noindex' },
            { httpEquiv: 'Content-Type', content: 'text/html' },
            { charset: 'UTF-8' },
            { property: 'og:title', content: "Login to Health Port" },
            { name: 'description', content: 'Login to manage your Health Port account.' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no' }
        ], true);
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.scss']
        }),
        __metadata("design:paramtypes", [platform_browser_1.Meta,
            platform_browser_1.Title,
            translation_loader_service_1.FuseTranslationLoaderService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map