(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-events-events-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/going-icon/going-icon.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/going-icon/going-icon.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-button class=\"event-details\" (click)=\"eventPage(event)\">\n    View Event Details\n</ion-button>\n\n<ion-button *ngIf='!going' (click)=\"toggleGoingState(event)\">\n    Go to Event\n</ion-button>\n\n<ion-button class=\"not-going\" *ngIf='going' (click)=\"toggleGoingState(event)\">\n    Cancel\n</ion-button>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/not-going-icon/not-going-icon.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/not-going-icon/not-going-icon.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-grid fixed>\n    <ion-row>\n        <ion-col size=\"10\" style=\"padding-top: 10px;\">\n            <p>No longer going to this Event?</p>\n        </ion-col>\n        <ion-col size=\"2\">\n          <ion-icon style=\" position: relative; left: -5px;\" (click)=\"toggleGoingState(event)\" tappable [@notGoing]=\"goingState\" size=\"large\" [name]=\"iconName\"></ion-icon>\n        </ion-col>\n    </ion-row>\n  </ion-grid>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/events/events.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/events/events.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n\n  <!-- Mobile & Tablet -->\n  <ion-toolbar style=\"--background: white;\" class=\"ion-hide-md-up\">\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"2\">\n          Logo\n        </ion-col>\n        <ion-col size=\"5\">\n          <ion-searchbar\n          debounce=\"2000\"\n          class=\"searchbar\"\n          showCancelButton=\"true\"\n          placeholder=\"Search Events\"\n          (ionChange)=\"filter($event)\"\n          ></ion-searchbar>\n        </ion-col>\n        <ion-col class=\"ion-align-items-center\" size=\"5\">\n            <ion-button (click)=\"onClick()\">\n              <ion-icon style=\"margin-left: 20px;\" src=\"../../../assets/icon/filter-outline.svg\"></ion-icon>\n            </ion-button>\n            <ion-button (click)=\"favoritesPage()\">\n                <ion-icon src=\"../../../assets/icon/heart-inactive.svg\"></ion-icon>\n              {{favoriteJobsAmount}}</ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    </ion-toolbar>\n\n</ion-header>\n\n<ion-content style=\"--background: rgba(245,245,245,1); background-attachment: fixed;\">\n\n    <!-- Refresh -->\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n        <ion-refresher-content></ion-refresher-content>\n      </ion-refresher>\n\n\n      <!-- Search Results -->\n      <ion-row *ngIf=\"searching\" class=\"ion-text-center\">\n        <ion-col size=\"12\">\n          <ion-title style=\"background: rgba(230,230,230,1); padding: 20px;\">{{allEventsLength}} search result(s) for '{{searchTerm}}'</ion-title>\n        </ion-col>\n      </ion-row>\n\n  <!-- Mobile -->\n  <ion-grid class=\"ion-hide-md-up\">\n    <ion-row *ngIf=\"noSearchInput\" class=\"ion-text-center\">\n      <ion-col size=\"11\" offset=\"0.5\">\n        <h6 class=\"text-header\">There were no Search results with that name. Please Refresh the page</h6>\n        <ion-button class=\"orange-button\" (click)=\"doRefresh($event)\">\n          Refresh\n        </ion-button>\n      </ion-col>\n    </ion-row>\n\n    <!-- Mobile Events Cards -->\n    <ion-row class=\"ion-justify-content-center\" *ngIf=\"!noSearchInput\" >\n      <ion-col size-xs=\"10\" size-sm=\"8\" size-md=\"8\">\n        <ion-card *ngFor=\"let event of allEvents\">\n          <img src=\"../assets/Journi_flyer.jpg\" />\n          <ion-card-header (click)=\"eventPage(event)\">\n            <ion-card-title>{{ event.title }}</ion-card-title>\n            <ion-card-subtitle>{{ event.time }}</ion-card-subtitle>\n            <ion-card-subtitle>{{ event.date }}</ion-card-subtitle>\n            <ion-card-subtitle> {{ event.city }}, {{ event.state }}</ion-card-subtitle>\n            <!-- <ion-card-subtitle float-right style=\"opacity: 0.3; margin-top: 60px;\">posted: {{ event.dateCreated }}</ion-card-subtitle> -->\n          </ion-card-header>\n          <ion-card-content style=\"--ion-grid-padding: 0;\">\n            <ion-toolbar>\n              <app-going-icon [event]=\"event\" [userEmail]=\"userEmail\" [id]=\"id\"></app-going-icon>\n            </ion-toolbar>\n         </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <!-- Desktop -->\n  <ion-grid class=\"ion-hide-md-down\" style=\"--ion-grid-padding: 5%; --ion-grid-column-padding:        25px;\">\n\n     <ion-row>\n        <ion-col size=\"5\">\n            <ion-searchbar\n            no-border\n            debounce=\"800\"\n            showCancelButton=\"focus\"\n            placeholder=\"Search Events\"\n            (ionChange)=\"filter($event)\"\n            ></ion-searchbar>\n        </ion-col>\n        <ion-col size=\"6\">\n      <ion-toolbar class=\"ion-hide-md-down\" style=\"--ion-grid-padding: 5%;\">\n          <!-- <ion-title style=\"font-weight: 800; color: #999\" slot=\"start\">Events ({{allEventsLength}})</ion-title> -->\n          <a slot=\"end\" (click)=\"going()\">\n              View Events you are going to ( {{ eventsGoingLength }} )\n          </a>\n        </ion-toolbar>\n        </ion-col>\n     </ion-row>\n\n    <ion-row>\n      <ion-col size=\"4\" *ngFor=\"let event of allEvents\">\n          <ion-card>\n              <img src=\"../assets/Journi_flyer.jpg\" />\n              <ion-card-header (click)=\"eventPage(event)\">\n                <ion-card-title>{{ event.title }}</ion-card-title>\n                <ion-card-subtitle>{{ event.time }}</ion-card-subtitle>\n                <ion-card-subtitle>{{ event.date }}</ion-card-subtitle>\n                <ion-card-subtitle> {{ event.city }}, {{ event.state }}</ion-card-subtitle>\n                <!-- <ion-card-subtitle float-right style=\"opacity: 0.3; margin-top: 60px;\">posted: {{ event.dateCreated }}</ion-card-subtitle> -->\n              </ion-card-header>\n              <ion-card-content class=\"ion-text-center\">\n                <ion-toolbar style=\"--background: none; height: auto;\">\n                  <app-going-icon [event]=\"event\" [userEmail]=\"userEmail\" [id]=\"id\"></app-going-icon>\n                </ion-toolbar>\n             </ion-card-content>\n            </ion-card></ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/components/going-icon/going-icon.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/going-icon/going-icon.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("p {\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n  opacity: 1;\n}\n\nion-button {\n  font-size: 1em;\n  font-weight: 800;\n  height: 50px;\n  width: 90%;\n  margin: 5px;\n  --background: none;\n  --color: #21ce99;\n  --border-style: solid;\n  --border-color: #21ce99;\n  --border-width: 2px;\n}\n\n.not-going {\n  --color: #e4405f;\n  --border-style: solid;\n  --border-color: #e4405f;\n  --border-width: 2px;\n}\n\n.event-details {\n  --color: #999;\n  --border-style: solid;\n  --border-color: #999;\n  --border-width: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mZXJyby9EZXNrdG9wL1VuaXRlZC1XYXkvTW9iaWxlL3NyYy9hcHAvY29tcG9uZW50cy9nb2luZy1pY29uL2dvaW5nLWljb24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvZ29pbmctaWNvbi9nb2luZy1pY29uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0JBQUE7RUFBQSxnQkFBQTtFQUNBLFVBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2dvaW5nLWljb24vZ29pbmctaWNvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInAge1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICBvcGFjaXR5OiAxO1xufVxuXG5pb24tYnV0dG9uIHtcbiAgZm9udC1zaXplOiAxZW07XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luOiA1cHg7XG4gIC0tYmFja2dyb3VuZDogbm9uZTtcbiAgLS1jb2xvcjogIzIxY2U5OTtcbiAgLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xuICAtLWJvcmRlci1jb2xvcjogIzIxY2U5OTtcbiAgLS1ib3JkZXItd2lkdGg6IDJweDtcbn1cblxuLm5vdC1nb2luZyB7XG4gIC0tY29sb3I6ICNlNDQwNWY7XG4gIC0tYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgLS1ib3JkZXItY29sb3I6ICNlNDQwNWY7XG4gIC0tYm9yZGVyLXdpZHRoOiAycHg7XG59XG5cbi5ldmVudC1kZXRhaWxze1xuICAtLWNvbG9yOiAjOTk5O1xuICAtLWJvcmRlci1zdHlsZTogc29saWQ7XG4gIC0tYm9yZGVyLWNvbG9yOiAjOTk5O1xuICAtLWJvcmRlci13aWR0aDogMnB4O1xufVxuXG4iLCJwIHtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgb3BhY2l0eTogMTtcbn1cblxuaW9uLWJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBmb250LXdlaWdodDogODAwO1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbjogNXB4O1xuICAtLWJhY2tncm91bmQ6IG5vbmU7XG4gIC0tY29sb3I6ICMyMWNlOTk7XG4gIC0tYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgLS1ib3JkZXItY29sb3I6ICMyMWNlOTk7XG4gIC0tYm9yZGVyLXdpZHRoOiAycHg7XG59XG5cbi5ub3QtZ29pbmcge1xuICAtLWNvbG9yOiAjZTQ0MDVmO1xuICAtLWJvcmRlci1zdHlsZTogc29saWQ7XG4gIC0tYm9yZGVyLWNvbG9yOiAjZTQ0MDVmO1xuICAtLWJvcmRlci13aWR0aDogMnB4O1xufVxuXG4uZXZlbnQtZGV0YWlscyB7XG4gIC0tY29sb3I6ICM5OTk7XG4gIC0tYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgLS1ib3JkZXItY29sb3I6ICM5OTk7XG4gIC0tYm9yZGVyLXdpZHRoOiAycHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/going-icon/going-icon.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/going-icon/going-icon.component.ts ***!
  \***************************************************************/
/*! exports provided: GoingIconComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoingIconComponent", function() { return GoingIconComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
/* harmony import */ var _services_events_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/events.service */ "./src/app/services/events.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/profile.service */ "./src/app/services/profile.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_favorites_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/favorites.service */ "./src/app/services/favorites.service.ts");








let GoingIconComponent = class GoingIconComponent {
    constructor(events, favs, toast, router, profile) {
        this.events = events;
        this.favs = favs;
        this.toast = toast;
        this.router = router;
        this.profile = profile;
        this.going = false;
        this.goingState = 'not-going';
        this.iconName = 'add-circle-outline';
    }
    ngOnInit() {
        // Get the User's details
        this.profile.getUserDetails().subscribe(details => {
            this.userEmail = details['email'];
            this.events = details['eventsGoing'];
        });
    }
    toggleGoingState(event) {
        if (this.goingState === 'not-going') {
            this.goingState = 'going';
            this.iconName = 'close-circle-outline';
            this.going = true;
            this.goingToast();
            console.log(`Going to event, ${event.title}`);
            this.events.getEvents();
        }
        else {
            this.goingState = 'not-going';
            this.iconName = 'add-circle-outline';
            this.going = false;
            this.notGoingToast();
            console.log('No longer going to Event');
            // this.events.notGoingToEvent(event._id, this.userEmail, this.id).subscribe();
        }
    }
    goingToast() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toast.create({
                message: 'You are going to this event.',
                duration: 2000
            });
            toast.present();
        });
    }
    notGoingToast() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toast.create({
                message: 'You are no longer going to this event.',
                duration: 2000
            });
            toast.present();
        });
    }
    eventPage(event) {
        // tslint:disable-next-line: max-line-length
        this.router.navigate(['/home/events/events-page', event._id, event.title, event.addressOne, event.addressOne, event.city, event.state, event.zip, event.dateCreated, event.date, event.time, event.photo, event.description]);
    }
};
GoingIconComponent.ctorParameters = () => [
    { type: _services_events_service__WEBPACK_IMPORTED_MODULE_3__["EventsService"] },
    { type: src_app_services_favorites_service__WEBPACK_IMPORTED_MODULE_7__["FavoritesService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_5__["ProfileService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], GoingIconComponent.prototype, "event", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], GoingIconComponent.prototype, "userEmail", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], GoingIconComponent.prototype, "id", void 0);
GoingIconComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-going-icon',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./going-icon.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/going-icon/going-icon.component.html")).default,
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('going', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('going', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                    color: 'blue',
                    opacity: '0.4',
                    transition: '0.5s',
                    transform: 'scale(0.9)'
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('not-going', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                    color: '#21ce99',
                    opacity: '1',
                    transition: '0.5s',
                    transform: 'scale(1)'
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('not-going <=> going', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('100ms ease-out'))
            ])
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./going-icon.component.scss */ "./src/app/components/going-icon/going-icon.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_events_service__WEBPACK_IMPORTED_MODULE_3__["EventsService"],
        src_app_services_favorites_service__WEBPACK_IMPORTED_MODULE_7__["FavoritesService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
        src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_5__["ProfileService"]])
], GoingIconComponent);



/***/ }),

/***/ "./src/app/components/not-going-icon/not-going-icon.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/components/not-going-icon/not-going-icon.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbm90LWdvaW5nLWljb24vbm90LWdvaW5nLWljb24uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/components/not-going-icon/not-going-icon.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/not-going-icon/not-going-icon.component.ts ***!
  \***********************************************************************/
/*! exports provided: NotGoingIconComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotGoingIconComponent", function() { return NotGoingIconComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
/* harmony import */ var _services_events_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/events.service */ "./src/app/services/events.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





