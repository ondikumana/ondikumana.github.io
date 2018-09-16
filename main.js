(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <nz-layout class=\"layout\">\n  <nz-header>\n    <div class=\"logo\"></div>\n    <ul nz-menu [nzTheme]=\"'dark'\" [nzMode]=\"'horizontal'\" style=\"line-height: 64px;\">\n      <li nz-menu-item><i class=\"anticon anticon-mail\"></i> Navigation One</li>\n      <li nz-menu-item><i class=\"anticon anticon-appstore\"></i> Navigation Two</li>\n      <li nz-menu-item>nav 3</li>\n    </ul>\n  </nz-header>\n  <nz-content style=\"padding:0 50px;\">\n    <div style=\"background:#fff; padding: 24px; min-height: 280px;\">\n        <app-projects></app-projects>\n    </div>\n  </nz-content>\n  <nz-footer style=\"text-align: center;\">Ant Design ©2017 Implement By Angular</nz-footer>\n</nz-layout> -->\n\n\n<!-- <nz-layout class=\"layout\">\n  <nz-header>\n    <ul nz-menu [nzMode]=\"'horizontal'\">\n      <li nz-menu-item [nzSelected]=\"true\"> Home</li>\n      <li nz-submenu>\n        <span title>Projects </span>\n        <ul>\n            <li nz-menu-item>EA Society</li>\n            <li nz-menu-item>StudyMe</li>\n        </ul>\n      </li>\n    </ul>\n  </nz-header>\n  <nz-content class=\"parent\">\n    <app-me class=\"child\"></app-me>\n    <app-projects class=\"child\"></app-projects>\n  </nz-content>\n  <nz-footer>Footer</nz-footer>\n</nz-layout> -->\n\n<div class=\"background\">\n    <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* :host {\n    text-align: center;\n  } */\n:host ::ng-deep .ant-layout-header,\n:host ::ng-deep .ant-layout-footer {\n  background: #2F4454;\n  color: #fff; }\n:host ::ng-deep .ant-layout-content {\n  background: #2F4454;\n  color: #fff;\n  -webkit-scroll-snap-type: y mandatory;\n      -ms-scroll-snap-type: y mandatory;\n          scroll-snap-type: y mandatory;\n  overflow-y: scroll;\n  min-height: 900px;\n  /* line-height: 120px; */ }\n.ant-layout-content {\n  text-align: center; }\n.ant-layout-footer {\n  text-align: center; }\n.background {\n  height: 100%;\n  min-height: 100%; }\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'angular-me';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/esm5/antd.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/locales/en */ "./node_modules/@angular/common/locales/en.js");
/* harmony import */ var _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_en__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_me_me_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/me/me.component */ "./src/app/components/me/me.component.ts");
/* harmony import */ var _components_projects_easoc_easoc_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/projects/easoc/easoc.component */ "./src/app/components/projects/easoc/easoc.component.ts");
/* harmony import */ var _components_projects_studyme_studyme_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/projects/studyme/studyme.component */ "./src/app/components/projects/studyme/studyme.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_projects_student_generator_student_generator_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/projects/student-generator/student-generator.component */ "./src/app/components/projects/student-generator/student-generator.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














