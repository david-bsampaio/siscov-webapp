webpackJsonp([1],{

/***/ 1154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemsPageModule", function() { return ItemsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__items__ = __webpack_require__(1305);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ItemsPageModule = (function () {
    function ItemsPageModule() {
    }
    ItemsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__items__["a" /* ItemsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__items__["a" /* ItemsPage */]),
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
        })
    ], ItemsPageModule);
    return ItemsPageModule;
}());

//# sourceMappingURL=items.module.js.map

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

/***/ 1305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_HttpService__ = __webpack_require__(1306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_validation__ = __webpack_require__(1307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_mail_chimp_service__ = __webpack_require__(1308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_native__ = __webpack_require__(614);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_app_settings__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_check_box_service__ = __webpack_require__(1309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_text_view_service__ = __webpack_require__(1310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_spinner_service__ = __webpack_require__(1311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_splash_screen_service__ = __webpack_require__(1312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_search_bar_service__ = __webpack_require__(1313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_wizard_service__ = __webpack_require__(1314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_tabs_service__ = __webpack_require__(1173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_login_service__ = __webpack_require__(1315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_register_service__ = __webpack_require__(1316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_list_view_service__ = __webpack_require__(1317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_list_view_expandable_service__ = __webpack_require__(1318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_list_view_drag_and_drop_service__ = __webpack_require__(1319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_list_view_swipe_to_dismiss_service__ = __webpack_require__(1320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_list_view_appearance_animation_service__ = __webpack_require__(1321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_list_view_google_card_service__ = __webpack_require__(1322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_list_view_sticky_list_header_service__ = __webpack_require__(1323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_parallax_service__ = __webpack_require__(1324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__services_image_gallery_service__ = __webpack_require__(1325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__services_maps_service__ = __webpack_require__(1326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__services_qrcode_service__ = __webpack_require__(1327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__services_radio_button_service__ = __webpack_require__(1328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__services_range_service__ = __webpack_require__(1329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__services_toggle_service__ = __webpack_require__(1330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__services_select_service__ = __webpack_require__(1331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__services_action_sheet_service__ = __webpack_require__(1332);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

































var ItemsPage = (function () {
    var ItemsPage = ItemsPage_1 = 
    // services: array
    function ItemsPage(navCtrl, textViewService, spinnerService, imageGalleryService, searchBarService, checkBoxService, parallaxService, wizardService, tabsService, listViewService, listViewExpandableService, listViewDragAndDropService, listViewSwipeToDismissService, listViewAppearanceAnimationService, listViewGoogleCardsService, listViewStickyListHeaderService, loginService, registerService, splashScreenService, httpService, validationService, mailChimpService, mapsService, qRCodeService, radioButtonService, rangeService, toggleService, selectService, actionSheetService, alertCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.textViewService = textViewService;
        this.spinnerService = spinnerService;
        this.imageGalleryService = imageGalleryService;
        this.searchBarService = searchBarService;
        this.checkBoxService = checkBoxService;
        this.parallaxService = parallaxService;
        this.wizardService = wizardService;
        this.tabsService = tabsService;
        this.listViewService = listViewService;
        this.listViewExpandableService = listViewExpandableService;
        this.listViewDragAndDropService = listViewDragAndDropService;
        this.listViewSwipeToDismissService = listViewSwipeToDismissService;
        this.listViewAppearanceAnimationService = listViewAppearanceAnimationService;
        this.listViewGoogleCardsService = listViewGoogleCardsService;
        this.listViewStickyListHeaderService = listViewStickyListHeaderService;
        this.loginService = loginService;
        this.registerService = registerService;
        this.splashScreenService = splashScreenService;
        this.httpService = httpService;
        this.validationService = validationService;
        this.mailChimpService = mailChimpService;
        this.mapsService = mapsService;
        this.qRCodeService = qRCodeService;
        this.radioButtonService = radioButtonService;
        this.rangeService = rangeService;
        this.toggleService = toggleService;
        this.selectService = selectService;
        this.actionSheetService = actionSheetService;
        this.alertCtrl = alertCtrl;
        this.pages = {};
        this.listServices = {};
        this.setGoogleAnalytics();
        this.listServices = {
            'checkBoxes': checkBoxService,
            'login': loginService,
            'register': registerService,
            'imageGallery': imageGalleryService,
            'textViews': textViewService,
            'spinner': spinnerService,
            'parallax': parallaxService,
            'wizard': wizardService,
            'searchBars': searchBarService,
            'tabs': tabsService,
            'listViews': listViewService,
            'expandable': listViewExpandableService,
            'dragAndDrop': listViewDragAndDropService,
            'swipeToDismiss': listViewSwipeToDismissService,
            'appearanceAnimation': listViewAppearanceAnimationService,
            'googleCards': listViewGoogleCardsService,
            'stickyListHeader': listViewStickyListHeaderService,
            'splashScreens': splashScreenService,
            'maps': mapsService,
            'qrcode': qRCodeService,
            'radioButton': radioButtonService,
            'range': rangeService,
            'toggle': toggleService,
            'select': selectService,
            'actionSheet': actionSheetService
        };
        this.componentName = navParams.get('componentName');
        this.service = this.listServices[this.componentName];
        if (this.service) {
            this.pages = this.service.getAllThemes();
            this.title = this.service.getTitle();
            this.eventTrackView(this.title);
        }
        else {
            navCtrl.setRoot("HomePage");
        }
    };
    ItemsPage.prototype.selectPageForOpen = function (value) {
        var page;
        switch (value) {
            case "spinner":
                page = "ItemDetailsPageSpinner";
                break;
            case "textViews":
                page = "ItemDetailsPageTextView";
                break;
            case "splashScreens":
                page = "ItemDetailsPageSplashScreen";
                break;
            case "searchBars":
                page = "ItemDetailsPageSearchBar";
                break;
            case "checkBoxes":
                page = "ItemDetailsPageCheckBox";
                break;
            case "wizard":
                page = "ItemDetailsPageWizard";
                break;
            case "tabs":
                page = "ItemDetailsPageTabs";
                break;
            case "login":
                page = "ItemDetailsPageLogin";
                break;
            case "register":
                page = "ItemDetailsPageRegister";
                break;
            case "expandable":
                page = "ItemDetailsPageExpandable";
                break;
            case "swipeToDismiss":
                page = "ItemDetailsPageSwipeToDismiss";
                break;
            case "dragAndDrop":
                page = "ItemDetailsPageDragAndDrop";
                break;
            case "appearanceAnimation":
                page = "ItemDetailsPageAppearanceAnimation";
                break;
            case "googleCards":
                page = "ItemDetailsPageGoogleCard";
                break;
            case "stickyListHeader":
                page = "ItemDetailsPageStickyListHeader";
                break;
            case "parallax":
                page = "ItemDetailsPageParallax";
                break;
            case "maps":
                page = "ItemDetailsPageMaps";
                break;
            case "imageGallery":
                page = "ItemDetailsPageImageGallery";
                break;
            case "qrcode":
                page = "ItemDetailsPageQRCode";
                break;
            case "radioButton":
                page = "ItemDetailsPageRadioButton";
                break;
            case "range":
                page = "ItemDetailsPageRange";
                break;
            case "toggle":
                page = "ItemDetailsPageToggle";
                break;
            case "select":
                page = "ItemDetailsPageSelect";
                break;
            case "actionSheet":
                page = "ItemDetailsPageActionSheet";
                break;
            default:
                page = "ItemDetailsPage";
        }
        return page;
    };
    ItemsPage.prototype.openPage = function (page) {
        if (__WEBPACK_IMPORTED_MODULE_6__services_app_settings__["a" /* AppSettings */].SUBSCRIBE) {
            if (this.mailChimpService.showMailChimpForm()) {
                this.mailChimpService.setMailChimpForm(false);
                this.showPrompt();
            }
            else {
                this.navigation(page);
            }
        }
        else {
            this.navigation(page);
        }
    };
    ItemsPage.prototype.navigation = function (page) {
        if (page.listView) {
            this.navCtrl.push(ItemsPage_1, {
                componentName: page.theme
            });
        }
        else {
            this.navCtrl.push(this.selectPageForOpen(this.componentName), {
                service: this.service,
                page: page
            });
        }
    };
    ItemsPage.prototype.showPrompt = function () {
    };
    ItemsPage.prototype.setGoogleAnalytics = function () {
        if (window.location.hostname != "localhost") {
            __WEBPACK_IMPORTED_MODULE_5_ionic_native__["b" /* GoogleAnalytics */].startTrackerWithId("UA-35500609-14").then(function () {
                __WEBPACK_IMPORTED_MODULE_5_ionic_native__["b" /* GoogleAnalytics */].trackEvent("active", "user", "click");
            });
        }
        else {
            console.log("Start Tracker");
        }
    };
    ItemsPage.prototype.eventTrackView = function (event) {
        if (window.location.hostname != "localhost") {
            __WEBPACK_IMPORTED_MODULE_5_ionic_native__["b" /* GoogleAnalytics */].trackView(event, "Items", false);
            __WEBPACK_IMPORTED_MODULE_5_ionic_native__["b" /* GoogleAnalytics */].trackEvent("openPage", event, "click");
        }
        else {
            console.log("event:" + event);
        }
    };
    ItemsPage = ItemsPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"D:\equipe\ionic\particular\siscov-webapp\src\pages\items\items.html"*/'<!-- Submenu Header -->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title text-uppercase>{{title}}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<!-- Submenu List -->\n\n<ion-content no-padding>\n\n  <ion-list no-padding no-margin>\n\n    <button ion-item no-padding item-title submenu *ngFor="let p of pages" (click)="openPage(p)">\n\n        {{p.title}}\n\n    </button>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\equipe\ionic\particular\siscov-webapp\src\pages\items\items.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_4__services_mail_chimp_service__["a" /* MailChimpService */], __WEBPACK_IMPORTED_MODULE_8__services_text_view_service__["a" /* TextViewService */], __WEBPACK_IMPORTED_MODULE_9__services_spinner_service__["a" /* SpinnerService */],
                __WEBPACK_IMPORTED_MODULE_10__services_splash_screen_service__["a" /* SplashScreenService */], __WEBPACK_IMPORTED_MODULE_14__services_login_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_15__services_register_service__["a" /* RegisterService */],
                __WEBPACK_IMPORTED_MODULE_11__services_search_bar_service__["a" /* SearchBarService */], __WEBPACK_IMPORTED_MODULE_7__services_check_box_service__["a" /* CheckBoxService */], __WEBPACK_IMPORTED_MODULE_12__services_wizard_service__["a" /* WizardService */], __WEBPACK_IMPORTED_MODULE_13__services_tabs_service__["a" /* TabsService */], __WEBPACK_IMPORTED_MODULE_23__services_parallax_service__["a" /* ParallaxService */],
                __WEBPACK_IMPORTED_MODULE_16__services_list_view_service__["a" /* ListViewService */], __WEBPACK_IMPORTED_MODULE_17__services_list_view_expandable_service__["a" /* ListViewExpandableService */], __WEBPACK_IMPORTED_MODULE_18__services_list_view_drag_and_drop_service__["a" /* ListViewDragAndDropService */], __WEBPACK_IMPORTED_MODULE_24__services_image_gallery_service__["a" /* ImageGalleryService */],
                __WEBPACK_IMPORTED_MODULE_19__services_list_view_swipe_to_dismiss_service__["a" /* ListViewSwipeToDismissService */], __WEBPACK_IMPORTED_MODULE_21__services_list_view_google_card_service__["a" /* ListViewGoogleCardsService */], __WEBPACK_IMPORTED_MODULE_20__services_list_view_appearance_animation_service__["a" /* ListViewAppearanceAnimationService */],
                __WEBPACK_IMPORTED_MODULE_22__services_list_view_sticky_list_header_service__["a" /* ListViewStickyListHeaderService */], __WEBPACK_IMPORTED_MODULE_2__services_HttpService__["a" /* HttpService */], __WEBPACK_IMPORTED_MODULE_3__services_validation__["a" /* ValidationService */], __WEBPACK_IMPORTED_MODULE_25__services_maps_service__["a" /* MapsService */], __WEBPACK_IMPORTED_MODULE_26__services_qrcode_service__["a" /* QRCodeService */],
                __WEBPACK_IMPORTED_MODULE_27__services_radio_button_service__["a" /* RadioButtonService */], __WEBPACK_IMPORTED_MODULE_28__services_range_service__["a" /* RangeService */], __WEBPACK_IMPORTED_MODULE_29__services_toggle_service__["a" /* ToggleService */], __WEBPACK_IMPORTED_MODULE_30__services_select_service__["a" /* SelectService */], __WEBPACK_IMPORTED_MODULE_31__services_action_sheet_service__["a" /* ActionSheetService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_8__services_text_view_service__["a" /* TextViewService */],
            __WEBPACK_IMPORTED_MODULE_9__services_spinner_service__["a" /* SpinnerService */],
            __WEBPACK_IMPORTED_MODULE_24__services_image_gallery_service__["a" /* ImageGalleryService */],
            __WEBPACK_IMPORTED_MODULE_11__services_search_bar_service__["a" /* SearchBarService */],
            __WEBPACK_IMPORTED_MODULE_7__services_check_box_service__["a" /* CheckBoxService */],
            __WEBPACK_IMPORTED_MODULE_23__services_parallax_service__["a" /* ParallaxService */],
            __WEBPACK_IMPORTED_MODULE_12__services_wizard_service__["a" /* WizardService */],
            __WEBPACK_IMPORTED_MODULE_13__services_tabs_service__["a" /* TabsService */],
            __WEBPACK_IMPORTED_MODULE_16__services_list_view_service__["a" /* ListViewService */],
            __WEBPACK_IMPORTED_MODULE_17__services_list_view_expandable_service__["a" /* ListViewExpandableService */],
            __WEBPACK_IMPORTED_MODULE_18__services_list_view_drag_and_drop_service__["a" /* ListViewDragAndDropService */],
            __WEBPACK_IMPORTED_MODULE_19__services_list_view_swipe_to_dismiss_service__["a" /* ListViewSwipeToDismissService */],
            __WEBPACK_IMPORTED_MODULE_20__services_list_view_appearance_animation_service__["a" /* ListViewAppearanceAnimationService */],
            __WEBPACK_IMPORTED_MODULE_21__services_list_view_google_card_service__["a" /* ListViewGoogleCardsService */],
            __WEBPACK_IMPORTED_MODULE_22__services_list_view_sticky_list_header_service__["a" /* ListViewStickyListHeaderService */],
            __WEBPACK_IMPORTED_MODULE_14__services_login_service__["a" /* LoginService */],
            __WEBPACK_IMPORTED_MODULE_15__services_register_service__["a" /* RegisterService */],
            __WEBPACK_IMPORTED_MODULE_10__services_splash_screen_service__["a" /* SplashScreenService */],
            __WEBPACK_IMPORTED_MODULE_2__services_HttpService__["a" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_3__services_validation__["a" /* ValidationService */],
            __WEBPACK_IMPORTED_MODULE_4__services_mail_chimp_service__["a" /* MailChimpService */],
            __WEBPACK_IMPORTED_MODULE_25__services_maps_service__["a" /* MapsService */],
            __WEBPACK_IMPORTED_MODULE_26__services_qrcode_service__["a" /* QRCodeService */],
            __WEBPACK_IMPORTED_MODULE_27__services_radio_button_service__["a" /* RadioButtonService */],
            __WEBPACK_IMPORTED_MODULE_28__services_range_service__["a" /* RangeService */],
            __WEBPACK_IMPORTED_MODULE_29__services_toggle_service__["a" /* ToggleService */],
            __WEBPACK_IMPORTED_MODULE_30__services_select_service__["a" /* SelectService */],
            __WEBPACK_IMPORTED_MODULE_31__services_action_sheet_service__["a" /* ActionSheetService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
    ], ItemsPage);
    return ItemsPage;
    var ItemsPage_1;
}());

//# sourceMappingURL=items.js.map

/***/ }),

/***/ 1306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(616);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/**
 * Created by DRAGAN on 3/22/2017.
 */


var HttpService = (function () {
    function HttpService(http) {
        this.http = http;
    }
    Object.defineProperty(HttpService, "parameters", {
        get: function () {
            return [[__WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Http */]]];
        },
        enumerable: true,
        configurable: true
    });
    HttpService.prototype.sendData = function (email) {
        var url = "http://facebook.us14.list-manage.com/subscribe/post-json?u=2c0f7baa8dc004a62ff3922e3&id=456928d791&EMAIL=" + encodeURI(email) + "&b_2c0f7baa8dc004a62ff3922e3_456928d791";
        var response = this.http.get(url).map(function (res) { return res.json(); });
        return response;
    };
    return HttpService;
}());

//# sourceMappingURL=HttpService.js.map

/***/ }),

/***/ 1307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidationService; });
/**
 * Created by DRAGAN on 3/22/2017.
 */
var ValidationService = (function () {
    function ValidationService() {
    }
    ValidationService.prototype.isMail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    return ValidationService;
}());

//# sourceMappingURL=validation.js.map

/***/ }),

/***/ 1308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MailChimpService; });
var MailChimpService = (function () {
    function MailChimpService() {
    }
    MailChimpService.prototype.showMailChimpForm = function () {
        var mailChimp = localStorage.getItem("mailChimp") == "true";
        var mailChimpLocal = localStorage.getItem("mailChimpLocal") == "true";
        if (mailChimp) {
            return false;
        }
        else {
            return mailChimpLocal;
        }
    };
    MailChimpService.prototype.setMailChimpForm = function (isVisible) {
        localStorage.setItem("mailChimpLocal", isVisible + "");
    };
    MailChimpService.prototype.hideMailChimp = function () {
        localStorage.setItem("mailChimp", "true");
    };
    return MailChimpService;
}());

//# sourceMappingURL=mail-chimp-service.js.map

/***/ }),

/***/ 1309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckBoxService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_database__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_settings__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__toast_service__ = __webpack_require__(613);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__loading_service__ = __webpack_require__(611);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CheckBoxService = (function () {
    function CheckBoxService(af, loadingService, toastCtrl) {
        var _this = this;
        this.af = af;
        this.loadingService = loadingService;
        this.toastCtrl = toastCtrl;
        this.getId = function () { return 'checkBoxes'; };
        this.getTitle = function () { return 'Check Boxes'; };
        this.getAllThemes = function () {
            return [
                { "title": "Simple", "theme": "layout1" },
                { "title": "With Avatar", "theme": "layout2" },
                { "title": "Simple", "theme": "layout3" },
                { "title": "Two Columns", "theme": "layout4" }
            ];
        };
        this.getDataForTheme = function (menuItem) {
            return _this['getDataFor' +
                menuItem.theme.charAt(0).toUpperCase() +
                menuItem.theme.slice(1)]();
        };
        //Simple data
        this.getDataForLayout1 = function () {
            return [
                {
                    "id": 1,
                    "title": "Song",
                    "icon": "",
                    "favorite": false,
                    "image": ""
                },
                {
                    "id": 2,
                    "title": "Album",
                    "icon": "",
                    "favorite": false,
                    "image": ""
                },
                {
                    "id": 3,
                    "title": "Artist",
                    "icon": "",
                    "favorite": false,
                    "image": ""
                },
                {
                    "id": 4,
                    "title": "Song",
                    "icon": "",
                    "favorite": true,
                    "image": ""
                },
                {
                    "id": 5,
                    "title": "Album",
                    "icon": "",
                    "favorite": false,
                    "image": ""
                },
                {
                    "id": 6,
                    "title": "Artist",
                    "icon": "",
                    "favorite": false,
                    "image": ""
                }
            ];
        };
        //With Avatar data
        this.getDataForLayout2 = function () {
            return [
                {
                    "id": 1,
                    "title": "Martin Peck",
                    "icon": "",
                    "favorite": false,
                    "image": "assets/images/avatar/1.jpg"
                },
                {
                    "id": 2,
                    "title": "Sherry Hale",
                    "icon": "",
                    "favorite": false,
                    "image": "assets/images/avatar/2.jpg"
                },
                {
                    "id": 3,
                    "title": "Michele Henderson",
                    "icon": "",
                    "favorite": false,
                    "image": "assets/images/avatar/3.jpg"
                },
                {
                    "id": 4,
                    "title": "Natasha Gamble",
                    "icon": "",
                    "favorite": false,
                    "image": "assets/images/avatar/4.jpg"
                },
                {
                    "id": 5,
                    "title": "Julia Petersen",
                    "icon": "",
                    "favorite": false,
                    "image": "assets/images/avatar/5.jpg"
                },
                {
                    "id": 6,
                    "title": "Randall Hurley",
                    "icon": "",
                    "favorite": false,
                    "image": "assets/images/avatar/6.jpg"
                }
            ];
        };
        //Simple data
        this.getDataForLayout3 = function () {
            return [
                {
                    "id": 1,
                    "title": "Song",
                    "icon": "icon-music-box"
                },
                {
                    "id": 2,
                    "title": "Album",
                    "icon": "icon-music-box"
                },
                {
                    "id": 3,
                    "title": "Artist",
                    "icon": "icon-music-box"
                },
                {
                    "id": 4,
                    "title": "Song",
                    "icon": "icon-music-box"
                },
                {
                    "id": 5,
                    "title": "Album",
                    "icon": "icon-music-box"
                },
                {
                    "id": 6,
                    "title": "Artist",
                    "icon": "icon-music-box"
                }
            ];
        };
        // Two columns data
        this.getDataForLayout4 = function () {
            return [
                {
                    'id': 1,
                    'title': 'Shoes',
                    'favorite': true
                },
                {
                    'id': 2,
                    'title': 'Clothes',
                    'favorite': false
                },
                {
                    'id': 3,
                    'title': 'Mobile',
                    'favorite': false
                },
                {
                    'id': 4,
                    'title': 'IT',
                    'favorite': true
                },
                {
                    'id': 5,
                    'title': 'Food',
                    'favorite': false
                },
                {
                    id: 6,
                    'title': 'Fruits',
                    'favorite': false
                }
            ];
        };
        this.getEventsForTheme = function (menuItem) {
            var that = _this;
            return {
                onButton: function (item) {
                    that.toastCtrl.presentToast(item.title);
                }
            };
        };
        this.prepareParams = function (item) {
            var result = {
                title: item.title,
                theme: item.theme,
                data: [],
                events: _this.getEventsForTheme(item)
            };
            result[_this.getShowItemId(item)] = true;
            return result;
        };
        this.getShowItemId = function (item) {
            return _this.getId() + item.theme.charAt(0).toUpperCase() + "" + item.theme.slice(1);
        };
    }
    CheckBoxService.prototype.load = function (item) {
        var _this = this;
        var that = this;
        that.loadingService.show();
        if (__WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */].IS_FIREBASE_ENABLED) {
            return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
                _this.af
                    .object('checkBoxes/' + item.theme)
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
    CheckBoxService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_5__loading_service__["a" /* LoadingService */], __WEBPACK_IMPORTED_MODULE_4__toast_service__["a" /* ToastService */]])
    ], CheckBoxService);
    return CheckBoxService;
}());

//# sourceMappingURL=check-box-service.js.map

/***/ }),

/***/ 1310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextViewService; });
var TextViewService = (function () {
    function TextViewService() {
        var _this = this;
        this.getId = function () { return 'textViews'; };
        this.getTitle = function () { return 'Typo + small components'; };
        this.getAllThemes = function () {
            return [
                { "title": "All", "theme": "all" },
            ];
        };
        this.getDataForTheme = function (menuItem) {
            return _this['getDataFor' +
                menuItem.theme.charAt(0).toUpperCase() +
                menuItem.theme.slice(1)]();
        };
        this.getDataForAll = function () {
            return [];
        };
        this.getEventsForTheme = function (menuItem) {
            return {};
        };
        this.prepareParams = function (item) {
            return {
                title: item.title,
                data: _this.getDataForTheme(item),
                events: _this.getEventsForTheme(item)
            };
        };
    }
    TextViewService.prototype.load = function (url) {
        return null;
    };
    ;
    return TextViewService;
}());

//# sourceMappingURL=text-view-service.js.map

/***/ }),

/***/ 1311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpinnerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__loading_service__ = __webpack_require__(611);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SpinnerService = (function () {
    function SpinnerService(loadingService) {
        var _this = this;
        this.loadingService = loadingService;
        this.getId = function () { return 'spinners'; };
        this.getTitle = function () { return 'Spinners'; };
        this.getAllThemes = function () {
            return [
                { "title": "All", "theme": "all" }
            ];
        };
        this.getDataForTheme = function (menuItem) {
            return _this['getDataFor' +
                menuItem.theme.charAt(0).toUpperCase() +
                menuItem.theme.slice(1)]();
        };
        this.getEventsForTheme = function (menuItem) {
            return {};
        };
        this.getDataForAll = function () {
            return [
                { "icon": "tail-spin" },
                { "icon": "oval" },
                { "icon": "audio" },
                { "icon": "bars" },
                { "icon": "hearts" },
                { "icon": "three-dots" },
                { "icon": "puff" },
                { "icon": "grid" },
                { "icon": "ball-triangle" },
                { "icon": "circles" }
            ];
        };
        this.prepareParams = function (item) {
            return {
                spinner: true,
                title: item.title,
                data: {},
                theme: item.theme,
                events: _this.getEventsForTheme(item)
            };
        };
    }
    SpinnerService.prototype.load = function (item) {
        var _this = this;
        var that = this;
        that.loadingService.show();
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
            that.loadingService.hide();
            observer.next(_this.getDataForAll());
            observer.complete();
        });
    };
    ;
    SpinnerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__loading_service__["a" /* LoadingService */]])
    ], SpinnerService);
    return SpinnerService;
}());

//# sourceMappingURL=spinner-service.js.map

/***/ }),

/***/ 1312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SplashScreenService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__loading_service__ = __webpack_require__(611);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SplashScreenService = (function () {
    function SplashScreenService(loadingService) {
        var _this = this;
        this.loadingService = loadingService;
        this.getId = function () { return 'splashScreens'; };
        this.getTitle = function () { return 'Splash screens'; };
        this.getAllThemes = function () {
            return [
                { "title": "Fade in + Ken Burns 1", "theme": "layout1" },
                { "title": "Down + fade in + Ken Burns", "theme": "layout2" },
                { "title": "Down + Ken Burns", "theme": "layout3" }
            ];
        };
        this.getDataForTheme = function (menuItem) {
            return _this['getDataFor' +
                menuItem.theme.charAt(0).toUpperCase() +
                menuItem.theme.slice(1)]();
        };
        //Fade in + Ken Burns 1 data
        this.getDataForLayout1 = function () {
            return {
                "duration": 10000,
                "backgroundImage": "assets/images/background/29.jpg",
                "logo": "assets/images/logo/login.png",
                "title": ""
            };
        };
        //Down + fade in + Ken Burns data
        this.getDataForLayout2 = function () {
            return {
                "duration": 10000,
                "backgroundImage": "assets/images/background/29.jpg",
                "logo": "assets/images/logo/login.png",
                "title": ""
            };
        };
        //Down + Ken Burns data
        this.getDataForLayout3 = function () {
            return {
                "duration": 10000,
                "backgroundImage": "assets/images/background/29.jpg",
                "logo": "assets/images/logo/login.png",
                "title": "IONICTEMPLATE"
            };
        };
        this.getEventsForTheme = function (menuItem, navCtrl) {
            return {
                "onRedirect": function () {
                    navCtrl.pop();
                }
            };
        };
        this.getShowItemId = function (item) {
            return _this.getId() + item.theme.charAt(0).toUpperCase() + "" + item.theme.slice(1);
        };
        this.prepareParams = function (item, navCtrl) {
            var result = {
                title: item.title,
                data: _this.getDataForTheme(item),
                events: _this.getEventsForTheme(item, navCtrl)
            };
            result[_this.getShowItemId(item)] = true;
            return result;
        };
    }
    SplashScreenService.prototype.load = function (item) {
        var _this = this;
        var that = this;
        that.loadingService.show();
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
            that.loadingService.hide();
            observer.next(_this.getDataForTheme(item));
            observer.complete();
        });
    };
    ;
    SplashScreenService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__loading_service__["a" /* LoadingService */]])
    ], SplashScreenService);
    return SplashScreenService;
}());

