webpackJsonp([1,4],{

/***/ 117:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 117;


/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(134);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Information; });
var Information = (function () {
    function Information() {
    }
    return Information;
}());

//# sourceMappingURL=Information.js.map

/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ang_services_socket_stomp__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__and_models_Alert__ = __webpack_require__(77);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlertPageComponent = (function () {
    function AlertPageComponent(socketService) {
        var _this = this;
        this.alertList = [];
        this.socketService = socketService;
        this.newAlert = new __WEBPACK_IMPORTED_MODULE_2__and_models_Alert__["a" /* Alert */]();
        socketService.setAlertHandler(function (alerts) {
            _this.alertList = alerts;
        });
    }
    /**
     * Send new alert to server!
     */
    AlertPageComponent.prototype.sendAlert = function () {
        this.socketService.sendAlert(this.newAlert);
        this.newAlert = new __WEBPACK_IMPORTED_MODULE_2__and_models_Alert__["a" /* Alert */]();
    };
    /**
     * On click close on alert box
     * @param index Alert index
     */
    AlertPageComponent.prototype.closeAlert = function (index) {
        this.socketService.removeAlert(index);
    };
    return AlertPageComponent;
}());
AlertPageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'alert-page',
        template: __webpack_require__(196),
        styles: [__webpack_require__(189)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ang_services_socket_stomp__["a" /* SocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ang_services_socket_stomp__["a" /* SocketService */]) === "function" && _a || Object])
], AlertPageComponent);

var _a;
//# sourceMappingURL=alert-page.component.js.map

/***/ }),

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__info_page_info_page_component__ = __webpack_require__(130);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__info_page_info_page_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__alert_page_alert_page_component__ = __webpack_require__(128);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__alert_page_alert_page_component__["a"]; });
/**
 * Created by weddy on 28.03.17.
 */


//# sourceMappingURL=ang-components.js.map

/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ang_services_socket_stomp__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__and_models_Information__ = __webpack_require__(127);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InfoPageComponent = (function () {
    function InfoPageComponent(socketService) {
        var _this = this;
        this.informationArray = [new __WEBPACK_IMPORTED_MODULE_2__and_models_Information__["a" /* Information */]()];
        this.newInformation = new __WEBPACK_IMPORTED_MODULE_2__and_models_Information__["a" /* Information */]();
        this.socketService = socketService;
        socketService.setInformationHandler(function (information) {
            _this.informationArray = information;
        });
    }
    /**
     * Send new information on server.
     */
    InfoPageComponent.prototype.addInformation = function () {
        this.socketService.sendInformation(this.newInformation);
        this.newInformation = new __WEBPACK_IMPORTED_MODULE_2__and_models_Information__["a" /* Information */]();
    };
    return InfoPageComponent;
}());
InfoPageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'info-page',
        template: __webpack_require__(197),
        styles: [__webpack_require__(190)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ang_services_socket_stomp__["a" /* SocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ang_services_socket_stomp__["a" /* SocketService */]) === "function" && _a || Object])
], InfoPageComponent);

var _a;
//# sourceMappingURL=info-page.component.js.map

/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__socket_stomp__ = __webpack_require__(47);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__socket_stomp__["a"]; });
/**
 * Created by weddy on 28.03.17.
 */

//# sourceMappingURL=ang-services.js.map

