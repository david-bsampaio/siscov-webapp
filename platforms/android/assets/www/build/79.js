webpackJsonp([79],{

/***/ 1092:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RangeLayout1Module", function() { return RangeLayout1Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__range_layout_1__ = __webpack_require__(1242);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RangeLayout1Module = (function () {
    function RangeLayout1Module() {
    }
    RangeLayout1Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__range_layout_1__["a" /* RangeLayout1 */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__range_layout_1__["a" /* RangeLayout1 */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__range_layout_1__["a" /* RangeLayout1 */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
        })
    ], RangeLayout1Module);
    return RangeLayout1Module;
}());

//# sourceMappingURL=range-layout-1.module.js.map

/***/ }),

/***/ 1242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RangeLayout1; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RangeLayout1 = (function () {
    function RangeLayout1() {
        var _this = this;
        this.onEvent = function (event, item) {
            if (_this.events[event]) {
                _this.events[event](item);
            }
        };
    }
    RangeLayout1.prototype.ngOnChanges = function (changes) {
        this.data = changes['data'].currentValue;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('data'),
        __metadata("design:type", Object)
    ], RangeLayout1.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('events'),
        __metadata("design:type", Object)
    ], RangeLayout1.prototype, "events", void 0);
    RangeLayout1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'range-button-layout-1',template:/*ion-inline-start:"D:\equipe\ionic\particular\siscov-webapp\src\components\range\layout-1\range.html"*/'<ion-list *ngIf="data != null">\n\n    <ion-list-header no-lines color="primary" no-margin text-uppercase>\n\n        <p ion-text color="accentLight">{{data.title}}</p>\n\n        <p ion-text color="brown" item-end>{{data.value}}</p>\n\n    </ion-list-header>\n\n    <ion-item>\n\n        <ion-range [(ngModel)]="data.value" (ionChange)="onEvent(\'onChange\', data.value, $event)">\n\n        </ion-range>\n\n    </ion-item>\n\n</ion-list>\n\n'/*ion-inline-end:"D:\equipe\ionic\particular\siscov-webapp\src\components\range\layout-1\range.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], RangeLayout1);
    return RangeLayout1;
}());

//# sourceMappingURL=range-layout-1.js.map

/***/ })

});
//# sourceMappingURL=79.js.map