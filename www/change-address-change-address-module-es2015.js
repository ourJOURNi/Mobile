(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["change-address-change-address-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/change-address/change-address.page.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/change-address/change-address.page.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Change Address</ion-title>\n    <ion-button (click)=\"cancel()\" id=\"cancel-button\" slot=\"end\">\n        cancel\n    </ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid fixed class=\"ion-text-center\">\n    <ion-row>\n      <ion-col size=\"11\" offset=\"0.5\">\n        <h6 class=\"text-header\">\n            {{addressOne}}, {{addressTwo}},\n            {{city}}, {{state}}, {{zip}}\n        </h6>\n      </ion-col>\n      <ion-col size=\"11\" offset=\"0.5\">\n        <h6 style=\"\">Please enter your new Address</h6>\n          <form [formGroup]=\"changeAddress\" (ngSubmit)=\"confirmChangeAddress(\n            this.activeEmail,\n            this.changeAddress.controls.addressOne.value,\n            this.changeAddress.controls.addressTwo.value,\n            this.changeAddress.controls.city.value,\n            this.changeAddress.controls.state.value,\n            this.changeAddress.controls.zip.value,\n            this.changeAddress.controls.password.value\n          )\">\n\n\n          <ion-list class=\"line-input\">\n\n            <ion-item>\n                <ion-input\n                  placeholder=\"Address\"\n                  formControlName=\"addressOne\">\n                </ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-input\n                  placeholder=\"Apt/Unit\"\n                  formControlName=\"addressTwo\">\n                </ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-input\n                  placeholder=\"City\"\n                  formControlName=\"city\">\n                </ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-select\n                formControlName=\"state\" \n                interface=\"action-sheet\"\n                placeholder=\"State\"\n                value=\"\">\n                    <ion-select-option value=\"Alabama\">Alabama</ion-select-option>\n                    <ion-select-option value=\"Alaska\">Alaska</ion-select-option>\n                    <ion-select-option value=\"Arizona\">Arizona</ion-select-option>\n                    <ion-select-option value=\"Arkansas\">Arkansas</ion-select-option>\n                    <ion-select-option value=\"California\">California</ion-select-option>\n                    <ion-select-option value=\"Colorado\">Colorado</ion-select-option>\n                    <ion-select-option value=\"Connecticut\">Connecticut</ion-select-option>\n                    <ion-select-option value=\"Delaware\">Delaware</ion-select-option>\n                    <ion-select-option value=\"Florida\">Florida</ion-select-option>\n                    <ion-select-option value=\"Georgia\">Georgia</ion-select-option>\n                    <ion-select-option value=\"Hawaii\">Hawaii</ion-select-option>\n                    <ion-select-option value=\"Idaho\">Idaho</ion-select-option>\n                    <ion-select-option value=\"Illinois\">Illinois</ion-select-option>\n                    <ion-select-option value=\"Indiana\">Indiana</ion-select-option>\n                    <ion-select-option value=\"Iowa\">Iowa</ion-select-option>\n                    <ion-select-option value=\"Kansas\">Kansas</ion-select-option>\n                    <ion-select-option value=\"Kentucky\">Kentucky</ion-select-option>\n                    <ion-select-option value=\"Louisiana\">Louisiana</ion-select-option>\n                    <ion-select-option value=\"Maine\">Maine</ion-select-option>\n                    <ion-select-option value=\"Maryland\">Maryland</ion-select-option>\n                    <ion-select-option value=\"Massachusetts\">Massachusetts</ion-select-option>\n                    <ion-select-option value=\"Michigan\">Michigan</ion-select-option>\n                    <ion-select-option value=\"Minnesota\">Minnesota</ion-select-option>\n                    <ion-select-option value=\"Mississippi\">Mississippi</ion-select-option>\n                    <ion-select-option value=\"Montana\">Montana</ion-select-option>\n                    <ion-select-option value=\"Nebraska\">Nebraska</ion-select-option>\n                    <ion-select-option value=\"Nevada\">Nevada</ion-select-option>\n                    <ion-select-option value=\"New Hampshire\">New Hampshire</ion-select-option>\n                    <ion-select-option value=\"New Mexico\">New Mexico</ion-select-option>\n                    <ion-select-option value=\"Michigan\">Michigan</ion-select-option>\n                    <ion-select-option value=\"Minnesota\">Minnesota</ion-select-option>\n                    <ion-select-option value=\"Mississippi\">Mississippi</ion-select-option>\n                    <ion-select-option value=\"Montana\">Montana</ion-select-option>\n                    <ion-select-option value=\"Nebraska\">Nebraska</ion-select-option>\n                    <ion-select-option value=\"Nevada\">Nevada</ion-select-option>\n                    <ion-select-option value=\"New Hampshire\">New Hampshire</ion-select-option>\n                    <ion-select-option value=\"New Jersey\">New Mexico</ion-select-option>\n                    <ion-select-option value=\"New York\">New York</ion-select-option>\n                    <ion-select-option value=\"North Caroloina\">North Caroloina</ion-select-option>\n                    <ion-select-option value=\"North Dakota\">North Dakota</ion-select-option>\n                    <ion-select-option value=\"Ohio\">Ohio</ion-select-option>\n                    <ion-select-option value=\"Oklahoma\">Oklahoma</ion-select-option>\n                    <ion-select-option value=\"Oregon\">Oregon</ion-select-option>\n                    <ion-select-option value=\"Pennsylvania\">Pennsylvania</ion-select-option>\n                    <ion-select-option value=\"Rhode Island\">Rhode Island</ion-select-option>\n                    <ion-select-option value=\"New York\">New York</ion-select-option>\n                    <ion-select-option value=\"North Caroloina\">North Caroloina</ion-select-option>\n                    <ion-select-option value=\"North Dakota\">North Dakota</ion-select-option>\n                    <ion-select-option value=\"Ohio\">Ohio</ion-select-option>\n                    <ion-select-option value=\"Oklahoma\">Oklahoma</ion-select-option>\n                    <ion-select-option value=\"Oregon\">Oregon</ion-select-option>\n                    <ion-select-option value=\"Pennsylvania\">Pennsylvania</ion-select-option>\n                    <ion-select-option value=\"Rhode Island\">Rhode Island</ion-select-option>\n                    <ion-select-option value=\"Rhode Island\">Rhode Island</ion-select-option>\n                    <ion-select-option value=\"New York\">New York</ion-select-option>\n                    <ion-select-option value=\"North Caroloina\">North Caroloina</ion-select-option>\n                    <ion-select-option value=\"North Dakota\">North Dakota</ion-select-option>\n                    <ion-select-option value=\"Ohio\">Ohio</ion-select-option>\n                    <ion-select-option value=\"Oklahoma\">Oklahoma</ion-select-option>\n                    <ion-select-option value=\"Oregon\">Oregon</ion-select-option>\n                    <ion-select-option value=\"Pennsylvania\">Pennsylvania</ion-select-option>\n                    <ion-select-option value=\"Rhode Island\">Rhode Island</ion-select-option>\n                    <ion-select-option value=\"South Carolina\">South Carolina</ion-select-option>\n                    <ion-select-option value=\"South Dakota\">South Dakota</ion-select-option>\n                    <ion-select-option value=\"Tennessee\">Tennessee</ion-select-option>\n                    <ion-select-option value=\"Texas\">Texas</ion-select-option>\n                    <ion-select-option value=\"Utah\">Utah</ion-select-option>\n                    <ion-select-option value=\"Vermont\">Vermont</ion-select-option>\n                    <ion-select-option value=\"Virginia\">Virginia</ion-select-option>\n                    <ion-select-option value=\"Washington\">Washington</ion-select-option>\n                    <ion-select-option value=\"West Virginia\">West Virginia</ion-select-option>\n                    <ion-select-option value=\"Wisconsin\">Wisconsin</ion-select-option>\n                    <ion-select-option value=\"Wyoming\">Wyoming</ion-select-option>\n                  </ion-select>\n            </ion-item>\n            <ion-item>\n                <ion-input\n                  maxLength=\"5\"\n                  placeholder=\"Zip\"\n                  formControlName=\"zip\"\n                  required>\n                </ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-input\n                  required\n                  type=\"password\"\n                  placeholder=\"Password\"\n                  formControlName=\"password\">\n                </ion-input>\n            </ion-item>\n              <ion-button type=\"submit\"class=\"orange-button\">CHANGE ADDRESS</ion-button>\n\n            </ion-list>\n\n          </form>\n        </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/profile/change-address/change-address-routing.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/profile/change-address/change-address-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: ChangeAddressPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeAddressPageRoutingModule", function() { return ChangeAddressPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _change_address_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./change-address.page */ "./src/app/pages/profile/change-address/change-address.page.ts");




const routes = [
    {
        path: '',
        component: _change_address_page__WEBPACK_IMPORTED_MODULE_3__["ChangeAddressPage"]
    },
    {
        path: 'confirm',
        loadChildren: () => __webpack_require__.e(/*! import() | confirm-confirm-module */ "confirm-confirm-module").then(__webpack_require__.bind(null, /*! ./confirm/confirm.module */ "./src/app/pages/profile/change-address/confirm/confirm.module.ts")).then(m => m.ConfirmPageModule)
    }
];
let ChangeAddressPageRoutingModule = class ChangeAddressPageRoutingModule {
};
ChangeAddressPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ChangeAddressPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/profile/change-address/change-address.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/profile/change-address/change-address.module.ts ***!
  \***********************************************************************/
/*! exports provided: ChangeAddressPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeAddressPageModule", function() { return ChangeAddressPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _change_address_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./change-address-routing.module */ "./src/app/pages/profile/change-address/change-address-routing.module.ts");
/* harmony import */ var _change_address_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./change-address.page */ "./src/app/pages/profile/change-address/change-address.page.ts");