let NotGoingIconComponent = class NotGoingIconComponent {
    constructor(events, toast) {
        this.events = events;
        this.toast = toast;
        this.notGoingState = 'not-going';
        this.iconName = 'add-circle';
    }
    ngOnInit() { }
    toggleNotGoingState(event) {
        if (this.notGoingState === 'not-going') {
            this.notGoingState = 'going';
            this.iconName = 'close-circle-outline';
            this.goingToast();
            console.log(`Going to event, ${event.title}`);
            this.events.goingToEvent(event._id, this.userEmail, this.id).subscribe();
        }
        else {
            this.notGoingState = 'not-not-going';
            this.iconName = 'add-circle-outline';
            this.notGoingToast();
            console.log('No longer going to Event');
            this.events.notGoingToEvent(event._id, this.userEmail, this.id).subscribe();
        }
    }
    goingToast() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toast.create({
                message: 'You are going to this event.',
                duration: 2000
            });
            toast.present();
        });
    }
    notGoingToast() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toast.create({
                message: 'You are no longer going to this event.',
                duration: 2000
            });
            toast.present();
        });
    }
};
NotGoingIconComponent.ctorParameters = () => [
    { type: _services_events_service__WEBPACK_IMPORTED_MODULE_3__["EventsService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], NotGoingIconComponent.prototype, "event", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], NotGoingIconComponent.prototype, "userEmail", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], NotGoingIconComponent.prototype, "id", void 0);
NotGoingIconComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-not-going-icon',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./not-going-icon.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/not-going-icon/not-going-icon.component.html")).default,
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('notGoing', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('not-going', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                    color: '#e4405f',
                    opacity: '0.4',
                    transition: '0.5s',
                    transform: 'scale(0.9)'
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('not-not-going', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                    color: '#21ce99',
                    opacity: '1',
                    transition: '0.5s',
                    transform: 'scale(1)'
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('not-going <=> ot-not-going', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('100ms ease-out'))
            ])
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./not-going-icon.component.scss */ "./src/app/components/not-going-icon/not-going-icon.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_events_service__WEBPACK_IMPORTED_MODULE_3__["EventsService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]])
], NotGoingIconComponent);



