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
var LegalnoticesComponent = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {FuseTranslationLoaderService} _fuseTranslationLoaderService
     */
    function LegalnoticesComponent(meta, titleService, activatedRoute, _fuseTranslationLoaderService) {
        this.meta = meta;
        this.titleService = titleService;
        this.activatedRoute = activatedRoute;
        this._fuseTranslationLoaderService = _fuseTranslationLoaderService;
        this.privacy_show = false;
        this.terms_policy_show = false;
        this.terms_use_show = false;
        this._fuseTranslationLoaderService.loadTranslations(en_1.locale, tr_1.locale);
        this.titleService.setTitle("Legal Notices from Health Port");
        this.meta.addTags([
            { name: 'robots', content: 'noindex' },
            { httpEquiv: 'Content-Type', content: 'text/html' },
            { charset: 'UTF-8' },
            { property: 'og:title', content: "Legal Notices from Health Port" },
            { name: 'description', content: 'Review all legal notices prior to using Health Port to manage your personal electronic health record (EHR) on the blockchain' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no' }
        ], true);
    }
    LegalnoticesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) { return _this.id = params['id']; });
        console.log(this.id);
        this.ncount = 0;
    };
    LegalnoticesComponent.prototype.ngAfterViewChecked = function () {
        console.log(this.id);
        if (this.id == "privacy_policy") {
            document.getElementById("in_privacy_policy").scrollIntoView();
        }
        if (this.id == "terms_service") {
            document.getElementById("in_terms_service").scrollIntoView();
        }
        if (this.id == "terms_use") {
            document.getElementById("in_terms_use").scrollIntoView();
        }
        this.ncount++;
        if (this.ncount > 10) {
            this.id = "";
            this.ncount = 0;
        }
    };
    LegalnoticesComponent.prototype.scroll = function (el) {
        console.log(el);
        el.scrollIntoView();
    };
    LegalnoticesComponent.prototype.continue_read = function (el) {
        if (el == "privacy")
            this.privacy_show = !this.privacy_show;
        else if (el == "terms_policy")
            this.terms_policy_show = !this.terms_policy_show;
        else if (el == "terms_use")
            this.terms_use_show = !this.terms_use_show;
    };
    LegalnoticesComponent = __decorate([
        core_1.Component({
            selector: 'legalnotices',
            templateUrl: './legalnotices.component.html',
            styleUrls: ['./legalnotices.component.scss']
        }),
        __metadata("design:paramtypes", [platform_browser_1.Meta,
            platform_browser_1.Title,
            router_1.ActivatedRoute,
            translation_loader_service_1.FuseTranslationLoaderService])
    ], LegalnoticesComponent);
    return LegalnoticesComponent;
}());
exports.LegalnoticesComponent = LegalnoticesComponent;
//# sourceMappingURL=legalnotices.component.js.map