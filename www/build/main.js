webpackJsonp([115],{

/***/ 1030:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_native__ = __webpack_require__(614);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_menu_service__ = __webpack_require__(1031);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_app_settings__ = __webpack_require__(141);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, menu, menuService, modalCtrl) {
        var _this = this;
        this.platform = platform;
        this.menu = menu;
        this.menuService = menuService;
        this.modalCtrl = modalCtrl;
        this.rootPage = "HomePage";
        this.initializeApp();
        this.pages = menuService.getAllThemes();
        this.leftMenuTitle = menuService.getTitle();
        this.menuService.load(null).subscribe(function (snapshot) {
            _this.params = snapshot;
        });
        if (__WEBPACK_IMPORTED_MODULE_4__services_app_settings__["a" /* AppSettings */].SHOW_START_WIZARD) {
            this.presentProfileModal();
        }
    }
    MyApp.prototype.presentProfileModal = function () {
        var profileModal = this.modalCtrl.create("IntroPage");
        profileModal.present();
    };
    MyApp.prototype.initializeApp = function () {
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            __WEBPACK_IMPORTED_MODULE_2_ionic_native__["d" /* StatusBar */].styleDefault();
            __WEBPACK_IMPORTED_MODULE_2_ionic_native__["c" /* Splashscreen */].hide();
            localStorage.setItem("mailChimpLocal", "true");
        });
    };
    MyApp.prototype.openPage = function (page) {
        // close the menu when clicking a link from the menu
        // navigate to the new page if it is not the current page
        if (page.singlePage) {
            this.menu.open();
            this.nav.push(this.getPageForOpen(page.theme), {
                service: this.getServiceForPage(page.theme),
                page: page,
                componentName: page.theme
            });
        }
        else {
            this.nav.setRoot("ItemsPage", {
                componentName: page.theme
            });
        }
    };
    ;
    MyApp.prototype.abrePagina = function (page) {
        console.log(page);
        this.nav.push(page);
    };
    MyApp.prototype.getPageForOpen = function (value) {
        return null;
    };
    MyApp.prototype.getServiceForPage = function (value) {
        return null;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"D:\equipe\ionic\particular\siscov-webapp\src\app\app.html"*/'<ion-split-pane when="md">\n\n  <ion-menu [content]="content" *ngIf="params != null">\n\n    <!-- Menu Main Top -->\n\n    <ion-header padding background-size header-background-image\n\n    [ngStyle]="{\'background-image\': \'url(\' + params.background + \')\'}">\n\n      <ion-thumbnail>\n\n        <img [src]="params.image">\n\n      </ion-thumbnail>\n\n      <!-- <h2 item-title text-center>Elements</h2> -->\n\n    </ion-header>\n\n    <!-- Menu Main List -->\n\n    <ion-content>\n\n      <ion-list no-margin no-padding>\n\n        <button menuClose ion-item item-title no-padding main-menu (click)="abrePagina(\'FirebasePage\')">\n\n          <ion-icon padding-left>\n\n            <i class="icon icon-format-align-justify"></i>\n\n          </ion-icon>\n\n            Produtos\n\n        </button>\n\n        <button menuClose ion-item item-title no-padding main-menu (click)="abrePagina(\'ElementsClassesPage\')">\n\n          <ion-icon padding-left>\n\n            <i class="icon icon-format-align-justify"></i>\n\n          </ion-icon>\n\n          Classes\n\n        </button>\n\n      </ion-list>\n\n      <ion-list no-margin no-padding>\n\n        <button menuClose ion-item item-title no-padding main-menu *ngFor="let p of pages" (click)="openPage(p)">\n\n        <ion-icon padding-left>\n\n          <i class="icon {{p.icon}}"></i>\n\n        </ion-icon>\n\n        {{p.title}}\n\n      </button>\n\n      </ion-list>\n\n    </ion-content>\n\n  </ion-menu>\n\n  <!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n  <ion-nav [root]="rootPage" #content main swipeBackEnabled="false"></ion-nav>\n\n</ion-split-pane>\n\n'/*ion-inline-end:"D:\equipe\ionic\particular\siscov-webapp\src\app\app.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_3__services_menu_service__["a" /* MenuService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_3__services_menu_service__["a" /* MenuService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 1031:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_database__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_settings__ = __webpack_require__(141);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MenuService = (function () {
    function MenuService(af) {
        var _this = this;
        this.af = af;
        this.getId = function () { return 'menu'; };
        this.getTitle = function () { return 'UIAppTemplate'; };
        this.getAllThemes = function () {
            return [
                { "title": "List Views", "theme": "listViews", "icon": "icon-format-align-justify", "listView": true, "component": "", "singlePage": false },
                { "title": "Parallax", "theme": "parallax", "icon": "icon-format-line-spacing", "listView": false, "component": "", "singlePage": false },
                { "title": "Login Pages", "theme": "login", "icon": "icon-lock-open-outline", "listView": false, "component": "", "singlePage": false },
                { "title": "Register Pages", "theme": "register", "icon": "icon-comment-account", "listView": false, "component": "", "singlePage": false },
                { "title": "Image Gallery", "theme": "imageGallery", "icon": "icon-apps", "listView": false, "component": "", "singlePage": false },
                { "title": "Splash Screen", "theme": "splashScreens", "icon": "icon-logout", "listView": false, "component": "", "singlePage": false },
                { "title": "Check Boxs", "theme": "checkBoxes", "icon": "icon-checkbox-marked", "listView": false, "component": "", "singlePage": false },
                { "title": "Search Bars", "theme": "searchBars", "icon": "icon-magnify", "listView": false, "component": "", "singlePage": false },
                { "title": "Typo + small components", "theme": "textViews", "icon": "icon-tumblr", "listView": false, "component": "", "singlePage": false },
                { "title": "Wizard", "theme": "wizard", "icon": "icon-cellphone-settings", "listView": false, "component": "", "singlePage": false },
                { "title": "Spinner", "theme": "spinner", "icon": "icon-image-filter-tilt-shift", "listView": false, "component": "", "singlePage": false },
                { "title": "Tabs", "theme": "tabs", "icon": "icon-view-array", "listView": false, "component": "", "singlePage": false },
                { "title": "Maps", "theme": "maps", "icon": "icon-google-maps", "listView": false, "component": "", "singlePage": false },
                { "title": "QRCode", "theme": "qrcode", "icon": "icon-qrcode", "listView": false, "component": "", "singlePage": false },
                { "title": "Radio Button", "theme": "radioButton", "icon": "icon-radiobox-marked", "listView": false, "component": "", "singlePage": false },
                { "title": "Range", "theme": "range", "icon": "icon-toggle-switch-off", "listView": false, "component": "", "singlePage": false },
                { "title": "Toggle", "theme": "toggle", "icon": "icon-toggle-switch", "listView": false, "component": "", "singlePage": false },
                { "title": "Select", "theme": "select", "icon": "icon-menu-down", "listView": true, "component": "", "singlePage": false },
                { "title": "Action Sheet", "theme": "actionSheet", "icon": "icon-dots-horizontal", "listView": false, "component": "", "singlePage": false }
            ];
        };
        this.getDataForTheme = function (menuItem) {
            return {
                "image": "assets/images/samparaglider_black.jpg"
            };
            // "image": "assets/images/logo/login.png",
            // "title": "Ionic3 UI Theme - Yellow Dark"
            // "background": "#000000",
        };
        this.getEventsForTheme = function (menuItem) {
            return {};
        };
        this.prepareParams = function (item) {
            return {
                title: item.title,
                data: {},
                events: _this.getEventsForTheme(item)
            };
        };
    }
    MenuService.prototype.load = function (item) {
        var _this = this;
        if (__WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */].IS_FIREBASE_ENABLED) {
            return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
                _this.af
                    .object('menu')
                    .valueChanges()
                    .subscribe(function (snapshot) {
                    observer.next(snapshot);
                    observer.complete();
                }, function (err) {
                    observer.error([]);
                    observer.complete();
                });
            });
        }
        else {
            return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
                observer.next(_this.getDataForTheme(item));
                observer.complete();
            });
        }
    };
    MenuService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], MenuService);
    return MenuService;
}());

