(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["my-posts-my-posts-module"],{

/***/ "3c3Z":
/*!*********************************************************!*\
  !*** ./src/app/pages/posts/my-posts/my-posts.module.ts ***!
  \*********************************************************/
/*! exports provided: MyPostsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyPostsPageModule", function() { return MyPostsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _components_custom_component_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/custom-component.module */ "zAgk");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _my_posts_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./my-posts-routing.module */ "zico");
/* harmony import */ var _my_posts_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./my-posts.page */ "R97K");








let MyPostsPageModule = class MyPostsPageModule {
};
MyPostsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _components_custom_component_module__WEBPACK_IMPORTED_MODULE_4__["CustomComponentsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _my_posts_routing_module__WEBPACK_IMPORTED_MODULE_6__["MyPostsPageRoutingModule"]
        ],
        declarations: [_my_posts_page__WEBPACK_IMPORTED_MODULE_7__["MyPostsPage"]]
    })
], MyPostsPageModule);



/***/ }),

/***/ "MYB+":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/posts/my-posts/my-posts.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (" <!-- Mobile Toolbar -->\n <ion-header class=\"ion-hide-lg-up\">\n  <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-back-button></ion-back-button>\n      </ion-buttons>\n    <ion-title>My Posts</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <!-- fab placed to the bottom end -->\n    <ion-fab class=\"ion-hide-lg-up\" vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n      <ion-fab-button (click)=\"addPost()\">\n        <ion-icon name=\"add\" size=\"large\"></ion-icon>\n      </ion-fab-button>\n    </ion-fab>\n\n    <!-- Desktop -->\n<ion-grid class=\"ion-hide-md-down\">\n\n  <!-- Desktop Header -->\n  <ion-row class=\"ion-hide-md-down\">\n    <ion-col offset=\"2.5\" size=\"2.5\" style=\"margin: 3% 0% 2% 0%;\">\n      <h1>My Posts</h1>\n    </ion-col>\n    <ion-col class=\"ion-text-center\" push=\"2.65\" size=\"2\">\n      <ion-button class=\"add-button\"  (click)=\"addPost()\">\n        Add Post\n      </ion-button>\n    </ion-col>\n    <ion-col class=\"ion-text-center\" push=\"1\" size=\"2\">\n      <ion-button class=\"blue-button\"  (click)=\"back()\">\n        Back\n      </ion-button>\n    </ion-col>\n  </ion-row>\n\n<ion-row class=\"ion-justify-content-center\" style=\"margin-top: 1%;\">\n  <ion-col\n    class=\"no-posts ion-align-items-center\"\n    *ngIf=\"allMyPosts.length === 0\"\n    size-xs=\"11\" size-sm=\"9\" size-md=\"8\" size-lg=\"7\">\n    <div>\n      <p style=\"font-size: 1.2em;\">You currently do not have any posts. Please click the Add Post button to create a Post.</p>\n    </div>\n  </ion-col>\n\n  <!-- Posts -->\n  <ion-col size=\"7\">\n    <ion-row *ngFor=\"let post of allMyPosts\" class=\"post\">\n\n      <!-- Profile Header -->\n      <ion-col size=\"11\">\n        <ion-row class=\"ion-align-items-center\">\n        <!-- Profile Picture -->\n        <ion-col push=\"0.25\" size=\"1\">\n          <img src=\"{{post.creatorProfilePicture}}\" style=\"background: #999; border-radius: 100px; height: 40px; width: 40px;\">\n        </ion-col>\n\n        <!-- Post Creator's Name -->\n        <ion-col size=\"4\">\n          <h6 style=\"font-size: 1em; font-weight: 500;\">{{post.creatorName}}</h6>\n        </ion-col>\n\n        <!-- Date -->\n        <ion-col class=\"ion-float-right\" push-lg=\"5\" size=\"3\">\n            <h6 style=\"opacity: 0.4; font-size: 0.8em;\">{{post.date}}</h6>\n        </ion-col>\n\n      </ion-row>\n      </ion-col>\n\n      <!-- Post Content -->\n      <ion-col size=\"12\">\n        <ion-row class=\"ion-justify-content-center\">\n          <!-- 1080x1350 -->\n          <ion-col size=\"11.3\">\n           <p class=\"post-title\">{{post.title}}</p>\n          </ion-col>\n       </ion-row>\n        <ion-row>\n          <!-- 1080x1350 -->\n          <ion-col push=\"0.25\" size=\"11\" >\n           <p class=\"post-content\">{{post.post}}</p>\n          </ion-col>\n       </ion-row>\n      </ion-col>\n\n      <!-- Comment -->\n      <ion-col size=\"12\">\n        <ion-row style=\"position: relative; right: 6px; top: -4px;\" >\n          <ion-col size=\"11.8\">\n            <ion-item lines=\"none\">\n             <form (ngSubmit)=\"comment(post._id, this.userFullName, this.userEmail, this.userProfilePicture, this.commentForm.value)\" [formGroup]=\"commentForm\">\n               <ion-textarea\n                  class=\"comment-input\"\n                  autogrow=\"true\"\n                  autocapitalize=\"true\"\n                  rows=\"5\"\n                  spellcheck=\"true\"\n                  wrap=\"soft\"\n                  type=\"text\"\n                  placeholder=\"Add a Comment\" formControlName=\"comment\">\n                </ion-textarea>\n                <!-- Comment Post Button -->\n                <ion-button\n                  style=\"float: right;\"\n                  class=\"comment-post-button\"\n                  *ngIf=\"!commentForm\n                          .get('comment')\n                          .pristine && commentForm.value.comment.length >= 3\"\n                    name=\"send\"\n                    type=\"submit\">Post\n                </ion-button>\n             </form>\n\n    </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n\n      <!-- Post Buttons -->\n      <ion-col size=\"12\">\n        <ion-row>\n          <!-- Upvote & Downvote-->\n          <ion-col size=\"4.7\">\n            <app-up-down-vote-buttons [postID]=\"post._id\"></app-up-down-vote-buttons>\n          </ion-col>\n\n          <!-- Follow & Comment -->\n          <ion-col push=\"0.75\" size=\"6\">\n            <app-follow-comment-buttons [isUser]=\"post.isUser\" [postID]=\"post._id\"></app-follow-comment-buttons>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n\n\n    </ion-row>\n  </ion-col>\n\n</ion-row>\n</ion-grid>\n\n<!-- Mobile -->\n<ion-grid class=\"ion-hide-lg-up\">\n\n  <ion-row class=\"ion-justify-content-center\">\n\n    <!-- No Followed Post -->\n    <ion-col\n      class=\"no-posts ion-align-items-center\"\n      *ngIf=\"allMyPosts.length === 0\"\n      size-xs=\"11\" size-sm=\"9\" size-md=\"8\" size-lg=\"7\">\n      <div>\n        <p style=\"font-size: 1.2em;\">You are currently not following any posts. Please click the follow button on any Post to add it to this page.</p>\n      </div>\n    </ion-col>\n  \n    <!-- Posts -->\n    <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"8\" size-lg=\"10\" pull-lg=\"2\">\n      <ion-row *ngFor=\"let post of allMyPosts\" style=\"margin-top: 1%;\" class=\"post\">\n  \n        <!-- Profile Header -->\n        <ion-col size=\"11\">\n          <ion-row style=\"position: relative; right: 5px; top: -4px;\" >\n          <!-- Profile Picture -->\n          <ion-col push=\"0.2\" size=\"1.3\">\n            <img src=\"{{post.creatorProfilePicture}}\" style=\"background: #999; border-radius: 100px; height: 40px; width: 40px;\">\n          </ion-col>\n  \n          <!-- Post Creator's Name -->\n          <ion-col push=\"0.2\" size=\"5\">\n            <h6 style=\"font-size: 1em; margin: 10px 0 10px 0px; color: #666;\">{{post.creatorName}}</h6>\n          </ion-col>\n  \n          <!-- Date -->\n          <ion-col class=\"ion-text-right\" push=\"1.5\" size=\"3\">\n              <h6 style=\"opacity: 0.4; font-size: 0.7em; margin: 10px 0; position: relative; top: 10px;\">{{post.date}}</h6>\n          </ion-col>\n  \n        </ion-row>\n        </ion-col>\n  \n        <!-- Post Content -->\n        <ion-col size=\"12\">\n          <ion-row class=\"ion-justify-content-center\">\n            <!-- 1080x1350 -->\n            <ion-col size=\"11.3\">\n             <p class=\"post-title\">{{post.title}}</p>\n            </ion-col>\n         </ion-row>\n          <ion-row class=\"ion-justify-content-center\">\n            <!-- (click)=\"postPage(post)\"  -->\n            <!-- 1080x1350 -->\n            <ion-col size=\"11\" style=\"height: auto; background: white\">\n            <p class=\"post-content\" style=\"font-size: 1em; width: 100%; position: unset; line-height: unset;\">{{post.post}}</p>\n            </ion-col>\n        </ion-row>\n        </ion-col>\n  \n        <!-- Comment -->\n        <ion-col size=\"12\">\n          <ion-row class=\"ion-justify-content-center\" style=\"position: relative; right: 6px; top: -4px;\" >\n            <ion-col size=\"12\">\n              <ion-item  style=\"height: auto;\" lines=\"none\">\n              <form (ngSubmit)=\"comment(post._id, this.userFullName, this.userEmail, this.userProfilePicture, this.commentForm.value)\" [formGroup]=\"commentForm\">\n                <ion-textarea\n                class=\"comment-input-mobile\"\n                autogrow=\"true\"\n                autocapitalize=\"true\"\n                rows=\"5\"\n                spellcheck=\"true\"\n                wrap=\"soft\"\n                type=\"text\"\n                placeholder=\"Add a Comment\" formControlName=\"comment\">\n              </ion-textarea>\n              <!-- Comment Post Button -->\n              <ion-button\n                style=\"float: right;\"\n                class=\"comment-post-button\"\n                *ngIf=\"!commentForm\n                        .get('comment')\n                        .pristine && commentForm.value.comment.length >= 3\"\n                  name=\"send\"\n                  type=\"submit\">Post\n              </ion-button>\n              </form>\n  \n      </ion-item>\n            </ion-col>\n          </ion-row>\n        </ion-col>\n  \n        <!-- Post Buttons -->\n        <ion-col size=\"12\">\n          <ion-row class=\"ion-justify-content-center\">\n            <!-- Upvote & Downvote-->\n            <ion-col pull=\"1\" size=\"4\" size-xs=\"4.4\">\n              <app-up-down-vote-buttons [postID]=\"post._id\"></app-up-down-vote-buttons>\n            </ion-col>\n  \n            <!-- Follow & Comment -->\n            <ion-col size=\"6\">\n              <app-follow-comment-buttons style=\"font-size: 1.3em\" [postID]=\"post._id\"></app-follow-comment-buttons>\n            </ion-col>\n          </ion-row>\n        </ion-col>\n  \n      </ion-row>\n    </ion-col>\n  \n  </ion-row>\n  </ion-grid>\n\n</ion-content>\n");

