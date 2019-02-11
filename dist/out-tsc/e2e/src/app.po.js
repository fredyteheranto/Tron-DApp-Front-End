"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var Fuse2Page = /** @class */ (function () {
    function Fuse2Page() {
    }
    Fuse2Page.prototype.navigateTo = function () {
        return protractor_1.browser.get('/');
    };
    Fuse2Page.prototype.getParagraphText = function () {
        return protractor_1.element(protractor_1.by.css('app-root h1')).getText();
    };
    return Fuse2Page;
}());
exports.Fuse2Page = Fuse2Page;
//# sourceMappingURL=app.po.js.map