//# sourceMappingURL=menu-service.js.map

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppSettings; });
var AppSettings = Object.freeze({
    "IS_FIREBASE_ENABLED": false,
    "SHOW_START_WIZARD": false,
    "SUBSCRIBE": true,
    "TOAST": {
        "duration": 1000,
        "position": "buttom"
    },
    "FIREBASE_CONFIG": {
        "apiKey": "AIzaSyCqrGGPf5TJK0kwVqn8Z5-HnKJcx6wS9Tg",
        "authDomain": "elements-arton.firebaseapp.com",
        "databaseURL": "https://elements-arton.firebaseio.com",
        "projectId": "elements-arton",
        "storageBucket": "elements-arton.appspot.com",
        "messagingSenderId": "715361864172"
    },
    "MAP_KEY": {
        "apiKey": "AIzaSyCqrGGPf5TJK0kwVqn8Z5-HnKJcx6wS9Tg"
    }
});
//# sourceMappingURL=app-settings.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProdutoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_firestore__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProdutoService = (function () {
    function ProdutoService(afs) {
        this.afs = afs;
        this.produtosCollection = this.afs.collection('produto', function (ref) { return ref.orderBy('nome'); });
        //this.tasks = this.afs.collection('tasks').valueChanges();
        this.produtos = this.produtosCollection.snapshotChanges().map(function (changes) {
            return changes.map(function (a) {
                var data = a.payload.doc.data();
                data.uuid = a.payload.doc.id;
                return data;
            });
        });
        /*      this.produtos = this.produtosCollection.snapshotChanges().pipe(
                map(actions => {
                return actions.map(a => {
                    const data = a.payload.doc.data() as Produto;
                    const id = a.payload.doc.id;
                    return { ...data };
                });
                })
              );
              */
    }
    ProdutoService.prototype.getProdutos = function () {
        return this.produtos;
    };
    ProdutoService.prototype.addProduto = function (produto) {
        return this.produtosCollection.add(produto);
    };
    ProdutoService.prototype.deleteProduto = function (produto) {
        this.produtosDoc = this.afs.doc("produto/" + produto.uuid);
        return this.produtosDoc.delete();
    };
    ProdutoService.prototype.updateProduto = function (produto) {
        this.produtosDoc = this.afs.doc("produto/" + produto.uuid);
        return this.produtosDoc.update(produto);
    };
    ProdutoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_angularfire2_firestore__["a" /* AngularFirestore */]])
    ], ProdutoService);
    return ProdutoService;
}());

//# sourceMappingURL=produto.service.js.map

/***/ }),

/***/ 249:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 249;

/***/ }),