let ChangeAddressPageModule = class ChangeAddressPageModule {
};
ChangeAddressPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _change_address_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChangeAddressPageRoutingModule"]
        ],
        declarations: [_change_address_page__WEBPACK_IMPORTED_MODULE_6__["ChangeAddressPage"]]
    })
], ChangeAddressPageModule);



/***/ }),

/***/ "./src/app/pages/profile/change-address/change-address.page.scss":
/*!***********************************************************************!*\
  !*** ./src/app/pages/profile/change-address/change-address.page.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvY2hhbmdlLWFkZHJlc3MvY2hhbmdlLWFkZHJlc3MucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/profile/change-address/change-address.page.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/profile/change-address/change-address.page.ts ***!
  \*********************************************************************/
/*! exports provided: ChangeAddressPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeAddressPage", function() { return ChangeAddressPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_profile_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/profile.service */ "./src/app/services/profile.service.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");






let ChangeAddressPage = class ChangeAddressPage {
    constructor(formBuilder, profile, auth, router) {
        this.formBuilder = formBuilder;
        this.profile = profile;
        this.auth = auth;
        this.router = router;
        this.activeEmail = this.profile.email.getValue();
        this.addressOne = this.profile.addressOne.getValue();
        this.addressTwo = this.profile.addressTwo.getValue();
        this.city = this.profile.city.getValue();
        this.state = this.profile.state.getValue();
        this.zip = this.profile.zip.getValue();
        this.activeEmail = this.auth.user.email;
    }
    ngOnInit() {
        this.changeAddress = this.formBuilder.group({
            addressOne: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            addressTwo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            state: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            zip: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    }
    confirmChangeAddress(email, addressOne, addressTwo, city, state, zip, password) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.profile.changeAddress(email, addressOne, addressTwo, city, state, zip, password);
        });
    }
    cancel() {
        console.log('change email password cancelled');
        this.router.navigate(['/home/profile']);
    }
};
ChangeAddressPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _services_profile_service__WEBPACK_IMPORTED_MODULE_4__["ProfileService"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
ChangeAddressPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-change-address',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./change-address.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/change-address/change-address.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./change-address.page.scss */ "./src/app/pages/profile/change-address/change-address.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
        _services_profile_service__WEBPACK_IMPORTED_MODULE_4__["ProfileService"],
        src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], ChangeAddressPage);



/***/ })

}]);
//# sourceMappingURL=change-address-change-address-module-es2015.js.map