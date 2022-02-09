(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<sts-name-graphics></sts-name-graphics>\n\n<sts-menu></sts-menu>\n\n\n<main [@routerTransition]=\"getState(o)\" id=\"viewport\">\n  <sts-logo></sts-logo>\n  \n  <router-outlet #o=\"outlet\"  id=\"js-scroll\"></router-outlet>\n</main>\n\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/core/logo/logo.component.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/core/logo/logo.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a data-id=\"logo\" routerLink=\"/\" class=\"cursor-pointer display-block fs-10\" aria-label=\"Go to home page\">\n  \"meticulous UI developer\"<br>\n  <div class=\"fw-600 display-flex ai-center\">aka <h1 class=\"fs-10 ml-4\">Susana Taranco</h1></div>\n</a>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/core/menu/menu.component.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/core/menu/menu.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav data-id=\"menu-box\" class=\"position-fixed bg-coral p-72 w-100\" *ngIf=\"visible\" [@slideInOut]>\n  <div class=\"display-flex jc-space-between ai-center\">\n    <ul class=\"no-list-style p-0 m-0 display-flex\">\n      <li class=\"p-16\"><a routerLink=\"/\" (click)=\"visible = !visible\">Home</a></li>\n      <li class=\"p-16\"><a routerLink=\"/works\" (click)=\"visible = !visible\">Work</a></li>\n      <li class=\"p-16\">About</li>\n    </ul>\n\n    <div>\n      <a href=\"tel:+34667641024\" class=\"p-16\">+34 667 641 024</a>\n      <a href=\"mailto:tarancosusana@gmail.com\" class=\"p-16\">tarancosusana@gmail.com</a>\n      <a href=\"https://goo.gl/maps/LY5rwftMv7jD8shz7\" target=\"_blank\" class=\"p-16\">Calle de Argumosa, 7, 28012 Madrid</a>\n    </div>\n\n    <div class=\"position-absolute uppercase block ta-center cursor-pointer p-8\" tabindex=\"0\" role=\"button\" aria-pressed=\"false\" (click)=\"visible = !visible\">close</div>\n  </div>\n</nav>\n\n<a data-id=\"menu-text\" class=\"tt-uppercase color-coral position-fixed fs-18 cursor-pointer\" (click)=\"visible = !visible\">Menu</a>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/core/name-graphics/name-graphics.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/core/name-graphics/name-graphics.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div data-id=\"name-graphics\" class=\"position-fixed no-pointer-events mix-blend-multiply mob-h\">\n  <svg id=\"s1\" class=\"position-absolute\" viewBox=\"0 0 65 97\" xmlns=\"http://www.w3.org/2000/svg\">\n    <path class=\"fill-coral\" d=\"M33.368,96.064 C23.3486166,96.064 15.4351957,93.8030226 9.6275,89.281 C3.81980429,84.7589774 0.916,78.7297044 0.916,71.193 L0.916,67.07 C0.916,66.1833289 1.3593289,65.74 2.246,65.74 L8.763,65.74 C9.6496711,65.74 10.093,66.1833289 10.093,67.07 L10.093,70.661 C10.093,75.8036924 12.2209787,79.9488176 16.477,83.0965 C20.7330213,86.2441824 26.6292957,87.818 34.166,87.818 C40.9933675,87.818 46.1803156,86.3771811 49.727,83.4955 C53.2736844,80.6138189 55.047,76.7790239 55.047,71.991 C55.047,68.8876512 54.2268415,66.2276777 52.5865,64.011 C50.9461585,61.7943222 48.4191837,59.7106764 45.0055,57.76 C41.5918163,55.8093236 36.7816977,53.5483462 30.575,50.977 C23.9249668,48.3169867 18.7601851,45.98951 15.0805,43.9945 C11.4008149,41.99949 8.4305113,39.4281824 6.1695,36.2805 C3.9084887,33.1328176 2.778,29.1650239 2.778,24.377 C2.778,16.9289628 5.37147407,11.1435206 10.5585,7.0205 C15.7455259,2.89747938 22.8609548,0.836 31.905,0.836 C41.7470492,0.836 49.505305,3.14131028 55.18,7.752 C60.854695,12.3626897 63.692,18.4806285 63.692,26.106 L63.692,29.032 C63.692,29.9186711 63.2486711,30.362 62.362,30.362 L55.712,30.362 C54.8253289,30.362 54.382,29.9186711 54.382,29.032 L54.382,26.638 C54.382,21.4953076 52.3648535,17.2836831 48.3305,14.003 C44.2961465,10.7223169 38.6880359,9.082 31.506,9.082 C25.2106352,9.082 20.3783502,10.3676538 17.009,12.939 C13.6396498,15.5103462 11.955,19.2343089 11.955,24.111 C11.955,27.303016 12.7751585,29.9408229 14.4155,32.0245 C16.0558415,34.1081771 18.4054847,35.9258256 21.4645,37.4775 C24.5235153,39.0291744 29.2449681,41.0463209 35.629,43.529 C42.101699,46.1890133 47.3108136,48.6716551 51.2565,50.977 C55.2021864,53.2823449 58.3941545,56.0974834 60.8325,59.4225 C63.2708455,62.7475166 64.49,66.8039761 64.49,71.592 C64.49,79.0400372 61.7413608,84.9806445 56.244,89.414 C50.7466392,93.8473555 43.1213821,96.064 33.368,96.064 Z\"></path>\n  </svg>\n\n  <svg id=\"t\" class=\"position-absolute\" viewBox=\"0 0 65 94\" xmlns=\"http://www.w3.org/2000/svg\">\n    <path class=\"fill-coral\" d=\"M63.628,0.9 C64.5146711,0.9 64.958,1.3433289 64.958,2.23 L64.958,7.949 C64.958,8.8356711 64.5146711,9.279 63.628,9.279 L37.56,9.279 C37.2053316,9.279 37.028,9.45633156 37.028,9.811 L37.028,92.67 C37.028,93.5566711 36.5846711,94 35.698,94 L28.915,94 C28.0283289,94 27.585,93.5566711 27.585,92.67 L27.585,9.811 C27.585,9.45633156 27.4076684,9.279 27.053,9.279 L2.049,9.279 C1.1623289,9.279 0.719,8.8356711 0.719,7.949 L0.719,2.23 C0.719,1.3433289 1.1623289,0.9 2.049,0.9 L63.628,0.9 Z\"></path>\n  </svg>\n\n  <svg id=\"s2\" class=\"position-absolute\" viewBox=\"0 0 65 97\" xmlns=\"http://www.w3.org/2000/svg\">\n    <path class=\"fill-coral\" d=\"M33.368,96.064 C23.3486166,96.064 15.4351957,93.8030226 9.6275,89.281 C3.81980429,84.7589774 0.916,78.7297044 0.916,71.193 L0.916,67.07 C0.916,66.1833289 1.3593289,65.74 2.246,65.74 L8.763,65.74 C9.6496711,65.74 10.093,66.1833289 10.093,67.07 L10.093,70.661 C10.093,75.8036924 12.2209787,79.9488176 16.477,83.0965 C20.7330213,86.2441824 26.6292957,87.818 34.166,87.818 C40.9933675,87.818 46.1803156,86.3771811 49.727,83.4955 C53.2736844,80.6138189 55.047,76.7790239 55.047,71.991 C55.047,68.8876512 54.2268415,66.2276777 52.5865,64.011 C50.9461585,61.7943222 48.4191837,59.7106764 45.0055,57.76 C41.5918163,55.8093236 36.7816977,53.5483462 30.575,50.977 C23.9249668,48.3169867 18.7601851,45.98951 15.0805,43.9945 C11.4008149,41.99949 8.4305113,39.4281824 6.1695,36.2805 C3.9084887,33.1328176 2.778,29.1650239 2.778,24.377 C2.778,16.9289628 5.37147407,11.1435206 10.5585,7.0205 C15.7455259,2.89747938 22.8609548,0.836 31.905,0.836 C41.7470492,0.836 49.505305,3.14131028 55.18,7.752 C60.854695,12.3626897 63.692,18.4806285 63.692,26.106 L63.692,29.032 C63.692,29.9186711 63.2486711,30.362 62.362,30.362 L55.712,30.362 C54.8253289,30.362 54.382,29.9186711 54.382,29.032 L54.382,26.638 C54.382,21.4953076 52.3648535,17.2836831 48.3305,14.003 C44.2961465,10.7223169 38.6880359,9.082 31.506,9.082 C25.2106352,9.082 20.3783502,10.3676538 17.009,12.939 C13.6396498,15.5103462 11.955,19.2343089 11.955,24.111 C11.955,27.303016 12.7751585,29.9408229 14.4155,32.0245 C16.0558415,34.1081771 18.4054847,35.9258256 21.4645,37.4775 C24.5235153,39.0291744 29.2449681,41.0463209 35.629,43.529 C42.101699,46.1890133 47.3108136,48.6716551 51.2565,50.977 C55.2021864,53.2823449 58.3941545,56.0974834 60.8325,59.4225 C63.2708455,62.7475166 64.49,66.8039761 64.49,71.592 C64.49,79.0400372 61.7413608,84.9806445 56.244,89.414 C50.7466392,93.8473555 43.1213821,96.064 33.368,96.064 Z\"></path>\n  </svg>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/feature/home/home.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/feature/home/home.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<article>\n  <section data-id=\"intro\">\n    <div class=\"tt-uppercase fs-18\">\n      <span class=\"color-silver\">\n        A website is <br>\n        - or should be -  <br>\n        more like music  <br>\n        than like just a screen. \n      </span>\n        <br><br>\n        It should bring up moods and feelings. <br>\n        Content, words, images, code...<br>\n        all that comes later.\n    </div>\n  </section>\n\n  <section id=\"featured-image\" data-id=\"featured-image\" data-speed=\"1.2\">\n      <img \n      srcset=\"../assets/images/sts-once-i-was-a-child@0.5x.webp 320w, ../assets/images/sts-once-i-was-a-child@00x.webp 480w, ../assets/images/sts-once-i-was-a-child@2x.webp 800w\" \n      sizes=\"(max-width: 320px) 280px, (max-width: 480px) 440px, 800px\" \n      src=\"../assets/images/sts-once-i-was-a-child@00x.webp\" \n      alt=\"Susana Taranco as a child\" \n      class=\"of-cover\">\n  </section>\n\n  <section data-id=\"details\" class=\"position-relative\">\n    <div class=\"tt-uppercase fs-18\">\n      <span>\n        Unique experiences \n        that combine innovative \n        design and code \n        (on all screens)\n      </span>\n      <br><br>\n      <a class=\"tt-uppercase color-coral fs-18 cursor-pointer\">Discover more</a>\n    </div>\n  </section>\n\n  <section data-id=\"latest\" class=\"display-flex jc-space-between flex-wrap\">\n    <div class=\"tt-uppercase fs-18 mb-80 display-block w-100\">Latest</div>\n    <div class=\"latest__block display-flex ai-center jc-center bg-black\" (mouseover)=\"p1Visible=true\" (mouseleave)=\"p1Visible=false\" [ngClass]=\"p1Visible == true ? 'cursor-pointer' : '' \"  data-speed=\"-1.5\">\n      <div class=\"position-absolute tt-uppercase color-white ta-center\">Nederlia redesign<br><span>concept</span></div>\n      <img \n      srcset=\"../assets/images/sts-project-nederlia@0.5x.webp 320w, ../assets/images/sts-project-nederlia@00x.webp 480w, ../assets/images/sts-project-nederlia@2x.webp 800w\" \n      sizes=\"(max-width: 320px) 280px, (max-width: 480px) 440px, 800px\" \n      src=\"../assets/images/sts-project-nederlia@00x.webp\" \n      alt=\"Susana Taranco project Nederlia redesign\" \n      class=\"position-relative of-cover\" [ngClass]=\"p1Visible == true ? 'transparent' : '' \">\n    </div>\n    <div class=\"latest__block display-flex ai-center jc-center bg-black\" (mouseover)=\"p2Visible=true\" (mouseleave)=\"p2Visible=false\" [ngClass]=\"p2Visible == true ? 'cursor-pointer' : '' \"  data-speed=\"1\">\n      <div class=\"position-absolute tt-uppercase color-white ta-center\">Studio design<br><span>concept</span></div>\n      <img \n      srcset=\"../assets/images/sts-project-studio@0.5x.webp 320w, ../assets/images/sts-project-studio@00x.webp 480w, ../assets/images/sts-project-studio@2x.webp 800w\" \n      sizes=\"(max-width: 320px) 280px, (max-width: 480px) 440px, 800px\" \n      src=\"../assets/images/sts-project-studio@00x.webp\" \n      alt=\"Susana Taranco project Nederlia redesign\" \n      class=\"position-relative of-cover\" [ngClass]=\"p2Visible == true ? 'transparent' : '' \">\n    </div>\n  </section>\n  <footer data-id=\"footer\" class=\"pt-24 pb-80 mb-80\">\n    <div class=\"layout-wrapper display-flex jc-space-between mob-block\">\n      <div class=\"display-flex ai-center jc-space-between\">\n        <div class=\"fs-32\">©2019</div>\n        \n        <div class=\"fs-10 ml-24\">Would you like to discuss a new project? <a class=\"footer__chatLink\">please get in touch 😊</a>.<br>This site uses <a href=\"/\">cookies</a></div>\n      </div>\n      <div class=\"fs-32 ta-right\">\n        <a href=\"https://www.instagram.com\" target=\"_blank\" class=\"mr-16\">IG</a>\n        <a href=\"https://twitter.com\" target=\"_blank\" class=\"mr-16\">TW</a>\n        <a href=\"https://linkedin.com\" target=\"_blank\">IN</a>\n      </div>\n    </div>\n  </footer>\n</article>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/feature/works/works.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/feature/works/works.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<article id=\"js-scroll\">\n  works works!\n</article>\n"

/***/ }),