/***/ }),

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Socket application!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(198),
        styles: [__webpack_require__(191)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ang_components_ang_components__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_stomp_service__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_stomp_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_stomp_service__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ang_services_ang_services__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_router__ = __webpack_require__(125);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__ang_components_ang_components__["a" /* InfoPageComponent */],
            __WEBPACK_IMPORTED_MODULE_5__ang_components_ang_components__["b" /* AlertPageComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* JsonpModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_router__["a" /* RouterModule */].forRoot([
                { path: "alert", component: __WEBPACK_IMPORTED_MODULE_5__ang_components_ang_components__["b" /* AlertPageComponent */] },
                { path: "info", component: __WEBPACK_IMPORTED_MODULE_5__ang_components_ang_components__["a" /* InfoPageComponent */] },
                { path: "", redirectTo: "alert", pathMatch: "full" }
            ])
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_6_ng2_stomp_service__["StompService"], __WEBPACK_IMPORTED_MODULE_7__ang_services_ang_services__["a" /* SocketService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 189:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(31)();
// imports


// module
exports.push([module.i, ".addMenu\n{\n  margin: 10px;\n  padding: 5px;\n  display: inline-block;\n  border-radius: 10px;\n  background-color: #78e4ff;\n}\n\n.addMenu input\n{\n  margin: 5px 0;\n}\n\ntable{\n  text-align: left;\n}\n\n.close{\n  height: 15px;\n  width: 15px;\n  font-size: 15px;\n}\n\n.alert-box{\n  background-color: #fff76c;\n  padding: 10px 5px;\n  margin: 3px;\n}\n\n.green-box{\n  background-color: #79ff65;\n}\n\n.red-box{\n  background-color: #ff5b5b;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 190:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(31)();
// imports


// module
exports.push([module.i, ".addMenu\n{\n  margin: 10px;\n  padding: 5px;\n  display: inline-block;\n  border-radius: 10px;\n  background-color: #78e4ff;\n}\n\n.addMenu input\n{\n  margin: 5px 0;\n}\n\ntable{\n  text-align: left;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 191:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(31)();
// imports


// module
exports.push([module.i, ".main{\n  text-align: center;\n}\n\n.addMenu\n{\n  margin: 10px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 196:
/***/ (function(module, exports) {

module.exports = "<div class=\"addMenu\">\n  <input type=\"text\" [(ngModel)]=\"newAlert.user\" placeholder=\"Name\"/><br>\n  <input type=\"text\" [(ngModel)]=\"newAlert.text\" placeholder=\"Msg\"/><br>\n  <input type=\"number\" [(ngModel)]=\"newAlert.severity\" placeholder=\"Severity\"/><br>\n  <button (click)=\"sendAlert()\">Send</button>\n</div>\n\n<div *ngFor=\"let alerts of alertList; let i = index;\" close=\"closeAlert(index)\" class=\"alert-box\"\n     [class.red-box]=\"alerts.severity == 0\"\n     [class.green-box]=\"alerts.severity == 1\"\n>{{alerts.text}} <div (click)=\"closeAlert(i)\" class=\"close glyphicon glyphicon-remove\"> </div> </div>\n"

/***/ }),

/***/ 197:
/***/ (function(module, exports) {

module.exports = "<div class=\"addMenu\">\n  <input type=\"text\" [(ngModel)]=\"newInformation.key\" placeholder=\"Key\"/><br>\n  <input type=\"text\" [(ngModel)]=\"newInformation.value\" placeholder=\"Value\"/><br>\n  <button (click)=\"addInformation()\">Save</button>\n</div>\n\n<table class=\"table table-striped\">\n  <thead>\n    <tr>\n      <th>Key</th>\n      <th>Value</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let info of informationArray\">\n      <td class=\"col-xs-6\">{{info?.key}}</td>\n      <td class=\"col-xs-6\">{{info?.value}}</td>\n    </tr>\n  </tbody>\n</table>\n"

/***/ }),

/***/ 198:
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n  <h1>\n    {{title}}\n  </h1>\n  <nav>\n    <a routerLinkActive=\"active\" routerLink=\"/alert\" class=\"btn btn-default\">Alert</a>\n    <a routerLinkActive=\"active\" routerLink=\"/info\" class=\"btn btn-default\">Information</a>\n  </nav>\n\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ 263:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(118);


/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_stomp_service__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_stomp_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_stomp_service__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__and_models_Alert__ = __webpack_require__(77);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocketService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SocketService = (function () {
    function SocketService(stomp) {
        var _this = this;
        this.alerts = [];
        this.informations = [];
        /**
         * Stomp configuration.
         * @param {object} config: a configuration object.
         *                 {host:string} websocket endpoint
         *                 {headers?:Object} headers (optional)
         *                 {heartbeatIn?: number} heartbeats out (optional)
         *                 {heartbeatOut?: number} heartbeat in (optional)
         *                 {debug?:boolean} debuging (optional)
         *                 {recTimeout?:number} reconnection time (ms) (optional)
         */
        this.wsConf = {
            host: 'http://localhost:8080/registration_socket',
            debug: true
        };
        /**
         * Call when get response from server!
         * @param data
         */
        this.response = function (data) {
            _this.callHandlers(data);
        };
        var a = new __WEBPACK_IMPORTED_MODULE_2__and_models_Alert__["a" /* Alert */]();
        a.text = "testText";
        a.severity = 10;
        this.alerts.push(a);
        stomp.configure(this.wsConf);
        stomp.startConnect().then(function () {
            _this.connectToChanel();
        });
        this.stomp = stomp;
    }
    /**
     * Connect to main socket chanel
     */
    SocketService.prototype.connectToChanel = function () {
        this.mainChanel = this.stomp.subscribe("/socket/main", this.response);
    };
    ;
    /**
     * Disconnect from main socket chanel
     */
    SocketService.prototype.disconnectFromChanel = function () {
        this.stomp.unsubscribe(this.mainChanel);
    };
    ;
    /**
     * Send new alert to server
     * @param alert
     */
    SocketService.prototype.sendAlert = function (alert) {
        this.stomp.send("/socket/sendAlert", alert);
    };
    /**
     * Send new information to server
     * @param information
     */
    SocketService.prototype.sendInformation = function (information) {
        this.stomp.send("/socket/sendInformation", information);
    };
    /**
     * Call callback function when get alert message.
     * @param callback
     */
    SocketService.prototype.setAlertHandler = function (callback) {
        this.alertHandler = callback;
        this.refreshAlerts();
    };
    /**
     * Call callback function when get information message
     * @param callback
     */
    SocketService.prototype.setInformationHandler = function (callback) {
        this.informationHandler = callback;
        this.refreshInformations();
    };
    SocketService.prototype.callHandlers = function (msg) {
        //If get array - this is first package from server ( load all information list)
        if (msg instanceof Array) {
            this.informations = msg;
            this.refreshInformations();
        }
        else
            this.msgParser(msg);
    };
    SocketService.prototype.msgParser = function (msg) {
        //if key exist - it's information package
        if (msg.key != null) {
            // if information key exist, change it value
            var info = this.informations.find(function (i) { return i.key == msg.key; });
            if (info != null)
                info.value = msg.value;
            else
                this.informations.push(msg);
            this.refreshInformations();
        }
        else {
            this.alerts.push(msg);
            this.refreshAlerts();
        }
    };
    SocketService.prototype.refreshAlerts = function () {
        if (this.alertHandler != null)
            this.alertHandler.call(this.alertHandler, this.alerts);
    };
    SocketService.prototype.refreshInformations = function () {
        if (this.informationHandler != null)
            this.informationHandler.call(this.informationHandler, this.informations);
    };
    /**
     * Remove element from aler array ( by index )
     * @param index Element index.
     */
    SocketService.prototype.removeAlert = function (index) {
        this.alerts.splice(index, 1);
        this.refreshAlerts();
    };
    return SocketService;
}());
SocketService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ng2_stomp_service__["StompService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ng2_stomp_service__["StompService"]) === "function" && _a || Object])
], SocketService);

var _a;
//# sourceMappingURL=stomp.js.map

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Alert; });
var Alert = (function () {
    function Alert() {
    }
    return Alert;
}());

//# sourceMappingURL=Alert.js.map

/***/ })

},[263]);
//# sourceMappingURL=main.bundle.js.map