Object(_angular_common__WEBPACK_IMPORTED_MODULE_6__["registerLocaleData"])(_angular_common_locales_en__WEBPACK_IMPORTED_MODULE_7___default.a);
var appRoutes = [
    { path: '', component: _components_me_me_component__WEBPACK_IMPORTED_MODULE_8__["MeComponent"] },
    { path: 'easoc', component: _components_projects_easoc_easoc_component__WEBPACK_IMPORTED_MODULE_9__["EasocComponent"] },
    { path: 'studyme', component: _components_projects_studyme_studyme_component__WEBPACK_IMPORTED_MODULE_10__["StudymeComponent"] },
    { path: 'student-generator', component: _components_projects_student_generator_student_generator_component__WEBPACK_IMPORTED_MODULE_13__["StudentGeneratorComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _components_me_me_component__WEBPACK_IMPORTED_MODULE_8__["MeComponent"],
                _components_projects_easoc_easoc_component__WEBPACK_IMPORTED_MODULE_9__["EasocComponent"],
                _components_projects_studyme_studyme_component__WEBPACK_IMPORTED_MODULE_10__["StudymeComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_11__["HeaderComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"],
                _components_projects_student_generator_student_generator_component__WEBPACK_IMPORTED_MODULE_13__["StudentGeneratorComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NgZorroAntdModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(appRoutes)
            ],
            providers: [{ provide: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NZ_I18N"], useValue: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["en_US"] }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer {\n    text-align: center\n}"

/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"footer\">\n  Built with Angular\n</div>\n"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/header/header.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "[nz-menu] {\n    background: none;\n    float: right;\n    padding: 20px;\n    color: #fff;\n    margin-right: 200px;\n}\n\n[nz-submenu] {\n    background: none;\n}\n\n[nz-menu-item] {\n    text-align: center;\n}"

/***/ }),

/***/ "./src/app/components/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ul nz-menu [nzMode]=\"'horizontal'\">\n  <li nz-menu-item [nzSelected]=me (click)=\"changeRoute('/')\"> Me </li>\n  <li nz-submenu>\n    <span title>Projects </span>\n    <ul>\n      <li nz-menu-item [nzSelected]=studyme (click)=\"changeRoute('/studyme')\">StudyMe</li>\n      <li nz-menu-item [nzSelected]=easoc (click)=\"changeRoute('/easoc')\">EA Society</li>\n      <li nz-menu-item [nzSelected]=studentGenerator (click)=\"changeRoute('/student-generator')\">Student Generator</li>\n    </ul>\n  </li>\n</ul>"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(router) {
        this.router = router;
        this.me = false;
        this.easoc = false;
        this.studyme = false;
        this.studentGenerator = false;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.changeRoute = function (route) {
        this.router.navigate([route]);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('me'),
        __metadata("design:type", Boolean)
    ], HeaderComponent.prototype, "me", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('easoc'),
        __metadata("design:type", Boolean)
    ], HeaderComponent.prototype, "easoc", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('studyme'),
        __metadata("design:type", Boolean)
    ], HeaderComponent.prototype, "studyme", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('student-generator'),
        __metadata("design:type", Boolean)
    ], HeaderComponent.prototype, "studentGenerator", void 0);
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/components/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/me/me.component.css":
/*!************************************************!*\
  !*** ./src/app/components/me/me.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".profileImg {\n    border-radius: 2%;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n    margin: auto;\n    display: block;\n}\n\n.nameClassificationMajor {\n    line-height: 20px;\n    margin-bottom: 30px;\n}\n\n.name {\n    font-size: 30px;\n    color: #fff;\n    font-weight: bold;\n}\n\n.description {\n    line-height: 10px;\n}\n\n.grid {\n    margin-top: 200px;\n}\n\na { \n    color: inherit; \n  }\n\np {\n    font-size: 16px;\n    \n  }\n\n.details {\n    margin-top: 60px;\n  }\n\n.icon {\n    font-size: 30px;\n    margin-left: 8px;\n    margin-right: 8px;\n  }\n\n.links {\n    float: right;\n  }\n\n.tag {\n    width: 25px;\n    height: 25px;\n  }\n"

/***/ }),

/***/ "./src/app/components/me/me.component.html":
/*!*************************************************!*\
  !*** ./src/app/components/me/me.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nz-layout class=\"layout\">\n  <nz-header>\n    <app-header [me]=\"true\"></app-header>\n  </nz-header>\n  <nz-content>\n\n    <div class=\"grid\" nz-row nzType=\"flex\" nzJustify=\"center\" nzAlign=\"middle\">\n\n      <div nz-col nzXs=\"23\" nzSm=\"23\" nzMd=\"23\" nzLg=\"10\">\n        <img class=\"profileImg\" src=\"src/assets/me/profile.jpg\" width=\"80%\" height=\"80%\" />\n      </div>\n\n      <div nz-col nzXs=\"20\" nzSm=\"20\" nzMd=\"20\" nzLg=\"8\" class=\"details\">\n\n        <div nz-row class=\"nameClassificationMajor\">\n          <h1 class=\"name\">Olivier Ndikumana</h1>\n          <div class=\"major\">Computer Science</div>\n        </div>\n\n        <div nz-row class=\"description\">\n          <p>\n            I am currently a junior at the University of Texas at Arlington with a minor in Mathematics. I was introduced to the world\n            of coding no so long ago, and I find it wonderful how a few lines of code can have a great impact on people’s\n            lives. As I learn the concepts of Computer Science, I ask myself how I can apply those concepts in real life.\n            I worked on a couple projects in which I have applied some of those Computer Science concepts. Those projects\n            have taught me a lot as a developer and they've allowed me to discover that I like backend development a lot\n            more than frontend. They've allowed to me personally say that JavaScript is the best mix of imperative and declarative\n            programming language there is. They've given me a chance to get a glimpse at the world of Software Engineering,\n            and they’ve showed me that teamwork is great when it comes to getting things done.\n          </p>\n        </div>\n\n        <div nz-row class=\"links\">\n          <a href=\"https://github.com/ondikumana\">\n            <i class=\"icon ion-logo-github\"></i>\n          </a>\n          <a href=\"https://www.linkedin.com/in/olivier-ndikumana-956023152/\">\n            <i class=\"icon ion-logo-linkedin\"></i>\n          </a>\n          <a href=\"src/assets/resume/resume.pdf\">\n            <i class=\"icon ion-md-document\"></i>\n          </a>\n\n\n        </div>\n\n      </div>\n\n    </div>\n\n  </nz-content>\n  <nz-footer>\n    <app-footer></app-footer>\n  </nz-footer>\n</nz-layout>"

/***/ }),

