(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-profile-profile-module"],{

/***/ "723k":
/*!*************************************************!*\
  !*** ./src/app/pages/profile/profile.module.ts ***!
  \*************************************************/
/*! exports provided: ProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile.page */ "uxLX");
/* harmony import */ var _components_custom_component_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/custom-component.module */ "zAgk");
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./profile-routing.module */ "x0XS");









let ProfilePageModule = class ProfilePageModule {
};
ProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _profile_routing_module__WEBPACK_IMPORTED_MODULE_8__["ProfilePageRoutingModule"],
            _components_custom_component_module__WEBPACK_IMPORTED_MODULE_7__["CustomComponentsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"] }])
        ],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]]
    })
], ProfilePageModule);



/***/ }),

/***/ "EGjV":
/*!*************************************************!*\
  !*** ./src/app/pages/profile/profile.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header {\n  display: none;\n}\nion-header ion-buttons ion-button {\n  color: white;\n}\nion-toolbar {\n  --color: #005191;\n}\nion-alert {\n  --background: #e4405f;\n}\n#profile-info {\n  height: auto;\n  margin-top: 20px;\n  text-align: left;\n  padding: 25px;\n}\nh4 {\n  color: #000;\n  font-size: 1.9em;\n  opacity: 0;\n  -webkit-animation: header-slide-right 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 1s forwards;\n          animation: header-slide-right 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 1s forwards;\n}\np {\n  font-size: 1em;\n  opacity: 0;\n  transition: 0.5s;\n  -webkit-animation: text-slide-up 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 1.5s forwards;\n          animation: text-slide-up 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 1.5s forwards;\n}\n.header-half {\n  height: auto;\n  background: #edf3f8;\n  padding: 50px 0 50px 0;\n}\n.header-half .orange-button {\n  opacity: 0;\n  -webkit-animation: buttons-slide-right 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.9s forwards;\n          animation: buttons-slide-right 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.9s forwards;\n}\nspan {\n  color: #005191;\n  font-weight: 600;\n  width: 120px;\n  display: inline-block;\n}\n#profile-picture {\n  height: 100px;\n  width: 100px;\n  border-radius: 100px;\n  margin: 0 auto;\n  display: block;\n  opacity: 0;\n  border: 2px solid #005191;\n  -webkit-animation: pic-slide-right 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.5s forwards;\n          animation: pic-slide-right 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.5s forwards;\n}\n#change-pro-pic-button {\n  width: 40px;\n  height: 40px;\n  background: #faa71b;\n  color: white;\n  padding: 0;\n  font-size: 1.5em;\n  font-weight: 400;\n  border-radius: 100px;\n  display: inline-block;\n  position: relative;\n  top: -20px;\n  left: 25px;\n  opacity: 0;\n  -webkit-animation: pic-slide-right 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.75s forwards;\n          animation: pic-slide-right 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.75s forwards;\n}\n.back-button {\n  opacity: 0;\n  -webkit-animation: buttons-slide-up 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;\n          animation: buttons-slide-up 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;\n}\n#edit-profile-button {\n  --background: #d3d3d3;\n  --color: #333;\n  font-size: 0.6em;\n}\n.logout-button {\n  color: white;\n  --background: #e4405f;\n  --background-hover: #dd3252;\n  height: 45px;\n  width: 120px;\n  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);\n  margin-bottom: 52px auto;\n  -webkit-animation: buttons-slide-right 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 1.3s forwards;\n          animation: buttons-slide-right 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 1.3s forwards;\n}\n@-webkit-keyframes text-slide-up {\n  0% {\n    transform: translateY(20px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0px);\n  }\n}\n@keyframes text-slide-up {\n  0% {\n    transform: translateY(20px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0px);\n  }\n}\n@-webkit-keyframes pic-slide-right {\n  0% {\n    transform: translateX(-20px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0px);\n  }\n}\n@keyframes pic-slide-right {\n  0% {\n    transform: translateX(-20px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0px);\n  }\n}\n@-webkit-keyframes header-slide-right {\n  0% {\n    transform: translateX(-20px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0px);\n  }\n}\n@keyframes header-slide-right {\n  0% {\n    transform: translateX(-20px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0px);\n  }\n}\n@-webkit-keyframes buttons-slide-up {\n  0% {\n    transform: translateY(-20px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0px);\n  }\n}\n@keyframes buttons-slide-up {\n  0% {\n    transform: translateY(-20px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0px);\n  }\n}\n@-webkit-keyframes buttons-slide-right {\n  0% {\n    transform: translateX(-20px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0px);\n  }\n}\n@keyframes buttons-slide-right {\n  0% {\n    transform: translateX(-20px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0px);\n  }\n}\n@media screen and (max-width: 992px) {\n  p {\n    font-size: 1.2em;\n  }\n\n  span {\n    color: #005191;\n    font-weight: 600;\n    width: 90px;\n    display: inline-block;\n    text-align: right;\n    margin-right: 10px;\n  }\n}\n@media screen and (min-width: 768px) {\n  #change-pro-pic-button {\n    position: absolute;\n    top: 75px;\n    left: 188px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZmlsZS9wcm9maWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7QUFDRjtBQUNJO0VBQ0UsWUFBQTtBQUNOO0FBSUE7RUFDRSxnQkFBQTtBQURGO0FBSUE7RUFDRSxxQkFBQTtBQURGO0FBSUE7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUFERjtBQUlBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLDhGQUFBO1VBQUEsc0ZBQUE7QUFERjtBQUlBO0VBQ0UsY0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLDJGQUFBO1VBQUEsbUZBQUE7QUFERjtBQUlBO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUFERjtBQUdFO0VBQ0UsVUFBQTtFQUNBLGlHQUFBO1VBQUEseUZBQUE7QUFESjtBQU1BO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0FBSEY7QUFNQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtFQUNBLDZGQUFBO1VBQUEscUZBQUE7QUFIRjtBQU1BO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLDhGQUFBO1VBQUEsc0ZBQUE7QUFIRjtBQU1BO0VBQ0UsVUFBQTtFQUNBLHlGQUFBO1VBQUEsaUZBQUE7QUFIRjtBQU1BO0VBQ0UscUJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUFIRjtBQU1BO0VBQ0UsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsMkJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLDJDQUFBO0VBQ0Esd0JBQUE7RUFDQSxpR0FBQTtVQUFBLHlGQUFBO0FBSEY7QUFNQTtFQUNFO0lBQ0UsMkJBQUE7RUFIRjtFQUtBO0lBQ0UsVUFBQTtJQUNBLDBCQUFBO0VBSEY7QUFDRjtBQUpBO0VBQ0U7SUFDRSwyQkFBQTtFQUhGO0VBS0E7SUFDRSxVQUFBO0lBQ0EsMEJBQUE7RUFIRjtBQUNGO0FBTUE7RUFDRTtJQUNFLDRCQUFBO0VBSkY7RUFNQTtJQUNFLFVBQUE7SUFDQSwwQkFBQTtFQUpGO0FBQ0Y7QUFIQTtFQUNFO0lBQ0UsNEJBQUE7RUFKRjtFQU1BO0lBQ0UsVUFBQTtJQUNBLDBCQUFBO0VBSkY7QUFDRjtBQU9BO0VBQ0U7SUFDRSw0QkFBQTtFQUxGO0VBT0E7SUFDRSxVQUFBO0lBQ0EsMEJBQUE7RUFMRjtBQUNGO0FBRkE7RUFDRTtJQUNFLDRCQUFBO0VBTEY7RUFPQTtJQUNFLFVBQUE7SUFDQSwwQkFBQTtFQUxGO0FBQ0Y7QUFRQTtFQUNFO0lBQ0UsNEJBQUE7RUFORjtFQVFBO0lBQ0UsVUFBQTtJQUNBLDBCQUFBO0VBTkY7QUFDRjtBQURBO0VBQ0U7SUFDRSw0QkFBQTtFQU5GO0VBUUE7SUFDRSxVQUFBO0lBQ0EsMEJBQUE7RUFORjtBQUNGO0FBU0E7RUFDRTtJQUNFLDRCQUFBO0VBUEY7RUFTQTtJQUNFLFVBQUE7SUFDQSwwQkFBQTtFQVBGO0FBQ0Y7QUFBQTtFQUNFO0lBQ0UsNEJBQUE7RUFQRjtFQVNBO0lBQ0UsVUFBQTtJQUNBLDBCQUFBO0VBUEY7QUFDRjtBQVVBO0VBQ0U7SUFDRSxnQkFBQTtFQVJGOztFQVVDO0lBQ0MsY0FBQTtJQUNBLGdCQUFBO0lBQ0EsV0FBQTtJQUNBLHFCQUFBO0lBQ0EsaUJBQUE7SUFDQSxrQkFBQTtFQVBGO0FBQ0Y7QUFXQTtFQUNFO0lBQ0Usa0JBQUE7SUFDQSxTQUFBO0lBQ0EsV0FBQTtFQVRGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wcm9maWxlL3Byb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGlvbi1idXR0b25zIHtcbiAgICBpb24tYnV0dG9uIHtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG4gIH1cbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLWNvbG9yOiAjMDA1MTkxO1xufVxuXG5pb24tYWxlcnQge1xuICAtLWJhY2tncm91bmQ6ICNlNDQwNWY7XG59XG5cbiNwcm9maWxlLWluZm8ge1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmc6IDI1cHg7XG59XG5cbmg0IHtcbiAgY29sb3I6ICMwMDA7XG4gIGZvbnQtc2l6ZTogMS45ZW07XG4gIG9wYWNpdHk6IDA7XG4gIGFuaW1hdGlvbjogaGVhZGVyLXNsaWRlLXJpZ2h0IDAuNXMgY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpIDFzIGZvcndhcmRzO1xufVxuXG5wIHtcbiAgZm9udC1zaXplOiAxZW07XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIGFuaW1hdGlvbjogdGV4dC1zbGlkZS11cCAwLjVzIGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KSAxLjVzIGZvcndhcmRzO1xufVxuXG4uaGVhZGVyLWhhbGYge1xuICBoZWlnaHQ6IGF1dG87XG4gIGJhY2tncm91bmQ6ICNlZGYzZjg7XG4gIHBhZGRpbmc6IDUwcHggMCA1MHB4IDA7XG5cbiAgLm9yYW5nZS1idXR0b257XG4gICAgb3BhY2l0eTogMDtcbiAgICBhbmltYXRpb246IGJ1dHRvbnMtc2xpZGUtcmlnaHQgMC41cyBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSkgLjlzIGZvcndhcmRzO1xuICB9XG59XG5cblxuc3BhbiB7XG4gIGNvbG9yOiAjMDA1MTkxO1xuICBmb250LXdlaWdodDogNjAwO1xuICB3aWR0aDogMTIwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuI3Byb2ZpbGUtcGljdHVyZSB7XG4gIGhlaWdodDogMTAwcHg7XG4gIHdpZHRoOiAxMDBweDtcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbiAgb3BhY2l0eTogMDtcbiAgYm9yZGVyOiAycHggc29saWQgIzAwNTE5MTtcbiAgYW5pbWF0aW9uOiBwaWMtc2xpZGUtcmlnaHQgMC41cyBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSkgMC41cyBmb3J3YXJkcztcbn1cblxuI2NoYW5nZS1wcm8tcGljLWJ1dHRvbiB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJhY2tncm91bmQ6ICNmYWE3MWI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMDtcbiAgZm9udC1zaXplOiAxLjVlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC0yMHB4O1xuICBsZWZ0OiAyNXB4O1xuICBvcGFjaXR5OiAwO1xuICBhbmltYXRpb246IHBpYy1zbGlkZS1yaWdodCAwLjVzIGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KSAwLjc1cyBmb3J3YXJkcztcbn1cblxuLmJhY2stYnV0dG9ue1xuICBvcGFjaXR5OiAwO1xuICBhbmltYXRpb246IGJ1dHRvbnMtc2xpZGUtdXAgMC41cyBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSkgZm9yd2FyZHM7XG59XG5cbiNlZGl0LXByb2ZpbGUtYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kOiAjZDNkM2QzO1xuICAtLWNvbG9yOiAjMzMzO1xuICBmb250LXNpemU6IDAuNmVtO1xufVxuXG4ubG9nb3V0LWJ1dHRvbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgLS1iYWNrZ3JvdW5kOiAjZTQ0MDVmO1xuICAtLWJhY2tncm91bmQtaG92ZXI6ICNkZDMyNTI7XG4gIGhlaWdodDogNDVweDtcbiAgd2lkdGg6IDEyMHB4O1xuICBib3gtc2hhZG93OiAxcHggMXB4IDEwcHggcmdiYSgwLDAsMCwwLjEpO1xuICBtYXJnaW4tYm90dG9tOiA1MnB4IGF1dG87XG4gIGFuaW1hdGlvbjogYnV0dG9ucy1zbGlkZS1yaWdodCAwLjVzIGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KSAxLjNzIGZvcndhcmRzO1xufVxuXG5Aa2V5ZnJhbWVzIHRleHQtc2xpZGUtdXAge1xuICAwJXtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjBweCk7XG4gIH1cbiAgMTAwJXtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgcGljLXNsaWRlLXJpZ2h0IHtcbiAgMCV7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yMHB4KTtcbiAgfVxuICAxMDAle1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBoZWFkZXItc2xpZGUtcmlnaHQge1xuICAwJXtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIwcHgpO1xuICB9XG4gIDEwMCV7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGJ1dHRvbnMtc2xpZGUtdXAge1xuICAwJXtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwcHgpO1xuICB9XG4gIDEwMCV7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGJ1dHRvbnMtc2xpZGUtcmlnaHQge1xuICAwJXtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIwcHgpO1xuICB9XG4gIDEwMCV7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuICBwIHtcbiAgICBmb250LXNpemU6IDEuMmVtO1xuICB9XG4gICBzcGFuIHtcbiAgICBjb2xvcjogIzAwNTE5MTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHdpZHRoOiA5MHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIH1cbn1cblxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAjY2hhbmdlLXByby1waWMtYnV0dG9uIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA3NXB4O1xuICAgIGxlZnQ6IDE4OHB4O1xuICB9XG59Il19 */");

