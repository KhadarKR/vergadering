webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <h3>My First Angular Component ********************* {{20+30}}\r\n    {{appHeading}}\r\n   <button (click)=\"hanldeButtonClick()\" >Change the Heading</button>\r\n\r\n   <button (click)=\"incrementCount()\" >Increment the count</button>\r\n   {{count}}\r\n   <h1 [innerHTML]=\"count\"></h1>\r\n  <input type=\"text\" value=\"count\">\r\n  <input type=\"number\" [value]=\"count\">\r\n  <input type=\"number\" [(ngModel)]=\"count\" >\r\n  <br/>\r\n</h3>\r\n  <hr> -->\r\n  <app-header></app-header>\r\n  <router-outlet></router-outlet>\r\n<!-- <hr>\r\n<sign-in></sign-in>\r\n<hr>\r\n<sign-up></sign-up> -->\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.appHeading = "Angular Heading";
        this.count = 0;
    }
    AppComponent.prototype.hanldeButtonClick = function () {
        this.appHeading = "Changed value";
    };
    AppComponent.prototype.incrementCount = function () {
        this.count++;
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            // Tag Name for component
            selector: "app-root",
            template: __webpack_require__("./src/app/app.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_sinout_component__ = __webpack_require__("./src/app/login/sinout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_pipe__ = __webpack_require__("./src/app/app.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shopping_shopping_module__ = __webpack_require__("./src/app/shopping/shopping.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_sign_up_component__ = __webpack_require__("./src/app/login/sign-up.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_sign_in_component__ = __webpack_require__("./src/app/login/sign-in.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__routes_component__ = __webpack_require__("./src/app/routes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login_module__ = __webpack_require__("./src/app/login/login.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_primeng_menubar__ = __webpack_require__("./node_modules/primeng/menubar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_primeng_menubar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_primeng_menubar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__header_component__ = __webpack_require__("./src/app/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













// import {} from "@angular/";
// Refer MgModule member from the @angular/core library

// Decorate the class with Decorator NgModule
var appRoutes = [
    { path: "", component: __WEBPACK_IMPORTED_MODULE_5__routes_component__["b" /* HomeComponent */] },
    { path: "SignIn", component: __WEBPACK_IMPORTED_MODULE_4__login_sign_in_component__["a" /* SignInComponent */] },
    { path: "SignOut", component: __WEBPACK_IMPORTED_MODULE_0__login_sinout_component__["a" /* SinoutComponent */] },
    { path: "SignOut", component: __WEBPACK_IMPORTED_MODULE_4__login_sign_in_component__["a" /* SignInComponent */] },
    { path: "SignUp", component: __WEBPACK_IMPORTED_MODULE_3__login_sign_up_component__["a" /* SignUpComponent */] },
    { path: "error", component: __WEBPACK_IMPORTED_MODULE_5__routes_component__["a" /* ErrorComponent */] },
    { path: "**", component: __WEBPACK_IMPORTED_MODULE_5__routes_component__["c" /* NotFoundComponent */] }
];
var AppModule = /** @class */ (function () {
    // Define a Class for the module
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_13__angular_core__["NgModule"])({
            //Add components here i.e. registering the component
            declarations: [__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_9__header_component__["a" /* HeaderComponent */], __WEBPACK_IMPORTED_MODULE_5__routes_component__["b" /* HomeComponent */], __WEBPACK_IMPORTED_MODULE_5__routes_component__["c" /* NotFoundComponent */], __WEBPACK_IMPORTED_MODULE_1__app_pipe__["a" /* ReversePipe */], __WEBPACK_IMPORTED_MODULE_5__routes_component__["a" /* ErrorComponent */]],
            //Startup component (root component details here)
            bootstrap: [__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */]],
            // specify here the dependency modules
            imports: [__WEBPACK_IMPORTED_MODULE_12__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_11__angular_forms__["FormsModule"], __WEBPACK_IMPORTED_MODULE_6__login_login_module__["a" /* LoginModule */], __WEBPACK_IMPORTED_MODULE_7_primeng_menubar__["MenubarModule"], __WEBPACK_IMPORTED_MODULE_8__angular_router__["RouterModule"].forRoot(appRoutes, { useHash: true }), __WEBPACK_IMPORTED_MODULE_2__shopping_shopping_module__["a" /* ShoppingModule */]]
        })
        // Define a Class for the module
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReversePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ReversePipe = /** @class */ (function () {
    function ReversePipe() {
    }
    ReversePipe.prototype.transform = function (input) {
        return input.split("").reverse().join("");
    };
    ReversePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: "reverseText" })
    ], ReversePipe);
    return ReversePipe;
}());



/***/ }),