/***/ "./src/app/components/me/me.component.ts":
/*!***********************************************!*\
  !*** ./src/app/components/me/me.component.ts ***!
  \***********************************************/
/*! exports provided: MeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeComponent", function() { return MeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MeComponent = /** @class */ (function () {
    function MeComponent() {
    }
    MeComponent.prototype.ngOnInit = function () {
    };
    MeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-me',
            template: __webpack_require__(/*! ./me.component.html */ "./src/app/components/me/me.component.html"),
            styles: [__webpack_require__(/*! ./me.component.css */ "./src/app/components/me/me.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MeComponent);
    return MeComponent;
}());



/***/ }),

/***/ "./src/app/components/projects/easoc/easoc.component.css":
/*!***************************************************************!*\
  !*** ./src/app/components/projects/easoc/easoc.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a { \n    color: inherit; \n  } \n\n  p {\n    font-size: 16px;\n    \n  } \n\n  .projectImage {\n    border-radius: 5%;\n    /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); */\n} \n\n  .modalImage {\n  width: 100%;\n  height: 100%;\n} \n\n  .title {\n  font-size: 30px;\n  color: #fff;\n  font-weight: bold;\n  line-height: 50px;\n} \n\n  .grid {\n    margin-top: 220px;\n    /* text-align: center; */\n} \n\n  .icon {\n  font-size: 25px;\n  margin-left: 5px;\n  margin-right: 5px;\n} \n\n  .tags {\n  float: left;\n} \n\n  .links {\n  float: right;\n} \n\n  .tag {\n  width: 25px;\n  height: 25px;\n}\n"

/***/ }),

/***/ "./src/app/components/projects/easoc/easoc.component.html":
/*!****************************************************************!*\
  !*** ./src/app/components/projects/easoc/easoc.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nz-layout class=\"layout\">\n  <nz-header>\n    <app-header [easoc]=\"true\"></app-header>\n  </nz-header>\n  <nz-content>\n\n    <div nz-row nzType=\"flex\" nzJustify=\"space-around\" nzAlign=\"middle\" class=\"grid\">\n\n      <div nz-col nzXs=\"23\" nzSm=\"23\" nzMd=\"23\" nzLg=\"12\">\n        <!-- <a (click)=\"showModal()\"> -->\n        <img src={{images[currentImageIndex]}} height=\"110%\" width=\"100%\" class=\"projectImage\">\n        <!-- </a> -->\n\n        <nz-modal nzWrapClassName=\"vertical-center-modal\" [(nzVisible)]=\"isModalVisible\">\n          <img src={{images[currentImageIndex]}} class=\"modalImage\">\n        </nz-modal>\n\n      </div>\n\n      <div nz-col nzXs=\"20\" nzSm=\"20\" nzMd=\"20\" nzLg=\"10\">\n        <div>\n          <div nz-row>\n            <h1 class=\"title\">\n              The East African Society at UTA\n            </h1>\n          </div>\n          <div nz-row>\n            <p>\n              After I transferred to the University of Texas at Arlington, I wanted to get more involved on campus by joining student organizations.\n              In every student organization meeting that I attended, I noticed an inconsistency in keeping track of members\n              and events. Whenever I attended an event, as a member, there was always a sheet of paper on which I had to\n              write down my name, email and student ID. That sheet also needed to be processed by one of the executive officers\n              in order to add every attendance to their records. That was a problem, so I thought of a solution. The website\n              that we built now allows for easy event check in for members and even easier record keeping for executive officers.\n              We also added other cool stuff such as the ability for a member to look up other members, and to receive announcements\n              from the executive officers. Other perks for executive officers include the ability to create events and having\n              detailed information about the members. It is, however, specific to one organization.\n            </p>\n          </div>\n          <div>\n            <div class=\"tags\">\n              <img src=\"src/assets/logos/react.svg\" class=\"tag\" />\n              <img src=\"src/assets/logos/firebase.svg\" class=\"tag\" />\n              <img src=\"src/assets/logos/nodejs.svg\" class=\"tag\" />\n              <img src=\"src/assets/logos/js.png\" class=\"tag\" />\n            </div>\n            <div class=\"links\">\n              <a href=\"https://easoc-uta.com\">\n                <i class=\"icon ion-md-globe\"></i>\n              </a>\n            </div>\n          </div>\n        </div>\n\n      </div>\n\n    </div>\n\n  </nz-content>\n  <nz-footer>\n    <app-footer></app-footer>\n  </nz-footer>\n</nz-layout>"

/***/ }),