/***/ 294:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../components/action-sheet/layout-1/action-sheet-layout-1.module": [
		1045,
		39
	],
	"../components/action-sheet/layout-2/action-sheet-layout-2.module": [
		1046,
		38
	],
	"../components/action-sheet/layout-3/action-sheet-layout-3.module": [
		1047,
		114
	],
	"../components/check-box/layout-1/check-box-layout-1.module": [
		1048,
		113
	],
	"../components/check-box/layout-2/check-box-layout-2.module": [
		1049,
		112
	],
	"../components/check-box/layout-3/check-box-layout-3.module": [
		1050,
		111
	],
	"../components/check-box/layout-4/check-box-layout-4.module": [
		1051,
		110
	],
	"../components/full-screen-gallery/full-screen-gallery.module": [
		1052,
		109
	],
	"../components/image-gallery/layout-1/image-gallery-layout-1.module": [
		1053,
		108
	],
	"../components/image-gallery/layout-2/image-gallery-layout-2.module": [
		1054,
		107
	],
	"../components/image-gallery/layout-3/image-gallery-layout-3.module": [
		1119,
		106
	],
	"../components/list-view/appearance-animation/layout-1/appearance-animation-layout-1.module": [
		1055,
		105
	],
	"../components/list-view/appearance-animation/layout-2/appearance-animation-layout-2.module": [
		1056,
		104
	],
	"../components/list-view/appearance-animation/layout-3/appearance-animation-layout-3.module": [
		1057,
		103
	],
	"../components/list-view/appearance-animation/layout-4/appearance-animation-layout-4.module": [
		1058,
		102
	],
	"../components/list-view/appearance-animation/layout-5/appearance-animation-layout-5.module": [
		1059,
		101
	],
	"../components/list-view/drag-and-drop/layout-1/drag-and-drop-layout-1.module": [
		1060,
		100
	],
	"../components/list-view/drag-and-drop/layout-2/drag-and-drop-layout-2.module": [
		1061,
		99
	],
	"../components/list-view/drag-and-drop/layout-3/drag-and-drop-layout-3.module": [
		1062,
		98
	],
	"../components/list-view/drag-and-drop/layout-4/drag-and-drop-layout-4.module": [
		1063,
		97
	],
	"../components/list-view/expandable/layout-1/expandable-layout-1.module": [
		1064,
		96
	],
	"../components/list-view/expandable/layout-2/expandable-layout-2.module": [
		1065,
		95
	],
	"../components/list-view/expandable/layout-3/expandable-layout-3.module": [
		1066,
		94
	],
	"../components/list-view/google-card/layout-1/google-card-layout-1.module": [
		1068,
		93
	],
	"../components/list-view/google-card/layout-2/google-card-layout-2.module": [
		1067,
		92
	],
	"../components/list-view/google-card/layout-3/google-card-layout-3.module": [
		1069,
		91
	],
	"../components/list-view/google-card/layout-4/google-card-layout-4.module": [
		1070,
		90
	],
	"../components/list-view/sticky-list-header/layout-1/sticky-list-header-layout-1.module": [
		1071,
		24
	],
	"../components/list-view/sticky-list-header/layout-2/sticky-list-header-layout-2.module": [
		1078,
		23
	],
	"../components/list-view/sticky-list-header/layout-3/sticky-list-header-layout-3.module": [
		1072,
		22
	],
	"../components/list-view/sticky-list-header/layout-4/sticky-list-header-layout-4.module": [
		1073,
		21
	],
	"../components/list-view/swipe-to-dismiss/layout-1/swipe-to-dismiss-layout-1.module": [
		1074,
		89
	],
	"../components/list-view/swipe-to-dismiss/layout-2/swipe-to-dismiss-layout-2.module": [
		1075,
		88
	],
	"../components/list-view/swipe-to-dismiss/layout-3/swipe-to-dismiss-layout-3.module": [
		1076,
		87
	],
	"../components/list-view/swipe-to-dismiss/layout-4/swipe-to-dismiss-layout-4.module": [
		1077,
		86
	],
	"../components/login/layout-1/login-layout-1.module": [
		1085,
		85
	],
	"../components/login/layout-2/login-layout-2.module": [
		1079,
		84
	],
	"../components/maps/layout-1/maps-layout-1.module": [
		1080,
		2
	],
	"../components/maps/layout-2/maps-layout-2.module": [
		1081,
		4
	],
	"../components/maps/layout-3/maps-layout-3.module": [
		1083,
		3
	],
	"../components/parallax/layout-1/parallax-layout-1.module": [
		1082,
		37
	],
	"../components/parallax/layout-2/parallax-layout-2.module": [
		1084,
		36
	],
	"../components/parallax/layout-3/parallax-layout-3.module": [
		1086,
		35
	],
	"../components/parallax/layout-4/parallax-layout-4.module": [
		1087,
		34
	],
	"../components/qrcode/layout-1/qrcode-layout-1.module": [
		1089,
		83
	],
	"../components/radio-button/layout-1/radio-button-layout-1.module": [
		1088,
		82
	],
	"../components/radio-button/layout-2/radio-button-layout-2.module": [
		1090,
		81
	],
	"../components/radio-button/layout-3/radio-button-layout-3.module": [
		1091,
		80
	],
	"../components/range/layout-1/range-layout-1.module": [
		1092,
		79
	],
	"../components/range/layout-2/range-layout-2.module": [
		1093,
		78
	],
	"../components/range/layout-3/range-layout-3.module": [
		1094,
		77
	],
	"../components/range/layout-4/range-layout-4.module": [
		1095,
		76
	],
	"../components/register/layout-1/register-layout-1.module": [
		1096,
		75
	],
	"../components/register/layout-2/register-layout-2.module": [
		1097,
		74
	],
	"../components/search-bar/layout-1/search-bar-layout-1.module": [
		1098,
		73
	],
	"../components/search-bar/layout-2/search-bar-layout-2.module": [
		1099,
		72
	],
	"../components/search-bar/layout-3/search-bar-layout-3.module": [
		1100,
		71
	],
	"../components/select/layout-1/select-layout-1.module": [
		1101,
		70
	],
	"../components/select/layout-2/select-layout-2.module": [
		1102,
		69
	],
	"../components/select/layout-3/select-layout-3.module": [
		1103,
		68
	],
	"../components/select/layout-4/select-layout-4.module": [
		1104,
		67
	],
	"../components/select/layout-5/select-layout-5.module": [
		1106,
		66
	],
	"../components/select/layout-6/select-layout-6.module": [
		1105,
		65
	],
	"../components/spinner/spinner.module": [
		1107,
		64
	],
	"../components/splash-screen/layout-1/splash-screen-layout-1.module": [
		1108,
		63
	],
	"../components/splash-screen/layout-2/splash-screen-layout-2.module": [
		1109,
		62
	],
	"../components/splash-screen/layout-3/splash-screen-layout-3.module": [
		1110,
		61
	],
	"../components/sub-image-gallery/sub-image-gallery.module": [
		1043,
		60
	],
	"../components/tabs/layout-1/tabs-layout-1.module": [
		1111,
		59
	],
	"../components/tabs/layout-2/tabs-layout-2.module": [
		1118,
		58
	],
	"../components/tabs/layout-3/tabs-layout-3.module": [
		1112,
		57
	],
	"../components/toggle/layout-1/toggle-layout-1.module": [
		1113,
		56
	],
	"../components/toggle/layout-2/toggle-layout-2.module": [
		1114,
		55
	],
	"../components/toggle/layout-3/toggle-layout-3.module": [
		1115,
		54
	],
	"../components/wizard/layout-1/wizard-layout-1.module": [
		1044,
		53
	],
	"../components/wizard/layout-2/wizard-layout-2.module": [
		1116,
		52
	],
	"../components/wizard/layout-3/wizard-layout-3.module": [
		1117,
		51
	],
	"../pages/elementsClasses/elementsClasses.module": [
		1120,
		48
	],
	"../pages/elementsHome/elementsHome.module": [
		1121,
		47
	],
	"../pages/firebase/firebase.module": [
		425
	],
	"../pages/home/home.module": [
		1122,
		46
	],
	"../pages/intro-page/intro-page.module": [
		1123,
		29
	],
	"../pages/item-details-action-sheet/item-details-action-sheet.module": [
		1124,
		14
	],
	"../pages/item-details-appearance-animation/item-details-appearance-animation.module": [
		1125,
		7
	],
	"../pages/item-details-check-box/item-details-check-box.module": [
		1129,
		13
	],
	"../pages/item-details-drag-and-drop/item-details-drag-and-drop.module": [
		1126,
		12
	],
	"../pages/item-details-expandable/item-details-expandable.module": [
		1127,
		25
	],
	"../pages/item-details-full-screen-gallery/item-details-full-screen-gallery.module": [
		1128,
		33
	],
	"../pages/item-details-google-card/item-details-google-card.module": [
		1130,
		11
	],
	"../pages/item-details-image-gallery/item-details-image-gallery.module": [
		1133,
		26
	],
	"../pages/item-details-login/item-details-login.module": [
		1131,
		28
	],
	"../pages/item-details-maps/item-details-maps.module": [
		1132,
		0
	],
	"../pages/item-details-parallax/item-details-parallax.module": [
		1134,
		8
	],
	"../pages/item-details-qrcode/item-details-qrcode.module": [
		1135,
		32
	],
	"../pages/item-details-radio-button/item-details-radio-button.module": [
		1136,
		20
	],
	"../pages/item-details-range/item-details-range.module": [
		1137,
		9
	],
	"../pages/item-details-register/item-details-register.module": [
		1138,
		27
	],
	"../pages/item-details-search-bar/item-details-search-bar.module": [
		1139,
		19
	],
	"../pages/item-details-select/item-details-select.module": [
		1140,
		6
	],
	"../pages/item-details-spinner/item-details-spinner.module": [
		1141,
		31
	],
	"../pages/item-details-splash-screen/item-details-splash-screen.module": [
		1142,
		18
	],
	"../pages/item-details-sticky-list-header/item-details-sticky-list-header.module": [
		1143,
		5
	],
	"../pages/item-details-sub-image-gallery/item-details-sub-image-gallery.module": [
		1144,
		30
	],
	"../pages/item-details-swipe-to-dismiss/item-details-swipe-to-dismiss.module": [
		1145,
		10
	],
	"../pages/item-details-tabs/item-details-tabs.module": [
		1146,
		17
	],
	"../pages/item-details-text-view/item-details-text-view.module": [
		1147,
		50
	],
	"../pages/item-details-toggle/item-details-toggle.module": [
		1148,
		16
	],
	"../pages/item-details-wizard/item-details-wizard.module": [
		1149,
		15
	],
	"../pages/item-details/item-details.module": [
		1150,
		49
	],
	"../pages/items/items.module": [
		1154,
		1
	],
	"../pages/manter-produto/manter-produto.module": [
		568
	],
	"../pages/tab-page-1/tab-page-1.module": [
		1151,
		45
	],
	"../pages/tab-page-2/tab-page-2.module": [
		1152,
		44
	],
	"../pages/tab-page-3/tab-page-3.module": [
		1153,
		43
	],
	"../pages/tab-page-4/tab-page-4.module": [
		1155,
		42
	],
	"../pages/tab-page-5/tab-page-5.module": [
		1156,
		41
	],
	"../pages/tab-page-6/tab-page-6.module": [
		1157,
		40
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 294;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 425:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebasePageModule", function() { return FirebasePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__firebase__ = __webpack_require__(970);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// import {MatExpansionModule} from '@angular/material';
var FirebasePageModule = (function () {
    function FirebasePageModule() {
    }
    FirebasePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__firebase__["a" /* FirebasePage */],
            ],
            imports: [
                // MatExpansionModule,
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__firebase__["a" /* FirebasePage */]),
            ],
        })
    ], FirebasePageModule);
    return FirebasePageModule;
}());

