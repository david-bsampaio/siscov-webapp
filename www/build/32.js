webpackJsonp([32,83],{

/***/ 1089:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QRcodeLayout1Module", function() { return QRcodeLayout1Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__qrcode_layout_1__ = __webpack_require__(1239);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var QRcodeLayout1Module = (function () {
    function QRcodeLayout1Module() {
    }
    QRcodeLayout1Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__qrcode_layout_1__["a" /* QRcodeLayout1 */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__qrcode_layout_1__["a" /* QRcodeLayout1 */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__qrcode_layout_1__["a" /* QRcodeLayout1 */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
        })
    ], QRcodeLayout1Module);
    return QRcodeLayout1Module;
}());

//# sourceMappingURL=qrcode-layout-1.module.js.map

/***/ }),

/***/ 1135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemDetailsPageQRCodeModule", function() { return ItemDetailsPageQRCodeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__item_details_qrcode__ = __webpack_require__(1286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_qrcode_layout_1_qrcode_layout_1_module__ = __webpack_require__(1089);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ItemDetailsPageQRCodeModule = (function () {
    function ItemDetailsPageQRCodeModule() {
    }
    ItemDetailsPageQRCodeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__item_details_qrcode__["a" /* ItemDetailsPageQRCode */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__item_details_qrcode__["a" /* ItemDetailsPageQRCode */]),
                __WEBPACK_IMPORTED_MODULE_3__components_qrcode_layout_1_qrcode_layout_1_module__["QRcodeLayout1Module"]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
        })
    ], ItemDetailsPageQRCodeModule);
    return ItemDetailsPageQRCodeModule;
}());

//# sourceMappingURL=item-details-qrcode.module.js.map

/***/ }),

/***/ 1239:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QRcodeLayout1; });
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

var QRcodeLayout1 = (function () {
    function QRcodeLayout1() {
    }
    QRcodeLayout1.prototype.onEvent = function (event, result) {
        if (this.events[event]) {
            this.events[event](result);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], QRcodeLayout1.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], QRcodeLayout1.prototype, "events", void 0);
    QRcodeLayout1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'qrcode-layout-1',template:/*ion-inline-start:"D:\equipe\ionic\particular\siscov-webapp\src\components\qrcode\layout-1\qrcode.html"*/'<ion-content has-header>\n\n  <ion-grid no-padding>\n\n    <ion-row>\n\n      <ion-col col-12>\n\n        <ion-list no-margin>\n\n          <ion-item padding-right text-wrap>\n\n            <h1 item-title>{{data.format}}</h1>\n\n          </ion-item>\n\n          <ion-item no-lines padding-right text-wrap>\n\n            <p item-subtitle>{{data.text}}</p>\n\n          </ion-item>\n\n        </ion-list>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\equipe\ionic\particular\siscov-webapp\src\components\qrcode\layout-1\qrcode.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], QRcodeLayout1);
    return QRcodeLayout1;
}());

//# sourceMappingURL=qrcode-layout-1.js.map

/***/ }),

/***/ 1286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemDetailsPageQRCode; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_native__ = __webpack_require__(614);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ItemDetailsPageQRCode = (function () {
    function ItemDetailsPageQRCode(navCtrl, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.params = {};
        // If we navigated to this page, we will have an item available as a nav param
        this.page = navParams.get('page');
        this.service = navParams.get('service');
        if (this.service) {
            this.params = this.service.prepareParams(this.page, navCtrl);
            this.service.load(this.page).subscribe(function (snapshot) {
                _this.params.data = snapshot;
            });
            this.scanner();
        }
        else {
            navCtrl.setRoot("HomePage");
        }
    }
    ItemDetailsPageQRCode.prototype.scanner = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_ionic_native__["a" /* BarcodeScanner */].scan()
            .then(function (result) {
            _this.params.data = result;
        })
            .catch(function (error) {
            alert(error);
        });
    };
    ItemDetailsPageQRCode = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"D:\equipe\ionic\particular\siscov-webapp\src\pages\item-details-qrcode\item-details-qrcode.html"*/'<!-- QRCode component-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title text-left text-uppercase>{{params.title}}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<!--Content-->\n\n<qrcode-layout-1 *ngIf="params.qrcodeLayout1" [data]="params.data" [events]="params.events">\n\n</qrcode-layout-1>\n\n'/*ion-inline-end:"D:\equipe\ionic\particular\siscov-webapp\src\pages\item-details-qrcode\item-details-qrcode.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
    ], ItemDetailsPageQRCode);
    return ItemDetailsPageQRCode;
}());

//# sourceMappingURL=item-details-qrcode.js.map

/***/ })

});
//# sourceMappingURL=32.js.map