/***/ "./src/app/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_login_service__ = __webpack_require__("./src/app/login/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(ls) {
        this.ls = ls;
        this.hdrUserName = "Guest";
    }
    HeaderComponent.prototype.showUserName = function () {
        this.hdrUserName = this.ls.getUserName();
        return this.hdrUserName;
    };
    HeaderComponent.prototype.ngOnInit = function () {
        this.menuitems = [
            { label: 'Home', routerLink: ['/'], routerLinkActiveOptions: { exact: true } },
            { label: 'Sign In', routerLink: ['/SignIn'] },
            { label: 'Sign Up', routerLink: ['/SignUp'] },
            { label: 'Shopping List', routerLink: ['/list'] }
        ];
        this.adminMenuItems = [
            { label: 'Home', routerLink: ['/'], routerLinkActiveOptions: { exact: true } },
            { label: 'Sign Out', routerLink: ['/SignOut'] },
            { label: 'Shopping List', routerLink: ['/list'] },
            { label: 'Manage products', routerLink: ['/manage'] }
        ];
    };
    HeaderComponent.prototype.isUserLoggedIn = function () {
        return !this.ls.getIsLoggedin();
    };
    HeaderComponent.prototype.isAdminLoggedIn = function () {
        return this.ls.getIsLoggedin();
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            // Tag Name for component
            selector: "app-header",
            // Out put for the component
            template: "<div *ngIf=\"isUserLoggedIn()\">\n    <p-menubar [model]=\"menuitems\">\n   <div> Welcome {{showUserName()}} </div> \n    </p-menubar>\n    </div>\n    <div *ngIf=\"isAdminLoggedIn()\">\n    <p-menubar [model]=\"adminMenuItems\">\n   <div> Welcome {{showUserName()}} </div> \n    </p-menubar>\n    </div>"
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__login_login_service__["a" /* LoginService */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/login/login.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_service__ = __webpack_require__("./src/app/login/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginGuard = /** @class */ (function () {
    function LoginGuard(ls) {
        this.ls = ls;
    }
    LoginGuard.prototype.canActivate = function () {
        return this.ls.getIsLoggedin();
    };
    LoginGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__login_service__["a" /* LoginService */]])
    ], LoginGuard);
    return LoginGuard;
}());



/***/ }),

/***/ "./src/app/login/login.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_guard__ = __webpack_require__("./src/app/login/login.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_service__ = __webpack_require__("./src/app/login/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sign_up_component__ = __webpack_require__("./src/app/login/sign-up.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sign_in_component__ = __webpack_require__("./src/app/login/sign-in.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__sinout_component__ = __webpack_require__("./src/app/login/sinout.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// Refer NgModule member from the @angular/core library


// Decorate the class with Decorator NgModule
var LoginModule = /** @class */ (function () {
    // Define a Class for the module
    function LoginModule() {
    }
    LoginModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["NgModule"])({
            //Add components here i.e. registering the component
            declarations: [__WEBPACK_IMPORTED_MODULE_4__sign_in_component__["a" /* SignInComponent */], __WEBPACK_IMPORTED_MODULE_3__sign_up_component__["a" /* SignUpComponent */], __WEBPACK_IMPORTED_MODULE_6__sinout_component__["a" /* SinoutComponent */]],
            //Startup component (root component details here)
            exports: [__WEBPACK_IMPORTED_MODULE_4__sign_in_component__["a" /* SignInComponent */], __WEBPACK_IMPORTED_MODULE_3__sign_up_component__["a" /* SignUpComponent */], __WEBPACK_IMPORTED_MODULE_6__sinout_component__["a" /* SinoutComponent */]],
            // specify here the dependency modules
            imports: [__WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["a" /* SharedModule */]],
            providers: [__WEBPACK_IMPORTED_MODULE_1__login_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_0__login_guard__["a" /* LoginGuard */]]
        })
        // Define a Class for the module
    ], LoginModule);
    return LoginModule;
}());