//# sourceMappingURL=splash-screen-service.js.map

/***/ }),

/***/ 1313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchBarService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_database__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_settings__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__toast_service__ = __webpack_require__(613);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__loading_service__ = __webpack_require__(611);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SearchBarService = (function () {
    function SearchBarService(af, loadingService, toastCtrl) {
        var _this = this;
        this.af = af;
        this.loadingService = loadingService;
        this.toastCtrl = toastCtrl;
        this.getId = function () { return 'searchBars'; };
        this.getTitle = function () { return 'Search bars'; };
        this.getAllThemes = function () {
            return [
                { "title": "Simple", "theme": "layout1" },
                { "title": "Field + header", "theme": "layout2" },
                { "title": "Field + header 2", "theme": "layout3" }
            ];
        };
        this.getDataForTheme = function (menuItem) {
            return _this['getDataFor' +
                menuItem.theme.charAt(0).toUpperCase() +
                menuItem.theme.slice(1)]();
        };
        // Simple data
        this.getDataForLayout1 = function () {
            return {
                "items": [
                    {
                        "title": "Friends",
                        "description": "254 people",
                        "icon": "icon-account-check"
                    },
                    {
                        "title": "Enemies",
                        "description": "254 people",
                        "icon": "icon-account-check"
                    },
                    {
                        "title": "Neutral",
                        "description": "254 people",
                        "icon": "icon-account-check"
                    },
                    {
                        "title": "Family",
                        "description": "254 people",
                        "icon": "icon-account-check"
                    },
                    {
                        "title": "Guests",
                        "description": "254 people",
                        "icon": "icon-account-check"
                    },
                    {
                        "title": "Students",
                        "description": "254 people",
                        "icon": "icon-account-check"
                    },
                    {
                        "title": "Friends",
                        "description": "254 people",
                        "icon": "icon-account-check"
                    },
                    {
                        "title": "Enemies",
                        "description": "254 people",
                        "icon": "icon-account-check"
                    },
                    {
                        "title": "Neutral",
                        "description": "254 people",
                        "icon": "icon-account-check"
                    },
                    {
                        "title": "Family",
                        "description": "254 people",
                        "icon": "icon-account-check"
                    },
                    {
                        "title": "Guests",
                        "description": "254 people",
                        "icon": "icon-account-check"
                    },
                    {
                        "title": "Students",
                        "description": "254 people",
                        "icon": "icon-account-check"
                    }
                ]
            };
        };
        //Field + header data
        this.getDataForLayout2 = function () {
            return {
                "headerImage": "assets/images/background/30.jpg",
                "searchText": "Search by",
                "items": [
                    {
                        "title": "Song",
                        "icon": "icon-music-box"
                    },
                    {
                        "title": "Album",
                        "icon": "icon-headset"
                    },
                    {
                        "title": "Artist",
                        "icon": "icon-human-child"
                    },
                    {
                        "title": "Genre",
                        "icon": "icon-menu"
                    },
                    {
                        "title": "Song",
                        "icon": "icon-music-box"
                    },
                    {
                        "title": "Album",
                        "icon": "icon-headset"
                    },
                    {
                        "title": "Artist",
                        "icon": "icon-human-child"
                    },
                    {
                        "title": "Genre",
                        "icon": "icon-menu"
                    },
                    {
                        "title": "Album",
                        "icon": "icon-headset"
                    }
                ]
            };
        };
        //Field + header 2 data
        this.getDataForLayout3 = function () {
            return {
                "headerImage": "assets/images/background/9.jpg",
                "items": [
                    {
                        "id": 1,
                        "title": "Monument walk tour",
                        "description": "3:30min walking tour",
                        "price": "123$",
                        "icon": "icon-map-marker-radius"
                    },
                    {
                        "id": 2,
                        "title": "River walk tour",
                        "description": "3:30min walking tour",
                        "price": "123$",
                        "icon": "icon-map-marker-radius"
                    },
                    {
                        "id": 3,
                        "title": "City walk tour",
                        "description": "3:30min walking tour",
                        "price": "123$",
                        "icon": "icon-map-marker-radius"
                    },
                    {
                        "id": 4,
                        "title": "Park walk tour",
                        "description": "3:30min walking tour",
                        "price": "123$",
                        "icon": "icon-map-marker-radius"
                    },
                    {
                        "id": 5,
                        "title": "Vilage walk tour",
                        "description": "3:30min walking tour",
                        "price": "123$",
                        "icon": "icon-map-marker-radius"
                    },
                    {
                        "id": 6,
                        "title": "Lake walk tour",
                        "description": "3:30min walking tour",
                        "price": "123$",
                        "icon": "icon-map-marker-radius"
                    },
                    {
                        "id": 7,
                        "title": "Castle walk tour",
                        "description": "3:30min walking tour",
                        "price": "123$",
                        "icon": "icon-map-marker-radius"
                    },
                    {
                        "id": 8,
                        "title": "Beach walk tour",
                        "description": "3:30min walking tour",
                        "price": "123$",
                        "icon": "icon-map-marker-radius"
                    }
                ]
            };
        };
        this.getEventsForTheme = function (menuItem) {
            var that = _this;
            return {
                'onTextChange': function (text) {
                    that.toastCtrl.presentToast(text);
                },
                'onItemClick': function (item) {
                    that.toastCtrl.presentToast(JSON.stringify(item));
                }
            };
        };
        this.prepareParams = function (item) {
            var result = {
                title: item.title,
                data: {},
                theme: item.theme,
                events: _this.getEventsForTheme(item)
            };
            result[_this.getShowItemId(item)] = true;
            return result;
        };
        this.getShowItemId = function (item) {
            return _this.getId() + item.theme.charAt(0).toUpperCase() + "" + item.theme.slice(1);
        };
    }
    SearchBarService.prototype.load = function (item) {
        var _this = this;
        var that = this;
        that.loadingService.show();
        if (__WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */].IS_FIREBASE_ENABLED) {
            return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
                _this.af
                    .object('searchBars/' + item.theme)
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
    SearchBarService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_5__loading_service__["a" /* LoadingService */], __WEBPACK_IMPORTED_MODULE_4__toast_service__["a" /* ToastService */]])
    ], SearchBarService);
    return SearchBarService;
}());

//# sourceMappingURL=search-bar-service.js.map

/***/ }),

/***/ 1314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WizardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_database__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_settings__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__toast_service__ = __webpack_require__(613);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__loading_service__ = __webpack_require__(611);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var WizardService = (function () {
    function WizardService(af, loadingService, toastCtrl) {
        var _this = this;
        this.af = af;
        this.loadingService = loadingService;
        this.toastCtrl = toastCtrl;
        this.getId = function () { return 'wizard'; };
        this.getTitle = function () { return 'Wizard'; };
        this.getAllThemes = function () {
            return [
                { "title": "Simple + icon", "theme": "layout1" },
                { "title": "Big image", "theme": "layout2" },
                { "title": "Big Image + Text", "theme": "layout3" }
            ];
        };
        this.getDataForTheme = function (menuItem) {
            return _this['getDataFor' +
                menuItem.theme.charAt(0).toUpperCase() +
                menuItem.theme.slice(1)]();
        };
        //Simple + icon data
        this.getDataForLayout1 = function () {
            return {
                "btnPrev": "Previous",
                "btnNext": "Next",
                "btnFinish": "Finish",
                "items": [
                    {
                        "logo": "",
                        "iconSlider": "icon-star-outline",
                        "title": "Fragment Example 1",
                        "description": "Text for Fragment Example 1 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
                        "buttonNext": "Next"
                    },
                    {
                        "logo": "",
                        "iconSlider": "icon-star-half",
                        "title": "Fragment Example 2",
                        "description": "Text for Fragment Example 2 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
                        "buttonNext": "Next",
                        "buttonPrevious": "Previous"
                    },
                    {
                        "logo": "",
                        "iconSlider": "icon-star",
                        "title": "Fragment Example 3",
                        "description": "Text for Fragment Example 3 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
                        "buttonPrevious": "Previous",
                        "buttonFinish": "Finish"
                    }
                ]
            };
        };
        //Big image data
        this.getDataForLayout2 = function () {
            return {
                "btnNext": "Next",
                "btnFinish": "Finish",
                "items": [
                    {
                        "backgroundImage": "assets/images/avatar-large/1.jpg",
                        "title": "Fragment Example 1"
                    },
                    {
                        "backgroundImage": "assets/images/avatar-large/2.jpg",
                        "title": "Fragment Example 2"
                    },
                    {
                        "backgroundImage": "assets/images/avatar-large/3.jpg",
                        "title": "Fragment Example 3"
                    }
                ]
            };
        };
        //Big Image + Text data
        this.getDataForLayout3 = function () {
            return {
                "btnNext": "Next",
                "btnFinish": "Finish",
                "btnSkip": "Skip",
                "items": [
                    {
                        "backgroundImage": "assets/images/avatar-large/5.jpg",
                        "title": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 1",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
                        "button": "Next",
                        "skip": "Skip"
                    },
                    {
                        "backgroundImage": "assets/images/avatar-large/6.jpg",
                        "title": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 2",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
                        "button": "Next",
                        "skip": "Skip"
                    },
                    {
                        "backgroundImage": "assets/images/avatar-large/7.jpg",
                        "title": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 3",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
                        "button": "Finish",
                        "skip": "Skip"
                    }
                ]
            };
        };
        this.getEventsForTheme = function (menuItem) {
            var that = _this;
            return {
                'onFinish': function (event) {
                    that.toastCtrl.presentToast('Finish');
                }
            };
        };
        this.getShowItemId = function (item) {
            return _this.getId() + item.theme.charAt(0).toUpperCase() + "" + item.theme.slice(1);
        };
        this.prepareParams = function (item) {
            var result = {
                title: item.title,
                data: [],
                theme: item.theme,
                events: _this.getEventsForTheme(item)
            };
            result[_this.getShowItemId(item)] = true;
            return result;
        };
    }
    WizardService.prototype.load = function (item) {
        var _this = this;
        var that = this;
        that.loadingService.show();
        if (__WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */].IS_FIREBASE_ENABLED) {
            return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
                _this.af
                    .object('wizard/' + item.theme)
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
    WizardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_5__loading_service__["a" /* LoadingService */], __WEBPACK_IMPORTED_MODULE_4__toast_service__["a" /* ToastService */]])
    ], WizardService);
    return WizardService;
}());

//# sourceMappingURL=wizard-service.js.map

/***/ }),

/***/ 1315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_database__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_settings__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__toast_service__ = __webpack_require__(613);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__loading_service__ = __webpack_require__(611);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginService = (function () {
    function LoginService(af, loadingService, toastCtrl) {
        var _this = this;
        this.af = af;
        this.loadingService = loadingService;
        this.toastCtrl = toastCtrl;
        this.getId = function () { return 'login'; };
        this.getTitle = function () { return 'Login pages'; };
        this.getAllThemes = function () {
            return [
                { "title": "Login + logo 1", "theme": "layout1" },
                { "title": "Login + logo 2", "theme": "layout2" }
            ];
        };
        this.getDataForTheme = function (menuItem) {
            return _this['getDataFor' +
                menuItem.theme.charAt(0).toUpperCase() +
                menuItem.theme.slice(1)]();
        };
        // login + logo 1 data
        this.getDataForLayout1 = function () {
            return {
                "username": "Username",
                "password": "Password",
                "register": "Register",
                "login": "Login",
                "skip": "Skip",
                "logo": "assets/images/logo/login.png"
            };
        };
        //Login + logo 2 data
        this.getDataForLayout2 = function () {
            return {
                "username": "Username",
                "password": "Password",
                "register": "Register",
                "login": "Login",
                "skip": "Skip",
                "logo": "assets/images/logo/login.png"
            };
        };
        this.getEventsForTheme = function (menuItem) {
            var that = _this;
            return {
                onLogin: function (params) {
                    that.toastCtrl.presentToast('onLogin:' + JSON.stringify(params));
                },
                onRegister: function (params) {
                    that.toastCtrl.presentToast('onRegister:' + JSON.stringify(params));
                },
                onSkip: function (params) {
                    that.toastCtrl.presentToast('onSkip:' + JSON.stringify(params));
                },
                onFacebook: function (params) {
                    that.toastCtrl.presentToast('onFacebook:' + JSON.stringify(params));
                },
                onTwitter: function (params) {
                    that.toastCtrl.presentToast('onTwitter:' + JSON.stringify(params));
                },
                onGoogle: function (params) {
                    that.toastCtrl.presentToast('onGoogle:' + JSON.stringify(params));
                },
                onPinterest: function (params) {
                    that.toastCtrl.presentToast('onPinterest:' + JSON.stringify(params));
                },
            };
        };
        this.prepareParams = function (item) {
            var result = {
                title: item.title,
                theme: item.theme,
                data: {},
                events: _this.getEventsForTheme(item)
            };
            result[_this.getShowItemId(item)] = true;
            return result;
        };
        this.getShowItemId = function (item) {
            return _this.getId() + item.theme.charAt(0).toUpperCase() + "" + item.theme.slice(1);
        };
    }
    LoginService.prototype.load = function (item) {
        var _this = this;
        var that = this;
        that.loadingService.show();
        if (__WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */].IS_FIREBASE_ENABLED) {
            return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
                _this.af
                    .object('login/' + item.theme)
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
    LoginService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_5__loading_service__["a" /* LoadingService */], __WEBPACK_IMPORTED_MODULE_4__toast_service__["a" /* ToastService */]])
    ], LoginService);
    return LoginService;
}());

//# sourceMappingURL=login-service.js.map

/***/ }),

/***/ 1316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_database__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_settings__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__toast_service__ = __webpack_require__(613);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__loading_service__ = __webpack_require__(611);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RegisterService = (function () {
    function RegisterService(af, loadingService, toastCtrl) {
        var _this = this;
        this.af = af;
        this.loadingService = loadingService;
        this.toastCtrl = toastCtrl;
        this.getId = function () { return 'register'; };
        this.getTitle = function () { return 'Register pages'; };
        this.getAllThemes = function () {
            return [
                { "title": "Register + logo", "theme": "layout1" },
                { "title": "Register + image", "theme": "layout2" }
            ];
        };
        this.getDataForTheme = function (menuItem) {
            return _this['getDataFor' +
                menuItem.theme.charAt(0).toUpperCase() +
                menuItem.theme.slice(1)]();
        };
        //Register + logo data
        this.getDataForLayout1 = function () {
            return {
                "logo": "assets/images/logo/login.png",
                "register": "Register",
                "username": "Username",
                "city": "City",
                "country": "Country",
                "password": "Password",
                "email": "Email",
                "button": "submit",
                "skip": "Skip"
            };
        };
        //Register + image data
        this.getDataForLayout2 = function () {
            return {
                "logo": "assets/images/logo/login-2.png",
                "iconAccount": "icon-account",
                "username": "Username",
                "iconHome": "icon-home-variant",
                "iconCity": "icon-city",
                "city": "City",
                "iconWeb": "icon-web",
                "country": "Country",
                "iconLock": "icon-lock",
                "password": "Password",
                "iconEmail": "icon-email-outline",
                "email": "Email",
                "submit": "submit",
                "skip": "Skip"
            };
        };
        this.getEventsForTheme = function (menuItem) {
            var that = _this;
            return {
                onRegister: function (params) {
                    that.toastCtrl.presentToast('onRegister:' + JSON.stringify(params));
                },
                onSkip: function (params) {
                    that.toastCtrl.presentToast('onSkip:' + JSON.stringify(params));
                }
            };
        };
        this.prepareParams = function (item) {
            var result = {
                title: item.title,
                theme: item.theme,
                data: {},
                events: _this.getEventsForTheme(item)
            };
            result[_this.getShowItemId(item)] = true;
            return result;
        };
        this.getShowItemId = function (item) {
            return _this.getId() + item.theme.charAt(0).toUpperCase() + "" + item.theme.slice(1);
        };
    }
    RegisterService.prototype.load = function (item) {
        var _this = this;
        var that = this;
        that.loadingService.show();
        if (__WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */].IS_FIREBASE_ENABLED) {
            return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
                _this.af
                    .object('register/' + item.theme)
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
    RegisterService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_5__loading_service__["a" /* LoadingService */], __WEBPACK_IMPORTED_MODULE_4__toast_service__["a" /* ToastService */]])
    ], RegisterService);
    return RegisterService;
}());

//# sourceMappingURL=register-service.js.map

/***/ }),

/***/ 1317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListViewService; });
var ListViewService = (function () {
    function ListViewService() {
        var _this = this;
        this.getId = function () { return 'listViews'; };
        this.getTitle = function () { return 'List views'; };
        this.getAllThemes = function () {
            return [
                { "title": "Expandable", "theme": "expandable", "listView": true },
                { "title": "Drag&Drop", "theme": "dragAndDrop", "listView": true },
                { "title": "Swipe-to-dismiss", "theme": "swipeToDismiss", "listView": true },
                { "title": "Appearance animations", "theme": "appearanceAnimation", "listView": true },
                { "title": "Google Cards", "theme": "googleCards", "listView": true },
                { "title": "Sticky List Header", "theme": "stickyListHeader", "listView": true },
            ];
        };
        this.getDataForTheme = function (menuItem) {
            return [];
        };
        this.getEventsForTheme = function (menuItem) {
            return {};
        };
        this.prepareParams = function (item) {
            return {
                title: item.title,
                data: _this.getDataForTheme(item),
                events: _this.getEventsForTheme(item)
            };
        };
    }
    ListViewService.prototype.load = function (url) {
        return null;
    };
    ;
    return ListViewService;
}());

//# sourceMappingURL=list-view-service.js.map

/***/ }),

