webpackJsonp([31,64],{

/***/ 1107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerModule", function() { return SpinnerModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__spinner__ = __webpack_require__(1257);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SpinnerModule = (function () {
    function SpinnerModule() {
    }
    SpinnerModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__spinner__["a" /* Spinner */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__spinner__["a" /* Spinner */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__spinner__["a" /* Spinner */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
        })
    ], SpinnerModule);
    return SpinnerModule;
}());

//# sourceMappingURL=spinner.module.js.map

/***/ }),

/***/ 1141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemDetailsPageSpinnerModule", function() { return ItemDetailsPageSpinnerModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__item_details_spinner__ = __webpack_require__(1292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_spinner_spinner_module__ = __webpack_require__(1107);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ItemDetailsPageSpinnerModule = (function () {
    function ItemDetailsPageSpinnerModule() {
    }
    ItemDetailsPageSpinnerModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__item_details_spinner__["a" /* ItemDetailsPageSpinner */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__item_details_spinner__["a" /* ItemDetailsPageSpinner */]),
                __WEBPACK_IMPORTED_MODULE_3__components_spinner_spinner_module__["SpinnerModule"]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
        })
    ], ItemDetailsPageSpinnerModule);
    return ItemDetailsPageSpinnerModule;
}());

//# sourceMappingURL=item-details-spinner.module.js.map

/***/ }),

/***/ 1257:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Spinner; });
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

var Spinner = (function () {
    function Spinner() {
        var _this = this;
        this.getData = function () {
            return _this.data;
        };
    }
    Spinner.prototype.ngAfterViewInit = function () {
        this.path = "assets/svg/" + this.data.icon + ".svg";
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('data'),
        __metadata("design:type", Object)
    ], Spinner.prototype, "data", void 0);
    Spinner = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'spinner',template:/*ion-inline-start:"D:\equipe\ionic\particular\siscov-webapp\src\components\spinner\spinner.html"*/'<!-- Theme Spinner -->\n\n<img [src]="path" />\n\n'/*ion-inline-end:"D:\equipe\ionic\particular\siscov-webapp\src\components\spinner\spinner.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], Spinner);
    return Spinner;
}());

//# sourceMappingURL=spinner.js.map

/***/ }),

/***/ 1292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemDetailsPageSpinner; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ItemDetailsPageSpinner = (function () {
    function ItemDetailsPageSpinner(navCtrl, navParams) {
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
        }
        else {
            navCtrl.setRoot("HomePage");
        }
    }
    ItemDetailsPageSpinner = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"D:\equipe\ionic\particular\siscov-webapp\src\pages\item-details-spinner\item-details-spinner.html"*/'<!--Spinner components-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title text-left text-uppercase>{{params.title}}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<!--Content-->\n\n<ion-content class="spinner-view">\n\n  <ion-slides *ngIf="params.data.length" pager="true">\n\n    <ion-slide *ngFor="let spinnerItem of params.data;">\n\n      <spinner [data]="spinnerItem"></spinner>\n\n    </ion-slide>\n\n  </ion-slides>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\equipe\ionic\particular\siscov-webapp\src\pages\item-details-spinner\item-details-spinner.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
    ], ItemDetailsPageSpinner);
    return ItemDetailsPageSpinner;
}());

//# sourceMappingURL=item-details-spinner.js.map

/***/ })

});
//# sourceMappingURL=31.js.map