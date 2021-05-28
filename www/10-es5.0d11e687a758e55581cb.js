!function(){function e(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function n(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{wpa0:function(t,o,r){"use strict";r.r(o),r.d(o,"ChangePhonePageModule",function(){return w});var i,a,s,c=r("ofXK"),u=r("3Pt+"),b=r("TEn/"),l=r("tyNb"),h=r("mrSG"),d=r("lGQG"),p=r("Aso2"),f=r("fXoL"),m=[{path:"",component:(i=function(){function t(n,o,r,i,a,s){e(this,t),this.formBuilder=n,this.router=o,this.auth=r,this.toast=i,this.alertController=a,this.profile=s,this.activeEmail="",this.validationMessasges={email:[{type:"email",message:"Must be a valid email address"}],password:[{type:"pattern",message:"Password must be at least 6 characters with at least one lowercase character, one uppercase character, and one number."}]},this.activeEmail=this.profile.email.getValue(),console.log("Active Email: "+this.activeEmail)}var o,r,i;return o=t,(r=[{key:"ngOnInit",value:function(){var e=this;this.phone=this.profile.phone.value,this.changePhone=this.formBuilder.group({phone:["",[u.n.required]],password:["",u.n.compose([u.n.minLength(8),u.n.required,u.n.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$")])]}),this.changePhone.valueChanges.subscribe(function(n){setTimeout(function(){e.formValid=!!e.changePhone.valid},100)})}},{key:"presentToast",value:function(){return Object(h.a)(this,void 0,void 0,regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.toast.create({message:"There was an error with your password or email. Please try again.",duration:5e3,cssClass:"wrong-password-toast",keyboardClose:!0,position:"top"});case 2:e.sent.present();case 3:case"end":return e.stop()}},e,this)}))}},{key:"presentAlert",value:function(){return Object(h.a)(this,void 0,void 0,regeneratorRuntime.mark(function e(){var n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.alertController.create({cssClass:"danger-alert",header:"Invalid Phone",message:"New Phone cannot be the same as the current one.",buttons:[{text:"OK"}]});case 2:return n=e.sent,e.next=5,n.present();case 5:case"end":return e.stop()}},e,this)}))}},{key:"confirmChangedPhone",value:function(e,n){e==this.phone?this.presentAlert():this.profile.changePhone(e,n)}},{key:"goBack",value:function(){this.router.navigate(["/home/profile"])}}])&&n(o.prototype,r),i&&n(o,i),t}(),i.\u0275fac=function(e){return new(e||i)(f.Hb(u.a),f.Hb(l.g),f.Hb(d.a),f.Hb(b.eb),f.Hb(b.a),f.Hb(p.a))},i.\u0275cmp=f.Bb({type:i,selectors:[["app-change-phone"]],decls:31,vars:3,consts:[[1,"ion-hide-lg-up"],["slot","start"],[1,"ion-text-center"],[1,"ion-hide-lg-down","ion-justify-content-center",2,"padding-top","80px","margin-bottom","40px"],["size-xs","11","size-sm","10","size-md","10","size-lg","8","size-xl","6"],[1,"desktop-toolbar"],["slot","end"],[1,"back-button",3,"click"],[1,"ion-justify-content-center"],["size-xs","12","size-sm","10","size-md","8","size-lg","6","size-xl","6",1,"ion-text-center"],[1,"text-header",2,"width","unset"],["size-xs","11","size-sm","10","size-md","8","size-lg","6","size-xl","4"],[3,"formGroup","ngSubmit"],[1,"line-input"],["required","","maxlength","10","placeholder","New Phone","formControlName","phone","type","phone",3,"keyup.enter"],["required","","placeholder","password","formControlName","password","minlength","8","type","password",3,"keyup.enter"],["type","submit",1,"orange-button",2,"width","unset",3,"disabled"]],template:function(e,n){1&e&&(f.Mb(0,"ion-header",0),f.Mb(1,"ion-toolbar"),f.Mb(2,"ion-buttons",1),f.Ib(3,"ion-back-button"),f.Lb(),f.Mb(4,"ion-title"),f.nc(5,"Change Phone"),f.Lb(),f.Lb(),f.Lb(),f.Mb(6,"ion-content"),f.Mb(7,"ion-grid",2),f.Mb(8,"ion-row",3),f.Mb(9,"ion-col",4),f.Mb(10,"ion-toolbar",5),f.Mb(11,"ion-buttons",1),f.Mb(12,"h1"),f.nc(13,"Change Phone"),f.Lb(),f.Lb(),f.Mb(14,"ion-buttons",6),f.Mb(15,"ion-button",7),f.Ub("click",function(){return n.goBack()}),f.nc(16," Back "),f.Lb(),f.Lb(),f.Lb(),f.Lb(),f.Lb(),f.Mb(17,"ion-row",8),f.Mb(18,"ion-col",9),f.Mb(19,"h6",10),f.nc(20),f.Lb(),f.Lb(),f.Lb(),f.Mb(21,"ion-row",8),f.Mb(22,"ion-col",11),f.Mb(23,"form",12),f.Ub("ngSubmit",function(){return n.confirmChangedPhone(n.changePhone.controls.phone.value,n.changePhone.controls.password.value)}),f.Mb(24,"ion-list",13),f.Mb(25,"ion-item"),f.Mb(26,"ion-input",14),f.Ub("keyup.enter",function(){return n.formValid?n.confirmChangedPhone(n.changePhone.controls.phone.value,n.changePhone.controls.password.value):null}),f.Lb(),f.Lb(),f.Mb(27,"ion-item"),f.Mb(28,"ion-input",15),f.Ub("keyup.enter",function(){return n.formValid?n.confirmChangedPhone(n.changePhone.controls.email.value,n.changePhone.controls.password.value):null}),f.Lb(),f.Lb(),f.Lb(),f.Mb(29,"ion-button",16),f.nc(30,"CHANGE PHONE"),f.Lb(),f.Lb(),f.Lb(),f.Lb(),f.Lb(),f.Lb()),2&e&&(f.xb(20),f.oc(n.phone),f.xb(3),f.Zb("formGroup",n.changePhone),f.xb(6),f.Zb("disabled",!n.formValid))},directives:[b.u,b.S,b.h,b.e,b.f,b.R,b.o,b.t,b.I,b.n,b.g,u.o,u.j,u.c,b.C,b.x,b.w,b.db,u.m,u.e,u.i,u.b,u.f],styles:[".desktop-toolbar[_ngcontent-%COMP%]{--background:none;padding-bottom:16px;border-bottom:1px solid rgba(51,51,51,.14901960784313725)}.desktop-toolbar[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{color:#0055a5}.back-button[_ngcontent-%COMP%]{--color:#fff;--background:#0055a5;--background-hover:linear-gradient(#0055a5,#0d2e4d);height:24px;--border-radius:5px;width:100px;font-size:.5em;font-weight:600;display:block}.text-header[_ngcontent-%COMP%]{background:#e4ebf1}"]}),i)},{path:"confirm",loadChildren:function(){return r.e(57).then(r.bind(null,"Fr1S")).then(function(e){return e.ConfirmPageModule})}}],g=((s=function n(){e(this,n)}).\u0275mod=f.Fb({type:s}),s.\u0275inj=f.Eb({factory:function(e){return new(e||s)},imports:[[l.k.forChild(m)],l.k]}),s),w=((a=function n(){e(this,n)}).\u0275mod=f.Fb({type:a}),a.\u0275inj=f.Eb({factory:function(e){return new(e||a)},imports:[[c.b,u.d,u.l,b.T,g]]}),a)}}])}();