/***/ 1318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListViewExpandableService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_database__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_settings__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__toast_service__ = __webpack_require__(613);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__loading_service__ = __webpack_require__(611);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ListViewExpandableService = (function () {
    function ListViewExpandableService(af, loadingService, toastCtrl) {
        var _this = this;
        this.af = af;
        this.loadingService = loadingService;
        this.toastCtrl = toastCtrl;
        this.getId = function () { return 'expandable'; };
        this.getTitle = function () { return 'Expandable'; };
        this.getAllThemes = function () {
            return [
                { "title": "List big image", "theme": "layout1" },
                { "title": "Full image with CTA", "theme": "layout2" },
                { "title": "Centered with header", "theme": "layout3" }
            ];
        };
        this.getDataForTheme = function (menuItem) {
            return _this['getDataFor' +
                menuItem.theme.charAt(0).toUpperCase() +
                menuItem.theme.slice(1)]();
        };
        // List big image data
        this.getDataForLayout1 = function () {
            return {
                "items": [
                    {
                        "id": 1,
                        "title": "Benton Willis",
                        "description": "SINGER",
                        "image": "assets/images/avatar/15.jpg",
                        "iconLike": "icon-thumb-up",
                        "iconFavorite": "icon-heart",
                        "iconShare": "icon-share-variant",
                        "items": [
                            {
                                "id": 1,
                                "title": "Smokestack Lightning",
                                "description": "Universal, 2016",
                                "image": "assets/images/avatar/10.jpg",
                                "iconPlay": "icon-play-circle-outline"
                            },
                            {
                                "id": 2,
                                "title": "Boogie Chillen’",
                                "description": "Universal, 2016",
                                "image": "assets/images/avatar/11.jpg",
                                "iconPlay": "icon-play-circle-outline"
                            },
                            {
                                "id": 3,
                                "title": "Call It Stormy Mondaye",
                                "description": "Universal, 2016",
                                "image": "assets/images/avatar/12.jpg",
                                "iconPlay": "icon-play-circle-outline"
                            },
                            {
                                "id": 4,
                                "title": "I’m Tore Down",
                                "description": "Universal, 2016",
                                "image": "assets/images/avatar/13.jpg",
                                "iconPlay": "icon-play-circle-outline"
                            }
                        ]
                    },
                    {
                        "id": 2,
                        "title": "Jessica Miles",
                        "description": "BASSO",
                        "image": "assets/images/avatar/2.jpg",
                        "iconLike": "icon-thumb-up",
                        "iconFavorite": "icon-heart",
                        "iconShare": "icon-share-variant",
                        "items": [
                            {
                                "id": 1,
                                "title": "Bell Bottom Blues",
                                "description": "Universal, 2016",
                                "image": "assets/images/avatar/14.jpg",
                                "iconPlay": "icon-play-circle-outline"
                            },
                            {
                                "id": 2,
                                "title": "Still Got The Blues",
                                "description": "Universal, 2016",
                                "image": "assets/images/avatar/15.jpg",
                                "iconPlay": "icon-play-circle-outline"
                            },
                            {
                                "id": 3,
                                "title": "Mustang Sally",
                                "description": "Universal, 2016",
                                "image": "assets/images/avatar/14.jpg",
                                "iconPlay": "icon-play-circle-outline"
                            },
                            {
                                "id": 4,
                                "title": "Ball N’ Chain",
                                "description": "Universal, 2016",
                                "image": "assets/images/avatar/13.jpg",
                                "iconPlay": "icon-play-circle-outline"
                            }
                        ]
                    },
                    {
                        "id": 3,
                        "title": "Holman Valencia",
                        "description": "GUITARIST",
                        "image": "assets/images/avatar/3.jpg",
                        "iconLike": "icon-thumb-up",
                        "iconFavorite": "icon-heart",
                        "iconShare": "icon-share-variant",
                        "items": [
                            {
                                "id": 1,
                                "title": "Dust My Broom",
                                "description": "Universal, 2016",
                                "image": "assets/images/avatar/11.jpg",
                                "iconPlay": "icon-play-circle-outline"
                            },
                            {
                                "id": 2,
                                "title": "Hold On, I’m Coming",
                                "description": "Universal, 2016",
                                "image": "assets/images/avatar/12.jpg",
                                "iconPlay": "icon-play-circle-outline"
                            },
                            {
                                "id": 3,
                                "title": "The Little Red Rooster",
                                "description": "Universal, 2016",
                                "image": "assets/images/avatar/13.jpg",
                                "iconPlay": "icon-play-circle-outline"
                            },
                            {
                                "id": 4,
                                "title": "Bright Lights",
                                "description": "Universal, 2016",
                                "image": "assets/images/avatar/14.jpg",
                                "iconPlay": "icon-play-circle-outline"
                            }
                        ]
                    },
                    {
                        "id": 4,
                        "title": "Natasha Gambl",
                        "description": "SINGER",
                        "image": "assets/images/avatar/4.jpg",
                        "iconLike": "icon-thumb-up",
                        "iconFavorite": "icon-heart",
                        "iconShare": "icon-share-variant",
                        "items": [
                            {
                                "id": 1,
                                "title": "Got My Mojo Working",
                                "description": "Universal, 2016",
                                "image": "assets/images/avatar/0.jpg",
                                "iconPlay": "icon-play-circle-outline"
                            },
                            {
                                "id": 2,
                                "title": "A Little Less Conversation",
                                "description": "Universal, 2016",
                                "image": "assets/images/avatar/1.jpg",
                                "iconPlay": "icon-play-circle-outline"
                            },
                            {
                                "id": 3,
                                "title": "Life By The Drop",
                                "description": "Universal, 2016",
                                "image": "assets/images/avatar/2.jpg",
                                "iconPlay": "icon-play-circle-outline"
                            },
                            {
                                "id": 4,
                                "title": "Boom Boom",
                                "description": "Universal, 2016",
                                "image": "assets/images/avatar/3.jpg",
                                "iconPlay": "icon-play-circle-outline"
                            }
                        ]
                    },
                    {
                        "id": 5,
                        "title": "Carol Kelly",
                        "description": "DRUMMER",
                        "image": "assets/images/avatar/5.jpg",
                        "iconLike": "icon-thumb-up",
                        "iconFavorite": "icon-heart",
                        "iconShare": "icon-share-variant",
                        "items": [
                            {
                                "id": 1,
                                "title": "Thing Called Love",
                                "description": "Universal, 2016",
                                "image": "assets/images/avatar/14.jpg",
                                "iconPlay": "icon-play-circle-outline"
                            },
                            {
                                "id": 2,
                                "title": "Green Onions",
                                "description": "Universal, 2016",
                                "image": "assets/images/avatar/15.jpg",
                                "iconPlay": "icon-play-circle-outline"
                            },
                            {
                                "id": 3,
                                "title": "The Midnight Special",
                                "description": "Universal, 2016",
                                "image": "assets/images/avatar/6.jpg",
                                "iconPlay": "icon-play-circle-outline"
                            },
                            {
                                "id": 4,
                                "title": "Mess Around",
                                "description": "Universal, 2016",
                                "image": "assets/images/avatar/7.jpg",
                                "iconPlay": "icon-play-circle-outline"
                            }
                        ]
                    },
                    {
                        "id": 6,
                        "title": "Mildred Clark",
                        "description": "DRUMMER",
                        "image": "assets/images/avatar/3.jpg",
                        "iconLike": "icon-thumb-up",
                        "iconFavorite": "icon-heart",
                        "iconShare": "icon-share-variant",
                        "items": [
                            {
                                "id": 1,
                                "title": "Little Wing",
                                "description": "Universal, 2016",
                                "image": "assets/images/avatar/14.jpg",
                                "iconPlay": "icon-play-circle-outline"
                            },
                            {
                                "id": 2,
                                "title": "Bad Penny",
                                "description": "Universal, 2016",
                                "image": "assets/images/avatar/15.jpg",
                                "iconPlay": "icon-play-circle-outline"
                            },
                            {
                                "id": 3,
                                "title": "Farther on Up the Road",
                                "description": "Universal, 2016",
                                "image": "assets/images/avatar/6.jpg",
                                "iconPlay": "icon-play-circle-outline"
                            },
                            {
                                "id": 4,
                                "title": "Mannish Boy",
                                "description": "Universal, 2016",
                                "image": "assets/images/avatar/7.jpg",
                                "iconPlay": "icon-play-circle-outline"
                            }
                        ]
                    },
                    {
                        "id": 7,
                        "title": "Megan Singleton",
                        "description": "DRUMMER",
                        "image": "assets/images/avatar/4.jpg",
                        "iconLike": "icon-thumb-up",
                        "iconFavorite": "icon-heart",
                        "iconShare": "icon-share-variant",
                        "items": [
                            {
                                "id": 1,
                                "title": "Trouble No More",
                                "description": "Universal, 2016",
                                "image": "assets/images/avatar/14.jpg",
                                "iconPlay": "icon-play-circle-outline"
                            },
                            {
                                "id": 2,
                                "title": "Hellhound On My Trail",
                                "description": "Universal, 2016",
                                "image": "assets/images/avatar/15.jpg",
                                "iconPlay": "icon-play-circle-outline"
                            },
                            {
                                "id": 3,
                                "title": "Help Me",
                                "description": "Universal, 2016",
                                "image": "assets/images/avatar/6.jpg",
                                "iconPlay": "icon-play-circle-outline"
                            },
                            {
                                "id": 4,
                                "title": "A Man Of Many Words",
                                "description": "Universal, 2016",
                                "image": "assets/images/avatar/7.jpg",
                                "iconPlay": "icon-play-circle-outline"
                            }
                        ]
                    }
                ]
            };
        };
        // Full image with CTA
        this.getDataForLayout2 = function () {
            return {
                "items": [
                    {
                        "id": 1,
                        "title": "Rubus idaeus Pi",
                        "backgroundImage": "assets/images/background/22.jpg",
                        "button": "BUY",
                        "items": [
                            "PAY WITH PAYPAL",
                            "PAY WITH VISA CARD",
                            "PAY WITH MAESTRO CARD"
                        ]
                    },
                    {
                        "id": 2,
                        "title": "Nidum Thermostat",
                        "backgroundImage": "assets/images/background/23.jpg",
                        "button": "BUY",
                        "items": [
                            "PAY WITH PAYPAL",
                            "PAY WITH VISA CARD",
                            "PAY WITH MAESTRO CARD"
                        ]
                    },
                    {
                        "id": 3,
                        "title": "Baculum Magicum",
                        "backgroundImage": "assets/images/background/24.jpg",
                        "button": "BUY",
                        "items": [
                            "PAY WITH PAYPAL",
                            "PAY WITH VISA CARD",
                            "PAY WITH MAESTRO CARD"
                        ]
                    },
                    {
                        "id": 4,
                        "title": "Commodore LXIV",
                        "backgroundImage": "assets/images/background/25.jpg",
                        "button": "BUY",
                        "items": [
                            "PAY WITH PAYPAL",
                            "PAY WITH VISA CARD",
                            "PAY WITH MAESTRO CARD"
                        ]
                    },
                    {
                        "id": 5,
                        "title": "Palm Nauclerus",
                        "backgroundImage": "assets/images/background/26.jpg",
                        "button": "BUY",
                        "items": [
                            "PAY WITH PAYPAL",
                            "PAY WITH VISA CARD",
                            "PAY WITH MAESTRO CARD"
                        ]
                    },
                    {
                        "id": 6,
                        "title": "Optio Fridericus Hultsch Box",
                        "backgroundImage": "assets/images/background/27.jpg",
                        "button": "BUY",
                        "items": [
                            "PAY WITH PAYPAL",
                            "PAY WITH VISA CARD",
                            "PAY WITH MAESTRO CARD"
                        ]
                    },
                    {
                        "id": 7,
                        "title": "Oculi Odium",
                        "backgroundImage": "assets/images/background/28.jpg",
                        "button": "BUY",
                        "items": [
                            "PAY WITH PAYPAL",
                            "PAY WITH VISA CARD",
                            "PAY WITH MAESTRO CARD"
                        ]
                    }
                ]
            };
        };
        // Centered with header
        this.getDataForLayout3 = function () {
            return {
                "title": "New York",
                "headerImage": "assets/images/background-small/7.jpg",
                "items": [
                    {
                        "title": "Where to go",
                        "icon": "icon-map-marker-radius",
                        "items": [
                            "Monuments",
                            "Sightseeing",
                            "Historical",
                            "Sport"
                        ]
                    },
                    {
                        "title": "Where to sleep",
                        "icon": "icon-hotel",
                        "items": [
                            "Hotels",
                            "Hostels",
                            "Motels",
                            "Rooms"
                        ]
                    },
                    {
                        "title": "Where to eat",
                        "icon": "icon-silverware-variant",
                        "items": [
                            "Fast Food",
                            "Restorants",
                            "Pubs",
                            "Hotels"
                        ]
                    },
                    {
                        "title": "Where to drink",
                        "icon": "icon-martini",
                        "items": [
                            "Caffes",
                            "Bars",
                            "Pubs",
                            "Clubs"
                        ]
                    },
                    {
                        "title": "Where to go",
                        "icon": "icon-map-marker-radius",
                        "items": [
                            "Monuments",
                            "Sightseeing",
                            "Historical",
                            "Sport"
                        ]
                    }
                ]
            };
        };
        this.getEventsForTheme = function (menuItem) {
            var that = _this;
            return {
                'onItemClick': function (item) {
                    that.toastCtrl.presentToast(item);
                },
                'onLike': function (item) {
                    that.toastCtrl.presentToast("Like");
                },
                'onFavorite': function (item) {
                    that.toastCtrl.presentToast("Favorite");
                },
                'onShare': function (item) {
                    that.toastCtrl.presentToast("Share");
                },
                'onFab': function (item) {
                    that.toastCtrl.presentToast("Fab");
                },
            };
        };
        this.prepareParams = function (item) {
            var result = {
                title: item.title,
                theme: item.theme,
                data: [],
                events: _this.getEventsForTheme(item)
            };
            result[_this.getShowItemId(item)] = true;
            return result;
        };
        this.getShowItemId = function (item) {
            return _this.getId() + item.theme.charAt(0).toUpperCase() + "" + item.theme.slice(1);
        };
    }
    ListViewExpandableService.prototype.load = function (item) {
        var _this = this;
        var that = this;
        that.loadingService.show();
        if (__WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */].IS_FIREBASE_ENABLED) {
            return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
                that.toastCtrl.presentToast(item.theme);
                _this.af
                    .object('listView/expandable/' + item.theme)
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
    ListViewExpandableService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_5__loading_service__["a" /* LoadingService */], __WEBPACK_IMPORTED_MODULE_4__toast_service__["a" /* ToastService */]])
    ], ListViewExpandableService);
    return ListViewExpandableService;
}());

//# sourceMappingURL=list-view-expandable-service.js.map

/***/ }),

/***/ 1319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListViewDragAndDropService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_database__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_settings__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__toast_service__ = __webpack_require__(613);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__loading_service__ = __webpack_require__(611);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ListViewDragAndDropService = (function () {
    function ListViewDragAndDropService(af, loadingService, toastCtrl) {
        var _this = this;
        this.af = af;
        this.loadingService = loadingService;
        this.toastCtrl = toastCtrl;
        this.getId = function () { return 'dragAndDrop'; };
        this.getTitle = function () { return 'Drag and Drop'; };
        this.getAllThemes = function () {
            return [
                { "title": "Small item + header", "theme": "layout1" },
                { "title": "Products + CTA header", "theme": "layout2" },
                { "title": "Medium item with avatar", "theme": "layout3" },
                { "title": "Medium item with image", "theme": "layout4" }
            ];
        };
        this.getDataForTheme = function (menuItem) {
            return _this['getDataFor' +
                menuItem.theme.charAt(0).toUpperCase() +
                menuItem.theme.slice(1)]();
        };
        //Small item + header data
        this.getDataForLayout1 = function () {
            return {
                "title": "Playlist Name",
                "description": "Author: Username",
                "duration": "35:72",
                "icon": "icon-check",
                "items": [
                    {
                        "id": 1,
                        "title": "Hoochie Coochie Man",
                        "author": "Author: Muddy Waters",
                        "image": "assets/images/avatar/0.jpg",
                        "leftIcon": "icon-play-circle",
                        "rightIcon": "icon-unfold-more"
                    },
                    {
                        "id": 2,
                        "title": "The Thrill is Gone",
                        "author": "Author: B.B. King",
                        "image": "assets/images/avatar/1.jpg",
                        "leftIcon": "icon-play-circle",
                        "rightIcon": "icon-unfold-more"
                    },
                    {
                        "id": 3,
                        "title": "Me And The Devil Blues",
                        "author": "Author: Robert Johnson",
                        "image": "assets/images/avatar/2.jpg",
                        "leftIcon": "icon-play-circle",
                        "rightIcon": "icon-unfold-more"
                    },
                    {
                        "id": 4,
                        "title": "Stone Crazy",
                        "author": "Author: Buddy Guy",
                        "image": "assets/images/avatar/3.jpg",
                        "leftIcon": "icon-play-circle",
                        "rightIcon": "icon-unfold-more"
                    },
                    {
                        "id": 5,
                        "title": "I’d Rather Go Blind",
                        "author": "Author: Etta James",
                        "image": "assets/images/avatar/4.jpg",
                        "leftIcon": "icon-play-circle",
                        "rightIcon": "icon-unfold-more"
                    },
                    {
                        "id": 6,
                        "title": "I’m Tore Down",
                        "author": "Author: Freddie King",
                        "image": "assets/images/avatar/5.jpg",
                        "leftIcon": "icon-play-circle",
                        "rightIcon": "icon-unfold-more"
                    },
                    {
                        "id": 7,
                        "title": "Call It Stormy Monday",
                        "author": "Author: T-Bone Walker",
                        "image": "assets/images/avatar/6.jpg",
                        "leftIcon": "icon-play-circle",
                        "rightIcon": "icon-unfold-more"
                    },
                    {
                        "id": 8,
                        "title": "Smokestack Lightning",
                        "author": "Author: Howlin’ Wolf",
                        "image": "assets/images/avatar/0.jpg",
                        "leftIcon": "icon-play-circle",
                        "rightIcon": "icon-unfold-more"
                    },
                    {
                        "id": 9,
                        "title": "Bell Bottom Blues",
                        "author": "Author: Derek and the Dominoes",
                        "image": "assets/images/avatar/1.jpg",
                        "leftIcon": "icon-play-circle",
                        "rightIcon": "icon-unfold-more"
                    },
                    {
                        "id": 10,
                        "title": "Still Got The Blues",
                        "author": "Author: Gary Moore",
                        "image": "assets/images/avatar/2.jpg",
                        "leftIcon": "icon-play-circle",
                        "rightIcon": "icon-unfold-more"
                    },
                    {
                        "id": 11,
                        "title": "Mustang Sally",
                        "author": "Author: Wilson Pickett",
                        "image": "assets/images/avatar/3.jpg",
                        "leftIcon": "icon-play-circle",
                        "rightIcon": "icon-unfold-more"
                    },
                    {
                        "id": 12,
                        "title": "Ball N’ Chain",
                        "author": "Author: Big Mama Thornton",
                        "image": "assets/images/avatar/4.jpg",
                        "leftIcon": "icon-play-circle",
                        "rightIcon": "icon-unfold-more"
                    },
                    {
                        "id": 13,
                        "title": "Dust My Broom",
                        "author": "Author: Elmore James",
                        "image": "assets/images/avatar/5.jpg",
                        "leftIcon": "icon-play-circle",
                        "rightIcon": "icon-unfold-more"
                    },
                    {
                        "id": 14,
                        "title": "Hold On, I’m Coming",
                        "author": "Author: Eric Clapton",
                        "image": "assets/images/avatar/6.jpg",
                        "leftIcon": "icon-play-circle",
                        "rightIcon": "icon-unfold-more"
                    }
                ]
            };
        };
        //Products + CTA header data
        this.getDataForLayout2 = function () {
            return {
                "title": "Order No. 1",
                "description": "Will be shipped: 15.5.2016.",
                "buttonText": "PROCEED",
                "headerImage": "assets/images/background/22.jpg",
                "price": "$42.99",
                "items": [
                    {
                        "id": 1,
                        "title": "Black Shirt",
                        "seller": "Seller Name",
                        "image": "assets/images/avatar/17.jpg",
                        "oldPrice": "$42.99",
                        "newPrice": "$35.99",
                        "rightIcon": "icon-unfold-more"
                    },
                    {
                        "id": 2,
                        "title": "Black Sweater",
                        "seller": "Seller Name",
                        "image": "assets/images/avatar/18.jpg",
                        "oldPrice": "$42.99",
                        "newPrice": "$35.99",
                        "rightIcon": "icon-unfold-more"
                    },
                    {
                        "id": 3,
                        "title": "Shirt",
                        "seller": "Seller Name",
                        "image": "assets/images/avatar/19.jpg",
                        "oldPrice": "$42.99",
                        "newPrice": "$35.99",
                        "rightIcon": "icon-unfold-more"
                    },
                    {
                        "id": 4,
                        "title": "White Shirt",
                        "seller": "Seller Name",
                        "image": "assets/images/avatar/20.jpg",
                        "oldPrice": "$42.99",
                        "newPrice": "$35.99",
                        "rightIcon": "icon-unfold-more"
                    },
                    {
                        "id": 5,
                        "title": "White T shirt",
                        "seller": "Seller Name",
                        "image": "assets/images/avatar/21.jpg",
                        "oldPrice": "$42.99",
                        "newPrice": "$35.99",
                        "rightIcon": "icon-unfold-more"
                    },
                    {
                        "id": 6,
                        "title": "T shirt",
                        "seller": "Seller Name",
                        "image": "assets/images/avatar/22.jpg",
                        "oldPrice": "$42.99",
                        "newPrice": "$35.99",
                        "rightIcon": "icon-unfold-more"
                    },
                    {
                        "id": 7,
                        "title": "Hoodies",
                        "seller": "Seller Name",
                        "image": "assets/images/avatar/23.jpg",
                        "oldPrice": "$42.99",
                        "newPrice": "$35.99",
                        "rightIcon": "icon-unfold-more"
                    }
                ]
            };
        };
        //Medium item with avatar data
        this.getDataForLayout3 = function () {
            return {
                "items": [
                    {
                        "id": 1,
                        "title": "Isaac Reid",
                        "description": "from Las Vegas",
                        "image": "assets/images/avatar/0.jpg"
                    },
                    {
                        "id": 2,
                        "title": "Jason Graham",
                        "description": "from Brogan",
                        "image": "assets/images/avatar/1.jpg"
                    },
                    {
                        "id": 3,
                        "title": "Abigail Ross",
                        "description": "from Bannock",
                        "image": "assets/images/avatar/2.jpg"
                    },
                    {
                        "id": 4,
                        "title": "Justin Rutherford",
                        "description": "from Madrid",
                        "image": "assets/images/avatar/3.jpg"
                    },
                    {
                        "id": 5,
                        "title": "Nicholas Henderson",
                        "description": "from Bridgetown",
                        "image": "assets/images/avatar/4.jpg"
                    },
                    {
                        "id": 6,
                        "title": "Elizabeth Mackenzie",
                        "description": "from Nipinnawasee",
                        "image": "assets/images/avatar/5.jpg"
                    },
                    {
                        "id": 7,
                        "title": "Melanie Ferguson",
                        "description": "from Dixonville",
                        "image": "assets/images/avatar/6.jpg"
                    },
                    {
                        "id": 8,
                        "title": "Fiona Kelly",
                        "description": "from Orovada",
                        "image": "assets/images/avatar/7.jpg"
                    },
                    {
                        "id": 9,
                        "title": "Nicholas King",
                        "description": "from Interlochen",
                        "image": "assets/images/avatar/8.jpg"
                    },
                    {
                        "id": 10,
                        "title": "Victoria Mitchell",
                        "description": "from Sanders",
                        "image": "assets/images/avatar/9.jpg"
                    },
                    {
                        "id": 11,
                        "title": "Sophie Lyman",
                        "description": "from Boonville",
                        "image": "assets/images/avatar/10.jpg"
                    },
                    {
                        "id": 12,
                        "title": "Carl Ince",
                        "description": "from Wattsville",
                        "image": "assets/images/avatar/11.jpg"
                    },
                    {
                        "id": 13,
                        "title": "Michelle Slater",
                        "description": "from Harrison",
                        "image": "assets/images/avatar/12.jpg"
                    },
                    {
                        "id": 14,
                        "title": "Ryan Mathis",
                        "description": "from Montura",
                        "image": "assets/images/avatar/13.jpg"
                    },
                    {
                        "id": 15,
                        "title": "Julia Grant",
                        "description": "from Onton",
                        "image": "assets/images/avatar/14.jpg"
                    },
                    {
                        "id": 16,
                        "title": "Hannah Martin",
                        "description": "from Emison",
                        "image": "assets/images/avatar/15.jpg"
                    }
                ]
            };
        };
        // Medium item with image data
        this.getDataForLayout4 = function () {
            return {
                "items": [
                    {
                        id: 1,
                        title: 'Monument walk tour',
                        description: '23min walk from center',
                        icon: 'star',
                        mark: '4.1',
                        image: 'assets/images/background-small/16.jpg'
                    },
                    {
                        id: 2,
                        title: 'Park walk tour',
                        description: '23min walk from center',
                        icon: 'star',
                        mark: '4.4',
                        image: 'assets/images/background-small/17.jpg'
                    },
                    {
                        id: 3,
                        title: 'River walk tour',
                        description: '23min walk from center',
                        icon: 'star',
                        mark: '3.6',
                        image: 'assets/images/background-small/18.jpg'
                    },
                    {
                        id: 4,
                        title: 'City walk tour',
                        description: '23min walk from center',
                        icon: 'star',
                        mark: '4.2',
                        image: 'assets/images/background-small/19.jpg'
                    },
                    {
                        id: 5,
                        title: 'Lake walk tour',
                        description: '23min walk from center',
                        icon: 'star',
                        mark: '3.5',
                        image: 'assets/images/background-small/20.jpg'
                    },
                    {
                        id: 6,
                        title: 'Vilage walk tour',
                        description: '23min walk from center',
                        icon: 'star',
                        mark: '4.5',
                        image: 'assets/images/background-small/21.jpg'
                    },
                    {
                        id: 7,
                        title: 'Castle walk tour',
                        description: '23min walk from center',
                        icon: 'star',
                        mark: '4.7',
                        image: 'assets/images/background-small/22.jpg'
                    },
                    {
                        id: 8,
                        title: 'Beach walk tour',
                        description: '23min walk from center',
                        icon: 'star',
                        mark: '3.1',
                        image: 'assets/images/background-small/23.jpg'
                    }
                ]
            };
        };
        this.getEventsForTheme = function (menuItem) {
            var that = _this;
            return {
                'onItemClick': function (item) {
                    that.toastCtrl.presentToast(item);
                },
                'onProceed': function (item) {
                    that.toastCtrl.presentToast("Proceed");
                },
                'onFab': function (item) {
                    that.toastCtrl.presentToast("Fab");
                },
            };
        };
        this.prepareParams = function (item) {
            var result = {
                title: item.title,
                theme: item.theme,
                data: [],
                events: _this.getEventsForTheme(item)
            };
            result[_this.getShowItemId(item)] = true;
            return result;
        };
        this.getShowItemId = function (item) {
            return _this.getId() + item.theme.charAt(0).toUpperCase() + "" + item.theme.slice(1);
        };
    }
    ListViewDragAndDropService.prototype.load = function (item) {
        var _this = this;
        var that = this;
        that.loadingService.show();
        if (__WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */].IS_FIREBASE_ENABLED) {
            return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
                _this.af
                    .object('listView/dragAndDrop/' + item.theme)
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
    ListViewDragAndDropService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_5__loading_service__["a" /* LoadingService */], __WEBPACK_IMPORTED_MODULE_4__toast_service__["a" /* ToastService */]])
    ], ListViewDragAndDropService);
    return ListViewDragAndDropService;
}());

//# sourceMappingURL=list-view-drag-and-drop-service.js.map

/***/ }),