/***/ }),

/***/ "./src/app/pages/events/events-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/events/events-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: EventsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsPageRoutingModule", function() { return EventsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _events_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./events.page */ "./src/app/pages/events/events.page.ts");




const routes = [
    {
        path: '',
        component: _events_page__WEBPACK_IMPORTED_MODULE_3__["EventsPage"]
    },
    {
        path: 'events-page/:id/:title/:addressOne/:addressTwo/:city/:state/:zip/:dateCreated/:date/:time/:photo/:description',
        loadChildren: () => __webpack_require__.e(/*! import() | events-page-events-page-module */ "events-page-events-page-module").then(__webpack_require__.bind(null, /*! ./events-page/events-page.module */ "./src/app/pages/events/events-page/events-page.module.ts")).then(m => m.EventsPagePageModule)
    },
    {
        path: 'going',
        loadChildren: () => __webpack_require__.e(/*! import() | going-going-module */ "going-going-module").then(__webpack_require__.bind(null, /*! ./going/going.module */ "./src/app/pages/events/going/going.module.ts")).then(m => m.GoingPageModule)
    }
];
let EventsPageRoutingModule = class EventsPageRoutingModule {
};
EventsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EventsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/events/events.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/events/events.module.ts ***!
  \***********************************************/
/*! exports provided: EventsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsPageModule", function() { return EventsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _events_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./events-routing.module */ "./src/app/pages/events/events-routing.module.ts");
/* harmony import */ var _events_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./events.page */ "./src/app/pages/events/events.page.ts");
/* harmony import */ var _components_going_icon_going_icon_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/going-icon/going-icon.component */ "./src/app/components/going-icon/going-icon.component.ts");
/* harmony import */ var _components_not_going_icon_not_going_icon_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/not-going-icon/not-going-icon.component */ "./src/app/components/not-going-icon/not-going-icon.component.ts");










