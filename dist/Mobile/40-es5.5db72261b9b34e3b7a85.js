(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{tXR0:function(l,n,o){"use strict";o.r(n);var t=o("CcnG"),u=function(){return function(){}}(),i=o("pMnS"),e=o("wWec"),b=o("b7Ok"),s=o("U8oy"),c=o("Aso2"),r=o("oBZk"),a=o("ZZ/e"),p=o("Ip0R"),h=o("7xvl"),g=o("lFXj"),f=function(){function l(l,n,o,t,u){this.router=l,this.favorites=n,this.profile=o,this.eventEmitterService=t,this.location=u}return l.prototype.ngOnInit=function(){var l=this;this.location.onPopState((function(){l.eventEmitterService.onBackAction()})),this.getFavoriteJobs()},l.prototype.back=function(){this.eventEmitterService.onBackAction(),this.router.navigate(["/home/jobs"])},l.prototype.getFavoriteJobs=function(){var l=this;this.profile.getUserDetails().subscribe((function(n){l.userEmail=n.email,l.favorites.favoriteJobs$.subscribe((function(n){console.log("Favorite Jobs in Service: "+n),l.favorites.getFavorites(l.userEmail).subscribe((function(n){l.favoriteJobsObj=n,console.log("Favorite jobs:"),console.log(n);for(var o=0,t=l.favoriteJobsObj;o<t.length;o++){var u=t[o];u.dateCreated=Object(h.a)(new Date(u.dateCreated),{addSuffix:!0})}}))}))}))},l.prototype.jobPage=function(l){console.log(l),console.log("Going to specific Job Page"),this.router.navigate(["/home/jobs/job-page",l._id,l.title,l.companyName,l.companyEmail,l.summary,l.fullJobDescription,l.rateOfPay]),console.log(l.name)},l.prototype.favoriteJobPage=function(){console.log("Going to favorite bad")},l}(),d=o("ZYCi"),z=t.rb({encapsulation:0,styles:[["ion-title[_ngcontent-%COMP%]{margin:0}.company-logo[_ngcontent-%COMP%]{background-image:url(journi-logo.394c593afb46f04d7760.png);background-repeat:no-repeat;background-size:contain;background-position:center}.job-section[_ngcontent-%COMP%]{background:#fff;height:auto;color:#777;position:relative;top:20px;width:100%;margin-bottom:50px;padding-bottom:10px;box-shadow:1px 10px 10px rgba(0,0,0,.1)}#job-details[_ngcontent-%COMP%]{color:#005191;--background:white;--background-hover:linear-gradient(#0672c4, #00467c);--color-hover:white;font-size:15px;height:45px;border-radius:10px;box-shadow:1px 1px 10px rgba(0,0,0,.1)}#favorites-button[_ngcontent-%COMP%]{opacity:1;--background:rgba(255,255,255,0.1);--color:white;--border-style:solid;--border-width:1px;--border-color:white;box-shadow:1px 1px 10px rgba(0,0,0,.1);width:70px;height:40px;font-size:.8em;font-weight:600}ion-icon[_ngcontent-%COMP%]{color:red;font-size:25px;position:relative;right:5px}ion-searchbar[_ngcontent-%COMP%]{--background:white;border-radius:5px;--height:60px;--box-shadow:none;--cancel-button-color:#005191;--clear-button-color:#005191;--placeholder-opacity:0.5;--icon-color:#005191;-webkit-transition:.5s;transition:.5s;padding:5px}h6[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{display:block}--ion-buttons[_ngcontent-%COMP%]{--color:#888}#job-summary[_ngcontent-%COMP%]{font-size:1.1em;line-height:29px;position:relative;color:#666;opacity:.7;top:-60px}#company-name[_ngcontent-%COMP%]{font-size:.9em;opacity:.8;position:relative;top:-31px}#job-title[_ngcontent-%COMP%]{font-size:.9em;font-weight:500;position:relative;top:-15px}#job-posted-date[_ngcontent-%COMP%]{font-size:10px;opacity:.7;position:relative;top:-43px}@media only screen and (min-width:576px){#job-title[_ngcontent-%COMP%]{font-size:1.3em;font-weight:500}}"]],data:{}});function k(l){return t.Nb(0,[(l()(),t.tb(0,0,null,null,1,"app-heart-icon",[],null,null,null,e.b,e.a)),t.sb(1,114688,null,0,b.a,[s.a,c.a],{job:[0,"job"],favoriteJobs:[1,"favoriteJobs"]},null)],(function(l,n){l(n,1,0,n.parent.context.$implicit,n.component.favoriteJobsObj)}),null)}function m(l){return t.Nb(0,[(l()(),t.tb(0,0,null,null,37,"ion-row",[["class","job-section"]],null,null,null,r.kb,r.z)),t.sb(1,49152,null,0,a.jb,[t.h,t.k,t.z],null,null),(l()(),t.tb(2,0,null,0,18,"ion-col",[["push","0.5"],["size","10"],["style","padding-top: 30px"]],null,null,null,r.V,r.k)),t.sb(3,49152,null,0,a.t,[t.h,t.k,t.z],{push:[0,"push"],size:[1,"size"]},null),(l()(),t.tb(4,0,null,0,16,"ion-row",[],null,null,null,r.kb,r.z)),t.sb(5,49152,null,0,a.jb,[t.h,t.k,t.z],null,null),(l()(),t.tb(6,0,null,0,2,"ion-col",[["size","1"]],null,null,null,r.V,r.k)),t.sb(7,49152,null,0,a.t,[t.h,t.k,t.z],{size:[0,"size"]},null),(l()(),t.tb(8,0,null,0,0,"div",[["class","company-logo"],["style","height: 40px; width: 40px;"]],null,null,null,null,null)),(l()(),t.tb(9,0,null,0,7,"ion-col",[["push-xs","0.5"],["size","8.7"]],null,null,null,r.V,r.k)),t.sb(10,49152,null,0,a.t,[t.h,t.k,t.z],{size:[0,"size"]},null),(l()(),t.tb(11,0,null,0,1,"h5",[["id","job-title"]],null,null,null,null,null)),(l()(),t.Lb(12,null,["",""])),(l()(),t.tb(13,0,null,0,1,"p",[["id","company-name"]],null,null,null,null,null)),(l()(),t.Lb(14,null,["",""])),(l()(),t.tb(15,0,null,0,1,"h5",[["id","job-posted-date"]],null,null,null,null,null)),(l()(),t.Lb(16,null,["Posted: ",""])),(l()(),t.tb(17,0,null,0,3,"ion-col",[["push","1"],["size","1"]],null,null,null,r.V,r.k)),t.sb(18,49152,null,0,a.t,[t.h,t.k,t.z],{push:[0,"push"],size:[1,"size"]},null),(l()(),t.ib(16777216,null,0,1,null,k)),t.sb(20,16384,null,0,p.j,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.tb(21,0,null,0,7,"ion-col",[["size","12"]],null,null,null,r.V,r.k)),t.sb(22,49152,null,0,a.t,[t.h,t.k,t.z],{size:[0,"size"]},null),(l()(),t.tb(23,0,null,0,5,"ion-row",[],null,null,null,r.kb,r.z)),t.sb(24,49152,null,0,a.jb,[t.h,t.k,t.z],null,null),(l()(),t.tb(25,0,null,0,3,"ion-col",[["push","0.5"],["size","10.5"]],null,null,null,r.V,r.k)),t.sb(26,49152,null,0,a.t,[t.h,t.k,t.z],{push:[0,"push"],size:[1,"size"]},null),(l()(),t.tb(27,0,null,0,1,"p",[["id","job-summary"]],null,null,null,null,null)),(l()(),t.Lb(28,null,["",""])),(l()(),t.tb(29,0,null,0,8,"ion-col",[["size","12"]],null,null,null,r.V,r.k)),t.sb(30,49152,null,0,a.t,[t.h,t.k,t.z],{size:[0,"size"]},null),(l()(),t.tb(31,0,null,0,6,"ion-row",[],null,null,null,r.kb,r.z)),t.sb(32,49152,null,0,a.jb,[t.h,t.k,t.z],null,null),(l()(),t.tb(33,0,null,0,4,"ion-col",[["push","0.5"],["size","10.5"]],null,null,null,r.V,r.k)),t.sb(34,49152,null,0,a.t,[t.h,t.k,t.z],{push:[0,"push"],size:[1,"size"]},null),(l()(),t.tb(35,0,null,0,2,"ion-button",[["class","grey-button ion-float-right"]],null,[[null,"click"]],(function(l,n,o){var t=!0;return"click"===n&&(t=!1!==l.component.jobPage(l.context.$implicit)&&t),t}),r.O,r.d)),t.sb(36,49152,null,0,a.k,[t.h,t.k,t.z],null,null),(l()(),t.Lb(-1,0,[" Details "]))],(function(l,n){var o=n.component;l(n,3,0,"0.5","10"),l(n,7,0,"1"),l(n,10,0,"8.7"),l(n,18,0,"1","1"),l(n,20,0,o.favoriteJobsObj),l(n,22,0,"12"),l(n,26,0,"0.5","10.5"),l(n,30,0,"12"),l(n,34,0,"0.5","10.5")}),(function(l,n){l(n,12,0,n.context.$implicit.title),l(n,14,0,n.context.$implicit.companyName),l(n,16,0,n.context.$implicit.dateCreated),l(n,28,0,n.context.$implicit.summary)}))}function v(l){return t.Nb(0,[(l()(),t.tb(0,0,null,null,11,"ion-header",[["class","ion-hide-lg-up"]],null,null,null,r.cb,r.r)),t.sb(1,49152,null,0,a.B,[t.h,t.k,t.z],null,null),(l()(),t.tb(2,0,null,0,9,"ion-toolbar",[],null,null,null,r.vb,r.K)),t.sb(3,49152,null,0,a.Cb,[t.h,t.k,t.z],null,null),(l()(),t.tb(4,0,null,0,2,"ion-title",[["slot","end"]],null,null,null,r.ub,r.J)),t.sb(5,49152,null,0,a.Ab,[t.h,t.k,t.z],null,null),(l()(),t.Lb(-1,0,["Favorite Jobs"])),(l()(),t.tb(7,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,r.P,r.e)),t.sb(8,49152,null,0,a.l,[t.h,t.k,t.z],null,null),(l()(),t.tb(9,0,null,0,2,"ion-back-button",[],null,[[null,"click"]],(function(l,n,o){var u=!0;return"click"===n&&(u=!1!==t.Fb(l,11).onClick(o)&&u),u}),r.N,r.c)),t.sb(10,49152,null,0,a.g,[t.h,t.k,t.z],null,null),t.sb(11,16384,null,0,a.h,[[2,a.ib],a.Ib],null,null),(l()(),t.tb(12,0,null,null,20,"ion-content",[],null,null,null,r.W,r.l)),t.sb(13,49152,null,0,a.u,[t.h,t.k,t.z],null,null),(l()(),t.tb(14,0,null,0,18,"ion-grid",[],null,null,null,r.bb,r.q)),t.sb(15,49152,null,0,a.A,[t.h,t.k,t.z],null,null),(l()(),t.tb(16,0,null,0,10,"ion-row",[["class","ion-hide-md-down"],["style","margin: 5% 0% 5% 0%;"]],null,null,null,r.kb,r.z)),t.sb(17,49152,null,0,a.jb,[t.h,t.k,t.z],null,null),(l()(),t.tb(18,0,null,0,3,"ion-col",[["offset","2.9"],["size","2.5"]],null,null,null,r.V,r.k)),t.sb(19,49152,null,0,a.t,[t.h,t.k,t.z],{offset:[0,"offset"],size:[1,"size"]},null),(l()(),t.tb(20,0,null,0,1,"h1",[],null,null,null,null,null)),(l()(),t.Lb(-1,null,["Favorite Jobs"])),(l()(),t.tb(22,0,null,0,4,"ion-col",[["push","2.3"],["size","2"]],null,null,null,r.V,r.k)),t.sb(23,49152,null,0,a.t,[t.h,t.k,t.z],{push:[0,"push"],size:[1,"size"]},null),(l()(),t.tb(24,0,null,0,2,"ion-button",[["class","blue-button"]],null,[[null,"click"]],(function(l,n,o){var t=!0;return"click"===n&&(t=!1!==l.component.back()&&t),t}),r.O,r.d)),t.sb(25,49152,null,0,a.k,[t.h,t.k,t.z],null,null),(l()(),t.Lb(-1,0,[" Back "])),(l()(),t.tb(27,0,null,0,5,"ion-row",[["class","ion-justify-content-center"]],null,null,null,r.kb,r.z)),t.sb(28,49152,null,0,a.jb,[t.h,t.k,t.z],null,null),(l()(),t.tb(29,0,null,0,3,"ion-col",[["size-lg","6"],["size-md","8"],["size-sm","10"],["size-xs","12"]],null,null,null,r.V,r.k)),t.sb(30,49152,null,0,a.t,[t.h,t.k,t.z],null,null),(l()(),t.ib(16777216,null,0,1,null,m)),t.sb(32,278528,null,0,p.i,[t.O,t.L,t.s],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){var o=n.component;l(n,19,0,"2.9","2.5"),l(n,23,0,"2.3","2"),l(n,32,0,o.favoriteJobsObj)}),null)}function x(l){return t.Nb(0,[(l()(),t.tb(0,0,null,null,1,"app-favorites",[],null,null,null,v,z)),t.sb(1,114688,null,0,f,[d.m,s.a,c.a,g.a,p.n],null,null)],(function(l,n){l(n,1,0)}),null)}var j=t.pb("app-favorites",f,x,{},{},[]),w=o("gIcY"),y=function(){return function(){}}(),O=o("zAgk");o.d(n,"FavoritesPageModuleNgFactory",(function(){return P}));var P=t.qb(u,[],(function(l){return t.Cb([t.Db(512,t.j,t.bb,[[8,[i.a,j]],[3,t.j],t.x]),t.Db(4608,p.l,p.k,[t.u,[2,p.s]]),t.Db(4608,w.r,w.r,[]),t.Db(4608,a.b,a.b,[t.z,t.g]),t.Db(4608,a.Hb,a.Hb,[a.b,t.j,t.q]),t.Db(4608,a.Lb,a.Lb,[a.b,t.j,t.q]),t.Db(5120,t.d,(function(l,n,o){return[a.Rb(l,n,o)]}),[a.Qb,p.d,t.z]),t.Db(1073742336,p.c,p.c,[]),t.Db(1073742336,w.q,w.q,[]),t.Db(1073742336,w.e,w.e,[]),t.Db(1073742336,a.Eb,a.Eb,[]),t.Db(1073742336,d.q,d.q,[[2,d.v],[2,d.m]]),t.Db(1073742336,y,y,[]),t.Db(1073742336,O.a,O.a,[]),t.Db(1073742336,u,u,[]),t.Db(1024,d.k,(function(){return[[{path:"",component:f}]]}),[]),t.Db(256,a.Qb,void 0,[])])}))}}]);