//# sourceMappingURL=firebase.module.js.map

/***/ }),

/***/ 435:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManterProdutoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_services_produto_service__ = __webpack_require__(213);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the ManterProdutoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ManterProdutoPage = (function () {
    /* {id:null, nome:"", descricao:""} */
    function ManterProdutoPage(navCtrl, navParams, formBuilder, toastCtrl, afs, produtoService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.toastCtrl = toastCtrl;
        this.afs = afs;
        this.produtoService = produtoService;
        this.produto = this.navParams.data.produto || {};
        this.inclusao = navParams.get('tipo') == "inserir" ? true : false;
        this.titulo = navParams.get('tipo') == "inserir" ? "Inserir Produto" : "Editar Produto";
        this.createForm();
    }
    ManterProdutoPage.prototype.ionViewDidLoad = function () {
        this.itemsCollection = this.afs.collection('produto');
        console.log('ionViewDidLoad ManterProdutoPage');
    };
    ManterProdutoPage.prototype.createForm = function () {
        this.form = this.formBuilder.group({
            uuid: [this.produto.uuid],
            /* id: [this.produto.id, Validators.required], */
            nome: [this.produto.nome, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            descricao: [this.produto.descricao],
        });
    };
    ManterProdutoPage.prototype.salvar = function () {
        if (!this.form.value.uuid) {
            this.incluirProduto();
        }
        else {
            this.alterarProduto();
        }
    };
    ManterProdutoPage.prototype.incluirProduto = function () {
        var _this = this;
        if (this.form.valid) {
            // this.itemsCollection.add(this.form.value)
            this.produtoService.addProduto(this.form.value)
                .then(function () {
                _this.toastCtrl.create({ message: 'Produto salvo com sucesso.', duration: 3000 }).present();
                _this.navCtrl.pop();
            })
                .catch(function (e) {
                _this.toastCtrl.create({ message: 'Erro ao salvar o produto.', duration: 3000 }).present();
                console.error(e);
            });
        }
    };
    ManterProdutoPage.prototype.alterarProduto = function () {
        var _this = this;
        if (this.form.valid) {
            this.produtoService.updateProduto(this.form.value)
                .then(function () {
                _this.toastCtrl.create({ message: 'Produto alterado com sucesso.', duration: 3000 }).present();
                _this.navCtrl.pop();
            })
                .catch(function (e) {
                _this.toastCtrl.create({ message: 'Erro ao alterar o produto.', duration: 3000 }).present();
                console.error(e);
            });
        }
    };
    ManterProdutoPage.prototype.voltar = function () {
        this.navCtrl.pop();
    };
    ManterProdutoPage.prototype.limpar = function () {
        this.createForm();
    };
    ManterProdutoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-manter-produto',template:/*ion-inline-start:"D:\equipe\ionic\particular\siscov-webapp\src\pages\manter-produto\manter-produto.html"*/'<!--\n  Generated template for the ManterProdutoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-toolbar>\n        <ion-buttons left>\n            <button ion-button icon-only (click)="voltar()">\n                <ion-icon name="arrow-back"></ion-icon>\n            </button>\n        </ion-buttons>\n        <ion-title>{{titulo}}</ion-title>\n    </ion-toolbar>\n  </ion-navbar>\n\n</ion-header>\n<ion-content padding>\n    <form [formGroup]="form">\n        <ion-row>\n            <ion-col col-12 col-lg-12 col-xl-12>\n                <ion-item>\n                  <ion-label floating>Nome</ion-label>\n                  <ion-input type="text" formControlName="nome" class="corTexto"></ion-input>\n                </ion-item>\n                <ion-item *ngIf="!form.controls.nome.valid && (form.controls.nome.dirty || form.controls.nome.touched)" color="danger">\n                    <div [hidden]="!form.controls.nome.errors.required">\n                     Campo obrigatório\n                    </div>\n                  </ion-item>\n              </ion-col>\n          </ion-row>\n          <ion-row>\n              <ion-col col-12 col-lg-12 col-xl-12>\n                  <ion-item>\n                    <ion-label floating>Descrição</ion-label>\n                    <ion-input type="text" formControlName="descricao"></ion-input>\n                  </ion-item>\n                </ion-col>\n            </ion-row>\n    </form>\n\n</ion-content>\n<ion-footer>\n  <button ion-button float-end (click)="salvar()" [disabled]="!form.valid">\n    <ion-icon name="archive" padding-right></ion-icon>\n    Salvar\n  </button>\n  <button ion-button float-start (click)="limpar()">\n    <ion-icon name="refresh" padding-right></ion-icon>\n    Limpar\n  </button>\n</ion-footer>\n'/*ion-inline-end:"D:\equipe\ionic\particular\siscov-webapp\src\pages\manter-produto\manter-produto.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__["a" /* AngularFirestore */],
            __WEBPACK_IMPORTED_MODULE_4__app_services_produto_service__["a" /* ProdutoService */]])
    ], ManterProdutoPage);
    return ManterProdutoPage;
}());

//# sourceMappingURL=manter-produto.js.map

/***/ }),

/***/ 568:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManterProdutoPageModule", function() { return ManterProdutoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__manter_produto__ = __webpack_require__(435);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ManterProdutoPageModule = (function () {
    function ManterProdutoPageModule() {
    }
    ManterProdutoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__manter_produto__["a" /* ManterProdutoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__manter_produto__["a" /* ManterProdutoPage */]),
            ],
        })
    ], ManterProdutoPageModule);
    return ManterProdutoPageModule;
}());

