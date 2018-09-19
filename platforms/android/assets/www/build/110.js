webpackJsonp([110],{

/***/ 1051:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckBoxLayout4Module", function() { return CheckBoxLayout4Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__check_box_layout_4__ = __webpack_require__(1201);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CheckBoxLayout4Module = (function () {
    function CheckBoxLayout4Module() {
    }
    CheckBoxLayout4Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__check_box_layout_4__["a" /* CheckBoxLayout4 */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__check_box_layout_4__["a" /* CheckBoxLayout4 */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__check_box_layout_4__["a" /* CheckBoxLayout4 */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
        })
    ], CheckBoxLayout4Module);
    return CheckBoxLayout4Module;
}());

//# sourceMappingURL=check-box-layout-4.module.js.map

/***/ }),

/***/ 1201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckBoxLayout4; });
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

var CheckBoxLayout4 = (function () {
    function CheckBoxLayout4() {
        var _this = this;
        this.onEvent = function (event, item) {
            if (_this.events[event]) {
                _this.events[event](item);
            }
        };
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('data'),
        __metadata("design:type", Object)
    ], CheckBoxLayout4.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('events'),
        __metadata("design:type", Object)
    ], CheckBoxLayout4.prototype, "events", void 0);
    CheckBoxLayout4 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'check-box-layout-4',template:/*ion-inline-start:"D:\equipe\ionic\particular\siscov-webapp\src\components\check-box\layout-4\check-box.html"*/'<!--Themes Two Columns -->\n\n<ion-grid no-padding *ngIf="data != null">\n\n  <ion-row no-padding>\n\n    <ion-col col-6 *ngFor="let item of data" (tap)="onEvent(\'onButton\', item)">\n\n      <!-- Checkbox List -->\n\n      <ion-item no-lines>\n\n        <ion-label item-title>{{item.title}}</ion-label>\n\n        <ion-checkbox [checked]="item.favorite"></ion-checkbox>\n\n      </ion-item>\n\n    </ion-col>\n\n  </ion-row>\n\n</ion-grid>\n\n'/*ion-inline-end:"D:\equipe\ionic\particular\siscov-webapp\src\components\check-box\layout-4\check-box.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], CheckBoxLayout4);
    return CheckBoxLayout4;
}());

//# sourceMappingURL=check-box-layout-4.js.map

/***/ })

});
//# sourceMappingURL=110.js.map