function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,n){for(var t=0;t<n.length;t++){var l=n[t];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}function _createClass(e,n,t){return n&&_defineProperties(e.prototype,n),t&&_defineProperties(e,t),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{Aso2:function(e,n,t){"use strict";t.d(n,"a",(function(){return m}));var l=t("mrSG"),r=(t("EThc"),t("ZZ/e")),o=t("lGQG"),s=t("2Vo4"),a=t("JIr8"),i=t("vkgz"),u=t("AytR"),c=t("8Y7J"),b=t("IheW"),h=t("xgBC"),d=t("gFH1"),p=t("iInd"),m=function(){var e=function(){function e(n,t,l,r,o,a,i){_classCallCheck(this,e),this.http=n,this.storage=t,this.alertController=l,this.helper=r,this.auth=o,this.router=a,this.toastController=i,this.BACKEND_URL=u.a.url,this.activeEmail="",this.user={},this.fullName=new s.a(""),this.addressOne=new s.a(""),this.addressTwo=new s.a(""),this.phone=new s.a(""),this.city=new s.a(""),this.state=new s.a(""),this.zip=new s.a(""),this.gender=new s.a(""),this.dob=new s.a(""),this.school=new s.a(""),this.grade=new s.a(""),this.profilePicture=new s.a(""),this.resume=new s.a(""),this.email=new s.a(""),this.activeEmail=this.auth.user.email}return _createClass(e,[{key:"getUserDetails",value:function(){return this.http.post("".concat(this.BACKEND_URL,"/api/home/user"),{email:this.activeEmail})}},{key:"changeEmail",value:function(e,n,t){var l=this;return this.http.post("".concat(this.BACKEND_URL,"/api/home/user/change-email"),{oldEmail:this.activeEmail,email:n,password:t}).pipe(Object(a.a)((function(e){throw l.presentFailToast(l.activeEmail),new Error(e)}))).subscribe((function(e){if(!0!==e)return l.presentFailToast(l.activeEmail),console.log("Passwords dont match");l.email.next(n),l.activeEmail=n,l.router.navigate(["/home/profile"]),l.presentSuccessToast()}))}},{key:"presentSuccessToast",value:function(){this.toastController.create({message:"Your Email address has been updated.",duration:3e3,cssClass:"updated-toast",keyboardClose:!0,position:"bottom"}).then((function(e){return e.present()}))}},{key:"presentFailToast",value:function(e){this.toastController.create({message:"Password and Email combination do not work. Make sure that your password is correct, and that your new email is different from your current email address of ".concat(e),duration:9e3,cssClass:"wrong-password-toast",keyboardClose:!0,position:"top"}).then((function(e){return e.present()}))}},{key:"changePassword",value:function(e,n,t,r){return l.b(this,void 0,void 0,regeneratorRuntime.mark((function l(){var o=this;return regeneratorRuntime.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,this.http.post("".concat(this.BACKEND_URL,"/api/home/user/change-password"),{oldPassword:n,email:e,newPassword:t,reTypeNewPassword:r}).subscribe((function(e){!0===e?(console.log("TRUE"),o.router.navigate([""]),o.toastController.create({message:"Password updated. Please login with your new password.",duration:3e3,cssClass:"updated-toast",keyboardClose:!0,position:"bottom"}).then((function(e){return e.present()}))):console.log("Passwords dont match!")}));case 2:return l.abrupt("return",l.sent);case 3:case"end":return l.stop()}}),l,this)})))}},{key:"changePhone",value:function(e,n,t){return l.b(this,void 0,void 0,regeneratorRuntime.mark((function l(){var r=this;return regeneratorRuntime.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,this.http.post("".concat(this.BACKEND_URL,"/api/home/user/change-phone"),{newNumber:n,password:t,email:e}).subscribe((function(e){!0===e?(console.log("Changing phone number..."),r.phone.next(n),r.router.navigate(["/home/profile"]),r.toastController.create({message:"Your phone number has been updated.",duration:3e3,cssClass:"updated-toast",keyboardClose:!0,position:"bottom"}).then((function(e){return e.present()}))):(console.log("Passwords dont match!"),r.toastController.create({message:"Password was incorrect",duration:3e3,cssClass:"wrong-password-toast",keyboardClose:!0,position:"top"}).then((function(e){return e.present()})))}));case 2:return l.abrupt("return",l.sent);case 3:case"end":return l.stop()}}),l,this)})))}},{key:"changeAddress",value:function(e,n,t,r,o,s,u){return l.b(this,void 0,void 0,regeneratorRuntime.mark((function l(){var c=this;return regeneratorRuntime.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,this.http.post("".concat(this.BACKEND_URL,"/api/home/user/change-address"),{email:e,addressOne:n,addressTwo:t,city:r,state:o,zip:s,password:u}).pipe(Object(i.a)((function(e){e||console.log("There was no response. There might be a bad password")})),Object(a.a)((function(e){throw new Error(e)}))).subscribe((function(e){if(!0!==e)return c.toastController.create({message:"Please make sure your password is correct",duration:3e3,cssClass:"wrong-password-toast",keyboardClose:!0,position:"top"}).then((function(e){return e.present()})),console.log("Passwords dont match");c.addressOne.next(n),c.addressTwo.next(t),c.city.next(r),c.state.next(o),c.zip.next(s),c.router.navigate(["/home/profile"]),c.toastController.create({message:"Your address has been updated.",duration:3e3,cssClass:"updated-toast",keyboardClose:!0,position:"bottom"}).then((function(e){return e.present()}))}));case 2:return l.abrupt("return",l.sent);case 3:case"end":return l.stop()}}),l,this)})))}},{key:"changeSchool",value:function(e,n,t,r){return l.b(this,void 0,void 0,regeneratorRuntime.mark((function l(){var o=this;return regeneratorRuntime.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,this.http.post("".concat(this.BACKEND_URL,"/api/home/user/change-school"),{email:e,newSchool:n,newGrade:t,password:r}).subscribe((function(e){if(!0!==e)return o.toastController.create({message:"Please make sure your password is correct",duration:3e3,cssClass:"wrong-password-toast",keyboardClose:!0,position:"top"}).then((function(e){return e.present()})),console.log("Passwords dont match");o.school.next(n),o.grade.next(t),o.router.navigate(["/home/profile"]),o.toastController.create({message:"Your school information has been updated.",duration:3e3,cssClass:"updated-toast",keyboardClose:!0,position:"bottom"}).then((function(e){return e.present()}))}));case 2:return l.abrupt("return",l.sent);case 3:case"end":return l.stop()}}),l,this)})))}},{key:"changeProfilePicture",value:function(e,n){return l.b(this,void 0,void 0,regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.http.post("".concat(this.BACKEND_URL,"/api/photo/change-profile-picture"),{imageForm:e,oldPhotoKey:n}).subscribe());case 1:case"end":return t.stop()}}),t,this)})))}},{key:"changeResume",value:function(e,n,t){return l.b(this,void 0,void 0,regeneratorRuntime.mark((function l(){var r=this;return regeneratorRuntime.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,this.http.post("".concat(this.BACKEND_URL,"/api/home/user/change-school"),{email:e,newResume:n,password:t}).subscribe((function(e){if(!0!==e)return console.log("Passwords dont match");console.log("Changing Resume..."),r.resume.next(n),r.router.navigate(["/home/user/change-school/:school/:grade/confirm"])}));case 2:return l.abrupt("return",l.sent);case 3:case"end":return l.stop()}}),l,this)})))}},{key:"delete",value:function(){console.log("Deleted User")}}]),e}();return e.ngInjectableDef=c.Yb({factory:function(){return new e(c.Zb(b.c),c.Zb(h.b),c.Zb(r.b),c.Zb(d.a),c.Zb(o.a),c.Zb(p.m),c.Zb(r.Qb))},token:e,providedIn:"root"}),e}()},"D+Au":function(e,n,t){"use strict";t.r(n);var l=t("8Y7J"),r=function e(){_classCallCheck(this,e)},o=t("pMnS"),s=t("oBZk"),a=t("ZZ/e"),i=t("s7LF"),u=t("mrSG"),c=t("Aso2"),b=t("+DJb"),h=function(){function e(n,t,l,r,o){_classCallCheck(this,e),this.profile=n,this.mentors=t,this.activatedRoute=l,this.formBuilder=r,this.router=o}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.contactMenorForm=this.formBuilder.group({message:["",i.p.required]}),console.log("Valid: ".concat(this.contactMenorForm.valid)),this.contactMenorForm.get("message").valueChanges.subscribe((function(n){console.log("Subscribed message: ".concat(n)),setTimeout((function(){e.messageValid=!!e.contactMenorForm.valid,console.log("Valid: ".concat(e.contactMenorForm.valid))}),100)})),this.message=this.contactMenorForm.value.message;var n=this.activatedRoute.snapshot.paramMap.get("id"),t=this.activatedRoute.snapshot.paramMap.get("email"),l=this.activatedRoute.snapshot.paramMap.get("name"),r=this.activatedRoute.snapshot.paramMap.get("photo");this.mentorId=n,this.mentorName=l,this.mentorEmail=t,this.mentorPhoto=r,this.userDetails()}},{key:"confirm",value:function(e){return u.b(this,void 0,void 0,regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.sendMessage(e);case 2:return n.next=4,this.router.navigate(["/home/mentors/mentor-page/:name/:title/:email/:description/:photo/:city/:state/contact-mentor/:name/:email/:photo/confirm",this.mentorName,this.mentorEmail,this.mentorPhoto]);case 4:case"end":return n.stop()}}),n,this)})))}},{key:"userDetails",value:function(){var e=this;this.profile.getUserDetails().subscribe((function(n){e.userEmail=n.email,e.userName=n.fullName,e.userCity=n.city,e.userState=n.state,e.userAge=n.age,e.userGrade=n.grade,e.userSchool=n.school,e.userProfilePicture=n.profilePicture,e.userResume=n.resume}))}},{key:"sendMessage",value:function(e){this.mentors.sendMentorAnEmail(e,this.mentorName,this.mentorEmail,this.userEmail,this.userName,this.userCity,this.userState,this.userAge,this.userGrade,this.userSchool,this.userProfilePicture,this.userResume).subscribe()}}]),e}(),d=t("iInd"),p=l.zb({encapsulation:0,styles:[["#mentor-photo[_ngcontent-%COMP%]{width:100px;height:100px;border-radius:100px;background-image:url(aaron.f86c39b72f781d0bdf72.jpg);background-repeat:no-repeat;background-size:contain;background-position:center;margin:35px auto 0;opacity:0;-webkit-animation:1s cubic-bezier(.175,.885,.32,1.275) 1s forwards slide-in-left;animation:1s cubic-bezier(.175,.885,.32,1.275) 1s forwards slide-in-left}#mentor-form[_ngcontent-%COMP%]{opacity:0;-webkit-animation:.8s cubic-bezier(.15,.85,.75,.9) 1.45s forwards slide-in-up;animation:.8s cubic-bezier(.15,.85,.75,.9) 1.45s forwards slide-in-up}ion-item[_ngcontent-%COMP%]{padding:20px 0;margin-bottom:90px;border-radius:5px;box-shadow:1px 1px 10px rgba(0,0,0,.1)}.orange-button[_ngcontent-%COMP%]{margin-bottom:30px;--background:#faa71b;-webkit-animation:.8s cubic-bezier(.15,.85,.75,.9) 1.9s forwards slide-in-up;animation:.8s cubic-bezier(.15,.85,.75,.9) 1.9s forwards slide-in-up}@-webkit-keyframes slide-in-left{0%{transform:translateX(-20px)}100%{opacity:1;transform:translateX(0)}}@keyframes slide-in-left{0%{transform:translateX(-20px)}100%{opacity:1;transform:translateX(0)}}@-webkit-keyframes slide-in-up{0%{transform:translateY(100px)}100%{opacity:1;transform:translateY(0)}}@keyframes slide-in-up{0%{transform:translateY(100px)}100%{opacity:1;transform:translateY(0)}}"]],data:{}});function m(e){return l.Vb(0,[(e()(),l.Bb(0,0,null,null,11,"ion-header",[["class","ion-hide-lg-up"]],null,null,null,s.cb,s.r)),l.Ab(1,49152,null,0,a.C,[l.j,l.p,l.F],null,null),(e()(),l.Bb(2,0,null,0,9,"ion-toolbar",[],null,null,null,s.vb,s.K)),l.Ab(3,49152,null,0,a.Db,[l.j,l.p,l.F],null,null),(e()(),l.Bb(4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,s.P,s.e)),l.Ab(5,49152,null,0,a.m,[l.j,l.p,l.F],null,null),(e()(),l.Bb(6,0,null,0,2,"ion-back-button",[],null,[[null,"click"]],(function(e,n,t){var r=!0;return"click"===n&&(r=!1!==l.Nb(e,8).onClick(t)&&r),r}),s.N,s.c)),l.Ab(7,49152,null,0,a.h,[l.j,l.p,l.F],null,null),l.Ab(8,16384,null,0,a.i,[[2,a.jb],a.Jb],null,null),(e()(),l.Bb(9,0,null,0,2,"ion-title",[],null,null,null,s.ub,s.J)),l.Ab(10,49152,null,0,a.Bb,[l.j,l.p,l.F],null,null),(e()(),l.Tb(-1,0,["Contact Mentor"])),(e()(),l.Bb(12,0,null,null,43,"ion-content",[],null,null,null,s.W,s.l)),l.Ab(13,49152,null,0,a.v,[l.j,l.p,l.F],null,null),(e()(),l.Bb(14,0,null,0,41,"ion-grid",[],null,null,null,s.bb,s.q)),l.Ab(15,49152,null,0,a.B,[l.j,l.p,l.F],null,null),(e()(),l.Bb(16,0,null,0,10,"ion-row",[["class","ion-hide-md-down"],["style","margin: 5% 0% 3% 0%;"]],null,null,null,s.kb,s.z)),l.Ab(17,49152,null,0,a.kb,[l.j,l.p,l.F],null,null),(e()(),l.Bb(18,0,null,0,3,"ion-col",[["offset","2.8"],["size","2.5"]],null,null,null,s.V,s.k)),l.Ab(19,49152,null,0,a.u,[l.j,l.p,l.F],{offset:[0,"offset"],size:[1,"size"]},null),(e()(),l.Bb(20,0,null,0,1,"h1",[],null,null,null,null,null)),(e()(),l.Tb(-1,null,["Contact Mentor"])),(e()(),l.Bb(22,0,null,0,4,"ion-col",[["push","2.6"],["size","2"]],null,null,null,s.V,s.k)),l.Ab(23,49152,null,0,a.u,[l.j,l.p,l.F],{push:[0,"push"],size:[1,"size"]},null),(e()(),l.Bb(24,0,null,0,2,"ion-back-button",[["class","back-button"],["style","--icon-font-size: 0px;"],["text","Back"]],null,[[null,"click"]],(function(e,n,t){var r=!0;return"click"===n&&(r=!1!==l.Nb(e,26).onClick(t)&&r),r}),s.N,s.c)),l.Ab(25,49152,null,0,a.h,[l.j,l.p,l.F],{text:[0,"text"]},null),l.Ab(26,16384,null,0,a.i,[[2,a.jb],a.Jb],null,null),(e()(),l.Bb(27,0,null,0,4,"ion-row",[["class","ion-justify-content-center ion-hide-md-down"]],null,null,null,s.kb,s.z)),l.Ab(28,49152,null,0,a.kb,[l.j,l.p,l.F],null,null),(e()(),l.Bb(29,0,null,0,2,"ion-col",[["size","8"]],null,null,null,s.V,s.k)),l.Ab(30,49152,null,0,a.u,[l.j,l.p,l.F],{size:[0,"size"]},null),(e()(),l.Bb(31,0,null,0,0,"hr",[["style","background-color: #999;"]],null,null,null,null,null)),(e()(),l.Bb(32,0,null,0,23,"ion-row",[["class","ion-justify-content-center"]],null,null,null,s.kb,s.z)),l.Ab(33,49152,null,0,a.kb,[l.j,l.p,l.F],null,null),(e()(),l.Bb(34,0,null,0,21,"ion-col",[["size-lg","8"],["size-md","8"],["size-sm","10"],["size-xs","11"]],null,null,null,s.V,s.k)),l.Ab(35,49152,null,0,a.u,[l.j,l.p,l.F],null,null),(e()(),l.Bb(36,0,null,0,0,"div",[["id","mentor-photo"]],null,null,null,null,null)),(e()(),l.Bb(37,0,null,0,18,"form",[["id","mentor-form"],["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],(function(e,n,t){var r=!0,o=e.component;return"submit"===n&&(r=!1!==l.Nb(e,39).onSubmit(t)&&r),"reset"===n&&(r=!1!==l.Nb(e,39).onReset()&&r),"ngSubmit"===n&&(r=!1!==o.confirm(o.contactMenorForm.value)&&r),r}),null,null)),l.Ab(38,16384,null,0,i.t,[],null,null),l.Ab(39,540672,null,0,i.d,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),l.Qb(2048,null,i.a,null,[i.d]),l.Ab(41,16384,null,0,i.l,[[4,i.a]],null,null),(e()(),l.Bb(42,0,null,null,10,"ion-item",[["lines","none"],["style","margin: 55px 0 55px 0"]],null,null,null,s.fb,s.u)),l.Ab(43,49152,null,0,a.I,[l.j,l.p,l.F],{lines:[0,"lines"]},null),(e()(),l.Bb(44,0,null,0,8,"ion-textarea",[["autogrow","true"],["formControlName","message"],["required",""],["rows","10"],["spellcheck","true"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"keydown.control.enter"],[null,"ionBlur"],[null,"ionChange"]],(function(e,n,t){var r=!0,o=e.component;return"ionBlur"===n&&(r=!1!==l.Nb(e,47)._handleBlurEvent(t.target)&&r),"ionChange"===n&&(r=!1!==l.Nb(e,47)._handleInputEvent(t.target)&&r),"keydown.control.enter"===n&&(r=!1!==(o.messageValid?o.confirm(o.contactMenorForm.value):null)&&r),r}),s.tb,s.I)),l.Ab(45,16384,null,0,i.o,[],{required:[0,"required"]},null),l.Qb(1024,null,i.h,(function(e){return[e]}),[i.o]),l.Ab(47,16384,null,0,a.Pb,[l.p],null,null),l.Qb(1024,null,i.i,(function(e){return[e]}),[a.Pb]),l.Ab(49,671744,null,0,i.c,[[3,i.a],[6,i.h],[8,null],[6,i.i],[2,i.s]],{name:[0,"name"]},null),l.Qb(2048,null,i.j,null,[i.c]),l.Ab(51,16384,null,0,i.k,[[4,i.j]],null,null),l.Ab(52,49152,null,0,a.zb,[l.j,l.p,l.F],{placeholder:[0,"placeholder"],required:[1,"required"],rows:[2,"rows"],spellcheck:[3,"spellcheck"]},null),(e()(),l.Bb(53,0,null,null,2,"ion-button",[["class","orange-button"],["expand","block"],["type","submit"]],null,null,null,s.O,s.d)),l.Ab(54,49152,null,0,a.l,[l.j,l.p,l.F],{disabled:[0,"disabled"],expand:[1,"expand"],type:[2,"type"]},null),(e()(),l.Tb(-1,0,[" Send "]))],(function(e,n){var t=n.component;e(n,19,0,"2.8","2.5"),e(n,23,0,"2.6","2"),e(n,25,0,"Back"),e(n,30,0,"8"),e(n,39,0,t.contactMenorForm),e(n,43,0,"none"),e(n,45,0,""),e(n,49,0,"message"),e(n,52,0,l.Fb(1,"Have a question for a ",t.mentorName,"? Send them an email!"),"","10","true"),e(n,54,0,!t.messageValid,"block","submit")}),(function(e,n){e(n,37,0,l.Nb(n,41).ngClassUntouched,l.Nb(n,41).ngClassTouched,l.Nb(n,41).ngClassPristine,l.Nb(n,41).ngClassDirty,l.Nb(n,41).ngClassValid,l.Nb(n,41).ngClassInvalid,l.Nb(n,41).ngClassPending),e(n,44,0,l.Nb(n,45).required?"":null,l.Nb(n,51).ngClassUntouched,l.Nb(n,51).ngClassTouched,l.Nb(n,51).ngClassPristine,l.Nb(n,51).ngClassDirty,l.Nb(n,51).ngClassValid,l.Nb(n,51).ngClassInvalid,l.Nb(n,51).ngClassPending)}))}var g=l.xb("app-contact-mentor",h,(function(e){return l.Vb(0,[(e()(),l.Bb(0,0,null,null,1,"app-contact-mentor",[],null,null,null,m,p)),l.Ab(1,114688,null,0,h,[c.a,b.a,d.a,i.b,d.m],null,null)],(function(e,n){e(n,1,0)}),null)}),{},{},[]),f=t("SVse"),w=function(){return t.e(44).then(t.bind(null,"VI/Y")).then((function(e){return e.ConfirmPageModuleNgFactory}))},v=function e(){_classCallCheck(this,e)};t.d(n,"ContactMentorPageModuleNgFactory",(function(){return k}));var k=l.yb(r,[],(function(e){return l.Kb([l.Lb(512,l.m,l.jb,[[8,[o.a,g]],[3,l.m],l.D]),l.Lb(4608,f.l,f.k,[l.z,[2,f.s]]),l.Lb(4608,i.r,i.r,[]),l.Lb(4608,i.b,i.b,[]),l.Lb(4608,a.c,a.c,[l.F,l.g]),l.Lb(4608,a.Ib,a.Ib,[a.c,l.m,l.w]),l.Lb(4608,a.Mb,a.Mb,[a.c,l.m,l.w]),l.Lb(1073742336,f.c,f.c,[]),l.Lb(1073742336,i.q,i.q,[]),l.Lb(1073742336,i.e,i.e,[]),l.Lb(1073742336,i.n,i.n,[]),l.Lb(1073742336,a.Fb,a.Fb,[]),l.Lb(1073742336,d.q,d.q,[[2,d.v],[2,d.m]]),l.Lb(1073742336,v,v,[]),l.Lb(1073742336,r,r,[]),l.Lb(1024,d.k,(function(){return[[{path:"",component:h},{path:"confirm/:name/:email/:phone",loadChildren:w}]]}),[])])}))}}]);