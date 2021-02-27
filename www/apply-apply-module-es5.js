(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["apply-apply-module"], {
    /***/
    "1Xhk":
    /*!**********************************************************!*\
      !*** ./src/app/modals/view-resume/view-resume.module.ts ***!
      \**********************************************************/

    /*! exports provided: ViewResumePageModule */

    /***/
    function Xhk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ViewResumePageModule", function () {
        return ViewResumePageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _view_resume_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./view-resume-routing.module */
      "SW0C");
      /* harmony import */


      var _view_resume_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./view-resume.page */
      "eXUY");
      /* harmony import */


      var _upload_resume_modal_upload_resume_modal_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../upload-resume-modal/upload-resume-modal.module */
      "BD02");

      var ViewResumePageModule = function ViewResumePageModule() {
        _classCallCheck(this, ViewResumePageModule);
      };

      ViewResumePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _view_resume_routing_module__WEBPACK_IMPORTED_MODULE_5__["ViewResumePageRoutingModule"], _upload_resume_modal_upload_resume_modal_module__WEBPACK_IMPORTED_MODULE_7__["UploadResumeModalPageModule"]],
        declarations: [_view_resume_page__WEBPACK_IMPORTED_MODULE_6__["ViewResumePage"]]
      })], ViewResumePageModule);
      /***/
    },

    /***/
    "NMX6":
    /*!**********************************************************!*\
      !*** ./src/app/pages/jobs/apply/apply-routing.module.ts ***!
      \**********************************************************/

    /*! exports provided: ApplyPageRoutingModule */

    /***/
    function NMX6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ApplyPageRoutingModule", function () {
        return ApplyPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _apply_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./apply.page */
      "c2PQ");

      var routes = [{
        path: '',
        component: _apply_page__WEBPACK_IMPORTED_MODULE_3__["ApplyPage"]
      }, {
        path: 'apply-confirm/:title/:companyName/:companyEmail',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | apply-confirm-apply-confirm-module */
          "apply-confirm-apply-confirm-module").then(__webpack_require__.bind(null,
          /*! ../apply-confirm/apply-confirm.module */
          "NCAH")).then(function (m) {
            return m.ApplyConfirmPageModule;
          });
        }
      }];

      var ApplyPageRoutingModule = function ApplyPageRoutingModule() {
        _classCallCheck(this, ApplyPageRoutingModule);
      };

      ApplyPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ApplyPageRoutingModule);
      /***/
    },

    /***/
    "SW0C":
    /*!******************************************************************!*\
      !*** ./src/app/modals/view-resume/view-resume-routing.module.ts ***!
      \******************************************************************/

    /*! exports provided: ViewResumePageRoutingModule */

    /***/
    function SW0C(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ViewResumePageRoutingModule", function () {
        return ViewResumePageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _view_resume_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./view-resume.page */
      "eXUY");

      var routes = [{
        path: '',
        component: _view_resume_page__WEBPACK_IMPORTED_MODULE_3__["ViewResumePage"]
      }];

      var ViewResumePageRoutingModule = function ViewResumePageRoutingModule() {
        _classCallCheck(this, ViewResumePageRoutingModule);
      };

      ViewResumePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ViewResumePageRoutingModule);
      /***/
    },

    /***/
    "WFDr":
    /*!**********************************************************!*\
      !*** ./src/app/modals/view-resume/view-resume.page.scss ***!
      \**********************************************************/

    /*! exports provided: default */

    /***/
    function WFDr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "h4 {\n  margin: 30px auto;\n  color: #005191;\n}\n\n.orange-button {\n  position: relative;\n  top: 4px;\n  right: 20px;\n  margin: 30px 0px 100px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3ZpZXctcmVzdW1lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLHdCQUFBO0FBQ0YiLCJmaWxlIjoidmlldy1yZXN1bWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDQge1xuICBtYXJnaW46IDMwcHggYXV0bztcbiAgY29sb3I6ICMwMDUxOTE7XG59XG5cbi5vcmFuZ2UtYnV0dG9uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDRweDtcbiAgcmlnaHQ6IDIwcHg7XG4gIG1hcmdpbjogMzBweCAwcHggMTAwcHggMDtcbn0iXX0= */";
      /***/
    },

    /***/
    "c2PQ":
    /*!************************************************!*\
      !*** ./src/app/pages/jobs/apply/apply.page.ts ***!
      \************************************************/

    /*! exports provided: ApplyPage */

    /***/
    function c2PQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ApplyPage", function () {
        return ApplyPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_apply_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./apply.page.html */
      "sGSZ");
      /* harmony import */


      var _apply_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./apply.page.scss */
      "giS8");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services_jobs_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../services/jobs.service */
      "sgUz");
      /* harmony import */


      var _services_profile_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../services/profile.service */
      "Aso2");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var date_fns__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! date-fns */
      "b/SL");
      /* harmony import */


      var src_app_modals_view_resume_view_resume_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/modals/view-resume/view-resume.page */
      "eXUY");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var ApplyPage = /*#__PURE__*/function () {
        function ApplyPage(router, activatedRoute, jobs, profile, formBuilder, location, modal) {
          _classCallCheck(this, ApplyPage);

          this.router = router;
          this.activatedRoute = activatedRoute;
          this.jobs = jobs;
          this.profile = profile;
          this.formBuilder = formBuilder;
          this.location = location;
          this.modal = modal;
        }

        _createClass(ApplyPage, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.profileSub.unsubscribe(); // this.sendAppSub.unsubscribe();
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            // tslint:disable-next-line: radix
            var title = this.activatedRoute.snapshot.paramMap.get('title');
            var companyName = this.activatedRoute.snapshot.paramMap.get('companyName');
            var companyEmail = this.activatedRoute.snapshot.paramMap.get('companyEmail');
            this.jobTitle = title;
            this.jobCompanyName = companyName;
            this.jobCompanyEmail = companyEmail;
            this.profileSub = this.profile.getUserDetails().subscribe(function (data) {
              _this.user = data;
              _this.age = Object(date_fns__WEBPACK_IMPORTED_MODULE_9__["differenceInYears"])(Date.now(), Object(date_fns__WEBPACK_IMPORTED_MODULE_9__["parseISO"])(data["dob"]));
              console.log('User\'s age: ', _this.age);

              _this.populateForm(_this.user["phone"]);
            });
          }
        }, {
          key: "goBack",
          value: function goBack() {
            this.location.back();
          }
        }, {
          key: "populateForm",
          value: function populateForm(phoneNumber) {
            this.applyPageForm = this.formBuilder.group({
              phoneNumber: [phoneNumber, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].maxLength(10)])],
              reasonTextArea: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].maxLength(2500)])]
            });
          }
        }, {
          key: "uploadResume",
          value: function uploadResume() {
            console.log('Uploading Resume');
          }
        }, {
          key: "viewResumeModal",
          value: function viewResumeModal() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var modal;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.modal.create({
                        component: src_app_modals_view_resume_view_resume_page__WEBPACK_IMPORTED_MODULE_10__["ViewResumePage"],
                        cssClass: 'my-custom-class'
                      });

                    case 2:
                      modal = _context.sent;
                      _context.next = 5;
                      return modal.present();

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "sendConfirmationEmail",
          value: function sendConfirmationEmail() {
            console.log('Sending confirmation email to Users email address');
          }
        }, {
          key: "finishApplication",
          value: function finishApplication() {
            this.reason = this.applyPageForm.value.reasonTextArea;
            this.phoneNumber = this.applyPageForm.value.phoneNumber;
            console.log('Reason: ', this.reason); // tslint:disable-next-line: max-line-length

            this.sendAppSub = this.jobs.sendEmailApplication(this.user, this.age, this.phoneNumber, this.reason, this.jobTitle, this.jobCompanyEmail).subscribe(); // tslint:disable-next-line: max-line-length

            this.router.navigate(['/home/jobs/job-page/:id/:title/:companyName/:companyEmail/:summary/:fullJobDescription/:rateOfPay/apply/:title/:companyEmail/:companyName/apply-confirm/', this.jobTitle, this.jobCompanyName, this.jobCompanyEmail]);
          }
        }]);

        return ApplyPage;
      }();

      ApplyPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: _services_jobs_service__WEBPACK_IMPORTED_MODULE_6__["JobsService"]
        }, {
          type: _services_profile_service__WEBPACK_IMPORTED_MODULE_7__["ProfileService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["ModalController"]
        }];
      };

      ApplyPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-apply',
        template: _raw_loader_apply_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_apply_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _services_jobs_service__WEBPACK_IMPORTED_MODULE_6__["JobsService"], _services_profile_service__WEBPACK_IMPORTED_MODULE_7__["ProfileService"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"], _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["ModalController"]])], ApplyPage);
      /***/
    },

    /***/
    "eXUY":
    /*!********************************************************!*\
      !*** ./src/app/modals/view-resume/view-resume.page.ts ***!
      \********************************************************/

    /*! exports provided: ViewResumePage */

    /***/
    function eXUY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ViewResumePage", function () {
        return ViewResumePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_view_resume_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./view-resume.page.html */
      "sS/t");
      /* harmony import */


      var _view_resume_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./view-resume.page.scss */
      "WFDr");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/profile.service */
      "Aso2");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _upload_resume_modal_upload_resume_modal_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../upload-resume-modal/upload-resume-modal.page */
      "6e3a"); // Modal


      var ViewResumePage = /*#__PURE__*/function () {
        function ViewResumePage(router, _modal, profile, domSanitizer) {
          _classCallCheck(this, ViewResumePage);

          this.router = router;
          this._modal = _modal;
          this.profile = profile;
          this.domSanitizer = domSanitizer;
        }

        _createClass(ViewResumePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.profile.getUserDetails().subscribe(function (data) {
              console.log(data);

              _this2.profile.resume.next(data['resume']);
            });
            this.profile.resume.subscribe(function (data) {
              _this2.resume = data;
            });
          }
        }, {
          key: "sanitizeImageUrl",
          value: function sanitizeImageUrl(imageUrl) {
            return this.domSanitizer.bypassSecurityTrustResourceUrl(imageUrl);
          }
        }, {
          key: "back",
          value: function back() {
            this.router.navigate(['/home/profile']);
          }
        }, {
          key: "uploadResumeModal",
          value: function uploadResumeModal() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var modal;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this._modal.create({
                        component: _upload_resume_modal_upload_resume_modal_page__WEBPACK_IMPORTED_MODULE_8__["UploadResumeModalPage"],
                        cssClass: 'my-custom-class'
                      });

                    case 2:
                      modal = _context2.sent;
                      _context2.next = 5;
                      return modal.present();

                    case 5:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "cancel",
          value: function cancel() {
            this._modal.dismiss();
          }
        }]);

        return ViewResumePage;
      }();

      ViewResumePage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"]
        }, {
          type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_6__["ProfileService"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"]
        }];
      };

      ViewResumePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-view-resume',
        template: _raw_loader_view_resume_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_view_resume_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"], src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_6__["ProfileService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"]])], ViewResumePage);
      /***/
    },

    /***/
    "giS8":
    /*!**************************************************!*\
      !*** ./src/app/pages/jobs/apply/apply.page.scss ***!
      \**************************************************/

    /*! exports provided: default */

    /***/
    function giS8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-title {\n  margin: 0;\n}\n\n.instructions {\n  font-weight: 800;\n  line-height: 1em;\n  background: #fff1d9;\n  width: 400px;\n  color: #faa71b;\n  font-size: 1.3em;\n  padding: 10px 0px 10px 20px;\n  border-radius: 50px;\n}\n\n.info-section {\n  margin-bottom: 60px;\n}\n\n.company-logo {\n  background-image: url('journi-logo.png');\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: center;\n  opacity: 0;\n  -webkit-animation: logo-slide-in 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.5s forwards;\n          animation: logo-slide-in 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.5s forwards;\n}\n\n.job-title {\n  font-size: 2em;\n  font-weight: 900;\n  margin-top: 15px;\n  margin-bottom: 5px;\n  opacity: 0;\n  color: #005191;\n  -webkit-animation: header-slide-up 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.8s forwards;\n          animation: header-slide-up 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.8s forwards;\n}\n\nh2.company-name {\n  margin-top: 0;\n  margin-bottom: 15px;\n  opacity: 0;\n  -webkit-animation: header-slide-up 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 1.1s forwards;\n          animation: header-slide-up 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 1.1s forwards;\n}\n\np {\n  margin-top: 25px;\n  font-size: 1.3em;\n  color: #666;\n}\n\np:nth-child(1) {\n  opacity: 0;\n  -webkit-animation: item-slide-in 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.8s forwards;\n          animation: item-slide-in 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.8s forwards;\n}\n\np:nth-child(2) {\n  opacity: 0;\n  -webkit-animation: item-slide-in 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.8s forwards;\n          animation: item-slide-in 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.8s forwards;\n}\n\np:nth-child(3) {\n  opacity: 0;\n  -webkit-animation: item-slide-in 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.8s forwards;\n          animation: item-slide-in 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.8s forwards;\n}\n\n.custom-file-input {\n  visibility: hidden;\n}\n\n.custom-file-input::before {\n  content: \"Select some files\";\n  display: inline-block;\n  background: linear-gradient(to top, #f9f9f9, #e3e3e3);\n  border: 1px solid #999;\n  border-radius: 3px;\n  padding: 5px 8px;\n  outline: none;\n  white-space: nowrap;\n  -webkit-user-select: none;\n  cursor: pointer;\n  text-shadow: 1px 1px #fff;\n  font-weight: 700;\n  font-size: 10pt;\n}\n\n.custom-file-input:hover::before {\n  border-color: black;\n}\n\n.custom-file-input:active::before {\n  background: -webkit-linear-gradient(to top, #e3e3e3, #f9f9f9);\n}\n\nion-label {\n  margin-top: 25px;\n  font-size: 1.3em;\n  color: #666;\n}\n\nion-item {\n  opacity: 0;\n  -webkit-animation: item-slide-in 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.8s forwards;\n          animation: item-slide-in 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.8s forwards;\n}\n\nion-item:nth-child(1) {\n  -webkit-animation-delay: 0.5s;\n          animation-delay: 0.5s;\n}\n\nion-item:nth-child(2) {\n  -webkit-animation-delay: 0.8s;\n          animation-delay: 0.8s;\n}\n\nion-item:nth-child(3) {\n  -webkit-animation-delay: 1.1s;\n          animation-delay: 1.1s;\n}\n\nion-item:nth-child(4) {\n  -webkit-animation-delay: 1.4s;\n          animation-delay: 1.4s;\n}\n\nion-item:nth-child(5) {\n  -webkit-animation-delay: 1.7s;\n          animation-delay: 1.7s;\n}\n\nion-item:nth-child(6) {\n  -webkit-animation-delay: 2s;\n          animation-delay: 2s;\n}\n\nion-item:nth-child(7) {\n  -webkit-animation-delay: 2.3s;\n          animation-delay: 2.3s;\n}\n\nion-item:nth-child(8) {\n  -webkit-animation-delay: 2.6s;\n          animation-delay: 2.6s;\n}\n\n.orange-button {\n  width: 150px;\n}\n\n.blue-button {\n  display: block;\n}\n\n@-webkit-keyframes logo-slide-in {\n  0% {\n    transform: translateX(-20px);\n  }\n  100% {\n    transform: translateX(0px);\n    opacity: 1;\n  }\n}\n\n@keyframes logo-slide-in {\n  0% {\n    transform: translateX(-20px);\n  }\n  100% {\n    transform: translateX(0px);\n    opacity: 1;\n  }\n}\n\n@-webkit-keyframes header-slide-up {\n  0% {\n    transform: translateY(8px);\n  }\n  100% {\n    transform: translateY(0px);\n    opacity: 1;\n  }\n}\n\n@keyframes header-slide-up {\n  0% {\n    transform: translateY(8px);\n  }\n  100% {\n    transform: translateY(0px);\n    opacity: 1;\n  }\n}\n\n@-webkit-keyframes item-slide-in {\n  0% {\n    transform: translateX(-7px);\n  }\n  100% {\n    transform: translateX(0px);\n    opacity: 1;\n  }\n}\n\n@keyframes item-slide-in {\n  0% {\n    transform: translateX(-7px);\n  }\n  100% {\n    transform: translateX(0px);\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2FwcGx5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFNBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtBQUNGOztBQUdBO0VBQ0Usd0NBQUE7RUFDQSw0QkFBQTtFQUNBLHdCQUFBO0VBQ0EsMkJBQUE7RUFDQSxVQUFBO0VBQ0EsMkZBQUE7VUFBQSxtRkFBQTtBQUFGOztBQUdBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EsNkZBQUE7VUFBQSxxRkFBQTtBQUFGOztBQUdBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLDZGQUFBO1VBQUEscUZBQUE7QUFBRjs7QUFHQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBQUY7O0FBR0E7RUFDRSxVQUFBO0VBQ0EsMkZBQUE7VUFBQSxtRkFBQTtBQUFGOztBQUdBO0VBQ0UsVUFBQTtFQUNBLDJGQUFBO1VBQUEsbUZBQUE7QUFBRjs7QUFHQTtFQUNFLFVBQUE7RUFDQSwyRkFBQTtVQUFBLG1GQUFBO0FBQUY7O0FBR0E7RUFDRSxrQkFBQTtBQUFGOztBQUVBO0VBQ0UsNEJBQUE7RUFDQSxxQkFBQTtFQUNBLHFEQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFDRjs7QUFDQTtFQUNFLG1CQUFBO0FBRUY7O0FBQUE7RUFDRSw2REFBQTtBQUdGOztBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUFHRjs7QUFBQTtFQUNFLFVBQUE7RUFDQSwyRkFBQTtVQUFBLG1GQUFBO0FBR0Y7O0FBQUE7RUFDRSw2QkFBQTtVQUFBLHFCQUFBO0FBR0Y7O0FBREE7RUFDRSw2QkFBQTtVQUFBLHFCQUFBO0FBSUY7O0FBRkE7RUFDRSw2QkFBQTtVQUFBLHFCQUFBO0FBS0Y7O0FBSEE7RUFDRSw2QkFBQTtVQUFBLHFCQUFBO0FBTUY7O0FBSkE7RUFDRSw2QkFBQTtVQUFBLHFCQUFBO0FBT0Y7O0FBTEE7RUFDRSwyQkFBQTtVQUFBLG1CQUFBO0FBUUY7O0FBTkE7RUFDRSw2QkFBQTtVQUFBLHFCQUFBO0FBU0Y7O0FBUEE7RUFDRSw2QkFBQTtVQUFBLHFCQUFBO0FBVUY7O0FBTkE7RUFDRSxZQUFBO0FBU0Y7O0FBTkE7RUFDRSxjQUFBO0FBU0Y7O0FBTEE7RUFDRTtJQUNFLDRCQUFBO0VBUUY7RUFOQTtJQUNFLDBCQUFBO0lBQ0EsVUFBQTtFQVFGO0FBQ0Y7O0FBZkE7RUFDRTtJQUNFLDRCQUFBO0VBUUY7RUFOQTtJQUNFLDBCQUFBO0lBQ0EsVUFBQTtFQVFGO0FBQ0Y7O0FBTEE7RUFDRTtJQUNFLDBCQUFBO0VBT0Y7RUFMQTtJQUNFLDBCQUFBO0lBQ0EsVUFBQTtFQU9GO0FBQ0Y7O0FBZEE7RUFDRTtJQUNFLDBCQUFBO0VBT0Y7RUFMQTtJQUNFLDBCQUFBO0lBQ0EsVUFBQTtFQU9GO0FBQ0Y7O0FBSkE7RUFDRTtJQUNFLDJCQUFBO0VBTUY7RUFKQTtJQUNFLDBCQUFBO0lBQ0EsVUFBQTtFQU1GO0FBQ0Y7O0FBYkE7RUFDRTtJQUNFLDJCQUFBO0VBTUY7RUFKQTtJQUNFLDBCQUFBO0lBQ0EsVUFBQTtFQU1GO0FBQ0YiLCJmaWxlIjoiYXBwbHkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRpdGxlIHtcbiAgbWFyZ2luOiAwO1xufVxuXG4uaW5zdHJ1Y3Rpb25zIHtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgbGluZS1oZWlnaHQ6IDFlbTtcbiAgYmFja2dyb3VuZDogI2ZmZjFkOTtcbiAgd2lkdGg6IDQwMHB4O1xuICBjb2xvcjogI2ZhYTcxYjtcbiAgZm9udC1zaXplOiAxLjNlbTtcbiAgcGFkZGluZzogMTBweCAwcHggMTBweCAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xufVxuXG4uaW5mby1zZWN0aW9ue1xuICBtYXJnaW4tYm90dG9tOiA2MHB4O1xufVxuXG5cbi5jb21wYW55LWxvZ28ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvam91cm5pLWxvZ28ucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgb3BhY2l0eTogMDtcbiAgYW5pbWF0aW9uOiBsb2dvLXNsaWRlLWluIDAuNXMgY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpIDAuNXMgZm9yd2FyZHM7XG59XG5cbi5qb2ItdGl0bGUge1xuICBmb250LXNpemU6IDJlbTtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBvcGFjaXR5OiAwO1xuICBjb2xvcjogIzAwNTE5MTtcbiAgYW5pbWF0aW9uOiBoZWFkZXItc2xpZGUtdXAgMC41cyBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSkgMC44cyBmb3J3YXJkcztcbn1cblxuaDIuY29tcGFueS1uYW1lIHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgb3BhY2l0eTogMDtcbiAgYW5pbWF0aW9uOiBoZWFkZXItc2xpZGUtdXAgMC41cyBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSkgMS4xcyBmb3J3YXJkcztcbn1cblxucCB7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG4gIGZvbnQtc2l6ZTogMS4zZW07XG4gIGNvbG9yOiAjNjY2O1xufVxuXG5wOm50aC1jaGlsZCgxKSB7XG4gIG9wYWNpdHk6IDA7XG4gIGFuaW1hdGlvbjogaXRlbS1zbGlkZS1pbiAwLjVzIGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KSAwLjhzIGZvcndhcmRzO1xufVxuXG5wOm50aC1jaGlsZCgyKSB7XG4gIG9wYWNpdHk6IDA7XG4gIGFuaW1hdGlvbjogaXRlbS1zbGlkZS1pbiAwLjVzIGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KSAwLjhzIGZvcndhcmRzO1xufVxuXG5wOm50aC1jaGlsZCgzKSB7XG4gIG9wYWNpdHk6IDA7XG4gIGFuaW1hdGlvbjogaXRlbS1zbGlkZS1pbiAwLjVzIGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KSAwLjhzIGZvcndhcmRzO1xufVxuXG4uY3VzdG9tLWZpbGUtaW5wdXQge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG4uY3VzdG9tLWZpbGUtaW5wdXQ6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdTZWxlY3Qgc29tZSBmaWxlcyc7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgI2Y5ZjlmOSwgI2UzZTNlMyk7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM5OTk7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgcGFkZGluZzogNXB4IDhweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LXNoYWRvdzogMXB4IDFweCAjZmZmO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDEwcHQ7XG59XG4uY3VzdG9tLWZpbGUtaW5wdXQ6aG92ZXI6OmJlZm9yZSB7XG4gIGJvcmRlci1jb2xvcjogYmxhY2s7XG59XG4uY3VzdG9tLWZpbGUtaW5wdXQ6YWN0aXZlOjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byB0b3AsICNlM2UzZTMsICNmOWY5ZjkpO1xufVxuXG5pb24tbGFiZWwge1xuICBtYXJnaW4tdG9wOiAyNXB4O1xuICBmb250LXNpemU6IDEuM2VtO1xuICBjb2xvcjogIzY2Njtcbn1cblxuaW9uLWl0ZW0ge1xuICBvcGFjaXR5OiAwO1xuICBhbmltYXRpb246IGl0ZW0tc2xpZGUtaW4gMC41cyBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSkgMC44cyBmb3J3YXJkcztcbn1cblxuaW9uLWl0ZW06bnRoLWNoaWxkKDEpIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjVzO1xufVxuaW9uLWl0ZW06bnRoLWNoaWxkKDIpIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjhzO1xufVxuaW9uLWl0ZW06bnRoLWNoaWxkKDMpIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAxLjFzO1xufVxuaW9uLWl0ZW06bnRoLWNoaWxkKDQpIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAxLjRzO1xufVxuaW9uLWl0ZW06bnRoLWNoaWxkKDUpIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAxLjdzO1xufVxuaW9uLWl0ZW06bnRoLWNoaWxkKDYpIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAycztcbn1cbmlvbi1pdGVtOm50aC1jaGlsZCg3KSB7XG4gIGFuaW1hdGlvbi1kZWxheTogMi4zcztcbn1cbmlvbi1pdGVtOm50aC1jaGlsZCg4KSB7XG4gIGFuaW1hdGlvbi1kZWxheTogMi42cztcbn1cblxuXG4ub3JhbmdlLWJ1dHRvbiB7XG4gIHdpZHRoOiAxNTBweDtcbn1cblxuLmJsdWUtYnV0dG9uIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIC8vIG1hcmdpbjogMjBweCBhdXRvIDIwcHggYXV0bztcbn1cblxuQGtleWZyYW1lcyBsb2dvLXNsaWRlLWluIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjBweCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGhlYWRlci1zbGlkZS11cCB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoOHB4KTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgaXRlbS1zbGlkZS1pbiB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTdweCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufSJdfQ== */";
      /***/
    },

    /***/
    "lBow":
    /*!**************************************************!*\
      !*** ./src/app/pages/jobs/apply/apply.module.ts ***!
      \**************************************************/

    /*! exports provided: ApplyPageModule */

    /***/
    function lBow(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ApplyPageModule", function () {
        return ApplyPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _apply_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./apply-routing.module */
      "NMX6");
      /* harmony import */


      var _apply_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./apply.page */
      "c2PQ");
      /* harmony import */


      var src_app_modals_view_resume_view_resume_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/modals/view-resume/view-resume.module */
      "1Xhk");

      var ApplyPageModule = function ApplyPageModule() {
        _classCallCheck(this, ApplyPageModule);
      };

      ApplyPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _apply_routing_module__WEBPACK_IMPORTED_MODULE_5__["ApplyPageRoutingModule"], src_app_modals_view_resume_view_resume_module__WEBPACK_IMPORTED_MODULE_7__["ViewResumePageModule"]],
        declarations: [_apply_page__WEBPACK_IMPORTED_MODULE_6__["ApplyPage"]]
      })], ApplyPageModule);
      /***/
    },

    /***/
    "sGSZ":
    /*!****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/jobs/apply/apply.page.html ***!
      \****************************************************************************************/

    /*! exports provided: default */

    /***/
    function sGSZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-hide-lg-up\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n  <ion-title>Job Page</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n      <!-- Logo, Title, Company Name -->\n      <ion-row class=\"ion-justify-content-center\">\n        <ion-col size-xs=\"11\" size-sm=\"10\"size-md=\"8\" size-lg=\"10\">\n            <div class=\"company-logo\" style=\"height: 80px; width: 80px;\"></div>\n\n            <h1 class=\"job-title\">{{jobTitle}}</h1>\n\n            <h2 class=\"company-name\">{{jobCompanyName}}</h2>\n\n        </ion-col>\n      </ion-row>\n\n        <!-- Instructions -->\n        <ion-row class=\"ion-justify-content-center\">\n          <ion-col size-xs=\"11\" size-sm=\"10\" size-md=\"8\" size-lg=\"10\">\n            <p style=\"color: #005191\">Please go over your information before you send your application.</p>\n          </ion-col>\n        </ion-row>\n\n        <!-- Forms -->\n        <ion-row class=\"ion-justify-content-center\" style=\"margin: 20px auto;\">\n            <ion-col size-xs=\"11\" size-sm=\"10\" size-md=\"8\" size-lg=\"10\">\n              <form *ngIf=\"applyPageForm\" [formGroup]=\"applyPageForm\">\n                <ion-list class=\"line-input\">\n\n                  <div class=\"info-section\">\n                    <p class=\"instructions\" >Phone Number</p>\n                  <ion-item>\n                    <ion-input formControlName=\"phoneNumber\" maxlength=\"10\" inputmode=\"tel\"></ion-input>\n                  </ion-item>\n                  </div>\n                  <div class=\"info-section\">\n\n                    <p class=\"instructions\" >Resume</p>\n                    <ion-item style=\"border: none;  position: relative; right: 20px;\">\n                      <ion-button class=\"blue-button\" style=\"height: 45px;\" (click)=\"viewResumeModal()\">\n                        View Resume\n                      </ion-button>\n                      <!-- <p>or</p> -->\n                      <ion-input type=\"file\" class=\"custom-file-input \">\n                        <label style=\"margin-right: 10px;\">Upload Resume</label>\n                      </ion-input>\n                    </ion-item>\n\n                  </div>\n                  <div class=\"info-section\">\n\n                    <p class=\"instructions\" >Why are you a good fit for this job?</p>\n                    <ion-item>\n                      <ion-textarea\n                      formControlName=\"reasonTextArea\"\n                      maxlength=\"2500\"\n                      rows=\"10\"\n                      placeholder=\"Add message here - 2500 characters max\"\n                      (keydown.control.enter)=\"finishApplication()\"\n                      ></ion-textarea>\n                    </ion-item>\n                  </div>\n\n\n                </ion-list>\n                <p></p>\n                <ion-row>\n                  <ion-col class=\"ion-text-center\" size=\"12\">\n                    <ion-button (click)=\"finishApplication()\" class=\"orange-button next-button\">Submit</ion-button>\n                    <ion-button class=\"ion-hide-md-down blue-button\" (click)=\"goBack()\">\n                      Go Back</ion-button>\n                  </ion-col>\n                </ion-row>\n              </form>\n              </ion-col>\n        </ion-row>\n  </ion-grid>\n</ion-content>\n";
      /***/
    },

    /***/
    "sS/t":
    /*!************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modals/view-resume/view-resume.page.html ***!
      \************************************************************************************************/

    /*! exports provided: default */

    /***/
    function sST(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- Modal -->\n<ion-header class=\"ion-hide-lg-up\">\n  <ion-toolbar>\n    <ion-buttons (click)=\"cancel()\" slot=\"start\">\n      <ion-icon slot=\"start\" name=\"close\"></ion-icon>\n      <p class=\"toolbar-title\">View Resume</p>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row class=\"ion-hide-md-down\" style=\"margin: 5% 0% 3% 0%;\">\n      <ion-col push-lg=\"0.5\" size=\"2\">\n        <h1>View Resume</h1>\n      </ion-col>\n      <ion-col push-lg=\"6.4\" size=\"6\">\n        <ion-button (click)=\"uploadResumeModal()\" class=\"orange-button\" style=\"width: 150px;\">UPDATE</ion-button>\n        <ion-button class=\"blue-button\" (click)=\"back()\">\n          Back\n        </ion-button>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"ion-justify-content-center ion-hide-md-down\">\n      <ion-col size=\"11\">\n        <hr style=\"background-color: #666;\" />\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col class=\"ion-text-center\" size-xs=\"12\" size-sm=\"11\" size-md=\"11\" size-lg=\"11\">\n        <h4>You can View and Update your Resume here</h4>\n        <object [data]=\"this.sanitizeImageUrl(this.resume)\" width=\"100%\" height=\"700\" type=\"application/pdf\"></object>\n\n      </ion-col>\n      <ion-button (click)=\"uploadResumeModal()\" class=\"orange-button ion-hide-md-up\" style=\"width: 150px;\">UPDATE</ion-button>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=apply-apply-module-es5.js.map