(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{"RA/u":function(n,o,t){"use strict";t.r(o),t.d(o,"ConfirmPhotoPageModule",function(){return a});var e=t("ofXK"),i=t("3Pt+"),c=t("TEn/"),r=t("tyNb"),b=t("fXoL");const l=[{path:"",component:(()=>{class n{constructor(n){this.router=n}ngOnInit(){}uploadPhoto(){console.log("User has successfully uploaded photo from their phones camera"),this.router.navigate(["/home/profile/change-profile-picture/confirm"])}takeAnotherPhoto(){console.error("TODO: takeAnotherPhoto() not implemented yet")}cancel(){console.log("change photo cancelled"),this.router.navigate(["/home/profile"])}}return n.\u0275fac=function(o){return new(o||n)(b.Hb(r.f))},n.\u0275cmp=b.Bb({type:n,selectors:[["app-confirm-photo"]],decls:28,vars:0,consts:[[1,"ion-hide-lg-up"],["id","cancel-button","slot","end",3,"click"],[1,"ion-text-center"],[1,"ion-hide-md-down",2,"margin","5% 0% 3% 0%"],["offset","2.5","size","2.5"],["push","2.8","size","2"],[1,"back-button",3,"click"],[1,"ion-justify-content-center","ion-hide-md-down"],["size","10"],[2,"background-color","#00000044"],[1,"ion-justify-content-center"],["size-xs","11","size-sm","10","size-md","8","size-lg","6","id","main-content-col"],[2,"width","100px","height","100px","border-radius","100px","background","lightgrey","margin","30px auto 0px"],[1,"text-header"],["id","next-button",1,"orange-button",2,"margin-right","16px",3,"click"],["id","next-button",1,"orange-button",3,"click"]],template:function(n,o){1&n&&(b.Mb(0,"ion-header",0),b.Mb(1,"ion-toolbar"),b.Mb(2,"ion-title"),b.lc(3,"Confirm Photo"),b.Lb(),b.Mb(4,"ion-button",1),b.Ub("click",function(){return o.cancel()}),b.lc(5," Cancel "),b.Lb(),b.Lb(),b.Lb(),b.Mb(6,"ion-content",2),b.Mb(7,"ion-grid"),b.Mb(8,"ion-row",3),b.Mb(9,"ion-col",4),b.Mb(10,"h1"),b.lc(11,"Confirm Photo"),b.Lb(),b.Lb(),b.Mb(12,"ion-col",5),b.Mb(13,"ion-button",6),b.Ub("click",function(){return o.cancel()}),b.lc(14," Cancel "),b.Lb(),b.Lb(),b.Lb(),b.Mb(15,"ion-row",7),b.Mb(16,"ion-col",8),b.Ib(17,"hr",9),b.Lb(),b.Lb(),b.Mb(18,"ion-row",10),b.Mb(19,"ion-col",11),b.Mb(20,"div",12),b.lc(21," New picture goes here "),b.Lb(),b.Mb(22,"h6",13),b.lc(23,"Are you sure you want to use this photo?"),b.Lb(),b.Mb(24,"ion-button",14),b.Ub("click",function(){return o.uploadPhoto()}),b.lc(25,"YES"),b.Lb(),b.Mb(26,"ion-button",15),b.Ub("click",function(){return o.takeAnotherPhoto()}),b.lc(27,"TAKE ANOTHER PHOTO"),b.Lb(),b.Lb(),b.Lb(),b.Lb(),b.Lb())},directives:[c.u,c.P,c.O,c.g,c.o,c.t,c.G,c.n],styles:["ion-title[_ngcontent-%COMP%]{margin:0}h6.text-header[_ngcontent-%COMP%]{font-size:1.3em;margin:30px auto;padding:unset}.orange-button[_ngcontent-%COMP%]{width:unset}@media screen and (max-width:384px){#main-content-col[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]:last-child{margin-top:15px}}"]}),n})()}];let u=(()=>{class n{}return n.\u0275mod=b.Fb({type:n}),n.\u0275inj=b.Eb({factory:function(o){return new(o||n)},imports:[[r.j.forChild(l)],r.j]}),n})(),a=(()=>{class n{}return n.\u0275mod=b.Fb({type:n}),n.\u0275inj=b.Eb({factory:function(o){return new(o||n)},imports:[[e.b,i.d,c.Q,u]]}),n})()}}]);