/***/ "./src/app/components/projects/easoc/easoc.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/projects/easoc/easoc.component.ts ***!
  \**************************************************************/
/*! exports provided: EasocComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EasocComponent", function() { return EasocComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EasocComponent = /** @class */ (function () {
    function EasocComponent() {
        this.images = [
            'src/assets/easoc/1.png',
            'src/assets/easoc/2.png',
            'src/assets/easoc/3.png',
            'src/assets/easoc/4.png',
            'src/assets/easoc/5.png',
            'src/assets/easoc/6.png'
        ];
        this.currentImageIndex = 0;
    }
    EasocComponent.prototype.ngOnInit = function () {
        this.changeImage();
    };
    EasocComponent.prototype.changeImage = function () {
        var _this = this;
        var numberOfImages = this.images.length;
        setTimeout(function () {
            if (!_this.images[_this.currentImageIndex + 1]) {
                _this.currentImageIndex = 0;
            }
            else {
                _this.currentImageIndex++;
            }
            _this.changeImage();
        }, 15000);
    };
    EasocComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-easoc',
            template: __webpack_require__(/*! ./easoc.component.html */ "./src/app/components/projects/easoc/easoc.component.html"),
            styles: [__webpack_require__(/*! ./easoc.component.css */ "./src/app/components/projects/easoc/easoc.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EasocComponent);
    return EasocComponent;
}());



/***/ }),

/***/ "./src/app/components/projects/student-generator/student-generator.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/components/projects/student-generator/student-generator.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a { \n    color: inherit; \n  } \n\n  p {\n    font-size: 16px;\n    \n  } \n\n  .projectImage {\n    border-radius: 5%;\n    /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); */\n} \n\n  .modalImage {\n  width: 100%;\n  height: 100%;\n} \n\n  .title {\n  font-size: 30px;\n  color: #fff;\n  font-weight: bold;\n  line-height: 50px;\n} \n\n  .grid {\n    margin-top: 220px;\n    /* text-align: center; */\n} \n\n  .icon {\n  font-size: 25px;\n  margin-left: 5px;\n  margin-right: 5px;\n} \n\n  .tags {\n  float: left;\n} \n\n  .links {\n  float: right;\n} \n\n  .tag {\n  width: 25px;\n  height: 25px;\n}\n"

/***/ }),

