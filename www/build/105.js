webpackJsonp([105],{

/***/ 1055:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppearanceAnimationLayout1Module", function() { return AppearanceAnimationLayout1Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__appearance_animation_layout_1__ = __webpack_require__(1205);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AppearanceAnimationLayout1Module = (function () {
    function AppearanceAnimationLayout1Module() {
    }
    AppearanceAnimationLayout1Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__appearance_animation_layout_1__["a" /* AppearanceAnimationLayout1 */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__appearance_animation_layout_1__["a" /* AppearanceAnimationLayout1 */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__appearance_animation_layout_1__["a" /* AppearanceAnimationLayout1 */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
        })
    ], AppearanceAnimationLayout1Module);
    return AppearanceAnimationLayout1Module;
}());

//# sourceMappingURL=appearance-animation-layout-1.module.js.map

/***/ }),

/***/ 1205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppearanceAnimationLayout1; });
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


var AppearanceAnimationLayout1 = (function () {
    function AppearanceAnimationLayout1() {
        this.animateItems = [];
        this.animateClass = { 'fade-in-left-item': true };
    }
    AppearanceAnimationLayout1.prototype.onEvent = function (event, item, e) {
        if (e) {
            e.stopPropagation();
        }
        if (this.events[event]) {
            this.events[event](item);
        }
    };
    AppearanceAnimationLayout1.prototype.ngOnChanges = function (changes) {
        var that = this;
        that.data = changes['data'].currentValue;
        if (that.data && that.data.items) {
            var _loop_1 = function (i) {
                setTimeout(function () {
                    that.animateItems.push(that.data.items[i]);
                }, 200 * i);
            };
            for (var i = 0; i < that.data.items.length; i++) {
                _loop_1(i);
            }
        }
    };
    AppearanceAnimationLayout1.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.content.ionScroll.subscribe(function (d) {
            _this.fabButton.setElementClass("fab-button-out", d.directionY == "down");
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], AppearanceAnimationLayout1.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], AppearanceAnimationLayout1.prototype, "events", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
    ], AppearanceAnimationLayout1.prototype, "content", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* FabButton */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* FabButton */])
    ], AppearanceAnimationLayout1.prototype, "fabButton", void 0);
    AppearanceAnimationLayout1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'appearance-animation-layout-1',template:/*ion-inline-start:"D:\equipe\ionic\particular\siscov-webapp\src\components\list-view\appearance-animation\layout-1\appearance-animation.html"*/'<!--Theme Appearance animation (Fade In Left)-->\n\n<ion-content>\n\n  <ion-grid no-padding *ngIf="data != null">\n\n    <ion-row>\n\n      <ion-col col-12>\n\n        <ion-list no-margin>\n\n          <ion-item [ngClass]="animateClass" *ngFor="let item of animateItems; let i = index;" (click)="onEvent(\'onItemClick\', item.title, $event)">\n\n            <ion-avatar item-start>\n\n              <img [src]="item.image" alt="{{item.title}}" />\n\n            </ion-avatar>\n\n            <h2 item-title>{{item.title}}</h2>\n\n            <ion-icon icon-small item-end (click)="onEvent(\'onFavorite\', item, $event)">\n\n              <i class="icon" [ngClass]="{\'icon-heart\': item.favorite, \'icon-heart-outline\': !item.favorite}"></i>\n\n            </ion-icon>\n\n          </ion-item>\n\n        </ion-list>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n<!-- Fab Button -->\n\n<ion-fab #fab bottom right>\n\n  <button button-ion-fab ion-fab (click)="onEvent(\'onFab\', data, $event)">\n\n    <ion-icon name="add"></ion-icon>\n\n  </button>\n\n</ion-fab>\n\n'/*ion-inline-end:"D:\equipe\ionic\particular\siscov-webapp\src\components\list-view\appearance-animation\layout-1\appearance-animation.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], AppearanceAnimationLayout1);
    return AppearanceAnimationLayout1;
}());

//# sourceMappingURL=appearance-animation-layout-1.js.map

/***/ })

});
//# sourceMappingURL=105.js.map