let EventsPageModule = class EventsPageModule {
};
EventsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _events_routing_module__WEBPACK_IMPORTED_MODULE_6__["EventsPageRoutingModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([{ path: '', component: _events_page__WEBPACK_IMPORTED_MODULE_7__["EventsPage"] }])
        ],
        declarations: [
            _events_page__WEBPACK_IMPORTED_MODULE_7__["EventsPage"],
            _components_going_icon_going_icon_component__WEBPACK_IMPORTED_MODULE_8__["GoingIconComponent"],
            _components_not_going_icon_not_going_icon_component__WEBPACK_IMPORTED_MODULE_9__["NotGoingIconComponent"]
        ]
    })
], EventsPageModule);



/***/ }),

/***/ "./src/app/pages/events/events.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/events/events.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  --background: none;\n}\n\nion-card {\n  margin-bottom: 100px;\n}\n\nion-button {\n  color: #005191;\n  --background: white;\n  font-size: 15px;\n  height: 45px;\n  border-radius: 5px;\n}\n\nion-icon {\n  color: red;\n  font-size: 25px;\n  position: relative;\n  right: 5px;\n}\n\nion-searchbar {\n  --background: white;\n  border-radius: 5px;\n  --height: 60px;\n  --box-shadow: none;\n  --cancel-button-color: #005191;\n  --clear-button-color: #005191;\n  --placeholder-opacity: 0.5;\n  --icon-color: #005191;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n  padding: 5px;\n}\n\n.job-section {\n  height: 230px;\n  color: #777;\n  position: relative;\n  top: 20px;\n  width: 100%;\n}\n\nh6, p {\n  display: block;\n}\n\n--ion-buttons {\n  --color: #888;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mZXJyby9EZXNrdG9wL1VuaXRlZC1XYXkvTW9iaWxlL3NyYy9hcHAvcGFnZXMvZXZlbnRzL2V2ZW50cy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2V2ZW50cy9ldmVudHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7QUNDRjs7QURFQTtFQUNFLG9CQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBO0VBQ0EsNkJBQUE7RUFDQSwwQkFBQTtFQUNBLHFCQUFBO0VBQ0Esd0JBQUE7RUFBQSxnQkFBQTtFQUNBLFlBQUE7QUNDRjs7QURJQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQ0RGOztBRElBO0VBQ0UsY0FBQTtBQ0RGOztBRElBO0VBQ0UsYUFBQTtBQ0RGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZXZlbnRzL2V2ZW50cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogbm9uZTtcbn1cblxuaW9uLWNhcmQge1xuICBtYXJnaW4tYm90dG9tOiAxMDBweDtcbn1cblxuaW9uLWJ1dHRvbiB7XG4gIGNvbG9yOiAjMDA1MTkxO1xuICAtLWJhY2tncm91bmQ6IHdoaXRlO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGhlaWdodDogNDVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG5pb24taWNvbiB7XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICByaWdodDogNXB4O1xufVxuXG5pb24tc2VhcmNoYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAtLWhlaWdodDogNjBweDtcbiAgLS1ib3gtc2hhZG93OiBub25lO1xuICAtLWNhbmNlbC1idXR0b24tY29sb3I6ICMwMDUxOTE7XG4gIC0tY2xlYXItYnV0dG9uLWNvbG9yOiAjMDA1MTkxO1xuICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDAuNTtcbiAgLS1pY29uLWNvbG9yOiAjMDA1MTkxO1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICBwYWRkaW5nOiA1cHg7XG5cblxufVxuXG4uam9iLXNlY3Rpb24ge1xuICBoZWlnaHQ6IDIzMHB4O1xuICBjb2xvcjogIzc3NztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDIwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5oNiwgcCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4tLWlvbi1idXR0b25zIHtcbiAgLS1jb2xvcjogIzg4ODtcbn0iLCJpb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogbm9uZTtcbn1cblxuaW9uLWNhcmQge1xuICBtYXJnaW4tYm90dG9tOiAxMDBweDtcbn1cblxuaW9uLWJ1dHRvbiB7XG4gIGNvbG9yOiAjMDA1MTkxO1xuICAtLWJhY2tncm91bmQ6IHdoaXRlO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGhlaWdodDogNDVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG5pb24taWNvbiB7XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICByaWdodDogNXB4O1xufVxuXG5pb24tc2VhcmNoYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAtLWhlaWdodDogNjBweDtcbiAgLS1ib3gtc2hhZG93OiBub25lO1xuICAtLWNhbmNlbC1idXR0b24tY29sb3I6ICMwMDUxOTE7XG4gIC0tY2xlYXItYnV0dG9uLWNvbG9yOiAjMDA1MTkxO1xuICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDAuNTtcbiAgLS1pY29uLWNvbG9yOiAjMDA1MTkxO1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbi5qb2Itc2VjdGlvbiB7XG4gIGhlaWdodDogMjMwcHg7XG4gIGNvbG9yOiAjNzc3O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMjBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmg2LCBwIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi0taW9uLWJ1dHRvbnMge1xuICAtLWNvbG9yOiAjODg4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/events/events.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/events/events.page.ts ***!
  \*********************************************/