/***/ 1320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListViewSwipeToDismissService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_database__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_settings__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__toast_service__ = __webpack_require__(613);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__loading_service__ = __webpack_require__(611);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ListViewSwipeToDismissService = (function () {
    function ListViewSwipeToDismissService(af, loadingService, toastCtrl) {
        var _this = this;
        this.af = af;
        this.loadingService = loadingService;
        this.toastCtrl = toastCtrl;
        this.getId = function () { return 'swipeToDismiss'; };
        this.getTitle = function () { return 'Swipe to dismiss'; };
        this.getAllThemes = function () {
            return [
                { "title": "Small item + header", "theme": "layout1" },
                { "title": "Products + CTA", "theme": "layout2" },
                { "title": "Full width image", "theme": "layout3" },
                { "title": "Large item with text", "theme": "layout4" }
            ];
        };
        this.getDataForTheme = function (menuItem) {
            return _this['getDataFor' +
                menuItem.theme.charAt(0).toUpperCase() +
                menuItem.theme.slice(1)]();
        };
        //Small item + header data
        this.getDataForLayout1 = function () {
            return {
                "title": "HeaderTitle",
                "description": "HeaderSubtitle",
                "shortDescription": "35:72",
                "iconLike": "icon-thumb-up",
                "iconFavorite": "icon-heart",
                "iconShare": "icon-share-variant",
                "iconPlay": "icon-play-circle-outline",
                "items": [
                    {
                        "id": 1,
                        "title": "Hoochie Coochie Man",
                        "description": "Muddy Waters",
                        "shortDescription": "3:42",
                        "image": "assets/images/avatar/0.jpg",
                        "iconDelate": "icon-delete",
                        "iconUndo": "icon-undo-variant"
                    },
                    {
                        "id": 2,
                        "title": "Six Strings Down",
                        "description": "Jimmie Vaughn",
                        "shortDescription": "3:42",
                        "image": "assets/images/avatar/1.jpg",
                        "iconDelate": "icon-delete",
                        "iconUndo": "icon-undo-variant"
                    },
                    {
                        "id": 3,
                        "title": "Cherry Red Wine",
                        "description": "Luther Allison",
                        "shortDescription": "3:42",
                        "image": "assets/images/avatar/2.jpg",
                        "iconDelate": "icon-delete",
                        "iconUndo": "icon-undo-variant"
                    },
                    {
                        "id": 4,
                        "title": "Blue and Lonesome",
                        "description": "Rolling Stones",
                        "shortDescription": "3:42",
                        "image": "assets/images/avatar/3.jpg",
                        "iconDelate": "icon-delete",
                        "iconUndo": "icon-undo-variant"
                    },
                    {
                        "id": 5,
                        "title": "The Sky is Crying",
                        "description": "Stevie Ray Vaughan",
                        "shortDescription": "3:42",
                        "image": "assets/images/avatar/4.jpg",
                        "iconDelate": "icon-delete",
                        "iconUndo": "icon-undo-variant"
                    },
                    {
                        "id": 6,
                        "title": "Everybody Needs Somebody To Love",
                        "description": "Solomon Burke",
                        "shortDescription": "3:42",
                        "image": "assets/images/avatar/5.jpg",
                        "iconDelate": "icon-delete",
                        "iconUndo": "icon-undo-variant"
                    },
                    {
                        "id": 7,
                        "title": "Walking by Myself",
                        "description": "Jimmy Rogers",
                        "shortDescription": "3:42",
                        "image": "assets/images/avatar/6.jpg",
                        "iconDelate": "icon-delete",
                        "iconUndo": "icon-undo-variant"
                    },
                    {
                        "id": 8,
                        "title": "Sinner’s Prayer",
                        "description": "Ray Charles",
                        "shortDescription": "3:42",
                        "image": "assets/images/avatar/7.jpg",
                        "iconDelate": "icon-delete",
                        "iconUndo": "icon-undo-variant"
                    }
                ]
            };
        };
        //Products + CTA data
        this.getDataForLayout2 = function () {
            return {
                "items": [
                    {
                        "id": 1,
                        "title": "Black Shirt",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                        "image": "assets/images/avatar/17.jpg",
                        "oldPrice": "$42.99",
                        "newPrice": "$35.99",
                        "iconDelate": "icon-delete",
                        "iconUndo": "icon-undo-variant"
                    },
                    {
                        "id": 2,
                        "title": "Black Sweater",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                        "image": "assets/images/avatar/18.jpg",
                        "oldPrice": "$42.99",
                        "newPrice": "$35.99",
                        "iconDelate": "icon-delete",
                        "iconUndo": "icon-undo-variant"
                    },
                    {
                        "id": 3,
                        "title": "White Shirt",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                        "image": "assets/images/avatar/19.jpg",
                        "oldPrice": "$42.99",
                        "newPrice": "$35.99",
                        "iconDelate": "icon-delete",
                        "iconUndo": "icon-undo-variant"
                    },
                    {
                        "id": 4,
                        "title": "Shirt",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                        "image": "assets/images/avatar/20.jpg",
                        "oldPrice": "$42.99",
                        "newPrice": "$35.99",
                        "iconDelate": "icon-delete",
                        "iconUndo": "icon-undo-variant"
                    },
                    {
                        "id": 5,
                        "title": "T Shirt",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                        "image": "assets/images/avatar/21.jpg",
                        "oldPrice": "$42.99",
                        "newPrice": "$35.99",
                        "iconDelate": "icon-delete",
                        "iconUndo": "icon-undo-variant"
                    },
                    {
                        "id": 6,
                        "title": "White T Shirt",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                        "image": "assets/images/avatar/22.jpg",
                        "oldPrice": "$42.99",
                        "newPrice": "$35.99",
                        "iconDelate": "icon-delete",
                        "iconUndo": "icon-undo-variant"
                    },
                    {
                        "id": 7,
                        "title": "Hoodies",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                        "image": "assets/images/avatar/23.jpg",
                        "oldPrice": "$42.99",
                        "newPrice": "$35.99",
                        "iconDelate": "icon-delete",
                        "iconUndo": "icon-undo-variant"
                    },
                    {
                        "id": 8,
                        "title": "Shirt",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                        "image": "assets/images/avatar/17.jpg",
                        "oldPrice": "$42.99",
                        "newPrice": "$35.99",
                        "iconDelate": "icon-delete",
                        "iconUndo": "icon-undo-variant"
                    },
                    {
                        "id": 9,
                        "title": "Sweater",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                        "image": "assets/images/avatar/18.jpg",
                        "oldPrice": "$42.99",
                        "newPrice": "$35.99",
                        "iconDelate": "icon-delete",
                        "iconUndo": "icon-undo-variant"
                    }
                ]
            };
        };
        //Full width image data
        this.getDataForLayout3 = function () {
            return {
                "items": [
                    {
                        "id": 1,
                        "title": "Weedville",
                        "description": "Northern Mariana Islands",
                        "image": "assets/images/background-small/7.jpg",
                        "iconDelate": "icon-delete",
                        "iconUndo": "icon-undo-variant"
                    },
                    {
                        "id": 2,
                        "title": "Curtice",
                        "description": "Nauru",
                        "image": "assets/images/background-small/9.jpg",
                        "iconDelate": "icon-delete",
                        "iconUndo": "icon-undo-variant"
                    },
                    {
                        "id": 3,
                        "title": "Norvelt",
                        "description": "Indonesia",
                        "image": "assets/images/background-small/10.jpg",
                        "iconDelate": "icon-delete",
                        "iconUndo": "icon-undo-variant"
                    },
                    {
                        "id": 4,
                        "title": "Vincent",
                        "description": "Antarctica",
                        "image": "assets/images/background-small/11.jpg",
                        "iconDelate": "icon-delete",
                        "iconUndo": "icon-undo-variant"
                    },
                    {
                        "id": 5,
                        "title": "Fairacres",
                        "description": "Colombia",
                        "image": "assets/images/background-small/12.jpg",
                        "iconDelate": "icon-delete",
                        "iconUndo": "icon-undo-variant"
                    },
                    {
                        "id": 6,
                        "title": "Greenwich",
                        "description": "Tajikistan",
                        "image": "assets/images/background-small/13.jpg",
                        "iconDelate": "icon-delete",
                        "iconUndo": "icon-undo-variant"
                    },
                    {
                        "id": 7,
                        "title": "Ryderwood",
                        "description": "Sao Tome and Principe",
                        "image": "assets/images/background-small/14.jpg",
                        "iconDelate": "icon-delete",
                        "iconUndo": "icon-undo-variant"
                    },
                    {
                        "id": 8,
                        "title": "Lithium",
                        "description": "Puerto Rico",
                        "image": "assets/images/background-small/15.jpg",
                        "iconDelate": "icon-delete",
                        "iconUndo": "icon-undo-variant"
                    }
                ]
            };
        };
        // Large item with text data
        this.getDataForLayout4 = function () {
            return {
                "items": [
                    {
                        id: 1,
                        title: '@Monument walk tour',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                        iconDelate: "icon-delete",
                        image: 'assets/images/avatar/3.jpg',
                        iconUndo: 'icon-undo-variant'
                    },
                    {
                        id: 2,
                        title: '@River walk tour',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                        iconDelate: "icon-delete",
                        image: 'assets/images/avatar/4.jpg',
                        iconUndo: 'icon-undo-variant'
                    },
                    {
                        id: 3,
                        title: '@City walk tour',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                        iconDelate: "icon-delete",
                        image: 'assets/images/avatar/5.jpg',
                        iconUndo: 'icon-undo-variant'
                    },
                    {
                        id: 4,
                        title: '@Park walk tour',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                        iconDelate: "icon-delete",
                        image: 'assets/images/avatar/6.jpg',
                        iconUndo: 'icon-undo-variant'
                    },
                    {
                        id: 5,
                        title: '@Vilage walk tour',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                        iconDelate: "icon-delete",
                        image: 'assets/images/avatar/7.jpg',
                        iconUndo: 'icon-undo-variant'
                    },
                    {
                        id: 6,
                        title: '@Lake walk tour',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                        iconDelate: "icon-delete",
                        image: 'assets/images/avatar/8.jpg',
                        iconUndo: 'icon-undo-variant'
                    },
                    {
                        id: 7,
                        title: '@Castle walk tour',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                        iconDelate: "icon-delete",
                        image: 'assets/images/avatar/9.jpg',
                        iconUndo: 'icon-undo-variant'
                    },
                    {
                        id: 8,
                        title: '@Beach walk tour',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                        iconDelate: "icon-delete",
                        image: 'assets/images/avatar/10.jpg',
                        iconUndo: 'icon-undo-variant'
                    }
                ]
            };
        };
        this.getEventsForTheme = function (menuItem) {
            var that = _this;
            return {
                'onItemClick': function (item) {
                    that.toastCtrl.presentToast(item);
                },
                'onLike': function (item) {
                    that.toastCtrl.presentToast("Like");
                },
                'onFavorite': function (item) {
                    that.toastCtrl.presentToast("Favorite");
                },
                'onShare': function (item) {
                    that.toastCtrl.presentToast("Share");
                },
                'onFab': function (item) {
                    that.toastCtrl.presentToast("Fab");
                },
            };
        };
        this.prepareParams = function (item) {
            var result = {
                title: item.title,
                data: {},
                theme: item.theme,
                events: _this.getEventsForTheme(item)
            };
            result[_this.getShowItemId(item)] = true;
            return result;
        };
        this.getShowItemId = function (item) {
            return _this.getId() + item.theme.charAt(0).toUpperCase() + "" + item.theme.slice(1);
        };
    }
    ListViewSwipeToDismissService.prototype.load = function (item) {
        var _this = this;
        var that = this;
        that.loadingService.show();
        if (__WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */].IS_FIREBASE_ENABLED) {
            return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
                _this.af
                    .object('listView/swipeToDismiss/' + item.theme)
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
    ListViewSwipeToDismissService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_5__loading_service__["a" /* LoadingService */], __WEBPACK_IMPORTED_MODULE_4__toast_service__["a" /* ToastService */]])
    ], ListViewSwipeToDismissService);
    return ListViewSwipeToDismissService;
}());

//# sourceMappingURL=list-view-swipe-to-dismiss-service.js.map

/***/ }),

/***/ 1321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListViewAppearanceAnimationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_database__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_settings__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__toast_service__ = __webpack_require__(613);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__loading_service__ = __webpack_require__(611);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ListViewAppearanceAnimationService = (function () {
    function ListViewAppearanceAnimationService(af, loadingService, toastCtrl) {
        var _this = this;
        this.af = af;
        this.loadingService = loadingService;
        this.toastCtrl = toastCtrl;
        this.getId = function () { return 'appearanceAnimations'; };
        this.getTitle = function () { return 'Appearance animations'; };
        this.getAllThemes = function () {
            return [
                { "title": "Fade in left", "theme": "layout1" },
                { "title": "Fade in right", "theme": "layout2" },
                { "title": "Fade in down", "theme": "layout3" },
                { "title": "Fade in", "theme": "layout4" },
                { "title": "Zoom in", "theme": "layout5" }
            ];
        };
        this.getDataForTheme = function (menuItem) {
            return {
                "items": [
                    {
                        "id": 1,
                        "title": "Isaac Raid",
                        "image": "assets/images/avatar/0.jpg",
                        "favorite": true
                    },
                    {
                        "id": 2,
                        "title": "Jason Graham",
                        "image": "assets/images/avatar/1.jpg",
                        "favorite": false
                    },
                    {
                        "id": 3,
                        "title": "Abigail Ross",
                        "image": "assets/images/avatar/2.jpg",
                        "favorite": true
                    },
                    {
                        "id": 4,
                        "title": "Justin Rutherford",
                        "image": "assets/images/avatar/3.jpg",
                        "favorite": false
                    },
                    {
                        "id": 5,
                        "title": "Nicholas Henderson",
                        "image": "assets/images/avatar/4.jpg",
                        "favorite": false
                    },
                    {
                        "id": 6,
                        "title": "Elizabeth Mackenzie",
                        "image": "assets/images/avatar/5.jpg",
                        "favorite": true
                    },
                    {
                        "id": 7,
                        "title": "Melanie Ferguson",
                        "image": "assets/images/avatar/6.jpg",
                        "favorite": false
                    },
                    {
                        "id": 8,
                        "title": "Fiona Kelly",
                        "image": "assets/images/avatar/7.jpg",
                        "favorite": true
                    },
                    {
                        "id": 9,
                        "title": "Nicholas King",
                        "image": "assets/images/avatar/8.jpg",
                        "favorite": true
                    },
                    {
                        "id": 10,
                        "title": "Victoria Mitchell",
                        "image": "assets/images/avatar/9.jpg",
                        "favorite": true
                    },
                    {
                        "id": 11,
                        "title": "Sophie Lyman",
                        "image": "assets/images/avatar/10.jpg",
                        "favorite": false
                    },
                    {
                        "id": 12,
                        "title": "Carl Ince",
                        "image": "assets/images/avatar/11.jpg",
                        "favorite": false
                    },
                    {
                        "id": 13,
                        "title": "Michelle Slater",
                        "image": "assets/images/avatar/12.jpg",
                        "favorite": false
                    },
                    {
                        "id": 14,
                        "title": "Ryan Mathis",
                        "image": "assets/images/avatar/13.jpg",
                        "favorite": false
                    },
                    {
                        "id": 15,
                        "title": "Julia Grant",
                        "image": "assets/images/avatar/14.jpg",
                        "favorite": false
                    },
                    {
                        "id": 16,
                        "title": "Hannah Martin",
                        "image": "assets/images/avatar/15.jpg",
                        "favorite": false
                    }
                ]
            };
        };
        this.getEventsForTheme = function (menuItem) {
            var that = _this;
            return {
                'onItemClick': function (item) {
                    that.toastCtrl.presentToast(item);
                },
                'onFavorite': function (item) {
                    item.favorite = !item.favorite;
                },
                'onFab': function (item) {
                    that.toastCtrl.presentToast("Fab");
                },
            };
        };
        this.prepareParams = function (item) {
            var result = {
                title: item.title,
                theme: item.theme,
                data: [],
                events: _this.getEventsForTheme(item)
            };
            result[_this.getShowItemId(item)] = true;
            return result;
        };
        this.getShowItemId = function (item) {
            return _this.getId() + item.theme.charAt(0).toUpperCase() + "" + item.theme.slice(1);
        };
    }
    ListViewAppearanceAnimationService.prototype.load = function (item) {
        var _this = this;
        var that = this;
        that.loadingService.show();
        if (__WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */].IS_FIREBASE_ENABLED) {
            return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
                _this.af
                    .object('listView/appearanceAnimations/' + item.theme)
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
    ListViewAppearanceAnimationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_5__loading_service__["a" /* LoadingService */], __WEBPACK_IMPORTED_MODULE_4__toast_service__["a" /* ToastService */]])
    ], ListViewAppearanceAnimationService);
    return ListViewAppearanceAnimationService;
}());

//# sourceMappingURL=list-view-appearance-animation-service.js.map

/***/ }),

/***/ 1322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListViewGoogleCardsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_database__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_settings__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__toast_service__ = __webpack_require__(613);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__loading_service__ = __webpack_require__(611);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ListViewGoogleCardsService = (function () {
    function ListViewGoogleCardsService(af, loadingService, toastCtrl) {
        var _this = this;
        this.af = af;
        this.loadingService = loadingService;
        this.toastCtrl = toastCtrl;
        this.getId = function () { return 'googleCards'; };
        this.getTitle = function () { return 'Google Cards'; };
        this.getAllThemes = function () {
            return [
                { "title": "Styled cards", "theme": "layout1" },
                { "title": "Styled cards 2", "theme": "layout2" },
                { "title": "Full image cards", "theme": "layout3" },
                { "title": "Post card", "theme": "layout4" }
            ];
        };
        //Styled cards data
        this.getDataForLayout1 = function () {
            return {
                "title": "PlaylistName",
                "description": "Author:Username",
                "duration": "35:72",
                "items": [
                    {
                        "id": 1,
                        "title": "Guerrero Woodard",
                        "image": "assets/images/avatar-small/0.jpg",
                        "description": "Birth year: 1984",
                        "shortDescription": "Country: Germany",
                        "longDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
                        "iconLike": "icon-thumb-up",
                        "iconFavorite": "icon-heart",
                        "iconShare": "icon-share-variant"
                    },
                    {
                        "id": 2,
                        "title": "Fitzgerald Stanton",
                        "image": "assets/images/avatar-small/1.jpg",
                        "description": "Birth year: 1970",
                        "shortDescription": "Country: Belgium",
                        "longDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
                        "iconLike": "icon-thumb-up",
                        "iconFavorite": "icon-heart",
                        "iconShare": "icon-share-variant"
                    },
                    {
                        "id": 3,
                        "title": "Jessica Miles",
                        "image": "assets/images/avatar-small/2.jpg",
                        "description": "Birth year: 1982",
                        "shortDescription": "Country: Netherlands Antilles",
                        "longDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
                        "iconLike": "icon-thumb-up",
                        "iconFavorite": "icon-heart",
                        "iconShare": "icon-share-variant"
                    },
                    {
                        "id": 4,
                        "title": "Duran Clayton",
                        "image": "assets/images/avatar-small/3.jpg",
                        "description": "Birth year: 1986",
                        "shortDescription": "Country: Russian Federation",
                        "longDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
                        "iconLike": "icon-thumb-up",
                        "iconFavorite": "icon-heart",
                        "iconShare": "icon-share-variant"
                    },
                    {
                        "id": 5,
                        "title": "Julia Petersen",
                        "image": "assets/images/avatar-small/4.jpg",
                        "description": "Birth year: 1984",
                        "shortDescription": "Country: Czech Republic",
                        "longDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
                        "iconLike": "icon-thumb-up",
                        "iconFavorite": "icon-heart",
                        "iconShare": "icon-share-variant"
                    },
                    {
                        "id": 6,
                        "title": "Natasha Gamble",
                        "image": "assets/images/avatar-small/5.jpg",
                        "description": "Birth year: 1981",
                        "shortDescription": "Country: United Kingdom",
                        "longDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
                        "iconLike": "icon-thumb-up",
                        "iconFavorite": "icon-heart",
                        "iconShare": "icon-share-variant"
                    },
                    {
                        "id": 7,
                        "title": "Parsons Mcfadden",
                        "image": "assets/images/avatar-small/6.jpg",
                        "description": "Birth year: 1985",
                        "shortDescription": "Country: Ireland",
                        "longDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
                        "iconLike": "icon-thumb-up",
                        "iconFavorite": "icon-heart",
                        "iconShare": "icon-share-variant"
                    },
                    {
                        "id": 8,
                        "title": "Compton Dejesus",
                        "image": "assets/images/avatar-small/7.jpg",
                        "description": "Birth year: 1987",
                        "shortDescription": "Country: Swaziland",
                        "longDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
                        "iconLike": "icon-thumb-up",
                        "iconFavorite": "icon-heart",
                        "iconShare": "icon-share-variant"
                    }
                ]
            };
        };
        //Styled cards 2 data
        this.getDataForLayout2 = function () {
            return {
                "items": [
                    {
                        "id": 1,
                        "title": "Fortuitu ad aeroportus",
                        "titleHeader": "Simul quanta praecinctionis",
                        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                        "image": "assets/images/background/1.jpg",
                        "button": "EXPLORE",
                        "shareButton": "SHARE"
                    },
                    {
                        "id": 2,
                        "title": "Hoc est exortum",
                        "titleHeader": "Pedestres sub imprudentia contentum",
                        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                        "image": "assets/images/background/2.jpg",
                        "button": "EXPLORE",
                        "shareButton": "SHARE"
                    },
                    {
                        "id": 3,
                        "title": "Communications moderatoris",
                        "titleHeader": "Technica et Internet habeat facultatem",
                        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                        "image": "assets/images/background/5.jpg",
                        "button": "EXPLORE",
                        "shareButton": "SHARE"
                    },
                    {
                        "id": 4,
                        "title": "Tabulas scripto munus agere providere",
                        "titleHeader": "Ut adeptus est atrium",
                        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                        "image": "assets/images/background/3.jpg",
                        "button": "EXPLORE",
                        "shareButton": "SHARE"
                    },
                    {
                        "id": 5,
                        "title": "In outpatient nuntiatum ministerium",
                        "titleHeader": "Testis unus",
                        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                        "image": "assets/images/background/1.jpg",
                        "button": "EXPLORE",
                        "shareButton": "SHARE"
                    }
                ]
            };
        };
        //Full image cards data
        this.getDataForLayout3 = function () {
            return {
                "refreshMessage": "Pull to refresh...",
                "items": [
                    {
                        "id": 1,
                        "image": "assets/images/background/0.jpg",
                        "title": "Denique sexta",
                        "subtitle": "Pilae per"
                    },
                    {
                        "id": 2,
                        "image": "assets/images/background/9.jpg",
                        "title": "Iura sem",
                        "subtitle": "Incredibilem pecuniae"
                    },
                    {
                        "id": 3,
                        "image": "assets/images/background/8.jpg",
                        "title": "Partim players",
                        "subtitle": "Minimum pretium"
                    },
                    {
                        "id": 4,
                        "image": "assets/images/background/10.jpg",
                        "title": "Prope unstoppable",
                        "subtitle": "Bonum defensus"
                    },
                    {
                        "id": 5,
                        "image": "assets/images/background/13.jpg",
                        "title": "Primum par ludere",
                        "subtitle": "Et stadium contendas in Humsko"
                    },
                    {
                        "id": 6,
                        "image": "assets/images/background/11.jpg",
                        "title": "Vestibulum non eleison",
                        "subtitle": "Notissima"
                    },
                    {
                        "id": 7,
                        "image": "assets/images/background/12.jpg",
                        "title": "Optimum natus",
                        "subtitle": "Non saltem racemum reliquissent"
                    },
                    {
                        "id": 8,
                        "image": "assets/images/background/0.jpg",
                        "title": "Quod magnum firmamentum",
                        "subtitle": "Ingens tailwind"
                    }
                ]
            };
        };
        // Post card data
        this.getDataForLayout4 = function () {
            return [
                {
                    id: 1,
                    title: 'Jessica Miles',
                    avatar: 'assets/images/avatar/2.jpg',
                    image: 'assets/images/background/1.jpg',
                    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
                    shortDescription: 'November 05, 1955',
                    firstButton: 'LIKE',
                    secondButton: 'SHARE'
                },
                {
                    id: 2,
                    title: 'Holman Valencia',
                    avatar: 'assets/images/avatar/0.jpg',
                    image: 'assets/images/background/2.jpg',
                    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
                    shortDescription: 'November 05, 1955',
                    firstButton: 'LIKE',
                    secondButton: 'SHARE'
                },
                {
                    id: 3,
                    title: 'Gayle Gaines',
                    avatar: 'assets/images/avatar/1.jpg',
                    image: 'assets/images/background/3.jpg',
                    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
                    shortDescription: 'November 05, 1955',
                    firstButton: 'LIKE',
                    secondButton: 'SHARE'
                },
                {
                    id: 4,
                    title: 'Josefa Gardner',
                    avatar: 'assets/images/avatar/4.jpg',
                    image: 'assets/images/background/4.jpg',
                    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
                    shortDescription: 'November 05, 1955',
                    firstButton: 'LIKE',
                    secondButton: 'SHARE'
                },
                {
                    id: 5,
                    title: 'Barbara Bernard',
                    avatar: 'assets/images/avatar/5.jpg',
                    image: 'assets/images/background/5.jpg',
                    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
                    shortDescription: 'November 05, 1955',
                    firstButton: 'LIKE',
                    secondButton: 'SHARE'
                },
                {
                    id: 6,
                    title: 'Valdez Bruce',
                    avatar: 'assets/images/avatar/6.jpg',
                    image: 'assets/images/background/6.jpg',
                    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
                    shortDescription: 'November 05, 1955',
                    firstButton: 'LIKE',
                    secondButton: 'SHARE'
                },
                {
                    id: 7,
                    title: 'Wilkerson Hardin',
                    avatar: 'assets/images/avatar/7.jpg',
                    image: 'assets/images/background/7.jpg',
                    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
                    shortDescription: 'November 05, 1955',
                    firstButton: 'LIKE',
                    secondButton: 'SHARE'
                }
            ];
        };
        this.getDataForTheme = function (menuItem) {
            return _this['getDataFor' +
                menuItem.theme.charAt(0).toUpperCase() +
                menuItem.theme.slice(1)]();
        };
        this.getEventsForTheme = function (menuItem) {
            var that = _this;
            return {
                'onItemClick': function (item) {
                    that.toastCtrl.presentToast(item);
                },
                'onExplore': function (item) {
                    that.toastCtrl.presentToast("Explore");
                },
                'onShare': function (item) {
                    that.toastCtrl.presentToast("Share");
                },
                'onLike': function (item) {
                    that.toastCtrl.presentToast("Like");
                },
                'onFavorite': function (item) {
                    that.toastCtrl.presentToast("Favorite");
                },
                'onFab': function (item) {
                    that.toastCtrl.presentToast("Fab");
                },
            };
        };
        this.prepareParams = function (item) {
            var result = {
                title: item.title,
                theme: item.theme,
                data: [],
                events: _this.getEventsForTheme(item)
            };
            result[_this.getShowItemId(item)] = true;
            return result;
        };
        this.getShowItemId = function (item) {
            return _this.getId() + item.theme.charAt(0).toUpperCase() + "" + item.theme.slice(1);
        };
    }
    ListViewGoogleCardsService.prototype.load = function (item) {
        var _this = this;
        var that = this;
        that.loadingService.show();
        if (__WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */].IS_FIREBASE_ENABLED) {
            return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
                debugger;
                _this.af
                    .object('listView/googleCards/' + item.theme)
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
    ListViewGoogleCardsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_5__loading_service__["a" /* LoadingService */], __WEBPACK_IMPORTED_MODULE_4__toast_service__["a" /* ToastService */]])
    ], ListViewGoogleCardsService);
    return ListViewGoogleCardsService;
}());