/***/ "./src/app/components/projects/student-generator/student-generator.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/components/projects/student-generator/student-generator.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nz-layout class=\"layout\">\n  <nz-header>\n    <app-header [student-generator]=\"true\"></app-header>\n  </nz-header>\n  <nz-content>\n\n    <div nz-row nzType=\"flex\" nzJustify=\"space-around\" nzAlign=\"middle\" class=\"grid\">\n\n      <div nz-col nzXs=\"23\" nzSm=\"23\" nzMd=\"23\" nzLg=\"12\">\n        <!-- <a (click)=\"showModal()\"> -->\n        <img src={{images[currentImageIndex]}} height=\"110%\" width=\"100%\" class=\"projectImage\">\n        <!-- </a> -->\n\n        <nz-modal nzWrapClassName=\"vertical-center-modal\" [(nzVisible)]=\"isModalVisible\">\n          <img src={{images[currentImageIndex]}} class=\"modalImage\">\n        </nz-modal>\n\n      </div>\n\n      <div nz-col nzXs=\"20\" nzSm=\"20\" nzMd=\"20\" nzLg=\"10\">\n        <div>\n          <div nz-row>\n            <h1 class=\"title\">\n              Random Student Generator\n            </h1>\n          </div>\n          <div nz-row>\n            <p>\n              I teach a class of freshman students majoring in Computer Science & Engineering with the goal to increase the sense of belonging\n              and to show the value in a college education. To achieve those goals, I often have to split the students into\n              groups for activities that engage the students, promote teamwork, and correlates with the lesson that I am\n              teaching that day. To make the process of making groups easier I built this tool that takes in the student\n              roster as an excel sheet and gives the option to split students into groups depending the desired number of\n              groups or the desired number of students in a group. This is a great demonstration to the students that engineers\n              build tools to solve problems.\n            </p>\n          </div>\n          <div>\n            <div class=\"tags\">\n              <img src=\"src/assets/logos/react.svg\" class=\"tag\" />\n              <img src=\"src/assets/logos/js.png\" class=\"tag\" />\n            </div>\n            <div class=\"links\">\n              <a href=\"src/student-generator/index.html\">\n                <i class=\"icon ion-md-globe\"></i>\n              </a>\n              <a href=\"https://github.com/ondikumana/Random-Student-Generator\">\n                <i class=\"icon ion-logo-github\"></i>\n              </a>\n            </div>\n          </div>\n        </div>\n\n      </div>\n\n    </div>\n\n  </nz-content>\n  <nz-footer>\n    <app-footer></app-footer>\n  </nz-footer>\n</nz-layout>"

/***/ }),

/***/ "./src/app/components/projects/student-generator/student-generator.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/components/projects/student-generator/student-generator.component.ts ***!
  \**************************************************************************************/
/*! exports provided: StudentGeneratorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentGeneratorComponent", function() { return StudentGeneratorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StudentGeneratorComponent = /** @class */ (function () {
    function StudentGeneratorComponent() {
        this.images = [
            'src/assets/student-generator/1.png',
            'src/assets/student-generator/2.png',
            'src/assets/student-generator/3.png',
        ];
        this.currentImageIndex = 0;
    }
    StudentGeneratorComponent.prototype.ngOnInit = function () {
        this.changeImage();
    };
    StudentGeneratorComponent.prototype.changeImage = function () {
        var _this = this;
        var numberOfImages = this.images.length;
        setTimeout(function () {
            if (!_this.images[_this.currentImageIndex + 1]) {
                _this.currentImageIndex = 0;
            }
            else {
                _this.currentImageIndex++;
            }
            _this.changeImage();
        }, 15000);
    };
    StudentGeneratorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-student-generator',
            template: __webpack_require__(/*! ./student-generator.component.html */ "./src/app/components/projects/student-generator/student-generator.component.html"),
            styles: [__webpack_require__(/*! ./student-generator.component.css */ "./src/app/components/projects/student-generator/student-generator.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], StudentGeneratorComponent);
    return StudentGeneratorComponent;
}());



/***/ }),

/***/ "./src/app/components/projects/studyme/studyme.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/components/projects/studyme/studyme.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a { \n    color: inherit; \n  } \n\n  p {\n    font-size: 16px;\n    \n  } \n\n  .projectImage {\n    border-radius: 5%;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n    margin: auto;\n    display: block;\n} \n\n  .modalImage {\n  width: 100%;\n  height: 100%;\n} \n\n  .title {\n  font-size: 30px;\n  color: #fff;\n  font-weight: bold;\n  line-height: 50px;\n} \n\n  .grid {\n    margin-top: 220px;\n    /* text-align: center; */\n} \n\n  .icon {\n  font-size: 25px;\n  margin-left: 5px;\n  margin-right: 5px;\n} \n\n  .tags {\n  float: left;\n} \n\n  .links {\n  float: right;\n} \n\n  .tag {\n  width: 25px;\n  height: 25px;\n}"

/***/ }),

