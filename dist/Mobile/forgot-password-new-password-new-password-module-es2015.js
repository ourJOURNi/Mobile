(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["forgot-password-new-password-new-password-module"],{

/***/ "7mxx":
/*!********************************************************************************!*\
  !*** ./src/app/pages/auth/forgot-password/new-password/new-password.page.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("span {\n  font-weight: 900;\n  font-size: 1.2em;\n  color: #005191;\n}\n\n.badPassword {\n  --background: none;\n  opacity: 0;\n  -webkit-animation: password-icons 1s ease-in 0.5s forwards;\n          animation: password-icons 1s ease-in 0.5s forwards;\n}\n\n.badPassword:nth-child(2) {\n  --background: none;\n  opacity: 0;\n  -webkit-animation: password-icons 1s ease-in forwards;\n          animation: password-icons 1s ease-in forwards;\n}\n\n.goodPassword {\n  --background: none;\n  opacity: 0;\n  -webkit-animation: password-icons 1s ease-in 0.5s forwards;\n          animation: password-icons 1s ease-in 0.5s forwards;\n}\n\n.goodPassword:nth-child(2) {\n  --background: none;\n  opacity: 0;\n  -webkit-animation: password-icons 1s ease-in forwards;\n          animation: password-icons 1s ease-in forwards;\n}\n\n@-webkit-keyframes password-icons {\n  0% {\n    transform: translateX(50px);\n  }\n  100% {\n    transform: translateX(0px);\n    opacity: 1;\n  }\n}\n\n@keyframes password-icons {\n  0% {\n    transform: translateX(50px);\n  }\n  100% {\n    transform: translateX(0px);\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYXV0aC9mb3Jnb3QtcGFzc3dvcmQvbmV3LXBhc3N3b3JkL25ldy1wYXNzd29yZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsMERBQUE7VUFBQSxrREFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EscURBQUE7VUFBQSw2Q0FBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsMERBQUE7VUFBQSxrREFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EscURBQUE7VUFBQSw2Q0FBQTtBQUNGOztBQUVBO0VBQ0U7SUFDRSwyQkFBQTtFQUNGO0VBRUE7SUFDRSwwQkFBQTtJQUNBLFVBQUE7RUFBRjtBQUNGOztBQVJBO0VBQ0U7SUFDRSwyQkFBQTtFQUNGO0VBRUE7SUFDRSwwQkFBQTtJQUNBLFVBQUE7RUFBRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYXV0aC9mb3Jnb3QtcGFzc3dvcmQvbmV3LXBhc3N3b3JkL25ldy1wYXNzd29yZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzcGFuIHtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgY29sb3I6ICMwMDUxOTE7XG59XG5cbi5iYWRQYXNzd29yZCB7XG4gIC0tYmFja2dyb3VuZDogbm9uZTtcbiAgb3BhY2l0eTogMDtcbiAgYW5pbWF0aW9uOiBwYXNzd29yZC1pY29ucyAxcyBlYXNlLWluIDAuNXMgZm9yd2FyZHM7XG59XG5cbi5iYWRQYXNzd29yZDpudGgtY2hpbGQoMikge1xuICAtLWJhY2tncm91bmQ6IG5vbmU7XG4gIG9wYWNpdHk6IDA7XG4gIGFuaW1hdGlvbjogcGFzc3dvcmQtaWNvbnMgMXMgZWFzZS1pbiBmb3J3YXJkcztcbn1cblxuLmdvb2RQYXNzd29yZCB7XG4gIC0tYmFja2dyb3VuZDogbm9uZTtcbiAgb3BhY2l0eTogMDtcbiAgYW5pbWF0aW9uOiBwYXNzd29yZC1pY29ucyAxcyBlYXNlLWluIDAuNXMgZm9yd2FyZHM7XG59XG5cbi5nb29kUGFzc3dvcmQ6bnRoLWNoaWxkKDIpIHtcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICBvcGFjaXR5OiAwO1xuICBhbmltYXRpb246IHBhc3N3b3JkLWljb25zIDFzIGVhc2UtaW4gZm9yd2FyZHM7XG59XG5cbkBrZXlmcmFtZXMgcGFzc3dvcmQtaWNvbnMge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwcHgpO1xuICB9XG5cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "I37Q":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/auth/forgot-password/new-password/new-password-routing.module.ts ***!
  \****************************************************************************************/
/*! exports provided: NewPasswordPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewPasswordPageRoutingModule", function() { return NewPasswordPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _new_password_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./new-password.page */ "vZqs");




const routes = [
    // 2nd of 3 forgot password pages
    {
        path: '',
        component: _new_password_page__WEBPACK_IMPORTED_MODULE_3__["NewPasswordPage"]
    },
    // to the last page of forgot password route, "confirm"
    {
        path: 'confirm',
        loadChildren: () => __webpack_require__.e(/*! import() | confirm-confirm-module */ "confirm-confirm-module").then(__webpack_require__.bind(null, /*! ../confirm/confirm.module */ "mDKk")).then(m => m.ConfirmPageModule)
    }
];
let NewPasswordPageRoutingModule = class NewPasswordPageRoutingModule {
};
NewPasswordPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], NewPasswordPageRoutingModule);



/***/ }),

/***/ "PJsJ":
/*!********************************************************************************!*\
  !*** ./src/app/pages/auth/forgot-password/new-password/new-password.module.ts ***!
  \********************************************************************************/
/*! exports provided: NewPasswordPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewPasswordPageModule", function() { return NewPasswordPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _new_password_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./new-password-routing.module */ "I37Q");
/* harmony import */ var _new_password_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./new-password.page */ "vZqs");







