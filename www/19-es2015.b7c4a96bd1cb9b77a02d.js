(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{A8Ph:function(t,e,o){"use strict";o.r(e),o.d(e,"JobsPageModule",function(){return z});var i=o("TEn/"),n=o("tyNb"),s=o("ofXK"),r=o("3Pt+"),a=o("mrSG"),b=o("pLZG"),l=o("sgUz"),c=o("U8oy"),h=o("Aso2"),f=o("7xvl"),u=o("lFXj"),g=o("fXoL");let p=(()=>{class t{constructor(){this.filterJobsEmitter=new g.o}filterJobs(t){console.log("Emitting from FilterJobs Emitter..."),this.filterJobsEmitter.emit(t)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=g.Db({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),d=(()=>{class t{constructor(t,e,o){this.popoverController=t,this.filterJobsService=e,this.navParams=o,this.selection="newest"}ngOnInit(){this.filterFromJobsPage=this.navParams.get("filter"),this.selection=this.filterFromJobsPage}selectOption(t){this.selection=t.detail.value,console.log(this.selection),this.filterJobsService.filterJobs(this.selection)}dismiss(){this.popoverController.dismiss({data:this.selection})}}return t.\u0275fac=function(e){return new(e||t)(g.Hb(i.Z),g.Hb(p),g.Hb(i.X))},t.\u0275cmp=g.Bb({type:t,selectors:[["app-jobs-filter-popover"]],decls:20,vars:1,consts:[["name","job-menu-filter",3,"value","ionChange"],["lines","none"],["value","htol"],["value","ltoh"],["value","newest"],["value","oldest"],["button","","lines","none",1,"ion-text-center",3,"click"],[2,"color","#e3405f"]],template:function(t,e){1&t&&(g.Mb(0,"ion-radio-group",0),g.Ub("ionChange",function(t){return e.selectOption(t)}),g.Mb(1,"ion-item",1),g.Mb(2,"ion-label"),g.nc(3,"Pay - High to Low"),g.Lb(),g.Ib(4,"ion-radio",2),g.Lb(),g.Mb(5,"ion-item",1),g.Mb(6,"ion-label"),g.nc(7,"Pay - Low to High"),g.Lb(),g.Ib(8,"ion-radio",3),g.Lb(),g.Mb(9,"ion-item",1),g.Mb(10,"ion-label"),g.nc(11,"Newest"),g.Lb(),g.Ib(12,"ion-radio",4),g.Lb(),g.Mb(13,"ion-item",1),g.Mb(14,"ion-label"),g.nc(15,"Oldest"),g.Lb(),g.Ib(16,"ion-radio",5),g.Lb(),g.Mb(17,"ion-item",6),g.Ub("click",function(){return e.dismiss()}),g.Mb(18,"ion-label",7),g.nc(19,"Close"),g.Lb(),g.Lb(),g.Lb()),2&t&&g.Zb("value",e.selection)},directives:[i.E,i.cb,i.x,i.B,i.D,i.ab],styles:[""]}),t})();var m=o("b7Ok");function v(t,e){1&t&&(g.Mb(0,"p",19),g.Mb(1,"span"),g.nc(2,"Filter"),g.Lb(),g.nc(3,": Pay - High to Low"),g.Lb())}function j(t,e){1&t&&(g.Mb(0,"p",19),g.Mb(1,"span"),g.nc(2,"Filter"),g.Lb(),g.nc(3,": Pay - Low to High"),g.Lb())}function M(t,e){1&t&&(g.Mb(0,"p",19),g.Mb(1,"span"),g.nc(2,"Filter"),g.Lb(),g.nc(3,": Newest"),g.Lb())}function L(t,e){if(1&t&&(g.Mb(0,"p",19),g.Mb(1,"span"),g.nc(2,"Filter"),g.Lb(),g.nc(3),g.Lb()),2&t){const t=g.Wb();g.xb(3),g.pc(" ",t.jobFilter,"")}}function J(t,e){1&t&&(g.Mb(0,"p",19),g.Mb(1,"span"),g.nc(2,"Filter"),g.Lb(),g.nc(3,": Pay - High to Low"),g.Lb())}function y(t,e){1&t&&(g.Mb(0,"p",19),g.Mb(1,"span"),g.nc(2,"Filter"),g.Lb(),g.nc(3,": Pay - Low to High"),g.Lb())}function x(t,e){1&t&&(g.Mb(0,"p",19),g.Mb(1,"span"),g.nc(2,"Filter"),g.Lb(),g.nc(3,": Newest"),g.Lb())}function O(t,e){if(1&t&&(g.Mb(0,"p",19),g.Mb(1,"span"),g.nc(2,"Filter"),g.Lb(),g.nc(3),g.Lb()),2&t){const t=g.Wb();g.xb(3),g.pc(" ",t.jobFilter,"")}}function w(t,e){1&t&&(g.Mb(0,"ion-row",20),g.Mb(1,"ion-col",21),g.Mb(2,"ion-spinner",22),g.nc(3,"Filtering"),g.Lb(),g.Lb(),g.Lb())}function C(t,e){if(1&t&&g.Ib(0,"app-heart-icon",38),2&t){const t=g.Wb().$implicit,e=g.Wb(2);g.Zb("job",t)("favoriteJobs",e.favoriteJobsObj)}}function P(t,e){if(1&t){const t=g.Nb();g.Mb(0,"ion-row",25),g.Mb(1,"ion-col",26),g.Ib(2,"img",27),g.Lb(),g.Mb(3,"ion-col",28),g.Mb(4,"h5",29),g.nc(5),g.Lb(),g.Mb(6,"p",30),g.nc(7),g.Lb(),g.Mb(8,"h5",31),g.nc(9),g.Lb(),g.Mb(10,"h5",32),g.nc(11),g.Lb(),g.Lb(),g.Mb(12,"ion-col",33),g.Mb(13,"p",34),g.nc(14),g.Lb(),g.Lb(),g.Mb(15,"ion-col",35),g.Mb(16,"ion-button",36),g.Ub("click",function(){g.gc(t);const o=e.$implicit;return g.Wb(2).jobPage(o)}),g.nc(17," Details "),g.Lb(),g.mc(18,C,1,2,"app-heart-icon",37),g.Lb(),g.Lb()}if(2&t){const t=e.$implicit,o=g.Wb(2);g.xb(2),g.ac("src",t.companyLogo,g.ic),g.xb(3),g.oc(t.title),g.xb(2),g.oc(t.companyName),g.xb(2),g.pc("Posted: ",t.dateCreated,""),g.xb(2),g.pc("$",t.rateOfPay,"/hr"),g.xb(3),g.oc(t.summary),g.xb(4),g.Zb("ngIf",o.favoriteJobsObj)}}function F(t,e){if(1&t&&(g.Mb(0,"ion-row",20),g.Mb(1,"ion-col",23),g.mc(2,P,19,7,"ion-row",24),g.Lb(),g.Lb()),2&t){const t=g.Wb();g.xb(2),g.Zb("ngForOf",t.allJobs)}}let k=(()=>{class t{constructor(t,e,o,i,n,s,r,a){this.router=t,this.jobs=e,this.favorites=o,this.profile=i,this.popoverController=n,this.favoritesEventEmitterService=s,this.filterJobsService=r,this.loading=a,this.jobFilter="newest",this.jobsGoingLength=0,this.searching=!1,this.noSearchInput=!1}ngOnDestroy(){this.favoritesEventEmitterService.subsVar.unsubscribe(),this.jobsSub.unsubscribe(),this.profileSub.unsubscribe(),this.favoriteJobsSub.unsubscribe()}ngOnInit(){null==this.favoritesEventEmitterService.subsVar&&(this.favoritesEventEmitterService.subsVar=this.favoritesEventEmitterService.invokeJobsPageRefresh.subscribe(()=>{this.getJobs()})),null==this.filterJobsService.subsVar&&(this.filterJobsService.subsVar=this.filterJobsService.filterJobsEmitter.subscribe(t=>{this.jobFilter=t,this.getJobs()})),this.getFavoriteJobs(),this.getJobs(),this.trackRoute()}trackRoute(){this.routerSub=this.router.events.pipe(Object(b.a)(t=>t instanceof n.c)).subscribe(t=>{if(console.log(t.url),t.url.includes("/home/jobs/job-page/")){console.log("Hide Tab Bar!");let t=document.getElementById("tabBar");t.style.height="0px",t.style.transition="1s"}else{let t=document.getElementById("tabBar");console.log(t),t.style.height="50px",t.style.transition="1s"}})}filterMenu(){return Object(a.a)(this,void 0,void 0,function*(){const t=yield this.popoverController.create({component:d,cssClass:"my-custom-class",showBackdrop:!0,componentProps:{filter:this.jobFilter}});yield t.present(),yield t.onWillDismiss().then(t=>{console.log(t)})})}filter(t){this.initializeItems();let e=t.detail.value;this.presentLoadingWithOptions(),this.allJobs=this.allJobs.filter(t=>{if(console.log(t),t&&e||(console.log("No results from that search"),this.noSearchInput=!0),t.title&&e)return t.title.toLowerCase().indexOf(e.toLowerCase())>-1&&(console.log(t.title),console.log(t),this.searchTerm=e,this.searching=!0,this.noSearchInput=!1,!0);this.noSearchInput=!0}),this.allJobsLength=this.allJobs.length,0===this.allJobsLength&&(console.log("No results from that search"),this.searching=!0,this.searchTerm=e,this.searchbar.getInputElement().then(t=>{t.value=""}),this.noSearchInput=!0),e||(console.log("Search term is empty; showing all jobs instead"),this.noSearchInput=!1,this.searching=!1,this.getJobs())}initializeItems(){this.allJobs=this.loadedAllJobs}getFavoriteJobs(){this.profileSub=this.profile.getUserDetails().subscribe(t=>{this.favoriteJobs=t.favoriteJobs,console.log("Favorite Jobs:"),console.log(this.favoriteJobs),this.favorites.favoriteJobs$.next(this.favoriteJobs),this.favoriteJobsSub=this.favorites.favoriteJobs$.subscribe(e=>{console.log("Favorite Jobs in Service: "+e),this.favoriteJobsAmount=e.length,this.favorites.getFavorites(t.email).subscribe(t=>{this.favoriteJobsObj=t})})})}jobPage(t){console.log("Going to specific Job Page:",t.title),console.log("The job: ",t),this.router.navigate(["/home/jobs/job-page",t._id,t.title,t.companyLogo,t.companyName,t.companyEmail,t.summary,t.fullJobDescription,t.rateOfPay])}favoritesPage(){this.router.navigate(["/home/jobs/favorites"])}doRefresh(t){return Object(a.a)(this,void 0,void 0,function*(){this.allJobs=[],this.getFavoriteJobs(),this.jobsSub=this.jobs.getJobs().subscribe(t=>{this.allJobs=Object.values(t),this.allJobsLength=this.allJobs.length,this.allJobs.reverse(),this.searching=!1;for(const e of this.allJobs)e.dateCreated=Object(f.a)(new Date(e.dateCreated),{addSuffix:!1})}),setTimeout(()=>{t.target.complete(),console.log("jobs Refreshed")},2e3),yield this.searchbar.getInputElement().then(t=>{t.value="",this.noSearchInput=!1}),yield console.log("Refreshing jobs Page..")})}getJobs(){return Object(a.a)(this,void 0,void 0,function*(){this.jobsSub=this.jobs.getJobs().subscribe(t=>{switch(console.log(t),this.jobFilter){case"htol":console.log("High to Low"),this.filtering=!0,this.jobFilter="htol",this.allJobs=Object.values(t),this.allJobsLength=this.allJobs.length,this.allJobs.sort(function(t,e){return console.log("Sorting Price"),parseFloat(t.rateOfPay)-parseFloat(e.rateOfPay)}),this.allJobs.reverse(),this.searching=!1;for(const t of this.allJobs)t.dateCreated=Object(f.a)(new Date(t.dateCreated),{addSuffix:!1});break;case"ltoh":console.log("Low to High"),this.filtering=!0,this.jobFilter="ltoh",this.allJobs=Object.values(t),this.allJobsLength=this.allJobs.length,this.allJobs.sort(function(t,e){return console.log("Sorting Price"),parseFloat(e.rateOfPay)-parseFloat(t.rateOfPay)}),this.allJobs.reverse(),this.searching=!1;for(const t of this.allJobs)t.dateCreated=Object(f.a)(new Date(t.dateCreated),{addSuffix:!1});break;case"oldest":console.log("Oldest"),this.filtering=!0,this.jobFilter="oldest",this.allJobs=Object.values(t),this.allJobsLength=this.allJobs.length,this.searching=!1;for(const t of this.allJobs)t.dateCreated=Object(f.a)(new Date(t.dateCreated),{addSuffix:!1});break;case"newest":console.log("Newest"),this.filtering=!0,this.jobFilter="newest",this.allJobs=Object.values(t),this.allJobsLength=this.allJobs.length,this.allJobs.reverse(),this.searching=!1;for(const t of this.allJobs)t.dateCreated=Object(f.a)(new Date(t.dateCreated),{addSuffix:!1})}return setTimeout(()=>{this.filtering=!1},1e3)})})}presentLoadingWithOptions(){return Object(a.a)(this,void 0,void 0,function*(){const t=yield this.loading.create({duration:1e3,message:"Searching for jobs...",translucent:!0,cssClass:"custom-class custom-loading",keyboardClose:!1});return yield t.present()})}}return t.\u0275fac=function(e){return new(e||t)(g.Hb(n.g),g.Hb(l.a),g.Hb(c.a),g.Hb(h.a),g.Hb(i.Z),g.Hb(u.a),g.Hb(p),g.Hb(i.V))},t.\u0275cmp=g.Bb({type:t,selectors:[["app-jobs"]],viewQuery:function(t,e){if(1&t&&g.tc(i.J,!0),2&t){let t;g.ec(t=g.Vb())&&(e.searchbar=t.first)}},decls:41,vars:10,consts:[["no-border","",1,"ion-hide-lg-up"],["color","light","name","briefcase-outline",2,"position","relative","left","24px"],["slot","end"],[3,"click"],["slot","start","src","../../assets/icon/my-favorite-jobs.svg"],["slot","fixed",3,"ionRefresh"],[1,"ion-hide-lg-down","ion-justify-content-center",2,"padding-top","80px","margin-bottom","40px"],["size-xs","11","size-sm","10","size-md","10","size-lg","8","size-xl","6"],[1,"desktop-toolbar"],["slot","start"],["height","50","src","../../../assets/icon/suitcase-blue.svg","alt","","srcset",""],[1,"filter-button",3,"click"],[1,"favorites-button",3,"click"],["size","12"],["class","filter-message",4,"ngIf"],[1,"filter-toolbar","ion-hide-lg-up","ion-justify-content-center"],[2,"--background","none"],["slot","start","name","filter",1,"filter-icon"],["class","ion-justify-content-center",4,"ngIf"],[1,"filter-message"],[1,"ion-justify-content-center"],["size","12",1,"ion-text-center",2,"position","relative","top","-100px"],["name","bubbles"],["size-xs","11","size-sm","10","size-md","10","size-lg","8","size-xl","6",2,"margin-top","88px"],["class","job-section ion-justify-content-center",4,"ngFor","ngForOf"],[1,"job-section","ion-justify-content-center"],["push","0.5","size","1"],[1,"company-logo",3,"src"],["push","1",2,"height","80px"],["id","job-title"],["id","company-name"],["id","job-posted-date"],["id","job-rate"],["size","11"],["id","job-summary"],["pull","0","size","11"],[1,"job-details","ion-float-right",3,"click"],[3,"job","favoriteJobs",4,"ngIf"],[3,"job","favoriteJobs"]],template:function(t,e){1&t&&(g.Mb(0,"ion-header",0),g.Mb(1,"ion-toolbar"),g.Ib(2,"ion-icon",1),g.Mb(3,"ion-buttons",2),g.Mb(4,"ion-button",3),g.Ub("click",function(){return e.favoritesPage()}),g.Ib(5,"ion-icon",4),g.Lb(),g.Lb(),g.Lb(),g.Lb(),g.Mb(6,"ion-content"),g.Mb(7,"ion-refresher",5),g.Ub("ionRefresh",function(t){return e.doRefresh(t)}),g.Ib(8,"ion-refresher-content"),g.Lb(),g.Mb(9,"ion-grid"),g.Mb(10,"ion-row",6),g.Mb(11,"ion-col",7),g.Mb(12,"ion-toolbar",8),g.Mb(13,"ion-buttons",9),g.Ib(14,"img",10),g.Mb(15,"h1"),g.nc(16,"Jobs"),g.Lb(),g.Lb(),g.Mb(17,"ion-buttons",2),g.Mb(18,"ion-button",11),g.Ub("click",function(){return e.filterMenu()}),g.nc(19," Filter "),g.Lb(),g.Mb(20,"ion-button",12),g.Ub("click",function(){return e.favoritesPage()}),g.nc(21," Favorites "),g.Lb(),g.Lb(),g.Lb(),g.Mb(22,"ion-row"),g.Mb(23,"ion-col",13),g.mc(24,v,4,0,"p",14),g.mc(25,j,4,0,"p",14),g.mc(26,M,4,0,"p",14),g.mc(27,L,4,1,"p",14),g.Lb(),g.Lb(),g.Lb(),g.Lb(),g.Mb(28,"ion-row",15),g.Mb(29,"ion-col",7),g.Mb(30,"ion-toolbar",16),g.Mb(31,"ion-buttons",9),g.mc(32,J,4,0,"p",14),g.mc(33,y,4,0,"p",14),g.mc(34,x,4,0,"p",14),g.mc(35,O,4,1,"p",14),g.Lb(),g.Mb(36,"ion-buttons",2),g.Mb(37,"ion-button",3),g.Ub("click",function(){return e.filterMenu()}),g.Ib(38,"ion-icon",17),g.Lb(),g.Lb(),g.Lb(),g.Lb(),g.Lb(),g.mc(39,w,4,0,"ion-row",18),g.mc(40,F,3,1,"ion-row",18),g.Lb(),g.Lb()),2&t&&(g.xb(24),g.Zb("ngIf","htol"===e.jobFilter),g.xb(1),g.Zb("ngIf","ltoh"===e.jobFilter),g.xb(1),g.Zb("ngIf","newest"===e.jobFilter),g.xb(1),g.Zb("ngIf","oldest"===e.jobFilter),g.xb(5),g.Zb("ngIf","htol"===e.jobFilter),g.xb(1),g.Zb("ngIf","ltoh"===e.jobFilter),g.xb(1),g.Zb("ngIf","newest"===e.jobFilter),g.xb(1),g.Zb("ngIf","oldest"===e.jobFilter),g.xb(4),g.Zb("ngIf",e.filtering),g.xb(1),g.Zb("ngIf",!e.filtering))},directives:[i.u,i.S,i.v,i.h,i.g,i.o,i.F,i.G,i.t,i.I,i.n,s.j,i.M,s.i,m.a],styles:["ion-header[_ngcontent-%COMP%]{box-shadow:1px 1px 5px rgba(0,0,0,.1);background:#edf3f8;border-bottom:1px solid #005191}ion-header[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:2em}#searchbar-wrapper[_ngcontent-%COMP%]{transition:.5s;height:60px;background:#edf3f8}#logo[_ngcontent-%COMP%]{width:100px;position:relative;top:10px;left:10px}.company-logo[_ngcontent-%COMP%]{background-repeat:no-repeat;background-size:contain;background-position:50%;border-radius:50px}.filter-toolbar[_ngcontent-%COMP%]{background:#0055a5;position:fixed;width:100%;z-index:9999;box-shadow:1px 10px 26px rgba(0,0,0,.05)}.filter-message[_ngcontent-%COMP%]{color:#fff;font-size:1.2em}.filter-message[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:600}.filter-icon[_ngcontent-%COMP%]{color:#fff;font-size:1.4em}.job-details[_ngcontent-%COMP%]{--background:#0055a5;--color:#fff;--background-hover:#182836;height:24px;--width:100px;font-size:.5em;font-weight:600;display:block;position:relative;top:10px}.desktop-toolbar[_ngcontent-%COMP%]{--background:none;padding-bottom:16px;border-bottom:1px solid rgba(51,51,51,.14901960784313725)}.desktop-toolbar[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{color:#0055a5}.favorites-button[_ngcontent-%COMP%]{--background:#e3405f;--background-hover:linear-gradient(#e3405f,#5f4045)}.favorites-button[_ngcontent-%COMP%], .filter-button[_ngcontent-%COMP%]{--color:#fff;height:24px;width:100px;font-size:.5em;font-weight:600;display:block}.filter-button[_ngcontent-%COMP%]{--background:#333;--background-hover:linear-gradient(#e3405f,#da3a57);--border-radius:5px}.job-section[_ngcontent-%COMP%]{background:#fff;border-radius:10px;height:auto;color:#777;width:100%;opacity:0;padding:1em 0;margin-bottom:50px;box-shadow:1px 10px 26px rgba(0,0,0,.05);-webkit-animation:job-section-slide .5s ease .5 forwards;animation:job-section-slide .5s ease .5 forwards}@-webkit-keyframes job-section-slide{0%{transform:translateX(-20px);opacity:1}to{opacity:1;transform:translateX(0)}}@keyframes job-section-slide{0%{transform:translateX(-20px);opacity:1}to{opacity:1;transform:translateX(0)}}h6[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{display:block}--ion-buttons[_ngcontent-%COMP%]{--color:#888}#job-summary[_ngcontent-%COMP%]{font-size:1em;line-height:1.3em;color:#222}#company-name[_ngcontent-%COMP%]{font-size:.9em;opacity:.8;position:relative;top:-29px}#job-title[_ngcontent-%COMP%]{font-size:1.2em;font-weight:500;position:relative;top:-15px;color:#111}#job-rate[_ngcontent-%COMP%]{font-size:.95em;font-weight:900;opacity:.7;position:relative;top:-53px;color:#116e56}@media only screen and (min-width:992px){#job-title[_ngcontent-%COMP%]{font-size:1.3em;font-weight:500}}@media only screen and (min-width:576px){#job-title[_ngcontent-%COMP%]{font-size:1.3em;font-weight:500}}#job-posted-date[_ngcontent-%COMP%]{font-size:10px;opacity:.7;position:relative;top:-43px}"]}),t})();const S=[{path:"",component:k},{path:"job-page/:id/:title/:companyLogo/:companyName/:companyEmail/:summary/:fullJobDescription/:rateOfPay",loadChildren:()=>o.e(38).then(o.bind(null,"2Iy3")).then(t=>t.JobPagePageModule)},{path:"favorites",loadChildren:()=>o.e(37).then(o.bind(null,"B9Dp")).then(t=>t.FavoritesPageModule)}];let I=(()=>{class t{}return t.\u0275mod=g.Fb({type:t}),t.\u0275inj=g.Eb({factory:function(e){return new(e||t)},imports:[[n.k.forChild(S)],n.k]}),t})();var _=o("zAgk"),E=o("bUUK");let z=(()=>{class t{}return t.\u0275mod=g.Fb({type:t}),t.\u0275inj=g.Eb({factory:function(e){return new(e||t)},imports:[[i.T,_.a,s.b,r.d,r.l,I,n.k.forChild([{path:"",component:k}]),E.ViewResumePageModule]]}),t})()},U8oy:function(t,e,o){"use strict";o.d(e,"a",function(){return c});var i=o("mrSG"),n=o("2Vo4"),s=o("Aso2"),r=o("AytR"),a=o("fXoL"),b=o("tk/3"),l=o("TEn/");let c=(()=>{class t{constructor(t,e,o){this.http=t,this.profile=e,this.toast=o,this.BACKEND_URL=r.a.url,this.favoriteJobs$=new n.a([])}getFavorites(t){return console.log("Getting Favorites"),this.http.post(this.BACKEND_URL+"/api/jobs/get-favorites",{email:t})}favoriteThisJob(t){const e=this.profile.activeEmail;return t.userEmail=e,this.http.post(this.BACKEND_URL+"/api/jobs/favorite",{email:e,_id:t._id}).subscribe(t=>{console.log("Posting Favorite Job to Database..");let e=[...Object.values(t)];this.favoriteJobs$.next(e),this.presentToastFavorited("You favorited this job!")})}unFavoriteThisJob(t){const e=this.profile.activeEmail;t.userEmail=e,this.http.post(this.BACKEND_URL+"/api/jobs/unfavorite",{email:e,_id:t._id}).subscribe(t=>Object(i.a)(this,void 0,void 0,function*(){console.log("Unfavorite data value: ",t);let e=[...Object.values(t)];this.favoriteJobs$.next(e),this.presentToastUnfavorited("You removed this job from Favorites.")})),console.log("Unfavoriting this Job")}presentToastFavorited(t){return Object(i.a)(this,void 0,void 0,function*(){(yield this.toast.create({message:t,duration:3e3,cssClass:"favorited-toast",position:"bottom"})).present()})}presentToastUnfavorited(t){return Object(i.a)(this,void 0,void 0,function*(){(yield this.toast.create({message:t,duration:3e3,cssClass:"unfavorited-toast",position:"bottom"})).present()})}}return t.\u0275fac=function(e){return new(e||t)(a.Qb(b.b),a.Qb(s.a),a.Qb(l.eb))},t.\u0275prov=a.Db({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},b7Ok:function(t,e,o){"use strict";o.d(e,"a",function(){return b});var i=o("R0Ic"),n=o("U8oy"),s=o("Aso2"),r=o("fXoL"),a=o("TEn/");let b=(()=>{class t{constructor(t,e){this.favorites=t,this.profile=e,this.favoriteState="unfavorited",this.iconName="heart"}ngOnInit(){setTimeout(()=>{for(const t of this.favoriteJobs)this.job._id==t._id&&this.setFavoriteStateOn()},300)}toggleLikeState(){"unfavorited"===this.favoriteState?(this.setFavoriteStateOn(),this.favorites.favoriteThisJob(this.job)):(this.setFavoriteStateOff(),this.favorites.unFavoriteThisJob(this.job))}setFavoriteStateOn(){this.favoriteState="favorited",this.iconName="heart"}setFavoriteStateOff(){this.favoriteState="unfavorited",this.iconName="heart"}}return t.\u0275fac=function(e){return new(e||t)(r.Hb(n.a),r.Hb(s.a))},t.\u0275cmp=r.Bb({type:t,selectors:[["app-heart-icon"]],inputs:{job:"job",favoriteJobs:"favoriteJobs"},decls:1,vars:2,consts:[["tappable","",2,"font-size","3em",3,"name","click"]],template:function(t,e){1&t&&(r.Mb(0,"ion-icon",0),r.Ub("click",function(){return e.toggleLikeState()}),r.Lb()),2&t&&r.Zb("@heart",e.favoriteState)("name",e.iconName)},directives:[a.v],styles:["ion-icon[_ngcontent-%COMP%]{float:right;z-index:9999;position:relative;right:10px;margin-right:20px}"],data:{animation:[Object(i.j)("heart",[Object(i.g)("unfavorited",Object(i.h)({color:"#999",opacity:"1",transform:"scale(0.9)"})),Object(i.g)("favorited",Object(i.h)({color:"#e4405f",opacity:"1",transform:"scale(1)"})),Object(i.i)("unfavorited <=> favorited",Object(i.e)("100ms ease-out"))])]}}),t})()},sgUz:function(t,e,o){"use strict";o.d(e,"a",function(){return r});var i=o("AytR"),n=o("fXoL"),s=o("tk/3");let r=(()=>{class t{constructor(t){this.http=t,this.BACKEND_URL=i.a.url}getJobs(){return console.log("Getting Jobs"),this.http.get(this.BACKEND_URL+"/api/jobs")}sendEmailApplication(t,e,o,i,n,s){return console.log("Sending email to "+s),this.http.post(this.BACKEND_URL+"/api/jobs/send-application",{user:t,age:e,phoneNumber:o,reason:i,jobTitle:n,jobCompanyEmail:s})}}return t.\u0275fac=function(e){return new(e||t)(n.Qb(s.b))},t.\u0275prov=n.Db({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);