/***/ "./src/app/components/projects/studyme/studyme.component.html":
/*!********************************************************************!*\
  !*** ./src/app/components/projects/studyme/studyme.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nz-layout class=\"layout\">\n  <nz-header>\n    <app-header [studyme]=\"true\"></app-header>\n  </nz-header>\n  <nz-content>\n\n    <div nz-row nzType=\"flex\" nzJustify=\"center\" nzAlign=\"middle\" class=\"grid\">\n\n      <div nz-col nzXs=\"22\" nzSm=\"23\" nzMd=\"23\" nzLg=\"8\"> \n        <!-- <a (click)=\"showModal()\"> -->\n        <img src={{images[currentImageIndex]}} height=\"80%\" width=\"80%\" class=\"projectImage\">\n        <!-- </a> -->\n\n        <nz-modal nzWrapClassName=\"vertical-center-modal\" [(nzVisible)]=\"isModalVisible\">\n          <img src={{images[currentImageIndex]}} class=\"modalImage\">\n        </nz-modal>\n\n      </div>\n\n      <div nz-col nzXs=\"19\" nzSm=\"20\" nzMd=\"20\" nzLg=\"11\">\n        <div>\n          <div nz-row>\n            <h1 class=\"title\">\n              StudyMe\n            </h1>\n          </div>\n          <div nz-row>\n            <p>\n              The first programming class I ever took was in the Fall of 2017. I couldn’t believe that all those fancy apps out there were\n              built by people who didn’t need to be extraordinarily smart. Java was the very first programming language I\n              learned, it introduced me to the world of code. I took inspiration from the basics of file processing and the\n              ability to turn lines from text files into arrays of words, which at the time was the most fascinating thing\n              I had ever learned. I then used the opportunity to build an algorithm that took a text file with each line\n              in the format of (X: Y) with X being the word and Y it’s definition and allowed the user to learn the\n              words by selecting the corresponding definition from a multiple choice or by typing in the definition. The\n              more code I wrote, the more I asked myself about things that would help the app grow. What if the user had\n              multiple files? What if they deleted the app and needed to recover the progress that they had made learning\n              words in a file? What if they wanted to share the files with their friend? All these questions followed by\n              hours and research all lead to me adding features to the app. It was time consuming, and I had learned a lot\n              as a programmer, so I stopped asking myself questions. The result of those questions however is this StudyMe\n              app. Yes yes I get 10/10 for app naming creativity. \n            </p>\n          </div>\n          <div>\n            <div class=\"tags\">\n              <img src=\"src/assets/logos/firebase.svg\" class=\"tag\" />\n              <img src=\"src/assets/logos/java.svg\" class=\"tag\" />\n            </div>\n            <div class=\"links\">\n              <a href=\"https://github.com/ondikumana/StudyMe\">\n                <i class=\"icon ion-logo-github\"></i>\n              </a>\n              <a href=\"src/assets/studyme/StudyMe.apk\">\n                <i class=\"icon ion-logo-android\"></i>\n              </a>\n            </div>\n          </div>\n        </div>\n\n      </div>\n\n    </div>\n\n  </nz-content>\n  <nz-footer>\n    <app-footer></app-footer>\n  </nz-footer>\n</nz-layout>"

/***/ }),

/***/ "./src/app/components/projects/studyme/studyme.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/projects/studyme/studyme.component.ts ***!
  \******************************************************************/
/*! exports provided: StudymeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudymeComponent", function() { return StudymeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StudymeComponent = /** @class */ (function () {
    function StudymeComponent() {
        this.images = [
            'src/assets/studyme/Screenshot_20180910-102511.png',
            'src/assets/studyme/Screenshot_20180910-102541.png',
            'src/assets/studyme/Screenshot_20180910-102601.png',
            'src/assets/studyme/Screenshot_20180910-102642.png',
            'src/assets/studyme/Screenshot_20180910-102824.png',
            'src/assets/studyme/Screenshot_20180910-102853.png',
            'src/assets/studyme/Screenshot_20180910-104754.png',
            'src/assets/studyme/Screenshot_20180910-104822.png'
        ];
        this.currentImageIndex = 0;
    }
    StudymeComponent.prototype.ngOnInit = function () {
        this.changeImage();
    };
    StudymeComponent.prototype.changeImage = function () {
        var _this = this;
        var numberOfImages = this.images.length;
        setTimeout(function () {
            if (!_this.images[_this.currentImageIndex + 1]) {
                _this.currentImageIndex = 0;
            }
            else {
                _this.currentImageIndex++;
            }
            _this.changeImage();
        }, 15000);
    };
    StudymeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-studyme',
            template: __webpack_require__(/*! ./studyme.component.html */ "./src/app/components/projects/studyme/studyme.component.html"),
            styles: [__webpack_require__(/*! ./studyme.component.css */ "./src/app/components/projects/studyme/studyme.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], StudymeComponent);
    return StudymeComponent;
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/Backmod/Desktop/WebsiteMe/angular-me/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map