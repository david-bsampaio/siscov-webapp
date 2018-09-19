webpackJsonp([90],{

/***/ 1070:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleCardLayout4Module", function() { return GoogleCardLayout4Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__google_card_layout_4__ = __webpack_require__(1220);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var GoogleCardLayout4Module = (function () {
    function GoogleCardLayout4Module() {
    }
    GoogleCardLayout4Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__google_card_layout_4__["a" /* GoogleCardLayout4 */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__google_card_layout_4__["a" /* GoogleCardLayout4 */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__google_card_layout_4__["a" /* GoogleCardLayout4 */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
        })
    ], GoogleCardLayout4Module);
    return GoogleCardLayout4Module;
}());

//# sourceMappingURL=google-card-layout-4.module.js.map

/***/ }),

/***/ 1220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoogleCardLayout4; });
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


var GoogleCardLayout4 = (function () {
    function GoogleCardLayout4() {
        this.slider = {};
    }
    GoogleCardLayout4.prototype.slideHasChanged = function (slider, index) {
        this.slider[index] = slider;
        if (2 == slider._activeIndex) {
            if (this.data.items) {
                this.data.items.splice(index, 1);
            }
            else {
                this.data.splice(index, 1);
            }
        }
    };
    GoogleCardLayout4.prototype.onClickEvent = function (index) {
        if (this.slider[index]) {
            this.slider[index].slidePrev(300);
        }
    };
    GoogleCardLayout4.prototype.onEvent = function (event, item, e) {
        if (e) {
            e.stopPropagation();
        }
        if (this.events[event]) {
            this.events[event](item);
        }
    };
    GoogleCardLayout4.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.content.ionScroll.subscribe(function (d) {
            _this.fabButton.setElementClass("fab-button-out", d.directionY == "down");
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], GoogleCardLayout4.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], GoogleCardLayout4.prototype, "events", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
    ], GoogleCardLayout4.prototype, "content", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* FabButton */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* FabButton */])
    ], GoogleCardLayout4.prototype, "fabButton", void 0);
    GoogleCardLayout4 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'google-card-layout-4',template:/*ion-inline-start:"D:\equipe\ionic\particular\siscov-webapp\src\components\list-view\google-card\layout-4\google-card.html"*/'<!--Theme Post Card -->\n\n<ion-content>\n\n<ion-grid no-padding *ngIf="data != null">\n\n<ion-row no-padding>\n\n  <ion-col no-padding col-sm-12 col-md-6 col-lg-4 *ngFor="let item of data">\n\n    <ion-list>\n\n    <ion-card (click)="onEvent(\'onItemClick\', item.title, $event)">\n\n      <!--Card-header-->\n\n      <ion-card-header>\n\n        <ion-item no-padding>\n\n          <!--Avatar-->\n\n          <ion-avatar item-start>\n\n            <img [src]="item.avatar">\n\n          </ion-avatar>\n\n          <!--Card-title-->\n\n          <h1 card-title>{{item.title}}</h1>\n\n          <!--Card-subtitle-->\n\n          <h2 card-subtitle>{{item.shortDescription}}</h2>\n\n        </ion-item>\n\n      </ion-card-header>\n\n      <!--Card-content-->\n\n      <ion-card-content no-padding>\n\n        <!--Card-image-->\n\n        <img margin-bottom [src]="item.image">\n\n        <!--Description-->\n\n        <p border margin card-body-text padding-bottom text-wrap>{{item.description}}</p>\n\n        <ion-item no-padding margin-bottom>\n\n          <!--Button Like-->\n\n          <button ion-button clear button-clear item-end\n\n            (click)="onEvent(\'onLike\', item.title, $event)">{{item.firstButton}}</button>\n\n            <!--Button Share-->\n\n          <button ion-button clear button-clear item-end\n\n            (click)="onEvent(\'onShare\', item.title, $event)">{{item.secondButton}}</button>\n\n        </ion-item>\n\n      </ion-card-content>\n\n    </ion-card>\n\n  </ion-list>\n\n    </ion-col>\n\n  </ion-row>\n\n</ion-grid>\n\n</ion-content>\n\n<!--Fab Button-->\n\n<ion-fab #fab bottom right>\n\n  <button button-ion-fab ion-fab (click)="onEvent(\'onFab\', data, $event)">\n\n    <ion-icon name="add"></ion-icon>\n\n  </button>\n\n</ion-fab>\n\n'/*ion-inline-end:"D:\equipe\ionic\particular\siscov-webapp\src\components\list-view\google-card\layout-4\google-card.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], GoogleCardLayout4);
    return GoogleCardLayout4;
}());

//# sourceMappingURL=google-card-layout-4.js.map

/***/ })

});
//# sourceMappingURL=90.js.map