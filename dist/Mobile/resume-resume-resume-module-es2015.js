(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["resume-resume-resume-module"],{

/***/ "8UES":
/*!************************************************************!*\
  !*** ./src/app/pages/profile/resume/resume/resume.page.ts ***!
  \************************************************************/
/*! exports provided: ResumePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumePage", function() { return ResumePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_resume_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./resume.page.html */ "hJb1");
/* harmony import */ var _resume_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resume.page.scss */ "unsb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_profile_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/profile.service */ "Aso2");






let ResumePage = class ResumePage {
    constructor(router, profile) {
        this.router = router;
        this.profile = profile;
        this.activeResume = this.profile.resume.getValue();
    }
    ngOnInit() {
    }
    back() {
        this.router.navigate(['/home/profile']);
    }
    viewResume() {
        console.log('Going to View Resume Page');
        this.router.navigate(['/home/profile/view-resume']);
    }
    updateResume() {
        console.log('Going to Update Resume Page');
        this.router.navigate(['/home/profile/update-resume']);
    }
};
ResumePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _services_profile_service__WEBPACK_IMPORTED_MODULE_5__["ProfileService"] }
];
ResumePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-resume',
        template: _raw_loader_resume_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_resume_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _services_profile_service__WEBPACK_IMPORTED_MODULE_5__["ProfileService"]])
], ResumePage);



/***/ }),

/***/ "J7K2":
/*!**********************************************************************!*\
  !*** ./src/app/pages/profile/resume/resume/resume-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: ResumePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumePageRoutingModule", function() { return ResumePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _resume_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resume.page */ "8UES");




const routes = [
    {
        path: '',
        component: _resume_page__WEBPACK_IMPORTED_MODULE_3__["ResumePage"]
    },
    {
        path: 'confirm',
        loadChildren: () => __webpack_require__.e(/*! import() | confirm-confirm-module */ "confirm-confirm-module").then(__webpack_require__.bind(null, /*! ../confirm/confirm.module */ "X3aN")).then(m => m.ConfirmPageModule)
    }
];
let ResumePageRoutingModule = class ResumePageRoutingModule {
};
ResumePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ResumePageRoutingModule);



/***/ }),

/***/ "hJb1":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/resume/resume/resume.page.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-hide-lg-up\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Resume</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content  class=\"ion-text-center\">\n  <ion-grid>\n    <ion-row class=\"ion-hide-md-down\" style=\"margin: 5% 0% 3% 0%;\">\n      <ion-col offset=\"3\" size=\"2\">\n        <h1>Resume</h1>\n      </ion-col>\n      <ion-col push=\"2.5\" size=\"2\">\n        <ion-button class=\"back-button\"  (click)=\"back()\">\n           Back\n        </ion-button>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"ion-justify-content-center ion-hide-md-down\">\n      <ion-col size=\"10\">\n        <hr style=\"background-color: #00000044;\" />\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col size-xs=\"12\" size-sm=\"10\" size-md=\"8\" size-lg=\"6\">\n        <h6 class=\"text-header\" style=\"font-size: 1.3em; width: unset;\">Here, you can view your resume, or upload another one to your profile.</h6>\n        <ion-button (click)=\"updateResume()\" style=\"width: unset; margin-right: 16px;\" class=\"orange-button\">UPDATE RESUME</ion-button>\n        <ion-button (click)=\"viewResume()\" class=\"orange-button\" style=\"width: unset;\">VIEW RESUME</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "unsb":
/*!**************************************************************!*\
  !*** ./src/app/pages/profile/resume/resume/resume.page.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-title {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZmlsZS9yZXN1bWUvcmVzdW1lL3Jlc3VtZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxTQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wcm9maWxlL3Jlc3VtZS9yZXN1bWUvcmVzdW1lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10aXRsZSB7XG4gICAgbWFyZ2luOiAwO1xufSJdfQ== */");

/***/ }),

/***/ "wgOD":
/*!**************************************************************!*\
  !*** ./src/app/pages/profile/resume/resume/resume.module.ts ***!
  \**************************************************************/
/*! exports provided: ResumePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumePageModule", function() { return ResumePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _resume_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./resume-routing.module */ "J7K2");
/* harmony import */ var _resume_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./resume.page */ "8UES");







let ResumePageModule = class ResumePageModule {
};
ResumePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _resume_routing_module__WEBPACK_IMPORTED_MODULE_5__["ResumePageRoutingModule"]
        ],
        declarations: [_resume_page__WEBPACK_IMPORTED_MODULE_6__["ResumePage"]]
    })
], ResumePageModule);



/***/ })

}]);
//# sourceMappingURL=resume-resume-resume-module-es2015.js.map