/***/ }),

/***/ "./src/app/login/login.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LoginService = /** @class */ (function () {
    function LoginService() {
        this.userName = "Visitor";
        this.isLoggedin = false;
    }
    LoginService.prototype.setUserName = function (userName) {
        this.userName = userName;
    };
    LoginService.prototype.getUserName = function () {
        return this.userName;
    };
    LoginService.prototype.isvaliduser = function (username, pwd) {
        if (username == "admin") {
            this.isLoggedin = true;
            return true;
        }
        else {
            this.isLoggedin = false;
            return false;
        }
    };
    LoginService.prototype.setIsLoggedin = function (val) {
        this.isLoggedin = val;
    };
    LoginService.prototype.getIsLoggedin = function () {
        return this.isLoggedin;
    };
    LoginService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/login/sign-in.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignInComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_service__ = __webpack_require__("./src/app/login/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignInComponent = /** @class */ (function () {
    function SignInComponent(ls, router) {
        this.ls = ls;
        this.router = router;
    }
    SignInComponent.prototype.handlemyEvent = function (obj) {
        console.log("SIGN IN COMPONENT unmae:", obj.username, "PASSWORD :", obj.password);
        this.ls.setUserName(obj.username);
        if (this.ls.isvaliduser(obj.username, obj.password)) {
            this.router.navigate(["/manage"]);
        }
        else {
            this.router.navigate(["/error"]);
        }
    };
    SignInComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            // Tag Name for component
            selector: "sign-in",
            // Out put for the component
            template: "<my-sign tittle=\"Sign In\" (myEvent)=\"handlemyEvent($event)\"></my-sign>"
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__login_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_0__angular_router__["Router"]])
    ], SignInComponent);
    return SignInComponent;
}());



/***/ }),

/***/ "./src/app/login/sign-up.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignUpComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SignUpComponent = /** @class */ (function () {
    function SignUpComponent() {
        this.myTittle = "Quict Sign Up";
    }
    SignUpComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            // Tag Name for component
            selector: "sign-up",
            // Out put for the component
            template: "<my-sign [tittle]=\"myTittle\"></my-sign>"
        })
    ], SignUpComponent);
    return SignUpComponent;
}());



/***/ }),

/***/ "./src/app/login/sinout.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/sinout.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"well\"> You have Signed Out !!!! \n  Good BYEE\n\n\n</h1>"

/***/ }),

/***/ "./src/app/login/sinout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SinoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_service__ = __webpack_require__("./src/app/login/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SinoutComponent = /** @class */ (function () {
    function SinoutComponent(ls) {
        this.ls = ls;
    }
    SinoutComponent.prototype.ngOnInit = function () {
        this.ls.setIsLoggedin(false);
    };
    SinoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-sinout',
            template: __webpack_require__("./src/app/login/sinout.component.html"),
            styles: [__webpack_require__("./src/app/login/sinout.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__login_service__["a" /* LoginService */]])
    ], SinoutComponent);
    return SinoutComponent;
}());



/***/ }),

