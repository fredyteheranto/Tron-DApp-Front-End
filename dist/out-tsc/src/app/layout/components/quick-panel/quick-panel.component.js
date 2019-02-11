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
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var navigation_service_1 = require("@fuse/components/navigation/navigation.service");
var QuickPanelComponent = /** @class */ (function () {
    /**
     * Constructor
     */
    function QuickPanelComponent(_fuseNavigationService) {
        this._fuseNavigationService = _fuseNavigationService;
        // Set the private defaults
        this._unsubscribeAll = new rxjs_1.Subject();
    }
    /**
     * On init
     */
    QuickPanelComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Load the navigation either from the input or from the service
        this.navigation = this.navigation || this._fuseNavigationService.getCurrentNavigation();
        // Subscribe to the current navigation changes
        this._fuseNavigationService.onNavigationChanged
            .pipe(operators_1.takeUntil(this._unsubscribeAll))
            .subscribe(function () {
            _this.navigation = _this._fuseNavigationService.getCurrentNavigation();
        });
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], QuickPanelComponent.prototype, "navigation", void 0);
    QuickPanelComponent = __decorate([
        core_1.Component({
            selector: 'quick-panel',
            templateUrl: './quick-panel.component.html',
            styleUrls: ['./quick-panel.component.scss'],
            encapsulation: core_1.ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [navigation_service_1.FuseNavigationService])
    ], QuickPanelComponent);
    return QuickPanelComponent;
}());
exports.QuickPanelComponent = QuickPanelComponent;
//# sourceMappingURL=quick-panel.component.js.map