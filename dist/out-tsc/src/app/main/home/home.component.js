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
var router_1 = require("@angular/router");
var translation_loader_service_1 = require("@fuse/services/translation-loader.service");
var en_1 = require("./i18n/en");
var tr_1 = require("./i18n/tr");
var platform_browser_1 = require("@angular/platform-browser");
var HomeComponent = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {FuseTranslationLoaderService} _fuseTranslationLoaderService
     */
    function HomeComponent(meta, titleService, activatedRoute, _fuseTranslationLoaderService) {
        this.meta = meta;
        this.titleService = titleService;
        this.activatedRoute = activatedRoute;
        this._fuseTranslationLoaderService = _fuseTranslationLoaderService;
        this._fuseTranslationLoaderService.loadTranslations(en_1.locale, tr_1.locale);
        this.titleService.setTitle("Health Port Blockchain Electronic Health Records (EHR)");
        this.meta.addTags([
            { name: 'robots', content: 'noindex' },
            { httpEquiv: 'Content-Type', content: 'text/html' },
            { charset: 'UTF-8' },
            { property: 'og:title', content: "Health Port Blockchain Electronic Health Records (EHR)" },
            { name: 'description', content: 'Health Port gives patient’s control over storage and access to their personal Electronic Health Record (EHR) via leveraging blockchain technology.' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no' }
        ], true);
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) { return _this.id = params['id']; });
        console.log(this.id);
        this.ncount = 0;
    };
    HomeComponent.prototype.ngAfterViewChecked = function () {
        console.log(this.id);
        if (this.id == "about") {
            document.getElementById("in-help").scrollIntoView();
        }
        if (this.id == "contact") {
            document.getElementById("in-contact").scrollIntoView();
        }
        this.ncount++;
        if (this.ncount > 10) {
            this.id = "";
            this.ncount = 0;
        }
    };
    HomeComponent.prototype.scroll = function (el) {
        console.log(el);
        el.scrollIntoView();
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'home',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.scss']
        }),
        __metadata("design:paramtypes", [platform_browser_1.Meta,
            platform_browser_1.Title,
            router_1.ActivatedRoute,
            translation_loader_service_1.FuseTranslationLoaderService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map