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
var animations_1 = require("@fuse/animations");
var mat_colors_1 = require("@fuse/mat-colors");
var FuseMaterialColorPickerComponent = /** @class */ (function () {
    /**
     * Constructor
     */
    function FuseMaterialColorPickerComponent() {
        // Set the defaults
        this.colors = mat_colors_1.MatColors.all;
        this.hues = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', 'A100', 'A200', 'A400', 'A700'];
        this.selectedFg = '';
        this.selectedHue = '';
        this.selectedPalette = '';
        this.view = 'palettes';
        this.onValueChange = new core_1.EventEmitter();
        this.selectedPaletteChange = new core_1.EventEmitter();
        this.selectedHueChange = new core_1.EventEmitter();
        this.selectedClassChange = new core_1.EventEmitter();
        this.selectedBgChange = new core_1.EventEmitter();
        this.selectedFgChange = new core_1.EventEmitter();
        // Set the private defaults
        this._selectedClass = '';
        this._selectedBg = '';
    }
    Object.defineProperty(FuseMaterialColorPickerComponent.prototype, "selectedClass", {
        get: function () {
            return this._selectedClass;
        },
        // -----------------------------------------------------------------------------------------------------
        // @ Accessors
        // -----------------------------------------------------------------------------------------------------
        /**
         * Selected class
         *
         * @param value
         */
        set: function (value) {
            if (value && value !== '' && this._selectedClass !== value) {
                var color = value.split('-');
                if (color.length >= 5) {
                    this.selectedPalette = color[1] + '-' + color[2];
                    this.selectedHue = color[3];
                }
                else {
                    this.selectedPalette = color[1];
                    this.selectedHue = color[2];
                }
            }
            this._selectedClass = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FuseMaterialColorPickerComponent.prototype, "selectedBg", {
        get: function () {
            return this._selectedBg;
        },
        /**
         * Selected bg
         *
         * @param value
         */
        set: function (value) {
            if (value && value !== '' && this._selectedBg !== value) {
                for (var palette in this.colors) {
                    if (!this.colors.hasOwnProperty(palette)) {
                        continue;
                    }
                    for (var _i = 0, _a = this.hues; _i < _a.length; _i++) {
                        var hue = _a[_i];
                        if (this.colors[palette][hue] === value) {
                            this.selectedPalette = palette;
                            this.selectedHue = hue;
                            break;
                        }
                    }
                }
            }
            this._selectedBg = value;
        },
        enumerable: true,
        configurable: true
    });
    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On changes
     *
     * @param changes
     */
    FuseMaterialColorPickerComponent.prototype.ngOnChanges = function (changes) {
        if (changes.selectedBg && changes.selectedBg.currentValue === '' ||
            changes.selectedClass && changes.selectedClass.currentValue === '' ||
            changes.selectedPalette && changes.selectedPalette.currentValue === '') {
            this.removeColor();
            return;
        }
        if (changes.selectedPalette || changes.selectedHue || changes.selectedClass || changes.selectedBg) {
            this.updateSelectedColor();
        }
    };
    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Select palette
     *
     * @param palette
     */
    FuseMaterialColorPickerComponent.prototype.selectPalette = function (palette) {
        this.selectedPalette = palette;
        this.updateSelectedColor();
        this.view = 'hues';
    };
    /**
     * Select hue
     *
     * @param hue
     */
    FuseMaterialColorPickerComponent.prototype.selectHue = function (hue) {
        this.selectedHue = hue;
        this.updateSelectedColor();
    };
    /**
     * Remove color
     */
    FuseMaterialColorPickerComponent.prototype.removeColor = function () {
        this.selectedPalette = '';
        this.selectedHue = '';
        this.updateSelectedColor();
        this.view = 'palettes';
    };
    /**
     * Update selected color
     */
    FuseMaterialColorPickerComponent.prototype.updateSelectedColor = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.selectedColor && _this.selectedPalette === _this.selectedColor.palette && _this.selectedHue === _this.selectedColor.hue) {
                return;
            }
            if (_this.selectedPalette !== '' && _this.selectedHue !== '') {
                _this.selectedBg = mat_colors_1.MatColors.getColor(_this.selectedPalette)[_this.selectedHue];
                _this.selectedFg = mat_colors_1.MatColors.getColor(_this.selectedPalette).contrast[_this.selectedHue];
                _this.selectedClass = 'mat-' + _this.selectedPalette + '-' + _this.selectedHue + '-bg';
            }
            else {
                _this.selectedBg = '';
                _this.selectedFg = '';
            }
            _this.selectedColor = {
                palette: _this.selectedPalette,
                hue: _this.selectedHue,
                class: _this.selectedClass,
                bg: _this.selectedBg,
                fg: _this.selectedFg
            };
            _this.selectedPaletteChange.emit(_this.selectedPalette);
            _this.selectedHueChange.emit(_this.selectedHue);
            _this.selectedClassChange.emit(_this.selectedClass);
            _this.selectedBgChange.emit(_this.selectedBg);
            _this.selectedFgChange.emit(_this.selectedFg);
            _this.value = _this.selectedColor;
            _this.onValueChange.emit(_this.selectedColor);
        });
    };
    /**
     * Go back to palette selection
     */
    FuseMaterialColorPickerComponent.prototype.backToPaletteSelection = function () {
        this.view = 'palettes';
    };
    /**
     * On menu open
     */
    FuseMaterialColorPickerComponent.prototype.onMenuOpen = function () {
        if (this.selectedPalette === '') {
            this.view = 'palettes';
        }
        else {
            this.view = 'hues';
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], FuseMaterialColorPickerComponent.prototype, "selectedPalette", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], FuseMaterialColorPickerComponent.prototype, "selectedHue", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], FuseMaterialColorPickerComponent.prototype, "selectedFg", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], FuseMaterialColorPickerComponent.prototype, "value", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], FuseMaterialColorPickerComponent.prototype, "onValueChange", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], FuseMaterialColorPickerComponent.prototype, "selectedPaletteChange", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], FuseMaterialColorPickerComponent.prototype, "selectedHueChange", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], FuseMaterialColorPickerComponent.prototype, "selectedClassChange", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], FuseMaterialColorPickerComponent.prototype, "selectedBgChange", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], FuseMaterialColorPickerComponent.prototype, "selectedFgChange", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], FuseMaterialColorPickerComponent.prototype, "selectedClass", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], FuseMaterialColorPickerComponent.prototype, "selectedBg", null);
    FuseMaterialColorPickerComponent = __decorate([
        core_1.Component({
            selector: 'fuse-material-color-picker',
            templateUrl: './material-color-picker.component.html',
            styleUrls: ['./material-color-picker.component.scss'],
            animations: animations_1.fuseAnimations,
            encapsulation: core_1.ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [])
    ], FuseMaterialColorPickerComponent);
    return FuseMaterialColorPickerComponent;
}());
exports.FuseMaterialColorPickerComponent = FuseMaterialColorPickerComponent;
//# sourceMappingURL=material-color-picker.component.js.map