/*! exports provided: EventsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsPage", function() { return EventsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_events_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/events.service */ "./src/app/services/events.service.ts");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/profile.service */ "./src/app/services/profile.service.ts");







let EventsPage = class EventsPage {
    constructor(router, events, profile, toast, loading) {
        this.router = router;
        this.events = events;
        this.profile = profile;
        this.toast = toast;
        this.loading = loading;
        this.eventsGoingLength = 0;
        this.searching = false;
        this.noSearchInput = false;
    }
    ngAfterViewInit() {
        this.searchbar.getInputElement().then((searchbarInputElement) => {
            searchbarInputElement.style.boxShadow = "none";
        });
    }
    ngOnInit() {
        // Get the User's details
        this.profile.getUserDetails().subscribe(details => {
            this.id = details['_id'];
            this.userEmail = details['email'];
            this.events.eventsGoing$.next(details['eventsGoing']);
            this.events.eventsGoing$.subscribe(events => {
                this.eventsGoingLength = Object.values(events).length;
            });
            console.log('User id: ' + this.id);
            console.log('User email: ' + this.userEmail);
        });
        this.events.getEvents().subscribe(events => {
            // I am using two arrays for the same data to improve the loading of the data. As a User searches through the list events,
            // .
            console.log('Events that are intially loaded: ');
            console.log(events);
            this.allEvents = Object.values(events);
            this.allEventsLength = this.allEvents.length;
            this.allEvents.reverse();
            this.loadedAllEvents = Object.values(events);
            this.loadedAllEvents.reverse();
            for (const event of this.allEvents) {
                event.date = Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["format"])(new Date(event.date), 'MMMM dd, yyyy');
                event.time = Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["format"])(new Date(event.date), 'hh:mm a');
                event.dateCreated = Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["formatDistanceToNow"])(new Date(event.dateCreated), {
                    includeSeconds: true,
                    addSuffix: true
                });
            }
        });
    }
    eventPage(event) {
        // tslint:disable-next-line: max-line-length
        this.router.navigate(['/home/events/events-page', event._id, event.title, event.addressOne, event.addressOne, event.city, event.state, event.zip, event.dateCreated, event.date, event.time, event.photo, event.description]);
    }
    going() {
        this.router.navigate(['/home/events/going']);
    }
    filter($event) {
        this.initializeItems();
        let searchTerm = $event.detail.value;
        if (!searchTerm) {
            console.log('No results returned from Search');
            this.noSearchInput = true;
        }
        this.presentLoadingWithOptions();
        this.allEvents = this.allEvents.filter(currentEvents => {
            console.log(currentEvents);
            if (!currentEvents || !searchTerm) {
                console.log('No results from that search');
                this.noSearchInput = true;
            }
            if (currentEvents.title && searchTerm) {
                if (currentEvents.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1) {
                    console.log(currentEvents.title);
                    console.log((currentEvents));
                    this.searchTerm = searchTerm;
                    this.searching = true;
                    this.noSearchInput = false;
                    return true;
                }
                return false;
            }
            this.noSearchInput = true;
        });
        this.allEventsLength = this.allEvents.length;
        // If there are no matches with the searchTerm
        if (this.allEventsLength === 0) {
            console.log('No results from that search');
            this.searching = true;
            this.searchTerm = searchTerm;
            this.searchbar.getInputElement().then((searchbarInputElement) => {
                searchbarInputElement.value = '';
            });
            this.noSearchInput = true;
        }
    }
    initializeItems() {
        this.allEvents = this.loadedAllEvents;
    }
    presentLoadingWithOptions() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loading = yield this.loading.create({
                duration: 1000,
                message: 'Searching for Events...',
                translucent: true,
                cssClass: 'custom-class custom-loading'
            });
            return yield loading.present();
        });
    }
    doRefresh(event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.allEvents = [];
            yield this.events.getEvents().subscribe(events => {
                this.allEvents = Object.values(events);
                this.allEventsLength = this.allEvents.length;
                this.allEvents.reverse();
                this.searching = false;
                // Format Times
                for (const event of this.allEvents) {
                    event.date = Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["format"])(new Date(event.date), 'MMMM dd, yyyy');
                    event.dateCreated = Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["formatDistanceToNow"])(new Date(event.dateCreated), {
                        includeSeconds: true,
                        addSuffix: true
                    });
                    event.time = Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["format"])(new Date(event.date), 'hh:mm a');
                }
            });
            setTimeout(() => {
                event.target.complete();
                console.log('Events Refreshed');
            }, 2000);
            yield this.searchbar.getInputElement().then((searchbarInputElement) => {
                searchbarInputElement.value = '';
                this.noSearchInput = false;
            });
            yield console.log('Refreshing Events Page..');
        });
    }
};
EventsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_events_service__WEBPACK_IMPORTED_MODULE_3__["EventsService"] },
    { type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_6__["ProfileService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonSearchbar"], { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonSearchbar"])
], EventsPage.prototype, "searchbar", void 0);
EventsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-events',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./events.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/events/events.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./events.page.scss */ "./src/app/pages/events/events.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _services_events_service__WEBPACK_IMPORTED_MODULE_3__["EventsService"],
        src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_6__["ProfileService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"]])
], EventsPage);



/***/ }),

/***/ "./src/app/services/events.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/events.service.ts ***!
  \********************************************/
/*! exports provided: EventsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsService", function() { return EventsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/profile.service */ "./src/app/services/profile.service.ts");






let EventsService = class EventsService {
    constructor(http, profile) {
        this.http = http;
        this.profile = profile;
        this.eventsGoing$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]([]);
        this.BACKEND_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url;
    }
    getEvents() {
        console.log('Getting Events');
        return this.http.get(`${this.BACKEND_URL}/api/events`);
    }
    getEventsGoing(id) {
        return this.http.post(`${this.BACKEND_URL}/api/events/events-going`, { id });
    }
    goingToEvent(eventID, userEmail, id) {
        console.log(this.profile);
        return this.http.post(`${this.BACKEND_URL}/api/events/go-to-event`, { eventID, userEmail, id });
    }
    notGoingToEvent(eventID, userEmail, id) {
        return this.http.post(`${this.BACKEND_URL}/api/events/dont-go-to-event`, {
            userEmail,
            eventID,
            id
        });
    }
};
EventsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_5__["ProfileService"] }
];
EventsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
        src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_5__["ProfileService"]])
], EventsService);



/***/ })

}]);
//# sourceMappingURL=pages-events-events-module-es2015.js.map