/***/ "./src/app/app-routing.animations.ts":
/*!*******************************************!*\
  !*** ./src/app/app-routing.animations.ts ***!
  \*******************************************/
/*! exports provided: routerTransition, homeTransition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routerTransition", function() { return routerTransition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "homeTransition", function() { return homeTransition; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

var query = function (s, a, o) {
    if (o === void 0) { o = { optional: true }; }
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(s, a, o);
};
var routerTransition = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routerTransition', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => *', [
        query(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'fixed', width: '100%' })),
        query(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(100%)' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["sequence"])([
            query(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
                query(':leave', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('500ms cubic-bezier(0.86, 0, 0.07, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-100%)' }))
                ]),
                query(':enter', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(100%)' }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('500ms cubic-bezier(0.86, 0, 0.07, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' })),
                ]),
            ]),
            query(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()),
        ])
    ])
]);
var homeTransition = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('homeTransition', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
        query('.block', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 })),
        query('.block', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["stagger"])(300, [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(100px)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('1s cubic-bezier(0.86, 0, 0.07, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(0px)', opacity: 1 })),
        ])),
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
        query('.block', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["stagger"])(300, [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(0px)', opacity: 1 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('1s cubic-bezier(0.86, 0, 0.07, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(100px)', opacity: 0 })),
        ])),
    ])
]);


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _feature_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./feature/home/home.component */ "./src/app/feature/home/home.component.ts");
/* harmony import */ var _feature_works_works_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./feature/works/works.component */ "./src/app/feature/works/works.component.ts");





