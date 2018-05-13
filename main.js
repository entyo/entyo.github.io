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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/aboutme/aboutme.component.html":
/*!************************************************!*\
  !*** ./src/app/aboutme/aboutme.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"root-container\">\n  <img class=\"icon\" src=\"https://i.imgur.com/zyJqR1o.png\" alt=\"My icon\">\n  <h1>@e_ntyo</h1>\n  <p class=\"description\">メディアプログラミングやWeb開発をやっている大学生。バンドとアニメとアイドルが好き。<br>(トーラスは、声優のTorus遥さんの<a target=\"_blank\" href=\"https://www.amazon.co.jp/dp/B00FRFR3XA?tag=amz-mkt-chr-jp-22&ascsubtag=1ba00-01000-org00-linux-other-nomod-jp000-pcomp-feature-scomp-wm-5&ref=aa_scomp\">ドーナツという曲</a>のメタファーです)</p>\n  <div class=\"links\">\n    <a href=\"https://twitter.com/e_ntyo\" role=\"button\" title=\"Twitter\" target=\"_blank\">\n      <i class=\"fa fa-fw fa-twitter\"></i>\n    </a>\n    <a href=\"https://github.com/entyo\" role=\"button\" title=\"GitHub\" target=\"_blank\">\n      <i class=\"fa fa-fw fa-github\"></i>\n    </a>\n    <a href=\"http://www.amazon.co.jp/registry/wishlist/734KCUBE5PYS\" role=\"button\" title=\"WishList\" target=\"_blank\">\n      <i class=\"fa fa-fw fa-amazon\"></i>\n    </a>\n    <a href=\"https://www.eventernote.com/users/e_ntyo/\" role=\"button\" title=\"Eventer Note\" target=\"_blank\">\n      <i class=\"fa fa-fw fa-file-text-o\"></i>\n    </a>\n    <a href=\"https://medium.com/@e_ntyo\" role=\"button\" title=\"Medium\" target=\"_blank\">\n      <i class=\"fa fa-fw fa-medium\"></i>\n    </a>\n    <a href=\"https://dev.to/e_ntyo\" role=\"button\" title=\"dev.to\" target=\"_blank\">\n      <i class=\"fa fa-fw fa-wrench\"></i>\n    </a>\n    <a href=\"https://slides.com/e_ntyo\" role=\"button\" title=\"slides.com\" target=\"_blank\">\n      <i class=\"fa fa-fw fa-comment\"></i>\n    </a>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/aboutme/aboutme.component.scss":
/*!************************************************!*\
  !*** ./src/app/aboutme/aboutme.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/earlyaccess/roundedmplus1c.css\");\n.root-container {\n  font-family: \"Rounded Mplus 1c\";\n  padding: 0.8em;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto;\n  width: 90%;\n  height: 80%;\n  text-align: center; }\n.root-container .description a {\n    color: #AA0000; }\n.root-container .icon {\n    max-width: 90%; }\n.root-container .links {\n    max-width: 80%;\n    margin-left: auto;\n    margin-right: auto; }\n.root-container .links a {\n      text-decoration: none;\n      cursor: pointer; }\n.root-container .links a i {\n        color: #111111;\n        margin: 0.5em; }\n"

/***/ }),

/***/ "./src/app/aboutme/aboutme.component.ts":
/*!**********************************************!*\
  !*** ./src/app/aboutme/aboutme.component.ts ***!
  \**********************************************/
/*! exports provided: AboutmeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutmeComponent", function() { return AboutmeComponent; });
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

var AboutmeComponent = /** @class */ (function () {
    function AboutmeComponent() {
    }
    AboutmeComponent.prototype.ngOnInit = function () {
    };
    AboutmeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-aboutme',
            template: __webpack_require__(/*! ./aboutme.component.html */ "./src/app/aboutme/aboutme.component.html"),
            styles: [__webpack_require__(/*! ./aboutme.component.scss */ "./src/app/aboutme/aboutme.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutmeComponent);
    return AboutmeComponent;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-background></app-background>\n<app-aboutme></app-aboutme>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-background {\n  z-index: -666; }\n"

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
        this.title = 'app';
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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _background_background_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./background/background.component */ "./src/app/background/background.component.ts");
/* harmony import */ var _aboutme_aboutme_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./aboutme/aboutme.component */ "./src/app/aboutme/aboutme.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _background_background_component__WEBPACK_IMPORTED_MODULE_3__["BackgroundComponent"],
                _aboutme_aboutme_component__WEBPACK_IMPORTED_MODULE_4__["AboutmeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/background/background.component.html":
/*!******************************************************!*\
  !*** ./src/app/background/background.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div #rendererContainer></div>"

/***/ }),

/***/ "./src/app/background/background.component.scss":
/*!******************************************************!*\
  !*** ./src/app/background/background.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "video {\n  display: none; }\n"

/***/ }),