/***/ }),

/***/ "VVTS":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/profile.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header style=\"display: none;\">\n</ion-header>\n\n<ion-content>\n\n  <!-- Mobile -->\n  <ion-grid style=\"--ion-grid-padding: 0px\" class=\"ion-text-center ion-hide-md-up\">\n\n    <ion-row class=\"header-half ion-justify-content-center\">\n        <ion-col size=\"12\">\n          <div>\n              <img id=\"profile-picture\" src=\"{{this.userObject.profilePicture}}\" alt=\"User Profile Picture\">\n              <button id=\"change-pro-pic-button\" (click)=\"changeProfilePicture()\">\n                  +\n                </button>\n          </div>\n        </ion-col>\n\n        <ion-col size=\"6\">\n          <ion-button class=\"orange-button\" (click)=\"editPage()\">\n            Edit Profile\n          </ion-button>\n        </ion-col>\n\n        <ion-col size=\"6\">\n          <ion-button class=\"orange-button\" (click)=\"updateResume()\">\n            View Resume\n          </ion-button>\n        </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n      <ion-col id=\"profile-info\" push=\"0.5\" size=\"11\">\n        <p><span>About</span>{{userObject.about}}</p>\n        <p><span>Name:</span> {{userObject.fullName}}</p>\n        <p><span>Email:</span> {{userObject.email}}</p>\n        <p style=\"text-transform: capitalize;\"><span>Gender:</span> {{userObject.gender}}</p>\n        <p><span>School:</span> {{userObject.school}}</p>\n        <p><span>Grade:</span> {{userObject.grade}}</p>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col size=\"6\">\n        <ion-button class=\"logout-button\" (click)=\"confirmLogout()\">\n          Logout\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <!-- Desktop -->\n  <ion-grid class=\"ion-hide-sm-down\">\n\n      <ion-row style=\"margin-top: 5%;\">\n\n        <ion-col size=\"4\">\n          <div>\n              <img id=\"profile-picture\" src=\"{{this.userObject.profilePicture}}\" alt=\"User Profile Picture\">\n              <button id=\"change-pro-pic-button\" (click)=\"changeProfilePicture()\">\n                  +\n              </button>\n          </div>\n        </ion-col>\n\n\n        <ion-col push=\"2\" size=\"6\">\n          <ion-button class=\"blue-button\" style=\"display: inline-block; width: 200px; margin-right: 50px; animation-delay: 2.5s;\" (click)=\"editPage()\">\n            Edit Profile\n          </ion-button>\n          <ion-button class=\"blue-button\" style=\"display: inline-block; width: 200px; animation-delay: 3s;\" (click)=\"updateResume()\">\n            View Resume\n          </ion-button>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col id=\"profile-info\" push=\"1\" size=\"10\">\n\n          <h4>Profile Information: </h4>\n          <br>\n\n          <p><span style=\"margin-bottom: 10px;\">About: </span><br>\n            {{userObject.about}}</p>\n\n          <p><span style=\"margin-top: 30px;\">Name:</span> {{userObject.fullName}}</p>\n          <p><span>Email:</span> {{userObject.email}}</p>\n          <p style=\"text-transform: capitalize;\"><span>Gender:</span> {{userObject.gender}}</p>\n          <p><span>School:</span> {{userObject.school}}</p>\n          <p><span>Grade:</span> {{userObject.grade}}</p>\n        </ion-col>\n\n        <ion-col size=\"11\" offset=\"0.5\">\n          <!-- <ion-button style=\"--background: white; border-radius: 5px; border: 1px solid #d3d3d3; color: #e4405f; margin-bottom: 50px;\" class=\"orange-button\"  (click)=\"confirmLogout()\">\n            Logout\n          </ion-button> -->\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n\n</ion-content>");