/***/ "./src/app/routes.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return HomeComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return NotFoundComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(ds) {
        this.ds = ds;
        this.show = false;
        this.price = 1000.1234;
        this.myDate = new Date;
        this.productName = "sony tv";
        this.videoUrl = "https://www.youtube.com/embed/OGI0fNvr4fo";
        this.colors = ["Blue", "White", "Green", "Purple"];
        this.trustURL = ds.bypassSecurityTrustResourceUrl(this.videoUrl);
        // this.show = true;
    }
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: " <h3> Welcome to Shopping Application\n    <br>Prive Values is {{price|currency:\"CAD\"}}\n    <br> Current Date and  Time is {{myDate|date:\"dd/MM/yyyy:HH-mm-sss\"}}\n    <br>Product name is {{productName | uppercase|reverseText}}\n    </h3>\n    <iframe [src] = \"trustURL\" width=\"75%\" height=\"200\"></iframe>\n    <ul>\n    <li *ngFor=\"let c of colors\">\n    {{c}}\n    </li>\n    </ul>\n    <div><h3 *ngIf=\"show; else showworld\" >Hello ngIF block</h3></div>\n    <ng-template #showworld>Hello World</ng-template>\n    "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DomSanitizer */]])
    ], HomeComponent);
    return HomeComponent;
}());

var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: " <h1 class=\"Well\"> 404. Not Found  </h1>"
        })
    ], NotFoundComponent);
    return NotFoundComponent;
}());

var ErrorComponent = /** @class */ (function () {
    function ErrorComponent() {
    }
    ErrorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: " <h1 class=\"Well\"> Invalid Credentials  </h1>"
        })
    ], ErrorComponent);
    return ErrorComponent;
}());



/***/ }),

/***/ "./src/app/shared/mySign.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MySignComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MySignComponent = /** @class */ (function () {
    function MySignComponent() {
        this.myEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    MySignComponent.prototype.onButtonClick = function (username, password) {
        console.log("User name :" + username);
        console.log("Password :" + password);
        this.myEvent.emit({ username: username, password: password });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], MySignComponent.prototype, "tittle", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], MySignComponent.prototype, "myEvent", void 0);
    MySignComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            // Tag Name for component
            selector: "my-sign",
            // Out put for the component
            template: "{{tittle}}\n <form>\n <input type = \"text\" #frmusername placeholder = \"Enter User Name\">\n <input type = \"text\" #frmpassword placeholder = \"Enter Password\">\n <button type=\"button\" (click) = \"onButtonClick(frmusername.value,frmpassword.value)\">{{tittle}}</button>\n </form>"
        })
    ], MySignComponent);
    return MySignComponent;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mySign_component__ = __webpack_require__("./src/app/shared/mySign.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_0__mySign_component__["a" /* MySignComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_0__mySign_component__["a" /* MySignComponent */]]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/shopping/cart.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CartService = /** @class */ (function () {
    function CartService() {
        this.cartitem = [];
    }
    //Retrieving Cart items
    CartService.prototype.getCartItems = function () {
        return this.cartitem;
    };
    // Add an item to cart
    CartService.prototype.addCartItem = function (newitem) {
        this.cartitem.push(newitem);
    };
    //Remove an Item from the cart
    CartService.prototype.removeCartItem = function (idx) {
        this.cartitem.splice(idx, 1);
    };
    CartService.prototype.editCartItem = function (index) {
        this.cartitem[index].quantity = this.cartitem[index].quantity + 1;
    };
    CartService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], CartService);
    return CartService;
}());



/***/ }),

/***/ "./src/app/shopping/cartItem.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartItem; });
var CartItem = /** @class */ (function () {
    function CartItem(Pid, name, price, quantity) {
        this.Pid = Pid;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
    return CartItem;
}());



/***/ }),