//# sourceMappingURL=list-view-google-card-service.js.map

/***/ }),

/***/ 1323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListViewStickyListHeaderService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_database__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_settings__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__toast_service__ = __webpack_require__(613);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__loading_service__ = __webpack_require__(611);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ListViewStickyListHeaderService = (function () {
    function ListViewStickyListHeaderService(af, loadingService, toastCtrl) {
        var _this = this;
        this.af = af;
        this.loadingService = loadingService;
        this.toastCtrl = toastCtrl;
        this.getId = function () { return 'stickyListHeader'; };
        this.getTitle = function () { return 'Sticky List header'; };
        this.getAllThemes = function () {
            return [
                { "title": "Basic", "theme": "layout1" },
                { "title": "Product", "theme": "layout2" },
                { "title": "Post", "theme": "layout3" },
                { "title": "Small header + large item", "theme": "layout4" }
            ];
        };
        //Basic data
        this.getDataForLayout1 = function () {
            return {
                "items": [
                    {
                        "groupName": "Jazz",
                        "items": [
                            {
                                "id": 1,
                                "title": "Dejesus Norris",
                                "image": "assets/images/avatar/0.jpg",
                                "price": "$58.99",
                                "subtitle": "58 songs"
                            },
                            {
                                "id": 2,
                                "title": "Gayle Gaines",
                                "image": "assets/images/avatar/1.jpg",
                                "price": "$16.99",
                                "subtitle": "16 songs"
                            },
                            {
                                "id": 3,
                                "title": "Prince Phelps",
                                "image": "assets/images/avatar/7.jpg",
                                "price": "$8.29",
                                "subtitle": "92 songs"
                            }
                        ]
                    },
                    {
                        "groupName": "Blues",
                        "items": [
                            {
                                "id": 1,
                                "title": "Keri Hudson",
                                "image": "assets/images/avatar/0.jpg",
                                "price": "$13.95",
                                "subtitle": "93 songs"
                            },
                            {
                                "id": 2,
                                "title": "Duran Clayton",
                                "image": "assets/images/avatar/1.jpg",
                                "price": "$3.89",
                                "subtitle": "43 songs"
                            },
                            {
                                "id": 3,
                                "title": "Schmidt English",
                                "image": "assets/images/avatar/2.jpg",
                                "price": "$45.06",
                                "subtitle": "62 songs"
                            },
                            {
                                "id": 4,
                                "title": "Lara Lynn",
                                "image": "assets/images/avatar/3.jpg",
                                "price": "$56.66",
                                "subtitle": "81 songs"
                            },
                            {
                                "id": 5,
                                "title": "Perry Bradley",
                                "image": "assets/images/avatar/7.jpg",
                                "price": "$6.78",
                                "subtitle": "2 songs"
                            }
                        ]
                    },
                    {
                        "groupName": "Rock and roll",
                        "items": [
                            {
                                "id": 1,
                                "title": "Randall Hurley",
                                "image": "assets/images/avatar/0.jpg",
                                "price": "$3.99",
                                "subtitle": "4 songs"
                            },
                            {
                                "id": 2,
                                "title": "Josefa Gardner",
                                "image": "assets/images/avatar/1.jpg",
                                "price": "$9.99",
                                "subtitle": "51 songs"
                            },
                            {
                                "id": 3,
                                "title": "Vega Hayes",
                                "image": "assets/images/avatar/2.jpg",
                                "price": "$7.99",
                                "subtitle": "40 songs"
                            },
                            {
                                "id": 4,
                                "title": "Burns Marks",
                                "image": "assets/images/avatar/3.jpg",
                                "price": "$45.99",
                                "subtitle": "58 songs"
                            },
                            {
                                "id": 5,
                                "title": "Byrd Hewitt",
                                "image": "assets/images/avatar/7.jpg",
                                "price": "$39.75",
                                "subtitle": "55 songs"
                            }
                        ]
                    },
                    {
                        "groupName": "R&B",
                        "items": [
                            {
                                "id": 1,
                                "title": "Solis Mullen",
                                "image": "assets/images/avatar/0.jpg",
                                "price": "$34.59",
                                "subtitle": "41 songs"
                            },
                            {
                                "id": 2,
                                "title": "Lottie Stone",
                                "image": "assets/images/avatar/1.jpg",
                                "price": "$44.99",
                                "subtitle": "48 songs"
                            },
                            {
                                "id": 3,
                                "title": "Bates Dunn",
                                "image": "assets/images/avatar/2.jpg",
                                "price": "$89.45",
                                "subtitle": "70 songs"
                            },
                            {
                                "id": 4,
                                "title": "Benton Willis",
                                "image": "assets/images/avatar/3.jpg",
                                "price": "$3.10",
                                "subtitle": "6 songs"
                            }
                        ]
                    },
                    {
                        "groupName": "Country Song",
                        "items": [
                            {
                                "id": 1,
                                "title": "Barbara Bernard",
                                "image": "assets/images/avatar/4.jpg",
                                "price": "$7.99",
                                "subtitle": "85 songs"
                            },
                            {
                                "id": 2,
                                "title": "Megan Singleton",
                                "image": "assets/images/avatar/5.jpg",
                                "price": "$7.39",
                                "subtitle": "59 songs"
                            },
                            {
                                "id": 3,
                                "title": "Guy Mccoy",
                                "image": "assets/images/avatar/6.jpg",
                                "price": "$13.99",
                                "subtitle": "24 songs"
                            },
                            {
                                "id": 4,
                                "title": "Cline Lindsay",
                                "image": "assets/images/avatar/7.jpg",
                                "price": "$75.95",
                                "subtitle": "40 songs"
                            }
                        ]
                    }
                ]
            };
        };
        //  Product data
        this.getDataForLayout2 = function () {
            return {
                "items": [
                    {
                        "groupName": "Shirts",
                        "items": [
                            {
                                "id": 1,
                                "title": "Trendy White Shirt",
                                "image1": "assets/images/background/19.jpg",
                                "image2": "assets/images/background/15.jpg",
                                "image3": "assets/images/background/16.jpg",
                                "image4": "assets/images/background/17.jpg",
                                "image5": "assets/images/background/18.jpg",
                                "price": "$33.99",
                                "buy": "buy",
                                "subtitle": "Free shipping"
                            },
                            {
                                "id": 2,
                                "title": "Trendy Black Shirt",
                                "image1": "assets/images/background/18.jpg",
                                "image2": "assets/images/background/17.jpg",
                                "image3": "assets/images/background/16.jpg",
                                "image4": "assets/images/background/15.jpg",
                                "image5": "assets/images/background/19.jpg",
                                "price": "$28.17",
                                "buy": "buy",
                                "subtitle": "Free shipping"
                            }
                        ]
                    },
                    {
                        "groupName": "Shoes",
                        "items": [
                            {
                                "id": 1,
                                "title": "Trendy White Shoes",
                                "image1": "assets/images/background/16.jpg",
                                "image2": "assets/images/background/18.jpg",
                                "image3": "assets/images/background/19.jpg",
                                "image4": "assets/images/background/15.jpg",
                                "image5": "assets/images/background/17.jpg",
                                "price": "$31.99",
                                "buy": "buy",
                                "subtitle": "Free shipping"
                            },
                            {
                                "id": 2,
                                "title": "Black Shoes",
                                "image1": "assets/images/background/17.jpg",
                                "image2": "assets/images/background/18.jpg",
                                "image3": "assets/images/background/16.jpg",
                                "image4": "assets/images/background/15.jpg",
                                "image5": "assets/images/background/19.jpg",
                                "price": "$25.69",
                                "buy": "buy",
                                "subtitle": "Free shipping"
                            },
                            {
                                "id": 3,
                                "title": "Trendy Shoes",
                                "image1": "assets/images/background/16.jpg",
                                "image2": "assets/images/background/17.jpg",
                                "image3": "assets/images/background/18.jpg",
                                "image4": "assets/images/background/19.jpg",
                                "image5": "assets/images/background/15.jpg",
                                "price": "$13.66",
                                "buy": "buy",
                                "subtitle": "Free shipping"
                            }
                        ]
                    },
                    {
                        "groupName": "Jacket",
                        "items": [
                            {
                                "id": 1,
                                "title": "Trendy White Jacket",
                                "image1": "assets/images/background/19.jpg",
                                "image2": "assets/images/background/18.jpg",
                                "image3": "assets/images/background/17.jpg",
                                "image4": "assets/images/background/16.jpg",
                                "image5": "assets/images/background/15.jpg",
                                "price": "$17.89",
                                "buy": "buy",
                                "subtitle": "Free shipping"
                            },
                            {
                                "id": 2,
                                "title": "Trendy Black Jacket",
                                "image1": "assets/images/background/15.jpg",
                                "image2": "assets/images/background/16.jpg",
                                "image3": "assets/images/background/17.jpg",
                                "image4": "assets/images/background/18.jpg",
                                "image5": "assets/images/background/19.jpg",
                                "price": "$55.01",
                                "buy": "buy",
                                "subtitle": "Free shipping"
                            },
                            {
                                "id": 3,
                                "title": "Brown Jacket",
                                "image1": "assets/images/background/16.jpg",
                                "image2": "assets/images/background/17.jpg",
                                "image3": "assets/images/background/18.jpg",
                                "image4": "assets/images/background/19.jpg",
                                "image5": "assets/images/background/15.jpg",
                                "price": "$14.45",
                                "buy": "buy",
                                "subtitle": "Free shipping"
                            }
                        ]
                    },
                    {
                        "groupName": "T-Shirt",
                        "items": [
                            {
                                "id": 1,
                                "title": "Trendy White T-Shirt",
                                "image1": "assets/images/background/19.jpg",
                                "image2": "assets/images/background/15.jpg",
                                "image3": "assets/images/background/16.jpg",
                                "image4": "assets/images/background/17.jpg",
                                "image5": "assets/images/background/18.jpg",
                                "price": "$17.99",
                                "buy": "buy",
                                "subtitle": "Free shipping"
                            },
                            {
                                "id": 2,
                                "title": "Black T-Shirt",
                                "image1": "assets/images/background/18.jpg",
                                "image2": "assets/images/background/17.jpg",
                                "image3": "assets/images/background/16.jpg",
                                "image4": "assets/images/background/15.jpg",
                                "image5": "assets/images/background/19.jpg",
                                "price": "$44.99",
                                "buy": "buy",
                                "subtitle": "Free shipping"
                            }
                        ]
                    }
                ]
            };
        };
        //Post data
        this.getDataForLayout3 = function () {
            return {
                "items": [
                    {
                        "groupName": "Yesterday",
                        "dateTime": "January 19, 2017.",
                        "items": [
                            {
                                "id": 1,
                                "name": "Julia Petersen",
                                "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                                "shareIcon": "more",
                                "image": "assets/images/avatar/1.jpg",
                                "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehe nderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu"
                            },
                            {
                                "id": 2,
                                "name": "Holman Valencia",
                                "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
                                "shareIcon": "more",
                                "image": "assets/images/avatar/2.jpg",
                                "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehe nderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu"
                            }
                        ]
                    },
                    {
                        "groupName": "Today",
                        "dateTime": "June 26, 2017.",
                        "items": [
                            {
                                "id": 1,
                                "name": "Marisa Cain",
                                "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                                "shareIcon": "more",
                                "image": "assets/images/avatar/3.jpg",
                                "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehe nderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu"
                            },
                            {
                                "id": 2,
                                "name": "Dejesus Norris",
                                "title": "Lorem ipsum dolor sit amet.",
                                "shareIcon": "more",
                                "image": "assets/images/avatar/4.jpg",
                                "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehe nderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu"
                            }
                        ]
                    },
                    {
                        "groupName": "tomorrow",
                        "dateTime": "August 07, 2017.",
                        "items": [
                            {
                                "id": 1,
                                "name": "Gayle Gaines",
                                "title": "Lorem ipsum dolor sit amet, consectetur.",
                                "shareIcon": "more",
                                "image": "assets/images/avatar/5.jpg",
                                "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehe nderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu"
                            },
                            {
                                "id": 2,
                                "name": "Prince Phelps",
                                "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
                                "shareIcon": "more",
                                "image": "assets/images/avatar/5.jpg",
                                "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehe nderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu"
                            }
                        ]
                    }
                ]
            };
        };
        // Small header + large item data
        this.getDataForLayout4 = function () {
            return {
                "items": [
                    {
                        title: 'Monday',
                        description: '14.02.2018',
                        icon: 'icon-calendar-today',
                        items: [
                            {
                                id: '',
                                title: 'Duran Clayton ',
                                image: 'assets/images/avatar/0.jpg',
                                iconLike: 'icon-thumb-up',
                                iconBookmark: 'icon-bookmark',
                                iconShare: 'icon-share-variant',
                                description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also'
                            },
                            {
                                id: '',
                                title: 'Schmidt English ',
                                image: 'assets/images/avatar/1.jpg',
                                iconLike: 'icon-thumb-up',
                                iconBookmark: 'icon-bookmark',
                                iconShare: 'icon-share-variant',
                                description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also'
                            },
                            {
                                id: '',
                                title: 'Lara Lynn ',
                                image: 'assets/images/avatar/2.jpg',
                                iconLike: 'icon-thumb-up',
                                iconBookmark: 'icon-bookmark',
                                iconShare: 'icon-share-variant',
                                description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also'
                            },
                            {
                                id: '',
                                title: 'Perry Bradley ',
                                image: 'assets/images/avatar/3.jpg',
                                iconLike: 'icon-thumb-up',
                                iconBookmark: 'icon-bookmark',
                                iconShare: 'icon-share-variant',
                                description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also'
                            },
                            {
                                id: '',
                                title: 'Randall Hurle ',
                                image: 'assets/images/avatar/4.jpg',
                                iconLike: 'icon-thumb-up',
                                iconBookmark: 'icon-bookmark',
                                iconShare: 'icon-share-variant',
                                description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also'
                            },
                            {
                                id: '',
                                title: 'John Smit ',
                                image: 'assets/images/avatar/5.jpg',
                                iconLike: 'icon-thumb-up',
                                iconBookmark: 'icon-bookmark',
                                iconShare: 'icon-share-variant',
                                description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also'
                            }
                        ]
                    },
                    {
                        title: 'Tuesday',
                        description: '25.01.2018',
                        icon: 'icon-calendar-today',
                        items: [
                            {
                                id: '',
                                title: 'Josefa Gardner ',
                                image: 'assets/images/avatar/0.jpg',
                                iconLike: 'icon-thumb-up',
                                iconBookmark: 'icon-bookmark',
                                iconShare: 'icon-share-variant',
                                description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also'
                            },
                            {
                                id: '',
                                title: 'Vega Hayes ',
                                image: 'assets/images/avatar/1.jpg',
                                iconLike: 'icon-thumb-up',
                                iconBookmark: 'icon-bookmark',
                                iconShare: 'icon-share-variant',
                                description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also'
                            },
                            {
                                id: '',
                                title: 'Fitzgerald Stantont ',
                                image: 'assets/images/avatar/2.jpg',
                                iconLike: 'icon-thumb-up',
                                iconBookmark: 'icon-bookmark',
                                iconShare: 'icon-share-variant',
                                description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also'
                            },
                            {
                                id: '',
                                title: 'Burns Marks ',
                                image: 'assets/images/avatar/3.jpg',
                                iconLike: 'icon-thumb-up',
                                iconBookmark: 'icon-bookmark',
                                iconShare: 'icon-share-variant',
                                description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also'
                            },
                            {
                                id: '',
                                title: 'Byrd Hewitt ',
                                image: 'assets/images/avatar/4.jpg',
                                iconLike: 'icon-thumb-up',
                                iconBookmark: 'icon-bookmark',
                                iconShare: 'icon-share-variant',
                                description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also'
                            },
                            {
                                id: '',
                                title: 'Bates Dunnt ',
                                image: 'assets/images/avatar/5.jpg',
                                iconLike: 'icon-thumb-up',
                                iconBookmark: 'icon-bookmark',
                                iconShare: 'icon-share-variant',
                                description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also'
                            }
                        ]
                    },
                    {
                        title: 'Wednesday',
                        description: '04.02.2018',
                        icon: 'icon-calendar-today',
                        items: [
                            {
                                id: '',
                                title: 'Barbara Bernard ',
                                image: 'assets/images/avatar/0.jpg',
                                iconLike: 'icon-thumb-up',
                                iconBookmark: 'icon-bookmark',
                                iconShare: 'icon-share-variant',
                                description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also'
                            },
                            {
                                id: '',
                                title: 'Guy Mccoy ',
                                image: 'assets/images/avatar/1.jpg',
                                iconLike: 'icon-thumb-up',
                                iconBookmark: 'icon-bookmark',
                                iconShare: 'icon-share-variant',
                                description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also'
                            },
                            {
                                id: '',
                                title: 'Cline Lindsay ',
                                image: 'assets/images/avatar/2.jpg',
                                iconLike: 'icon-thumb-up',
                                iconBookmark: 'icon-bookmark',
                                iconShare: 'icon-share-variant',
                                description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also'
                            },
                            {
                                id: '',
                                title: 'Juliette Medina ',
                                image: 'assets/images/avatar/3.jpg',
                                iconLike: 'icon-thumb-up',
                                iconBookmark: 'icon-bookmark',
                                iconShare: 'icon-share-variant',
                                description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also'
                            },
                            {
                                id: '',
                                title: 'Mildred Clar ',
                                image: 'assets/images/avatar/4.jpg',
                                iconLike: 'icon-thumb-up',
                                iconBookmark: 'icon-bookmark',
                                iconShare: 'icon-share-variant',
                                description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also'
                            },
                            {
                                id: '',
                                title: 'Valdez Bruce ',
                                image: 'assets/images/avatar/5.jpg',
                                iconLike: 'icon-thumb-up',
                                iconBookmark: 'icon-bookmark',
                                iconShare: 'icon-share-variant',
                                description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also'
                            }
                        ]
                    }
                ]
            };
        };
        this.getDataForTheme = function (menuItem) {
            return _this['getDataFor' +
                menuItem.theme.charAt(0).toUpperCase() +
                menuItem.theme.slice(1)]();
        };
        this.getEventsForTheme = function (menuItem) {
            var that = _this;
            return {
                'onItemClick': function (item) {
                    that.toastCtrl.presentToast(item);
                },
                'onProceed': function (item) {
                    that.toastCtrl.presentToast("onProceed");
                },
                'onBuy': function (item) {
                    that.toastCtrl.presentToast("Buy");
                },
                'onShare': function (item) {
                    that.toastCtrl.presentToast("Share");
                },
                'onBookmark': function (item) {
                    that.toastCtrl.presentToast("Bookmark");
                },
                'onLike': function (item) {
                    that.toastCtrl.presentToast("Like");
                },
            };
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
        this.getShowItemId = function (item) {
            return _this.getId() + item.theme.charAt(0).toUpperCase() + "" + item.theme.slice(1);
        };
    }
    ListViewStickyListHeaderService.prototype.load = function (item) {
        var _this = this;
        var that = this;
        that.loadingService.show();
        if (__WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */].IS_FIREBASE_ENABLED) {
            return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
                _this.af
                    .object('listView/stickyListHeader/' + item.theme)
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
    ListViewStickyListHeaderService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_5__loading_service__["a" /* LoadingService */], __WEBPACK_IMPORTED_MODULE_4__toast_service__["a" /* ToastService */]])
    ], ListViewStickyListHeaderService);
    return ListViewStickyListHeaderService;
}());

//# sourceMappingURL=list-view-sticky-list-header-service.js.map

/***/ }),

