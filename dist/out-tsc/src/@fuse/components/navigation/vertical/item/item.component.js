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
var FuseNavVerticalItemComponent = /** @class */ (function () {
    /**
     * Constructor
     */
    function FuseNavVerticalItemComponent() {
        this.classes = 'nav-item';
    }
    __decorate([
        core_1.HostBinding('class'),
        __metadata("design:type", Object)
    ], FuseNavVerticalItemComponent.prototype, "classes", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], FuseNavVerticalItemComponent.prototype, "item", void 0);
    FuseNavVerticalItemComponent = __decorate([
        core_1.Component({
            selector: 'fuse-nav-vertical-item',
            templateUrl: './item.component.html',
            styleUrls: ['./item.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], FuseNavVerticalItemComponent);
    return FuseNavVerticalItemComponent;
}());
exports.FuseNavVerticalItemComponent = FuseNavVerticalItemComponent;
//# sourceMappingURL=item.component.js.map