(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{qdgq:function(n,o,e){"use strict";e.r(o),e.d(o,"LoginPageModule",function(){return k});var t=e("ofXK"),i=e("3Pt+"),s=e("TEn/"),r=e("tyNb"),a=e("mrSG"),l=e("lGQG"),d=e("fXoL");const c=["autoFocusInput"];function b(n,o){if(1&n&&(d.Mb(0,"div",26),d.lc(1),d.Lb()),2&n){const n=d.Wb().$implicit;d.xb(1),d.nc(" ",n.message," ")}}function g(n,o){if(1&n&&(d.Kb(0),d.kc(1,b,2,1,"div",25),d.Jb()),2&n){const n=o.$implicit,e=d.Wb();d.xb(1),d.Zb("ngIf",e.loginForm.get("email").hasError(n.type)&&(e.loginForm.get("email").dirty||e.loginForm.get("email").touched))}}function u(n,o){if(1&n&&(d.Mb(0,"div",26),d.lc(1),d.Lb()),2&n){const n=d.Wb().$implicit;d.xb(1),d.nc(" ",n.message," ")}}function p(n,o){if(1&n&&(d.Kb(0),d.kc(1,u,2,1,"div",25),d.Jb()),2&n){const n=o.$implicit,e=d.Wb();d.xb(1),d.Zb("ngIf",e.loginForm.get("password").hasError(n.type)&&(e.loginForm.get("password").dirty||e.loginForm.get("password").touched))}}function h(n,o){if(1&n&&(d.Mb(0,"div",26),d.lc(1),d.Lb()),2&n){const n=d.Wb().$implicit;d.xb(1),d.nc(" ",n.message," ")}}function m(n,o){if(1&n&&(d.Kb(0),d.kc(1,h,2,1,"div",25),d.Jb()),2&n){const n=o.$implicit,e=d.Wb();d.xb(1),d.Zb("ngIf",e.loginForm.get("email").hasError(n.type)&&(e.loginForm.get("email").dirty||e.loginForm.get("email").touched))}}function f(n,o){if(1&n&&(d.Mb(0,"div",26),d.lc(1),d.Lb()),2&n){const n=d.Wb().$implicit;d.xb(1),d.nc(" ",n.message," ")}}function w(n,o){if(1&n&&(d.Kb(0),d.kc(1,f,2,1,"div",25),d.Jb()),2&n){const n=o.$implicit,e=d.Wb();d.xb(1),d.Zb("ngIf",e.loginForm.get("password").hasError(n.type)&&(e.loginForm.get("password").dirty||e.loginForm.get("password").touched))}}const y=function(){return["personal-info"]},L=function(){return["enter-email"]},M=[{path:"",component:(()=>{class n{constructor(n,o,e,t,i){this.formBuilder=n,this.auth=o,this.loading=e,this.toast=t,this.router=i,this.validationMessasges={email:[{type:"email",message:"Must be a valid email address"}],password:[{type:"pattern",message:"Password must be at least 6 characters with at least one lowercase character, one uppcase character, and one number."}]}}ngOnInit(){!1===window.navigator.onLine&&console.log("We are OFFLINE!"),!0===window.navigator.onLine&&console.log("We are ONLINE!"),window.addEventListener("beforeinstallprompt",n=>{console.log("beforeinstallprompt Event fired"),n.preventDefault(),this.deferredPrompt=n,console.log(this.deferredPrompt),this.deferredPrompt&&(this.downloadButton.style.display="block",this.downloadButton.addEventListener("click",()=>{this.deferredPrompt.prompt()})),this.deferredPrompt||(this.downloadButton.style.display="none")}),this.loginForm=this.formBuilder.group({email:["eddielacrosse2@gmail.com",[i.n.required,i.n.email]],password:["Lacrosse2",i.n.compose([i.n.minLength(6),i.n.required,i.n.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$")])]}),this.downloadButton=document.getElementById("download-button"),this.closeIPhoneInstallBannerButton=document.getElementById("close"),this.iPhoneInstallBanner=document.getElementById("iphone-install-banner"),this.openSafariBanner=document.getElementById("open-safari-banner"),this.openSafariClose=document.getElementById("open-safari-close");const n=window.navigator.userAgent;console.log(n),n.search("Version")>-1&&(console.log("Safari"),this.downloadButton.innerHTML="Safari"),n.search("Chrome"),n.search("Firefox")>-1&&(this.downloadButton.innerHTML="Firefox"),n.search("Edg")>-1&&(this.downloadButton.innerHTML="Edge"),n.search("OPR")>-1&&(console.log("Opera"),this.downloadButton.innerHTML="Opera"),n.search("Mobile")>-1&&(this.downloadButton.innerHTML="iOS Safari",this.downloadButton.style.display="block",this.downloadButton.addEventListener("click",()=>{console.log("Clicked Button"),this.iPhoneInstallBanner.style.display="block",this.closeIPhoneInstallBannerButton.addEventListener("click",()=>{console.log("Closing iPhone Install banner"),this.iPhoneInstallBanner.style.display="none"})})),n.search("CriOS")>-1&&(this.downloadButton.innerHTML="iOS Chrome",this.downloadButton.addEventListener("click",()=>{console.log("Clicked Button"),this.openSafariBanner.style.display="block",this.openSafariClose.addEventListener("click",()=>{console.log("Closing iPhone Install banner"),this.openSafariBanner.style.display="none"})})),n.search("FxiOS")>-1&&(this.downloadButton.innerHTML="iOS Firefox",this.downloadButton.style.display="block",this.downloadButton.addEventListener("click",()=>{console.log("Clicked Button"),this.openSafariBanner.style.display="block",this.iPhoneInstallBanner.style.display="none",this.openSafariClose.addEventListener("click",()=>{console.log("Closing iPhone Install banner"),this.openSafariBanner.style.display="none"})})),n.search("EdgiOS")>-1&&(this.downloadButton.innerHTML="iOS Edge",this.downloadButton.style.display="block",this.downloadButton.addEventListener("click",()=>{this.openSafariBanner.style.display="block",this.iPhoneInstallBanner.style.display="none",this.openSafariClose.addEventListener("click",()=>{console.log("Closing iPhone Install banner"),this.openSafariBanner.style.display="none"})})),n.search("OPT")>-1&&(this.downloadButton.innerHTML="iOS Opera",this.downloadButton.style.display="block",this.downloadButton.addEventListener("click",()=>{console.log("Clicked Button"),this.openSafariBanner.style.display="block",this.iPhoneInstallBanner.style.display="none",this.openSafariClose.addEventListener("click",()=>{console.log("Closing iPhone Install banner"),this.openSafariBanner.style.display="none"})})),n.search("iPad")>-1&&(this.downloadButton.innerHTML="iPad",this.downloadButton.style.display="block"),n.search("Chrome")>-1&&n.search("Android")>-1&&(this.downloadButton.innerHTML="Chrome Android",this.downloadButton.addEventListener("click",()=>{this.iPhoneInstallBanner.style.display="none",this.showInstallBanner()})),n.search("Firefox")>-1&&n.search("Android")>-1&&(this.downloadButton.innerHTML="Firefox Android"),n.search("EdgA")>-1&&(this.downloadButton.innerHTML="Edge Android"),n.search("SamsungBrowser")>-1&&(this.downloadButton.innerHTML="Samsung Browser"),console.log(window.navigator),window.matchMedia("(display-mode: standalone)").matches&&(console.log("display-mode is standalone"),this.iPhoneInstallBanner.style.display="none",this.openSafariBanner.style.display="none",this.downloadButton.style.display="none"),!0===window.navigator.standalone&&(console.log("display-mode is standalone"),this.iPhoneInstallBanner.style.display="none",this.openSafariBanner.style.display="none",this.downloadButton.style.display="none")}showInstallBanner(){console.log("Trying to Show Install Banner ..."),console.log(this.deferredPrompt),void 0===this.deferredPrompt&&(console.log("This page was already installed"),this.downloadButton.style.display="none"),null!=this.deferredPrompt&&(this.downloadButton.style.display="none",this.deferredPrompt.prompt(),this.deferredPrompt.userChoice.then(n=>{"accepted"===n.outcome?console.log("User accepted the A2HS prompt"):(this.downloadButton.style.display="block",this.downloadButton.style.margin="0 auto 90px auto",console.log("User dismissed the A2HS prompt")),this.deferredPrompt=null}))}ngAfterViewInit(){setTimeout(()=>{this.inputElement.setFocus()},1e3)}presentLoading(){return Object(a.a)(this,void 0,void 0,function*(){const n=yield this.loading.create({message:"Logging in...",duration:1e3,cssClass:"success-toast",keyboardClose:!0});yield n.present(),yield n.onDidDismiss()})}login(n){this.presentLoading(),this.auth.login(n)}back(){this.router.navigate(["/landing"])}download(){console.log("Attempting to download app..")}}return n.\u0275fac=function(o){return new(o||n)(d.Hb(i.a),d.Hb(l.a),d.Hb(s.S),d.Hb(s.Z),d.Hb(r.f))},n.\u0275cmp=d.Bb({type:n,selectors:[["app-login"]],viewQuery:function(n,o){if(1&n&&d.rc(c,!0),2&n){let n;d.dc(n=d.Vb())&&(o.inputElement=n.first)}},decls:59,vars:14,consts:[[1,"ion-hide-md-up"],[1,"ion-justify-content-center"],["size-xs","8","size-sm","8","size-md","8",1,"ion-text-center",2,"margin-top","10%"],["id","logo","src","../../../../assets/logo-2.png"],["size-xs","8","size-sm","8","size-md","8",1,"ion-text-center"],[3,"formGroup","ngSubmit"],[1,"line-input"],["required","","placeholder","Email","inputmode","email","formControlName","email","type","email",3,"keyup.enter"],[1,"validation-errors"],[4,"ngFor","ngForOf"],["required","","placeholder","Password","inputmode","text","formControlName","password","type","password",3,"keyup.enter"],["size","12"],["type","submit",1,"orange-button"],[1,"blue-button",3,"routerLink"],["id","forgot",3,"routerLink"],[1,"ion-text-center","ion-hide-md-down"],["size-md","4","size-lg","4","size-xl","4",2,"margin-top","5%"],["src","../../../../assets/logo-2.png",2,"height","70px","margin","35px 0 30px 0"],["autoFocusInput",""],["type","submit",1,"orange-button",2,"width","200px"],["size","6",1,"ion-hide-sm-down"],["size","6"],["text-center","","id","forgot",3,"routerLink"],[1,"grey-button",3,"click"],["id","download-button",2,"border-radius","0"],["class","error-message",4,"ngIf"],[1,"error-message"]],template:function(n,o){1&n&&(d.Mb(0,"ion-content"),d.Mb(1,"ion-grid",0),d.Mb(2,"ion-row",1),d.Mb(3,"ion-col",2),d.Ib(4,"img",3),d.Lb(),d.Lb(),d.Mb(5,"ion-row",1),d.Mb(6,"ion-col",4),d.Mb(7,"form",5),d.Ub("ngSubmit",function(){return o.login(o.loginForm.value)}),d.Mb(8,"ion-list",6),d.Mb(9,"ion-item"),d.Mb(10,"ion-input",7),d.Ub("keyup.enter",function(){return o.login(o.loginForm.value)}),d.Lb(),d.Lb(),d.Mb(11,"div",8),d.kc(12,g,2,1,"ng-container",9),d.Lb(),d.Mb(13,"ion-item"),d.Mb(14,"ion-input",10),d.Ub("keyup.enter",function(){return o.login(o.loginForm.value)}),d.Lb(),d.Lb(),d.Mb(15,"div",8),d.kc(16,p,2,1,"ng-container",9),d.Lb(),d.Lb(),d.Mb(17,"ion-col",11),d.Mb(18,"ion-button",12),d.lc(19,"Login"),d.Lb(),d.Lb(),d.Lb(),d.Lb(),d.Lb(),d.Mb(20,"ion-row",1),d.Mb(21,"ion-col",11),d.Mb(22,"ion-button",13),d.lc(23,"Sign Up "),d.Lb(),d.Lb(),d.Mb(24,"ion-col",11),d.Mb(25,"ion-button",14),d.lc(26,"Forgot Password?"),d.Lb(),d.Lb(),d.Lb(),d.Lb(),d.Mb(27,"ion-grid",15),d.Mb(28,"ion-row",1),d.Mb(29,"ion-col",16),d.Mb(30,"form",5),d.Ub("ngSubmit",function(){return o.login(o.loginForm.value)}),d.Mb(31,"ion-list",6),d.Ib(32,"img",17),d.Mb(33,"ion-item"),d.Mb(34,"ion-input",7,18),d.Ub("keyup.enter",function(){return o.login(o.loginForm.value)}),d.Lb(),d.Lb(),d.Mb(36,"div",8),d.kc(37,m,2,1,"ng-container",9),d.Lb(),d.Mb(38,"ion-item"),d.Mb(39,"ion-input",10),d.Ub("keyup.enter",function(){return o.login(o.loginForm.value)}),d.Lb(),d.Lb(),d.Lb(),d.Mb(40,"div",8),d.kc(41,w,2,1,"ng-container",9),d.Lb(),d.Mb(42,"ion-button",19),d.lc(43,"Login"),d.Lb(),d.Lb(),d.Lb(),d.Lb(),d.Mb(44,"ion-row",1),d.Mb(45,"ion-col",20),d.Mb(46,"ion-button",13),d.lc(47,"Sign Up "),d.Lb(),d.Lb(),d.Lb(),d.Mb(48,"ion-row",1),d.Mb(49,"ion-col",21),d.Mb(50,"ion-button",22),d.lc(51,"Forgot Password?"),d.Lb(),d.Lb(),d.Lb(),d.Mb(52,"ion-row",1),d.Mb(53,"ion-col",21),d.Mb(54,"ion-button",23),d.Ub("click",function(){return o.back()}),d.lc(55,"Back"),d.Lb(),d.Lb(),d.Lb(),d.Lb(),d.Lb(),d.Mb(56,"ion-footer"),d.Mb(57,"button",24),d.lc(58,"Install App"),d.Lb(),d.Lb()),2&n&&(d.xb(7),d.Zb("formGroup",o.loginForm),d.xb(5),d.Zb("ngForOf",o.validationMessasges.email),d.xb(4),d.Zb("ngForOf",o.validationMessasges.password),d.xb(6),d.Zb("routerLink",d.cc(10,y)),d.xb(3),d.Zb("routerLink",d.cc(11,L)),d.xb(5),d.Zb("formGroup",o.loginForm),d.xb(7),d.Zb("ngForOf",o.validationMessasges.email),d.xb(4),d.Zb("ngForOf",o.validationMessasges.password),d.xb(5),d.Zb("routerLink",d.cc(12,y)),d.xb(4),d.Zb("routerLink",d.cc(13,L)))},directives:[s.o,s.t,s.G,s.n,i.o,i.j,i.c,s.C,s.x,s.w,s.Y,i.m,i.i,i.b,t.h,s.g,s.W,r.g,s.s,t.i],styles:["ion-content[_ngcontent-%COMP%]{text-align:center}#logo[_ngcontent-%COMP%]{height:50px;margin:5px 0 30px}ion-footer[_ngcontent-%COMP%]{opacity:1;border:none}ion-button[_ngcontent-%COMP%]{margin:0}#download-button[_ngcontent-%COMP%]{background:linear-gradient(90deg,#1fcc6d 19.625%,#1ecb6c 0,#17bf28 79.625%);-webkit-background:linear-gradient(90deg,#1fcc6d 19.625%,#1ecb6c 0,#17bf28 79.625%);color:#fff;width:100%;height:60px;font-size:1.4em;font-weight:500;margin:0;border-radius:0!important;transition:.5;position:fixed;bottom:0;left:0;display:none;-webkit-animation:slide-up .5s ease 1s forwards;animation:slide-up .5s ease 1s forwards;transform:translateY(100%)}@-webkit-keyframes slide-up{0%{transform:translateY(100%)}to{transform:translateY(0);opacity:1}}@keyframes slide-up{0%{transform:translateY(100%)}to{transform:translateY(0);opacity:1}}#sign-up-button[_ngcontent-%COMP%]{width:200px;--color:#fff;--background:linear-gradient(#005191,#000)}#forgot[_ngcontent-%COMP%], #sign-up-button[_ngcontent-%COMP%]{height:50px;font-size:1em;font-weight:700;opacity:0}#forgot[_ngcontent-%COMP%]{width:220px;margin-top:20px;--background:none;--background-hover:#474444;--color:hsla(0,0%,51%,0.5);--color-hover:#fff;--transition:0.5s;-webkit-animation:slide-up .5s ease 1.5s forwards;animation:slide-up .5s ease 1.5s forwards}.grey-button[_ngcontent-%COMP%]{width:150px;height:40px;font-size:1em;font-weight:700;margin:10px auto;--border-width:1px;--border-style:solid;--border-color:#999;--background:none;--color:#999;--border-radius:5px}"]}),n})()}];let B=(()=>{class n{}return n.\u0275mod=d.Fb({type:n}),n.\u0275inj=d.Eb({factory:function(o){return new(o||n)},imports:[[r.j.forChild(M)],r.j]}),n})(),k=(()=>{class n{}return n.\u0275mod=d.Fb({type:n}),n.\u0275inj=d.Eb({factory:function(o){return new(o||n)},imports:[[t.b,i.d,s.Q,B,i.l]]}),n})()}}]);