/***/ 1324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParallaxService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_database__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_settings__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__toast_service__ = __webpack_require__(613);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__loading_service__ = __webpack_require__(611);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ParallaxService = (function () {
    function ParallaxService(af, loadingService, toastCtrl) {
        var _this = this;
        this.af = af;
        this.loadingService = loadingService;
        this.toastCtrl = toastCtrl;
        this.getId = function () { return 'parallax'; };
        this.getTitle = function () { return 'Parallax'; };
        this.getAllThemes = function () {
            return [
                { "title": "Player", "theme": "layout1" },
                { "title": "Product", "theme": "layout2" },
                { "title": "Basic", "theme": "layout3" },
                { "title": "Location Details", "theme": "layout4" }
            ];
        };
        this.getDataForTheme = function (menuItem) {
            return _this['getDataFor' +
                menuItem.theme.charAt(0).toUpperCase() +
                menuItem.theme.slice(1)]();
        };
        //Player data
        this.getDataForLayout1 = function () {
            return {
                "headerImage": "assets/images/background/14.jpg",
                "toolBarTitle": "Player",
                "title": "ArtistName",
                "iconLike": "icon-thumb-up",
                "iconFavorite": "icon-heart",
                "iconShare": "icon-share-variant",
                "iconSkipPrevious": "icon-skip-previous",
                "iconPlay": "icon-play",
                "iconSkipNext": "icon-skip-next",
                "items": [
                    {
                        "id": 1,
                        "title": "Highway 49",
                        "description": "George Thorogood",
                        "image": "assets/images/avatar/0.jpg",
                        "imageAlt": "avatar",
                        "icon": "icon-heart-outline",
                        "duration": "3:42"
                    },
                    {
                        "id": 2,
                        "title": "A Man Of Many Words",
                        "description": "Buddy Guy",
                        "image": "assets/images/avatar/1.jpg",
                        "imageAlt": "avatar",
                        "icon": "icon-heart-outline",
                        "duration": "3:42"
                    },
                    {
                        "id": 3,
                        "title": "Don’t Think Twice",
                        "description": "Susan Tedeschi",
                        "image": "assets/images/avatar/2.jpg",
                        "imageAlt": "avatar",
                        "icon": "icon-heart-outline",
                        "duration": "3:42"
                    },
                    {
                        "id": 4,
                        "title": "Everyday I Have the Blues",
                        "description": "B.B. King",
                        "image": "assets/images/avatar/3.jpg",
                        "imageAlt": "avatar",
                        "icon": "icon-heart-outline",
                        "duration": "3:42"
                    },
                    {
                        "id": 5,
                        "title": "Love Me Like a Man",
                        "description": "Bonnie Raitt",
                        "image": "assets/images/avatar/4.jpg",
                        "imageAlt": "avatar",
                        "icon": "icon-heart-outline",
                        "duration": "3:42"
                    },
                    {
                        "id": 6,
                        "title": "Five Long Years",
                        "description": "	Ike and Tina Turner",
                        "image": "assets/images/avatar/5.jpg",
                        "imageAlt": "avatar",
                        "icon": "icon-heart-outline",
                        "duration": "3:42"
                    },
                    {
                        "id": 7,
                        "title": "Sacred Ground",
                        "description": "John Mooney",
                        "image": "assets/images/avatar/6.jpg",
                        "imageAlt": "avatar",
                        "icon": "icon-heart-outline",
                        "duration": "3:42"
                    },
                    {
                        "id": 8,
                        "title": "Sinner’s Prayer",
                        "description": "Ray Charles",
                        "image": "assets/images/avatar/7.jpg",
                        "imageAlt": "avatar",
                        "icon": "icon-heart-outline",
                        "duration": "3:42"
                    },
                    {
                        "id": 9,
                        "title": "Statesboro Blues",
                        "description": "Allman Brothers Band",
                        "image": "assets/images/avatar/1.jpg",
                        "imageAlt": "avatar",
                        "icon": "icon-heart-outline",
                        "duration": "3:42"
                    },
                    {
                        "id": 10,
                        "title": "Walking by Myself",
                        "description": "Jimmy Rogers",
                        "image": "assets/images/avatar/2.jpg",
                        "imageAlt": "avatar",
                        "icon": "icon-heart-outline",
                        "duration": "3:42"
                    },
                    {
                        "id": 11,
                        "title": "Lovin’ In My Baby’s Eyes",
                        "description": "Taj Mahal",
                        "image": "assets/images/avatar/0.jpg",
                        "imageAlt": "avatar",
                        "icon": "icon-heart-outline",
                        "duration": "3:42"
                    },
                    {
                        "id": 12,
                        "title": "Think It Over",
                        "description": "Dave Hole",
                        "image": "assets/images/avatar/3.jpg",
                        "imageAlt": "avatar",
                        "icon": "icon-heart-outline",
                        "duration": "3:42"
                    }
                ]
            };
        };
        //Product data
        this.getDataForLayout2 = function () {
            return {
                "headerImage": "assets/images/background/7.jpg",
                "toolBarTitle": "Product",
                "title": "Super discount",
                "description": "50% OFF",
                "iconLike": "icon-thumb-up",
                "iconFavorite": "icon-heart",
                "iconShare": "icon-share-variant",
                "items": [
                    {
                        "id": 1,
                        "title": "Black Shirt",
                        "image": "assets/images/avatar/0.jpg",
                        "description": "Duis aute irure dolor in reprehenderit",
                        "oldPrice": "$42.99",
                        "newPrice": "$35.99"
                    },
                    {
                        "id": 2,
                        "title": "Black Sweater",
                        "image": "assets/images/avatar/1.jpg",
                        "description": "Duis aute irure dolor in reprehenderit",
                        "oldPrice": "$42.99",
                        "newPrice": "$35.99"
                    },
                    {
                        "id": 3,
                        "title": "Shirt",
                        "image": "assets/images/avatar/2.jpg",
                        "description": "Duis aute irure dolor in reprehenderit",
                        "oldPrice": "$42.99",
                        "newPrice": "$35.99"
                    },
                    {
                        "id": 4,
                        "title": "White Shirt",
                        "image": "assets/images/avatar/3.jpg",
                        "description": "Duis aute irure dolor in reprehenderit",
                        "oldPrice": "$42.99",
                        "newPrice": "$35.99"
                    },
                    {
                        "id": 5,
                        "title": "White T Shirt",
                        "image": "assets/images/avatar/4.jpg",
                        "description": "Duis aute irure dolor in reprehenderit",
                        "oldPrice": "$42.99",
                        "newPrice": "$35.99"
                    },
                    {
                        "id": 6,
                        "title": "Hoodies",
                        "image": "assets/images/avatar/5.jpg",
                        "description": "Duis aute irure dolor in reprehenderit",
                        "oldPrice": "$42.99",
                        "newPrice": "$35.99"
                    },
                    {
                        "id": 7,
                        "title": "Black Shirt",
                        "image": "assets/images/avatar/0.jpg",
                        "description": "Duis aute irure dolor in reprehenderit",
                        "oldPrice": "$42.99",
                        "newPrice": "$35.99"
                    },
                    {
                        "id": 8,
                        "title": "Black Sweater",
                        "image": "assets/images/avatar/1.jpg",
                        "description": "Duis aute irure dolor in reprehenderit",
                        "oldPrice": "$42.99",
                        "newPrice": "$35.99"
                    },
                    {
                        "id": 9,
                        "title": "Shirt",
                        "image": "assets/images/avatar/2.jpg",
                        "description": "Duis aute irure dolor in reprehenderit",
                        "oldPrice": "$42.99",
                        "newPrice": "$35.99"
                    },
                    {
                        "id": 10,
                        "title": "White Shirt",
                        "image": "assets/images/avatar/3.jpg",
                        "description": "Duis aute irure dolor in reprehenderit",
                        "oldPrice": "$42.99",
                        "newPrice": "$35.99"
                    },
                    {
                        "id": 11,
                        "title": "White T Shirt",
                        "image": "assets/images/avatar/4.jpg",
                        "description": "Duis aute irure dolor in reprehenderit",
                        "oldPrice": "$42.99",
                        "newPrice": "$35.99"
                    },
                    {
                        "id": 12,
                        "title": "Hoodies",
                        "image": "assets/images/avatar/5.jpg",
                        "description": "Duis aute irure dolor in reprehenderit",
                        "oldPrice": "$42.99",
                        "newPrice": "$35.99"
                    }
                ]
            };
        };
        //Basic data
        this.getDataForLayout3 = function () {
            return {
                "headerImage": "assets/images/background/2.jpg",
                "avatar": "assets/images/avatar/0.jpg",
                "title": "Parallax Title",
                "items": [
                    {
                        "id": 1,
                        "title": "Isaac Raid",
                        "image": "assets/images/avatar/0.jpg",
                        "icon": "icon-heart-outline",
                        "favorite": false
                    },
                    {
                        "id": 2,
                        "title": "Jason Graham",
                        "image": "assets/images/avatar/1.jpg",
                        "icon": "icon-heart-outline",
                        "favorite": false
                    },
                    {
                        "id": 3,
                        "title": "Abigail Ross",
                        "image": "assets/images/avatar/2.jpg",
                        "icon": "icon-heart-outline",
                        "favorite": false
                    },
                    {
                        "id": 4,
                        "title": "Justin Rutherford",
                        "image": "assets/images/avatar/3.jpg",
                        "icon": "icon-heart-outline",
                        "favorite": false
                    },
                    {
                        "id": 5,
                        "title": "Nicholas Henderson",
                        "image": "assets/images/avatar/4.jpg",
                        "icon": "icon-heart-outline",
                        "favorite": false
                    },
                    {
                        "id": 6,
                        "title": "Elizabeth Mackenzie",
                        "image": "assets/images/avatar/5.jpg",
                        "icon": "icon-heart-outline",
                        "favorite": false
                    },
                    {
                        "id": 7,
                        "title": "Melanie Ferguson",
                        "image": "assets/images/avatar/6.jpg",
                        "icon": "icon-heart-outline",
                        "favorite": false
                    },
                    {
                        "id": 8,
                        "title": "Fiona Kelly",
                        "image": "assets/images/avatar/7.jpg",
                        "icon": "icon-heart-outline",
                        "favorite": false
                    },
                    {
                        "id": 9,
                        "title": "Nicholas King",
                        "image": "assets/images/avatar/8.jpg",
                        "icon": "icon-heart-outline",
                        "favorite": false
                    },
                    {
                        "id": 10,
                        "title": "Victoria Mitchell",
                        "image": "assets/images/avatar/9.jpg",
                        "icon": "icon-heart-outline",
                        "favorite": false
                    },
                    {
                        "id": 11,
                        "title": "Sophie Lyman",
                        "image": "assets/images/avatar/10.jpg",
                        "icon": "icon-heart-outline",
                        "favorite": false
                    },
                    {
                        "id": 12,
                        "title": "Carl Ince",
                        "image": "assets/images/avatar/11.jpg",
                        "icon": "icon-heart-outline",
                        "favorite": false
                    },
                    {
                        "id": 13,
                        "title": "Michelle Slater",
                        "image": "assets/images/avatar/12.jpg",
                        "icon": "icon-heart-outline",
                        "favorite": false
                    },
                    {
                        "id": 14,
                        "title": "Ryan Mathis",
                        "image": "assets/images/avatar/13.jpg",
                        "icon": "icon-heart-outline",
                        "favorite": false
                    },
                    {
                        "id": 15,
                        "title": "Julia Grant",
                        "image": "assets/images/avatar/14.jpg",
                        "icon": "icon-heart-outline",
                        "favorite": false
                    },
                    {
                        "id": 16,
                        "title": "Hannah Martin",
                        "image": "assets/images/avatar/15.jpg",
                        "icon": "icon-heart-outline",
                        "favorite": false
                    }
                ]
            };
        };
        //Location Details data
        this.getDataForLayout4 = function () {
            return {
                "headerImage": "assets/images/background/15.jpg",
                "title": "Joe's restaurant",
                "iconLike": "icon-thumb-up",
                "iconFavorite": "icon-comment",
                "iconShare": "icon-share-variant",
                "reviews": "4.12 (78 reviews)",
                "iconButton": "icon-walk",
                "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
                "description2": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
                "description3": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English",
                "description4": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
                "iconsStars": [
                    {
                        "isActive": true,
                        "iconActive": "icon-star",
                        "iconInactive": "icon-star-outline"
                    },
                    {
                        "isActive": true,
                        "iconActive": "icon-star",
                        "iconInactive": "icon-star-outline"
                    },
                    {
                        "isActive": true,
                        "iconActive": "icon-star",
                        "iconInactive": "icon-star-outline"
                    },
                    {
                        "isActive": true,
                        "iconActive": "icon-star",
                        "iconInactive": "icon-star-outline"
                    },
                    {
                        "isActive": false,
                        "iconActive": "icon-star",
                        "iconInactive": "icon-star-outline"
                    }
                ],
                "items": [
                    {
                        "id": 1,
                        "name": "ADDRESS:",
                        "value": "Boulevard of food, New York, USA"
                    },
                    {
                        "id": 2,
                        "name": "PHONE:",
                        "value": "+555 555 555"
                    },
                    {
                        "id": 3,
                        "name": "WEB:",
                        "value": "www.joesrestaurant.com"
                    },
                    {
                        "id": 4,
                        "name": "MAIL:",
                        "value": "jimmy@gmail.com"
                    },
                    {
                        "id": 5,
                        "name": "WORKING HOURS:",
                        "value": "7:00 to 23:00 every day"
                    }
                ]
            };
        };
        this.getEventsForTheme = function (menuItem) {
            var that = _this;
            return {
                'onLike': function (item) {
                    that.toastCtrl.presentToast("Like");
                },
                'onFavorite': function (item) {
                    that.toastCtrl.presentToast("Favorite");
                    if (item) {
                        item.favorite = !item.favorite;
                    }
                },
                'onShare': function (item) {
                    that.toastCtrl.presentToast("Share");
                },
                'onSkipPrevious': function (item) {
                    that.toastCtrl.presentToast("Skip Previous");
                },
                'onPlay': function (item) {
                    that.toastCtrl.presentToast("Play");
                },
                'onSkipNext': function (item) {
                    that.toastCtrl.presentToast("Skip Next");
                },
                'onFab': function (item) {
                    that.toastCtrl.presentToast("Fab");
                },
                'onRates': function (index) {
                    that.toastCtrl.presentToast("Rates " + (index + 1));
                },
                'onItemClick': function (item) {
                    that.toastCtrl.presentToast(item.title);
                },
            };
        };
        this.prepareParams = function (item) {
            var result = {
                title: item.title,
                data: {},
                theme: item.theme,
                events: _this.getEventsForTheme(item)
            };
            result[_this.getShowItemId(item)] = true;
            return result;
        };
        this.getShowItemId = function (item) {
            return _this.getId() + item.theme.charAt(0).toUpperCase() + "" + item.theme.slice(1);
        };
    }
    ParallaxService.prototype.load = function (item) {
        var _this = this;
        var that = this;
        that.loadingService.show();
        if (__WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */].IS_FIREBASE_ENABLED) {
            return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
                _this.af
                    .object('parallax/' + item.theme)
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
    ParallaxService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_5__loading_service__["a" /* LoadingService */], __WEBPACK_IMPORTED_MODULE_4__toast_service__["a" /* ToastService */]])
    ], ParallaxService);
    return ParallaxService;
}());

//# sourceMappingURL=parallax-service.js.map

/***/ }),

/***/ 1325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageGalleryService; });
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





