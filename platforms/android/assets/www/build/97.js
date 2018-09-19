webpackJsonp([97],{

/***/ 1063:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragAndDropLayout4Module", function() { return DragAndDropLayout4Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__drag_and_drop_layout_4__ = __webpack_require__(1213);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DragAndDropLayout4Module = (function () {
    function DragAndDropLayout4Module() {
    }
    DragAndDropLayout4Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__drag_and_drop_layout_4__["a" /* DragAndDropLayout4 */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__drag_and_drop_layout_4__["a" /* DragAndDropLayout4 */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__drag_and_drop_layout_4__["a" /* DragAndDropLayout4 */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
        })
    ], DragAndDropLayout4Module);
    return DragAndDropLayout4Module;
}());

//# sourceMappingURL=drag-and-drop-layout-4.module.js.map

/***/ }),

/***/ 1213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DragAndDropLayout4; });
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


var DragAndDropLayout4 = (function () {
    function DragAndDropLayout4() {
        var _this = this;
        this.reorderItems = function (indexes) {
            _this.data.items = Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* reorderArray */])(_this.data.items, indexes);
        };
    }
    DragAndDropLayout4.prototype.onEvent = function (event, item, e) {
        if (e) {
            e.stopPropagation();
        }
        if (this.events[event]) {
            this.events[event](item);
        }
    };
    DragAndDropLayout4.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.content.ionScroll.subscribe(function (d) {
            _this.fabButton.setElementClass("fab-button-out", d.directionY == "down");
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], DragAndDropLayout4.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], DragAndDropLayout4.prototype, "events", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
    ], DragAndDropLayout4.prototype, "content", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* FabButton */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* FabButton */])
    ], DragAndDropLayout4.prototype, "fabButton", void 0);
    DragAndDropLayout4 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'drag-and-drop-layout-4',template:/*ion-inline-start:"D:\equipe\ionic\particular\siscov-webapp\src\components\list-view\drag-and-drop\layout-4\drag-and-drop.html"*/'<!-- Themes Medium item with image-->\n\n<ion-content>\n\n  <ion-grid no-padding *ngIf="data != null">\n\n    <ion-row no-padding>\n\n      <ion-col col-12 no-padding>\n\n        <!-- Content List -->\n\n        <ion-list reorder="true" (ionItemReorder)="reorderItems($event)">\n\n          <ion-item no-padding *ngFor="let item of data.items"\n\n          (click)="onEvent(\'onItemClick\', item.title, $event)">\n\n            <!-- Images -->\n\n            <ion-thumbnail no-margin item-start>\n\n              <img images-filter [src]="item.image">\n\n            </ion-thumbnail>\n\n            <!-- Title -->\n\n            <h2 padding-left item-title>{{item.title}}</h2>\n\n            <!-- Subtitle -->\n\n            <p padding-left >{{item.description}}</p>\n\n            <!-- Rating -->\n\n            <h3 margin-top item-title float-right>{{item.mark}}</h3>\n\n            <ion-icon margin-top icon-small float-right [name]="item.icon">\n\n            </ion-icon>\n\n          </ion-item>\n\n        </ion-list>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n<!-- Fab Button -->\n\n<ion-fab #fab bottom right>\n\n    <button button-ion-fab ion-fab (click)="onEvent(\'onFab\', data, $event)">\n\n    <ion-icon name="add"></ion-icon>\n\n  </button>\n\n</ion-fab>\n\n'/*ion-inline-end:"D:\equipe\ionic\particular\siscov-webapp\src\components\list-view\drag-and-drop\layout-4\drag-and-drop.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], DragAndDropLayout4);
    return DragAndDropLayout4;
}());

//# sourceMappingURL=drag-and-drop-layout-4.js.map

/***/ })

});
//# sourceMappingURL=97.js.map