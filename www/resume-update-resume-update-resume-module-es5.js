(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["resume-update-resume-update-resume-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/resume/update-resume/update-resume.page.html":
  /*!******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/resume/update-resume/update-resume.page.html ***!
    \******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesProfileResumeUpdateResumeUpdateResumePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>update-resume</ion-title>\n    <ion-button (click)=\"cancel()\" id=\"cancel-button\" slot=\"end\">\n        cancel\n    </ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!-- Need to express to User formats that are acceptable -->\n  <!-- pdf, ect -->\n  <p>Please upload a resume from your phone</p>\n  <ion-item>\n    <ion-label>file</ion-label>\n    <p>resume.pdf</p>\n  </ion-item>\n</ion-content>\n<button (click)=\"updateResume()\" id=\"next-button\">UPLOAD</button>\n";
    /***/
  },

  /***/
  "./src/app/pages/profile/resume/update-resume/update-resume-routing.module.ts":
  /*!************************************************************************************!*\
    !*** ./src/app/pages/profile/resume/update-resume/update-resume-routing.module.ts ***!
    \************************************************************************************/

  /*! exports provided: UpdateResumePageRoutingModule */

  /***/
  function srcAppPagesProfileResumeUpdateResumeUpdateResumeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UpdateResumePageRoutingModule", function () {
      return UpdateResumePageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _update_resume_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./update-resume.page */
    "./src/app/pages/profile/resume/update-resume/update-resume.page.ts");

    const routes = [{
      path: '',
      component: _update_resume_page__WEBPACK_IMPORTED_MODULE_3__["UpdateResumePage"]
    }];
    let UpdateResumePageRoutingModule = class UpdateResumePageRoutingModule {};
    UpdateResumePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], UpdateResumePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/profile/resume/update-resume/update-resume.module.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/pages/profile/resume/update-resume/update-resume.module.ts ***!
    \****************************************************************************/

  /*! exports provided: UpdateResumePageModule */

  /***/
  function srcAppPagesProfileResumeUpdateResumeUpdateResumeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UpdateResumePageModule", function () {
      return UpdateResumePageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _update_resume_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./update-resume-routing.module */
    "./src/app/pages/profile/resume/update-resume/update-resume-routing.module.ts");
    /* harmony import */


    var _update_resume_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./update-resume.page */
    "./src/app/pages/profile/resume/update-resume/update-resume.page.ts");

    let UpdateResumePageModule = class UpdateResumePageModule {};
    UpdateResumePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _update_resume_routing_module__WEBPACK_IMPORTED_MODULE_5__["UpdateResumePageRoutingModule"]],
      declarations: [_update_resume_page__WEBPACK_IMPORTED_MODULE_6__["UpdateResumePage"]]
    })], UpdateResumePageModule);
    /***/
  },

  /***/
  "./src/app/pages/profile/resume/update-resume/update-resume.page.scss":
  /*!****************************************************************************!*\
    !*** ./src/app/pages/profile/resume/update-resume/update-resume.page.scss ***!
    \****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesProfileResumeUpdateResumeUpdateResumePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvcmVzdW1lL3VwZGF0ZS1yZXN1bWUvdXBkYXRlLXJlc3VtZS5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pages/profile/resume/update-resume/update-resume.page.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/pages/profile/resume/update-resume/update-resume.page.ts ***!
    \**************************************************************************/

  /*! exports provided: UpdateResumePage */

  /***/
  function srcAppPagesProfileResumeUpdateResumeUpdateResumePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UpdateResumePage", function () {
      return UpdateResumePage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    let UpdateResumePage = class UpdateResumePage {
      constructor(router) {
        this.router = router;
      }

      ngOnInit() {}

      updateResume() {
        console.log('Going to Update Resume Confirm');
        this.router.navigate(['/home/profile/resume/confirm']);
      }

      cancel() {
        console.log('change email password cancelled');
        this.router.navigate(['/home/profile']);
      }

    };

    UpdateResumePage.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
    }];

    UpdateResumePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-update-resume',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./update-resume.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/resume/update-resume/update-resume.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./update-resume.page.scss */
      "./src/app/pages/profile/resume/update-resume/update-resume.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], UpdateResumePage);
    /***/
  }
}]);
//# sourceMappingURL=resume-update-resume-update-resume-module-es5.js.map