/***/ "./src/app/background/background.component.ts":
/*!****************************************************!*\
  !*** ./src/app/background/background.component.ts ***!
  \****************************************************/
/*! exports provided: BackgroundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackgroundComponent", function() { return BackgroundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var _js_EnableThreeExamples__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/EnableThreeExamples */ "./src/app/background/js/EnableThreeExamples.js");
/* harmony import */ var _js_EnableThreeExamples__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_EnableThreeExamples__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var three_examples_js_postprocessing_EffectComposer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three/examples/js/postprocessing/EffectComposer */ "./node_modules/three/examples/js/postprocessing/EffectComposer.js");
/* harmony import */ var three_examples_js_postprocessing_EffectComposer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(three_examples_js_postprocessing_EffectComposer__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var three_examples_js_postprocessing_ShaderPass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! three/examples/js/postprocessing/ShaderPass */ "./node_modules/three/examples/js/postprocessing/ShaderPass.js");
/* harmony import */ var three_examples_js_postprocessing_ShaderPass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(three_examples_js_postprocessing_ShaderPass__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var three_examples_js_postprocessing_RenderPass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! three/examples/js/postprocessing/RenderPass */ "./node_modules/three/examples/js/postprocessing/RenderPass.js");
/* harmony import */ var three_examples_js_postprocessing_RenderPass__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(three_examples_js_postprocessing_RenderPass__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var three_examples_js_shaders_CopyShader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! three/examples/js/shaders/CopyShader */ "./node_modules/three/examples/js/shaders/CopyShader.js");
/* harmony import */ var three_examples_js_shaders_CopyShader__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(three_examples_js_shaders_CopyShader__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _shader_LuminosityHighPassShader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shader/LuminosityHighPassShader */ "./src/app/background/shader/LuminosityHighPassShader.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var BackgroundComponent = /** @class */ (function () {
    function BackgroundComponent() {
    }
    // autoplay loop crossOrigin="anonymous" webkit-playsinline
    BackgroundComponent.prototype.ngAfterViewInit = function () {
        this.scene = new three__WEBPACK_IMPORTED_MODULE_1__["Scene"]();
        this.renderer = new three__WEBPACK_IMPORTED_MODULE_1__["WebGLRenderer"]();
        this.renderer.setSize(window.outerWidth, window.outerHeight);
        this.renderer.setClearColor(0xEEEEEE, 1.0);
        this.rendererContainer.nativeElement.appendChild(this.renderer.domElement);
        var light1 = new three__WEBPACK_IMPORTED_MODULE_1__["PointLight"](0xFFFFFF, 2, 1000);
        light1.position.set(0, 0, 100);
        light1.castShadow = true;
        this.scene.add(light1);
        var light2 = new three__WEBPACK_IMPORTED_MODULE_1__["PointLight"](0xFFFFFF, 2, 1000);
        light2.position.set(0, 0, -100);
        light2.castShadow = true;
        this.scene.add(light2);
        this.camera = new three__WEBPACK_IMPORTED_MODULE_1__["PerspectiveCamera"](45, window.outerWidth / window.outerHeight, 0.1, 1000);
        this.camera.position.set(0, 0, 30);
        this.camera.lookAt(new three__WEBPACK_IMPORTED_MODULE_1__["Vector3"](0, 0, 0));
        var torusGeometry = new three__WEBPACK_IMPORTED_MODULE_1__["TorusGeometry"](5, 2, 32, 64);
        torusGeometry.rotateX(-Math.PI / 8);
        var torusMaterial = new three__WEBPACK_IMPORTED_MODULE_1__["MeshStandardMaterial"]({ color: 0xDC8538 });
        this.torus = new three__WEBPACK_IMPORTED_MODULE_1__["Mesh"](torusGeometry, torusMaterial);
        this.torus.castShadow = true;
        this.torus.receiveShadow = true;
        this.scene.add(this.torus);
        this.composer = new three__WEBPACK_IMPORTED_MODULE_1__["EffectComposer"](this.renderer);
        this.composer.addPass(new three__WEBPACK_IMPORTED_MODULE_1__["RenderPass"](this.scene, this.camera));
        this.composer.addPass(new three__WEBPACK_IMPORTED_MODULE_1__["ShaderPass"](_shader_LuminosityHighPassShader__WEBPACK_IMPORTED_MODULE_7__["LuminosityHighPassShader"]));
        var copyPass = new three__WEBPACK_IMPORTED_MODULE_1__["ShaderPass"](three__WEBPACK_IMPORTED_MODULE_1__["CopyShader"]);
        copyPass.renderToScreen = true;
        this.composer.addPass(copyPass);
        this.animate();
    };
    BackgroundComponent.prototype.render = function () {
        var timer = 0.03 * Date.now();
        var rad = timer * Math.PI / 180;
        this.camera.position.x = 20 * Math.sin(rad);
        this.camera.position.z = 20 * Math.sin(rad);
        this.camera.lookAt(new three__WEBPACK_IMPORTED_MODULE_1__["Vector3"](0, 0, 0));
        this.composer.render();
    };
    BackgroundComponent.prototype.animate = function () {
        // Do some stuff to object
        requestAnimationFrame(this.animate.bind(this));
        this.render();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('rendererContainer'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], BackgroundComponent.prototype, "rendererContainer", void 0);
    BackgroundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-background',
            template: __webpack_require__(/*! ./background.component.html */ "./src/app/background/background.component.html"),
            styles: [__webpack_require__(/*! ./background.component.scss */ "./src/app/background/background.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BackgroundComponent);
    return BackgroundComponent;
}());



/***/ }),

