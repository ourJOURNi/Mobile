(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{lnR2:function(e,o,n){"use strict";n.r(o),n.d(o,"LoginCredentialsPageModule",function(){return x});var s=n("ofXK"),t=n("3Pt+"),i=n("TEn/"),r=n("tyNb"),a=n("mrSG"),c=n("lGQG"),d=n("JIr8"),l=n("fXoL");const b=["autoFucousInput"];function m(e,o){if(1&e&&(l.Mb(0,"div",18),l.lc(1),l.Lb()),2&e){const e=l.Wb().$implicit;l.xb(1),l.nc(" ",e.message," ")}}function u(e,o){if(1&e&&(l.Kb(0),l.kc(1,m,2,1,"div",17),l.Jb()),2&e){const e=o.$implicit,n=l.Wb();l.xb(1),l.Zb("ngIf",n.credentialsForm.get("email").hasError(e.type)&&(n.credentialsForm.get("email").dirty||n.credentialsForm.get("email").touched))}}function p(e,o){1&e&&(l.Mb(0,"ion-button",19),l.Ib(1,"ion-icon",20),l.Lb())}function g(e,o){1&e&&(l.Mb(0,"ion-button",21),l.Ib(1,"ion-icon",22),l.Lb())}function h(e,o){if(1&e&&(l.Mb(0,"div",18),l.lc(1),l.Lb()),2&e){const e=l.Wb().$implicit;l.xb(1),l.nc(" ",e.message," ")}}function w(e,o){if(1&e&&(l.Kb(0),l.kc(1,h,2,1,"div",17),l.Jb()),2&e){const e=l.Wb();l.xb(1),l.Zb("ngIf",e.credentialsForm.get("password").hasError("pattern")&&(e.credentialsForm.get("password").dirty||e.credentialsForm.get("password").touched))}}function f(e,o){1&e&&(l.Mb(0,"ion-button",19),l.Ib(1,"ion-icon",20),l.Lb())}function y(e,o){1&e&&(l.Mb(0,"ion-button",21),l.Ib(1,"ion-icon",22),l.Lb())}function M(e,o){if(1&e&&(l.Mb(0,"div",18),l.lc(1),l.Lb()),2&e){const e=l.Wb().$implicit;l.xb(1),l.nc(" ",e.message," ")}}function P(e,o){if(1&e&&(l.Kb(0),l.kc(1,M,2,1,"div",17),l.Jb()),2&e){const e=l.Wb();l.xb(1),l.Zb("ngIf",e.credentialsForm.get("reTypePassword").hasError("pattern")&&(e.credentialsForm.get("reTypePassword").dirty||e.credentialsForm.get("reTypePassword").touched))}}const F=[{path:"",component:(()=>{class e{constructor(e,o,n,s){this.router=e,this.formBuilder=o,this.auth=n,this.alert=s,this.passwordsMatch=!1,this.code="",this.validationMessasges={email:[{type:"email",message:"Please enter a valid email address"}],password:[{type:"password",message:"Please enter a valid password."}]}}ngOnInit(){this.credentialsForm=this.formBuilder.group({email:["",[t.n.required,t.n.email]],password:["",t.n.compose([t.n.minLength(8),t.n.required,t.n.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$")])],reTypePassword:["",t.n.compose([t.n.minLength(8),t.n.required,t.n.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$")])]}),this.formOnChanges()}ngAfterViewInit(){setTimeout(()=>{this.inputElement.setFocus()},1e3)}ngOnDestroy(){console.log("Being Destroyed")}formOnChanges(){console.log(this.credentialsForm),this.credentialsForm.valueChanges.subscribe(e=>{console.log(e),this.credentialsForm.statusChanges.subscribe(e=>{console.log(e),"VALID"===e&&(console.log("you did it bruh"),this.passwordsMatch=!0)}),this.credentialsForm.controls.password.value===this.credentialsForm.controls.reTypePassword.value&&this.credentialsForm.controls.password.touched&&this.credentialsForm.controls.email.valid&&console.log("Passwords Match"),this.credentialsForm.controls.password.value!==this.credentialsForm.controls.reTypePassword.value&&(console.log("Passwords dont match"),this.passwordsMatch=!1)})}enterCodePage(e,o){this.email=this.credentialsForm.controls.email.value,this.auth.doesUserExists(e,o).pipe(Object(d.a)(e=>{if(console.error(e),"User already registered with that email address."===e.error.msg)return this.userAlreadyExistAlert()})).subscribe(n=>{console.log(n),!1===n.exists&&(this.auth.getLoginCredentials(e,o),console.log("Going to Enter Code Page"),this.router.navigate(["/personal-info/profile-picture/upload-resume/login-credentials/enter-code/",this.email]))})}userAlreadyExistAlert(){return Object(a.a)(this,void 0,void 0,function*(){const e=yield this.alert.create({cssClass:"danger-alert",message:"This user already exists.",buttons:["OK"]});yield e.present()})}cancel(){console.log("Sign up cancelled"),this.router.navigate([""])}}return e.\u0275fac=function(o){return new(o||e)(l.Hb(r.f),l.Hb(t.a),l.Hb(c.a),l.Hb(i.a))},e.\u0275cmp=l.Bb({type:e,selectors:[["app-login-credentials"]],viewQuery:function(e,o){if(1&e&&l.rc(b,!0),2&e){let e;l.dc(e=l.Vb())&&(o.inputElement=e.first)}},decls:40,vars:9,consts:[[2,"display","none"],[1,"ion-justify-content-center","header"],["size-lg","6","size-md","7","size-xs","11"],[1,"text-header"],[1,"ion-justify-content-center"],["size-lg","5","size-md","7","size-xs","11"],[3,"formGroup","ngSubmit"],[1,"line-input"],["formControlName","email","type","email","placeholder","email"],["autoFucousInput",""],[1,"validation-errors"],[4,"ngFor","ngForOf"],["required","","inputmode","text","formControlName","password","type","password","placeholder","enter password"],["class","badPassword","item-right","",4,"ngIf"],["class","goodPassword","item-right","",4,"ngIf"],["formControlName","reTypePassword","type","password","placeholder","re-type password"],["type","submit",1,"orange-button",3,"disabled"],["class","error-message",4,"ngIf"],[1,"error-message"],["item-right","",1,"badPassword"],["name","close",2,"color","#FF443B"],["item-right","",1,"goodPassword"],["size","large","name","checkmark",2,"color","#21df82"]],template:function(e,o){1&e&&(l.Ib(0,"ion-header",0),l.Mb(1,"ion-content"),l.Mb(2,"ion-grid"),l.Mb(3,"ion-row",1),l.Mb(4,"ion-col",2),l.Mb(5,"h6",3),l.lc(6,"Please create your login credentials. This is the information you will use to login with - an "),l.Mb(7,"span"),l.lc(8,"email"),l.Lb(),l.lc(9," and a "),l.Mb(10,"span"),l.lc(11,"password"),l.Lb(),l.lc(12,". Your password needs to be "),l.Mb(13,"span"),l.lc(14,"at least 8 characters long, with at least 1 uppercase letter and one number."),l.Lb(),l.Lb(),l.Lb(),l.Lb(),l.Mb(15,"ion-row",4),l.Mb(16,"ion-col",5),l.Mb(17,"form",6),l.Ub("ngSubmit",function(){return o.enterCodePage(o.credentialsForm.value.email,o.credentialsForm.value.password)}),l.Mb(18,"ion-list",7),l.Mb(19,"ion-item"),l.Ib(20,"ion-input",8,9),l.Lb(),l.Mb(22,"div",10),l.kc(23,u,2,1,"ng-container",11),l.Lb(),l.Ib(24,"br"),l.Mb(25,"ion-item"),l.Ib(26,"ion-input",12),l.kc(27,p,2,0,"ion-button",13),l.kc(28,g,2,0,"ion-button",14),l.Lb(),l.Mb(29,"div",10),l.kc(30,w,2,1,"ng-container",11),l.Lb(),l.Ib(31,"br"),l.Mb(32,"ion-item"),l.Ib(33,"ion-input",15),l.kc(34,f,2,0,"ion-button",13),l.kc(35,y,2,0,"ion-button",14),l.Lb(),l.Mb(36,"div",10),l.kc(37,P,2,1,"ng-container",11),l.Lb(),l.Mb(38,"ion-button",16),l.lc(39,"NEXT"),l.Lb(),l.Lb(),l.Lb(),l.Lb(),l.Lb(),l.Lb(),l.Lb()),2&e&&(l.xb(17),l.Zb("formGroup",o.credentialsForm),l.xb(6),l.Zb("ngForOf",o.validationMessasges.email),l.xb(4),l.Zb("ngIf",!o.passwordsMatch),l.xb(1),l.Zb("ngIf",o.passwordsMatch),l.xb(2),l.Zb("ngForOf",o.validationMessasges.password),l.xb(4),l.Zb("ngIf",!o.passwordsMatch),l.xb(1),l.Zb("ngIf",o.passwordsMatch),l.xb(2),l.Zb("ngForOf",o.validationMessasges.password),l.xb(1),l.Zb("disabled",!o.passwordsMatch))},directives:[i.u,i.o,i.t,i.G,i.n,t.o,t.j,t.c,i.C,i.x,i.w,i.Y,t.i,t.b,s.h,t.m,s.i,i.g,i.v],styles:["ion-title[_ngcontent-%COMP%]{margin:0}.header[_ngcontent-%COMP%]{background:#edf3f8;height:auto}.text-header[_ngcontent-%COMP%]{font-size:1em;line-height:1.9em;color:#666;z-index:999;text-align:justify}.cancel-button[_ngcontent-%COMP%]{margin:0 10px}.orange-button[_ngcontent-%COMP%]{width:unset;display:block;margin:100px auto;width:200px;-webkit-animation:none;animation:none;opacity:1}span[_ngcontent-%COMP%]{font-weight:900;font-size:1em;color:#005191}.badPassword[_ngcontent-%COMP%]{--background:none;opacity:0;-webkit-animation:password-icons 1s ease-in .5s forwards;animation:password-icons 1s ease-in .5s forwards}.badPassword[_ngcontent-%COMP%]:nth-child(2){--background:none;opacity:0;-webkit-animation:password-icons 1s ease-in forwards;animation:password-icons 1s ease-in forwards}.goodPassword[_ngcontent-%COMP%]{--background:none;opacity:0;-webkit-animation:password-icons 1s ease-in .5s forwards;animation:password-icons 1s ease-in .5s forwards}.goodPassword[_ngcontent-%COMP%]:nth-child(2){--background:none;opacity:0;-webkit-animation:password-icons 1s ease-in forwards;animation:password-icons 1s ease-in forwards}@-webkit-keyframes password-icons{0%{transform:translateX(50px)}to{transform:translateX(0);opacity:1}}@keyframes password-icons{0%{transform:translateX(50px)}to{transform:translateX(0);opacity:1}}"]}),e})()},{path:"enter-code/:email",loadChildren:()=>n.e(28).then(n.bind(null,"Wx8N")).then(e=>e.EnterCodePageModule)}];let v=(()=>{class e{}return e.\u0275mod=l.Fb({type:e}),e.\u0275inj=l.Eb({factory:function(o){return new(o||e)},imports:[[r.j.forChild(F)],r.j]}),e})(),x=(()=>{class e{}return e.\u0275mod=l.Fb({type:e}),e.\u0275inj=l.Eb({factory:function(o){return new(o||e)},imports:[[s.b,t.d,i.Q,t.l,v]]}),e})()}}]);