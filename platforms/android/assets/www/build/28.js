webpackJsonp([28,84,85],{

/***/ 1079:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginLayout2Module", function() { return LoginLayout2Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_layout_2__ = __webpack_require__(1229);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginLayout2Module = (function () {
    function LoginLayout2Module() {
    }
    LoginLayout2Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login_layout_2__["a" /* LoginLayout2 */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login_layout_2__["a" /* LoginLayout2 */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__login_layout_2__["a" /* LoginLayout2 */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
        })
    ], LoginLayout2Module);
    return LoginLayout2Module;
}());

//# sourceMappingURL=login-layout-2.module.js.map

/***/ }),

/***/ 1085:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginLayout1Module", function() { return LoginLayout1Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_layout_1__ = __webpack_require__(1235);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginLayout1Module = (function () {
    function LoginLayout1Module() {
    }
    LoginLayout1Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login_layout_1__["a" /* LoginLayout1 */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login_layout_1__["a" /* LoginLayout1 */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__login_layout_1__["a" /* LoginLayout1 */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
        })
    ], LoginLayout1Module);
    return LoginLayout1Module;
}());

//# sourceMappingURL=login-layout-1.module.js.map

/***/ }),

/***/ 1131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemDetailsPageLoginModule", function() { return ItemDetailsPageLoginModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__item_details_login__ = __webpack_require__(1282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_login_layout_1_login_layout_1_module__ = __webpack_require__(1085);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_login_layout_2_login_layout_2_module__ = __webpack_require__(1079);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ItemDetailsPageLoginModule = (function () {
    function ItemDetailsPageLoginModule() {
    }
    ItemDetailsPageLoginModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__item_details_login__["a" /* ItemDetailsPageLogin */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__item_details_login__["a" /* ItemDetailsPageLogin */]),
                __WEBPACK_IMPORTED_MODULE_3__components_login_layout_1_login_layout_1_module__["LoginLayout1Module"], __WEBPACK_IMPORTED_MODULE_4__components_login_layout_2_login_layout_2_module__["LoginLayout2Module"]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
        })
    ], ItemDetailsPageLoginModule);
    return ItemDetailsPageLoginModule;
}());

//# sourceMappingURL=item-details-login.module.js.map

/***/ }),

/***/ 1229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginLayout2; });
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

var LoginLayout2 = (function () {
    function LoginLayout2() {
        var _this = this;
        this.onEvent = function (event) {
            if (_this.events[event]) {
                _this.events[event]({
                    'username': _this.username,
                    'password': _this.password
                });
            }
        };
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], LoginLayout2.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], LoginLayout2.prototype, "events", void 0);
    LoginLayout2 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'login-layout-2',template:/*ion-inline-start:"D:\equipe\ionic\particular\siscov-webapp\src\components\login\layout-2\login.html"*/'<!-- Themes Login + logo -->\n\n<ion-content>\n\n  <ion-grid *ngIf="data != null">\n\n    <ion-row padding>\n\n      <ion-col col-12 col-sm-12 col-md-12 offset-lg-3 col-lg-6 offset-xl-3 col-xl-6>\n\n        <!---Input field username-->\n\n        <ion-item no-padding color="accent">\n\n          <ion-label color="secondary" floating>{{data.username}}</ion-label>\n\n          <ion-input required type="text" [(ngModel)]="username"></ion-input>\n\n        </ion-item>\n\n        <!---Input field password-->\n\n        <ion-item no-padding color="accent">\n\n          <ion-label color="secondary" floating>{{data.password}}</ion-label>\n\n          <ion-input required type="password" [(ngModel)]="password"></ion-input>\n\n        </ion-item>\n\n        <!---Login button-->\n\n        <button ion-button button-clear clear float-right (click)="onEvent(\'onRegister\')">{{data.register}}</button>\n\n        <!---Register button-->\n\n        <button ion-button button-clear clear float-right (click)="onEvent(\'onLogin\')">{{data.login}}</button>\n\n      </ion-col>\n\n      <!---Share Section-->\n\n      <ion-col col-12 col-sm-12 col-md-12 offset-lg-3 col-lg-6 offset-xl-3 col-xl-6 social>\n\n        <!---Facebook button-->\n\n        <button ion-button color="facebook" (click)="onEvent(\'onFacebook\')">Facebook</button>\n\n        <!---Twitter button-->\n\n        <button ion-button color="twitter" (click)="onEvent(\'onTwitter\')">Twitter</button>\n\n        <!---Google button-->\n\n        <button ion-button color="google" (click)="onEvent(\'onGoogle\')">Google</button>\n\n        <!---Pinterest button-->\n\n        <button ion-button color="pinterest" (click)="onEvent(\'onPinterest\')">Pinterest</button>\n\n      </ion-col>\n\n      <!---End Share Section-->\n\n      <ion-col col-12 col-sm-12 col-md-12 offset-lg-3 col-lg-6 offset-xl-3 col-xl-6>\n\n        <!--LOGO-->\n\n        <ion-thumbnail float-left>\n\n          <img [src]="data.logo">\n\n        </ion-thumbnail>\n\n        <!---Skip button-->\n\n        <button float-right ion-button button-clear clear (click)="onEvent(\'onSkip\')">{{data.skip}}</button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\equipe\ionic\particular\siscov-webapp\src\components\login\layout-2\login.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], LoginLayout2);
    return LoginLayout2;
}());

