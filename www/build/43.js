webpackJsonp([43],{

/***/ 1153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabPage3Module", function() { return TabPage3Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tab_page_3__ = __webpack_require__(1304);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TabPage3Module = (function () {
    function TabPage3Module() {
    }
    TabPage3Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__tab_page_3__["a" /* TabPage3 */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tab_page_3__["a" /* TabPage3 */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__tab_page_3__["a" /* TabPage3 */]
            ]
        })
    ], TabPage3Module);
    return TabPage3Module;
}());

//# sourceMappingURL=tab-page-3.module.js.map

/***/ }),

/***/ 1173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsService; });
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





var TabsService = (function () {
    function TabsService(af, loadingService) {
        var _this = this;
        this.af = af;
        this.loadingService = loadingService;
        this.getId = function () { return 'tabs'; };
        this.getTitle = function () { return 'Tabs'; };
        this.getAllThemes = function () {
            return [
                { "title": "Footer tab - text", "theme": "layout1" },
                { "title": "Footer tab - icons", "theme": "layout2" },
                { "title": "Header tab - text", "theme": "layout3" }
            ];
        };
        this.getDataForTheme = function (menuItem) {
            return _this['getDataFor' +
                menuItem.charAt(0).toUpperCase() +
                menuItem.slice(1)]();
        };
        this.getDataForTab1 = function () {
            return {
                "backgroundImage": "assets/images/avatar-large/5.jpg",
                "title": "Fragment Example 1",
                "description": "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            };
        };
        this.getDataForTab2 = function () {
            return {
                "backgroundImage": "assets/images/avatar-large/6.jpg",
                "title": "Fragment Example 2",
                "description": "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            };
        };
        this.getDataForTab3 = function () {
            return {
                "backgroundImage": "assets/images/avatar-large/7.jpg",
                "title": "Fragment Example 3",
                "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
            };
        };
        this.getDataForTab4 = function () {
            return {
                "backgroundImage": "assets/images/avatar-large/5.jpg",
                "title": "Fragment Example 4",
                "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            };
        };
        this.getDataForTab5 = function () {
            return {
                "backgroundImage": "assets/images/avatar-large/6.jpg",
                "title": "Fragment Example 5",
                "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's."
            };
        };
        this.getDataForTab6 = function () {
            return {
                "backgroundImage": "assets/images/avatar-large/7.jpg",
                "title": "Fragment Example 6",
                "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            };
        };
        this.getEventsForTheme = function (menuItem) {
            return {};
        };
        this.getShowItemId = function (item) {
            return _this.getId() + item.theme.charAt(0).toUpperCase() + "" + item.theme.slice(1);
        };
        this.prepareParams = function (item) {
            var result = {
                title: item.title,
                data: [],
                events: _this.getEventsForTheme(item)
            };
            result[_this.getShowItemId(item)] = true;
            return result;
        };
    }
    TabsService.prototype.load = function (item) {
        var _this = this;
        var that = this;
        that.loadingService.show();
        if (__WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */].IS_FIREBASE_ENABLED) {
            return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
                _this.af
                    .object('tab/' + item)
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
                observer.next(_this.getDataForTheme(item));
                observer.complete();
            });
        }
    };
    ;
    TabsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_4__loading_service__["a" /* LoadingService */]])
    ], TabsService);
    return TabsService;
}());

//# sourceMappingURL=tabs-service.js.map

/***/ }),

/***/ 1304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabPage3; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_native__ = __webpack_require__(614);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_tabs_service__ = __webpack_require__(1173);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TabPage3 = (function () {
    function TabPage3(tabsService) {
        var _this = this;
        this.tabsService = tabsService;
        this.params = {};
        this.tabsService.load("tab3").subscribe(function (snapshot) {
            _this.params = snapshot;
        });
    }
    TabPage3.prototype.ngOnChanges = function (changes) {
        this.params = changes['data'].currentValue;
    };
    TabPage3.prototype.onItemClick = function (item) {
        if (window.location.hostname === "localhost") {
            console.log("Folow");
        }
        else {
            __WEBPACK_IMPORTED_MODULE_1_ionic_native__["e" /* Toast */].show("Folow", '1000', 'bottom').subscribe(function (toast) { });
        }
    };
    TabPage3 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"D:\equipe\ionic\particular\siscov-webapp\src\pages\tab-page-3\tab-page-3.html"*/'<!---Settings TAB lauout-3-->\n\n<ion-content class="content-background-images">\n\n    <div background-size class="tab-3"\n\n    [ngStyle]="{\'background-image\': \'url(\' + params.backgroundImage + \')\'}" *ngIf=" params != null">\n\n        <div padding class="tab-decription">\n\n            <h2 tabs-title text-center>{{params.title}}</h2>\n\n            <p tabs-subtitle text-center>{{params.description}}</p>\n\n        </div>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\equipe\ionic\particular\siscov-webapp\src\pages\tab-page-3\tab-page-3.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_tabs_service__["a" /* TabsService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_tabs_service__["a" /* TabsService */]])
    ], TabPage3);
    return TabPage3;
}());

//# sourceMappingURL=tab-page-3.js.map

/***/ })

});
//# sourceMappingURL=43.js.map