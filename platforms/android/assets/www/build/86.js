webpackJsonp([86],{

/***/ 1077:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwipeToDismissLayout4Module", function() { return SwipeToDismissLayout4Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__swipe_to_dismiss_layout_4__ = __webpack_require__(1227);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SwipeToDismissLayout4Module = (function () {
    function SwipeToDismissLayout4Module() {
    }
    SwipeToDismissLayout4Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__swipe_to_dismiss_layout_4__["a" /* SwipeToDismissLayout4 */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__swipe_to_dismiss_layout_4__["a" /* SwipeToDismissLayout4 */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__swipe_to_dismiss_layout_4__["a" /* SwipeToDismissLayout4 */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
        })
    ], SwipeToDismissLayout4Module);
    return SwipeToDismissLayout4Module;
}());

//# sourceMappingURL=swipe-to-dismiss-layout-4.module.js.map

/***/ }),

/***/ 1227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SwipeToDismissLayout4; });
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


var SwipeToDismissLayout4 = (function () {
    function SwipeToDismissLayout4() {
        var _this = this;
        this.undo = function (slidingItem) {
            slidingItem.close();
        };
        this.delete = function (item) {
            var index = _this.data.items.indexOf(item);
            if (index > -1) {
                _this.data.items.splice(index, 1);
            }
        };
    }
    SwipeToDismissLayout4.prototype.onEvent = function (event, item, e) {
        if (e) {
            e.stopPropagation();
        }
        if (this.events[event]) {
            this.events[event](item);
        }
    };
    SwipeToDismissLayout4.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.content.ionScroll.subscribe(function (d) {
            _this.fabButton.setElementClass("fab-button-out", d.directionY == "down");
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], SwipeToDismissLayout4.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], SwipeToDismissLayout4.prototype, "events", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
    ], SwipeToDismissLayout4.prototype, "content", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* FabButton */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* FabButton */])
    ], SwipeToDismissLayout4.prototype, "fabButton", void 0);
    SwipeToDismissLayout4 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'swipe-to-dismiss-layout-4',template:/*ion-inline-start:"D:\equipe\ionic\particular\siscov-webapp\src\components\list-view\swipe-to-dismiss\layout-4\swipe-to-dismiss.html"*/'<!-- Themes Large item with text -->\n\n<ion-content>\n\n  <ion-grid no-padding *ngIf="data != null">\n\n    <ion-row no-padding>\n\n      <ion-col no-padding col-12>\n\n        <!-- Content List -->\n\n        <ion-list no-padding>\n\n          <ion-item-sliding *ngFor="let item of data.items" #slidingItem>\n\n            <ion-item no-padding border (click)="onEvent(\'onItemClick\', item.title, $event)">\n\n              <ion-item-divider no-lines>\n\n                <!-- Avatar -->\n\n                <ion-avatar margin-right item-start>\n\n                  <img [src]="item.image">\n\n                </ion-avatar>\n\n                <!-- Title -->\n\n                <h1 item-title>{{item.title}}</h1>\n\n              </ion-item-divider>\n\n              <!-- Description -->\n\n              <p subitem-subtitle text-wrap>{{item.description}}</p>\n\n            </ion-item>\n\n            <ion-item-options>\n\n              <!-- Icon Delate -->\n\n              <button ion-button (click)="delete(item)">\n\n                <ion-icon icon-medium>\n\n                  <i class="icon {{item.iconDelate}}"></i>\n\n                </ion-icon>\n\n              </button>\n\n              <!-- Icon Undo -->\n\n              <button ion-button (click)="undo(slidingItem)">\n\n                <ion-icon icon-medium>\n\n                  <i class="icon {{item.iconUndo}}"></i>\n\n                </ion-icon>\n\n              </button>\n\n            </ion-item-options>\n\n          </ion-item-sliding>\n\n        </ion-list>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n<!-- Fab Button -->\n\n<ion-fab #fab bottom right>\n\n  <button button-ion-fab ion-fab (click)="onEvent(\'onFab\', data, $event)">\n\n    <ion-icon name="add"></ion-icon>\n\n  </button>\n\n</ion-fab>\n\n'/*ion-inline-end:"D:\equipe\ionic\particular\siscov-webapp\src\components\list-view\swipe-to-dismiss\layout-4\swipe-to-dismiss.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], SwipeToDismissLayout4);
    return SwipeToDismissLayout4;
}());

//# sourceMappingURL=swipe-to-dismiss-layout-4.js.map

/***/ })

});
//# sourceMappingURL=86.js.map