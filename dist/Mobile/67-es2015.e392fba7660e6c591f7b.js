(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{hO9l:function(t,n,o){"use strict";o.r(n),o.d(n,"TabsPageModule",function(){return h});var e=o("TEn/"),i=o("ofXK"),a=o("3Pt+"),r=o("tyNb"),s=o("mrSG"),c=o("lGQG"),l=o("fXoL");const b=[{path:"",redirectTo:"/home/posts",pathMatch:"full"},{path:"",component:(()=>{class t{constructor(t,n,o){this.auth=t,this.alert=n,this.location=o}logoutConfirm(){return Object(s.a)(this,void 0,void 0,function*(){const t=yield this.alert.create({header:"Are you sure you want to log out?",cssClass:"danger-alert",buttons:[{text:"Cancel",role:"cancel",handler:t=>{console.log("Confirm Cancel: blah")}},{text:"Logout",handler:()=>{this.auth.logout()}}]});yield t.present()})}}return t.\u0275fac=function(n){return new(n||t)(l.Hb(c.a),l.Hb(e.a),l.Hb(i.f))},t.\u0275cmp=l.Bb({type:t,selectors:[["app-tabs"]],decls:32,vars:0,consts:[["slot","top",1,"ion-hide-md-down"],[1,"ion-align-items-center"],["size","1"],["size","2"],["id","logo","src","../../assets/logo-2.png"],["size","8",1,"ion-float-end"],[2,"cursor","pointer",3,"click"],["routerLink","/home/profile/","routerLinkActive","active-link"],["routerLink","/home/mentors","routerLinkActive","active-link"],["routerLink","/home/posts","routerLinkActive","active-link"],["routerLink","/home/events","routerLinkActive","active-link"],["routerLink","/home/jobs","routerLinkActive","active-link"],["slot","bottom","id","tabBar",1,"ion-hide-lg-up"],["tab","jobs"],["src","../assets/icon/suitcase-inactive.svg"],["tab","events"],["src","../assets/icon/calendar-inactive.svg"],["tab","posts"],["src","../assets/icon/post-inactive.svg"],["tab","mentors"],["src","../assets/icon/question-inactive.svg"],["tab","profile"],["src","../assets/icon/profile-inactive.svg"]],template:function(t,n){1&t&&(l.Mb(0,"ion-tabs"),l.Mb(1,"ion-toolbar",0),l.Mb(2,"ion-grid"),l.Mb(3,"ion-row",1),l.Ib(4,"ion-col",2),l.Mb(5,"ion-col",3),l.Ib(6,"img",4),l.Lb(),l.Mb(7,"ion-col",5),l.Mb(8,"a",6),l.Ub("click",function(){return n.logoutConfirm()}),l.mc(9," LOGOUT "),l.Lb(),l.Mb(10,"a",7),l.mc(11," PROFILE "),l.Lb(),l.Mb(12,"a",8),l.mc(13," MENTORS "),l.Lb(),l.Mb(14,"a",9),l.mc(15," POSTS "),l.Lb(),l.Mb(16,"a",10),l.mc(17," EVENTS "),l.Lb(),l.Mb(18,"a",11),l.mc(19," JOBS "),l.Lb(),l.Lb(),l.Ib(20,"ion-col",2),l.Lb(),l.Lb(),l.Lb(),l.Mb(21,"ion-tab-bar",12),l.Mb(22,"ion-tab-button",13),l.Ib(23,"ion-icon",14),l.Lb(),l.Mb(24,"ion-tab-button",15),l.Ib(25,"ion-icon",16),l.Lb(),l.Mb(26,"ion-tab-button",17),l.Ib(27,"ion-icon",18),l.Lb(),l.Mb(28,"ion-tab-button",19),l.Ib(29,"ion-icon",20),l.Lb(),l.Mb(30,"ion-tab-button",21),l.Ib(31,"ion-icon",22),l.Lb(),l.Lb(),l.Lb())},directives:[e.M,e.P,e.t,e.G,e.n,r.i,e.W,r.h,e.K,e.L,e.v],styles:["ion-tab-bar[_ngcontent-%COMP%]{margin:0 40px;height:50px;transition:.5s;transition-timing-function:cubic-bezier(.175,.885,.32,1.275)}ion-label[_ngcontent-%COMP%]{position:relative;top:6px;font-size:.8em;transition:.5s;font-weight:700}ion-tab-button[_ngcontent-%COMP%]{font-size:.8em;--color:#d0d4d8;--color-selected:#ffb351;--padding-end:0px;--padding-start:10px;--padding-bottom:0px;--margin-left:0px;--margin-right:0px;max-width:100px}ion-tab-button[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:1.7em;--font-size-selected:4em;--fill-selected:red;--background-color:#fff;transition:.5s}#logo[_ngcontent-%COMP%]{height:40px}ion-toolbar[_ngcontent-%COMP%]{--min-height:10vh;--background:#fff;font-size:.9em;box-shadow:1px 1px 15px rgba(0,0,0,.08)}ion-toolbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{margin:0 10px;text-decoration:none;color:#777;letter-spacing:1px;opacity:.5;float:right}ion-toolbar[_ngcontent-%COMP%]   .active-link[_ngcontent-%COMP%]{color:#faa71b;font-weight:800;transition:.5s}ion-toolbar[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{--color:#d0d4d8;opacity:.6;font-weight:700}ion-grid[_ngcontent-%COMP%]{height:50px}"]}),t})(),children:[{path:"jobs",children:[{path:"",loadChildren:()=>Promise.all([o.e(1),o.e(0),o.e(19)]).then(o.bind(null,"A8Ph")).then(t=>t.JobsPageModule)}]},{path:"posts",children:[{path:"",loadChildren:()=>Promise.all([o.e(1),o.e(0),o.e(18)]).then(o.bind(null,"XxUk")).then(t=>t.PostPageModule)}]},{path:"profile",children:[{path:"",loadChildren:()=>o.e(22).then(o.bind(null,"723k")).then(t=>t.ProfilePageModule)}]},{path:"events",children:[{path:"",loadChildren:()=>Promise.all([o.e(1),o.e(3),o.e(0),o.e(5)]).then(o.bind(null,"Obr4")).then(t=>t.EventsPageModule)}]},{path:"mentors",children:[{path:"",loadChildren:()=>Promise.all([o.e(0),o.e(6)]).then(o.bind(null,"heuU")).then(t=>t.MentorsPageModule)}]}]}];let d=(()=>{class t{}return t.\u0275mod=l.Fb({type:t}),t.\u0275inj=l.Eb({factory:function(n){return new(n||t)},imports:[[r.j.forChild(b)],r.j]}),t})(),h=(()=>{class t{}return t.\u0275mod=l.Fb({type:t}),t.\u0275inj=l.Eb({factory:function(n){return new(n||t)},imports:[[e.Q,i.b,a.d,d]]}),t})()}}]);