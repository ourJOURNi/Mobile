(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{OLDa:function(l,n,u){"use strict";u.r(n);var e=u("8Y7J");class s{}var t=u("pMnS"),o=u("SVse"),a=u("oBZk"),r=u("ZZ/e"),i=u("s7LF"),b=u("lGQG");class d{constructor(l,n,u){this.router=l,this.formBuilder=n,this.auth=u,this.passwordsMatch=!1,this.code="",this.validationMessasges={email:[{type:"email",message:"Please enter a valid email address"}],password:[{type:"password",message:"Please enter a valid password."}]}}ngOnInit(){this.credentialsForm=this.formBuilder.group({email:["",[i.p.required,i.p.email]],password:["",i.p.compose([i.p.minLength(8),i.p.required,i.p.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$")])],reTypePassword:["",i.p.compose([i.p.minLength(8),i.p.required,i.p.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$")])]}),this.formOnChanges()}ngAfterViewInit(){setTimeout(()=>{this.inputElement.setFocus()},1e3)}ngOnDestroy(){console.log("Being Destroyed")}formOnChanges(){console.log(this.credentialsForm),this.credentialsForm.valueChanges.subscribe(l=>{console.log(l),this.credentialsForm.statusChanges.subscribe(l=>{console.log(l),"VALID"===l&&(console.log("you did it bruh"),this.passwordsMatch=!0)}),this.credentialsForm.controls.password.value===this.credentialsForm.controls.reTypePassword.value&&this.credentialsForm.controls.password.touched&&this.credentialsForm.controls.email.valid&&console.log("Passwords Match"),this.credentialsForm.controls.password.value!==this.credentialsForm.controls.reTypePassword.value&&(console.log("Passwords dont match"),this.passwordsMatch=!1)})}enterCodePage(l){this.email=this.credentialsForm.controls.email.value,this.auth.getLoginCredentials(l),console.log("Going to Enter Code Page"),this.router.navigate(["/personal-info/profile-picture/upload-resume/login-credentials/enter-code/",this.email])}cancel(){console.log("Sign up cancelled"),this.router.navigate([""])}}var c=u("iInd"),p=e.zb({encapsulation:0,styles:[["ion-title[_ngcontent-%COMP%]{margin:0}.text-header[_ngcontent-%COMP%]{font-size:1em;background:#edf3f8;position:relative;top:-10px;padding:75px;color:#666;z-index:999;text-align:justify}.cancel-button[_ngcontent-%COMP%]{margin:0 10px}.orange-button[_ngcontent-%COMP%]{display:block;margin:100px auto 200px;width:200px;-webkit-animation:none;animation:none;opacity:1}span[_ngcontent-%COMP%]{font-weight:900;font-size:1.2em;color:#005191}.badPassword[_ngcontent-%COMP%]{--background:none;opacity:0;-webkit-animation:1s ease-in .5s forwards password-icons;animation:1s ease-in .5s forwards password-icons}.badPassword[_ngcontent-%COMP%]:nth-child(2){--background:none;opacity:0;-webkit-animation:1s ease-in forwards password-icons;animation:1s ease-in forwards password-icons}.goodPassword[_ngcontent-%COMP%]{--background:none;opacity:0;-webkit-animation:1s ease-in .5s forwards password-icons;animation:1s ease-in .5s forwards password-icons}.goodPassword[_ngcontent-%COMP%]:nth-child(2){--background:none;opacity:0;-webkit-animation:1s ease-in forwards password-icons;animation:1s ease-in forwards password-icons}@-webkit-keyframes password-icons{0%{transform:translateX(50px)}100%{transform:translateX(0);opacity:1}}@keyframes password-icons{0%{transform:translateX(50px)}100%{transform:translateX(0);opacity:1}}"]],data:{}});function g(l){return e.Vb(0,[(l()(),e.Bb(0,0,null,null,1,"div",[["class","error-message"]],null,null,null,null,null)),(l()(),e.Tb(1,null,[" "," "]))],null,(function(l,n){l(n,1,0,n.parent.context.$implicit.message)}))}function m(l){return e.Vb(0,[(l()(),e.Bb(0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),e.qb(16777216,null,null,1,null,g)),e.Ab(2,16384,null,0,o.j,[e.W,e.S],{ngIf:[0,"ngIf"]},null),(l()(),e.qb(0,null,null,0))],(function(l,n){var u=n.component;l(n,2,0,u.credentialsForm.get("email").hasError(n.context.$implicit.type)&&(u.credentialsForm.get("email").dirty||u.credentialsForm.get("email").touched))}),null)}function h(l){return e.Vb(0,[(l()(),e.Bb(0,0,null,null,3,"ion-button",[["class","badPassword"],["item-right",""]],null,null,null,a.O,a.d)),e.Ab(1,49152,null,0,r.k,[e.j,e.p,e.F],null,null),(l()(),e.Bb(2,0,null,0,1,"ion-icon",[["name","close"],["style","color: #FF443B;"]],null,null,null,a.db,a.s)),e.Ab(3,49152,null,0,r.C,[e.j,e.p,e.F],{name:[0,"name"]},null)],(function(l,n){l(n,3,0,"close")}),null)}function f(l){return e.Vb(0,[(l()(),e.Bb(0,0,null,null,3,"ion-button",[["class","goodPassword"],["item-right",""]],null,null,null,a.O,a.d)),e.Ab(1,49152,null,0,r.k,[e.j,e.p,e.F],null,null),(l()(),e.Bb(2,0,null,0,1,"ion-icon",[["name","checkmark"],["style","color: #21df82;"]],null,null,null,a.db,a.s)),e.Ab(3,49152,null,0,r.C,[e.j,e.p,e.F],{name:[0,"name"]},null)],(function(l,n){l(n,3,0,"checkmark")}),null)}function w(l){return e.Vb(0,[(l()(),e.Bb(0,0,null,null,1,"div",[["class","error-message"]],null,null,null,null,null)),(l()(),e.Tb(1,null,[" "," "]))],null,(function(l,n){l(n,1,0,n.parent.context.$implicit.message)}))}function y(l){return e.Vb(0,[(l()(),e.Bb(0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),e.qb(16777216,null,null,1,null,w)),e.Ab(2,16384,null,0,o.j,[e.W,e.S],{ngIf:[0,"ngIf"]},null),(l()(),e.qb(0,null,null,0))],(function(l,n){var u=n.component;l(n,2,0,u.credentialsForm.get("password").hasError("pattern")&&(u.credentialsForm.get("password").dirty||u.credentialsForm.get("password").touched))}),null)}function C(l){return e.Vb(0,[(l()(),e.Bb(0,0,null,null,3,"ion-button",[["class","badPassword"],["item-right",""]],null,null,null,a.O,a.d)),e.Ab(1,49152,null,0,r.k,[e.j,e.p,e.F],null,null),(l()(),e.Bb(2,0,null,0,1,"ion-icon",[["name","close"],["style","color: #FF443B;"]],null,null,null,a.db,a.s)),e.Ab(3,49152,null,0,r.C,[e.j,e.p,e.F],{name:[0,"name"]},null)],(function(l,n){l(n,3,0,"close")}),null)}function F(l){return e.Vb(0,[(l()(),e.Bb(0,0,null,null,3,"ion-button",[["class","goodPassword"],["item-right",""]],null,null,null,a.O,a.d)),e.Ab(1,49152,null,0,r.k,[e.j,e.p,e.F],null,null),(l()(),e.Bb(2,0,null,0,1,"ion-icon",[["name","checkmark"],["style","color: #21df82;"]],null,null,null,a.db,a.s)),e.Ab(3,49152,null,0,r.C,[e.j,e.p,e.F],{name:[0,"name"]},null)],(function(l,n){l(n,3,0,"checkmark")}),null)}function v(l){return e.Vb(0,[(l()(),e.Bb(0,0,null,null,1,"div",[["class","error-message"]],null,null,null,null,null)),(l()(),e.Tb(1,null,[" "," "]))],null,(function(l,n){l(n,1,0,n.parent.context.$implicit.message)}))}function B(l){return e.Vb(0,[(l()(),e.Bb(0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),e.qb(16777216,null,null,1,null,v)),e.Ab(2,16384,null,0,o.j,[e.W,e.S],{ngIf:[0,"ngIf"]},null),(l()(),e.qb(0,null,null,0))],(function(l,n){var u=n.component;l(n,2,0,u.credentialsForm.get("reTypePassword").hasError("pattern")&&(u.credentialsForm.get("reTypePassword").dirty||u.credentialsForm.get("reTypePassword").touched))}),null)}function A(l){return e.Vb(0,[e.Rb(671088640,1,{inputElement:0}),(l()(),e.Bb(1,0,null,null,1,"ion-header",[["style","display: none;"]],null,null,null,a.cb,a.r)),e.Ab(2,49152,null,0,r.B,[e.j,e.p,e.F],null,null),(l()(),e.Bb(3,0,null,null,77,"ion-content",[],null,null,null,a.W,a.l)),e.Ab(4,49152,null,0,r.u,[e.j,e.p,e.F],null,null),(l()(),e.Bb(5,0,null,0,75,"ion-grid",[],null,null,null,a.bb,a.q)),e.Ab(6,49152,null,0,r.A,[e.j,e.p,e.F],null,null),(l()(),e.Bb(7,0,null,0,73,"ion-row",[["class","ion-justify-content-center"]],null,null,null,a.kb,a.z)),e.Ab(8,49152,null,0,r.jb,[e.j,e.p,e.F],null,null),(l()(),e.Bb(9,0,null,0,11,"ion-col",[["size","12"]],null,null,null,a.V,a.k)),e.Ab(10,49152,null,0,r.t,[e.j,e.p,e.F],{size:[0,"size"]},null),(l()(),e.Bb(11,0,null,0,9,"h6",[["class","text-header"]],null,null,null,null,null)),(l()(),e.Tb(-1,null,["Please create your login credentials. This is the information you will use to login with - an "])),(l()(),e.Bb(13,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e.Tb(-1,null,["email"])),(l()(),e.Tb(-1,null,[" and a "])),(l()(),e.Bb(16,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e.Tb(-1,null,["password"])),(l()(),e.Tb(-1,null,[". Your password needs to be "])),(l()(),e.Bb(19,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e.Tb(-1,null,["at least 8 characters long, with at least 1 uppercase letter and one number."])),(l()(),e.Bb(21,0,null,0,59,"ion-col",[["size","6"]],null,null,null,a.V,a.k)),e.Ab(22,49152,null,0,r.t,[e.j,e.p,e.F],{size:[0,"size"]},null),(l()(),e.Bb(23,0,null,0,57,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],(function(l,n,u){var s=!0,t=l.component;return"submit"===n&&(s=!1!==e.Nb(l,25).onSubmit(u)&&s),"reset"===n&&(s=!1!==e.Nb(l,25).onReset()&&s),"ngSubmit"===n&&(s=!1!==t.enterCodePage(t.credentialsForm.value)&&s),s}),null,null)),e.Ab(24,16384,null,0,i.t,[],null,null),e.Ab(25,540672,null,0,i.d,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),e.Qb(2048,null,i.a,null,[i.d]),e.Ab(27,16384,null,0,i.l,[[4,i.a]],null,null),(l()(),e.Bb(28,0,null,null,52,"ion-list",[["class","line-input"]],null,null,null,a.hb,a.w)),e.Ab(29,49152,null,0,r.O,[e.j,e.p,e.F],null,null),(l()(),e.Bb(30,0,null,0,8,"ion-item",[],null,null,null,a.fb,a.u)),e.Ab(31,49152,null,0,r.H,[e.j,e.p,e.F],null,null),(l()(),e.Bb(32,0,null,0,6,"ion-input",[["formControlName","email"],["placeholder","email"],["type","email"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var s=!0;return"ionBlur"===n&&(s=!1!==e.Nb(l,33)._handleBlurEvent(u.target)&&s),"ionChange"===n&&(s=!1!==e.Nb(l,33)._handleInputEvent(u.target)&&s),s}),a.eb,a.t)),e.Ab(33,16384,null,0,r.Ob,[e.p],null,null),e.Qb(1024,null,i.i,(function(l){return[l]}),[r.Ob]),e.Ab(35,671744,null,0,i.c,[[3,i.a],[8,null],[8,null],[6,i.i],[2,i.s]],{name:[0,"name"]},null),e.Qb(2048,null,i.j,null,[i.c]),e.Ab(37,16384,null,0,i.k,[[4,i.j]],null,null),e.Ab(38,49152,[[1,4],["autoFucousInput",4]],0,r.G,[e.j,e.p,e.F],{placeholder:[0,"placeholder"],type:[1,"type"]},null),(l()(),e.Bb(39,0,null,0,2,"div",[["class","validation-errors"]],null,null,null,null,null)),(l()(),e.qb(16777216,null,null,1,null,m)),e.Ab(41,278528,null,0,o.i,[e.W,e.S,e.x],{ngForOf:[0,"ngForOf"]},null),(l()(),e.Bb(42,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e.Bb(43,0,null,0,14,"ion-item",[],null,null,null,a.fb,a.u)),e.Ab(44,49152,null,0,r.H,[e.j,e.p,e.F],null,null),(l()(),e.Bb(45,0,null,0,8,"ion-input",[["formControlName","password"],["inputmode","text"],["placeholder","enter password"],["required",""],["type","password"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var s=!0;return"ionBlur"===n&&(s=!1!==e.Nb(l,48)._handleBlurEvent(u.target)&&s),"ionChange"===n&&(s=!1!==e.Nb(l,48)._handleInputEvent(u.target)&&s),s}),a.eb,a.t)),e.Ab(46,16384,null,0,i.o,[],{required:[0,"required"]},null),e.Qb(1024,null,i.h,(function(l){return[l]}),[i.o]),e.Ab(48,16384,null,0,r.Ob,[e.p],null,null),e.Qb(1024,null,i.i,(function(l){return[l]}),[r.Ob]),e.Ab(50,671744,null,0,i.c,[[3,i.a],[6,i.h],[8,null],[6,i.i],[2,i.s]],{name:[0,"name"]},null),e.Qb(2048,null,i.j,null,[i.c]),e.Ab(52,16384,null,0,i.k,[[4,i.j]],null,null),e.Ab(53,49152,null,0,r.G,[e.j,e.p,e.F],{inputmode:[0,"inputmode"],placeholder:[1,"placeholder"],required:[2,"required"],type:[3,"type"]},null),(l()(),e.qb(16777216,null,0,1,null,h)),e.Ab(55,16384,null,0,o.j,[e.W,e.S],{ngIf:[0,"ngIf"]},null),(l()(),e.qb(16777216,null,0,1,null,f)),e.Ab(57,16384,null,0,o.j,[e.W,e.S],{ngIf:[0,"ngIf"]},null),(l()(),e.Bb(58,0,null,0,2,"div",[["class","validation-errors"]],null,null,null,null,null)),(l()(),e.qb(16777216,null,null,1,null,y)),e.Ab(60,278528,null,0,o.i,[e.W,e.S,e.x],{ngForOf:[0,"ngForOf"]},null),(l()(),e.Bb(61,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e.Bb(62,0,null,0,12,"ion-item",[],null,null,null,a.fb,a.u)),e.Ab(63,49152,null,0,r.H,[e.j,e.p,e.F],null,null),(l()(),e.Bb(64,0,null,0,6,"ion-input",[["formControlName","reTypePassword"],["placeholder","re-type password"],["type","password"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var s=!0;return"ionBlur"===n&&(s=!1!==e.Nb(l,65)._handleBlurEvent(u.target)&&s),"ionChange"===n&&(s=!1!==e.Nb(l,65)._handleInputEvent(u.target)&&s),s}),a.eb,a.t)),e.Ab(65,16384,null,0,r.Ob,[e.p],null,null),e.Qb(1024,null,i.i,(function(l){return[l]}),[r.Ob]),e.Ab(67,671744,null,0,i.c,[[3,i.a],[8,null],[8,null],[6,i.i],[2,i.s]],{name:[0,"name"]},null),e.Qb(2048,null,i.j,null,[i.c]),e.Ab(69,16384,null,0,i.k,[[4,i.j]],null,null),e.Ab(70,49152,null,0,r.G,[e.j,e.p,e.F],{placeholder:[0,"placeholder"],type:[1,"type"]},null),(l()(),e.qb(16777216,null,0,1,null,C)),e.Ab(72,16384,null,0,o.j,[e.W,e.S],{ngIf:[0,"ngIf"]},null),(l()(),e.qb(16777216,null,0,1,null,F)),e.Ab(74,16384,null,0,o.j,[e.W,e.S],{ngIf:[0,"ngIf"]},null),(l()(),e.Bb(75,0,null,0,2,"div",[["class","validation-errors"]],null,null,null,null,null)),(l()(),e.qb(16777216,null,null,1,null,B)),e.Ab(77,278528,null,0,o.i,[e.W,e.S,e.x],{ngForOf:[0,"ngForOf"]},null),(l()(),e.Bb(78,0,null,0,2,"ion-button",[["class","orange-button"],["type","submit"]],null,null,null,a.O,a.d)),e.Ab(79,49152,null,0,r.k,[e.j,e.p,e.F],{disabled:[0,"disabled"],type:[1,"type"]},null),(l()(),e.Tb(-1,0,["NEXT"]))],(function(l,n){var u=n.component;l(n,10,0,"12"),l(n,22,0,"6"),l(n,25,0,u.credentialsForm),l(n,35,0,"email"),l(n,38,0,"email","email"),l(n,41,0,u.validationMessasges.email),l(n,46,0,""),l(n,50,0,"password"),l(n,53,0,"text","enter password","","password"),l(n,55,0,!u.passwordsMatch),l(n,57,0,u.passwordsMatch),l(n,60,0,u.validationMessasges.password),l(n,67,0,"reTypePassword"),l(n,70,0,"re-type password","password"),l(n,72,0,!u.passwordsMatch),l(n,74,0,u.passwordsMatch),l(n,77,0,u.validationMessasges.password),l(n,79,0,!u.passwordsMatch,"submit")}),(function(l,n){l(n,23,0,e.Nb(n,27).ngClassUntouched,e.Nb(n,27).ngClassTouched,e.Nb(n,27).ngClassPristine,e.Nb(n,27).ngClassDirty,e.Nb(n,27).ngClassValid,e.Nb(n,27).ngClassInvalid,e.Nb(n,27).ngClassPending),l(n,32,0,e.Nb(n,37).ngClassUntouched,e.Nb(n,37).ngClassTouched,e.Nb(n,37).ngClassPristine,e.Nb(n,37).ngClassDirty,e.Nb(n,37).ngClassValid,e.Nb(n,37).ngClassInvalid,e.Nb(n,37).ngClassPending),l(n,45,0,e.Nb(n,46).required?"":null,e.Nb(n,52).ngClassUntouched,e.Nb(n,52).ngClassTouched,e.Nb(n,52).ngClassPristine,e.Nb(n,52).ngClassDirty,e.Nb(n,52).ngClassValid,e.Nb(n,52).ngClassInvalid,e.Nb(n,52).ngClassPending),l(n,64,0,e.Nb(n,69).ngClassUntouched,e.Nb(n,69).ngClassTouched,e.Nb(n,69).ngClassPristine,e.Nb(n,69).ngClassDirty,e.Nb(n,69).ngClassValid,e.Nb(n,69).ngClassInvalid,e.Nb(n,69).ngClassPending)}))}function N(l){return e.Vb(0,[(l()(),e.Bb(0,0,null,null,1,"app-login-credentials",[],null,null,null,A,p)),e.Ab(1,4440064,null,0,d,[c.m,i.b,b.a],null,null)],(function(l,n){l(n,1,0)}),null)}var P=e.xb("app-login-credentials",d,N,{},{},[]);const j=()=>u.e(30).then(u.bind(null,"7CaW")).then(l=>l.EnterCodePageModuleNgFactory);class k{}u.d(n,"LoginCredentialsPageModuleNgFactory",(function(){return O}));var O=e.yb(s,[],(function(l){return e.Kb([e.Lb(512,e.m,e.jb,[[8,[t.a,P]],[3,e.m],e.D]),e.Lb(4608,o.l,o.k,[e.z,[2,o.s]]),e.Lb(4608,i.r,i.r,[]),e.Lb(4608,r.b,r.b,[e.F,e.g]),e.Lb(4608,r.Hb,r.Hb,[r.b,e.m,e.w]),e.Lb(4608,r.Lb,r.Lb,[r.b,e.m,e.w]),e.Lb(4608,i.b,i.b,[]),e.Lb(1073742336,o.c,o.c,[]),e.Lb(1073742336,i.q,i.q,[]),e.Lb(1073742336,i.e,i.e,[]),e.Lb(1073742336,r.Eb,r.Eb,[]),e.Lb(1073742336,i.n,i.n,[]),e.Lb(1073742336,c.q,c.q,[[2,c.v],[2,c.m]]),e.Lb(1073742336,k,k,[]),e.Lb(1073742336,s,s,[]),e.Lb(1024,c.k,(function(){return[[{path:"",component:d},{path:"enter-code/:email",loadChildren:j}]]}),[])])}))}}]);