var ImageGalleryService = (function () {
    function ImageGalleryService(af, loadingService) {
        var _this = this;
        this.af = af;
        this.loadingService = loadingService;
        this.getId = function () { return 'imageGallery'; };
        this.getTitle = function () { return 'Image Gallery'; };
        this.getAllThemes = function () {
            return [
                { "title": "Category 1 (Animals)", "theme": "layout1" },
                { "title": "Subcategory 1 (Dogs)", "theme": "subcategory" },
                { "title": "Category 2 (Music)", "theme": "layout3" }
            ];
        };
        this.getDataForTheme = function (menuItem) {
            return _this['getDataFor' +
                menuItem.theme.charAt(0).toUpperCase() +
                menuItem.theme.slice(1)]();
        };
        //Category 1 (Animals) data
        this.getDataForLayout1 = function () {
            return {
                "toolBarTitle": "CATEGORY 1 (ANIMALS)",
                "items": [
                    {
                        "id": 1,
                        "title": "Dogs",
                        "image": "assets/images/gallery/dogs/14250733433_271362f4ff_h.jpg",
                        "favorite": true,
                        "items": [
                            {
                                "id": 1,
                                "title": "Dog 1",
                                "image": "assets/images/gallery/dogs/14250733433_271362f4ff_h.jpg"
                            },
                            {
                                "id": 2,
                                "title": "Dog 2",
                                "image": "assets/images/gallery/dogs/174085592_c0b7e5076f_o.jpg"
                            },
                            {
                                "id": 3,
                                "title": "Dog 3",
                                "image": "assets/images/gallery/dogs/174097822_6c0aae32e1_o.jpg"
                            },
                            {
                                "id": 4,
                                "title": "Dog 4",
                                "image": "assets/images/gallery/dogs/4733823624_a758c8e8e9_b.jpg"
                            },
                            {
                                "id": 5,
                                "title": "Dog 5",
                                "image": "assets/images/gallery/dogs/4939588185_4dc4fa8cca_b.jpg"
                            },
                            {
                                "id": 6,
                                "title": "Dog 6",
                                "image": "assets/images/gallery/dogs/6698150783_161b18182e_b.jpg"
                            },
                            {
                                "id": 7,
                                "title": "Dog 7",
                                "image": "assets/images/gallery/dogs/6787786882_4e74d00628_b.jpg"
                            },
                            {
                                "id": 8,
                                "title": "Dog 8",
                                "image": "assets/images/gallery/dogs/8206632393_36622366c6_k.jpg"
                            }
                        ]
                    },
                    {
                        "id": 2,
                        "title": "Horses",
                        "image": "assets/images/gallery/horses/1242426877_9cdace7a19_b.jpg",
                        "favorite": false,
                        "items": [
                            {
                                "id": 1,
                                "title": "Horses 1",
                                "image": "assets/images/gallery/horses/1242426877_9cdace7a19_b.jpg"
                            },
                            {
                                "id": 2,
                                "title": "Horses 2",
                                "image": "assets/images/gallery/horses/2795764001_1e899c8560_b.jpg"
                            },
                            {
                                "id": 3,
                                "title": "Horses 3",
                                "image": "assets/images/gallery/horses/3571783564_b02308c31c_b.jpg"
                            },
                            {
                                "id": 4,
                                "title": "Horses 4",
                                "image": "assets/images/gallery/horses/3724307231_7077e8a5da_b.jpg"
                            },
                            {
                                "id": 5,
                                "title": "Horses 5",
                                "image": "assets/images/gallery/horses/548518280_b408f3d2a5_o.jpg"
                            },
                            {
                                "id": 6,
                                "title": "Horses 6",
                                "image": "assets/images/gallery/horses/6990704333_abff211880_b.jpg"
                            },
                            {
                                "id": 7,
                                "title": "Horses 7",
                                "image": "assets/images/gallery/horses/8621170742_15cd967dc8_b.jpg"
                            },
                            {
                                "id": 8,
                                "title": "Horses 8",
                                "image": "assets/images/gallery/horses/9581032545_e388ee7d3e_b.jpg"
                            }
                        ]
                    },
                    {
                        "id": 3,
                        "title": "Cats",
                        "image": "assets/images/gallery/cats/15636456045_f99e3a5ccd_k.jpg",
                        "favorite": false,
                        "items": [
                            {
                                "id": 1,
                                "title": "Cats 1",
                                "image": "assets/images/gallery/cats/15636456045_f99e3a5ccd_k.jpg"
                            },
                            {
                                "id": 2,
                                "title": "Cats 2",
                                "image": "assets/images/gallery/cats/3285731954_a31261bd38_o.jpg"
                            },
                            {
                                "id": 3,
                                "title": "Cats 3",
                                "image": "assets/images/gallery/cats/560380352_8b58b0611c_o.jpg"
                            },
                            {
                                "id": 4,
                                "title": "Cats 4",
                                "image": "assets/images/gallery/cats/6131811835_b7cdb594f3_b.jpg"
                            },
                            {
                                "id": 5,
                                "title": "Cats 4",
                                "image": "assets/images/gallery/cats/6944735673_7d201cbb98_k.jpg"
                            },
                            {
                                "id": 6,
                                "title": "Cats 5",
                                "image": "assets/images/gallery/cats/8470085922_ed703dcda3_b.jpg"
                            },
                            {
                                "id": 7,
                                "title": "Cats 6",
                                "image": "assets/images/gallery/cats/8854205418_3739d5b3e9_h.jpg"
                            },
                            {
                                "id": 8,
                                "title": "Cats 7",
                                "image": "assets/images/gallery/cats/9308613838_de3df521b0_b.jpg"
                            },
                            {
                                "id": 9,
                                "title": "Cats 8",
                                "image": "assets/images/gallery/cats/9657345685_b680cd813b_k.jpg"
                            }
                        ]
                    },
                    {
                        "id": 4,
                        "title": "Kangaroos",
                        "image": "assets/images/gallery/kangaroos/14018941654_b24dc40edd_k.jpg",
                        "favorite": false,
                        "items": [
                            {
                                "id": 1,
                                "title": "Kangaroo 1",
                                "image": "assets/images/gallery/kangaroos/14018941654_b24dc40edd_k.jpg"
                            },
                            {
                                "id": 2,
                                "title": "Kangaroo 2",
                                "image": "assets/images/gallery/kangaroos/4849609708_06a24058ec_b.jpg"
                            },
                            {
                                "id": 3,
                                "title": "Kangaroo 3",
                                "image": "assets/images/gallery/kangaroos/4901737404_cf375a44d3_b.jpg"
                            },
                            {
                                "id": 4,
                                "title": "Kangaroo 4",
                                "image": "assets/images/gallery/kangaroos/4962092282_15a076cb8c_b.jpg"
                            },
                            {
                                "id": 5,
                                "title": "Kangaroo 5",
                                "image": "assets/images/gallery/kangaroos/5366854530_35d6de81c2_b.jpg"
                            },
                            {
                                "id": 6,
                                "title": "Kangaroo 6",
                                "image": "assets/images/gallery/kangaroos/7643187732_3753aa9b70_k.jpg"
                            },
                            {
                                "id": 7,
                                "title": "Kangaroo 7",
                                "image": "assets/images/gallery/kangaroos/8275651371_0e5e6bffc4_k.jpg"
                            },
                            {
                                "id": 8,
                                "title": "Kangaroo 8",
                                "image": "assets/images/gallery/kangaroos/8672908837_1ec6c9c967_b.jpg"
                            }
                        ]
                    },
                    {
                        "id": 5,
                        "title": "Foxes",
                        "image": "assets/images/gallery/foxes/2741843163_5aefaae694_b.jpg",
                        "favorite": true,
                        "items": [
                            {
                                "id": 1,
                                "title": "Fox 1",
                                "image": "assets/images/gallery/foxes/2741843163_5aefaae694_b.jpg"
                            },
                            {
                                "id": 2,
                                "title": "Fox 2",
                                "image": "assets/images/gallery/foxes/5461393397_b7bbff4c87_b.jpg"
                            },
                            {
                                "id": 3,
                                "title": "Fox 3",
                                "image": "assets/images/gallery/foxes/5872864880_b1739e6e76_b.jpg"
                            },
                            {
                                "id": 4,
                                "title": "Fox 4",
                                "image": "assets/images/gallery/foxes/6904712695_751bb39e16_b.jpg"
                            },
                            {
                                "id": 5,
                                "title": "Fox 5",
                                "image": "assets/images/gallery/foxes/6904714319_c4dbbb2b14_b.jpg"
                            },
                            {
                                "id": 6,
                                "title": "Fox 6",
                                "image": "assets/images/gallery/foxes/6977256115_af1011fbfb_h.jpg"
                            },
                            {
                                "id": 7,
                                "title": "Fox 7",
                                "image": "assets/images/gallery/foxes/7132259891_878e6513c4_k.jpg"
                            },
                            {
                                "id": 8,
                                "title": "Fox 8",
                                "image": "assets/images/gallery/foxes/7238361098_5d244ea023_b.jpg"
                            }
                        ]
                    },
                    {
                        "id": 6,
                        "title": "Eagles",
                        "image": "assets/images/gallery/eagles/12111485434_015bcf17e0_k.jpg",
                        "favorite": true,
                        "items": [
                            {
                                "id": 1,
                                "title": "Eagles 1",
                                "image": "assets/images/gallery/eagles/12111485434_015bcf17e0_k.jpg"
                            },
                            {
                                "id": 2,
                                "title": "Eagles 2",
                                "image": "assets/images/gallery/eagles/12387369564_ee3e9810f3_k.jpg"
                            },
                            {
                                "id": 3,
                                "title": "Eagles 3",
                                "image": "assets/images/gallery/eagles/3358262896_8a623dc7ca_b.jpg"
                            },
                            {
                                "id": 4,
                                "title": "Eagles 4",
                                "image": "assets/images/gallery/eagles/6130420503_b5516d49e4_b.jpg"
                            },
                            {
                                "id": 5,
                                "title": "Eagles 5",
                                "image": "assets/images/gallery/eagles/7924818318_d4f0355bdd_k.jpg"
                            },
                            {
                                "id": 6,
                                "title": "Eagles 6",
                                "image": "assets/images/gallery/eagles/8626880581_7308f6a8a7_k.jpg"
                            },
                            {
                                "id": 7,
                                "title": "Eagles 7",
                                "image": "assets/images/gallery/eagles/9395841437_95035aed96_k.jpg"
                            }
                        ]
                    },
                    {
                        "id": 7,
                        "title": "Squirrels",
                        "image": "assets/images/gallery/squirrels/12683899725_ec12a691c5_k.jpg",
                        "favorite": true,
                        "items": [
                            {
                                "id": 1,
                                "title": "Squirrels 1",
                                "image": "assets/images/gallery/squirrels/12683899725_ec12a691c5_k.jpg"
                            },
                            {
                                "id": 2,
                                "title": "Squirrels 2",
                                "image": "assets/images/gallery/squirrels/12935575784_bcb43443f9_b.jpg"
                            },
                            {
                                "id": 3,
                                "title": "Squirrels 3",
                                "image": "assets/images/gallery/squirrels/15365307348_82551c3cb6_h.jpg"
                            },
                            {
                                "id": 4,
                                "title": "Squirrels 4",
                                "image": "assets/images/gallery/squirrels/2438938256_655ed4f254_b.jpg"
                            },
                            {
                                "id": 5,
                                "title": "Squirrels 5",
                                "image": "assets/images/gallery/squirrels/5194088091_f8af189189_b.jpg"
                            },
                            {
                                "id": 6,
                                "title": "Squirrels 6",
                                "image": "assets/images/gallery/squirrels/5339749381_f1c0a3040b_b.jpg"
                            },
                            {
                                "id": 7,
                                "title": "Squirrels 7",
                                "image": "assets/images/gallery/squirrels/6359846085_c88e231c01_b.jpg"
                            },
                            {
                                "id": 8,
                                "title": "Squirrels 8",
                                "image": "assets/images/gallery/squirrels/6583159839_0ba9c33a75_b.jpg"
                            }
                        ]
                    },
                    {
                        "id": 8,
                        "title": "Bears",
                        "image": "assets/images/gallery/bears/14316604273_778ccdac73_b.jpg",
                        "favorite": true,
                        "items": [
                            {
                                "id": 1,
                                "title": "Bears 1",
                                "image": "assets/images/gallery/bears/14316604273_778ccdac73_b.jpg"
                            },
                            {
                                "id": 2,
                                "title": "Bears 2",
                                "image": "assets/images/gallery/bears/14567666406_61df9c0d52_k.jpg"
                            },
                            {
                                "id": 3,
                                "title": "Bears 3",
                                "image": "assets/images/gallery/bears/15665160302_f87492c246_k.jpg"
                            },
                            {
                                "id": 4,
                                "title": "Bears 4",
                                "image": "assets/images/gallery/bears/3946668599_90958b634c_b.jpg"
                            },
                            {
                                "id": 5,
                                "title": "Bears 5",
                                "image": "assets/images/gallery/bears/5396353993_d8bcf19d5e_b.jpg"
                            },
                            {
                                "id": 6,
                                "title": "Bears 6",
                                "image": "assets/images/gallery/bears/6346303116_7f3d463a68_b.jpg"
                            },
                            {
                                "id": 7,
                                "title": "Bears 7",
                                "image": "assets/images/gallery/bears/8568153824_ae2b3d3a02_k.jpg"
                            },
                            {
                                "id": 8,
                                "title": "Bears 8",
                                "image": "assets/images/gallery/bears/8797595259_e99bf75d2e_k.jpg"
                            }
                        ]
                    }
                ]
            };
        };
        //Subcategory 1 (Dogs) data
        this.getDataForSubcategory = function () {
            return {
                "title": "SUBCATEGORY 1 (DOG)",
                "items": [
                    {
                        "id": 1,
                        "title": "Dog 1",
                        "image": "assets/images/gallery/dogs/14250733433_271362f4ff_h.jpg"
                    },
                    {
                        "id": 2,
                        "title": "Dog 2",
                        "image": "assets/images/gallery/dogs/174085592_c0b7e5076f_o.jpg"
                    },
                    {
                        "id": 3,
                        "title": "Dog 3",
                        "image": "assets/images/gallery/dogs/174097822_6c0aae32e1_o.jpg"
                    },
                    {
                        "id": 4,
                        "title": "Dog 4",
                        "image": "assets/images/gallery/dogs/4733823624_a758c8e8e9_b.jpg"
                    },
                    {
                        "id": 5,
                        "title": "Dog 5",
                        "image": "assets/images/gallery/dogs/4939588185_4dc4fa8cca_b.jpg"
                    },
                    {
                        "id": 6,
                        "title": "Dog 6",
                        "image": "assets/images/gallery/dogs/6698150783_161b18182e_b.jpg"
                    },
                    {
                        "id": 7,
                        "title": "Dog 7",
                        "image": "assets/images/gallery/dogs/6787786882_4e74d00628_b.jpg"
                    },
                    {
                        "id": 8,
                        "title": "Dog 8",
                        "image": "assets/images/gallery/dogs/8206632393_36622366c6_k.jpg"
                    }
                ]
            };
        };
        //Category 2 (Music) data
        this.getDataForLayout3 = function () {
            return {
                "toolBarTitle": "CATEGORY 2 (MUSIC)",
                "items": [
                    {
                        "id": 1,
                        "title": "Violins",
                        "image": "assets/images/gallery/violins/147587554_205e3ed653_o.jpg",
                        "favorite": false,
                        "items": [
                            {
                                "id": 1,
                                "title": "Violin 1",
                                "image": "assets/images/gallery/violins/147587554_205e3ed653_o.jpg"
                            },
                            {
                                "id": 2,
                                "title": "Violin 2",
                                "image": "assets/images/gallery/violins/2322113757_808c904f04_o.jpg"
                            },
                            {
                                "id": 3,
                                "title": "Violin 3",
                                "image": "assets/images/gallery/violins/2323048092_b6c70654ef_o.jpg"
                            },
                            {
                                "id": 4,
                                "title": "Violin 4",
                                "image": "assets/images/gallery/violins/2348623142_af7802400f_b.jpg"
                            },
                            {
                                "id": 5,
                                "title": "Violin 5",
                                "image": "assets/images/gallery/violins/459221457_09e40e82a8_b.jpg"
                            },
                            {
                                "id": 6,
                                "title": "Violin 6",
                                "image": "assets/images/gallery/violins/5950552903_7dbea63895_b.jpg"
                            }
                        ]
                    },
                    {
                        "id": 2,
                        "title": "Drums",
                        "image": "assets/images/gallery/drums/14258762970_33f3a049ed_b.jpg",
                        "favorite": true,
                        "items": [
                            {
                                "id": 1,
                                "title": "Drum 1",
                                "image": "assets/images/gallery/drums/14258762970_33f3a049ed_b.jpg"
                            },
                            {
                                "id": 2,
                                "title": "Drum 2",
                                "image": "assets/images/gallery/drums/2419154841_a4c2015605_b.jpg"
                            },
                            {
                                "id": 3,
                                "title": "Drum 3",
                                "image": "assets/images/gallery/drums/6500936951_bf8d21a4b7_b.jpg"
                            },
                            {
                                "id": 4,
                                "title": "Drum 4",
                                "image": "assets/images/gallery/drums/7587609934_f90d316fa0_b.jpg"
                            },
                            {
                                "id": 5,
                                "title": "Drum 5",
                                "image": "assets/images/gallery/drums/7672718592_ca4ccf7315_b.jpg"
                            },
                            {
                                "id": 6,
                                "title": "Drum 6",
                                "image": "assets/images/gallery/drums/8229110151_3c963f6a8d_k.jpg"
                            }
                        ]
                    },
                    {
                        "id": 3,
                        "title": "Saxophones",
                        "image": "assets/images/gallery/saxophones/3022692180_fd02682a44_b.jpg",
                        "favorite": true,
                        "items": [
                            {
                                "id": 1,
                                "title": "Saxophones 1",
                                "image": "assets/images/gallery/saxophones/3022692180_fd02682a44_b.jpg"
                            },
                            {
                                "id": 2,
                                "title": "Saxophones 2",
                                "image": "assets/images/gallery/saxophones/4268421378_e2d3ecdf1b_o.jpg"
                            },
                            {
                                "id": 3,
                                "title": "Saxophones 3",
                                "image": "assets/images/gallery/saxophones/4586115189_d4886a2118_b.jpg"
                            },
                            {
                                "id": 4,
                                "title": "Saxophones 4",
                                "image": "assets/images/gallery/saxophones/5823606898_77db8827b1_b.jpg"
                            },
                            {
                                "id": 5,
                                "title": "Saxophones 5",
                                "image": "assets/images/gallery/saxophones/7807389560_57b1d5b5f8_k.jpg"
                            },
                            {
                                "id": 6,
                                "title": "Saxophones 6",
                                "image": "assets/images/gallery/saxophones/870265218_716ebe2cb8_o.jpg"
                            }
                        ]
                    },
                    {
                        "id": 4,
                        "title": "Trumpets",
                        "image": "assets/images/gallery/trumpets/14163752896_453a37b84a_h.jpg",
                        "favorite": false,
                        "items": [
                            {
                                "id": 1,
                                "title": "Trumpet 1",
                                "image": "assets/images/gallery/trumpets/14163752896_453a37b84a_h.jpg"
                            },
                            {
                                "id": 2,
                                "title": "Trumpet 2",
                                "image": "assets/images/gallery/trumpets/2531134817_ba97791524_b.jpg"
                            },
                            {
                                "id": 3,
                                "title": "Trumpet 3",
                                "image": "assets/images/gallery/trumpets/4867822712_1b1d3da2cd_b.jpg"
                            },
                            {
                                "id": 4,
                                "title": "Trumpet 4",
                                "image": "assets/images/gallery/trumpets/4949712803_7fc832d2cc_b.jpg"
                            },
                            {
                                "id": 5,
                                "title": "Trumpet 5",
                                "image": "assets/images/gallery/trumpets/6186270505_cc834a94c6_o.jpg"
                            },
                            {
                                "id": 6,
                                "title": "Trumpet 6",
                                "image": "assets/images/gallery/trumpets/7865792422_ef00cb7840_k.jpg"
                            },
                            {
                                "id": 7,
                                "title": "Trumpet 7",
                                "image": "assets/images/gallery/trumpets/8044715752_9855063570_k.jpg"
                            }
                        ]
                    },
                    {
                        "id": 5,
                        "title": "Pianos",
                        "image": "assets/images/gallery/pianos/14287113341_fe14885b70_b.jpg",
                        "favorite": false,
                        "items": [
                            {
                                "id": 1,
                                "title": "Piano 1",
                                "image": "assets/images/gallery/pianos/14287113341_fe14885b70_b.jpg"
                            },
                            {
                                "id": 2,
                                "title": "Piano 2",
                                "image": "assets/images/gallery/pianos/5052063297_61b6386db5_b.jpg"
                            },
                            {
                                "id": 3,
                                "title": "Piano 3",
                                "image": "assets/images/gallery/pianos/5200112333_502355c045_b.jpg"
                            },
                            {
                                "id": 4,
                                "title": "Piano 4",
                                "image": "assets/images/gallery/pianos/5637747696_42cba72967_b.jpg"
                            },
                            {
                                "id": 5,
                                "title": "Piano 5",
                                "image": "assets/images/gallery/pianos/7310209818_537dd46419_b.jpg"
                            },
                            {
                                "id": 6,
                                "title": "Piano 6",
                                "image": "assets/images/gallery/pianos/8247668743_36fcf1f4bb_b.jpg"
                            }
                        ]
                    },
                    {
                        "id": 6,
                        "title": "Accordions",
                        "image": "assets/images/gallery/accordions/153706234_c473e8eabd_o.jpg",
                        "favorite": false,
                        "items": [
                            {
                                "id": 1,
                                "title": "Accordion 1",
                                "image": "assets/images/gallery/accordions/153706234_c473e8eabd_o.jpg"
                            },
                            {
                                "id": 2,
                                "title": "Accordion 2",
                                "image": "assets/images/gallery/accordions/2681657661_177a5edbc5_b.jpg"
                            },
                            {
                                "id": 3,
                                "title": "Accordion 3",
                                "image": "assets/images/gallery/accordions/3369363243_94fb76891d_b.jpg"
                            },
                            {
                                "id": 4,
                                "title": "Accordion 4",
                                "image": "assets/images/gallery/accordions/5316360932_719617fa1d_b.jpg"
                            },
                            {
                                "id": 5,
                                "title": "Accordion 5",
                                "image": "assets/images/gallery/accordions/6151326630_349b892d5a_b.jpg"
                            },
                            {
                                "id": 6,
                                "title": "Accordion 6",
                                "image": "assets/images/gallery/accordions/7607076588_593e509440_h.jpg"
                            }
                        ]
                    },
                    {
                        "id": 7,
                        "title": "Accordions",
                        "image": "assets/images/gallery/accordions/153706234_c473e8eabd_o.jpg",
                        "favorite": false,
                        "items": [
                            {
                                "id": 1,
                                "title": "Accordion 1",
                                "image": "assets/images/gallery/accordions/153706234_c473e8eabd_o.jpg"
                            },
                            {
                                "id": 2,
                                "title": "Accordion 2",
                                "image": "assets/images/gallery/accordions/2681657661_177a5edbc5_b.jpg"
                            },
                            {
                                "id": 3,
                                "title": "Accordion 3",
                                "image": "assets/images/gallery/accordions/3369363243_94fb76891d_b.jpg"
                            },
                            {
                                "id": 4,
                                "title": "Accordion 4",
                                "image": "assets/images/gallery/accordions/5316360932_719617fa1d_b.jpg"
                            },
                            {
                                "id": 5,
                                "title": "Accordion 5",
                                "image": "assets/images/gallery/accordions/6151326630_349b892d5a_b.jpg"
                            },
                            {
                                "id": 6,
                                "title": "Accordion 6",
                                "image": "assets/images/gallery/accordions/7607076588_593e509440_h.jpg"
                            }
                        ]
                    },
                    {
                        "id": 8,
                        "title": "Accordions",
                        "image": "assets/images/gallery/accordions/153706234_c473e8eabd_o.jpg",
                        "favorite": false,
                        "items": [
                            {
                                "id": 1,
                                "title": "Accordion 1",
                                "image": "assets/images/gallery/accordions/153706234_c473e8eabd_o.jpg"
                            },
                            {
                                "id": 2,
                                "title": "Accordion 2",
                                "image": "assets/images/gallery/accordions/2681657661_177a5edbc5_b.jpg"
                            },
                            {
                                "id": 3,
                                "title": "Accordion 3",
                                "image": "assets/images/gallery/accordions/3369363243_94fb76891d_b.jpg"
                            },
                            {
                                "id": 4,
                                "title": "Accordion 4",
                                "image": "assets/images/gallery/accordions/5316360932_719617fa1d_b.jpg"
                            },
                            {
                                "id": 5,
                                "title": "Accordion 5",
                                "image": "assets/images/gallery/accordions/6151326630_349b892d5a_b.jpg"
                            },
                            {
                                "id": 6,
                                "title": "Accordion 6",
                                "image": "assets/images/gallery/accordions/7607076588_593e509440_h.jpg"
                            }
                        ]
                    }
                ]
            };
        };
        this.getEventsForTheme = function (menuItem) {
            return {
                onFavorite: function (item) {
                    item.favorite = !item.favorite;
                }
            };
        };
        this.prepareParams = function (item) {
            var result = {
                title: item.title,
                data: {},
                theme: item.theme,
                events: _this.getEventsForTheme(item)
            };
            result[_this.getShowItemId(item)] = true;
            return result;
        };
        this.getShowItemId = function (item) {
            return _this.getId() + item.theme.charAt(0).toUpperCase() + "" + item.theme.slice(1);
        };
    }
    ImageGalleryService.prototype.load = function (item) {
        var _this = this;
        var that = this;
        that.loadingService.show();
        if (__WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */].IS_FIREBASE_ENABLED) {
            return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
                _this.af
                    .object('imageGallery/' + item.theme)
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
    ImageGalleryService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_4__loading_service__["a" /* LoadingService */]])
    ], ImageGalleryService);
    return ImageGalleryService;
}());

//# sourceMappingURL=image-gallery-service.js.map

/***/ }),

/***/ 1326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_database__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_settings__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__toast_service__ = __webpack_require__(613);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__loading_service__ = __webpack_require__(611);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MapsService = (function () {
    function MapsService(af, loadingService, toastCtrl) {
        var _this = this;
        this.af = af;
        this.loadingService = loadingService;
        this.toastCtrl = toastCtrl;
        this.getId = function () { return 'maps'; };
        this.getTitle = function () { return 'Maps'; };
        this.getAllThemes = function () {
            return [
                { "title": "GMAPS + Location  Details", "theme": "layout1" },
                { "title": "GMAPS + About Us", "theme": "layout2" },
                { "title": "Full Screen View", "theme": "layout3" }
            ];
        };
        this.getDataForTheme = function (menuItem) {
            return _this['getDataFor' +
                menuItem.theme.charAt(0).toUpperCase() +
                menuItem.theme.slice(1)]();
        };
        //GMAPS + Location  Details data
        this.getDataForLayout1 = function () {
            return {
                "iconLike": "icon-thumb-up",
                "iconFavorite": "icon-heart",
                "iconShare": "icon-share-variant",
                "title": "Museum of modern art",
                "titleDescription": "Art Boulevard, New York, USA",
                "reviews": "4.12 (78 reviews)",
                "contentTitle": "In short",
                "contentDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Luctus semper elit platea; Velit aptent euismod pede euismod facilisis? In ultrices venenatis mauris. Consequat gravida pretium ligula lectus; Lacus natoque elit elit: Imperdiet cursus fermentum suspendisse; Cum iaculis venenatis!",
                "iconLoacation": "icon-map-marker-radius",
                "iconLoacationText": "Design Street, New York, USA",
                "iconWatch": "icon-alarm",
                "iconWatchText": "8:00 to 16:00 working days",
                "iconPhone": "icon-phone",
                "iconPhoneText": "333 222 111",
                "iconEarth": "icon-earth",
                "iconEarthText": "www.csform.com",
                "iconEmail": "icon-email-outline",
                "iconEmailText": "dev@csform.com",
                "iconsStars": [
                    {
                        "iconActive": "icon-star",
                        "iconInactive": "icon-star-outline",
                        "isActive": true
                    },
                    {
                        "iconActive": "icon-star",
                        "iconInactive": "icon-star-outline",
                        "isActive": true
                    },
                    {
                        "iconActive": "icon-star",
                        "iconInactive": "icon-star-outline",
                        "isActive": true
                    },
                    {
                        "iconActive": "icon-star",
                        "iconInactive": "icon-star-outline",
                        "isActive": true
                    },
                    {
                        "iconActive": "icon-star",
                        "iconInactive": "icon-star-outline",
                        "isActive": false
                    }
                ],
                "map": {
                    "lat": 40.712562,
                    "lng": -74.005911,
                    "zoom": 15,
                    "mapTypeControl": true,
                    "streetViewControl": true
                }
            };
        };
        //GMAPS + About Us data
        this.getDataForLayout2 = function () {
            return {
                "iconLike": "icon-thumb-up",
                "iconFavorite": "icon-heart",
                "iconShare": "icon-share-variant",
                "title": "Creative Studio Form",
                "titleDescription": "Design & Development agency",
                "contentTitle": "About us",
                "contentDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Luctus semper elit platea; Velit aptent euismod pede euismod facilisis? In ultrices venenatis mauris. Consequat gravida pretium ligula lectus; Lacus natoque elit elit: Imperdiet cursus fermentum suspendisse; Cum iaculis venenatis!",
                "iconLoacation": "icon-map-marker-radius",
                "iconLoacationText": "Design Street, New York, USA",
                "iconWatch": "icon-alarm",
                "iconWatchText": "8:00 to 16:00 working days",
                "iconPhone": "icon-phone",
                "iconPhoneText": "333 222 111",
                "iconEarth": "icon-earth",
                "iconEarthText": "www.csform.com",
                "iconEmail": "icon-email-outline",
                "iconEmailText": "dev@csform.com",
                "titleMap": "Here we are :",
                "map": {
                    "lat": 40.712562,
                    "lng": -74.005911,
                    "zoom": 15,
                    "mapTypeControl": true,
                    "streetViewControl": true
                }
            };
        };
        //Full Screen View data
        this.getDataForLayout3 = function () {
            return {
                "map": {
                    "lat": 40.712562,
                    "lng": -74.005911,
                    "zoom": 15,
                    "mapTypeControl": true,
                    "streetViewControl": true
                }
            };
        };
        this.getEventsForTheme = function (menuItem) {
            var that = _this;
            return {
                'onLike': function (item) {
                    that.toastCtrl.presentToast("Like");
                },
                'onFavorite': function (item) {
                    that.toastCtrl.presentToast("Favorite");
                    if (item) {
                        item.favorite = !item.favorite;
                    }
                },
                'onShare': function (item) {
                    that.toastCtrl.presentToast("Share");
                },
                'onRates': function (index) {
                    that.toastCtrl.presentToast("Rates " + (index + 1));
                },
                'onItemClick': function (item) {
                    that.toastCtrl.presentToast(item.title);
                },
            };
        };
        this.prepareParams = function (item) {
            var result = {
                title: item.title,
                data: {},
                theme: item.theme,
                events: _this.getEventsForTheme(item)
            };
            result[_this.getShowItemId(item)] = true;
            return result;
        };
        this.getShowItemId = function (item) {
            return _this.getId() + item.theme.charAt(0).toUpperCase() + "" + item.theme.slice(1);
        };
    }
    MapsService.prototype.load = function (item) {
        var _this = this;
        var that = this;
        that.loadingService.show();
        if (__WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */].IS_FIREBASE_ENABLED) {
            return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
                _this.af
                    .object('maps/' + item.theme)
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
    MapsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_5__loading_service__["a" /* LoadingService */], __WEBPACK_IMPORTED_MODULE_4__toast_service__["a" /* ToastService */]])
    ], MapsService);
    return MapsService;
}());

//# sourceMappingURL=maps-service.js.map

/***/ }),

/***/ 1327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QRCodeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__toast_service__ = __webpack_require__(613);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__loading_service__ = __webpack_require__(611);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var QRCodeService = (function () {
    function QRCodeService(loadingService, toastCtrl) {
        var _this = this;
        this.loadingService = loadingService;
        this.toastCtrl = toastCtrl;
        this.getId = function () { return 'qrcode'; };
        this.getTitle = function () { return 'Scanner'; };
        this.getAllThemes = function () {
            return [
                { "title": "Click here", "theme": "layout1" }
            ];
        };
        this.getDataForTheme = function (menuItem) {
            return {};
        };
        this.getEventsForTheme = function (menuItem) {
            var that = _this;
            return {
                'onFab': function (item) {
                    that.toastCtrl.presentToast("Fab");
                },
                'onScan': function (item) {
                    that.toastCtrl.presentToast(JSON.stringify(item));
                },
                'onItemClick': function (item) {
                    that.toastCtrl.presentToast(item.title);
                },
            };
        };
        this.prepareParams = function (item) {
            var result = {
                title: item.title,
                data: _this.getDataForTheme(item),
                events: _this.getEventsForTheme(item)
            };
            result[_this.getShowItemId(item)] = true;
            return result;
        };
        this.getShowItemId = function (item) {
            return _this.getId() + item.theme.charAt(0).toUpperCase() + "" + item.theme.slice(1);
        };
    }
    QRCodeService.prototype.load = function (item) {
        var _this = this;
        var that = this;
        that.loadingService.show();
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
            that.loadingService.hide();
            observer.next(_this.getDataForTheme(item));
            observer.complete();
        });
    };
    QRCodeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__loading_service__["a" /* LoadingService */], __WEBPACK_IMPORTED_MODULE_2__toast_service__["a" /* ToastService */]])
    ], QRCodeService);
    return QRCodeService;
}());

//# sourceMappingURL=qrcode-service.js.map

/***/ }),

/***/ 1328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RadioButtonService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_database__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_settings__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__toast_service__ = __webpack_require__(613);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__loading_service__ = __webpack_require__(611);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RadioButtonService = (function () {
    function RadioButtonService(af, loadingService, toastCtrl) {
        var _this = this;
        this.af = af;
        this.loadingService = loadingService;
        this.toastCtrl = toastCtrl;
        this.getId = function () { return 'radioButton'; };
        this.getTitle = function () { return 'Radio Button'; };
        this.getAllThemes = function () {
            return [
                { "title": "Simple", "theme": "layout1" },
                { "title": "With avatars", "theme": "layout2" },
                { "title": "Simple 2", "theme": "layout3" }
            ];
        };
        this.getDataForTheme = function (menuItem) {
            return _this['getDataFor' +
                menuItem.theme.charAt(0).toUpperCase() +
                menuItem.theme.slice(1)]();
        };
        //Simple data
        this.getDataForLayout1 = function () {
            return {
                "selectedItem": 3,
                "items": [
                    { "id": 1, "title": "Mayotte" },
                    { "id": 2, "title": "El Salvador" },
                    { "id": 4, "title": "Slovak Republic" },
                    { "id": 3, "title": "Myanmar" },
                    { "id": 5, "title": "Sudan" },
                    { "id": 6, "title": "Venezuela" },
                    { "id": 7, "title": "Canada" },
                    { "id": 8, "title": "French Polynesia" },
                    { "id": 9, "title": "Zambia" },
                    { "id": 10, "title": "Libya" },
                    { "id": 11, "title": "Swaziland" },
                    { "id": 12, "title": "Uruguay" },
                    { "id": 13, "title": "Ireland" }
                ]
            };
        };
        //With avatars data
        this.getDataForLayout2 = function () {
            return {
                "selectedItem": 4,
                "items": [
                    { "id": 1, "title": "Julia Petersen", "subtitle": "@julia333", "avatar": "assets/images/avatar/0.jpg" },
                    { "id": 2, "title": "Holman Valencia", "subtitle": "@holmanval", "avatar": "assets/images/avatar/1.jpg" },
                    { "id": 4, "title": "Marisa Cain", "subtitle": "@marisa", "avatar": "assets/images/avatar/2.jpg" },
                    { "id": 3, "title": "Dejesus Norris", "subtitle": "@norris", "avatar": "assets/images/avatar/3.jpg" },
                    { "id": 5, "title": "Gayle Gaines", "subtitle": "@Gayle", "avatar": "assets/images/avatar/4.jpg" },
                    { "id": 6, "title": "Prince Phelps", "subtitle": "@phelps123", "avatar": "assets/images/avatar/5.jpg" },
                    { "id": 7, "title": "Keri Hudson", "subtitle": "@kerri333", "avatar": "assets/images/avatar/6.jpg" },
                    { "id": 8, "title": "Duran Clayton", "subtitle": "@duran44", "avatar": "assets/images/avatar/7.jpg" },
                    { "id": 9, "title": "Lara Lynn", "subtitle": "@lara", "avatar": "assets/images/avatar/8.jpg" },
                    { "id": 10, "title": "Perry Bradley", "subtitle": "@bradley", "avatar": "assets/images/avatar/9.jpg" }
                ]
            };
        };
        //Simple 2 data
        this.getDataForLayout3 = function () {
            return {
                "selectedItem": 4,
                "items": [
                    { "id": 1, "title": "Brogan", "subtitle": "Chad" },
                    { "id": 2, "title": "Rehrersburg", "subtitle": "Romania" },
                    { "id": 4, "title": "Durham", "subtitle": "Mauritania" },
                    { "id": 3, "title": "Callaghan", "subtitle": "Tonga" },
                    { "id": 5, "title": "Manitou", "subtitle": "Norway" },
                    { "id": 6, "title": "Weedville", "subtitle": "Northern Mariana Islands" },
                    { "id": 7, "title": "Curtice", "subtitle": "Nauru" },
                    { "id": 8, "title": "Barronett", "subtitle": "Iran" },
                    { "id": 9, "title": "Urie", "subtitle": "Swaziland" },
                    { "id": 10, "title": "Blackgum", "subtitle": "Uruguay" },
                    { "id": 11, "title": "Bannock", "subtitle": "Mayotte" },
                    { "id": 12, "title": "Singer", "subtitle": "El Salvador" },
                    { "id": 13, "title": "Nutrioso", "subtitle": "Slovak Republic" }
                ]
            };
        };
        this.getEventsForTheme = function (menuItem) {
            var that = _this;
            return {
                'onSelect': function (item) {
                    that.toastCtrl.presentToast(item.title);
                },
            };
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
        this.getShowItemId = function (item) {
            return _this.getId() + item.theme.charAt(0).toUpperCase() + "" + item.theme.slice(1);
        };
    }
    RadioButtonService.prototype.load = function (item) {
        var _this = this;
        var that = this;
        that.loadingService.show();
        if (__WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */].IS_FIREBASE_ENABLED) {
            return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
                _this.af
                    .object('radioButton/' + item.theme)
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
    RadioButtonService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_5__loading_service__["a" /* LoadingService */], __WEBPACK_IMPORTED_MODULE_4__toast_service__["a" /* ToastService */]])
    ], RadioButtonService);
    return RadioButtonService;
}());