//# sourceMappingURL=login-layout-2.js.map

/***/ }),

/***/ 1235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginLayout1; });
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

var LoginLayout1 = (function () {
    function LoginLayout1() {
        var _this = this;
        this.onEvent = function (event) {
            if (_this.events[event]) {
                _this.events[event]({
                    'username': _this.username,
                    'password': _this.password
                });
            }
        };
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], LoginLayout1.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], LoginLayout1.prototype, "events", void 0);
    LoginLayout1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'login-layout-1',template:/*ion-inline-start:"D:\equipe\ionic\particular\siscov-webapp\src\components\login\layout-1\login.html"*/'<!-- Themes Login + logo -->\n\n<ion-content>\n\n  <ion-grid *ngIf="data != null">\n\n    <ion-row wrap padding>\n\n      <ion-col col-12 col-sm-12 col-md-12 offset-lg-3 col-lg-6 offset-xl-3 col-xl-6>\n\n        <button ion-button button-clear clear (click)="onEvent(\'onSkip\')">{{data.skip}}</button>\n\n        <!---Logo-->\n\n        <ion-thumbnail>\n\n          <img [src]="data.logo">\n\n        </ion-thumbnail>\n\n        <!---Input field username-->\n\n        <ion-item no-padding color="accent">\n\n          <ion-label color="secondary" floating>{{data.username}}</ion-label>\n\n          <ion-input required type="text" [(ngModel)]="username"></ion-input>\n\n        </ion-item>\n\n        <!---Input field password-->\n\n        <ion-item no-padding color="accent">\n\n          <ion-label color="secondary" floating>{{data.password}}</ion-label>\n\n          <ion-input required type="password" [(ngModel)]="password"></ion-input>\n\n        </ion-item>\n\n        <!---Login button-->\n\n        <button ion-button float-right default-button (click)="onEvent(\'onLogin\')">{{data.login}}</button>\n\n        <!---Register button-->\n\n        <button ion-button float-right default-button (click)="onEvent(\'onRegister\')">{{data.register}}</button>\n\n      </ion-col>\n\n      <!---Share Section-->\n\n      <ion-col col-12 col-sm-12 col-md-12 offset-lg-3 col-lg-6 offset-xl-3 col-xl-6 social>\n\n        <!---Facebook button-->\n\n        <button ion-button color="facebook" (click)="onEvent(\'onFacebook\')">Facebook</button>\n\n        <!---Twitter button-->\n\n        <button ion-button color="twitter" (click)="onEvent(\'onTwitter\')">Twitter</button>\n\n        <!---Google button-->\n\n        <button ion-button color="google" (click)="onEvent(\'onGoogle\')">Google</button>\n\n        <!---Pinterest button-->\n\n        <button ion-button color="pinterest" (click)="onEvent(\'onPinterest\')">Pinterest</button>\n\n      </ion-col>\n\n      <!---End Share Section-->\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\equipe\ionic\particular\siscov-webapp\src\components\login\layout-1\login.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], LoginLayout1);
    return LoginLayout1;
}());

//# sourceMappingURL=login-layout-1.js.map

/***/ }),

/***/ 1282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemDetailsPageLogin; });
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


var ItemDetailsPageLogin = (function () {
    function ItemDetailsPageLogin(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.params = {};
        // If we navigated to this page, we will have an item available as a nav param
        this.page = navParams.get('page');
        this.service = navParams.get('service');
        if (this.service) {
            this.params = this.service.prepareParams(this.page, navCtrl);
            this.params.data = this.service.load(this.page);
        }
        else {
            navCtrl.setRoot("HomePage");
        }
    }
    ItemDetailsPageLogin = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"D:\equipe\ionic\particular\siscov-webapp\src\pages\item-details-login\item-details-login.html"*/'<!--Login page component-->\n\n<ion-header>\n\n  <ion-navbar header-color>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title text-left text-uppercase>{{params.title}}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<!--Content-->\n\n\n\n<!-- PAGE LOGIN -  Login + logo 1 -->\n\n<login-layout-1 has-header *ngIf="params.loginLayout1" [data]="params.data | async" [events]="params.events">\n\n</login-layout-1>\n\n\n\n<!-- PAGE LOGIN -  Login + logo 2 -->\n\n<login-layout-2 has-header *ngIf="params.loginLayout2" [data]="params.data | async" [events]="params.events">\n\n</login-layout-2>\n\n'/*ion-inline-end:"D:\equipe\ionic\particular\siscov-webapp\src\pages\item-details-login\item-details-login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
    ], ItemDetailsPageLogin);
    return ItemDetailsPageLogin;
}());

//# sourceMappingURL=item-details-login.js.map

/***/ })

});
//# sourceMappingURL=28.js.map