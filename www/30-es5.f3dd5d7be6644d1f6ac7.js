!function(){function e(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function n(e,n){for(var o=0;o<n.length;o++){var t=n[o];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{lnR2:function(o,t,s){"use strict";s.r(t),s.d(t,"LoginCredentialsPageModule",function(){return O});var r=s("ofXK"),i=s("3Pt+"),a=s("TEn/"),c=s("tyNb"),d=s("mrSG"),l=s("lGQG"),b=s("JIr8"),u=s("fXoL"),m=["autoFucousInput"];function p(e,n){if(1&e&&(u.Mb(0,"div",27),u.nc(1),u.Lb()),2&e){var o=u.Wb().$implicit;u.xb(1),u.pc(" ",o.message," ")}}function g(e,n){if(1&e&&(u.Kb(0),u.mc(1,p,2,1,"div",26),u.Jb()),2&e){var o=n.$implicit,t=u.Wb();u.xb(1),u.Zb("ngIf",t.credentialsForm.get("email").hasError(o.type)&&(t.credentialsForm.get("email").dirty||t.credentialsForm.get("email").touched))}}function f(e,n){1&e&&(u.Mb(0,"ion-button",28),u.Ib(1,"ion-icon",29),u.Lb())}function h(e,n){1&e&&(u.Mb(0,"ion-button",30),u.Ib(1,"ion-icon",31),u.Lb())}function w(e,n){if(1&e&&(u.Mb(0,"div",27),u.nc(1),u.Lb()),2&e){var o=u.Wb().$implicit;u.xb(1),u.pc(" ",o.message," ")}}function M(e,n){if(1&e&&(u.Kb(0),u.mc(1,w,2,1,"div",26),u.Jb()),2&e){var o=u.Wb();u.xb(1),u.Zb("ngIf",o.credentialsForm.get("password").hasError("pattern")&&(o.credentialsForm.get("password").dirty||o.credentialsForm.get("password").touched))}}function v(e,n){1&e&&(u.Mb(0,"ion-button",28),u.Ib(1,"ion-icon",29),u.Lb())}function y(e,n){1&e&&(u.Mb(0,"ion-button",30),u.Ib(1,"ion-icon",31),u.Lb())}function x(e,n){if(1&e&&(u.Mb(0,"div",27),u.nc(1),u.Lb()),2&e){var o=u.Wb().$implicit;u.xb(1),u.pc(" ",o.message," ")}}function L(e,n){if(1&e&&(u.Kb(0),u.mc(1,x,2,1,"div",26),u.Jb()),2&e){var o=u.Wb();u.xb(1),u.Zb("ngIf",o.credentialsForm.get("reTypePassword").hasError("pattern")&&(o.credentialsForm.get("reTypePassword").dirty||o.credentialsForm.get("reTypePassword").touched))}}var k,P,F,C=[{path:"",component:(k=function(){function o(n,t,s,r){e(this,o),this.router=n,this.formBuilder=t,this.auth=s,this.alert=r,this.passwordsMatch=!1,this.code="",this.validationMessasges={email:[{type:"email",message:"Please enter a valid email address"}],password:[{type:"password",message:"Please enter a valid password."}]}}var t,s,r;return t=o,(s=[{key:"ngOnInit",value:function(){this.credentialsForm=this.formBuilder.group({email:["",[i.n.required,i.n.email]],password:["",i.n.compose([i.n.minLength(8),i.n.required,i.n.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$")])],reTypePassword:["",i.n.compose([i.n.minLength(8),i.n.required,i.n.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$")])]}),this.formOnChanges()}},{key:"ngOnDestroy",value:function(){console.log("Being Destroyed")}},{key:"formOnChanges",value:function(){var e=this;console.log(this.credentialsForm),this.credentialsForm.valueChanges.subscribe(function(n){console.log(n),e.credentialsForm.statusChanges.subscribe(function(n){console.log(n),"VALID"===n&&(console.log("you did it bruh"),e.passwordsMatch=!0)}),e.credentialsForm.controls.password.value===e.credentialsForm.controls.reTypePassword.value&&e.credentialsForm.controls.password.touched&&e.credentialsForm.controls.email.valid&&console.log("Passwords Match"),e.credentialsForm.controls.password.value!==e.credentialsForm.controls.reTypePassword.value&&(console.log("Passwords dont match"),e.passwordsMatch=!1)})}},{key:"enterCodePage",value:function(e,n){var o=this;this.email=this.credentialsForm.controls.email.value,this.auth.doesUserExists(e,n).pipe(Object(b.a)(function(e){if(console.error(e),"User already registered with that email address."===e.error.msg)return o.userAlreadyExistAlert()})).subscribe(function(t){console.log(t),!1===t.exists&&(o.auth.getLoginCredentials(e,n),console.log("Going to Enter Code Page"),o.router.navigate(["/personal-info/profile-picture/upload-resume/login-credentials/enter-code/",o.email]))})}},{key:"userAlreadyExistAlert",value:function(){return Object(d.a)(this,void 0,void 0,regeneratorRuntime.mark(function e(){var n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.alert.create({cssClass:"danger-alert",message:"This user already exists.",buttons:["OK"]});case 2:return n=e.sent,e.next=5,n.present();case 5:case"end":return e.stop()}},e,this)}))}},{key:"cancel",value:function(){console.log("Sign up cancelled"),this.router.navigate([""])}}])&&n(t.prototype,s),r&&n(t,r),o}(),k.\u0275fac=function(e){return new(e||k)(u.Hb(c.g),u.Hb(i.a),u.Hb(l.a),u.Hb(a.a))},k.\u0275cmp=u.Bb({type:k,selectors:[["app-login-credentials"]],viewQuery:function(e,n){var o;1&e&&u.tc(m,!0),2&e&&u.ec(o=u.Vb())&&(n.inputElement=o.first)},decls:48,vars:9,consts:[[1,"ion-hide-lg-up"],["mode","md"],["slot","start"],["size","small"],[1,"spacer","ion-hide-lg-up"],[1,"ion-hide-lg-down","ion-justify-content-center",2,"padding-top","80px","margin-bottom","40px"],["size-xs","11","size-sm","10","size-md","10","size-lg","8","size-xl","6"],[1,"desktop-toolbar"],["height","50","src","../../../../../assets/icon/Logo 2.0.svg","alt","","srcset",""],["slot","end"],[1,"back-button",3,"click"],[1,"ion-justify-content-center"],["size","12",1,"ion-text-center"],[1,"text-header"],["size-xs","11","size-sm","10","size-md","10","size-lg","6","size-xl","4"],[3,"formGroup","ngSubmit"],[1,"line-input"],["formControlName","email","type","email","placeholder","email"],["autoFucousInput",""],[1,"validation-errors"],[4,"ngFor","ngForOf"],["required","","inputmode","text","formControlName","password","type","password","placeholder","enter password"],["class","badPassword","item-right","",4,"ngIf"],["class","goodPassword","item-right","",4,"ngIf"],["formControlName","reTypePassword","type","password","placeholder","re-type password"],["type","submit",1,"orange-button",3,"disabled"],["class","error-message",4,"ngIf"],[1,"error-message"],["item-right","",1,"badPassword"],["name","close",2,"color","#FF443B"],["item-right","",1,"goodPassword"],["size","large","name","checkmark",2,"color","#21df82"]],template:function(e,n){1&e&&(u.Mb(0,"ion-header",0),u.Mb(1,"ion-toolbar",1),u.Mb(2,"ion-buttons",2),u.Ib(3,"ion-back-button"),u.Lb(),u.Mb(4,"ion-title",3),u.nc(5,"Sign Up - Login Credentials"),u.Lb(),u.Lb(),u.Lb(),u.Mb(6,"ion-content"),u.Mb(7,"ion-grid"),u.Ib(8,"div",4),u.Mb(9,"ion-row",5),u.Mb(10,"ion-col",6),u.Mb(11,"ion-toolbar",7),u.Mb(12,"ion-buttons",2),u.Ib(13,"img",8),u.Lb(),u.Mb(14,"ion-buttons",9),u.Mb(15,"ion-button",10),u.Ub("click",function(){return n.cancel()}),u.nc(16," Back "),u.Lb(),u.Lb(),u.Lb(),u.Lb(),u.Lb(),u.Mb(17,"ion-row",11),u.Mb(18,"ion-col",12),u.Mb(19,"h6",13),u.nc(20,"Please create your login credentials. Your password needs to be "),u.Mb(21,"span"),u.nc(22,"at least 8 characters long, with at least 1 uppercase letter and one number."),u.Lb(),u.Lb(),u.Lb(),u.Lb(),u.Mb(23,"ion-row",11),u.Mb(24,"ion-col",14),u.Mb(25,"form",15),u.Ub("ngSubmit",function(){return n.enterCodePage(n.credentialsForm.value.email,n.credentialsForm.value.password)}),u.Mb(26,"ion-list",16),u.Mb(27,"ion-item"),u.Ib(28,"ion-input",17,18),u.Lb(),u.Mb(30,"div",19),u.mc(31,g,2,1,"ng-container",20),u.Lb(),u.Ib(32,"br"),u.Mb(33,"ion-item"),u.Ib(34,"ion-input",21),u.mc(35,f,2,0,"ion-button",22),u.mc(36,h,2,0,"ion-button",23),u.Lb(),u.Mb(37,"div",19),u.mc(38,M,2,1,"ng-container",20),u.Lb(),u.Ib(39,"br"),u.Mb(40,"ion-item"),u.Ib(41,"ion-input",24),u.mc(42,v,2,0,"ion-button",22),u.mc(43,y,2,0,"ion-button",23),u.Lb(),u.Mb(44,"div",19),u.mc(45,L,2,1,"ng-container",20),u.Lb(),u.Mb(46,"ion-button",25),u.nc(47,"NEXT"),u.Lb(),u.Lb(),u.Lb(),u.Lb(),u.Lb(),u.Lb(),u.Lb()),2&e&&(u.xb(25),u.Zb("formGroup",n.credentialsForm),u.xb(6),u.Zb("ngForOf",n.validationMessasges.email),u.xb(4),u.Zb("ngIf",!n.passwordsMatch),u.xb(1),u.Zb("ngIf",n.passwordsMatch),u.xb(2),u.Zb("ngForOf",n.validationMessasges.password),u.xb(4),u.Zb("ngIf",!n.passwordsMatch),u.xb(1),u.Zb("ngIf",n.passwordsMatch),u.xb(2),u.Zb("ngForOf",n.validationMessasges.password),u.xb(1),u.Zb("disabled",!n.passwordsMatch))},directives:[a.u,a.S,a.h,a.e,a.f,a.R,a.o,a.t,a.I,a.n,a.g,i.o,i.j,i.c,a.C,a.x,a.w,a.db,i.i,i.b,r.i,i.m,r.j,a.v],styles:[".desktop-toolbar[_ngcontent-%COMP%]{--background:none;padding-bottom:16px;border-bottom:1px solid rgba(51,51,51,.14901960784313725)}.desktop-toolbar[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{color:#0055a5}.back-button[_ngcontent-%COMP%]{--color:#fff;--background:#0055a5;--background-hover:linear-gradient(#0055a5,#0c375f);height:24px;--border-radius:5px;width:100px;font-size:.5em;font-weight:600;display:block}.text-header[_ngcontent-%COMP%]{font-size:1.2em;line-height:1.5em;color:#222;z-index:999}.cancel-button[_ngcontent-%COMP%]{margin:0 10px}.orange-button[_ngcontent-%COMP%]{width:unset;display:block;margin:48px auto;width:200px;-webkit-animation:none;animation:none;opacity:1}span[_ngcontent-%COMP%]{font-weight:900;font-size:1em;color:#e3405f}.badPassword[_ngcontent-%COMP%]{--background:none;opacity:0;-webkit-animation:password-icons 1s ease-in .5s forwards;animation:password-icons 1s ease-in .5s forwards}.badPassword[_ngcontent-%COMP%]:nth-child(2){--background:none;opacity:0;-webkit-animation:password-icons 1s ease-in forwards;animation:password-icons 1s ease-in forwards}.goodPassword[_ngcontent-%COMP%]{--background:none;opacity:0;-webkit-animation:password-icons 1s ease-in .5s forwards;animation:password-icons 1s ease-in .5s forwards}.goodPassword[_ngcontent-%COMP%]:nth-child(2){--background:none;opacity:0;-webkit-animation:password-icons 1s ease-in forwards;animation:password-icons 1s ease-in forwards}@-webkit-keyframes password-icons{0%{transform:translateX(50px)}to{transform:translateX(0);opacity:1}}@keyframes password-icons{0%{transform:translateX(50px)}to{transform:translateX(0);opacity:1}}"]}),k)},{path:"enter-code/:email",loadChildren:function(){return s.e(29).then(s.bind(null,"Wx8N")).then(function(e){return e.EnterCodePageModule})}}],I=((F=function n(){e(this,n)}).\u0275mod=u.Fb({type:F}),F.\u0275inj=u.Eb({factory:function(e){return new(e||F)},imports:[[c.k.forChild(C)],c.k]}),F),O=((P=function n(){e(this,n)}).\u0275mod=u.Fb({type:P}),P.\u0275inj=u.Eb({factory:function(e){return new(e||P)},imports:[[r.b,i.d,a.T,i.l,I]]}),P)}}])}();