/***/ "./src/app/shopping/cartitems.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shopping/cartitems.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>Cart Items are <span class=\"label label-primary\">{{cart.length}}</span> </h3>\n<p-table [value] = \"cart\">\n  <ng-template pTemplate=\"header\">\n  <tr>\n  <th>Name</th>\n  <th>Price</th>\n  <th>Quantity</th>\n  <th>Amount</th>\n</tr>\n\n</ng-template>\n<ng-template pTemplate=\"body\" let-item>\n    <tr>\n        <td><button class=\"btn btn-danger btn-xs\" (click)=\"delete(rowIndex)\" >X</button>  {{item.name}}</td>\n        <td>{{item.price}}</td>\n        <td> <input type=\"number\" [(ngModel)]=\"item.quantity\" min=\"1\" style=\"width:50px\"></td>\n        <td>{{item.price*item.quantity}}</td>\n    </tr>\n</ng-template>\n\n<ng-template pTemplate=\"footer\" >\n    <tr>\n        <th colspan=\"3\">Total Amount</th>\n        <th>{{calculateTotal()}}</th>\n      </tr>\n\n</ng-template>\n  </p-table> \n"

/***/ }),

/***/ "./src/app/shopping/cartitems.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartitemsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cart_service__ = __webpack_require__("./src/app/shopping/cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CartitemsComponent = /** @class */ (function () {
    function CartitemsComponent(cs) {
        this.cs = cs;
        this.cart = [];
    }
    CartitemsComponent.prototype.ngOnInit = function () {
        this.cart = this.cs.getCartItems();
    };
    CartitemsComponent.prototype.calculateTotal = function () {
        var tot = 0;
        for (var _i = 0, _a = this.cart; _i < _a.length; _i++) {
            var e = _a[_i];
            tot += (e.price * e.quantity);
        }
        return tot;
    };
    CartitemsComponent.prototype.delete = function (index) {
        this.cs.removeCartItem(index);
    };
    CartitemsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-cartitems',
            template: __webpack_require__("./src/app/shopping/cartitems.component.html"),
            styles: [__webpack_require__("./src/app/shopping/cartitems.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__cart_service__["a" /* CartService */]])
    ], CartitemsComponent);
    return CartitemsComponent;
}());



/***/ }),