var routes = [
    {
        path: '',
        component: _feature_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
        data: {
            state: 'home',
            header: {
                backButton: false
            }
        }
    },
    {
        path: 'works',
        component: _feature_works_works_component__WEBPACK_IMPORTED_MODULE_4__["WorksComponent"],
        data: {
            state: 'works',
            header: {
                backButton: false
            }
        }
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.animations */ "./src/app/app-routing.animations.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.getState = function (outlet) {
        return outlet.activatedRouteData.state;
    };
    AppComponent.prototype.ngOnInit = function () { };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            animations: [_app_routing_animations__WEBPACK_IMPORTED_MODULE_2__["routerTransition"]],
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _feature_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./feature/home/home.component */ "./src/app/feature/home/home.component.ts");
/* harmony import */ var _core_name_graphics_name_graphics_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./core/name-graphics/name-graphics.component */ "./src/app/core/name-graphics/name-graphics.component.ts");
/* harmony import */ var _core_menu_menu_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./core/menu/menu.component */ "./src/app/core/menu/menu.component.ts");
/* harmony import */ var _core_logo_logo_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./core/logo/logo.component */ "./src/app/core/logo/logo.component.ts");
/* harmony import */ var _feature_works_works_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./feature/works/works.component */ "./src/app/feature/works/works.component.ts");











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _feature_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _core_name_graphics_name_graphics_component__WEBPACK_IMPORTED_MODULE_7__["NameGraphicsComponent"],
                _core_menu_menu_component__WEBPACK_IMPORTED_MODULE_8__["MenuComponent"],
                _core_logo_logo_component__WEBPACK_IMPORTED_MODULE_9__["LogoComponent"],
                _feature_works_works_component__WEBPACK_IMPORTED_MODULE_10__["WorksComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/core/logo/logo.component.scss":
/*!***********************************************!*\
  !*** ./src/app/core/logo/logo.component.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "[data-id=logo] {\n  left: 8vw;\n  top: 8vw;\n  line-height: 1.5;\n  z-index: 90;\n  position: fixed;\n}\n\n@media (max-width: 767px) {\n  [data-id=logo] {\n    position: relative;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9sb2dvL0M6XFxVc2Vyc1xcc3VzdGFyXFxEb3dubG9hZHNcXHBvcnRmb2xpby1tYXN0ZXJcXHBvcnRmb2xpby1tYXN0ZXIvc3JjXFxhcHBcXGNvcmVcXGxvZ29cXGxvZ28uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvcmUvbG9nby9sb2dvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksU0FBQTtFQUNBLFFBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDQ0o7O0FERUE7RUFDSTtJQUNJLGtCQUFBO0VDQ047QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvbG9nby9sb2dvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiW2RhdGEtaWQ9XCJsb2dvXCJdIHtcbiAgICBsZWZ0OiA4dnc7XG4gICAgdG9wOiA4dnc7XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICB6LWluZGV4OiA5MDtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAgIFtkYXRhLWlkPVwibG9nb1wiXXtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIH1cbn0iLCJbZGF0YS1pZD1sb2dvXSB7XG4gIGxlZnQ6IDh2dztcbiAgdG9wOiA4dnc7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIHotaW5kZXg6IDkwO1xuICBwb3NpdGlvbjogZml4ZWQ7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICBbZGF0YS1pZD1sb2dvXSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/core/logo/logo.component.ts":
/*!*********************************************!*\
  !*** ./src/app/core/logo/logo.component.ts ***!
  \*********************************************/
/*! exports provided: LogoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoComponent", function() { return LogoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LogoComponent = /** @class */ (function () {
    function LogoComponent() {
    }
    LogoComponent.prototype.ngOnInit = function () {
    };
    LogoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'sts-logo',
            template: __webpack_require__(/*! raw-loader!./logo.component.html */ "./node_modules/raw-loader/index.js!./src/app/core/logo/logo.component.html"),
            styles: [__webpack_require__(/*! ./logo.component.scss */ "./src/app/core/logo/logo.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LogoComponent);
    return LogoComponent;
}());



/***/ }),

/***/ "./src/app/core/menu/menu.component.scss":
/*!***********************************************!*\
  !*** ./src/app/core/menu/menu.component.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "[data-id=menu-text] {\n  z-index: 80;\n  top: 5px;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n}\n\n[data-id=menu-box] {\n  z-index: 70;\n  top: 0;\n}\n\n[data-id=menu-box] [role=button] {\n  bottom: 0;\n  left: 0;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9tZW51L0M6XFxVc2Vyc1xcc3VzdGFyXFxEb3dubG9hZHNcXHBvcnRmb2xpby1tYXN0ZXJcXHBvcnRmb2xpby1tYXN0ZXIvc3JjXFxhcHBcXGNvcmVcXG1lbnVcXG1lbnUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvcmUvbWVudS9tZW51LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLE1BQUE7QUNDSjs7QURDSTtFQUNJLFNBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtBQ0NSIiwiZmlsZSI6InNyYy9hcHAvY29yZS9tZW51L21lbnUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJbZGF0YS1pZD1cIm1lbnUtdGV4dFwiXXtcbiAgICB6LWluZGV4OiA4MDtcbiAgICB0b3A6IDVweDtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xufVxuXG5bZGF0YS1pZD1cIm1lbnUtYm94XCJde1xuICAgIHotaW5kZXg6IDcwO1xuICAgIHRvcDogMDtcblxuICAgICYgW3JvbGU9XCJidXR0b25cIl0ge1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbn0iLCJbZGF0YS1pZD1tZW51LXRleHRdIHtcbiAgei1pbmRleDogODA7XG4gIHRvcDogNXB4O1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbn1cblxuW2RhdGEtaWQ9bWVudS1ib3hdIHtcbiAgei1pbmRleDogNzA7XG4gIHRvcDogMDtcbn1cbltkYXRhLWlkPW1lbnUtYm94XSBbcm9sZT1idXR0b25dIHtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/core/menu/menu.component.ts":
/*!*********************************************!*\
  !*** ./src/app/core/menu/menu.component.ts ***!
  \*********************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");



var MenuComponent = /** @class */ (function () {
    function MenuComponent() {
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'sts-menu',
            template: __webpack_require__(/*! raw-loader!./menu.component.html */ "./node_modules/raw-loader/index.js!./src/app/core/menu/menu.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('slideInOut', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'translateY(-100%)' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('200ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'translateY(0%)' }))
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':leave', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('200ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'translateY(-100%)' }))
                    ])
                ])
            ],
            styles: [__webpack_require__(/*! ./menu.component.scss */ "./src/app/core/menu/menu.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/core/name-graphics/name-graphics.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/core/name-graphics/name-graphics.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "[data-id=name-graphics] {\n  top: 50%;\n  left: 50%;\n  z-index: 999;\n  width: 82vh;\n  height: 72vh;\n  transition: 1s;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  pointer-events: none;\n}\n[data-id=name-graphics] #s1, [data-id=name-graphics] #t, [data-id=name-graphics] #s2 {\n  height: 16vh;\n}\n[data-id=name-graphics] #s1 path, [data-id=name-graphics] #t path, [data-id=name-graphics] #s2 path {\n  transition: 0.3s cubic-bezier(0.1, 0, 0, 1);\n}\n[data-id=name-graphics] #s1 {\n  top: 0;\n  left: 0;\n  transition: 0.3s cubic-bezier(0.1, 0, 0, 1);\n}\n[data-id=name-graphics] #t {\n  top: 50%;\n  left: 50%;\n  transition: 0.3s cubic-bezier(0.1, 0, 0, 1);\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n[data-id=name-graphics] #s2 {\n  bottom: 0;\n  right: 0;\n  transition: 0.3s cubic-bezier(0.1, 0, 0, 1);\n}\n@media (max-width: 900px) {\n  [data-id=name-graphics] {\n    width: 53vh;\n    height: 72vh;\n  }\n  [data-id=name-graphics] #s1, [data-id=name-graphics] #t, [data-id=name-graphics] #s2 {\n    height: 10vh;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9uYW1lLWdyYXBoaWNzL0M6XFxVc2Vyc1xcc3VzdGFyXFxEb3dubG9hZHNcXHBvcnRmb2xpby1tYXN0ZXJcXHBvcnRmb2xpby1tYXN0ZXIvc3JjXFxhcHBcXGNvcmVcXG5hbWUtZ3JhcGhpY3NcXG5hbWUtZ3JhcGhpY3MuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvcmUvbmFtZS1ncmFwaGljcy9uYW1lLWdyYXBoaWNzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksUUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0Esd0NBQUE7VUFBQSxnQ0FBQTtFQUNBLG9CQUFBO0FDQ0o7QURDSTtFQUNJLFlBQUE7QUNDUjtBRENRO0VBQVMsMkNBQUE7QUNFakI7QURDSTtFQUNJLE1BQUE7RUFDQSxPQUFBO0VBQ0EsMkNBQUE7QUNDUjtBREVJO0VBQ0ksUUFBQTtFQUNBLFNBQUE7RUFDQSwyQ0FBQTtFQUNBLHdDQUFBO1VBQUEsZ0NBQUE7QUNBUjtBREdJO0VBQ0ksU0FBQTtFQUNBLFFBQUE7RUFDQSwyQ0FBQTtBQ0RSO0FES0E7RUFDSTtJQUNJLFdBQUE7SUFDQSxZQUFBO0VDRk47RURJTTtJQUFpQixZQUFBO0VDRHZCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb3JlL25hbWUtZ3JhcGhpY3MvbmFtZS1ncmFwaGljcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIltkYXRhLWlkPVwibmFtZS1ncmFwaGljc1wiXXtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgei1pbmRleDogOTk5O1xuICAgIHdpZHRoOiA4MnZoO1xuICAgIGhlaWdodDogNzJ2aDtcbiAgICB0cmFuc2l0aW9uOiAxcztcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcblxuICAgICYgI3MxLCAjdCwgI3MyIHsgXG4gICAgICAgIGhlaWdodDogMTZ2aDsgXG5cbiAgICAgICAgJiBwYXRoIHsgdHJhbnNpdGlvbjogMC4zcyBjdWJpYy1iZXppZXIoMC4xLCAwLCAwLCAxKTsgfVxuICAgIH1cblxuICAgICYgI3MxIHtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB0cmFuc2l0aW9uOiAwLjNzIGN1YmljLWJlemllcigwLjEsIDAsIDAsIDEpO1xuICAgIH1cblxuICAgICYgI3Qge1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICB0cmFuc2l0aW9uOiAwLjNzIGN1YmljLWJlemllcigwLjEsIDAsIDAsIDEpO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICB9XG5cbiAgICAmICNzMiB7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIHRyYW5zaXRpb246IDAuM3MgY3ViaWMtYmV6aWVyKDAuMSwgMCwgMCwgMSk7XG4gICAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogOTAwcHgpIHtcbiAgICBbZGF0YS1pZD1cIm5hbWUtZ3JhcGhpY3NcIl17XG4gICAgICAgIHdpZHRoOiA1M3ZoO1xuICAgICAgICBoZWlnaHQ6IDcydmg7XG5cbiAgICAgICAgJiAjczEsICN0LCAjczIgeyBoZWlnaHQ6IDEwdmg7IH1cbiAgICB9XG59IiwiW2RhdGEtaWQ9bmFtZS1ncmFwaGljc10ge1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB6LWluZGV4OiA5OTk7XG4gIHdpZHRoOiA4MnZoO1xuICBoZWlnaHQ6IDcydmg7XG4gIHRyYW5zaXRpb246IDFzO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5bZGF0YS1pZD1uYW1lLWdyYXBoaWNzXSAjczEsIFtkYXRhLWlkPW5hbWUtZ3JhcGhpY3NdICN0LCBbZGF0YS1pZD1uYW1lLWdyYXBoaWNzXSAjczIge1xuICBoZWlnaHQ6IDE2dmg7XG59XG5bZGF0YS1pZD1uYW1lLWdyYXBoaWNzXSAjczEgcGF0aCwgW2RhdGEtaWQ9bmFtZS1ncmFwaGljc10gI3QgcGF0aCwgW2RhdGEtaWQ9bmFtZS1ncmFwaGljc10gI3MyIHBhdGgge1xuICB0cmFuc2l0aW9uOiAwLjNzIGN1YmljLWJlemllcigwLjEsIDAsIDAsIDEpO1xufVxuW2RhdGEtaWQ9bmFtZS1ncmFwaGljc10gI3MxIHtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB0cmFuc2l0aW9uOiAwLjNzIGN1YmljLWJlemllcigwLjEsIDAsIDAsIDEpO1xufVxuW2RhdGEtaWQ9bmFtZS1ncmFwaGljc10gI3Qge1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2l0aW9uOiAwLjNzIGN1YmljLWJlemllcigwLjEsIDAsIDAsIDEpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cbltkYXRhLWlkPW5hbWUtZ3JhcGhpY3NdICNzMiB7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIHRyYW5zaXRpb246IDAuM3MgY3ViaWMtYmV6aWVyKDAuMSwgMCwgMCwgMSk7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA5MDBweCkge1xuICBbZGF0YS1pZD1uYW1lLWdyYXBoaWNzXSB7XG4gICAgd2lkdGg6IDUzdmg7XG4gICAgaGVpZ2h0OiA3MnZoO1xuICB9XG4gIFtkYXRhLWlkPW5hbWUtZ3JhcGhpY3NdICNzMSwgW2RhdGEtaWQ9bmFtZS1ncmFwaGljc10gI3QsIFtkYXRhLWlkPW5hbWUtZ3JhcGhpY3NdICNzMiB7XG4gICAgaGVpZ2h0OiAxMHZoO1xuICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/core/name-graphics/name-graphics.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/core/name-graphics/name-graphics.component.ts ***!
  \***************************************************************/
/*! exports provided: NameGraphicsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NameGraphicsComponent", function() { return NameGraphicsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NameGraphicsComponent = /** @class */ (function () {
    function NameGraphicsComponent() {
    }
    NameGraphicsComponent.prototype.ngOnInit = function () {
        window.addEventListener("load", onLoad);
        function onLoad() {
            document.addEventListener("scroll", onScroll);
        }
        function onScroll() {
            var parallaxEls = document.querySelectorAll("[data-speed]");
            console.log(document.querySelector("#viewport").getBoundingClientRect().top);
            document.querySelector("#js-scroll").getBoundingClientRect().top < -400 ? document.querySelector("#s1 path").classList.add("fill-gainsboro") : document.querySelector("#s1 path").classList.remove("fill-gainsboro");
            document.querySelector("#js-scroll").getBoundingClientRect().top < -200 ? document.querySelector("#t path").classList.add("fill-gainsboro") : document.querySelector("#t path").classList.remove("fill-gainsboro");
            document.querySelector("#js-scroll").getBoundingClientRect().top < -100 ? document.querySelector("#s2 path").classList.add("fill-gainsboro") : document.querySelector("#s2 path").classList.remove("fill-gainsboro");
            for (var _i = 0, _a = Object.keys(parallaxEls); _i < _a.length; _i++) {
                var item = _a[_i];
                var parallaxEl = parallaxEls[item];
                var direction = parallaxEl.dataset.speed * (document.querySelector("#js-scroll").getBoundingClientRect().top / 40);
                parallaxEl.style.transform = "translate3d(0," + direction + "px,0)";
            }
        }
    };
    NameGraphicsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'sts-name-graphics',
            template: __webpack_require__(/*! raw-loader!./name-graphics.component.html */ "./node_modules/raw-loader/index.js!./src/app/core/name-graphics/name-graphics.component.html"),
            styles: [__webpack_require__(/*! ./name-graphics.component.scss */ "./src/app/core/name-graphics/name-graphics.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NameGraphicsComponent);
    return NameGraphicsComponent;
}());



/***/ }),

/***/ "./src/app/feature/home/home.component.scss":
/*!**************************************************!*\
  !*** ./src/app/feature/home/home.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "[data-id=intro] {\n  padding-left: calc(50vw + 41vh - 17vh);\n  margin-top: calc(50vh + 8vh);\n  -webkit-transform: translateY(-100%);\n  transform: translateY(-100%);\n  line-height: 1.3;\n}\n\n[data-id=featured-image] {\n  margin-top: calc(-182px - 45px);\n  width: calc(50vw - 10px);\n  height: 33vw;\n  left: 10px;\n}\n\n[data-id=featured-image] img {\n  display: none;\n}\n\n[data-id=featured-image] canvas {\n  display: block;\n}\n\n[data-id=details] {\n  padding-top: 50px;\n  width: 210px;\n  left: 50%;\n  -webkit-transform: translateX(-100%);\n          transform: translateX(-100%);\n  line-height: 1.3;\n}\n\n[data-id=latest] {\n  z-index: 67;\n  margin-top: 20px;\n  padding: 150px 8vw;\n}\n\n[data-id=latest] .latest__block {\n  width: calc(50% - 4vw);\n}\n\n@media (max-width: 900px) {\n  [data-id=intro] {\n    padding-left: 60vw;\n    margin-top: calc(31vh + 8vh);\n  }\n}\n\n@media (max-width: 767px) {\n  [data-id=intro] {\n    padding-left: 8vw;\n    margin-top: 50px;\n    -webkit-transform: none;\n            transform: none;\n  }\n\n  [data-id=featured-image] {\n    margin-top: 0;\n    width: 84vw;\n    left: 8vw;\n    margin-top: 30px;\n    height: auto;\n  }\n  [data-id=featured-image] img {\n    display: block;\n  }\n  [data-id=featured-image] canvas {\n    display: none;\n  }\n\n  [data-id=details] {\n    -webkit-transform: none;\n            transform: none;\n    width: 86vw;\n    left: 8vw;\n    padding-top: 40px;\n  }\n\n  [data-id=latest] {\n    padding: 40px 8vw 80px 8vw;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZS9ob21lL0M6XFxVc2Vyc1xcc3VzdGFyXFxEb3dubG9hZHNcXHBvcnRmb2xpby1tYXN0ZXJcXHBvcnRmb2xpby1tYXN0ZXIvc3JjXFxhcHBcXGZlYXR1cmVcXGhvbWVcXGhvbWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2ZlYXR1cmUvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksc0NBQUE7RUFDQSw0QkFBQTtFQUNBLG9DQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksK0JBQUE7RUFDQSx3QkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FDQ0o7O0FEQ0k7RUFBUSxhQUFBO0FDRVo7O0FEREk7RUFBVyxjQUFBO0FDSWY7O0FEREE7RUFDSSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0Esb0NBQUE7VUFBQSw0QkFBQTtFQUNBLGdCQUFBO0FDSUo7O0FEREE7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0lKOztBREZJO0VBQ0ksc0JBQUE7QUNJUjs7QURBQTtFQUNJO0lBQ0ksa0JBQUE7SUFDQSw0QkFBQTtFQ0dOO0FBQ0Y7O0FEQUE7RUFDSTtJQUNJLGlCQUFBO0lBQ0EsZ0JBQUE7SUFDQSx1QkFBQTtZQUFBLGVBQUE7RUNFTjs7RURDRTtJQUNJLGFBQUE7SUFDQSxXQUFBO0lBQ0EsU0FBQTtJQUNBLGdCQUFBO0lBQ0EsWUFBQTtFQ0VOO0VEQU07SUFBUSxjQUFBO0VDR2Q7RURGTTtJQUFXLGFBQUE7RUNLakI7O0VERkU7SUFDSSx1QkFBQTtZQUFBLGVBQUE7SUFDQSxXQUFBO0lBQ0EsU0FBQTtJQUNBLGlCQUFBO0VDS047O0VERkU7SUFDSSwwQkFBQTtFQ0tOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9mZWF0dXJlL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIltkYXRhLWlkPVwiaW50cm9cIl17XG4gICAgcGFkZGluZy1sZWZ0OiBjYWxjKDUwdncgKyA0MXZoIC0gMTd2aCk7XG4gICAgbWFyZ2luLXRvcDogY2FsYyg1MHZoICsgOHZoKTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcbiAgICBsaW5lLWhlaWdodDogMS4zO1xufVxuXG5bZGF0YS1pZD1cImZlYXR1cmVkLWltYWdlXCJde1xuICAgIG1hcmdpbi10b3A6IGNhbGMoLTE4MnB4IC0gNDVweCk7XG4gICAgd2lkdGg6IGNhbGMoNTB2dyAtIDEwcHgpO1xuICAgIGhlaWdodDogMzN2dztcbiAgICBsZWZ0OiAxMHB4O1xuICAgIFxuICAgICYgaW1nIHsgZGlzcGxheTogbm9uZTsgfVxuICAgICYgY2FudmFzIHsgZGlzcGxheTogYmxvY2s7IH1cbn1cblxuW2RhdGEtaWQ9XCJkZXRhaWxzXCJdIHtcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcbiAgICB3aWR0aDogMjEwcHg7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XG4gICAgbGluZS1oZWlnaHQ6IDEuMztcbn1cblxuW2RhdGEtaWQ9XCJsYXRlc3RcIl0ge1xuICAgIHotaW5kZXg6IDY3O1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgcGFkZGluZzogMTUwcHggOHZ3O1xuXG4gICAgJiAubGF0ZXN0X19ibG9jayB7XG4gICAgICAgIHdpZHRoOiBjYWxjKDUwJSAtIDR2dyk7XG4gICAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogOTAwcHgpIHtcbiAgICBbZGF0YS1pZD1cImludHJvXCJde1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDYwdnc7XG4gICAgICAgIG1hcmdpbi10b3A6IGNhbGMoMzF2aCArIDh2aCk7XG4gICAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICBbZGF0YS1pZD1cImludHJvXCJde1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDh2dztcbiAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICAgICAgdHJhbnNmb3JtOiBub25lO1xuICAgIH1cblxuICAgIFtkYXRhLWlkPVwiZmVhdHVyZWQtaW1hZ2VcIl17XG4gICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgIHdpZHRoOiA4NHZ3O1xuICAgICAgICBsZWZ0OiA4dnc7XG4gICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICBcbiAgICAgICAgJiBpbWcgeyBkaXNwbGF5OiBibG9jazsgfVxuICAgICAgICAmIGNhbnZhcyB7IGRpc3BsYXk6IG5vbmU7IH1cbiAgICB9XG5cbiAgICBbZGF0YS1pZD1cImRldGFpbHNcIl0ge1xuICAgICAgICB0cmFuc2Zvcm06IG5vbmU7XG4gICAgICAgIHdpZHRoOiA4NnZ3O1xuICAgICAgICBsZWZ0OiA4dnc7XG4gICAgICAgIHBhZGRpbmctdG9wOiA0MHB4O1xuICAgIH1cblxuICAgIFtkYXRhLWlkPVwibGF0ZXN0XCJdIHtcbiAgICAgICAgcGFkZGluZzogNDBweCA4dncgODBweCA4dnc7XG4gICAgfVxufSIsIltkYXRhLWlkPWludHJvXSB7XG4gIHBhZGRpbmctbGVmdDogY2FsYyg1MHZ3ICsgNDF2aCAtIDE3dmgpO1xuICBtYXJnaW4tdG9wOiBjYWxjKDUwdmggKyA4dmgpO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSk7XG4gIGxpbmUtaGVpZ2h0OiAxLjM7XG59XG5cbltkYXRhLWlkPWZlYXR1cmVkLWltYWdlXSB7XG4gIG1hcmdpbi10b3A6IGNhbGMoLTE4MnB4IC0gNDVweCk7XG4gIHdpZHRoOiBjYWxjKDUwdncgLSAxMHB4KTtcbiAgaGVpZ2h0OiAzM3Z3O1xuICBsZWZ0OiAxMHB4O1xufVxuW2RhdGEtaWQ9ZmVhdHVyZWQtaW1hZ2VdIGltZyB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5bZGF0YS1pZD1mZWF0dXJlZC1pbWFnZV0gY2FudmFzIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbltkYXRhLWlkPWRldGFpbHNdIHtcbiAgcGFkZGluZy10b3A6IDUwcHg7XG4gIHdpZHRoOiAyMTBweDtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xuICBsaW5lLWhlaWdodDogMS4zO1xufVxuXG5bZGF0YS1pZD1sYXRlc3RdIHtcbiAgei1pbmRleDogNjc7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIHBhZGRpbmc6IDE1MHB4IDh2dztcbn1cbltkYXRhLWlkPWxhdGVzdF0gLmxhdGVzdF9fYmxvY2sge1xuICB3aWR0aDogY2FsYyg1MCUgLSA0dncpO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogOTAwcHgpIHtcbiAgW2RhdGEtaWQ9aW50cm9dIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDYwdnc7XG4gICAgbWFyZ2luLXRvcDogY2FsYygzMXZoICsgOHZoKTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIFtkYXRhLWlkPWludHJvXSB7XG4gICAgcGFkZGluZy1sZWZ0OiA4dnc7XG4gICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICB0cmFuc2Zvcm06IG5vbmU7XG4gIH1cblxuICBbZGF0YS1pZD1mZWF0dXJlZC1pbWFnZV0ge1xuICAgIG1hcmdpbi10b3A6IDA7XG4gICAgd2lkdGg6IDg0dnc7XG4gICAgbGVmdDogOHZ3O1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICB9XG4gIFtkYXRhLWlkPWZlYXR1cmVkLWltYWdlXSBpbWcge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIFtkYXRhLWlkPWZlYXR1cmVkLWltYWdlXSBjYW52YXMge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICBbZGF0YS1pZD1kZXRhaWxzXSB7XG4gICAgdHJhbnNmb3JtOiBub25lO1xuICAgIHdpZHRoOiA4NnZ3O1xuICAgIGxlZnQ6IDh2dztcbiAgICBwYWRkaW5nLXRvcDogNDBweDtcbiAgfVxuXG4gIFtkYXRhLWlkPWxhdGVzdF0ge1xuICAgIHBhZGRpbmc6IDQwcHggOHZ3IDgwcHggOHZ3O1xuICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/feature/home/home.component.ts":
/*!************************************************!*\
  !*** ./src/app/feature/home/home.component.ts ***!
  \************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app-routing.animations */ "./src/app/app-routing.animations.ts");
/* harmony import */ var hover_effect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! hover-effect */ "./node_modules/hover-effect/dist/hover-effect.es.js");




var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngAfterViewInit = function () {
        window.addEventListener("load", onLoad);
        function onLoad() {
            window.focus();
            window.addEventListener("resize", onResize);
        }
        function onResize() {
            var mq = window.matchMedia("(max-width: 767px)");
            if (mq.matches) {
                document.getElementsByTagName("canvas")[0].style.display = "none";
            }
            else {
                document.getElementsByTagName("canvas")[0].style.display = "block";
            }
        }
        new hover_effect__WEBPACK_IMPORTED_MODULE_3__["default"]({
            parent: document.querySelector("#featured-image"),
            intensity: .3,
            image1: "../assets/images/sts-once-i-was-a-child@00x.webp",
            image2: "../assets/images/sts-once-i-was-a-child@00x.webp",
            displacementImage: "../assets/images/displacement.png"
        });
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'sts-home',
            animations: [_app_routing_animations__WEBPACK_IMPORTED_MODULE_2__["routerTransition"]],
            template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/feature/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/feature/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/feature/works/works.component.scss":
/*!****************************************************!*\
  !*** ./src/app/feature/works/works.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmUvd29ya3Mvd29ya3MuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/feature/works/works.component.ts":
/*!**************************************************!*\
  !*** ./src/app/feature/works/works.component.ts ***!
  \**************************************************/
/*! exports provided: WorksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorksComponent", function() { return WorksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var WorksComponent = /** @class */ (function () {
    function WorksComponent() {
    }
    WorksComponent.prototype.ngOnInit = function () {
    };
    WorksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-works',
            template: __webpack_require__(/*! raw-loader!./works.component.html */ "./node_modules/raw-loader/index.js!./src/app/feature/works/works.component.html"),
            styles: [__webpack_require__(/*! ./works.component.scss */ "./src/app/feature/works/works.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], WorksComponent);
    return WorksComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\sustar\Downloads\portfolio-master\portfolio-master\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map