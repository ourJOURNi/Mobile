(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{wQpE:function(n,l,s){"use strict";s.r(l);var u=s("8Y7J");class o{}var e=s("pMnS"),a=s("oBZk"),t=s("ZZ/e"),r=s("s7LF"),i=s("SVse"),b=s("mrSG"),d=s("lGQG"),c=s("AytR");class g{constructor(n,l,s,u,o){this.formBuilder=n,this.router=l,this.auth=s,this.activatedRoute=u,this.toast=o,this.BACKEND_URL=c.a.url,this.passwordsMatch=!1,this.validationMessasges={password:[{type:"password",message:"Please enter a valid password."}]}}ngOnInit(){this.newPasswordForm=this.formBuilder.group({newPassword:["",r.p.required],reTypeNewPassword:["",r.p.required]}),this.userEmail=this.activatedRoute.snapshot.paramMap.get("email"),console.log("Email: "+this.userEmail),this.formOnChanges()}formOnChanges(){console.log(this.newPasswordForm),this.newPasswordForm.valueChanges.subscribe(n=>{console.log(n),this.newPasswordForm.statusChanges.subscribe(n=>{console.log(n),"VALID"===n&&(console.log("you did it bruh"),this.passwordsMatch=!0)}),this.newPasswordForm.controls.newPassword.value===this.newPasswordForm.controls.reTypePassword.value&&this.newPasswordForm.controls.newPassword.touched&&console.log("Passwords Match"),this.newPasswordForm.controls.newPassword.value!==this.newPasswordForm.controls.reTypePassword.value&&(console.log("Passwords Match"),this.passwordsMatch=!1)})}goToConfirmPage(){return b.b(this,void 0,void 0,(function*(){const n=this.userEmail;let l=this.newPasswordForm.value.newPassword;if(l!==this.newPasswordForm.value.reTypeNewPassword)return this.presentToast(),console.log("passwords do not match");yield this.auth.forgotPassword(n,l),yield console.log("Going to Confirm Password Change Page"),yield this.router.navigate(["/enter-email/enter-code/:email/new-password/:email/confirm"])}))}presentToast(){return b.b(this,void 0,void 0,(function*(){(yield this.toast.create({message:"The two passwords you entered do not match. Please try again.",duration:2e3})).present()}))}cancel(){console.log("Forgotten password cancelled"),this.router.navigate([""])}}var w=s("iInd"),p=u.zb({encapsulation:0,styles:[["span[_ngcontent-%COMP%]{font-weight:900;font-size:1.2em;color:#005191}.badPassword[_ngcontent-%COMP%]{--background:none;opacity:0;-webkit-animation:1s ease-in .5s forwards password-icons;animation:1s ease-in .5s forwards password-icons}.badPassword[_ngcontent-%COMP%]:nth-child(2){--background:none;opacity:0;-webkit-animation:1s ease-in forwards password-icons;animation:1s ease-in forwards password-icons}.goodPassword[_ngcontent-%COMP%]{--background:none;opacity:0;-webkit-animation:1s ease-in .5s forwards password-icons;animation:1s ease-in .5s forwards password-icons}.goodPassword[_ngcontent-%COMP%]:nth-child(2){--background:none;opacity:0;-webkit-animation:1s ease-in forwards password-icons;animation:1s ease-in forwards password-icons}@-webkit-keyframes password-icons{0%{transform:translateX(50px)}100%{transform:translateX(0);opacity:1}}@keyframes password-icons{0%{transform:translateX(50px)}100%{transform:translateX(0);opacity:1}}"]],data:{}});function h(n){return u.Vb(0,[(n()(),u.Bb(0,0,null,null,3,"ion-button",[["class","badPassword"],["item-right",""]],null,null,null,a.O,a.d)),u.Ab(1,49152,null,0,t.k,[u.j,u.p,u.F],null,null),(n()(),u.Bb(2,0,null,0,1,"ion-icon",[["name","close"],["style","color: #FF443B;"]],null,null,null,a.db,a.s)),u.Ab(3,49152,null,0,t.C,[u.j,u.p,u.F],{name:[0,"name"]},null)],(function(n,l){n(l,3,0,"close")}),null)}function m(n){return u.Vb(0,[(n()(),u.Bb(0,0,null,null,3,"ion-button",[["class","goodPassword"],["item-right",""]],null,null,null,a.O,a.d)),u.Ab(1,49152,null,0,t.k,[u.j,u.p,u.F],null,null),(n()(),u.Bb(2,0,null,0,1,"ion-icon",[["name","checkmark"],["style","color: #21df82;"]],null,null,null,a.db,a.s)),u.Ab(3,49152,null,0,t.C,[u.j,u.p,u.F],{name:[0,"name"]},null)],(function(n,l){n(l,3,0,"checkmark")}),null)}function f(n){return u.Vb(0,[(n()(),u.Bb(0,0,null,null,3,"ion-button",[["class","badPassword"],["item-right",""]],null,null,null,a.O,a.d)),u.Ab(1,49152,null,0,t.k,[u.j,u.p,u.F],null,null),(n()(),u.Bb(2,0,null,0,1,"ion-icon",[["name","close"],["style","color: #FF443B;"]],null,null,null,a.db,a.s)),u.Ab(3,49152,null,0,t.C,[u.j,u.p,u.F],{name:[0,"name"]},null)],(function(n,l){n(l,3,0,"close")}),null)}function P(n){return u.Vb(0,[(n()(),u.Bb(0,0,null,null,3,"ion-button",[["class","goodPassword"],["item-right",""]],null,null,null,a.O,a.d)),u.Ab(1,49152,null,0,t.k,[u.j,u.p,u.F],null,null),(n()(),u.Bb(2,0,null,0,1,"ion-icon",[["name","checkmark"],["style","color: #21df82;"]],null,null,null,a.db,a.s)),u.Ab(3,49152,null,0,t.C,[u.j,u.p,u.F],{name:[0,"name"]},null)],(function(n,l){n(l,3,0,"checkmark")}),null)}function y(n){return u.Vb(0,[(n()(),u.Bb(0,0,null,null,1,"ion-header",[["style","display: none;"]],null,null,null,a.cb,a.r)),u.Ab(1,49152,null,0,t.B,[u.j,u.p,u.F],null,null),(n()(),u.Bb(2,0,null,null,49,"ion-content",[],null,null,null,a.W,a.l)),u.Ab(3,49152,null,0,t.u,[u.j,u.p,u.F],null,null),(n()(),u.Bb(4,0,null,0,47,"ion-grid",[["class","ion-text-center"],["style","margin-top: 10%;"]],null,null,null,a.bb,a.q)),u.Ab(5,49152,null,0,t.A,[u.j,u.p,u.F],null,null),(n()(),u.Bb(6,0,null,0,45,"ion-row",[],null,null,null,a.kb,a.z)),u.Ab(7,49152,null,0,t.jb,[u.j,u.p,u.F],null,null),(n()(),u.Bb(8,0,null,0,43,"ion-col",[["offset-lg","3"],["size-lg","6"]],null,null,null,a.V,a.k)),u.Ab(9,49152,null,0,t.t,[u.j,u.p,u.F],null,null),(n()(),u.Bb(10,0,null,0,1,"h6",[["class","text-header"]],null,null,null,null,null)),(n()(),u.Tb(-1,null,["Please enter your new password."])),(n()(),u.Bb(12,0,null,0,39,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],(function(n,l,s){var o=!0,e=n.component;return"submit"===l&&(o=!1!==u.Nb(n,14).onSubmit(s)&&o),"reset"===l&&(o=!1!==u.Nb(n,14).onReset()&&o),"ngSubmit"===l&&(o=!1!==e.goToConfirmPage()&&o),o}),null,null)),u.Ab(13,16384,null,0,r.t,[],null,null),u.Ab(14,540672,null,0,r.d,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),u.Qb(2048,null,r.a,null,[r.d]),u.Ab(16,16384,null,0,r.l,[[4,r.a]],null,null),(n()(),u.Bb(17,0,null,null,34,"ion-list",[["class","line-input"]],null,null,null,a.hb,a.w)),u.Ab(18,49152,null,0,t.O,[u.j,u.p,u.F],null,null),(n()(),u.Bb(19,0,null,0,12,"ion-item",[],null,null,null,a.fb,a.u)),u.Ab(20,49152,null,0,t.H,[u.j,u.p,u.F],null,null),(n()(),u.Bb(21,0,null,0,6,"ion-input",[["formControlName","newPassword"],["placeholder","Password"],["type","password"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(n,l,s){var o=!0;return"ionBlur"===l&&(o=!1!==u.Nb(n,22)._handleBlurEvent(s.target)&&o),"ionChange"===l&&(o=!1!==u.Nb(n,22)._handleInputEvent(s.target)&&o),o}),a.eb,a.t)),u.Ab(22,16384,null,0,t.Ob,[u.p],null,null),u.Qb(1024,null,r.i,(function(n){return[n]}),[t.Ob]),u.Ab(24,671744,null,0,r.c,[[3,r.a],[8,null],[8,null],[6,r.i],[2,r.s]],{name:[0,"name"]},null),u.Qb(2048,null,r.j,null,[r.c]),u.Ab(26,16384,null,0,r.k,[[4,r.j]],null,null),u.Ab(27,49152,null,0,t.G,[u.j,u.p,u.F],{placeholder:[0,"placeholder"],type:[1,"type"]},null),(n()(),u.qb(16777216,null,0,1,null,h)),u.Ab(29,16384,null,0,i.j,[u.W,u.S],{ngIf:[0,"ngIf"]},null),(n()(),u.qb(16777216,null,0,1,null,m)),u.Ab(31,16384,null,0,i.j,[u.W,u.S],{ngIf:[0,"ngIf"]},null),(n()(),u.Bb(32,0,null,0,12,"ion-item",[],null,null,null,a.fb,a.u)),u.Ab(33,49152,null,0,t.H,[u.j,u.p,u.F],null,null),(n()(),u.Bb(34,0,null,0,6,"ion-input",[["formControlName","reTypeNewPassword"],["placeholder","Re-type Password"],["type","password"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(n,l,s){var o=!0;return"ionBlur"===l&&(o=!1!==u.Nb(n,35)._handleBlurEvent(s.target)&&o),"ionChange"===l&&(o=!1!==u.Nb(n,35)._handleInputEvent(s.target)&&o),o}),a.eb,a.t)),u.Ab(35,16384,null,0,t.Ob,[u.p],null,null),u.Qb(1024,null,r.i,(function(n){return[n]}),[t.Ob]),u.Ab(37,671744,null,0,r.c,[[3,r.a],[8,null],[8,null],[6,r.i],[2,r.s]],{name:[0,"name"]},null),u.Qb(2048,null,r.j,null,[r.c]),u.Ab(39,16384,null,0,r.k,[[4,r.j]],null,null),u.Ab(40,49152,null,0,t.G,[u.j,u.p,u.F],{placeholder:[0,"placeholder"],type:[1,"type"]},null),(n()(),u.qb(16777216,null,0,1,null,f)),u.Ab(42,16384,null,0,i.j,[u.W,u.S],{ngIf:[0,"ngIf"]},null),(n()(),u.qb(16777216,null,0,1,null,P)),u.Ab(44,16384,null,0,i.j,[u.W,u.S],{ngIf:[0,"ngIf"]},null),(n()(),u.Bb(45,0,null,0,2,"ion-button",[["class","orange-button"],["type","submit"]],null,null,null,a.O,a.d)),u.Ab(46,49152,null,0,t.k,[u.j,u.p,u.F],{type:[0,"type"]},null),(n()(),u.Tb(-1,0,["NEXT"])),(n()(),u.Bb(48,0,null,0,0,"br",[],null,null,null,null,null)),(n()(),u.Bb(49,0,null,0,2,"ion-button",[["class","cancel-button"],["slot","end"]],null,[[null,"click"]],(function(n,l,s){var u=!0;return"click"===l&&(u=!1!==n.component.cancel()&&u),u}),a.O,a.d)),u.Ab(50,49152,null,0,t.k,[u.j,u.p,u.F],null,null),(n()(),u.Tb(-1,0,[" cancel "]))],(function(n,l){var s=l.component;n(l,14,0,s.newPasswordForm),n(l,24,0,"newPassword"),n(l,27,0,"Password","password"),n(l,29,0,!s.passwordsMatch),n(l,31,0,s.passwordsMatch),n(l,37,0,"reTypeNewPassword"),n(l,40,0,"Re-type Password","password"),n(l,42,0,!s.passwordsMatch),n(l,44,0,s.passwordsMatch),n(l,46,0,"submit")}),(function(n,l){n(l,12,0,u.Nb(l,16).ngClassUntouched,u.Nb(l,16).ngClassTouched,u.Nb(l,16).ngClassPristine,u.Nb(l,16).ngClassDirty,u.Nb(l,16).ngClassValid,u.Nb(l,16).ngClassInvalid,u.Nb(l,16).ngClassPending),n(l,21,0,u.Nb(l,26).ngClassUntouched,u.Nb(l,26).ngClassTouched,u.Nb(l,26).ngClassPristine,u.Nb(l,26).ngClassDirty,u.Nb(l,26).ngClassValid,u.Nb(l,26).ngClassInvalid,u.Nb(l,26).ngClassPending),n(l,34,0,u.Nb(l,39).ngClassUntouched,u.Nb(l,39).ngClassTouched,u.Nb(l,39).ngClassPristine,u.Nb(l,39).ngClassDirty,u.Nb(l,39).ngClassValid,u.Nb(l,39).ngClassInvalid,u.Nb(l,39).ngClassPending)}))}function C(n){return u.Vb(0,[(n()(),u.Bb(0,0,null,null,1,"app-new-password",[],null,null,null,y,p)),u.Ab(1,114688,null,0,g,[r.b,w.m,d.a,w.a,t.Pb],null,null)],(function(n,l){n(l,1,0)}),null)}var v=u.xb("app-new-password",g,C,{},{},[]);const F=()=>s.e(27).then(s.bind(null,"F170")).then(n=>n.ConfirmPageModuleNgFactory);class A{}s.d(l,"NewPasswordPageModuleNgFactory",(function(){return N}));var N=u.yb(o,[],(function(n){return u.Kb([u.Lb(512,u.m,u.jb,[[8,[e.a,v]],[3,u.m],u.D]),u.Lb(4608,i.l,i.k,[u.z,[2,i.s]]),u.Lb(4608,r.r,r.r,[]),u.Lb(4608,r.b,r.b,[]),u.Lb(4608,t.b,t.b,[u.F,u.g]),u.Lb(4608,t.Hb,t.Hb,[t.b,u.m,u.w]),u.Lb(4608,t.Lb,t.Lb,[t.b,u.m,u.w]),u.Lb(1073742336,i.c,i.c,[]),u.Lb(1073742336,r.q,r.q,[]),u.Lb(1073742336,r.e,r.e,[]),u.Lb(1073742336,r.n,r.n,[]),u.Lb(1073742336,t.Eb,t.Eb,[]),u.Lb(1073742336,w.q,w.q,[[2,w.v],[2,w.m]]),u.Lb(1073742336,A,A,[]),u.Lb(1073742336,o,o,[]),u.Lb(1024,w.k,(function(){return[[{path:"",component:g},{path:"confirm",loadChildren:F}]]}),[])])}))}}]);