/***/ }),

/***/ "R97K":
/*!*******************************************************!*\
  !*** ./src/app/pages/posts/my-posts/my-posts.page.ts ***!
  \*******************************************************/
/*! exports provided: MyPostsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyPostsPage", function() { return MyPostsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_my_posts_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./my-posts.page.html */ "MYB+");
/* harmony import */ var _my_posts_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./my-posts.page.scss */ "f6im");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/post.service */ "ENZJ");
/* harmony import */ var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/profile.service */ "Aso2");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! date-fns */ "b/SL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_emitters_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/emitters/post-page-emitter.service */ "DtjX");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");













let MyPostsPage = class MyPostsPage {
    constructor(activatedRoute, router, posts, profile, toast, formBuilder, eventEmitterService, modal, location) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.posts = posts;
        this.profile = profile;
        this.toast = toast;
        this.formBuilder = formBuilder;
        this.eventEmitterService = eventEmitterService;
        this.modal = modal;
        this.location = location;
        this.allMyPosts = [];
    }
    ngOnInit() {
        this.location.onPopState(() => {
            this.eventEmitterService.onBackAction();
        });
        this.profile.getUserDetails().subscribe(details => {
            this.userID = details['_id'];
            this.userFullName = details['fullName'];
            this.userEmail = details['email'];
            this.userProfilePicture = details['profilePicture'];
        });
        // To collect comment data
        this.commentForm = this.formBuilder.group({
            comment: ['']
        });
        const email = this.activatedRoute.snapshot.paramMap.get('email');
        this.userEmail = email;
        console.log(this.userEmail);
        this.myPosts(this.userEmail);
    }
    addPost() {
        this.router.navigate(['/home/posts/add-post']);
    }
    back() {
        this.eventEmitterService.onBackAction();
        this.router.navigate(['/home/posts']);
    }
    myPosts(userEmail) {
        this.posts.getMyPosts(userEmail).subscribe(data => {
            this.allMyPosts = Object.values(data).reverse();
            console.log(data);
            for (const post of this.allMyPosts) {
                post.date = Object(date_fns__WEBPACK_IMPORTED_MODULE_8__["format"])(new Date(post.date), 'MMMM do, yyyy');
            }
            return this.allMyPosts;
        });
    }
    comment(postID, userFullName, userEmail, userProfilePicture, comment) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Reset Comment Input
            this.commentForm.reset();
            const date = yield Date.now();
            console.log('Posting comment');
            console.log('Post ID: ' + postID);
            yield this.posts.comment(postID, this.userFullName, this.userEmail, this.userProfilePicture, comment).subscribe(() => {
                this.posts.getPostInfo(postID).subscribe(post => {
                    this.posts.getPostInfo(postID).subscribe(post => {
                        for (let postComments of post['comments']) {
                            console.log(postComments);
                            postComments.isUser = false;
                            postComments.canDeleteComment = false;
                            postComments.canReport = true;
                            // If this comment is from the logged in user, they can delete and edit
                            if (postComments.userEmail === this.userEmail) {
                                postComments.isUser = true;
                                postComments.canDeleteComment = true;
                                postComments.canReport = false;
                            }
                            postComments.repliesLength = postComments.replies.length;
                            postComments.date = Object(date_fns__WEBPACK_IMPORTED_MODULE_8__["formatDistanceToNow"])(new Date(postComments.date), {
                                includeSeconds: true,
                                addSuffix: false
                            });
                        }
                        this.posts.commentsSubject$.next(post['comments'].reverse());
                    });
                });
            });
            yield this.posts.getPostInfo(postID).subscribe(post => {
                for (let postComments of post['comments']) {
                    postComments.date = Object(date_fns__WEBPACK_IMPORTED_MODULE_8__["formatDistanceToNow"])(new Date(postComments.date), {
                        includeSeconds: true,
                        addSuffix: true
                    });
                }
                this.posts.commentsSubject$.next(post['comments'].reverse());
            });
            const toast = this.toast.create({
                message: 'Your comment has been added.',
                duration: 1500
            });
            toast.then(toast => toast.present());
            yield this.router.navigate(['/home/posts/post-page', postID]);
        });
    }
};
MyPostsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _services_post_service__WEBPACK_IMPORTED_MODULE_5__["PostsService"] },
    { type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_6__["ProfileService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ToastController"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"] },
    { type: src_app_emitters_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_10__["PostPageEmitterService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_11__["PlatformLocation"] }
];
MyPostsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-my-posts',
        template: _raw_loader_my_posts_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_my_posts_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _services_post_service__WEBPACK_IMPORTED_MODULE_5__["PostsService"],
        src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_6__["ProfileService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ToastController"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"],
        src_app_emitters_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_10__["PostPageEmitterService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"],
        _angular_common__WEBPACK_IMPORTED_MODULE_11__["PlatformLocation"]])
], MyPostsPage);