//# sourceMappingURL=manter-produto.module.js.map

/***/ }),

/***/ 611:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoadingService = (function () {
    function LoadingService(loadingCtrl) {
        this.loadingCtrl = loadingCtrl;
    }
    LoadingService.prototype.show = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        this.loading.present();
    };
    LoadingService.prototype.hide = function () {
        this.loading.dismiss();
    };
    LoadingService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["i" /* LoadingController */]])
    ], LoadingService);
    return LoadingService;
}());

//# sourceMappingURL=loading-service.js.map

/***/ }),

/***/ 613:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_settings__ = __webpack_require__(141);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ToastService = (function () {
    function ToastService(toastCtrl) {
        this.toastCtrl = toastCtrl;
    }
    ToastService.prototype.presentToast = function (message) {
        var toastItem = __WEBPACK_IMPORTED_MODULE_2__app_settings__["a" /* AppSettings */].TOAST;
        toastItem["message"] = message;
        var toast = this.toastCtrl.create(toastItem);
        toast.present();
    };
    ToastService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["r" /* ToastController */]])
    ], ToastService);
    return ToastService;
}());

//# sourceMappingURL=toast-service.js.map

/***/ }),

/***/ 617:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(618);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(622);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 622:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(616);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(1030);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__ = __webpack_require__(1032);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_firestore__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_toast_service__ = __webpack_require__(613);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_loading_service__ = __webpack_require__(611);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__ = __webpack_require__(1036);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__ = __webpack_require__(1040);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_barcode_scanner__ = __webpack_require__(1041);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_google_analytics__ = __webpack_require__(1042);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_firebase_firebase_module__ = __webpack_require__(425);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angularfire2_database__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_produto_service__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_manter_produto_manter_produto_module__ = __webpack_require__(568);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