/***/ }),

/***/ "uxLX":
/*!***********************************************!*\
  !*** ./src/app/pages/profile/profile.page.ts ***!
  \***********************************************/
/*! exports provided: ProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePage", function() { return ProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./profile.page.html */ "VVTS");
/* harmony import */ var _profile_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile.page.scss */ "EGjV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/auth.service */ "lGQG");
/* harmony import */ var _services_profile_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/profile.service */ "Aso2");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/storage */ "e8h1");









let ProfilePage = class ProfilePage {
    constructor(auth, profile, storage, router, toast, alert, loading) {
        this.auth = auth;
        this.profile = profile;
        this.storage = storage;
        this.router = router;
        this.toast = toast;
        this.alert = alert;
        this.loading = loading;
        this.userObject = {
            fullName: '',
            about: '',
            city: '',
            state: '',
            zip: '',
            gender: '',
            dob: '',
            school: '',
            grade: '',
            profilePicture: '',
            resume: '',
            email: ''
        };
    }
    ngOnDestroy() {
        this.detailsSub.unsubscribe();
        this.profile.fullName.unsubscribe();
        this.profile.about.unsubscribe();
        this.profile.city.unsubscribe();
        this.profile.state.unsubscribe();
        this.profile.zip.unsubscribe();
        this.profile.gender.unsubscribe();
        this.profile.school.unsubscribe();
        this.profile.grade.unsubscribe();
        this.profile.profilePicture.unsubscribe();
        this.profile.email.unsubscribe();
        this.profile.resume.unsubscribe();
    }
    ngOnInit() {
        this.detailsSub = this.profile.getUserDetails()
            .subscribe(res => {
            console.log(res);
            const fullName = res['fullName'];
            const about = res['about'];
            const city = res['city'];
            const state = res['state'];
            const zip = res['zip'];
            const gender = res['gender'];
            const dob = res['dob'];
            const school = res['school'];
            const grade = res['grade'];
            const profilePicture = res['profilePicture'];
            const resume = res['resume'];
            const email = res['email'];
            // Send initial profile values to Profile Service;
            // Have to initial these values from the Profile Component
            this.profile.fullName.next(fullName);
            this.profile.about.next(about);
            this.profile.city.next(city);
            this.profile.state.next(state);
            this.profile.zip.next(zip);
            this.profile.gender.next(gender);
            this.profile.dob.next(dob);
            this.profile.school.next(school);
            this.profile.grade.next(grade);
            this.profile.profilePicture.next(profilePicture);
            this.profile.resume.next(resume);
            this.profile.email.next(email);
            // Subscribe to all the B.Subjects to get live updates of value changes.
            this.profile.fullName.subscribe(data => {
                this.userObject.fullName = data;
            });
            this.profile.about.subscribe(data => {
                this.userObject.about = data;
            });
            this.profile.city.subscribe(data => {
                this.userObject.city = data;
            });
            this.profile.state.subscribe(data => {
                this.userObject.state = data;
            });
            this.profile.zip.subscribe(data => {
                this.userObject.zip = data;
            });
            this.profile.gender.subscribe(data => {
                this.userObject.gender = data;
            });
            this.profile.dob.subscribe(data => {
                this.userObject.dob = data;
            });
            this.profile.school.subscribe(data => {
                this.userObject.school = data;
            });
            this.profile.grade.subscribe(data => {
                this.userObject.grade = data;
            });
            this.profile.profilePicture.subscribe(data => {
                this.userObject.profilePicture = data;
            });
            this.profile.resume.subscribe(data => {
                this.userObject.resume = data;
            });
            this.profile.email.subscribe(data => {
                this.userObject.email = data;
            });
        });
    }
    clearToken() {
        // ONLY FOR TESTING!
        this.storage.remove('access_token');
        const toast = this.toast.create({
            message: 'JWT removed',
            duration: 3000
        });
        toast.then(toast => toast.present());
    }
    editPage() {
        this.router.navigate(['/home/profile/edit-profile-page']);
    }
    changeProfilePicture() {
        console.log('Navigating to Change Profile Page');
        this.router.navigate(['/home/profile/change-profile-picture', this.userObject.profilePicture]);
    }
    updateResume() {
        console.log('Navigating to Change Resume Page');
        this.router.navigate(['/home/profile/view-resume']);
    }
    confirmLogout() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = this.toast.create({
                message: 'User has been logged out',
                duration: 3000
            });
            const loading = yield this.loading.create({
                message: 'Logging out...',
                duration: 1000
            });
            const alert = yield this.alert.create({
                header: 'Logout',
                cssClass: 'alert',
                message: 'Are you sure you want to logout?',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: () => {
                            console.log('Canceling logout');
                            this.profile.fullName.next('');
                            this.profile.about.next('');
                            this.profile.city.next('');
                            this.profile.state.next('');
                            this.profile.zip.next('');
                            this.profile.gender.next('');
                            this.profile.dob.next('');
                            this.profile.school.next('');
                            this.profile.grade.next('');
                            this.profile.profilePicture.next('');
                            this.profile.resume.next('');
                            this.profile.email.next('');
                            this.router.navigate(['/home/profile']);
                        }
                    },
                    {
                        text: 'Logout',
                        handler: () => {
                            console.log('Logging out');
                            this.auth.logout();
                            loading.present();
                            toast.then(t => t.present());
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
};
ProfilePage.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _services_profile_service__WEBPACK_IMPORTED_MODULE_6__["ProfileService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["Storage"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] }
];
ProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-profile',
        template: _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_profile_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
        _services_profile_service__WEBPACK_IMPORTED_MODULE_6__["ProfileService"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["Storage"],
        _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]])
], ProfilePage);