/***/ "./src/app/background/js/EnableThreeExamples.js":
/*!******************************************************!*\
  !*** ./src/app/background/js/EnableThreeExamples.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

THREE=__webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");

/***/ }),

/***/ "./src/app/background/shader/LuminosityHighPassShader.ts":
/*!***************************************************************!*\
  !*** ./src/app/background/shader/LuminosityHighPassShader.ts ***!
  \***************************************************************/
/*! exports provided: LuminosityHighPassShader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LuminosityHighPassShader", function() { return LuminosityHighPassShader; });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");

// https://github.com/mrdoob/three.js/blob/master/examples/js/shaders/LuminosityHighPassShader.js
var LuminosityHighPassShader = {
    shaderID: "luminosityHighPass",
    uniforms: {
        "tDiffuse": { type: "t", value: null },
        "luminosityThreshold": { type: "f", value: 0.5 },
        "smoothWidth": { type: "f", value: 0.5 },
        "defaultColor": { type: "c", value: new three__WEBPACK_IMPORTED_MODULE_0__["Color"](0x555555) },
        "defaultOpacity": { type: "f", value: 0.5 }
    },
    vertexShader: [
        "varying vec2 vUv;",
        "void main() {",
        "vUv = uv;",
        "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",
        "}"
    ].join("\n"),
    fragmentShader: [
        "uniform sampler2D tDiffuse;",
        "uniform vec3 defaultColor;",
        "uniform float defaultOpacity;",
        "uniform float luminosityThreshold;",
        "uniform float smoothWidth;",
        "varying vec2 vUv;",
        "void main() {",
        "vec4 texel = texture2D( tDiffuse, vUv );",
        "vec3 luma = vec3( 0.299, 0.587, 0.114 );",
        "float v = dot( texel.xyz, luma );",
        "vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );",
        "float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );",
        "gl_FragColor = mix( outputColor, texel, alpha );",
        "}"
    ].join("\n")
};


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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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

module.exports = __webpack_require__(/*! /home/circleci/ghpages-sandbox/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map