// const firebaseAppConfig: FirebaseAppConfig = {
//   apiKey: "AIzaSyCqrGGPf5TJK0kwVqn8Z5-HnKJcx6wS9Tg",
//   authDomain: "elements-arton.firebaseapp.com",
//   databaseURL: "https://elements-arton.firebaseio.com",
//   projectId: "elements-arton",
//   storageBucket: "elements-arton.appspot.com",
//   messagingSenderId: "715361864172"
// }
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../components/action-sheet/layout-1/action-sheet-layout-1.module#ActionSheetLayout1Module', name: 'ActionSheetLayout1', segment: 'action-sheet-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/action-sheet/layout-2/action-sheet-layout-2.module#ActionSheetLayout2Module', name: 'ActionSheetLayout2', segment: 'action-sheet-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/action-sheet/layout-3/action-sheet-layout-3.module#ActionSheetLayout3Module', name: 'ActionSheetLayout3', segment: 'action-sheet-layout-3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/check-box/layout-1/check-box-layout-1.module#CheckBoxLayout1Module', name: 'CheckBoxLayout1', segment: 'check-box-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/check-box/layout-2/check-box-layout-2.module#CheckBoxLayout2Module', name: 'CheckBoxLayout2', segment: 'check-box-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/check-box/layout-3/check-box-layout-3.module#CheckBoxLayout3Module', name: 'CheckBoxLayout3', segment: 'check-box-layout-3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/check-box/layout-4/check-box-layout-4.module#CheckBoxLayout4Module', name: 'CheckBoxLayout4', segment: 'check-box-layout-4', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/full-screen-gallery/full-screen-gallery.module#FullScreenGalleryModule', name: 'FullScreenGallery', segment: 'full-screen-gallery', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/image-gallery/layout-1/image-gallery-layout-1.module#ImageGalleryLayout1Module', name: 'ImageGalleryLayout1', segment: 'image-gallery-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/image-gallery/layout-2/image-gallery-layout-2.module#ImageGalleryLayout2Module', name: 'ImageGalleryLayout2', segment: 'image-gallery-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/list-view/appearance-animation/layout-1/appearance-animation-layout-1.module#AppearanceAnimationLayout1Module', name: 'AppearanceAnimationLayout1', segment: 'appearance-animation-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/image-gallery/layout-3/image-gallery-layout-3.module#ImageGalleryLayout3Module', name: 'ImageGalleryLayout3', segment: 'image-gallery-layout-3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/list-view/appearance-animation/layout-2/appearance-animation-layout-2.module#AppearanceAnimationLayout2Module', name: 'AppearanceAnimationLayout2', segment: 'appearance-animation-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/list-view/appearance-animation/layout-3/appearance-animation-layout-3.module#AppearanceAnimationLayout3Module', name: 'AppearanceAnimationLayout3', segment: 'appearance-animation-layout-3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/list-view/appearance-animation/layout-4/appearance-animation-layout-4.module#AppearanceAnimationLayout4Module', name: 'AppearanceAnimationLayout4', segment: 'appearance-animation-layout-4', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/list-view/appearance-animation/layout-5/appearance-animation-layout-5.module#AppearanceAnimationLayout5Module', name: 'AppearanceAnimationLayout5', segment: 'appearance-animation-layout-5', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/list-view/drag-and-drop/layout-1/drag-and-drop-layout-1.module#DragAndDropLayout1Module', name: 'DragAndDropLayout1', segment: 'drag-and-drop-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/list-view/drag-and-drop/layout-2/drag-and-drop-layout-2.module#DragAndDropLayout2Module', name: 'DragAndDropLayout2', segment: 'drag-and-drop-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/list-view/drag-and-drop/layout-3/drag-and-drop-layout-3.module#DragAndDropLayout3Module', name: 'DragAndDropLayout3', segment: 'drag-and-drop-layout-3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/list-view/drag-and-drop/layout-4/drag-and-drop-layout-4.module#DragAndDropLayout4Module', name: 'DragAndDropLayout4', segment: 'drag-and-drop-layout-4', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/list-view/expandable/layout-1/expandable-layout-1.module#ExpandableLayout1Module', name: 'ExpandableLayout1', segment: 'expandable-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/list-view/expandable/layout-2/expandable-layout-2.module#ExpandableLayout2Module', name: 'ExpandableLayout2', segment: 'expandable-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/list-view/expandable/layout-3/expandable-layout-3.module#ExpandableLayout3Module', name: 'ExpandableLayout3', segment: 'expandable-layout-3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/list-view/google-card/layout-2/google-card-layout-2.module#GoogleCardLayout2Module', name: 'GoogleCardLayout2', segment: 'google-card-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/list-view/google-card/layout-1/google-card-layout-1.module#GoogleCardLayout1Module', name: 'GoogleCardLayout1', segment: 'google-card-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/list-view/google-card/layout-3/google-card-layout-3.module#GoogleCardLayout3Module', name: 'GoogleCardLayout3', segment: 'google-card-layout-3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/list-view/google-card/layout-4/google-card-layout-4.module#GoogleCardLayout4Module', name: 'GoogleCardLayout4', segment: 'google-card-layout-4', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/list-view/sticky-list-header/layout-1/sticky-list-header-layout-1.module#StickyListHeaderLayout1Module', name: 'StickyListHeaderLayout1', segment: 'sticky-list-header-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/list-view/sticky-list-header/layout-3/sticky-list-header-layout-3.module#StickyListHeaderLayout3Module', name: 'StickyListHeaderLayout3', segment: 'sticky-list-header-layout-3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/list-view/sticky-list-header/layout-4/sticky-list-header-layout-4.module#StickyListHeaderLayout4Module', name: 'StickyListHeaderLayout4', segment: 'sticky-list-header-layout-4', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/list-view/swipe-to-dismiss/layout-1/swipe-to-dismiss-layout-1.module#SwipeToDismissLayout1Module', name: 'SwipeToDismissLayout1', segment: 'swipe-to-dismiss-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/list-view/swipe-to-dismiss/layout-2/swipe-to-dismiss-layout-2.module#SwipeToDismissLayout2Module', name: 'SwipeToDismissLayout2', segment: 'swipe-to-dismiss-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/list-view/swipe-to-dismiss/layout-3/swipe-to-dismiss-layout-3.module#SwipeToDismissLayout3Module', name: 'SwipeToDismissLayout3', segment: 'swipe-to-dismiss-layout-3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/list-view/swipe-to-dismiss/layout-4/swipe-to-dismiss-layout-4.module#SwipeToDismissLayout4Module', name: 'SwipeToDismissLayout4', segment: 'swipe-to-dismiss-layout-4', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/list-view/sticky-list-header/layout-2/sticky-list-header-layout-2.module#StickyListHeaderLayout2Module', name: 'StickyListHeaderLayout2', segment: 'sticky-list-header-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/login/layout-2/login-layout-2.module#LoginLayout2Module', name: 'LoginLayout2', segment: 'login-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/maps/layout-1/maps-layout-1.module#MapsLayout1Module', name: 'MapsLayout1', segment: 'maps-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/maps/layout-2/maps-layout-2.module#MapsLayout2Module', name: 'MapsLayout2', segment: 'maps-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/parallax/layout-1/parallax-layout-1.module#ParallaxLayout1Module', name: 'ParallaxLayout1', segment: 'parallax-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/maps/layout-3/maps-layout-3.module#MapsLayout3Module', name: 'MapsLayout3', segment: 'maps-layout-3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/parallax/layout-2/parallax-layout-2.module#ParallaxLayout2Module', name: 'ParallaxLayout2', segment: 'parallax-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/login/layout-1/login-layout-1.module#LoginLayout1Module', name: 'LoginLayout1', segment: 'login-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/parallax/layout-3/parallax-layout-3.module#ParallaxLayout3Module', name: 'ParallaxLayout3', segment: 'parallax-layout-3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/parallax/layout-4/parallax-layout-4.module#ParallaxLayout4Module', name: 'ParallaxLayout4', segment: 'parallax-layout-4', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/radio-button/layout-1/radio-button-layout-1.module#RadioButtonLayout1Module', name: 'RadioButtonLayout1', segment: 'radio-button-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/qrcode/layout-1/qrcode-layout-1.module#QRcodeLayout1Module', name: 'QRcodeLayout1', segment: 'qrcode-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/radio-button/layout-2/radio-button-layout-2.module#RadioButtonLayout2Module', name: 'RadioButtonLayout2', segment: 'radio-button-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/radio-button/layout-3/radio-button-layout-3.module#RadioButtonLayout3Module', name: 'RadioButtonLayout3', segment: 'radio-button-layout-3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/range/layout-1/range-layout-1.module#RangeLayout1Module', name: 'RangeLayout1', segment: 'range-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/range/layout-2/range-layout-2.module#RangeLayout2Module', name: 'RangeLayout2', segment: 'range-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/range/layout-3/range-layout-3.module#RangeLayout3Module', name: 'RangeLayout3', segment: 'range-layout-3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/range/layout-4/range-layout-4.module#RangeLayout4Module', name: 'RangeLayout4', segment: 'range-layout-4', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/register/layout-1/register-layout-1.module#RegisterLayout1Module', name: 'RegisterLayout1', segment: 'register-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/register/layout-2/register-layout-2.module#RegisterLayout2Module', name: 'RegisterLayout2', segment: 'register-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/search-bar/layout-1/search-bar-layout-1.module#SearchBarLayout1Module', name: 'SearchBarLayout1', segment: 'search-bar-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/search-bar/layout-2/search-bar-layout-2.module#SearchBarLayout2Module', name: 'SearchBarLayout2', segment: 'search-bar-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/search-bar/layout-3/search-bar-layout-3.module#SearchBarLayout3Module', name: 'SearchBarLayout3', segment: 'search-bar-layout-3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/select/layout-1/select-layout-1.module#SelectLayout1Module', name: 'SelectLayout1', segment: 'select-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/select/layout-2/select-layout-2.module#SelectLayout2Module', name: 'SelectLayout2', segment: 'select-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/select/layout-3/select-layout-3.module#SelectLayout3Module', name: 'SelectLayout3', segment: 'select-layout-3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/select/layout-4/select-layout-4.module#SelectLayout4Module', name: 'SelectLayout4', segment: 'select-layout-4', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/select/layout-6/select-layout-6.module#SelectLayout6Module', name: 'SelectLayout6', segment: 'select-layout-6', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/select/layout-5/select-layout-5.module#SelectLayout5Module', name: 'SelectLayout5', segment: 'select-layout-5', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/spinner/spinner.module#SpinnerModule', name: 'Spinner', segment: 'spinner', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/splash-screen/layout-1/splash-screen-layout-1.module#SplashScreenLayout1Module', name: 'SplashScreenLayout1', segment: 'splash-screen-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/splash-screen/layout-2/splash-screen-layout-2.module#SplashScreenLayout2Module', name: 'SplashScreenLayout2', segment: 'splash-screen-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/splash-screen/layout-3/splash-screen-layout-3.module#SplashScreenLayout3Module', name: 'SplashScreenLayout3', segment: 'splash-screen-layout-3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/tabs/layout-1/tabs-layout-1.module#TabsLayout1Module', name: 'TabsLayout1', segment: 'tabs-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/tabs/layout-3/tabs-layout-3.module#TabsLayout3Module', name: 'TabsLayout3', segment: 'tabs-layout-3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/sub-image-gallery/sub-image-gallery.module#SubImageGalleryModule', name: 'SubImageGallery', segment: 'sub-image-gallery', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/toggle/layout-1/toggle-layout-1.module#ToggleLayout1Module', name: 'ToggleLayout1', segment: 'toggle-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/toggle/layout-2/toggle-layout-2.module#ToggleLayout2Module', name: 'ToggleLayout2', segment: 'toggle-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/toggle/layout-3/toggle-layout-3.module#ToggleLayout3Module', name: 'ToggleLayout3', segment: 'toggle-layout-3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/wizard/layout-1/wizard-layout-1.module#WizardLayout1Module', name: 'WizardLayout1', segment: 'wizard-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/wizard/layout-2/wizard-layout-2.module#WizardLayout2Module', name: 'WizardLayout2', segment: 'wizard-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/wizard/layout-3/wizard-layout-3.module#WizardLayout3Module', name: 'WizardLayout3', segment: 'wizard-layout-3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/elementsClasses/elementsClasses.module#ElementsClassesPageModule', name: 'ElementsClassesPage', segment: 'elementsClasses', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/elementsHome/elementsHome.module#ElementsHomePageModule', name: 'ElementsHomePage', segment: 'elementsHome', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/tabs/layout-2/tabs-layout-2.module#TabsLayout2Module', name: 'TabsLayout2', segment: 'tabs-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/firebase/firebase.module#FirebasePageModule', name: 'FirebasePage', segment: 'firebase', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/intro-page/intro-page.module#IntroPageModule', name: 'IntroPage', segment: 'intro-page', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/item-details-action-sheet/item-details-action-sheet.module#ItemDetailsPageActionSheetModule', name: 'ItemDetailsPageActionSheet', segment: 'item-details-action-sheet', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/item-details-appearance-animation/item-details-appearance-animation.module#ItemDetailsPageAppearanceAnimationModule', name: 'ItemDetailsPageAppearanceAnimation', segment: 'item-details-appearance-animation', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/item-details-drag-and-drop/item-details-drag-and-drop.module#ItemDetailsPageDragAndDropModule', name: 'ItemDetailsPageDragAndDrop', segment: 'item-details-drag-and-drop', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/item-details-expandable/item-details-expandable.module#ItemDetailsPageExpandableModule', name: 'ItemDetailsPageExpandable', segment: 'item-details-expandable', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/item-details-full-screen-gallery/item-details-full-screen-gallery.module#ItemDetailsPageFullScreenGalleryModule', name: 'ItemDetailsPageFullScreenGallery', segment: 'item-details-full-screen-gallery', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/item-details-check-box/item-details-check-box.module#ItemDetailsPageCheckBoxModule', name: 'ItemDetailsPageCheckBox', segment: 'item-details-check-box', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/item-details-google-card/item-details-google-card.module#ItemDetailsPageGoogleCardModule', name: 'ItemDetailsPageGoogleCard', segment: 'item-details-google-card', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/item-details-login/item-details-login.module#ItemDetailsPageLoginModule', name: 'ItemDetailsPageLogin', segment: 'item-details-login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/item-details-maps/item-details-maps.module#ItemDetailsPageMapsModule', name: 'ItemDetailsPageMaps', segment: 'item-details-maps', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/item-details-image-gallery/item-details-image-gallery.module#ItemDetailsPageImageGalleryModule', name: 'ItemDetailsPageImageGallery', segment: 'item-details-image-gallery', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/item-details-parallax/item-details-parallax.module#ItemDetailsPageParallaxModule', name: 'ItemDetailsPageParallax', segment: 'item-details-parallax', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/item-details-qrcode/item-details-qrcode.module#ItemDetailsPageQRCodeModule', name: 'ItemDetailsPageQRCode', segment: 'item-details-qrcode', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/item-details-radio-button/item-details-radio-button.module#ItemDetailsPageRadioButtonModule', name: 'ItemDetailsPageRadioButton', segment: 'item-details-radio-button', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/item-details-range/item-details-range.module#ItemDetailsPageRangeModule', name: 'ItemDetailsPageRange', segment: 'item-details-range', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/item-details-register/item-details-register.module#ItemDetailsPageRegisterModule', name: 'ItemDetailsPageRegister', segment: 'item-details-register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/item-details-search-bar/item-details-search-bar.module#ItemDetailsPageSearchBarModule', name: 'ItemDetailsPageSearchBar', segment: 'item-details-search-bar', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/item-details-select/item-details-select.module#ItemDetailsPageSelectModule', name: 'ItemDetailsPageSelect', segment: 'item-details-select', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/item-details-spinner/item-details-spinner.module#ItemDetailsPageSpinnerModule', name: 'ItemDetailsPageSpinner', segment: 'item-details-spinner', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/item-details-splash-screen/item-details-splash-screen.module#ItemDetailsPageSplashScreenModule', name: 'ItemDetailsPageSplashScreen', segment: 'item-details-splash-screen', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/item-details-sticky-list-header/item-details-sticky-list-header.module#ItemDetailsPageStickyListHeaderModule', name: 'ItemDetailsPageStickyListHeader', segment: 'item-details-sticky-list-header', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/item-details-sub-image-gallery/item-details-sub-image-gallery.module#ItemDetailsPageSubImageGalleryModule', name: 'ItemDetailsPageSubImageGallery', segment: 'item-details-sub-image-gallery', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/item-details-swipe-to-dismiss/item-details-swipe-to-dismiss.module#ItemDetailsPageSwipeToDismissModule', name: 'ItemDetailsPageSwipeToDismiss', segment: 'item-details-swipe-to-dismiss', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/item-details-tabs/item-details-tabs.module#ItemDetailsPageTabsModule', name: 'ItemDetailsPageTabs', segment: 'item-details-tabs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/item-details-text-view/item-details-text-view.module#ItemDetailsPageTextViewModule', name: 'ItemDetailsPageTextView', segment: 'item-details-text-view', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/item-details-toggle/item-details-toggle.module#ItemDetailsPageToggleModule', name: 'ItemDetailsPageToggle', segment: 'item-details-toggle', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/item-details-wizard/item-details-wizard.module#ItemDetailsPageWizardModule', name: 'ItemDetailsPageWizard', segment: 'item-details-wizard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/item-details/item-details.module#ItemDetailsPageModule', name: 'ItemDetailsPage', segment: 'item-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/manter-produto/manter-produto.module#ManterProdutoPageModule', name: 'ManterProdutoPage', segment: 'manter-produto', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tab-page-1/tab-page-1.module#TabPage1Module', name: 'TabPage1', segment: 'tab-page-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tab-page-2/tab-page-2.module#TabPage2Module', name: 'TabPage2', segment: 'tab-page-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tab-page-3/tab-page-3.module#TabPage3Module', name: 'TabPage3', segment: 'tab-page-3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/items/items.module#ItemsPageModule', name: 'ItemsPage', segment: 'items', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tab-page-4/tab-page-4.module#TabPage4Module', name: 'TabPage4', segment: 'tab-page-4', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tab-page-5/tab-page-5.module#TabPage5Module', name: 'TabPage5', segment: 'tab-page-5', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tab-page-6/tab-page-6.module#TabPage6Module', name: 'TabPage6', segment: 'tab-page-6', priority: 'low', defaultHistory: [] }
                    ]
                }),
                //Saints
                // AngularFireModule.initializeApp(firebaseAppConfig),
                // AngularFireDatabaseModule, AngularFireAuthModule, AngularFirestoreModule, ElementsClassesPageModule,
                //David
                __WEBPACK_IMPORTED_MODULE_14__pages_firebase_firebase_module__["FirebasePageModule"],
                __WEBPACK_IMPORTED_MODULE_17__pages_manter_produto_manter_produto_module__["ManterProdutoPageModule"],
                __WEBPACK_IMPORTED_MODULE_5_angularfire2__["a" /* AngularFireModule */].initializeApp({
                    apiKey: "AIzaSyDNCB7UknnvSD2xIeg1iF5he4Q5YX0PfYA",
                    authDomain: "samtech-controle-de-vendas.firebaseapp.com",
                    databaseURL: "https://samtech-controle-de-vendas.firebaseio.com",
                    projectId: "samtech-controle-de-vendas",
                    storageBucket: "samtech-controle-de-vendas.appspot.com",
                    messagingSenderId: "997655845700"
                }),
                __WEBPACK_IMPORTED_MODULE_15_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__["a" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_7_angularfire2_firestore__["b" /* AngularFirestoreModule */].enablePersistence(),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicApp */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */]],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]],
            providers: [
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_barcode_scanner__["a" /* BarcodeScanner */], __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_8__services_toast_service__["a" /* ToastService */], __WEBPACK_IMPORTED_MODULE_9__services_loading_service__["a" /* LoadingService */], __WEBPACK_IMPORTED_MODULE_13__ionic_native_google_analytics__["a" /* GoogleAnalytics */], __WEBPACK_IMPORTED_MODULE_16__services_produto_service__["a" /* ProdutoService */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 970:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirebasePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__manter_produto_manter_produto__ = __webpack_require__(435);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_services_produto_service__ = __webpack_require__(213);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FirebasePage = (function () {
    function FirebasePage(navCtrl, afs, modalCtrl, produtoService, alertCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.afs = afs;
        this.modalCtrl = modalCtrl;
        this.produtoService = produtoService;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
    }
    FirebasePage.prototype.ionViewWillEnter = function () {
        this.inicializaProdutos();
    };
    FirebasePage.prototype.inserir = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__manter_produto_manter_produto__["a" /* ManterProdutoPage */], { tipo: "inserir" });
        modal.present();
    };
    FirebasePage.prototype.editarProduto = function (produto) {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__manter_produto_manter_produto__["a" /* ManterProdutoPage */], { produto: produto });
        modal.present();
    };
    FirebasePage.prototype.removerProduto = function (produto) {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: "Exclus\u00E3o!",
            message: "Deseja remover o produto " + produto.nome + "?",
            buttons: [
                {
                    text: 'Não',
                    handler: function () {
                        console.log('Clicou em Não');
                    }
                },
                {
                    text: 'Sim',
                    handler: function () {
                        console.log('Clicou em Sim');
                        _this.produtoService.deleteProduto(produto)
                            .then(function () {
                            _this.toastCtrl.create({ message: "Produto " + produto.nome + " removido.", duration: 3000 }).present();
                        })
                            .catch(function (e) {
                            _this.toastCtrl.create({ message: 'Erro ao remover o produto.', duration: 3000 }).present();
                            console.error(e);
                        });
                    }
                }
            ]
        });
        confirm.present();
    };
    FirebasePage.prototype.getItems = function (ev) {
        // Reset items back to all of the items
        this.inicializaProdutos();
        // set val to the value of the searchbar
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.produtos = this.produtos.map(function (items) { return items.filter(function (produto) {
                return (produto.nome.toLowerCase().indexOf(val.toLowerCase()) > -1);
            }); });
        }
    };
    FirebasePage.prototype.inicializaProdutos = function () {
        this.produtos = this.produtoService.getProdutos();
    };
    FirebasePage.prototype.toggleGroup = function (group) {
        group.show = !group.show;
    };
    FirebasePage.prototype.isGroupShown = function (group) {
        return group.show;
    };
    FirebasePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-firebase',template:/*ion-inline-start:"D:\equipe\ionic\particular\siscov-webapp\src\pages\firebase\firebase.html"*/'<ion-header>\n    <ion-navbar color="primary">\n      <ion-toolbar>\n          <ion-title>\n          Produtos\n        </ion-title>\n      </ion-toolbar>\n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content padding>\n      <ion-toolbar>\n          <ion-searchbar (ionInput)="getItems($event)">\n            <button ng-if="search.length"\n          class="input-button button button-icon ion-android-close"\n          ng-click="clearSearch()"></button>\n          </ion-searchbar>\n          <ion-buttons class="botao_toolbar" end>\n            <button ion-button icon-only (click)="inserir()">\n                <ion-icon name="add"></ion-icon>\n            </button>\n        </ion-buttons>\n      </ion-toolbar>\n    <ion-col col-12>\n      <ion-list no-margin>\n      <li *ngFor="let item of produtos | async">\n        <!-- List big image Header -->\n        <!--<div class="collapsible-header">-->\n        <div class="collapsible-header" (click)="toggleGroup(item)">\n          <ion-item no-padding>\n            <h2 padding-left item-title>{{item.nome}}</h2>\n            <h3 padding-left item-subtitle>UUID: {{item.uuid}}</h3>\n          </ion-item>\n        </div>\n        <!-- List big image Body -->\n        <div class="item-accordion" [ngClass]="{\'active\': isGroupShown(item) }" [hidden]="!isGroupShown(item)">\n        <!--<div class="item-accordion">-->\n          <ion-item transparent no-lines style="color: white">\n              <h2 padding-left>Descrição: {{item.descricao}}</h2>\n          </ion-item>\n          <button ion-button clear color="secondary" (click)="editarProduto(item)">\n              <ion-icon name="create"></ion-icon>\n              Editar\n            </button>\n            <button ion-button clear color="danger" (click)="removerProduto(item)">\n              <ion-icon name="trash"></ion-icon>\n              Remover\n            </button>\n        </div>\n        <!--end-->\n      </li>\n      </ion-list>\n  </ion-col>\n      <!-- <mat-accordion class="example-headers-align">\n          <mat-expansion-panel *ngFor="let item of produtos | async">\n            <mat-expansion-panel-header>\n                <mat-panel-title>{{ item.nome }}</mat-panel-title>\n                <mat-panel-description>{{ item.descricao }}</mat-panel-description>\n            </mat-expansion-panel-header>\n            <p>{{ item.descricao }}</p>\n            <mat-action-row>\n                <button ion-button clear color="secondary" (click)="editarProduto(item)">\n                    <ion-icon name="create"></ion-icon>\n                    Editar\n                  </button>\n                  <button ion-button clear color="danger" (click)="removerProduto(item)">\n                    <ion-icon name="trash"></ion-icon>\n                    Remover\n                  </button>\n            </mat-action-row>\n          </mat-expansion-panel>\n          </mat-accordion> -->\n  \n    <!-- <ion-fab top right edge>\n      <button ion-fab color="light" (click)="inserir()">\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-fab> -->\n  </ion-content>\n  '/*ion-inline-end:"D:\equipe\ionic\particular\siscov-webapp\src\pages\firebase\firebase.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__["a" /* AngularFirestore */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_4__app_services_produto_service__["a" /* ProdutoService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ToastController */]])
    ], FirebasePage);
    return FirebasePage;
}());

//# sourceMappingURL=firebase.js.map

/***/ })

},[617]);
//# sourceMappingURL=main.js.map