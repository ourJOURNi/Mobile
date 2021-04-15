(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"+DJb":function(t,e,n){"use strict";n.d(e,"a",function(){return r});var o=n("AytR"),i=n("fXoL"),s=n("tk/3");let r=(()=>{class t{constructor(t){this.http=t,this.BACKEND_URL=o.a.url}getMentors(){return console.log("Getting Mentors"),this.http.get(this.BACKEND_URL+"/api/mentors")}sendMentorAnEmail(t,e,n,o,i,s,r,a,c,l,h,b){return console.log("Sending email to "+n),this.http.post(this.BACKEND_URL+"/api/mentors/mentor-message",{message:t,mentorName:e,mentorEmail:n,studentEmail:o,studentName:i,studentCity:s,studentState:r,studentAge:a,studentGrade:c,studentSchool:l,studentProfilePic:h,studentResume:b})}}return t.\u0275fac=function(e){return new(e||t)(i.Qb(s.b))},t.\u0275prov=i.Db({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},heuU:function(t,e,n){"use strict";n.r(e),n.d(e,"MentorsPageModule",function(){return M});var o=n("ofXK"),i=n("3Pt+"),s=n("zAgk"),r=n("TEn/"),a=n("tyNb"),c=n("mrSG"),l=n("pLZG"),h=n("+DJb"),b=n("R7fP"),g=n("fXoL");function u(t,e){if(1&t){const t=g.Nb();g.Mb(0,"ion-item",15),g.Mb(1,"ion-avatar",2),g.Ib(2,"img",16),g.Lb(),g.Mb(3,"ion-label"),g.Mb(4,"h2"),g.nc(5),g.Lb(),g.Mb(6,"p"),g.nc(7),g.Lb(),g.Lb(),g.Mb(8,"ion-buttons",17),g.Mb(9,"ion-button",18),g.Ub("click",function(){g.gc(t);const n=e.$implicit;return g.Wb().mentorPage(n)}),g.nc(10," Info "),g.Lb(),g.Lb(),g.Lb()}if(2&t){const t=e.$implicit;g.xb(2),g.ac("src",t.photo,g.ic),g.xb(3),g.oc(t.name),g.xb(2),g.oc(t.title)}}const d=[{path:"",component:(()=>{class t{constructor(t,e,n,o){this.router=t,this.mentors=e,this.loading=n,this.modal=o,this.searching=!1,this.noSearchInput=!1}ngOnInit(){this.getMentors(),this.trackRoute()}trackRoute(){this.routerSub=this.router.events.pipe(Object(l.a)(t=>t instanceof a.c)).subscribe(t=>{if(console.log(t.url),t.url.includes("/home/mentors/mentor-page/")){console.log("Hide Tab Bar!");let t=document.getElementById("tabBar");t.style.height="0px",t.style.transition="1s"}else{let t=document.getElementById("tabBar");console.log(t),t.style.height="50px",t.style.transition="1s"}})}getMentors(){this.mentors.getMentors().subscribe(t=>{this.allMentors=Object.values(t),console.log(this.allMentors),this.allMentorsLength=this.allMentors.length,this.allMentors.reverse(),this.loadedAllMentors=Object.values(t),this.loadedAllMentors.reverse(),this.searching=!1})}chat(){this.router.navigate(["/home/mentors/mentor-chat"])}newMessage(){return Object(c.a)(this,void 0,void 0,function*(){const t=yield this.modal.create({component:b.a,componentProps:{}});yield t.present()})}mentorPage(t){this.router.navigate(["/home/mentors/mentor-page",t.name,t.title,t.email,t.description,t.photo,t.city,t.state])}filter(t){this.initializeItems();let e=t.detail.value;this.presentLoadingWithOptions(),console.log(this.allMentors),this.allMentors=this.allMentors.filter(t=>{if(console.log(t),t&&e||(console.log("No results from that search"),this.noSearchInput=!0),t.name&&e)return t.name.toLowerCase().indexOf(e.toLowerCase())>-1&&(console.log(t.name),console.log(t),this.searchTerm=e,this.searching=!0,this.noSearchInput=!1,!0)}),this.allMentorsLength=this.allMentors.length,0===this.allMentorsLength&&(console.log("No results from that search"),this.searching=!0,this.searchTerm=e,this.searchbar.getInputElement().then(t=>{t.value=""}),this.noSearchInput=!0),e||(console.log("Search term is empty; showing all events instead"),this.noSearchInput=!1,this.searching=!1,this.getMentors())}initializeItems(){this.allMentors=this.loadedAllMentors}presentLoadingWithOptions(){return Object(c.a)(this,void 0,void 0,function*(){const t=yield this.loading.create({duration:1e3,message:"Searching for Mentors...",translucent:!0,cssClass:"custom-class custom-loading"});return yield t.present()})}}return t.\u0275fac=function(e){return new(e||t)(g.Hb(a.g),g.Hb(h.a),g.Hb(r.V),g.Hb(r.W))},t.\u0275cmp=g.Bb({type:t,selectors:[["app-mentors"]],viewQuery:function(t,e){if(1&t&&g.tc(r.J,!0),2&t){let t;g.ec(t=g.Vb())&&(e.searchbar=t.first)}},decls:26,vars:1,consts:[["no-border","",1,"ion-hide-md-up"],[2,"--background","#0055a5"],["slot","start"],["height","80","src","../../../assets/icon/mentor-icon.svg"],[2,"font-size","1.2em","color","white"],[1,"ion-hide-lg-down","ion-justify-content-center",2,"padding-top","80px","margin-bottom","40px"],["size-xs","11","size-sm","10","size-md","10","size-lg","8","size-xl","6"],[1,"desktop-toolbar"],["height","50","src","../../../assets/icon/mentor-icon-blue.svg","alt","","srcset",""],[1,"ion-justify-content-center"],["size-xs","11","size-sm","10","size-md","10","size-lg","8","size-xl","4"],[1,"ion-hide-md-up",2,"font-size","1em"],[1,"ion-hide-md-down",2,"font-size","1.1em","margin-top","24px"],[1,"ion-justify-content-center",2,"margin-top","20px"],["class","mentor","lines","none",4,"ngFor","ngForOf"],["lines","none",1,"mentor"],[3,"src"],["slot","end"],[1,"info-button",3,"click"]],template:function(t,e){1&t&&(g.Mb(0,"ion-header",0),g.Mb(1,"ion-toolbar"),g.Mb(2,"ion-item",1),g.Mb(3,"ion-avatar",2),g.Ib(4,"img",3),g.Lb(),g.Mb(5,"ion-label",4),g.nc(6,"Mentors"),g.Lb(),g.Lb(),g.Lb(),g.Lb(),g.Mb(7,"ion-content"),g.Mb(8,"ion-grid"),g.Mb(9,"ion-row",5),g.Mb(10,"ion-col",6),g.Mb(11,"ion-toolbar",7),g.Mb(12,"ion-buttons",2),g.Ib(13,"img",8),g.Mb(14,"h1"),g.nc(15,"Mentors"),g.Lb(),g.Lb(),g.Lb(),g.Lb(),g.Lb(),g.Mb(16,"ion-row",9),g.Mb(17,"ion-col",10),g.Mb(18,"p",11),g.nc(19,"Need advice? Want feedback on something? Want to learn about a particular career field? Browse through Find Your Future's list of Mentors, and contact them if you have any questions!"),g.Lb(),g.Mb(20,"p",12),g.nc(21,"Need advice? Want feedback on something? Want to learn about a particular career field? Browse through Find Your Future's list of Mentors, and contact them if you have any questions!"),g.Lb(),g.Lb(),g.Lb(),g.Mb(22,"ion-row",13),g.Mb(23,"ion-col",10),g.Mb(24,"ion-list"),g.mc(25,u,11,3,"ion-item",14),g.Lb(),g.Lb(),g.Lb(),g.Lb(),g.Lb()),2&t&&(g.xb(25),g.Zb("ngForOf",e.allMentors))},directives:[r.u,r.S,r.x,r.d,r.B,r.o,r.t,r.I,r.n,r.h,r.C,o.i,r.g],styles:["ion-toolbar[_ngcontent-%COMP%]{padding:0}.desktop-toolbar[_ngcontent-%COMP%]{--background:none;padding-bottom:16px;border-bottom:1px solid rgba(51,51,51,.14901960784313725)}.desktop-toolbar[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{color:#0055a5}ion-list[_ngcontent-%COMP%]{background:none}.mentor[_ngcontent-%COMP%]{border-radius:5px;margin-bottom:16px;box-shadow:1px 10px 26px rgba(0,0,0,.05)}.new-message[_ngcontent-%COMP%]{color:#faa71b}h2[_ngcontent-%COMP%]{font-size:1em;font-weight:400}.blue-button[_ngcontent-%COMP%]{-webkit-animation:none;animation:none}.info-button[_ngcontent-%COMP%]{--background:#0055a5;--color:#fff;font-weight:600;margin-right:20px;width:80px}.mentor-thumbnail[_ngcontent-%COMP%]{position:absolute;top:25px;right:15px;height:50px;width:50px;background-repeat:no-repeat;background-size:contain;background-position:50%;border-radius:50px}.mentors[_ngcontent-%COMP%]{margin:20px 0;box-shadow:none;box-shadow:1px 10px 10px rgba(0,0,0,.05);border-radius:5px;transition:.5s;transition-timing-function:cubic-bezier(.175,.885,.32,1.275);transition-delay:.1s}.mentors[_ngcontent-%COMP%], .mentors[_ngcontent-%COMP%]:hover{background:#fff;height:auto;padding:40px}.mentors[_ngcontent-%COMP%]:hover{margin:30px 0;box-shadow:1px 1px 3px #999;border:1px solid #005191;border-radius:5px;transition:.1s;transition-timing-function:cubic-bezier(.175,.885,.32,1.275)}#mentor-name[_ngcontent-%COMP%]{font-size:1.3em;font-weight:800}#mentor-title[_ngcontent-%COMP%]{font-size:1.1em;font-weight:800;color:#777;position:relative;top:-10px}#searchbar-wrapper[_ngcontent-%COMP%]{transition:.5s;height:60px;background:#edf3f8}"]}),t})()},{path:"mentor-page/:name/:title/:email/:description/:photo/:city/:state",loadChildren:()=>n.e(42).then(n.bind(null,"o1Rv")).then(t=>t.MentorPagePageModule)},{path:"mentor-chat",loadChildren:()=>n.e(40).then(n.bind(null,"NZe1")).then(t=>t.MentorChatPageModule)}];let m=(()=>{class t{}return t.\u0275mod=g.Fb({type:t}),t.\u0275inj=g.Eb({factory:function(e){return new(e||t)},imports:[[a.k.forChild(d)],a.k]}),t})();var p=n("OWIS");let M=(()=>{class t{}return t.\u0275mod=g.Fb({type:t}),t.\u0275inj=g.Eb({factory:function(e){return new(e||t)},imports:[[s.a,o.b,i.d,r.T,m,p.NewMessageMentorPageModule]]}),t})()}}]);