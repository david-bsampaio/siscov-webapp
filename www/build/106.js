webpackJsonp([106],{

/***/ 1119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageGalleryLayout3Module", function() { return ImageGalleryLayout3Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__image_gallery_layout_3__ = __webpack_require__(1269);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ImageGalleryLayout3Module = (function () {
    function ImageGalleryLayout3Module() {
    }
    ImageGalleryLayout3Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__image_gallery_layout_3__["a" /* ImageGalleryLayout3 */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__image_gallery_layout_3__["a" /* ImageGalleryLayout3 */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__image_gallery_layout_3__["a" /* ImageGalleryLayout3 */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
        })
    ], ImageGalleryLayout3Module);
    return ImageGalleryLayout3Module;
}());

//# sourceMappingURL=image-gallery-layout-3.module.js.map

/***/ }),

/***/ 1269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageGalleryLayout3; });
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


var ImageGalleryLayout3 = (function () {
    function ImageGalleryLayout3(navCtrl, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.openSubGallery = function (group, index) {
            _this.navCtrl.push(group.subGallery, {
                'group': group.items[index],
                'events': _this.events,
                'layout': 1
            });
        };
        this.onEvent = function (event, item, e) {
            if (e) {
                e.stopPropagation();
            }
            if (_this.events[event]) {
                _this.events[event](item);
            }
        };
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], ImageGalleryLayout3.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], ImageGalleryLayout3.prototype, "events", void 0);
    ImageGalleryLayout3 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'image-gallery-layout-3',template:/*ion-inline-start:"D:\equipe\ionic\particular\siscov-webapp\src\components\image-gallery\layout-3\image-gallery-layout-3.html"*/'<!---Theme Category 2 (Music)-->\n\n<ion-grid no-padding>\n\n  <ion-row no-margin no-padding>\n\n    <ion-col col-6 col-sm-3 col-md-6 col-lg-4 col-xl-3 no-margin no-padding *ngFor="let group of data.items;let i = index;">\n\n      <ion-card background-size  no-margin (click)="openSubGallery(data, i)"\n\n      [ngStyle]="{\'background-image\': \'url(\' + group.image + \')\'}">\n\n        <div gallery-title>\n\n          <h2 item-title>{{group.title}}</h2>\n\n          <p item-subtitle>{{group.items.length}} image(s)</p>\n\n          <ion-icon (click)="onEvent(\'onFavorite\', group, $event)">\n\n            <i class="icon" [ngClass]="{\'icon-heart\': group.favorite, \'icon-heart-outline\': !group.favorite}"></i>\n\n          </ion-icon>\n\n        </div>\n\n      </ion-card>\n\n    </ion-col>\n\n  </ion-row>\n\n</ion-grid>\n\n'/*ion-inline-end:"D:\equipe\ionic\particular\siscov-webapp\src\components\image-gallery\layout-3\image-gallery-layout-3.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
    ], ImageGalleryLayout3);
    return ImageGalleryLayout3;
}());

//# sourceMappingURL=image-gallery-layout-3.js.map

/***/ })

});
//# sourceMappingURL=106.js.map