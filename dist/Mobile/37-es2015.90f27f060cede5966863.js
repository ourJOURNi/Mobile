(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{"2Iy3":function(t,o,i){"use strict";i.r(o),i.d(o,"JobPagePageModule",function(){return y});var e=i("ofXK"),n=i("3Pt+"),a=i("zAgk"),s=i("TEn/"),r=i("tyNb"),b=i("mrSG"),c=i("Aso2"),p=i("U8oy"),l=i("sgUz"),h=i("lFXj"),m=i("fXoL"),u=i("b7Ok");function d(t,o){if(1&t&&m.Ib(0,"app-heart-icon",18),2&t){const t=m.Wb();m.Zb("job",t.jobObj)("favoriteJobs",t.favoriteJobsObj)}}const g=[{path:"",component:(()=>{class t{constructor(t,o,i,e,n,a,s,r){this.activatedRoute=t,this.router=o,this.toastController=i,this.profile=e,this.favorites=n,this.jobs=a,this.eventEmitterService=s,this.location=r}ngOnDestroy(){this.profileSub.unsubscribe(),this.favoriteJobsSub.unsubscribe(),this.favoritesSub.unsubscribe(),this.jobsSub.unsubscribe()}ngOnInit(){this.location.onPopState(()=>{this.triggerJobPageRefresh()});const t=this.activatedRoute.snapshot.paramMap.get("id"),o=this.activatedRoute.snapshot.paramMap.get("title"),i=this.activatedRoute.snapshot.paramMap.get("companyName"),e=this.activatedRoute.snapshot.paramMap.get("companyEmail"),n=this.activatedRoute.snapshot.paramMap.get("summary"),a=this.activatedRoute.snapshot.paramMap.get("fullJobDescription"),s=this.activatedRoute.snapshot.paramMap.get("rateOfPay");this.jobId=t,this.jobTitle=o,this.jobCompanyName=i,this.jobCompanyEmail=e,this.jobSummary=n,this.jobFullJobDescription=a,this.jobRateOfPay=s,this.getFavoriteJobs()}getFavoriteJobs(){this.profileSub=this.profile.getUserDetails().subscribe(t=>{this.favorites.favoriteJobs$.next(t.favoriteJobs),this.favoriteJobsSub=this.favorites.favoriteJobs$.subscribe(o=>{console.log("Favorite Jobs in Service: "+o),this.jobsSub=this.jobs.getJobs().subscribe(t=>{for(const o of Object.values(t))this.jobId==o._id&&(this.jobObj=o)}),this.favoritesSub=this.favorites.getFavorites(t.email).subscribe(t=>{this.favoriteJobsObj=t})})})}applyForJob(){this.router.navigate(["/home/jobs/job-page/:id/:title/:companyName/:companyEmail/:summary/:fullJobDescription/:rateOfPay/apply",this.jobTitle,this.jobCompanyName,this.jobCompanyEmail])}favoriteThisJob(){console.log("Favoriting this Job"),this.presentToast()}goBack(){this.triggerJobPageRefresh(),this.router.navigate(["/home/jobs"])}triggerJobPageRefresh(){this.eventEmitterService.onBackAction()}presentToast(){return Object(b.a)(this,void 0,void 0,function*(){(yield this.toastController.create({message:"This job has been favorited.",duration:2e3})).present()})}}return t.\u0275fac=function(o){return new(o||t)(m.Hb(r.a),m.Hb(r.f),m.Hb(s.Z),m.Hb(c.a),m.Hb(p.a),m.Hb(l.a),m.Hb(h.a),m.Hb(e.l))},t.\u0275cmp=m.Bb({type:t,selectors:[["app-job-page"]],decls:32,vars:5,consts:[[1,"ion-hide-lg-up"],["slot","start"],[3,"click"],[1,"ion-justify-content-center"],["size-xs","11","size-sm","10","size-md","8","size-lg","8",1,"description"],[1,"ion-align-items-end"],["push","1"],[1,"company-logo",2,"height","90px","width","90px"],["size","2","push-xs","2","push-sm","2","push-md","2",1,"ion-float-right"],["class","ion-float-right","id","heart-icon",3,"job","favoriteJobs",4,"ngIf"],["size","2"],["push","1","size","10"],["id","job-title"],["id","company-name"],["id","job-full-description"],["size","6",1,"ion-text-center"],[1,"orange-button",2,"width","150px","margin-bottom","20px",3,"click"],[1,"ion-hide-md-down","blue-button",3,"click"],["id","heart-icon",1,"ion-float-right",3,"job","favoriteJobs"]],template:function(t,o){1&t&&(m.Mb(0,"ion-header",0),m.Mb(1,"ion-toolbar"),m.Mb(2,"ion-buttons",1),m.Mb(3,"ion-back-button",2),m.Ub("click",function(){return o.triggerJobPageRefresh()}),m.Lb(),m.Lb(),m.Mb(4,"ion-title"),m.mc(5,"Job Page"),m.Lb(),m.Lb(),m.Lb(),m.Mb(6,"ion-content"),m.Mb(7,"ion-grid"),m.Mb(8,"ion-row",3),m.Mb(9,"ion-col",4),m.Mb(10,"ion-row",5),m.Mb(11,"ion-col",6),m.Ib(12,"div",7),m.Lb(),m.Mb(13,"ion-col",8),m.lc(14,d,1,2,"app-heart-icon",9),m.Lb(),m.Ib(15,"ion-col",10),m.Lb(),m.Mb(16,"ion-row"),m.Mb(17,"ion-col",11),m.Mb(18,"h1",12),m.mc(19),m.Lb(),m.Mb(20,"h2",13),m.mc(21),m.Lb(),m.Mb(22,"p",13),m.mc(23),m.Lb(),m.Mb(24,"p",14),m.mc(25),m.Lb(),m.Lb(),m.Lb(),m.Lb(),m.Lb(),m.Mb(26,"ion-row",3),m.Mb(27,"ion-col",15),m.Mb(28,"ion-button",16),m.Ub("click",function(){return o.applyForJob()}),m.mc(29,"Apply"),m.Lb(),m.Mb(30,"ion-button",17),m.Ub("click",function(){return o.goBack()}),m.mc(31," Go Back"),m.Lb(),m.Lb(),m.Lb(),m.Lb(),m.Lb()),2&t&&(m.xb(14),m.Zb("ngIf",o.favoriteJobsObj),m.xb(5),m.nc(o.jobTitle),m.xb(2),m.nc(o.jobCompanyName),m.xb(2),m.nc(o.jobCompanyEmail),m.xb(2),m.nc(o.jobFullJobDescription))},directives:[s.u,s.P,s.h,s.e,s.f,s.O,s.o,s.t,s.G,s.n,e.j,s.g,u.a],styles:["ion-title[_ngcontent-%COMP%]{margin:0}.company-logo[_ngcontent-%COMP%]{border-radius:50px;background-image:url(journi-logo.d1df781953a8e42a7e0f.png);background-repeat:no-repeat;background-size:contain;background-position:50%;-webkit-animation:logo-slide-in .5s cubic-bezier(.175,.885,.32,1.275) .5s forwards;animation:logo-slide-in .5s cubic-bezier(.175,.885,.32,1.275) .5s forwards}span[_ngcontent-%COMP%]{font-weight:700}.blue-button[_ngcontent-%COMP%]{display:block;margin:0 auto 200px}@media only screen and (max-width:992px){.description[_ngcontent-%COMP%]{margin:10px 0}}@media only screen and (min-width:992px){.orange-button[_ngcontent-%COMP%]{width:160px}}#job-summary[_ngcontent-%COMP%]{font-size:1.1em;line-height:29px;position:relative;color:#666;opacity:.7;top:-60px}#company-name[_ngcontent-%COMP%]{margin-top:0;margin-bottom:15px}#company-name[_ngcontent-%COMP%], #job-title[_ngcontent-%COMP%]{opacity:0;-webkit-animation:header-slide-up .5s cubic-bezier(.175,.885,.32,1.275) .8s forwards;animation:header-slide-up .5s cubic-bezier(.175,.885,.32,1.275) .8s forwards}#job-title[_ngcontent-%COMP%]{font-size:2em;font-weight:900;padding-top:20px;color:#005191;border-top:1px solid #005191}#job-posted-date[_ngcontent-%COMP%]{font-size:10px;opacity:.7;position:relative;top:-43px}#job-full-description[_ngcontent-%COMP%]{font-size:1.2em;line-height:29px;color:#333;opacity:0;margin:50px 0;-webkit-animation:header-slide-up .5s cubic-bezier(.175,.885,.32,1.275) 1.2s forwards;animation:header-slide-up .5s cubic-bezier(.175,.885,.32,1.275) 1.2s forwards}#heart-icon[_ngcontent-%COMP%]{position:relative;top:-20px}@-webkit-keyframes header-slide-up{0%{transform:translateY(8px)}to{transform:translateY(0);opacity:1}}@keyframes header-slide-up{0%{transform:translateY(8px)}to{transform:translateY(0);opacity:1}}@-webkit-keyframes logo-slide-in{0%{transform:translateX(-20px)}to{transform:translateX(0);opacity:1}}@keyframes logo-slide-in{0%{transform:translateX(-20px)}to{transform:translateX(0);opacity:1}}"]}),t})()},{path:"apply/:title/:companyName/:companyEmail",loadChildren:()=>Promise.all([i.e(0),i.e(20)]).then(i.bind(null,"lBow")).then(t=>t.ApplyPageModule)}];let f=(()=>{class t{}return t.\u0275mod=m.Fb({type:t}),t.\u0275inj=m.Eb({factory:function(o){return new(o||t)},imports:[[r.j.forChild(g)],r.j]}),t})(),y=(()=>{class t{}return t.\u0275mod=m.Fb({type:t}),t.\u0275inj=m.Eb({factory:function(o){return new(o||t)},imports:[[e.b,a.a,n.d,n.l,s.Q,f]]}),t})()}}]);