/***/ }),

/***/ "f6im":
/*!*********************************************************!*\
  !*** ./src/app/pages/posts/my-posts/my-posts.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-title {\n  margin: 0;\n}\n\n.post {\n  padding: 30px 30px;\n  margin-bottom: 80px;\n  border-radius: 5px;\n  box-shadow: 1px 10px 10px rgba(0, 0, 0, 0.05);\n  background: white;\n  font-size: 1em;\n  line-height: 35px;\n}\n\n.post hr {\n  background: #999;\n  opacity: 0.4;\n}\n\n.post-title {\n  font-weight: 800;\n  color: #005191;\n  position: relative;\n  left: 5px;\n  margin: 0;\n}\n\n@media screen and (max-width: 567px) {\n  .post {\n    padding: 30px 0px;\n  }\n}\n\n.no-posts {\n  height: 70vh;\n}\n\nform {\n  width: 100%;\n}\n\n.comment {\n  border: 1px solid #005191;\n  border-radius: 5px;\n  margin-top: 20px;\n  padding: 10px;\n  --padding-start: 20px;\n}\n\n.comment-post-button {\n  --background: linear-gradient(#0672c4, #005191);\n  height: 30px;\n  margin-top: 20px;\n  opacity: 0;\n  width: 80px;\n  transform: 0.5s;\n  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n  -webkit-animation: slide-up 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;\n          animation: slide-up 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;\n}\n\n.comment-input {\n  background: rgba(247, 248, 248, 0.5);\n  height: auto;\n  margin: 30px 0 60px 0;\n  box-shadow: none;\n  border: 1px solid rgba(0, 81, 145, 0.4);\n  border-radius: 5px;\n  padding-left: 10px;\n  transition: 0.5s;\n  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n\n.comment-input:hover {\n  background: rgba(247, 248, 248, 0.5);\n  height: auto;\n  margin: 50px 0 80px 0;\n  box-shadow: 1px 1px 3px #999;\n  border: 1px solid #005191;\n  border-radius: 5px;\n  padding-left: 10px;\n  transition: 0.5s;\n  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n\n.comment-input-mobile {\n  background: rgba(247, 248, 248, 0.5);\n  height: auto;\n  margin: 30px 0 60px 0;\n  box-shadow: none;\n  padding-left: 10px;\n  border: 1px solid rgba(0, 81, 145, 0.4);\n  border-radius: 5px;\n  transition: 1s;\n  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n\n.comment-input-mobile:focus {\n  background: rgba(247, 248, 248, 0.5);\n  height: 100px;\n  margin: 30px 0 150px 0;\n  box-shadow: 1px 1px 3px #999;\n  border: 1px solid #005191;\n  border-radius: 5px;\n  transition: 1s;\n  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n\nion-item {\n  --background: none;\n}\n\n.toolbar > ion-buttons > ion-button {\n  height: 45px;\n  border-radius: 5px;\n  padding: 10px;\n  --background: rgb(209,216,224,0.13);\n  --color: white;\n  width: 140px;\n  font-size: 0.6em;\n}\n\n.toolbar > ion-buttons > ion-button ion-icon {\n  position: relative;\n  left: -10px;\n}\n\n.post-toolbar ion-buttons ion-button {\n  width: 140px;\n  font-size: 1em;\n  --color: #005191;\n}\n\n.blue-button {\n  -webkit-animation: none;\n          animation: none;\n  opacity: unset;\n  width: 100px;\n  height: 36px;\n  margin-top: 30px;\n  margin-bottom: 4px;\n  position: unset;\n  font-size: 0.7em;\n}\n\n.add-button {\n  --color: white;\n  --background: linear-gradient(#5ad8b2, #40c59d);\n  --background-hover: linear-gradient(#bffce9, #7efcd4);\n  font-size: 0.7em;\n  font-weight: 800;\n  display: block;\n  width: 100px;\n  margin-top: 30px;\n}\n\n.comment-input {\n  background: rgba(247, 248, 248, 0.5);\n  height: auto;\n  margin: 10px 0 0px 0;\n  box-shadow: none;\n  border: 1px solid rgba(0, 81, 145, 0.4);\n  border-radius: 5px;\n  padding-left: 10px;\n  transition: 0.5s;\n  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n\n.comment-input:hover {\n  background: rgba(247, 248, 248, 0.5);\n  height: auto;\n  margin: 12px 0 0px 0;\n  box-shadow: 1px 1px 3px #999;\n  border: 1px solid #005191;\n  border-radius: 5px;\n  padding-left: 10px;\n  transition: 0.5s;\n  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n\n.comment-post-button {\n  --background: linear-gradient(#5ad8b2, #40c59d);\n  height: 40px;\n  margin-top: 40px;\n  opacity: 0;\n  width: 100%;\n  transform: 0.5s;\n  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n  -webkit-animation: slide-up 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;\n          animation: slide-up 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;\n}\n\nion-fab-button {\n  --background: #1baf88;\n  --color-focused: white;\n  --color-hover: white;\n  --color-activated: white;\n  position: relative;\n  bottom: 50px;\n  right: 10px;\n}\n\n@-webkit-keyframes slide-up {\n  0% {\n    transform: translateY(10px);\n    opacity: 0;\n  }\n  100% {\n    transform: translateY(0px);\n    opacity: 1;\n  }\n}\n\n@keyframes slide-up {\n  0% {\n    transform: translateY(10px);\n    opacity: 0;\n  }\n  100% {\n    transform: translateY(0px);\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcG9zdHMvbXktcG9zdHMvbXktcG9zdHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsU0FBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNkNBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUNFO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBSUE7RUFDRSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0FBREY7O0FBSUE7RUFDRTtJQUNFLGlCQUFBO0VBREY7QUFDRjs7QUFJQTtFQUNFLFlBQUE7QUFGRjs7QUFLQTtFQUNFLFdBQUE7QUFGRjs7QUFLQTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtBQUZGOztBQUtBO0VBQ0UsK0NBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxtRUFBQTtFQUNBLGlGQUFBO1VBQUEseUVBQUE7QUFGRjs7QUFLQTtFQUNFLG9DQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1Q0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1FQUFBO0FBRkY7O0FBS0E7RUFDRSxvQ0FBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLDRCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtRUFBQTtBQUZGOztBQUtBO0VBQ0Usb0NBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUNBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxtRUFBQTtBQUZGOztBQUtBO0VBQ0Usb0NBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUVBQUE7QUFGRjs7QUFLQTtFQUNFLGtCQUFBO0FBRkY7O0FBS0E7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUNBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBRkY7O0FBSUU7RUFDRSxrQkFBQTtFQUNBLFdBQUE7QUFGSjs7QUFRSTtFQUNFLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFMTjs7QUFVQTtFQUNFLHVCQUFBO1VBQUEsZUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFQRjs7QUFVQTtFQUNFLGNBQUE7RUFDQSwrQ0FBQTtFQUNBLHFEQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFQRjs7QUFVQTtFQUNFLG9DQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1Q0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1FQUFBO0FBUEY7O0FBVUE7RUFDRSxvQ0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLDRCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtRUFBQTtBQVBGOztBQVVBO0VBQ0UsK0NBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxtRUFBQTtFQUNBLGlGQUFBO1VBQUEseUVBQUE7QUFQRjs7QUFXQTtFQUNFLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQVJGOztBQVdBO0VBQ0U7SUFDRSwyQkFBQTtJQUNBLFVBQUE7RUFSRjtFQVdBO0lBQ0UsMEJBQUE7SUFDQSxVQUFBO0VBVEY7QUFDRjs7QUFBQTtFQUNFO0lBQ0UsMkJBQUE7SUFDQSxVQUFBO0VBUkY7RUFXQTtJQUNFLDBCQUFBO0lBQ0EsVUFBQTtFQVRGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wb3N0cy9teS1wb3N0cy9teS1wb3N0cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdGl0bGUge1xuICBtYXJnaW46IDA7XG59XG5cbi5wb3N0IHtcbiAgcGFkZGluZzogMzBweCAzMHB4O1xuICBtYXJnaW4tYm90dG9tOiA4MHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJveC1zaGFkb3c6IDFweCAxMHB4IDEwcHggcmdiYSgwLDAsMCwwLjA1KTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBsaW5lLWhlaWdodDogMzVweDtcblxuICBociB7XG4gICAgYmFja2dyb3VuZDogIzk5OTtcbiAgICBvcGFjaXR5OiAwLjQ7XG5cbiAgfVxufVxuXG4ucG9zdC10aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGNvbG9yOiAjMDA1MTkxO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDVweDtcbiAgbWFyZ2luOiAwO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NjdweCkge1xuICAucG9zdCB7XG4gICAgcGFkZGluZzogMzBweCAwcHg7XG4gIH1cbn1cblxuLm5vLXBvc3RzIHtcbiAgaGVpZ2h0OiA3MHZoO1xufVxuXG5mb3JtIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jb21tZW50IHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwNTE5MTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDIwcHg7XG59XG5cbi5jb21tZW50LXBvc3QtYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzA2NzJjNCwgIzAwNTE5MSk7XG4gIGhlaWdodDogMzBweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgb3BhY2l0eTogMDtcbiAgd2lkdGg6IDgwcHg7XG4gIHRyYW5zZm9ybTogMC41cztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KTtcbiAgYW5pbWF0aW9uOiBzbGlkZS11cCAwLjVzIGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KSBmb3J3YXJkcztcbn1cblxuLmNvbW1lbnQtaW5wdXQge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI0NywgMjQ4LCAyNDgsIDAuNSk7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luOiAzMHB4IDAgNjBweCAwO1xuICBib3gtc2hhZG93OiBub25lO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDgxLCAxNDUsMC40KTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSk7XG59XG5cbi5jb21tZW50LWlucHV0OmhvdmVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNDcsIDI0OCwgMjQ4LCAwLjUpO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbjogNTBweCAwIDgwcHggMDtcbiAgYm94LXNoYWRvdzogMXB4IDFweCAzcHggIzk5OTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCA4MSwgMTQ1LCAxKTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSk7XG59XG5cbi5jb21tZW50LWlucHV0LW1vYmlsZSB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjQ3LCAyNDgsIDI0OCwgMC41KTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW46IDMwcHggMCA2MHB4IDA7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCA4MSwgMTQ1LDAuNCk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgdHJhbnNpdGlvbjogMXM7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSk7XG59XG5cbi5jb21tZW50LWlucHV0LW1vYmlsZTpmb2N1cyB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjQ3LCAyNDgsIDI0OCwgMC41KTtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgbWFyZ2luOiAzMHB4IDAgMTUwcHggMDtcbiAgYm94LXNoYWRvdzogMXB4IDFweCAzcHggIzk5OTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCA4MSwgMTQ1LCAxKTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB0cmFuc2l0aW9uOiAxcztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KTtcbn1cblxuaW9uLWl0ZW0ge1xuICAtLWJhY2tncm91bmQ6IG5vbmU7XG59XG5cbi50b29sYmFyID4gaW9uLWJ1dHRvbnMgPiBpb24tYnV0dG9uIHtcbiAgaGVpZ2h0OiA0NXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIC0tYmFja2dyb3VuZDogcmdiKDIwOSwyMTYsMjI0LDAuMTMpO1xuICAtLWNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDE0MHB4O1xuICBmb250LXNpemU6IDAuNmVtO1xuXG4gIGlvbi1pY29uIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbGVmdDogLTEwcHg7XG4gIH1cbn1cblxuLnBvc3QtdG9vbGJhciB7XG4gIGlvbi1idXR0b25zIHtcbiAgICBpb24tYnV0dG9uIHtcbiAgICAgIHdpZHRoOiAxNDBweDtcbiAgICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgICAgLS1jb2xvcjogIzAwNTE5MTtcbiAgICB9XG4gIH1cbn1cblxuLmJsdWUtYnV0dG9uIHtcbiAgYW5pbWF0aW9uOiBub25lO1xuICBvcGFjaXR5OiB1bnNldDtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDM2cHg7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIG1hcmdpbi1ib3R0b206IDRweDtcbiAgcG9zaXRpb246IHVuc2V0O1xuICBmb250LXNpemU6IDAuN2VtO1xufVxuXG4uYWRkLWJ1dHRvbiB7XG4gIC0tY29sb3I6IHdoaXRlO1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjNWFkOGIyLCAjNDBjNTlkKTtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiBsaW5lYXItZ3JhZGllbnQoI2JmZmNlOSwgIzdlZmNkNCk7XG4gIGZvbnQtc2l6ZTogMC43ZW07XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwcHg7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59XG5cbi5jb21tZW50LWlucHV0IHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNDcsIDI0OCwgMjQ4LCAwLjUpO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbjogMTBweCAwIDBweCAwO1xuICBib3gtc2hhZG93OiBub25lO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDgxLCAxNDUsMC40KTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSk7XG59XG5cbi5jb21tZW50LWlucHV0OmhvdmVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNDcsIDI0OCwgMjQ4LCAwLjUpO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbjogMTJweCAwIDBweCAwO1xuICBib3gtc2hhZG93OiAxcHggMXB4IDNweCAjOTk5O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDgxLCAxNDUsIDEpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KTtcbn1cblxuLmNvbW1lbnQtcG9zdC1idXR0b24ge1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjNWFkOGIyLCAjNDBjNTlkKTtcbiAgaGVpZ2h0OiA0MHB4O1xuICBtYXJnaW4tdG9wOiA0MHB4O1xuICBvcGFjaXR5OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgdHJhbnNmb3JtOiAwLjVzO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpO1xuICBhbmltYXRpb246IHNsaWRlLXVwIDAuNXMgY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpIGZvcndhcmRzO1xufVxuXG5cbmlvbi1mYWItYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kOiAjMWJhZjg4O1xuICAtLWNvbG9yLWZvY3VzZWQ6IHdoaXRlO1xuICAtLWNvbG9yLWhvdmVyOiB3aGl0ZTtcbiAgLS1jb2xvci1hY3RpdmF0ZWQ6IHdoaXRlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvdHRvbTogNTBweDtcbiAgcmlnaHQ6IDEwcHg7XG59XG5cbkBrZXlmcmFtZXMgc2xpZGUtdXAge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwcHgpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cblxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59Il19 */");

/***/ }),

/***/ "zico":
/*!*****************************************************************!*\
  !*** ./src/app/pages/posts/my-posts/my-posts-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: MyPostsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyPostsPageRoutingModule", function() { return MyPostsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _my_posts_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./my-posts.page */ "R97K");




const routes = [
    {
        path: '',
        component: _my_posts_page__WEBPACK_IMPORTED_MODULE_3__["MyPostsPage"]
    }
];
let MyPostsPageRoutingModule = class MyPostsPageRoutingModule {
};
MyPostsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MyPostsPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=my-posts-my-posts-module-es2015.js.map