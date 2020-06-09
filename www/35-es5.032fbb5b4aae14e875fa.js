function _defineProperties(n,e){for(var l=0;l<e.length;l++){var t=e[l];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}function _createClass(n,e,l){return e&&_defineProperties(n.prototype,e),l&&_defineProperties(n,l),n}function _classCallCheck(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{tNEj:function(n,e,l){"use strict";l.r(e);var t=l("8Y7J"),o=function n(){_classCallCheck(this,n)},u=l("pMnS"),r=l("oBZk"),i=l("ZZ/e"),a=l("s7LF"),s=l("mrSG"),c=l("lGQG"),b=l("h8Q2"),d=function(){function n(e,l,t,o){_classCallCheck(this,n),this.router=e,this.alertController=l,this.auth=t,this.resume=o,this.uploaded=!0}return _createClass(n,[{key:"ngOnInit",value:function(){}},{key:"getFormData",value:function(n){var e=this;document.querySelectorAll("form").forEach((function(n){"resume-form"===n.id&&(console.log("Got Form: "+n),e.formData=new FormData(n))}))}},{key:"uploadResume",value:function(){var n=this;this.resume.resumeUpload(this.formData).subscribe((function(e){console.log(e.objectUrl),n.goToCredentialsPage(e.objectUrl)}))}},{key:"goToCredentialsPage",value:function(n){this.auth.getResume(n),console.log("Going to Credentials Page"),this.router.navigate(["/personal-info/profile-picture/upload-resume/login-credentials"])}},{key:"getFileFromPhone",value:function(){console.error("TODO: getFileFromPhone() not implemented yet")}},{key:"cancel",value:function(){console.log("Sign up cancelled"),this.router.navigate([""])}},{key:"skip",value:function(){console.log("Skipping to Upload Resume >>"),this.presentAlert()}},{key:"presentAlert",value:function(){return s.b(this,void 0,void 0,regeneratorRuntime.mark((function n(){var e,l=this;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.alertController.create({header:"Skip",message:"Are you sure you want to skip? You can always upload a Resume in the future by going to your Profile.",buttons:[{text:"Skip",handler:function(){document.querySelectorAll("canvas").forEach((function(n){"default-picture-wrapper"===n.id&&(console.log("Got Canvas: "+n.toDataURL),n.toBlob((function(n){return s.b(l,void 0,void 0,regeneratorRuntime.mark((function e(){var l,t,o=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l=new FormData,e.next=3,l.set("profile-picture",n,"default.png");case 3:return console.log(l),t=new FileReader,l&&t.readAsBinaryString(n),e.next=8,this.resume.resumeUpload(l).subscribe((function(n){return console.log(n),console.log("Default Image Upload API Successful"),o.goToCredentialsPage(n.objectUrl)}));case 8:case"end":return e.stop()}}),e,this)})))})))}))}},{text:"Cancel",role:"cancel",handler:function(){console.log("Cancelling Resume Upload Skip...")}}]});case 2:return e=n.sent,n.next=5,e.present();case 5:case"end":return n.stop()}}),n,this)})))}}]),n}(),p=l("iInd"),g=t.zb({encapsulation:0,styles:[["ion-title[_ngcontent-%COMP%]{margin:0}.cancel-button[_ngcontent-%COMP%]{color:#e4405f;--background:linear-gradient(#fdfbfb, #fff7f8);--background-hover:linear-gradient(#f15b77, #e4405f);height:50px;width:150px;transition:.5s;transition-timing-function:cubic-bezier(.175,.885,.32,1.275)}.cancel-button[_ngcontent-%COMP%]:hover{color:#fff}h6[_ngcontent-%COMP%]{margin:30px auto;padding:unset}.no-resume[_ngcontent-%COMP%]{background:rgba(13,70,123,.1);font-size:.8em;padding:20px;margin:60px 0;transition:.5s;opacity:0;-webkit-animation:.5s 1.5s forwards slide-up;animation:.5s 1.5s forwards slide-up}.uploaded-resume[_ngcontent-%COMP%]{background:rgba(33,223,130,.1);font-size:.8em;padding:20px;margin:60px 0;transition:.5s;opacity:0;-webkit-animation:.5s .5s forwards slide-up;animation:.5s .5s forwards slide-up}.text-header[_ngcontent-%COMP%]{background:#edf3f8;width:100%;position:relative;top:-40px;padding:50px 0;color:#666;z-index:999}.get-file[_ngcontent-%COMP%]{display:block;--background:none;color:#005191;--border-color:#005191;--border-width:1px;--border-style:solid;border:1px;width:130px;margin:30px auto}span[_ngcontent-%COMP%]{color:#005191;font-weight:600;background:#fff;padding:6px;line-height:1.5em;border-radius:5px}.skip-button[_ngcontent-%COMP%]{display:block;border:none;--background:rgb(230, 230, 230);color:#888;width:150px;margin:40px auto;-webkit-animation:none;animation:none;opacity:.5}input[type=file][_ngcontent-%COMP%]{color:#005191;font-size:1.2em;font-weight:600;border:1px solid #005191;background:linear-gradient(rgba(6,114,196,.3),rgba(0,81,145,.2));width:auto;height:50px;border-radius:5px;padding:20px 0 0;text-align:center;cursor:pointer;margin:50px auto}input[type=file][_ngcontent-%COMP%]:hover{background:linear-gradient(#0672c4,#054372);color:#fff}input[type=file][_ngcontent-%COMP%]::-webkit-file-upload-button{visibility:hidden}@-webkit-keyframes slide-up{0%{transform:translateY(100px)}100%{transform:translateY(0);opacity:1}}@keyframes slide-up{0%{transform:translateY(100px)}100%{transform:translateY(0);opacity:1}}"]],data:{}});function f(n){return t.Vb(0,[(n()(),t.Bb(0,0,null,null,1,"ion-header",[["style","display: none;"]],null,null,null,r.cb,r.r)),t.Ab(1,49152,null,0,i.B,[t.j,t.p,t.F],null,null),(n()(),t.Bb(2,0,null,null,27,"ion-content",[["class","ion-text-center"]],null,null,null,r.W,r.l)),t.Ab(3,49152,null,0,i.u,[t.j,t.p,t.F],null,null),(n()(),t.Bb(4,0,null,0,25,"ion-grid",[],null,null,null,r.bb,r.q)),t.Ab(5,49152,null,0,i.A,[t.j,t.p,t.F],null,null),(n()(),t.Bb(6,0,null,0,23,"ion-row",[["class","ion-justify-content-center"]],null,null,null,r.kb,r.z)),t.Ab(7,49152,null,0,i.jb,[t.j,t.p,t.F],null,null),(n()(),t.Bb(8,0,null,0,21,"ion-col",[["size","12"]],null,null,null,r.V,r.k)),t.Ab(9,49152,null,0,i.t,[t.j,t.p,t.F],{size:[0,"size"]},null),(n()(),t.Bb(10,0,null,0,4,"h6",[["class","text-header"]],null,null,null,null,null)),(n()(),t.Tb(-1,null,["Please upload your Resume. Only "])),(n()(),t.Bb(12,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),t.Tb(-1,null,[".pdf"])),(n()(),t.Tb(-1,null,[" files are allowed."])),(n()(),t.Bb(15,0,null,0,8,"form",[["id","resume-form"],["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],(function(n,e,l){var o=!0,u=n.component;return"submit"===e&&(o=!1!==t.Nb(n,17).onSubmit(l)&&o),"reset"===e&&(o=!1!==t.Nb(n,17).onReset()&&o),"ngSubmit"===e&&(o=!1!==u.uploadResume()&&o),o}),null,null)),t.Ab(16,16384,null,0,a.t,[],null,null),t.Ab(17,4210688,null,0,a.m,[[8,null],[8,null]],null,{ngSubmit:"ngSubmit"}),t.Qb(2048,null,a.a,null,[a.m]),t.Ab(19,16384,null,0,a.l,[[4,a.a]],null,null),(n()(),t.Bb(20,0,null,null,0,"input",[["name","resume"],["placeholder","Upload Image"],["type","file"]],null,[[null,"change"]],(function(n,e,l){var t=!0;return"change"===e&&(t=!1!==n.component.getFormData(l)&&t),t}),null,null)),(n()(),t.Bb(21,0,null,null,2,"ion-button",[["class","orange-button"],["style","display: block;"],["type","submit"]],null,null,null,r.O,r.d)),t.Ab(22,49152,null,0,i.k,[t.j,t.p,t.F],{disabled:[0,"disabled"],type:[1,"type"]},null),(n()(),t.Tb(-1,0,[" NEXT"])),(n()(),t.Bb(24,0,null,0,2,"ion-button",[["class","blue-button skip-button"]],null,[[null,"click"]],(function(n,e,l){var t=!0;return"click"===e&&(t=!1!==n.component.skip()&&t),t}),r.O,r.d)),t.Ab(25,49152,null,0,i.k,[t.j,t.p,t.F],null,null),(n()(),t.Tb(-1,0,[" Skip "])),(n()(),t.Bb(27,0,null,0,2,"ion-button",[["class","cancel-button"]],null,[[null,"click"]],(function(n,e,l){var t=!0;return"click"===e&&(t=!1!==n.component.cancel()&&t),t}),r.O,r.d)),t.Ab(28,49152,null,0,i.k,[t.j,t.p,t.F],null,null),(n()(),t.Tb(-1,0,[" Cancel "]))],(function(n,e){var l=e.component;n(e,9,0,"12"),n(e,22,0,!l.uploaded,"submit")}),(function(n,e){n(e,15,0,t.Nb(e,19).ngClassUntouched,t.Nb(e,19).ngClassTouched,t.Nb(e,19).ngClassPristine,t.Nb(e,19).ngClassDirty,t.Nb(e,19).ngClassValid,t.Nb(e,19).ngClassInvalid,t.Nb(e,19).ngClassPending)}))}var m=t.xb("app-upload-resume",d,(function(n){return t.Vb(0,[(n()(),t.Bb(0,0,null,null,1,"app-upload-resume",[],null,null,null,f,g)),t.Ab(1,114688,null,0,d,[p.m,i.a,c.a,b.a],null,null)],(function(n,e){n(e,1,0)}),null)}),{},{},[]),h=l("SVse"),k=function(){return l.e(31).then(l.bind(null,"OLDa")).then((function(n){return n.LoginCredentialsPageModuleNgFactory}))},y=function n(){_classCallCheck(this,n)};l.d(e,"UploadResumePageModuleNgFactory",(function(){return v}));var v=t.yb(o,[],(function(n){return t.Kb([t.Lb(512,t.m,t.jb,[[8,[u.a,m]],[3,t.m],t.D]),t.Lb(4608,h.l,h.k,[t.z,[2,h.s]]),t.Lb(4608,a.r,a.r,[]),t.Lb(4608,a.b,a.b,[]),t.Lb(4608,i.b,i.b,[t.F,t.g]),t.Lb(4608,i.Hb,i.Hb,[i.b,t.m,t.w]),t.Lb(4608,i.Lb,i.Lb,[i.b,t.m,t.w]),t.Lb(1073742336,h.c,h.c,[]),t.Lb(1073742336,a.q,a.q,[]),t.Lb(1073742336,a.e,a.e,[]),t.Lb(1073742336,a.n,a.n,[]),t.Lb(1073742336,i.Eb,i.Eb,[]),t.Lb(1073742336,p.q,p.q,[[2,p.v],[2,p.m]]),t.Lb(1073742336,y,y,[]),t.Lb(1073742336,o,o,[]),t.Lb(1024,p.k,(function(){return[[{path:"",component:d},{path:"login-credentials",loadChildren:k}]]}),[])])}))}}]);