(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{no2t:function(t,n,e){"use strict";e.r(n),e.d(n,"GoingPageModule",function(){return x});var i=e("ofXK"),o=e("3Pt+"),s=e("zAgk"),c=e("TEn/"),r=e("tyNb"),b=e("mrSG"),a=e("riPR"),g=e("Aso2"),l=e("sWYD"),d=e("7xvl"),u=e("xcW5"),h=e("fXoL"),m=e("EdnJ");function v(t,n){1&t&&(h.Mb(0,"ion-row",8),h.Mb(1,"ion-col",11),h.Mb(2,"p"),h.mc(3,"You have no events saved in My Events list."),h.Lb(),h.Lb(),h.Lb())}function f(t,n){if(1&t){const t=h.Nb();h.Mb(0,"ion-row",12),h.Mb(1,"ion-col",13),h.Ib(2,"img",14),h.Lb(),h.Mb(3,"ion-col",15),h.Mb(4,"p"),h.mc(5),h.Lb(),h.Mb(6,"p"),h.mc(7),h.Lb(),h.Mb(8,"p"),h.mc(9),h.Lb(),h.Lb(),h.Mb(10,"ion-col",16),h.Mb(11,"ion-button",17),h.Ub("click",function(){h.gc(t);const e=n.$implicit;return h.Wb().eventPage(e)}),h.mc(12," Details "),h.Lb(),h.Lb(),h.Lb()}if(2&t){const t=n.$implicit;h.xb(5),h.nc(t.title),h.xb(2),h.nc(t.time),h.xb(2),h.nc(t.date)}}function p(t,n){1&t&&(h.Mb(0,"ion-row",8),h.Mb(1,"ion-col",18),h.Mb(2,"p"),h.mc(3,"You have no events saved in My Events list. Please hit the "),h.Mb(4,"ion-button",19),h.mc(5," Go "),h.Lb(),h.mc(6," button on an Event to save it to this list."),h.Lb(),h.Lb(),h.Lb())}function M(t,n){if(1&t){const t=h.Nb();h.Mb(0,"ion-card"),h.Ib(1,"img",20),h.Mb(2,"ion-card-header",21),h.Ub("click",function(){h.gc(t);const e=n.$implicit;return h.Wb().eventPage(e)}),h.Mb(3,"ion-card-title"),h.mc(4),h.Lb(),h.Mb(5,"ion-card-subtitle"),h.mc(6),h.Lb(),h.Mb(7,"ion-card-subtitle"),h.mc(8),h.Lb(),h.Mb(9,"ion-card-subtitle"),h.mc(10),h.Lb(),h.Lb(),h.Mb(11,"ion-card-content"),h.Ib(12,"app-going-icon",22),h.Lb(),h.Lb()}if(2&t){const t=n.$implicit,e=h.Wb();h.xb(4),h.nc(t.title),h.xb(2),h.nc(t.time),h.xb(2),h.nc(t.date),h.xb(2),h.pc(" ",t.city,", ",t.state,""),h.xb(2),h.Zb("event",t)("userEmail",e.userEmail)("id",e.id)}}const L=[{path:"",component:(()=>{class t{constructor(t,n,e,i,o,s,c,r){this.router=t,this.events=n,this.profile=e,this.cdr=i,this.toast=o,this.alert=s,this.eventEmitterService=c,this.location=r,this.goingToEvents=[]}ngOnInit(){this.location.onPopState(()=>{this.eventEmitterService.onBackAction()}),this.profileSub=this.profile.getUserDetails().subscribe(t=>{this.id=t._id,this.userEmail=t.email,this.eventsGoingSub=this.events.eventsGoing$.subscribe(t=>{this.goingToEvents=t}),console.log("getting event user "+this.id+" is going to"),this.refreshGoingEvents()})}eventPage(t){this.router.navigate(["/home/events/events-page",t._id,t.title,t.addressOne,t.addressOne,t.city,t.state,t.zip,t.dateCreated,t.date,t.time,t.photo,t.description])}goBack(){this.eventEmitterService.onBackAction(),this.router.navigate(["/home/events"])}refreshGoingEvents(){this.eventsGoingSub=this.events.getEventsGoing(this.id).subscribe(t=>{this.goingToEvents=Object.values(t),this.goingToEvents.reverse(),console.log("Updated events going list: "+this.goingToEvents);for(const n of this.goingToEvents)n.date=Object(l.a)(new Date(n.date),"MMMM dd, yyyy"),n.time=Object(l.a)(new Date(n.date),"hh:mm a"),n.dateCreated=Object(d.a)(new Date(n.dateCreated),{includeSeconds:!0,addSuffix:!0});this.eventEmitterService.resetEvents()})}presentNotGoingToast(){return Object(b.a)(this,void 0,void 0,function*(){(yield this.toast.create({message:'You are no longer going to event. It has been removed from your "Going" list',duration:2e3})).present()})}}return t.\u0275fac=function(n){return new(n||t)(h.Hb(r.f),h.Hb(a.a),h.Hb(g.a),h.Hb(h.i),h.Hb(c.Z),h.Hb(c.a),h.Hb(u.a),h.Hb(i.l))},t.\u0275cmp=h.Bb({type:t,selectors:[["app-going"]],decls:22,vars:4,consts:[[1,"ion-hide-lg-up"],["slot","start"],[1,"ion-hide-md-down"],[1,"ion-justify-content-center","ion-align-items-center",2,"margin-top","5%"],["pull",".1","size","8",1,"ion-align-self-center"],[1,"ion-float-right","blue-button",2,"position","relative","top","-40px",3,"click"],["class","ion-justify-content-center",4,"ngIf"],["class","ion-justify-content-center","style","margin-top: 5%;",4,"ngFor","ngForOf"],[1,"ion-justify-content-center"],["size-xs","12","size-sm","10","size-md","9"],[4,"ngFor","ngForOf"],["size","10",1,"ion-text-center",2,"margin-top","100px"],[1,"ion-justify-content-center",2,"margin-top","5%"],["size","2"],["src","../assets/Journi_flyer.jpg",1,"thumbnail"],["size","4"],["size","2",1,"ion-text-center"],[1,"grey-button",3,"click"],["size-xs","11","size-sm","10","size-md","9",1,"ion-text-center",2,"margin-top","100px"],[1,"going"],["src","../assets/Journi_flyer.jpg"],[3,"click"],[3,"event","userEmail","id"]],template:function(t,n){1&t&&(h.Mb(0,"ion-header",0),h.Mb(1,"ion-toolbar"),h.Mb(2,"ion-buttons",1),h.Ib(3,"ion-back-button"),h.Lb(),h.Mb(4,"ion-title"),h.mc(5,"My Events"),h.Lb(),h.Lb(),h.Lb(),h.Mb(6,"ion-content"),h.Mb(7,"ion-grid",2),h.Mb(8,"ion-row",3),h.Mb(9,"ion-col",4),h.Mb(10,"div"),h.Mb(11,"h1"),h.mc(12,"My Events"),h.Lb(),h.Lb(),h.Mb(13,"ion-button",5),h.Ub("click",function(){return n.goBack()}),h.mc(14," Go Back "),h.Lb(),h.Lb(),h.Lb(),h.lc(15,v,4,0,"ion-row",6),h.lc(16,f,13,3,"ion-row",7),h.Lb(),h.Mb(17,"ion-grid",0),h.lc(18,p,7,0,"ion-row",6),h.Mb(19,"ion-row",8),h.Mb(20,"ion-col",9),h.lc(21,M,13,8,"ion-card",10),h.Lb(),h.Lb(),h.Lb(),h.Lb()),2&t&&(h.xb(15),h.Zb("ngIf",0===n.goingToEvents.length),h.xb(1),h.Zb("ngForOf",n.goingToEvents),h.xb(2),h.Zb("ngIf",0===n.goingToEvents.length),h.xb(3),h.Zb("ngForOf",n.goingToEvents))},directives:[c.u,c.P,c.h,c.e,c.f,c.O,c.o,c.t,c.G,c.n,c.g,i.j,i.i,c.i,c.k,c.m,c.l,c.j,m.a],styles:["ion-title[_ngcontent-%COMP%]{margin:0}.thumbnail[_ngcontent-%COMP%]{width:200px}.going[_ngcontent-%COMP%]{width:50px;font-weight:500;--background:#24d8a8;--background-hover:#24d8a8}.going[_ngcontent-%COMP%], .going[_ngcontent-%COMP%]:hover{--color:#fff}p[_ngcontent-%COMP%]{font-size:1.2em;color:#0055a5;font-weight:600}hr[_ngcontent-%COMP%]{border:1px solid #999}ion-card[_ngcontent-%COMP%]{margin-top:5%}ion-card-content[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{width:47%}ion-card-content[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:first-child{margin-right:5px}ion-card-content[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(2){margin-left:5px}"]}),t})()}];let E=(()=>{class t{}return t.\u0275mod=h.Fb({type:t}),t.\u0275inj=h.Eb({factory:function(n){return new(n||t)},imports:[[r.j.forChild(L)],r.j]}),t})(),x=(()=>{class t{}return t.\u0275mod=h.Fb({type:t}),t.\u0275inj=h.Eb({factory:function(n){return new(n||t)},imports:[[i.b,o.d,s.a,c.Q,E]]}),t})()}}]);