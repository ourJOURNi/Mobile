function _defineProperties(l,n){for(var e=0;e<n.length;e++){var u=n[e];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(l,u.key,u)}}function _createClass(l,n,e){return n&&_defineProperties(l.prototype,n),e&&_defineProperties(l,e),l}function _classCallCheck(l,n){if(!(l instanceof n))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{ioBU:function(l,n,e){"use strict";e.r(n);var u=e("8Y7J"),t=function l(){_classCallCheck(this,l)},i=e("pMnS"),a=e("SVse"),r=e("oBZk"),o=e("ZZ/e"),s=e("s7LF"),b=e("mrSG"),c=e("lGQG"),d=e("Aso2"),g=function(){function l(n,e,u,t,i,a){_classCallCheck(this,l),this.formBuilder=n,this.router=e,this.auth=u,this.toast=t,this.alertController=i,this.profile=a,this.activeEmail="",this.validationMessasges={email:[{type:"email",message:"Must be a valid email address"}],password:[{type:"pattern",message:"Password must be at least 6 characters with at least one lowercase character, one uppercase character, and one number."}]},this.activeEmail=this.profile.email.getValue(),console.log("Active Email: "+this.activeEmail)}return _createClass(l,[{key:"ngOnInit",value:function(){var l=this;this.changeEmail=this.formBuilder.group({email:["",[s.p.required,s.p.email]],password:["",s.p.compose([s.p.minLength(8),s.p.required,s.p.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$")])]}),this.changeEmail.valueChanges.subscribe((function(n){setTimeout((function(){l.formValid=!!l.changeEmail.valid}),100)}))}},{key:"back",value:function(){this.router.navigate(["/home/profile/edit-profile-page"])}},{key:"presentToast",value:function(){return b.b(this,void 0,void 0,regeneratorRuntime.mark((function l(){return regeneratorRuntime.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,this.toast.create({message:"There was an error with your password or email. Please try again.",duration:5e3,cssClass:"wrong-password-toast",keyboardClose:!0,position:"top"});case 2:l.sent.present();case 3:case"end":return l.stop()}}),l,this)})))}},{key:"presentAlert",value:function(){return b.b(this,void 0,void 0,regeneratorRuntime.mark((function l(){var n;return regeneratorRuntime.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,this.alertController.create({cssClass:"danger-alert",header:"Invalid Email",message:"New Email cannot be the same as the current one.",buttons:[{text:"OK"}]});case 2:return n=l.sent,l.next=5,n.present();case 5:case"end":return l.stop()}}),l,this)})))}},{key:"confirmChangedEmail",value:function(l,n){l==this.activeEmail?this.presentAlert():this.profile.changeEmail("eddie@gmail.com",l,n)}}]),l}(),m=e("iInd"),p=u.zb({encapsulation:0,styles:[["ion-title[_ngcontent-%COMP%]{margin:0}.blue-button[_ngcontent-%COMP%]{-webkit-animation:none;animation:none;opacity:unset}"]],data:{}});function h(l){return u.Vb(0,[(l()(),u.Bb(0,0,null,null,1,"div",[["class","error-message"]],null,null,null,null,null)),(l()(),u.Tb(1,null,[" "," "]))],null,(function(l,n){l(n,1,0,n.parent.context.$implicit.message)}))}function f(l){return u.Vb(0,[(l()(),u.Bb(0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),u.qb(16777216,null,null,1,null,h)),u.Ab(2,16384,null,0,a.j,[u.W,u.S],{ngIf:[0,"ngIf"]},null),(l()(),u.qb(0,null,null,0))],(function(l,n){var e=n.component;l(n,2,0,e.changeEmail.get("email").hasError(n.context.$implicit.type)&&(e.changeEmail.get("email").dirty||e.changeEmail.get("email").touched))}),null)}function v(l){return u.Vb(0,[(l()(),u.Bb(0,0,null,null,11,"ion-header",[["class","ion-hide-lg-up"]],null,null,null,r.cb,r.r)),u.Ab(1,49152,null,0,o.B,[u.j,u.p,u.F],null,null),(l()(),u.Bb(2,0,null,0,9,"ion-toolbar",[],null,null,null,r.vb,r.K)),u.Ab(3,49152,null,0,o.Cb,[u.j,u.p,u.F],null,null),(l()(),u.Bb(4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,r.P,r.e)),u.Ab(5,49152,null,0,o.l,[u.j,u.p,u.F],null,null),(l()(),u.Bb(6,0,null,0,2,"ion-back-button",[],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==u.Nb(l,8).onClick(e)&&t),t}),r.N,r.c)),u.Ab(7,49152,null,0,o.g,[u.j,u.p,u.F],null,null),u.Ab(8,16384,null,0,o.h,[[2,o.ib],o.Ib],null,null),(l()(),u.Bb(9,0,null,0,2,"ion-title",[],null,null,null,r.ub,r.J)),u.Ab(10,49152,null,0,o.Ab,[u.j,u.p,u.F],null,null),(l()(),u.Tb(-1,0,["Change Email"])),(l()(),u.Bb(12,0,null,null,61,"ion-content",[],null,null,null,r.W,r.l)),u.Ab(13,49152,null,0,o.u,[u.j,u.p,u.F],null,null),(l()(),u.Bb(14,0,null,0,59,"ion-grid",[["class","ion-text-center"],["fixed",""]],null,null,null,r.bb,r.q)),u.Ab(15,49152,null,0,o.A,[u.j,u.p,u.F],{fixed:[0,"fixed"]},null),(l()(),u.Bb(16,0,null,0,10,"ion-row",[["class","ion-hide-md-down"],["style","margin: 5% 0% 3% 0%;"]],null,null,null,r.kb,r.z)),u.Ab(17,49152,null,0,o.jb,[u.j,u.p,u.F],null,null),(l()(),u.Bb(18,0,null,0,3,"ion-col",[["offset","2.5"],["size","2.5"]],null,null,null,r.V,r.k)),u.Ab(19,49152,null,0,o.t,[u.j,u.p,u.F],{offset:[0,"offset"],size:[1,"size"]},null),(l()(),u.Bb(20,0,null,0,1,"h1",[],null,null,null,null,null)),(l()(),u.Tb(-1,null,["Change Email"])),(l()(),u.Bb(22,0,null,0,4,"ion-col",[["push","2.5"],["size","2"]],null,null,null,r.V,r.k)),u.Ab(23,49152,null,0,o.t,[u.j,u.p,u.F],{push:[0,"push"],size:[1,"size"]},null),(l()(),u.Bb(24,0,null,0,2,"ion-button",[["class","blue-button"]],null,[[null,"click"]],(function(l,n,e){var u=!0;return"click"===n&&(u=!1!==l.component.back()&&u),u}),r.O,r.d)),u.Ab(25,49152,null,0,o.k,[u.j,u.p,u.F],null,null),(l()(),u.Tb(-1,0,[" Back "])),(l()(),u.Bb(27,0,null,0,4,"ion-row",[["class","ion-justify-content-center ion-hide-md-down"]],null,null,null,r.kb,r.z)),u.Ab(28,49152,null,0,o.jb,[u.j,u.p,u.F],null,null),(l()(),u.Bb(29,0,null,0,2,"ion-col",[["size","10"]],null,null,null,r.V,r.k)),u.Ab(30,49152,null,0,o.t,[u.j,u.p,u.F],{size:[0,"size"]},null),(l()(),u.Bb(31,0,null,0,0,"hr",[["style","background-color: #00000044;"]],null,null,null,null,null)),(l()(),u.Bb(32,0,null,0,41,"ion-row",[["class","ion-justify-content-center"]],null,null,null,r.kb,r.z)),u.Ab(33,49152,null,0,o.jb,[u.j,u.p,u.F],null,null),(l()(),u.Bb(34,0,null,0,39,"ion-col",[["size-lg","6"],["size-md","8"],["size-sm","10"],["size-xs","11"]],null,null,null,r.V,r.k)),u.Ab(35,49152,null,0,o.t,[u.j,u.p,u.F],null,null),(l()(),u.Bb(36,0,null,0,1,"h6",[["class","text-header"],["style","width: unset;"]],null,null,null,null,null)),(l()(),u.Tb(37,null,["",""])),(l()(),u.Bb(38,0,null,0,35,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],(function(l,n,e){var t=!0,i=l.component;return"submit"===n&&(t=!1!==u.Nb(l,40).onSubmit(e)&&t),"reset"===n&&(t=!1!==u.Nb(l,40).onReset()&&t),"ngSubmit"===n&&(t=!1!==i.confirmChangedEmail(i.changeEmail.controls.email.value,i.changeEmail.controls.password.value)&&t),t}),null,null)),u.Ab(39,16384,null,0,s.t,[],null,null),u.Ab(40,540672,null,0,s.d,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),u.Qb(2048,null,s.a,null,[s.d]),u.Ab(42,16384,null,0,s.l,[[4,s.a]],null,null),(l()(),u.Bb(43,0,null,null,27,"ion-list",[["class","line-input"]],null,null,null,r.hb,r.w)),u.Ab(44,49152,null,0,o.O,[u.j,u.p,u.F],null,null),(l()(),u.Bb(45,0,null,0,10,"ion-item",[],null,null,null,r.fb,r.u)),u.Ab(46,49152,null,0,o.H,[u.j,u.p,u.F],null,null),(l()(),u.Bb(47,0,null,0,8,"ion-input",[["formControlName","email"],["placeholder","new email"],["required",""],["type","email"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"keyup.enter"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,e){var t=!0,i=l.component;return"ionBlur"===n&&(t=!1!==u.Nb(l,50)._handleBlurEvent(e.target)&&t),"ionChange"===n&&(t=!1!==u.Nb(l,50)._handleInputEvent(e.target)&&t),"keyup.enter"===n&&(t=!1!==(i.formValid?i.confirmChangedEmail(i.changeEmail.controls.email.value,i.changeEmail.controls.password.value):null)&&t),t}),r.eb,r.t)),u.Ab(48,16384,null,0,s.o,[],{required:[0,"required"]},null),u.Qb(1024,null,s.h,(function(l){return[l]}),[s.o]),u.Ab(50,16384,null,0,o.Ob,[u.p],null,null),u.Qb(1024,null,s.i,(function(l){return[l]}),[o.Ob]),u.Ab(52,671744,null,0,s.c,[[3,s.a],[6,s.h],[8,null],[6,s.i],[2,s.s]],{name:[0,"name"]},null),u.Qb(2048,null,s.j,null,[s.c]),u.Ab(54,16384,null,0,s.k,[[4,s.j]],null,null),u.Ab(55,49152,null,0,o.G,[u.j,u.p,u.F],{placeholder:[0,"placeholder"],required:[1,"required"],type:[2,"type"]},null),(l()(),u.Bb(56,0,null,0,2,"div",[["class","validation-errors"]],null,null,null,null,null)),(l()(),u.qb(16777216,null,null,1,null,f)),u.Ab(58,278528,null,0,a.i,[u.W,u.S,u.x],{ngForOf:[0,"ngForOf"]},null),(l()(),u.Bb(59,0,null,0,11,"ion-item",[],null,null,null,r.fb,r.u)),u.Ab(60,49152,null,0,o.H,[u.j,u.p,u.F],null,null),(l()(),u.Bb(61,0,null,0,9,"ion-input",[["formControlName","password"],["minlength","8"],["placeholder","password"],["required",""],["type","password"]],[[1,"required",0],[1,"minlength",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"keyup.enter"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,e){var t=!0,i=l.component;return"ionBlur"===n&&(t=!1!==u.Nb(l,65)._handleBlurEvent(e.target)&&t),"ionChange"===n&&(t=!1!==u.Nb(l,65)._handleInputEvent(e.target)&&t),"keyup.enter"===n&&(t=!1!==(i.formValid?i.confirmChangedEmail(i.changeEmail.controls.email.value,i.changeEmail.controls.password.value):null)&&t),t}),r.eb,r.t)),u.Ab(62,16384,null,0,s.o,[],{required:[0,"required"]},null),u.Ab(63,540672,null,0,s.g,[],{minlength:[0,"minlength"]},null),u.Qb(1024,null,s.h,(function(l,n){return[l,n]}),[s.o,s.g]),u.Ab(65,16384,null,0,o.Ob,[u.p],null,null),u.Qb(1024,null,s.i,(function(l){return[l]}),[o.Ob]),u.Ab(67,671744,null,0,s.c,[[3,s.a],[6,s.h],[8,null],[6,s.i],[2,s.s]],{name:[0,"name"]},null),u.Qb(2048,null,s.j,null,[s.c]),u.Ab(69,16384,null,0,s.k,[[4,s.j]],null,null),u.Ab(70,49152,null,0,o.G,[u.j,u.p,u.F],{minlength:[0,"minlength"],placeholder:[1,"placeholder"],required:[2,"required"],type:[3,"type"]},null),(l()(),u.Bb(71,0,null,null,2,"ion-button",[["class","orange-button"],["style","width: unset;"],["type","submit"]],null,null,null,r.O,r.d)),u.Ab(72,49152,null,0,o.k,[u.j,u.p,u.F],{disabled:[0,"disabled"],type:[1,"type"]},null),(l()(),u.Tb(-1,0,["CHANGE EMAIL"]))],(function(l,n){var e=n.component;l(n,15,0,""),l(n,19,0,"2.5","2.5"),l(n,23,0,"2.5","2"),l(n,30,0,"10"),l(n,40,0,e.changeEmail),l(n,48,0,""),l(n,52,0,"email"),l(n,55,0,"new email","","email"),l(n,58,0,e.validationMessasges.email),l(n,62,0,""),l(n,63,0,"8"),l(n,67,0,"password"),l(n,70,0,"8","password","","password"),l(n,72,0,!e.formValid,"submit")}),(function(l,n){l(n,37,0,n.component.activeEmail),l(n,38,0,u.Nb(n,42).ngClassUntouched,u.Nb(n,42).ngClassTouched,u.Nb(n,42).ngClassPristine,u.Nb(n,42).ngClassDirty,u.Nb(n,42).ngClassValid,u.Nb(n,42).ngClassInvalid,u.Nb(n,42).ngClassPending),l(n,47,0,u.Nb(n,48).required?"":null,u.Nb(n,54).ngClassUntouched,u.Nb(n,54).ngClassTouched,u.Nb(n,54).ngClassPristine,u.Nb(n,54).ngClassDirty,u.Nb(n,54).ngClassValid,u.Nb(n,54).ngClassInvalid,u.Nb(n,54).ngClassPending),l(n,61,0,u.Nb(n,62).required?"":null,u.Nb(n,63).minlength?u.Nb(n,63).minlength:null,u.Nb(n,69).ngClassUntouched,u.Nb(n,69).ngClassTouched,u.Nb(n,69).ngClassPristine,u.Nb(n,69).ngClassDirty,u.Nb(n,69).ngClassValid,u.Nb(n,69).ngClassInvalid,u.Nb(n,69).ngClassPending)}))}var C=u.xb("app-change-email",g,(function(l){return u.Vb(0,[(l()(),u.Bb(0,0,null,null,1,"app-change-email",[],null,null,null,v,p)),u.Ab(1,114688,null,0,g,[s.b,m.m,c.a,o.Pb,o.a,d.a],null,null)],(function(l,n){l(n,1,0)}),null)}),{},{},[]),y=function(){return e.e(53).then(e.bind(null,"D+Hy")).then((function(l){return l.ConfirmPageModuleNgFactory}))},A=function l(){_classCallCheck(this,l)};e.d(n,"ChangeEmailPageModuleNgFactory",(function(){return w}));var w=u.yb(t,[],(function(l){return u.Kb([u.Lb(512,u.m,u.jb,[[8,[i.a,C]],[3,u.m],u.D]),u.Lb(4608,a.l,a.k,[u.z,[2,a.s]]),u.Lb(4608,s.r,s.r,[]),u.Lb(4608,o.b,o.b,[u.F,u.g]),u.Lb(4608,o.Hb,o.Hb,[o.b,u.m,u.w]),u.Lb(4608,o.Lb,o.Lb,[o.b,u.m,u.w]),u.Lb(4608,s.b,s.b,[]),u.Lb(1073742336,a.c,a.c,[]),u.Lb(1073742336,s.q,s.q,[]),u.Lb(1073742336,s.e,s.e,[]),u.Lb(1073742336,o.Eb,o.Eb,[]),u.Lb(1073742336,s.n,s.n,[]),u.Lb(1073742336,m.q,m.q,[[2,m.v],[2,m.m]]),u.Lb(1073742336,A,A,[]),u.Lb(1073742336,t,t,[]),u.Lb(1024,m.k,(function(){return[[{path:"",component:g},{path:"confirm",loadChildren:y}]]}),[])])}))}}]);