//# sourceMappingURL=radio-button-service.js.map

/***/ }),

/***/ 1329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RangeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_database__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_settings__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__toast_service__ = __webpack_require__(613);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__loading_service__ = __webpack_require__(611);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RangeService = (function () {
    function RangeService(af, loadingService, toastCtrl) {
        var _this = this;
        this.af = af;
        this.loadingService = loadingService;
        this.toastCtrl = toastCtrl;
        this.getId = function () { return 'range'; };
        this.getTitle = function () { return 'Range'; };
        this.getAllThemes = function () {
            return [
                { "title": "All", "theme": "layout1" },
            ];
        };
        this.getDataForTheme = function (menuItem) {
            return {
                "layout1": {
                    "title": "BASIC",
                    "value": 10
                },
                "layout2": {
                    "title": "WITH ICONS",
                    "iconLeft": "volume-mute",
                    "iconRight": "volume-up",
                    "min": "-200",
                    "max": "200",
                    "value": 0
                },
                "layout3": {
                    "textLeft": "A",
                    "textRight": "A",
                    "title": "WITH PREDEFINED STEPS",
                    "min": "1000",
                    "max": "2000",
                    "step": "100",
                    "value": 20
                },
                "layout4": {
                    "title": "TWO SLIDERS",
                    "min": "1",
                    "max": "100",
                    "step": "10",
                    "value": {
                        "lower": 20,
                        "upper": 70
                    },
                    "textLeft": "1",
                    "textRight": "10"
                }
            };
        };
        this.getEventsForTheme = function (menuItem) {
            var that = _this;
            return {
                'onChange': function (item) {
                    if (window.location.hostname === "localhost") {
                    }
                },
            };
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
        this.getShowItemId = function (item) {
            return _this.getId() + item.theme.charAt(0).toUpperCase() + "" + item.theme.slice(1);
        };
    }
    RangeService.prototype.load = function (item) {
        var _this = this;
        var that = this;
        that.loadingService.show();
        if (__WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */].IS_FIREBASE_ENABLED) {
            return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
                _this.af
                    .object('ranges')
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
    RangeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_5__loading_service__["a" /* LoadingService */], __WEBPACK_IMPORTED_MODULE_4__toast_service__["a" /* ToastService */]])
    ], RangeService);
    return RangeService;
}());

//# sourceMappingURL=range-service.js.map

/***/ }),

/***/ 1330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToggleService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_database__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_settings__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__toast_service__ = __webpack_require__(613);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__loading_service__ = __webpack_require__(611);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ToggleService = (function () {
    function ToggleService(af, loadingService, toastCtrl) {
        var _this = this;
        this.af = af;
        this.loadingService = loadingService;
        this.toastCtrl = toastCtrl;
        this.getId = function () { return 'toggle'; };
        this.getTitle = function () { return 'Toggle'; };
        this.getAllThemes = function () {
            return [
                { "title": "With avatars", "theme": "layout1" },
                { "title": "Simple 2", "theme": "layout2" },
                { "title": "Simple", "theme": "layout3" },
            ];
        };
        this.getDataForTheme = function (menuItem) {
            return _this['getDataFor' +
                menuItem.theme.charAt(0).toUpperCase() +
                menuItem.theme.slice(1)]();
        };
        //With avatars data 
        this.getDataForLayout1 = function () {
            return {
                "items": [
                    {
                        "id": 0,
                        "title": "Chloe\tGibson",
                        "subtitle": "chloe.gibson@email",
                        "isChecked": false,
                        "avatar": "assets/images/avatar/0.jpg"
                    },
                    {
                        "id": 1,
                        "title": "Amy\tKing",
                        "subtitle": "amy.king@email",
                        "isChecked": false,
                        "avatar": "assets/images/avatar/1.jpg"
                    },
                    {
                        "id": 2,
                        "title": "Jasmine\tStewart",
                        "subtitle": "jasmine.stewart@email",
                        "isChecked": false,
                        "avatar": "assets/images/avatar/2.jpg"
                    },
                    {
                        "id": 3,
                        "title": "Lillian\tSpringer",
                        "subtitle": "lillian.springer@emai",
                        "isChecked": false,
                        "avatar": "assets/images/avatar/3.jpg"
                    },
                    {
                        "id": 4,
                        "title": "Sophie\tDyer",
                        "subtitle": "sophie.dyer@email",
                        "isChecked": false,
                        "avatar": "assets/images/avatar/4.jpg"
                    },
                    {
                        "id": 5,
                        "title": "Julia\tLawrence",
                        "subtitle": "julia.lawrence@email",
                        "isChecked": false,
                        "avatar": "assets/images/avatar/5.jpg"
                    },
                    {
                        "id": 6,
                        "title": "Grace\tLambert",
                        "subtitle": "grace.lambert@email",
                        "isChecked": false,
                        "avatar": "assets/images/avatar/6.jpg"
                    },
                    {
                        "id": 7,
                        "title": "Amanda\tLawrence",
                        "subtitle": "amanda.lawrence@emai",
                        "isChecked": false,
                        "avatar": "assets/images/avatar/7.jpg"
                    },
                    {
                        "id": 8,
                        "title": "Sally\tReid",
                        "subtitle": "sally.reid@email",
                        "isChecked": false,
                        "avatar": "assets/images/avatar/8.jpg"
                    },
                    {
                        "id": 9,
                        "title": "Alison\tParsons",
                        "subtitle": "alison.parsons@emai",
                        "isChecked": false,
                        "avatar": "assets/images/avatar/9.jpg"
                    },
                    {
                        "id": 10,
                        "title": "Faith\tAvery",
                        "subtitle": "faith.avery@email",
                        "isChecked": false,
                        "avatar": "assets/images/avatar/10.jpg"
                    },
                    {
                        "id": 11,
                        "title": "Amelia\tMathis",
                        "subtitle": "amelia.mathis@email",
                        "isChecked": false,
                        "avatar": "assets/images/avatar/11.jpg"
                    },
                    {
                        "id": 12,
                        "title": "Sarah\tReid",
                        "subtitle": "sarah.reid@email",
                        "isChecked": false,
                        "avatar": "assets/images/avatar/12.jpg"
                    }
                ]
            };
        };
        //Simple 2 data
        this.getDataForLayout2 = function () {
            return {
                "items": [
                    {
                        "id": 1,
                        "title": "marshall@yahoo.com",
                        "subtitle": "Grant",
                        "isChecked": true
                    },
                    {
                        "id": 2,
                        "title": "valdez@yahoo.com",
                        "subtitle": "Pena",
                        "isChecked": false
                    },
                    {
                        "id": 4,
                        "title": "miles@mail.com",
                        "subtitle": "Jessica",
                        "isChecked": false
                    },
                    {
                        "id": 3,
                        "title": "barber@gmail.com",
                        "subtitle": "Kerri",
                        "isChecked": false
                    },
                    {
                        "id": 5,
                        "title": "gamble@outlook.com",
                        "subtitle": "Natasha",
                        "isChecked": false
                    },
                    {
                        "id": 6,
                        "title": "castaneda@mail.com",
                        "subtitle": "White",
                        "isChecked": true
                    },
                    {
                        "id": 7,
                        "title": "ryan@mail.com",
                        "subtitle": "Vanessa",
                        "isChecked": false
                    },
                    {
                        "id": 8,
                        "title": "hendricks@yahoo.com",
                        "subtitle": "Meredith",
                        "isChecked": false
                    },
                    {
                        "id": 9,
                        "title": "kelly@mail.com",
                        "subtitle": "Carol",
                        "isChecked": false
                    }
                ]
            };
        };
        //Simple data
        this.getDataForLayout3 = function () {
            return {
                "items": [
                    {
                        "id": 0,
                        "title": "Romania",
                        "isChecked": true
                    },
                    {
                        "id": 1,
                        "title": "Mauritania",
                        "isChecked": false
                    },
                    {
                        "id": 2,
                        "title": "Tonga",
                        "isChecked": false
                    },
                    {
                        "id": 3,
                        "title": "Norway",
                        "isChecked": false
                    },
                    {
                        "id": 4,
                        "title": "Northern Mariana Islands",
                        "isChecked": true
                    },
                    {
                        "id": 5,
                        "title": "Nauru",
                        "isChecked": true
                    },
                    {
                        "id": 6,
                        "title": "Iran",
                        "isChecked": true
                    },
                    {
                        "id": 7,
                        "title": "Swaziland",
                        "isChecked": false
                    },
                    {
                        "id": 8,
                        "title": "Uruguay",
                        "isChecked": false
                    },
                    {
                        "id": 9,
                        "title": "Ireland",
                        "isChecked": false
                    },
                    {
                        "id": 10,
                        "title": "Indonesia",
                        "isChecked": false
                    },
                    {
                        "id": 11,
                        "title": "Austria",
                        "isChecked": false
                    },
                    {
                        "id": 12,
                        "title": "Panama",
                        "isChecked": false
                    }
                ]
            };
        };
        this.getEventsForTheme = function (menuItem) {
            var that = _this;
            return {
                'onSelect': function (item) {
                    that.toastCtrl.presentToast(item.title);
                },
            };
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
        this.getShowItemId = function (item) {
            return _this.getId() + item.theme.charAt(0).toUpperCase() + "" + item.theme.slice(1);
        };
    }
    ToggleService.prototype.load = function (item) {
        var _this = this;
        var that = this;
        that.loadingService.show();
        if (__WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */].IS_FIREBASE_ENABLED) {
            return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
                _this.af
                    .object('toggle/' + item.theme)
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
    ToggleService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_5__loading_service__["a" /* LoadingService */], __WEBPACK_IMPORTED_MODULE_4__toast_service__["a" /* ToastService */]])
    ], ToggleService);
    return ToggleService;
}());

//# sourceMappingURL=toggle-service.js.map

/***/ }),

/***/ 1331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_database__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_settings__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__toast_service__ = __webpack_require__(613);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__loading_service__ = __webpack_require__(611);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SelectService = (function () {
    function SelectService(af, loadingService, toastCtrl) {
        var _this = this;
        this.af = af;
        this.loadingService = loadingService;
        this.toastCtrl = toastCtrl;
        this.getId = function () { return 'select'; };
        this.getTitle = function () { return 'Select'; };
        this.getAllThemes = function () {
            return [
                { "title": "Single Select", "theme": "layout1" },
                { "title": "Multi Select", "theme": "layout2" }
            ];
        };
        this.getDataForTheme = function (menuItem) {
            return {
                "title": "Select",
                "layout1": {
                    "title": "City",
                    "selectedItem": 12,
                    "header": "Basic dialog",
                    "items": [
                        {
                            "id": 12,
                            "title": "New York"
                        },
                        {
                            "id": 14,
                            "title": "Paris"
                        },
                        {
                            "id": 13,
                            "title": "Amsterdam"
                        },
                        {
                            "id": 15,
                            "title": "Gotham City"
                        }
                    ]
                },
                "layout2": {
                    "title": "Country",
                    "header": "One touch dialog",
                    "selectedItem": 22,
                    "items": [
                        {
                            "id": 22,
                            "title": "USA"
                        },
                        {
                            "id": 24,
                            "title": "France"
                        },
                        {
                            "id": 23,
                            "title": "Netherland"
                        },
                        {
                            "id": 25,
                            "title": "Gothamland"
                        }
                    ]
                },
                "layout3": {
                    "title": "Address",
                    "header": "With Action sheet",
                    "selectedItem": 31,
                    "items": [
                        {
                            "id": 31,
                            "title": "Choose address"
                        },
                        {
                            "id": 32,
                            "title": "222 Duffield Street"
                        },
                        {
                            "id": 34,
                            "title": "198 Clark Street"
                        },
                        {
                            "id": 33,
                            "title": "588 Kenmore Terrace"
                        }
                    ]
                },
                "layout4": {
                    "title": "Date",
                    "header": "Two option select",
                    "selectedItemMonth": 38,
                    "selectedItemYear": 50,
                    "itemsMonth": [
                        {
                            "id": 38,
                            "title": "January"
                        },
                        {
                            "id": 39,
                            "title": "February"
                        },
                        {
                            "id": 40,
                            "title": "March"
                        },
                        {
                            "id": 41,
                            "title": "April"
                        },
                        {
                            "id": 42,
                            "title": "May"
                        },
                        {
                            "id": 43,
                            "title": "June"
                        },
                        {
                            "id": 44,
                            "title": "July"
                        },
                        {
                            "id": 45,
                            "title": "August"
                        },
                        {
                            "id": 46,
                            "title": "September"
                        },
                        {
                            "id": 47,
                            "title": "October"
                        },
                        {
                            "id": 48,
                            "title": "November"
                        },
                        {
                            "id": 49,
                            "title": "December"
                        }
                    ],
                    "itemsYears": [
                        {
                            "id": 50,
                            "title": "2009"
                        },
                        {
                            "id": 51,
                            "title": "2010"
                        },
                        {
                            "id": 52,
                            "title": "2011"
                        },
                        {
                            "id": 53,
                            "title": "2012"
                        },
                        {
                            "id": 54,
                            "title": "2013"
                        },
                        {
                            "id": 55,
                            "title": "2014"
                        },
                        {
                            "id": 56,
                            "title": "2015"
                        },
                        {
                            "id": 57,
                            "title": "2016"
                        },
                        {
                            "id": 58,
                            "title": "2017"
                        }
                    ]
                },
                "layout5": {
                    "title": "Country",
                    "header": "One touch dialog",
                    "selectedItem": 22,
                    "items": [
                        {
                            "id": 22,
                            "title": "USA"
                        },
                        {
                            "id": 24,
                            "title": "France"
                        },
                        {
                            "id": 23,
                            "title": "Netherland"
                        },
                        {
                            "id": 25,
                            "title": "Gothamland"
                        }
                    ]
                },
                "layout6": {
                    "title": "Date",
                    "header": "Two option select",
                    "selectedItemMonth": 38,
                    "selectedItemYear": 50,
                    "itemsMonth": [
                        {
                            "id": 38,
                            "title": "January"
                        },
                        {
                            "id": 39,
                            "title": "February"
                        },
                        {
                            "id": 40,
                            "title": "March"
                        },
                        {
                            "id": 41,
                            "title": "April"
                        },
                        {
                            "id": 42,
                            "title": "May"
                        },
                        {
                            "id": 43,
                            "title": "June"
                        },
                        {
                            "id": 44,
                            "title": "July"
                        },
                        {
                            "id": 45,
                            "title": "August"
                        },
                        {
                            "id": 46,
                            "title": "September"
                        },
                        {
                            "id": 47,
                            "title": "October"
                        },
                        {
                            "id": 48,
                            "title": "November"
                        },
                        {
                            "id": 49,
                            "title": "December"
                        }
                    ],
                    "itemsYears": [
                        {
                            "id": 50,
                            "title": "2009"
                        },
                        {
                            "id": 51,
                            "title": "2010"
                        },
                        {
                            "id": 52,
                            "title": "2011"
                        },
                        {
                            "id": 53,
                            "title": "2012"
                        },
                        {
                            "id": 54,
                            "title": "2013"
                        },
                        {
                            "id": 55,
                            "title": "2014"
                        },
                        {
                            "id": 56,
                            "title": "2015"
                        },
                        {
                            "id": 57,
                            "title": "2016"
                        },
                        {
                            "id": 58,
                            "title": "2017"
                        }
                    ]
                }
            };
        };
        this.getEventsForTheme = function (menuItem) {
            var that = _this;
            return {
                'onSelect': function (item) {
                    that.toastCtrl.presentToast(JSON.stringify(item));
                },
            };
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
        this.getShowItemId = function (item) {
            return _this.getId() + item.theme.charAt(0).toUpperCase() + "" + item.theme.slice(1);
        };
    }
    SelectService.prototype.load = function (item) {
        var _this = this;
        var that = this;
        that.loadingService.show();
        if (__WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */].IS_FIREBASE_ENABLED) {
            return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
                _this.af
                    .object('select')
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
    SelectService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_5__loading_service__["a" /* LoadingService */], __WEBPACK_IMPORTED_MODULE_4__toast_service__["a" /* ToastService */]])
    ], SelectService);
    return SelectService;
}());

//# sourceMappingURL=select-service.js.map

/***/ }),

/***/ 1332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActionSheetService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_database__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_settings__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__toast_service__ = __webpack_require__(613);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__loading_service__ = __webpack_require__(611);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ActionSheetService = (function () {
    function ActionSheetService(af, loadingService, toastCtrl) {
        var _this = this;
        this.af = af;
        this.loadingService = loadingService;
        this.toastCtrl = toastCtrl;
        this.getId = function () { return 'actionSheet'; };
        this.getTitle = function () { return 'Action Sheet'; };
        this.getAllThemes = function () {
            return [
                { "title": "Basic", "theme": "layout1" },
                { "title": "News", "theme": "layout2" },
                { "title": "With Text Header", "theme": "layout3" }
            ];
        };
        this.getDataForTheme = function (menuItem) {
            return _this['getDataFor' +
                menuItem.theme.charAt(0).toUpperCase() +
                menuItem.theme.slice(1)]();
        };
        //Basic data
        this.getDataForLayout1 = function () {
            return {
                "headerImage": "assets/images/background/0.jpg",
                "shareIcon": "more",
                "actionSheet": {
                    "buttons": [
                        {
                            "text": "Add to Cart",
                            "role": "destructive"
                        },
                        {
                            "text": "Add to Favorites"
                        },
                        {
                            "text": "Read more info"
                        },
                        {
                            "text": "Delete Item"
                        },
                        {
                            "text": "Cancel",
                            "role": "cancel"
                        }
                    ]
                },
                "items": [
                    {
                        "id": 1,
                        "title": "Australia clade in Anglia Pulvis Blundstone",
                        "category": "Celebrity vitae",
                        "productDescriptions": [
                            {
                                "id": 1,
                                "description": "Cum autem producturus tribus cursibus turpis eget nisi cinxit saeculi altum traditione Maxwell tenues satis gratanter polum noctis vincula purgare subest."
                            },
                            {
                                "id": 2,
                                "description": "Cujus rei manifestum est compositus award victor hominis, Maxwell Mark locutus est ad eum de ludo Nicolaum post perficientur in captura quaestionemque quae ipsius causa et de tali tumultu proficisci imperat. Nice quod nest accipere in unum funem, et consummare officium et pro nobis ut hanc seriem incipere possumus habere in via ob facultatem"
                            },
                            {
                                "id": 3,
                                "description": "Nabu portare potuimus protector meus et in Sacra Pagina formam Magna pars aestiva. Quod fuit placitum est in re."
                            },
                            {
                                "id": 4,
                                "description": "Passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum"
                            }
                        ]
                    }
                ]
            };
        };
        //News data
        this.getDataForLayout2 = function () {
            return {
                "headerImage": "assets/images/background/8.jpg",
                "title": "Infinit pontem in Sinis. Quod locus non videre finem pontis. VII deambulatio inter homines pereunt.",
                "subtitle": "by Guerrero Woodard",
                "category": "SEASONAL ITINERIBUS",
                "avatar": "assets/images/avatar/3.jpg",
                "shareIcon": "more",
                "actionSheet": {
                    "buttons": [
                        {
                            "text": "Add to Cart",
                            "role": "destructive"
                        },
                        {
                            "text": "Add to Favorites"
                        },
                        {
                            "text": "Read more info"
                        },
                        {
                            "text": "Delete Item"
                        },
                        {
                            "text": "Cancel",
                            "role": "cancel"
                        }
                    ]
                },
                "items": [
                    {
                        "id": 1,
                        "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                    },
                    {
                        "id": 2,
                        "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                    },
                    {
                        "id": 3,
                        "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip."
                    },
                    {
                        "id": 4,
                        "subtitle": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry ut labore et dolore magna aliqua. Ut enim ad minim veniam."
                    }
                ]
            };
        };
        //With Text Header data
        this.getDataForLayout3 = function () {
            return {
                "shareIcon": "more",
                "actionSheet": {
                    "title": "Choose what to do with this card?",
                    "buttons": [
                        {
                            "text": "Read more",
                            "role": "destructive"
                        },
                        {
                            "text": "Add to Favorites"
                        },
                        {
                            "text": "Delete Card"
                        },
                        {
                            "text": "Disable Card"
                        },
                        {
                            "text": "Cancel",
                            "role": "cancel"
                        }
                    ]
                },
                "items": [
                    {
                        "id": 1,
                        "category": "offer optimus",
                        "image": "assets/images/background/2.jpg",
                        "title": "Aliquam libero pontem",
                        "subtitle": "Tiffany Place, Rehrersburg",
                        "button": "$35.99"
                    },
                    {
                        "id": 2,
                        "category": "res pelagus",
                        "image": "assets/images/background/1.jpg",
                        "title": "Aeris aperta cinematographico",
                        "subtitle": "Rutherford Place, Norvelt",
                        "button": "$12.99"
                    },
                    {
                        "id": 3,
                        "category": "optimus unius tortae",
                        "image": "assets/images/background/0.jpg",
                        "title": "hiems sit naturæ debitus",
                        "subtitle": "Lewis Avenue, Caspar",
                        "button": "$13.45"
                    },
                    {
                        "id": 4,
                        "category": "mons",
                        "image": "assets/images/background/3.jpg",
                        "title": "mons piscium",
                        "subtitle": "SMountain Trout Camp",
                        "button": "$38.60"
                    },
                    {
                        "id": 5,
                        "category": "Aliquam pontem",
                        "image": "assets/images/background/4.jpg",
                        "title": "Aliquam pontem",
                        "subtitle": "Stryker Court, Evergreen",
                        "button": "$40.85"
                    },
                    {
                        "id": 6,
                        "category": "certe optimus",
                        "image": "assets/images/background/5.jpg",
                        "title": "De musica",
                        "subtitle": "Joval Court, Holtville",
                        "button": "$56.55"
                    }
                ]
            };
        };
        this.getEventsForTheme = function (menuItem) {
            var that = _this;
            return {
                'onItemClick': function (item) {
                    that.toastCtrl.presentToast(item.title);
                },
                'onItemClickActionSheet': function (item) {
                    that.toastCtrl.presentToast(item.button.text);
                },
            };
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
        this.getShowItemId = function (item) {
            return _this.getId() + item.theme.charAt(0).toUpperCase() + "" + item.theme.slice(1);
        };
    }
    ActionSheetService.prototype.load = function (item) {
        var _this = this;
        var that = this;
        that.loadingService.show();
        if (__WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */].IS_FIREBASE_ENABLED) {
            return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
                _this.af
                    .object('actionSheet/' + item.theme)
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
    ActionSheetService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_5__loading_service__["a" /* LoadingService */], __WEBPACK_IMPORTED_MODULE_4__toast_service__["a" /* ToastService */]])
    ], ActionSheetService);
    return ActionSheetService;
}());

//# sourceMappingURL=action-sheet-service.js.map

/***/ })

});
//# sourceMappingURL=1.js.map