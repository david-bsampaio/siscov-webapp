webpackJsonp([51],{

/***/ 1117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WizardLayout3Module", function() { return WizardLayout3Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wizard_layout_3__ = __webpack_require__(1267);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var WizardLayout3Module = (function () {
    function WizardLayout3Module() {
    }
    WizardLayout3Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__wizard_layout_3__["a" /* WizardLayout3 */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__wizard_layout_3__["a" /* WizardLayout3 */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__wizard_layout_3__["a" /* WizardLayout3 */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
        })
    ], WizardLayout3Module);
    return WizardLayout3Module;
}());

//# sourceMappingURL=wizard-layout-3.module.js.map

/***/ }),

/***/ 1267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WizardLayout3; });
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


var WizardLayout3 = (function () {
    function WizardLayout3() {
        this.sliderOptions = { pager: true };
        this.path = false;
        this.prev = true;
        this.next = true;
        this.finish = true;
        this.prev = false;
        this.next = true;
        this.finish = false;
    }
    WizardLayout3.prototype.changeSlide = function (index) {
        if (index > 0) {
            this.slider.slideNext(300);
        }
        else {
            this.slider.slidePrev(300);
        }
    };
    WizardLayout3.prototype.slideHasChanged = function (index) {
        try {
            this.prev = !this.slider.isBeginning();
            this.next = this.slider.getActiveIndex() < (this.slider.length() - 1);
            this.finish = this.slider.isEnd();
        }
        catch (e) { }
    };
    WizardLayout3.prototype.ngOnChanges = function (changes) {
        this.data = changes['data'].currentValue;
    };
    WizardLayout3.prototype.onEvent = function (event) {
        if (this.events[event]) {
            this.events[event]();
        }
        console.log(event);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], WizardLayout3.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], WizardLayout3.prototype, "events", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('wizardSlider'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* Slides */])
    ], WizardLayout3.prototype, "slider", void 0);
    WizardLayout3 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'wizard-layout-3',template:/*ion-inline-start:"D:\equipe\ionic\particular\siscov-webapp\src\components\wizard\layout-3\wizard.html"*/'<!--Theme Wizard Big Image -->\n\n<button *ngIf="data != null" skip button-clear clear ion-button text-right>\n\n    {{data.btnSkip}}\n\n</button>\n\n<ion-slides #wizardSlider *ngIf="data != null" (ionSlideDidChange)="slideHasChanged()" pager="true">\n\n  <ion-slide background-size *ngFor="let item of data.items;" [ngStyle]="{\'background-image\': \'url(\' + item.backgroundImage + \')\'}">\n\n    <div wizard-description text-left>\n\n      <h1 wizard-title>{{item.title}}</h1>\n\n      <h3 wizard-body-text>{{item.description}}</h3>\n\n    </div>\n\n  </ion-slide>\n\n</ion-slides>\n\n<!--Button section-->\n\n<div *ngIf="data != null">\n\n<button navigation text-center button-clear clear ion-button (click)="changeSlide(1)" *ngIf="next">\n\n    {{data.btnNext}}\n\n</button>\n\n<button navigation text-center button-clear clear ion-button (click)="onEvent(\'onFinish\')" *ngIf="finish">\n\n    {{data.btnFinish}}\n\n</button>\n\n</div>\n\n'/*ion-inline-end:"D:\equipe\ionic\particular\siscov-webapp\src\components\wizard\layout-3\wizard.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], WizardLayout3);
    return WizardLayout3;
}());

//# sourceMappingURL=wizard-layout-3.js.map

/***/ })

});
//# sourceMappingURL=51.js.map