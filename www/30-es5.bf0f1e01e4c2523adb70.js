function _defineProperties(n,l){for(var e=0;e<l.length;e++){var t=l[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}function _createClass(n,l,e){return l&&_defineProperties(n.prototype,l),e&&_defineProperties(n,e),n}function _classCallCheck(n,l){if(!(n instanceof l))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{"7CaW":function(n,l,e){"use strict";e.r(l);var t=e("8Y7J"),u=function n(){_classCallCheck(this,n)},o=e("pMnS"),r=e("oBZk"),a=e("ZZ/e"),i=e("s7LF"),s=e("mrSG"),c=e("lGQG"),b=function(){function n(l,e,t,u,o){_classCallCheck(this,n),this.router=l,this.formBuilder=e,this.auth=t,this.activatedRoute=u,this.toast=o,this.disabled=!0,this.code="",this.userEmail=""}return _createClass(n,[{key:"ngOnInit",value:function(){var n=this;this.enterCodeForm=this.formBuilder.group({code:["",[i.p.required,i.p.maxLength(6)]]}),this.userEmail=this.activatedRoute.snapshot.paramMap.get("email"),this.generateCode(6).then((function(l){console.log("Sent Email to ".concat(n.userEmail)),n.auth.sendEmailWithCode(l,n.userEmail)})),this.formOnChanges()}},{key:"formOnChanges",value:function(){var n=this;console.log(this.enterCodeForm),this.enterCodeForm.valueChanges.subscribe((function(l){console.log(l),l.code===n.code&&(console.log("codes match"),n.disabled=!1),l.code!==n.code&&(n.disabled=!0)}))}},{key:"generateCode",value:function(n){return s.b(this,void 0,void 0,regeneratorRuntime.mark((function l(){var e,t,u,o;return regeneratorRuntime.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:for(e="",u=(t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789").length,o=0;o<n;o++)e+=t.charAt(Math.floor(Math.random()*u));return l.abrupt("return",(console.log("Generated Code: "+e),this.code=e));case 4:case"end":return l.stop()}}),l,this)})))}},{key:"sendNewCode",value:function(){return s.b(this,void 0,void 0,regeneratorRuntime.mark((function n(){var l=this;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.generateCode(6).then((function(n){console.log("Data: "+n),l.auth.sendEmailWithCode(n,l.userEmail)}));case 2:return n.next=4,this.presentNewCodeToast(this.userEmail);case 4:case"end":return n.stop()}}),n,this)})))}},{key:"thankYouPage",value:function(){this.enterCodeForm.controls.code.value!==this.code&&(this.presentErrorToast(),console.log("Codes do not match")),console.log("Thank you page"),this.auth.register(),this.router.navigate(["/personal-info/profile-picture/upload-resume/login-credentials/enter-code/:email/thank-you-page"])}},{key:"presentErrorToast",value:function(){return s.b(this,void 0,void 0,regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.toast.create({message:"The codes do not match. Please try again.",duration:2e3,cssClass:"wrong-password-toast",keyboardClose:!0,position:"top"});case 2:n.sent.present();case 3:case"end":return n.stop()}}),n,this)})))}},{key:"presentNewCodeToast",value:function(n){return s.b(this,void 0,void 0,regeneratorRuntime.mark((function l(){return regeneratorRuntime.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,this.toast.create({message:"New Code sent to ".concat(n),duration:2e3,cssClass:"success-toast",keyboardClose:!0,position:"top"});case 2:l.sent.present();case 3:case"end":return l.stop()}}),l,this)})))}},{key:"cancel",value:function(){console.log("Sign up cancelled"),this.router.navigate([""])}}]),n}(),d=e("iInd"),h=t.zb({encapsulation:0,styles:[["ion-title[_ngcontent-%COMP%]{margin:0}.cancel-button[_ngcontent-%COMP%]{margin:0 10px}h6.text-header[_ngcontent-%COMP%]{margin:30px auto;padding:unset}.send-new-code[_ngcontent-%COMP%]{display:block;--background:none;color:#005191;--border-color:#005191;--border-width:1px;--border-style:solid;border:1px;width:150px;margin:50px auto;opacity:0;-webkit-animation:1s ease-out 5s forwards slide-from-right;animation:1s ease-out 5s forwards slide-from-right}span[_ngcontent-%COMP%]{font-weight:900;font-size:1em;color:#005191}@-webkit-keyframes slide-from-right{0%{transform:translateX(300px);opacity:0}100%{transform:translateX(0);opacity:1}}@keyframes slide-from-right{0%{transform:translateX(300px);opacity:0}100%{transform:translateX(0);opacity:1}}"]],data:{}});function p(n){return t.Vb(0,[(n()(),t.Bb(0,0,null,null,9,"ion-header",[["class","ion-hide-lg-up"]],null,null,null,r.cb,r.r)),t.Ab(1,49152,null,0,a.C,[t.j,t.p,t.F],null,null),(n()(),t.Bb(2,0,null,0,7,"ion-toolbar",[],null,null,null,r.vb,r.K)),t.Ab(3,49152,null,0,a.Db,[t.j,t.p,t.F],null,null),(n()(),t.Bb(4,0,null,0,2,"ion-title",[],null,null,null,r.ub,r.J)),t.Ab(5,49152,null,0,a.Bb,[t.j,t.p,t.F],null,null),(n()(),t.Tb(-1,0,["Enter Code"])),(n()(),t.Bb(7,0,null,0,2,"ion-button",[["class","cancel-button"],["slot","end"]],null,[[null,"click"]],(function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.cancel()&&t),t}),r.O,r.d)),t.Ab(8,49152,null,0,a.l,[t.j,t.p,t.F],null,null),(n()(),t.Tb(-1,0,[" Cancel "])),(n()(),t.Bb(10,0,null,null,49,"ion-content",[],null,null,null,r.W,r.l)),t.Ab(11,49152,null,0,a.v,[t.j,t.p,t.F],null,null),(n()(),t.Bb(12,0,null,0,47,"ion-grid",[["class","ion-text-center"]],null,null,null,r.bb,r.q)),t.Ab(13,49152,null,0,a.B,[t.j,t.p,t.F],null,null),(n()(),t.Bb(14,0,null,0,10,"ion-row",[["class","ion-hide-md-down"],["style","margin: 5% 0% 3% 0%;"]],null,null,null,r.kb,r.z)),t.Ab(15,49152,null,0,a.kb,[t.j,t.p,t.F],null,null),(n()(),t.Bb(16,0,null,0,3,"ion-col",[["offset","2.5"],["size","2.5"]],null,null,null,r.V,r.k)),t.Ab(17,49152,null,0,a.u,[t.j,t.p,t.F],{offset:[0,"offset"],size:[1,"size"]},null),(n()(),t.Bb(18,0,null,0,1,"h1",[],null,null,null,null,null)),(n()(),t.Tb(-1,null,["Enter Code"])),(n()(),t.Bb(20,0,null,0,4,"ion-col",[["push","2.5"],["size","2"]],null,null,null,r.V,r.k)),t.Ab(21,49152,null,0,a.u,[t.j,t.p,t.F],{push:[0,"push"],size:[1,"size"]},null),(n()(),t.Bb(22,0,null,0,2,"ion-button",[["class","back-button"]],null,[[null,"click"]],(function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.cancel()&&t),t}),r.O,r.d)),t.Ab(23,49152,null,0,a.l,[t.j,t.p,t.F],null,null),(n()(),t.Tb(-1,0,[" Cancel "])),(n()(),t.Bb(25,0,null,0,4,"ion-row",[["class","ion-justify-content-center ion-hide-md-down"]],null,null,null,r.kb,r.z)),t.Ab(26,49152,null,0,a.kb,[t.j,t.p,t.F],null,null),(n()(),t.Bb(27,0,null,0,2,"ion-col",[["size","10"]],null,null,null,r.V,r.k)),t.Ab(28,49152,null,0,a.u,[t.j,t.p,t.F],{size:[0,"size"]},null),(n()(),t.Bb(29,0,null,0,0,"hr",[["style","background-color: #00000044;"]],null,null,null,null,null)),(n()(),t.Bb(30,0,null,0,29,"ion-row",[["class","ion-justify-content-center"]],null,null,null,r.kb,r.z)),t.Ab(31,49152,null,0,a.kb,[t.j,t.p,t.F],null,null),(n()(),t.Bb(32,0,null,0,27,"ion-col",[["size-lg","6"],["size-md","8"],["size-xs","11"]],null,null,null,r.V,r.k)),t.Ab(33,49152,null,0,a.u,[t.j,t.p,t.F],null,null),(n()(),t.Bb(34,0,null,0,3,"h6",[["class","text-header"]],null,null,null,null,null)),(n()(),t.Tb(-1,null,["Please enter the 6 character code that was sent to "])),(n()(),t.Bb(36,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),t.Tb(37,null,["",""])),(n()(),t.Bb(38,0,null,0,21,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],(function(n,l,e){var u=!0,o=n.component;return"submit"===l&&(u=!1!==t.Nb(n,40).onSubmit(e)&&u),"reset"===l&&(u=!1!==t.Nb(n,40).onReset()&&u),"ngSubmit"===l&&(u=!1!==o.thankYouPage()&&u),u}),null,null)),t.Ab(39,16384,null,0,i.t,[],null,null),t.Ab(40,540672,null,0,i.d,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),t.Qb(2048,null,i.a,null,[i.d]),t.Ab(42,16384,null,0,i.l,[[4,i.a]],null,null),(n()(),t.Bb(43,0,null,null,16,"ion-list",[["class","line-input"]],null,null,null,r.hb,r.w)),t.Ab(44,49152,null,0,a.P,[t.j,t.p,t.F],null,null),(n()(),t.Bb(45,0,null,0,8,"ion-item",[],null,null,null,r.fb,r.u)),t.Ab(46,49152,null,0,a.I,[t.j,t.p,t.F],null,null),(n()(),t.Bb(47,0,null,0,6,"ion-input",[["formControlName","code"],["placeholder","enter code"],["type","email"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(n,l,e){var u=!0;return"ionBlur"===l&&(u=!1!==t.Nb(n,48)._handleBlurEvent(e.target)&&u),"ionChange"===l&&(u=!1!==t.Nb(n,48)._handleInputEvent(e.target)&&u),u}),r.eb,r.t)),t.Ab(48,16384,null,0,a.Pb,[t.p],null,null),t.Qb(1024,null,i.i,(function(n){return[n]}),[a.Pb]),t.Ab(50,671744,null,0,i.c,[[3,i.a],[8,null],[8,null],[6,i.i],[2,i.s]],{name:[0,"name"]},null),t.Qb(2048,null,i.j,null,[i.c]),t.Ab(52,16384,null,0,i.k,[[4,i.j]],null,null),t.Ab(53,49152,null,0,a.H,[t.j,t.p,t.F],{placeholder:[0,"placeholder"],type:[1,"type"]},null),(n()(),t.Bb(54,0,null,0,2,"ion-button",[["class","send-new-code"]],null,[[null,"click"]],(function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.sendNewCode()&&t),t}),r.O,r.d)),t.Ab(55,49152,null,0,a.l,[t.j,t.p,t.F],null,null),(n()(),t.Tb(-1,0,[" Send new code "])),(n()(),t.Bb(57,0,null,0,2,"ion-button",[["class","orange-button"],["type","submit"]],null,null,null,r.O,r.d)),t.Ab(58,49152,null,0,a.l,[t.j,t.p,t.F],{disabled:[0,"disabled"],type:[1,"type"]},null),(n()(),t.Tb(-1,0,[" ENTER CODE "]))],(function(n,l){var e=l.component;n(l,17,0,"2.5","2.5"),n(l,21,0,"2.5","2"),n(l,28,0,"10"),n(l,40,0,e.enterCodeForm),n(l,50,0,"code"),n(l,53,0,"enter code","email"),n(l,58,0,e.disabled,"submit")}),(function(n,l){n(l,37,0,l.component.userEmail),n(l,38,0,t.Nb(l,42).ngClassUntouched,t.Nb(l,42).ngClassTouched,t.Nb(l,42).ngClassPristine,t.Nb(l,42).ngClassDirty,t.Nb(l,42).ngClassValid,t.Nb(l,42).ngClassInvalid,t.Nb(l,42).ngClassPending),n(l,47,0,t.Nb(l,52).ngClassUntouched,t.Nb(l,52).ngClassTouched,t.Nb(l,52).ngClassPristine,t.Nb(l,52).ngClassDirty,t.Nb(l,52).ngClassValid,t.Nb(l,52).ngClassInvalid,t.Nb(l,52).ngClassPending)}))}var g=t.xb("app-enter-code",b,(function(n){return t.Vb(0,[(n()(),t.Bb(0,0,null,null,1,"app-enter-code",[],null,null,null,p,h)),t.Ab(1,114688,null,0,b,[d.m,i.b,c.a,d.a,a.Qb],null,null)],(function(n,l){n(l,1,0)}),null)}),{},{},[]),m=e("SVse"),f=function(){return e.e(34).then(e.bind(null,"yNHi")).then((function(n){return n.ThankYouPageModuleNgFactory}))},C=function n(){_classCallCheck(this,n)};e.d(l,"EnterCodePageModuleNgFactory",(function(){return k}));var k=t.yb(u,[],(function(n){return t.Kb([t.Lb(512,t.m,t.jb,[[8,[o.a,g]],[3,t.m],t.D]),t.Lb(4608,m.l,m.k,[t.z,[2,m.s]]),t.Lb(4608,i.r,i.r,[]),t.Lb(4608,a.c,a.c,[t.F,t.g]),t.Lb(4608,a.Ib,a.Ib,[a.c,t.m,t.w]),t.Lb(4608,a.Mb,a.Mb,[a.c,t.m,t.w]),t.Lb(4608,i.b,i.b,[]),t.Lb(1073742336,m.c,m.c,[]),t.Lb(1073742336,i.q,i.q,[]),t.Lb(1073742336,i.e,i.e,[]),t.Lb(1073742336,a.Fb,a.Fb,[]),t.Lb(1073742336,i.n,i.n,[]),t.Lb(1073742336,d.q,d.q,[[2,d.v],[2,d.m]]),t.Lb(1073742336,C,C,[]),t.Lb(1073742336,u,u,[]),t.Lb(1024,d.k,(function(){return[[{path:"",component:b},{path:"thank-you-page",loadChildren:f}]]}),[])])}))}}]);