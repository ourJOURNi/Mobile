!function(){function e(e,o){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,o){if(!e)return;if("string"==typeof e)return t(e,o);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return t(e,o)}(e))||o&&e&&"number"==typeof e.length){n&&(e=n);var i=0,r=function(){};return{s:r,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,s=!0,c=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return s=e.done,e},e:function(e){c=!0,a=e},f:function(){try{s||null==n.return||n.return()}finally{if(c)throw a}}}}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,n=new Array(t);o<t;o++)n[o]=e[o];return n}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function i(e,t,o){return t&&n(e.prototype,t),o&&n(e,o),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{A8Ph:function(t,n,r){"use strict";r.r(n),r.d(n,"JobsPageModule",function(){return P});var a=r("TEn/"),s=r("tyNb"),c=r("ofXK"),b=r("3Pt+"),l=r("mrSG"),u=r("sgUz"),f=r("U8oy"),h=r("Aso2"),p=r("7xvl"),d=r("lFXj"),g=r("fXoL"),v=r("b7Ok");function m(e,t){if(1&e){var o=g.Nb();g.Mb(0,"ion-row",14),g.Mb(1,"ion-col",15),g.Mb(2,"h6",16),g.lc(3,"There were no search results with that name."),g.Lb(),g.Mb(4,"ion-button",17),g.Ub("click",function(e){return g.fc(o),g.Wb().doRefresh(e)}),g.lc(5," Clear Search "),g.Lb(),g.Lb(),g.Lb()}}function y(e,t){if(1&e&&g.Ib(0,"app-heart-icon",36),2&e){var o=g.Wb().$implicit,n=g.Wb(2);g.Zb("job",o)("favoriteJobs",n.favoriteJobsObj)}}function j(e,t){if(1&e){var o=g.Nb();g.Mb(0,"ion-row",20),g.Mb(1,"ion-col",21),g.Mb(2,"ion-row",22),g.Mb(3,"ion-col",23),g.Ib(4,"div",24),g.Lb(),g.Mb(5,"ion-col",25),g.Mb(6,"h5",26),g.lc(7),g.Lb(),g.Mb(8,"p",27),g.lc(9),g.Lb(),g.Mb(10,"h5",28),g.lc(11),g.Lb(),g.Mb(12,"h5",29),g.lc(13),g.Lb(),g.Lb(),g.Ib(14,"ion-col",30),g.Lb(),g.Lb(),g.Mb(15,"ion-row"),g.Mb(16,"ion-col",31),g.Mb(17,"p",32),g.lc(18),g.Lb(),g.Lb(),g.Lb(),g.Mb(19,"ion-col",33),g.Mb(20,"ion-row"),g.Mb(21,"ion-col",31),g.Mb(22,"ion-button",34),g.Ub("click",function(){g.fc(o);var e=t.$implicit;return g.Wb(2).jobPage(e)}),g.lc(23," Details "),g.Lb(),g.kc(24,y,1,2,"app-heart-icon",35),g.Lb(),g.Lb(),g.Lb(),g.Mb(25,"ion-col",33),g.Ib(26,"ion-row"),g.Lb(),g.Lb()}if(2&e){var n=t.$implicit,i=g.Wb(2);g.xb(7),g.mc(n.title),g.xb(2),g.mc(n.companyName),g.xb(2),g.nc("Posted: ",n.dateCreated,""),g.xb(2),g.nc("$",n.rateOfPay,"/hr"),g.xb(5),g.mc(n.summary),g.xb(6),g.Zb("ngIf",i.favoriteJobsObj)}}function x(e,t){if(1&e&&(g.Mb(0,"ion-row"),g.Mb(1,"ion-col",18),g.kc(2,j,27,6,"ion-row",19),g.Lb(),g.Lb()),2&e){var o=g.Wb();g.xb(2),g.Zb("ngForOf",o.allJobs)}}var J,w,M,O=((J=function(){function t(e,n,i,r,a,s){o(this,t),this.router=e,this.jobs=n,this.favorites=i,this.profile=r,this.eventEmitterService=a,this.loading=s,this.jobsGoingLength=0,this.searching=!1,this.noSearchInput=!1,this.favorited="favorited",this.unfavorited="unfavorited"}return i(t,[{key:"ngOnDestroy",value:function(){this.eventEmitterService.subsVar.unsubscribe(),this.jobsSub.unsubscribe(),this.profileSub.unsubscribe(),this.favoriteJobsSub.unsubscribe()}},{key:"ngOnInit",value:function(){var t=this;document.getElementById("tabBar").style.display="static",null==this.eventEmitterService.subsVar&&(this.eventEmitterService.subsVar=this.eventEmitterService.invokeJobsPageRefresh.subscribe(function(){t.getJobs()})),this.getFavoriteJobs(),this.jobsSub=this.jobs.getJobs().subscribe(function(o){console.log("jobs that are intially loaded: "),console.log(o),t.allJobs=Object.values(o),t.allJobsLength=t.allJobs.length,t.allJobs.reverse(),t.loadedAllJobs=Object.values(o),t.loadedAllJobs.reverse();var n,i=e(t.allJobs);try{for(i.s();!(n=i.n()).done;){var r=n.value;r.dateCreated=Object(p.a)(new Date(r.dateCreated),{addSuffix:!0})}}catch(a){i.e(a)}finally{i.f()}})}},{key:"filter",value:function(e){var t=this;this.initializeItems();var o=e.detail.value;this.presentLoadingWithOptions(),this.allJobs=this.allJobs.filter(function(e){if(console.log(e),e&&o||(console.log("No results from that search"),t.noSearchInput=!0),e.title&&o)return e.title.toLowerCase().indexOf(o.toLowerCase())>-1&&(console.log(e.title),console.log(e),t.searchTerm=o,t.searching=!0,t.noSearchInput=!1,!0);t.noSearchInput=!0}),this.allJobsLength=this.allJobs.length,0===this.allJobsLength&&(console.log("No results from that search"),this.searching=!0,this.searchTerm=o,this.searchbar.getInputElement().then(function(e){e.value=""}),this.noSearchInput=!0),o||(console.log("Search term is empty; showing all jobs instead"),this.noSearchInput=!1,this.searching=!1,this.getJobs())}},{key:"initializeItems",value:function(){this.allJobs=this.loadedAllJobs}},{key:"getFavoriteJobs",value:function(){var e=this;this.profileSub=this.profile.getUserDetails().subscribe(function(t){e.favoriteJobs=t.favoriteJobs,console.log("Favorite Jobs:"),console.log(e.favoriteJobs),e.favorites.favoriteJobs$.next(e.favoriteJobs),e.favoriteJobsSub=e.favorites.favoriteJobs$.subscribe(function(o){console.log("Favorite Jobs in Service: "+o),e.favoriteJobsAmount=o.length,e.favorites.getFavorites(t.email).subscribe(function(t){e.favoriteJobsObj=t})})})}},{key:"jobPage",value:function(e){console.log("Going to specific Job Page:",e.title),console.log("The job: ",e),this.router.navigate(["/home/jobs/job-page",e._id,e.title,e.companyName,e.companyEmail,e.summary,e.fullJobDescription,e.rateOfPay])}},{key:"favoritesPage",value:function(){this.router.navigate(["/home/jobs/favorites"])}},{key:"doRefresh",value:function(t){return Object(l.a)(this,void 0,void 0,regeneratorRuntime.mark(function o(){var n=this;return regeneratorRuntime.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return this.allJobs=[],this.getFavoriteJobs(),this.jobsSub=this.jobs.getJobs().subscribe(function(t){n.allJobs=Object.values(t),n.allJobsLength=n.allJobs.length,n.allJobs.reverse(),n.searching=!1;var o,i=e(n.allJobs);try{for(i.s();!(o=i.n()).done;){var r=o.value;r.dateCreated=Object(p.a)(new Date(r.dateCreated),{addSuffix:!1})}}catch(a){i.e(a)}finally{i.f()}}),setTimeout(function(){t.target.complete(),console.log("jobs Refreshed")},2e3),o.next=6,this.searchbar.getInputElement().then(function(e){e.value="",n.noSearchInput=!1});case 6:return o.next=8,console.log("Refreshing jobs Page..");case 8:case"end":return o.stop()}},o,this)}))}},{key:"getJobs",value:function(){return Object(l.a)(this,void 0,void 0,regeneratorRuntime.mark(function t(){var o=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:this.jobsSub=this.jobs.getJobs().subscribe(function(t){o.allJobs=Object.values(t),o.allJobsLength=o.allJobs.length,o.allJobs.reverse(),o.searching=!1;var n,i=e(o.allJobs);try{for(i.s();!(n=i.n()).done;){var r=n.value;r.dateCreated=Object(p.a)(new Date(r.dateCreated),{addSuffix:!1})}}catch(a){i.e(a)}finally{i.f()}});case 1:case"end":return t.stop()}},t,this)}))}},{key:"presentLoadingWithOptions",value:function(){return Object(l.a)(this,void 0,void 0,regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.loading.create({duration:1e3,message:"Searching for jobs...",translucent:!0,cssClass:"custom-class custom-loading",keyboardClose:!1});case 2:return t=e.sent,e.next=5,t.present();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}},e,this)}))}}]),t}()).\u0275fac=function(e){return new(e||J)(g.Hb(s.f),g.Hb(u.a),g.Hb(f.a),g.Hb(h.a),g.Hb(d.a),g.Hb(a.S))},J.\u0275cmp=g.Bb({type:J,selectors:[["app-jobs"]],viewQuery:function(e,t){var o;1&e&&g.rc(a.H,!0),2&e&&g.dc(o=g.Vb())&&(t.searchbar=o.first)},decls:19,vars:3,consts:[["no-border","",1,"ion-hide-lg-up"],["debounce","2000","animated","true","searchIcon","none","showCancelButton","true","placeholder","Search Job Titles",1,"searchbar",3,"ionChange"],["slot","end"],[3,"click"],["slot","start","src","../../assets/icons/my-favorite-jobs.svg"],["slot","fixed",3,"ionRefresh"],[1,"ion-hide-md-down",2,"margin","50px 0 50px 0"],["size","8.33","push","1"],["showCancelButton","true","placeholder","Search Job Titles","debounce","1500",1,"searchbar",3,"ionChange"],["size","2","push","0.5"],[1,"blue-button","ion-float-right",2,"width","170px","position","fixed","top","60px",3,"click"],["src","../../../assets/icons/my-favorite-jobs"],["class","ion-justify-content-center",4,"ngIf"],[4,"ngIf"],[1,"ion-justify-content-center"],["size","6",2,"margin-top","25px"],[1,"text-header-mobile",2,"text-align","center"],["expand","block",1,"orange-button",3,"click"],["push-xs","0","push-sm","1.3","push-lg","1.05","size-xs","12","size-sm","10","size-md","7.4"],["class","job-section",4,"ngFor","ngForOf"],[1,"job-section"],["push","0.5","push-lg","0.6","size-xs","12 ","size","7",2,"padding-top","30px"],[1,"ion-align-items-start"],["size","1"],[1,"company-logo",2,"height","60px","width","60px"],["push-xs","1","push-sm","1","push-md","1","push-lg","0.5","size","4"],["id","job-title"],["id","company-name"],["id","job-posted-date"],["id","job-rate"],["push-xs","3.5","push-sm","3.5","push-sm","3.5","push-sm","3.9","size","1"],["push","0.5","size","10.5"],["id","job-summary"],["size","12"],["id","job-details",1,"ion-float-right",3,"click"],[3,"job","favoriteJobs",4,"ngIf"],[3,"job","favoriteJobs"]],template:function(e,t){1&e&&(g.Mb(0,"ion-header",0),g.Mb(1,"ion-toolbar"),g.Mb(2,"ion-searchbar",1),g.Ub("ionChange",function(e){return t.filter(e)}),g.Lb(),g.Mb(3,"ion-buttons",2),g.Mb(4,"ion-button",3),g.Ub("click",function(){return t.favoritesPage()}),g.Ib(5,"ion-icon",4),g.Lb(),g.Lb(),g.Lb(),g.Lb(),g.Mb(6,"ion-content"),g.Mb(7,"ion-refresher",5),g.Ub("ionRefresh",function(e){return t.doRefresh(e)}),g.Ib(8,"ion-refresher-content"),g.Lb(),g.Mb(9,"ion-grid"),g.Mb(10,"ion-row",6),g.Mb(11,"ion-col",7),g.Mb(12,"ion-searchbar",8),g.Ub("ionChange",function(e){return t.filter(e)}),g.Lb(),g.Lb(),g.Mb(13,"ion-col",9),g.Mb(14,"ion-button",10),g.Ub("click",function(){return t.favoritesPage()}),g.Ib(15,"ion-icon",11),g.lc(16),g.Lb(),g.Lb(),g.Lb(),g.kc(17,m,6,0,"ion-row",12),g.kc(18,x,3,1,"ion-row",13),g.Lb(),g.Lb()),2&e&&(g.xb(16),g.nc(" ",t.favoriteJobsAmount," "),g.xb(1),g.Zb("ngIf",t.noSearchInput),g.xb(1),g.Zb("ngIf",!t.noSearchInput))},directives:[a.u,a.P,a.H,a.Y,a.h,a.g,a.v,a.o,a.D,a.E,a.t,a.G,a.n,c.i,c.h,v.a],styles:["ion-header[_ngcontent-%COMP%]{box-shadow:1px 1px 5px rgba(0,0,0,.1);background:#edf3f8;border-bottom:1px solid #005191}ion-header[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:2.5em}#logo[_ngcontent-%COMP%]{width:100px;position:relative;top:10px;left:10px}.company-logo[_ngcontent-%COMP%]{background-image:url(journi-logo.d1df781953a8e42a7e0f.png);background-repeat:no-repeat;background-size:contain;background-position:50%}#job-details[_ngcontent-%COMP%]{--background:#edf3f8;--background-hover:#edf3f8;color:#005191;margin-right:10px;font-size:15px;height:45px;border-radius:5px}#job-details[_ngcontent-%COMP%]:hover{color:#fff}#favorites-button[_ngcontent-%COMP%]{opacity:1;--background:#005191;--background-hover:#005191;--color:#fff;--border-style:solid;--border-width:1px;--border-color:#fff;box-shadow:1px 1px 10px rgba(0,0,0,.1);width:100px;height:50px;font-size:.8em;font-weight:600;position:relative;right:15px}ion-searchbar[_ngcontent-%COMP%]{margin-left:10px;--background:#fff;border-radius:5px;--height:60px;width:95%;font-size:.8em;--box-shadow:none;--cancel-button-color:#005191;--clear-button-color:#005191;--placeholder-opacity:0.5;--icon-color:#005191;transition:.5s;padding:5px}ion-searchbar[_ngcontent-%COMP%]:focus{border:1px solid #005191}.job-section[_ngcontent-%COMP%]{background:#fff;height:auto;color:#777;width:100%;margin-bottom:50px;box-shadow:1px 10px 10px rgba(0,0,0,.1)}h6[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{display:block}--ion-buttons[_ngcontent-%COMP%]{--color:#888}#job-summary[_ngcontent-%COMP%]{font-size:1.3em;line-height:1.3em;position:relative;color:#333;opacity:.7;top:-60px;padding-bottom:40px;border-bottom:1px solid #005191}#company-name[_ngcontent-%COMP%]{font-size:.9em;opacity:.8;position:relative;top:-29px}#job-title[_ngcontent-%COMP%]{font-size:1.2em;font-weight:500;position:relative;top:-15px;color:#111}#job-rate[_ngcontent-%COMP%]{font-size:.95em;font-weight:900;opacity:.7;position:relative;top:-53px;color:#116e56}@media only screen and (min-width:992px){#job-title[_ngcontent-%COMP%]{font-size:1.3em;font-weight:500}}@media only screen and (min-width:576px){#job-title[_ngcontent-%COMP%]{font-size:1.3em;font-weight:500}}#job-posted-date[_ngcontent-%COMP%]{font-size:10px;opacity:.7;position:relative;top:-43px}"]}),J),k=[{path:"",component:O},{path:"job-page/:id/:title/:companyName/:companyEmail/:summary/:fullJobDescription/:rateOfPay",loadChildren:function(){return r.e(38).then(r.bind(null,"2Iy3")).then(function(e){return e.JobPagePageModule})}},{path:"favorites",loadChildren:function(){return r.e(37).then(r.bind(null,"B9Dp")).then(function(e){return e.FavoritesPageModule})}}],L=((w=function e(){o(this,e)}).\u0275mod=g.Fb({type:w}),w.\u0275inj=g.Eb({factory:function(e){return new(e||w)},imports:[[s.j.forChild(k)],s.j]}),w),S=r("zAgk"),C=r("bUUK"),P=((M=function e(){o(this,e)}).\u0275mod=g.Fb({type:M}),M.\u0275inj=g.Eb({factory:function(e){return new(e||M)},imports:[[a.Q,S.a,c.b,b.d,b.l,L,s.j.forChild([{path:"",component:O}]),C.ViewResumePageModule]]}),M)},b7Ok:function(t,n,r){"use strict";r.d(n,"a",function(){return u});var a=r("R0Ic"),s=r("U8oy"),c=r("Aso2"),b=r("fXoL"),l=r("TEn/"),u=function(){var t=function(){function t(e,n){o(this,t),this.favorites=e,this.profile=n,this.favoriteState="unfavorited",this.iconName="heart-empty"}return i(t,[{key:"ngOnInit",value:function(){var t=this;setTimeout(function(){var o,n=e(t.favoriteJobs);try{for(n.s();!(o=n.n()).done;){var i=o.value;t.job._id==i._id&&t.setFavoriteStateOn()}}catch(r){n.e(r)}finally{n.f()}},300)}},{key:"toggleLikeState",value:function(){"unfavorited"===this.favoriteState?(this.setFavoriteStateOn(),this.favorites.favoriteThisJob(this.job)):(this.setFavoriteStateOff(),this.favorites.unFavoriteThisJob(this.job))}},{key:"setFavoriteStateOn",value:function(){this.favoriteState="favorited",this.iconName="heart"}},{key:"setFavoriteStateOff",value:function(){this.favoriteState="unfavorited",this.iconName="heart-empty"}}]),t}();return t.\u0275fac=function(e){return new(e||t)(b.Hb(s.a),b.Hb(c.a))},t.\u0275cmp=b.Bb({type:t,selectors:[["app-heart-icon"]],inputs:{job:"job",favoriteJobs:"favoriteJobs"},decls:1,vars:2,consts:[["tappable","",2,"font-size","3em",3,"name","click"]],template:function(e,t){1&e&&(b.Mb(0,"ion-icon",0),b.Ub("click",function(){return t.toggleLikeState()}),b.Lb()),2&e&&b.Zb("@heart",t.favoriteState)("name",t.iconName)},directives:[l.v],styles:["ion-icon[_ngcontent-%COMP%]{float:right;z-index:9999;position:relative;right:10px;color:#faa71b;margin-right:20px}"],data:{animation:[Object(a.j)("heart",[Object(a.g)("unfavorited",Object(a.h)({color:"#faa71b",opacity:"1",transform:"scale(0.9)"})),Object(a.g)("favorited",Object(a.h)({color:"#faa71b",opacity:"1",transform:"scale(1)"})),Object(a.i)("unfavorited <=> favorited",Object(a.e)("100ms ease-out"))])]}}),t}()},sgUz:function(e,t,n){"use strict";n.d(t,"a",function(){return c});var r=n("AytR"),a=n("fXoL"),s=n("tk/3"),c=function(){var e=function(){function e(t){o(this,e),this.http=t,this.BACKEND_URL=r.a.url}return i(e,[{key:"getJobs",value:function(){return console.log("Getting Jobs"),this.http.get(this.BACKEND_URL+"/api/jobs")}},{key:"sendEmailApplication",value:function(e,t,o,n,i,r){return console.log("Sending email to "+r),this.http.post(this.BACKEND_URL+"/api/jobs/send-application",{user:e,age:t,phoneNumber:o,reason:n,jobTitle:i,jobCompanyEmail:r})}}]),e}();return e.\u0275fac=function(t){return new(t||e)(a.Qb(s.b))},e.\u0275prov=a.Db({token:e,factory:e.\u0275fac,providedIn:"root"}),e}()}}])}();