/***/ "./src/app/shopping/list.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shopping/list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g\">\n<div class=\"ui-g-6\">\n  <app-products></app-products> \n</div>\n<div class=\"ui-g-6 well\">\n  <app-cartitems></app-cartitems>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/shopping/list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ListComponent = /** @class */ (function () {
    function ListComponent() {
    }
    ListComponent.prototype.ngOnInit = function () {
    };
    ListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-list',
            template: __webpack_require__("./src/app/shopping/list.component.html"),
            styles: [__webpack_require__("./src/app/shopping/list.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/shopping/manage.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shopping/manage.component.html":
/***/ (function(module, exports) {

module.exports = "<h3> LIST OF PRODUCTS   Count: <span class=\"label label-primary\">{{products.length}}</span></h3>\n<form class=\"well\">\n    <input  [(ngModel)]=\"frmProduct.id\" placeholder=\"Enter Product Id\" name=\"txtId\" readonly>\n    <input  [(ngModel)]=\"frmProduct.name\" placeholder=\"Enter Product name\" name=\"txtname\" >\n    <input  [(ngModel)]=\"frmProduct.price\" placeholder=\"Enter Product price\" name=\"txtprice\" >\n    <input  [(ngModel)]=\"frmProduct.description\" placeholder=\"Enter Product description\" name=\"txtdescription\" >\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"add()\" >Add</button>\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"Modify()\" >Update</button>\n  </form>\n  \n<p-table [value]=\"products\" >\n  <ng-template pTemplate=\"header\">\n  <tr>\n  <th>Id</th>\n  <th>Name</th>\n  <th>Price</th>\n  <th>Description</th>\n  <th>Action</th>\n\n</tr>\n  </ng-template>\n\n  <ng-template pTemplate=\"body\" let-product>\n      <tr>\n          <td>{{product.id}}</td>\n          <td>{{product.name}}</td>\n          <td>{{product.price}}</td>\n          <td>{{product.description}}</td>\n          <td> <button class=\"btn btn-danger btn-xs\" (click)=\"delete(product.id)\">Delete</button>  \n           <button class=\"btn btn-success btn-xs\" (click)=\"beforeModify(product)\">Edit</button>  \n\n          </td>\n      </tr>\n  </ng-template>\n  </p-table> \n\n  \n  \n"

/***/ }),

/***/ "./src/app/shopping/manage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__product_model__ = __webpack_require__("./src/app/shopping/product.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product_service__ = __webpack_require__("./src/app/shopping/product.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ManageComponent = /** @class */ (function () {
    function ManageComponent(ps) {
        this.ps = ps;
        this.products = [];
        this.frmProduct = new __WEBPACK_IMPORTED_MODULE_0__product_model__["a" /* Product */](null, null, null, null);
    }
    ManageComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.products = this.ps.getProducts();
        this.ps.getProducts().subscribe(function (data) { return _this.products = data; }, function (err) { return console.log("Error", err); });
    };
    ManageComponent.prototype.add = function () {
        var _this = this;
        this.ps.addProduct(this.frmProduct).subscribe(function (data) {
            console.log("Add Sucessful");
            _this.products.push(data);
            _this.frmProduct = new __WEBPACK_IMPORTED_MODULE_0__product_model__["a" /* Product */](null, null, null, null);
        }, function (err) {
            console.log("Add Error", err);
        });
    };
    ManageComponent.prototype.delete = function (id) {
        var _this = this;
        this.ps.deleteProduct(id).subscribe(function (data) {
            console.log("Deleted successfully");
            var idx = _this.products.findIndex(function (e) { return e.id == id; });
            _this.products.splice(idx, 1);
        }, function (err) {
            console.log("Delete Error", err);
        });
    };
    ManageComponent.prototype.beforeModify = function (modifyproduct) {
        // this.frmProduct = modifyproduct;
        Object.assign(this.frmProduct, modifyproduct);
    };
    ManageComponent.prototype.Modify = function () {
        var _this = this;
        this.ps.updateProduct(this.frmProduct).subscribe(function (data) {
            console.log("Edit Sucessful");
            var idx = _this.products.findIndex(function (e) { return e.id == _this.frmProduct.id; });
            _this.products[idx] = data;
            _this.frmProduct = new __WEBPACK_IMPORTED_MODULE_0__product_model__["a" /* Product */](null, null, null, null);
        }, function (err) {
            console.log("Edit Error", err);
        });
    };
    ManageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-manage',
            template: __webpack_require__("./src/app/shopping/manage.component.html"),
            styles: [__webpack_require__("./src/app/shopping/manage.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__product_service__["a" /* ProductService */]])
    ], ManageComponent);
    return ManageComponent;
}());



/***/ }),

/***/ "./src/app/shopping/product.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Product; });
var Product = /** @class */ (function () {
    function Product(id, name, price, description) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;
    }
    return Product;
}());



/***/ }),

/***/ "./src/app/shopping/product.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductService = /** @class */ (function () {
    function ProductService(http) {
        this.http = http;
        this.restURL = "http://localhost:3000/wsproducts/";
        // this.productsData = [new Product(1,"Bravia" , 4500 , "SOny Smart Tv") ,new Product(2 , "Galaxy", 15000 ,"Samsung Mobile")];
    }
    ProductService.prototype.getProducts = function () {
        // return this.productsData;
        return this.http.get(this.restURL);
    };
    ProductService.prototype.addProduct = function (newProduct) {
        return this.http.post(this.restURL, newProduct);
    };
    ProductService.prototype.deleteProduct = function (id) {
        return this.http.delete(this.restURL + "/" + id);
    };
    ProductService.prototype.updateProduct = function (product) {
        return this.http.put(this.restURL + "/" + product.id, product);
    };
    ProductService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ProductService);
    return ProductService;
}());



/***/ }),

