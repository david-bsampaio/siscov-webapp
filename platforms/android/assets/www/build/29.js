webpackJsonp([29,53],{

/***/ 1044:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WizardLayout1Module", function() { return WizardLayout1Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wizard_layout_1__ = __webpack_require__(1193);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var WizardLayout1Module = (function () {
    function WizardLayout1Module() {
    }
    WizardLayout1Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__wizard_layout_1__["a" /* WizardLayout1 */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__wizard_layout_1__["a" /* WizardLayout1 */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__wizard_layout_1__["a" /* WizardLayout1 */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
        })
    ], WizardLayout1Module);
    return WizardLayout1Module;
}());

//# sourceMappingURL=wizard-layout-1.module.js.map

/***/ }),

/***/ 1123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroPageModule", function() { return IntroPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__intro_page__ = __webpack_require__(1273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_wizard_layout_1_wizard_layout_1_module__ = __webpack_require__(1044);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var IntroPageModule = (function () {
    function IntroPageModule() {
    }
    IntroPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__intro_page__["a" /* IntroPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__intro_page__["a" /* IntroPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_wizard_layout_1_wizard_layout_1_module__["WizardLayout1Module"]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__intro_page__["a" /* IntroPage */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
        })
    ], IntroPageModule);
    return IntroPageModule;
}());

//# sourceMappingURL=intro-page.module.js.map

/***/ }),

/***/ 1193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WizardLayout1; });
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


var WizardLayout1 = (function () {
    function WizardLayout1() {
        this.sliderOptions = { pager: true };
        this.path = false;
        this.prev = true;
        this.next = true;
        this.finish = true;
        this.prev = false;
        this.next = true;
        this.finish = false;
    }
    WizardLayout1.prototype.changeSlide = function (index) {
        if (index > 0) {
            this.slider.slideNext(300);
        }
        else {
            this.slider.slidePrev(300);
        }
    };
    WizardLayout1.prototype.slideHasChanged = function (index) {
        try {
            this.prev = !this.slider.isBeginning();
            this.next = this.slider.getActiveIndex() < (this.slider.length() - 1);
            this.finish = this.slider.isEnd();
        }
        catch (e) { }
    };
    WizardLayout1.prototype.ngOnChanges = function (changes) {
        this.data = changes['data'].currentValue;
    };
    WizardLayout1.prototype.onEvent = function (event) {
        if (this.events[event]) {
            this.events[event]();
        }
        console.log(event);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], WizardLayout1.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], WizardLayout1.prototype, "events", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('wizardSlider'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* Slides */])
    ], WizardLayout1.prototype, "slider", void 0);
    WizardLayout1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'wizard-layout-1',template:/*ion-inline-start:"D:\equipe\ionic\particular\siscov-webapp\src\components\wizard\layout-1\wizard.html"*/'<!--Theme Wizard Simple + icon-->\n\n\n\n<!--Content -->\n\n<ion-slides #wizardSlider (ionSlideDidChange)="slideHasChanged()" pager="true" *ngIf="data != null">\n\n  <ion-slide *ngFor="let item of data.items;">\n\n    <ion-icon icon-large>\n\n      <i class="icon {{item.iconSlider}}"></i>\n\n    </ion-icon>\n\n    <h1 wizard-title>{{item.title}}</h1>\n\n    <p wizard-body-text>{{item.description}}</p>\n\n  </ion-slide>\n\n</ion-slides>\n\n<!--Button section-->\n\n<div *ngIf="data != null">\n\n  <button ion-button button-clear clear float-left (click)="changeSlide(-1)" *ngIf="prev">\n\n  {{data.btnPrev}}\n\n</button>\n\n  <button ion-button button-clear clear float-right (click)="changeSlide(1)" *ngIf="next">\n\n  {{data.btnNext}}\n\n</button>\n\n  <button ion-button button-clear clear float-right (click)="onEvent(\'onFinish\')" *ngIf="finish">\n\n  {{data.btnFinish}}\n\n</button>\n\n</div>\n\n'/*ion-inline-end:"D:\equipe\ionic\particular\siscov-webapp\src\components\wizard\layout-1\wizard.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], WizardLayout1);
    return WizardLayout1;
}());

//# sourceMappingURL=wizard-layout-1.js.map

/***/ }),

/***/ 1273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_intro_service__ = __webpack_require__(1274);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var IntroPage = (function () {
    function IntroPage(viewCtrl, introService) {
        this.viewCtrl = viewCtrl;
        this.introService = introService;
        this.params = null;
        var that = this;
        this.introService.load().subscribe(function (snapshot) {
            setTimeout(function () {
                that.params = {
                    'events': {
                        'onFinish': function (event) {
                            that.viewCtrl.dismiss();
                        }
                    },
                    'data': snapshot
                };
            });
        });
    }
    IntroPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"D:\equipe\ionic\particular\siscov-webapp\src\pages\intro-page\intro-page.html"*/'<!--Wizard component-->\n\n<ion-content no-margin no-padding *ngIf="params != null">\n\n    <wizard-layout-1 [data]="params.data" [events]="params.events">\n\n    </wizard-layout-1>\n\n</ion-content>'/*ion-inline-end:"D:\equipe\ionic\particular\siscov-webapp\src\pages\intro-page\intro-page.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_intro_service__["a" /* IntroService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__services_intro_service__["a" /* IntroService */]])
    ], IntroPage);
    return IntroPage;
}());

//# sourceMappingURL=intro-page.js.map

/***/ }),

/***/ 1274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntroService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_database__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_settings__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__loading_service__ = __webpack_require__(611);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var IntroService = (function () {
    function IntroService(af, loadingService) {
        this.af = af;
        this.loadingService = loadingService;
        this.getData = function () {
            return {
                "btnPrev": "Previous",
                "btnNext": "Next",
                "btnFinish": "Finish",
                "items": [
                    {
                        "logo": "assets/images/logo/2.png",
                        "title": "Welcome to our new material style theme",
                        "description": "Finished layouts and components for Ionic 3. Ready to use!"
                    },
                    {
                        "logo": "assets/images/logo/2.png",
                        "title": "For Developers",
                        "description": "Save hours of developing. Tons of funcional components."
                    },
                    {
                        "logo": "assets/images/logo/2.png",
                        "title": "For Designers",
                        "description": "Endless possibilities. Combine layouts as you wish."
                    }
                ]
            };
        };
    }
    IntroService.prototype.load = function () {
        var _this = this;
        var that = this;
        that.loadingService.show();
        if (__WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */].IS_FIREBASE_ENABLED) {
            return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
                _this.af
                    .object('intro')
                    .valueChanges()
                    .subscribe(function (snapshot) {
                    that.loadingService.hide();
                    observer.next(snapshot);
                    observer.complete();
                }, function (err) {
                    that.loadingService.hide();
                    observer.error([]);
                    observer.complete();
                });
            });
        }
        else {
            return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
                that.loadingService.hide();
                observer.next(_this.getData());
                observer.complete();
            });
        }
    };
    ;
    IntroService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_4__loading_service__["a" /* LoadingService */]])
    ], IntroService);
    return IntroService;
}());

//# sourceMappingURL=intro-service.js.map

/***/ })

});
//# sourceMappingURL=29.js.map