/***/ }),

/***/ "x0XS":
/*!*********************************************************!*\
  !*** ./src/app/pages/profile/profile-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: ProfilePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageRoutingModule", function() { return ProfilePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile.page */ "uxLX");




const routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_3__["ProfilePage"]
    },
    {
        path: 'change-email',
        loadChildren: () => __webpack_require__.e(/*! import() | change-email-change-email-change-email-module */ "change-email-change-email-change-email-module").then(__webpack_require__.bind(null, /*! ./change-email/change-email/change-email.module */ "SmxB")).then(m => m.ChangeEmailPageModule)
    },
    {
        path: 'change-password',
        loadChildren: () => __webpack_require__.e(/*! import() | change-password-change-password-change-password-module */ "change-password-change-password-change-password-module").then(__webpack_require__.bind(null, /*! ./change-password/change-password/change-password.module */ "2uJy")).then(m => m.ChangePasswordPageModule)
    },
    {
        path: 'change-school/:school/:grade',
        loadChildren: () => __webpack_require__.e(/*! import() | change-school-change-school-change-school-module */ "change-school-change-school-change-school-module").then(__webpack_require__.bind(null, /*! ./change-school/change-school/change-school.module */ "UWje")).then(m => m.ChangeSchoolPageModule)
    },
    {
        path: 'change-profile-picture/:profilePicture',
        loadChildren: () => Promise.all(/*! import() | change-profile-picture-change-profile-picture-change-profile-picture-module */[__webpack_require__.e("default~change-profile-picture-change-profile-picture-change-profile-picture-module~modals-image-cro~90e77f83"), __webpack_require__.e("common"), __webpack_require__.e("change-profile-picture-change-profile-picture-change-profile-picture-module")]).then(__webpack_require__.bind(null, /*! ./change-profile-picture/change-profile-picture/change-profile-picture.module */ "aGP+")).then(m => m.ChangeProfilePicturePageModule)
    },
    {
        path: 'resume',
        loadChildren: () => __webpack_require__.e(/*! import() | resume-resume-resume-module */ "resume-resume-resume-module").then(__webpack_require__.bind(null, /*! ./resume/resume/resume.module */ "wgOD")).then(m => m.ResumePageModule)
    },
    {
        path: 'logout',
        loadChildren: () => __webpack_require__.e(/*! import() | logout-logout-logout-module */ "logout-logout-logout-module").then(__webpack_require__.bind(null, /*! ./logout/logout/logout.module */ "GWPF")).then(m => m.LogoutPageModule)
    },
    // Keep Resume pages seperate?
    {
        path: 'view-resume',
        loadChildren: () => __webpack_require__.e(/*! import() | resume-view-resume-view-resume-module */ "common").then(__webpack_require__.bind(null, /*! ./resume/view-resume/view-resume.module */ "bUUK")).then(m => m.ViewResumePageModule)
    },
    {
        path: 'update-resume',
        loadChildren: () => __webpack_require__.e(/*! import() | resume-update-resume-update-resume-module */ "resume-update-resume-update-resume-module").then(__webpack_require__.bind(null, /*! ./resume/update-resume/update-resume.module */ "e0Xu")).then(m => m.UpdateResumePageModule)
    },
    // Combine with profile pictures directory?
    {
        path: 'confirm-photo',
        loadChildren: () => __webpack_require__.e(/*! import() | change-profile-picture-confirm-photo-confirm-photo-module */ "change-profile-picture-confirm-photo-confirm-photo-module").then(__webpack_require__.bind(null, /*! ./change-profile-picture/confirm-photo/confirm-photo.module */ "RA/u")).then(m => m.ConfirmPhotoPageModule)
    },
    {
        path: 'change-about/:about',
        loadChildren: () => __webpack_require__.e(/*! import() | change-about-change-about-module */ "change-about-change-about-module").then(__webpack_require__.bind(null, /*! ./change-about/change-about.module */ "s+QV")).then(m => m.ChangeAboutPageModule)
    },
    {
        path: 'edit-profile-page',
        loadChildren: () => __webpack_require__.e(/*! import() | edit-profile-page-edit-profile-page-module */ "edit-profile-page-edit-profile-page-module").then(__webpack_require__.bind(null, /*! ./edit-profile-page/edit-profile-page.module */ "J2g1")).then(m => m.EditProfilePagePageModule)
    },
    {
        path: 'change-about',
        loadChildren: () => __webpack_require__.e(/*! import() | change-about-change-about-module */ "change-about-change-about-module").then(__webpack_require__.bind(null, /*! ./change-about/change-about.module */ "s+QV")).then(m => m.ChangeAboutPageModule)
    }
];
let ProfilePageRoutingModule = class ProfilePageRoutingModule {
};
ProfilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProfilePageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=pages-profile-profile-module-es2015.js.map