let NewPasswordPageModule = class NewPasswordPageModule {
};
NewPasswordPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _new_password_routing_module__WEBPACK_IMPORTED_MODULE_5__["NewPasswordPageRoutingModule"]
        ],
        declarations: [_new_password_page__WEBPACK_IMPORTED_MODULE_6__["NewPasswordPage"]]
    })
], NewPasswordPageModule);



/***/ }),

/***/ "Pj+A":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/forgot-password/new-password/new-password.page.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header style=\"display: none;\">\n</ion-header>\n\n<ion-content>\n    <ion-grid class=\"ion-text-center\" style=\"margin-top: 10%;\">\n      <ion-row>\n        <ion-col size-lg=\"6\" offset-lg=\"3\">\n          <h6 class=\"text-header\">Please enter your new password.</h6>\n          <form [formGroup]=\"newPasswordForm\" (ngSubmit)=\"goToConfirmPage()\" >\n            <ion-list class=\"line-input\">\n\n            <ion-item>\n              <ion-input placeholder=\"Password\" formControlName=\"newPassword\" type=\"password\"></ion-input>\n\n                  <ion-button *ngIf=\"!passwordsMatch\" class=\"badPassword\" item-right>\n                     <ion-icon style=\"color: #FF443B;\" name=\"close\"> </ion-icon>\n                  </ion-button>\n\n                  <ion-button *ngIf=\"passwordsMatch\" class=\"goodPassword\" item-right>\n                      <ion-icon style=\"color: #21df82;\" name=\"checkmark\"> </ion-icon>\n                   </ion-button>\n            </ion-item>\n\n\n            <ion-item>\n              <ion-input placeholder=\"Re-type Password\" formControlName=\"reTypeNewPassword\" type=\"password\"></ion-input>\n\n                  <ion-button *ngIf=\"!passwordsMatch\" class=\"badPassword\" item-right>\n                     <ion-icon style=\"color: #FF443B;\" name=\"close\"> </ion-icon>\n                  </ion-button>\n\n                  <ion-button *ngIf=\"passwordsMatch\" class=\"goodPassword\" item-right>\n                      <ion-icon style=\"color: #21df82;\" name=\"checkmark\"> </ion-icon>\n                   </ion-button>\n            </ion-item>\n\n\n            <ion-button type=\"submit\" class=\"orange-button\" >NEXT</ion-button><br>\n            <ion-button (click)=\"cancel()\" class=\"cancel-button\" slot=\"end\">\n                cancel\n            </ion-button>\n          </ion-list>\n          </form>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-content>\n");

/***/ }),

/***/ "vZqs":
/*!******************************************************************************!*\
  !*** ./src/app/pages/auth/forgot-password/new-password/new-password.page.ts ***!
  \******************************************************************************/
/*! exports provided: NewPasswordPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewPasswordPage", function() { return NewPasswordPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_new_password_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./new-password.page.html */ "Pj+A");
/* harmony import */ var _new_password_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./new-password.page.scss */ "7mxx");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../environments/environment */ "AytR");









let NewPasswordPage = class NewPasswordPage {
    constructor(formBuilder, router, auth, activatedRoute, toast) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.auth = auth;
        this.activatedRoute = activatedRoute;
        this.toast = toast;
        this.BACKEND_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].url;
        this.passwordsMatch = false;
        this.validationMessasges = {
            password: [
                { type: 'password', message: 'Please enter a valid password.' }
            ]
        };
    }
    ngOnInit() {
        this.newPasswordForm = this.formBuilder.group({
            newPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            reTypeNewPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
        this.userEmail = this.activatedRoute.snapshot.paramMap.get('email');
        console.log('Email: ' + this.userEmail);
        this.formOnChanges();
    }
    formOnChanges() {
        console.log(this.newPasswordForm);
        this.newPasswordForm.valueChanges
            .subscribe(data => {
            console.log(data);
            this.newPasswordForm.statusChanges.subscribe(status => {
                console.log(status);
                if (status === 'VALID') {
                    console.log('you did it bruh');
                    this.passwordsMatch = true;
                }
            });
            if (this.newPasswordForm.controls.newPassword.value === this.newPasswordForm.controls.reTypePassword.value &&
                this.newPasswordForm.controls.newPassword.touched) {
                console.log('Passwords Match');
            }
            if (this.newPasswordForm.controls.newPassword.value !== this.newPasswordForm.controls.reTypePassword.value) {
                console.log('Passwords Match');
                this.passwordsMatch = false;
            }
        });
    }
    goToConfirmPage() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const email = this.userEmail;
            let newPassword = this.newPasswordForm.value.newPassword;
            let reTypeNewPassword = this.newPasswordForm.value.reTypeNewPassword;
            if (newPassword !== reTypeNewPassword) {
                this.presentToast();
                return console.log('passwords do not match');
            }
            yield this.auth.forgotPassword(email, newPassword);
            yield console.log('Going to Confirm Password Change Page');
            yield this.router.navigate(['/enter-email/enter-code/:email/new-password/:email/confirm']);
        });
    }
    presentToast() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toast.create({
                message: 'The two passwords you entered do not match. Please try again.',
                duration: 2000
            });
            toast.present();
        });
    }
    cancel() {
        console.log('Forgotten password cancelled');
        this.router.navigate(['']);
    }
};
NewPasswordPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ToastController"] }
];
NewPasswordPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-new-password',
        template: _raw_loader_new_password_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_new_password_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ToastController"]])
], NewPasswordPage);



/***/ })

}]);
//# sourceMappingURL=forgot-password-new-password-new-password-module-es2015.js.map