/***/ "./src/app/shopping/products.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shopping/products.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>LIST OF PRODUCTS</h3>\n<p-table [value]=\"products\" >\n  <ng-template pTemplate=\"header\">\n  <tr>\n  <th>Name</th>\n  <th>Price</th>\n  <th>Action</th>\n</tr>\n  </ng-template>\n\n  <ng-template pTemplate=\"body\" let-product>\n      <tr>\n          <td>{{product.name}}</td>\n          <td>{{product.price}}</td>\n          <button class=\"btn btn-primary\" type=\"submit\" (click) = \"addToCart(product)\"> Add To Cart</button>\n      </tr>\n  </ng-template>\n  </p-table> \n\n"

/***/ }),

/***/ "./src/app/shopping/products.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cartItem_model__ = __webpack_require__("./src/app/shopping/cartItem.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cart_service__ = __webpack_require__("./src/app/shopping/cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product_service__ = __webpack_require__("./src/app/shopping/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductsComponent = /** @class */ (function () {
    function ProductsComponent(ps, cs) {
        this.ps = ps;
        this.cs = cs;
        this.products = [];
    }
    ProductsComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.products = this.ps.getProducts();
        this.ps.getProducts().subscribe(function (data) { return _this.products = data; }, function (err) { return console.log("Error", err); });
    };
    ProductsComponent.prototype.addToCart = function (product) {
        var carts = this.cs.getCartItems();
        var flag = true;
        if (carts.length > 0) {
            for (var index = 0; index < carts.length; index++) {
                var f = carts[index];
                if (product.id == f.Pid) {
                    this.cs.editCartItem(index);
                    flag = false;
                    break;
                }
            }
            if (flag) {
                var item1 = new __WEBPACK_IMPORTED_MODULE_0__cartItem_model__["a" /* CartItem */](product.id, product.name, product.price, 1);
                this.cs.addCartItem(item1);
            }
        }
        else {
            var item2 = new __WEBPACK_IMPORTED_MODULE_0__cartItem_model__["a" /* CartItem */](product.id, product.name, product.price, 1);
            this.cs.addCartItem(item2);
        }
    };
    ProductsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: 'app-products',
            template: __webpack_require__("./src/app/shopping/products.component.html"),
            styles: [__webpack_require__("./src/app/shopping/products.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__product_service__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_1__cart_service__["a" /* CartService */]])
    ], ProductsComponent);
    return ProductsComponent;
}());



/***/ }),

/***/ "./src/app/shopping/shopping.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_login_guard__ = __webpack_require__("./src/app/login/login.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cart_service__ = __webpack_require__("./src/app/shopping/cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__product_service__ = __webpack_require__("./src/app/shopping/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__products_component__ = __webpack_require__("./src/app/shopping/products.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__cartitems_component__ = __webpack_require__("./src/app/shopping/cartitems.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__list_component__ = __webpack_require__("./src/app/shopping/list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__manage_component__ = __webpack_require__("./src/app/shopping/manage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_primeng_table__ = __webpack_require__("./node_modules/primeng/table.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_primeng_table___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_primeng_table__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var ShoppingModule = /** @class */ (function () {
    function ShoppingModule() {
    }
    ShoppingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_6__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormsModule"], __WEBPACK_IMPORTED_MODULE_11_primeng_table__["TableModule"], __WEBPACK_IMPORTED_MODULE_12__angular_common_http__["b" /* HttpClientModule */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["RouterModule"].forChild([
                    { path: "list", component: __WEBPACK_IMPORTED_MODULE_9__list_component__["a" /* ListComponent */] },
                    { path: "manage", component: __WEBPACK_IMPORTED_MODULE_10__manage_component__["a" /* ManageComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__login_login_guard__["a" /* LoginGuard */]] }
                ])
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_7__products_component__["a" /* ProductsComponent */], __WEBPACK_IMPORTED_MODULE_8__cartitems_component__["a" /* CartitemsComponent */], __WEBPACK_IMPORTED_MODULE_9__list_component__["a" /* ListComponent */], __WEBPACK_IMPORTED_MODULE_10__manage_component__["a" /* ManageComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_3__product_service__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_2__cart_service__["a" /* CartService */]]
        })
    ], ShoppingModule);
    return ShoppingModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map