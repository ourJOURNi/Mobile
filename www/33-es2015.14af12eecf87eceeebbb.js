(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{"kH/Y":function(t,e,n){"use strict";n.r(e),n.d(e,"EventsPagePageModule",function(){return p});var o=n("ofXK"),i=n("3Pt+"),s=n("TEn/"),a=n("tyNb"),r=n("mrSG"),c=n("riPR"),g=n("Aso2"),b=n("xcW5"),h=n("fXoL");function l(t,e){if(1&t){const t=h.Nb();h.Mb(0,"ion-row",6),h.Mb(1,"ion-col",7),h.Mb(2,"p",8),h.mc(3,"Do you want to go to this event?"),h.Ib(4,"br"),h.mc(5," By clicking 'Yes', this event will be added to your Your Events."),h.Lb(),h.Mb(6,"ion-button",9),h.Ub("click",function(){return h.gc(t),h.Wb().goingToEvent()}),h.mc(7," Yes. "),h.Lb(),h.Ib(8,"br"),h.Ib(9,"br"),h.Mb(10,"a",10),h.Ub("click",function(){return h.gc(t),h.Wb().callEventEmitter()}),h.mc(11,"Go back to Events Page"),h.Lb(),h.Ib(12,"br"),h.Ib(13,"br"),h.Mb(14,"a",11),h.mc(15,"View My Events"),h.Lb(),h.Lb(),h.Lb()}}function d(t,e){if(1&t){const t=h.Nb();h.Mb(0,"ion-row",6),h.Mb(1,"ion-col",7),h.Mb(2,"p",8),h.mc(3,"Do you want to go to this event?"),h.Ib(4,"br"),h.mc(5," By clicking 'No', this event will be deleted from your Your Events."),h.Lb(),h.Mb(6,"ion-button",12),h.Ub("click",function(){return h.gc(t),h.Wb().notGoingToEvent()}),h.mc(7," No. "),h.Lb(),h.Ib(8,"br"),h.Ib(9,"br"),h.Mb(10,"a",13),h.Ub("click",function(){return h.gc(t),h.Wb().callEventEmitter()}),h.mc(11,"Go back to Events Page"),h.Lb(),h.Ib(12,"br"),h.Ib(13,"br"),h.Mb(14,"a",14),h.mc(15,"View My Events"),h.Lb(),h.Lb(),h.Lb()}}const u=[{path:"",component:(()=>{class t{constructor(t,e,n,o,i,s,a){this.activatedRoute=t,this.events=e,this.profile=n,this.router=o,this.toastController=i,this.eventEmitterService=s,this.location=a,this.going=!1}ngOnDestroy(){this.eventEmitterService.subsVar.unsubscribe()}ngOnInit(){this.location.onPopState(()=>{this.eventEmitterService.onBackAction()});const t=this.activatedRoute.snapshot.paramMap.get("id"),e=this.activatedRoute.snapshot.paramMap.get("title"),n=this.activatedRoute.snapshot.paramMap.get("addressOne"),o=this.activatedRoute.snapshot.paramMap.get("addressTwo"),i=this.activatedRoute.snapshot.paramMap.get("city"),s=this.activatedRoute.snapshot.paramMap.get("state"),a=this.activatedRoute.snapshot.paramMap.get("zip"),r=this.activatedRoute.snapshot.paramMap.get("date"),c=this.activatedRoute.snapshot.paramMap.get("dateCreated"),g=this.activatedRoute.snapshot.paramMap.get("time"),b=this.activatedRoute.snapshot.paramMap.get("description"),h=this.activatedRoute.snapshot.paramMap.get("photo");this.eventId=t,this.eventTitle=e,this.eventAddressOne=n,this.eventAddressTwo=o,this.eventCity=i,this.eventState=s,this.eventZip=a,this.eventDateCreated=c,this.eventDate=r,this.eventTime=g,this.eventDescription=b,this.eventPhoto=h,this.profileSub=this.profile.getUserDetails().subscribe(t=>{this.id=t._id;let e=t.eventsGoing;console.log(e),this.going=!!e.includes(this.eventId),console.log()})}goingToEvent(){this.going=!0,this.presentGoingToast(),console.log(`Adding ${this.eventId} to this Users eventsGoing property`),this.goingToEventSub=this.events.goingToEvent(this.eventId,this.userEmail,this.id).subscribe(t=>{let e=[...Object.values(t.eventsGoing),this.eventId];this.events.eventsGoing$.next(e),console.log(this.events.eventsGoing$.getValue())})}notGoingToEvent(){this.going=!1,this.presentNotGoingToast(),console.log(`Removing ${this.eventId} from this Users eventsGoing property`),this.notGoingToEventSub=this.events.notGoingToEvent(this.eventId,this.userEmail,this.id).subscribe(t=>{const e=this.events.eventsGoing$.getValue();for(let n=0;n<e.length;n++)e[n]===this.eventId&&e.splice(n,1);console.log(e),this.events.eventsGoing$.next(e)})}callEventEmitter(){this.eventEmitterService.onBackAction()}presentGoingToast(){return Object(r.a)(this,void 0,void 0,function*(){(yield this.toastController.create({message:'You are going to this Event. It has been saved to your "Going" list',duration:2e3})).present()})}presentNotGoingToast(){return Object(r.a)(this,void 0,void 0,function*(){(yield this.toastController.create({message:'You are no longer going to event. It has been removed from your "Going" list',duration:2e3})).present()})}}return t.\u0275fac=function(e){return new(e||t)(h.Hb(a.a),h.Hb(c.a),h.Hb(g.a),h.Hb(a.f),h.Hb(s.Z),h.Hb(b.a),h.Hb(o.l))},t.\u0275cmp=h.Bb({type:t,selectors:[["app-events-page"]],decls:33,vars:12,consts:[[1,"ion-hide-lg-up"],["slot","start"],[1,"ion-justify-content-center","event-image"],[1,"details","ion-justify-content-center","ion-align-items-center"],["size-xs","11","size-lg","6"],["class","going ion-justify-content-center",4,"ngIf"],[1,"going","ion-justify-content-center"],["size","10",1,"ion-text-center"],[1,"going-text"],[1,"going-button",3,"click"],["routerLink","/home/events",1,"going-link",3,"click"],["routerLink","/home/events/going",1,"going-link"],[1,"not-going-button",3,"click"],["routerLink","/home/events",1,"not-going-link",3,"click"],["routerLink","/home/events/going",1,"not-going-link"]],template:function(t,e){1&t&&(h.Mb(0,"ion-header",0),h.Mb(1,"ion-toolbar"),h.Mb(2,"ion-buttons",1),h.Ib(3,"ion-back-button"),h.Lb(),h.Mb(4,"ion-title"),h.mc(5),h.Lb(),h.Lb(),h.Lb(),h.Mb(6,"ion-content"),h.Mb(7,"ion-grid"),h.Ib(8,"ion-row",2),h.Mb(9,"ion-row",3),h.Mb(10,"ion-col",4),h.Mb(11,"h3"),h.mc(12,"Event Title"),h.Lb(),h.Mb(13,"p"),h.mc(14),h.Lb(),h.Mb(15,"h3"),h.mc(16,"Address "),h.Lb(),h.Mb(17,"p"),h.mc(18),h.Lb(),h.Mb(19,"h3"),h.mc(20,"Date"),h.Lb(),h.Mb(21,"p"),h.mc(22),h.Lb(),h.Mb(23,"h3"),h.mc(24,"Time"),h.Lb(),h.Mb(25,"p"),h.mc(26),h.Lb(),h.Mb(27,"h3"),h.mc(28,"Description"),h.Lb(),h.Mb(29,"p"),h.mc(30),h.Lb(),h.Lb(),h.Lb(),h.lc(31,l,16,0,"ion-row",5),h.lc(32,d,16,0,"ion-row",5),h.Lb(),h.Lb()),2&t&&(h.xb(5),h.nc(e.eventTitle),h.xb(9),h.nc(e.eventTitle),h.xb(4),h.rc("",e.eventAddressOne," ",e.eventAddressTwo,", ",e.eventCity,", ",e.eventState,", ",e.eventZip,""),h.xb(4),h.oc(" ",e.eventDate,""),h.xb(4),h.nc(e.eventTime),h.xb(4),h.nc(e.eventDescription),h.xb(1),h.Zb("ngIf",!e.going),h.xb(1),h.Zb("ngIf",e.going))},directives:[s.u,s.P,s.h,s.e,s.f,s.O,s.o,s.t,s.G,s.n,o.j,s.g,a.i,s.W],styles:["ion-header[_ngcontent-%COMP%], ion-toolbar[_ngcontent-%COMP%]{background:none;--box-shadow:none}h3[_ngcontent-%COMP%]{font-weight:800;line-height:1em;width:150px;color:#0055a5}h3[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{font-size:1.1em}p[_ngcontent-%COMP%]{color:#333;margin-bottom:40px}.going-link[_ngcontent-%COMP%]:link, .going-link[_ngcontent-%COMP%]:visited{color:#1baf88}.not-going-link[_ngcontent-%COMP%]:link, .not-going-link[_ngcontent-%COMP%]:visited{color:#faa71b;font-size:1.4em}.header[_ngcontent-%COMP%]{background-color:#edf3f8;padding:0;height:auto}.event-image[_ngcontent-%COMP%]{height:300px;background:url(Journi_flyer-500x357.d0cae1f08171879036db.png);background-size:cover;background-position:50%}.details[_ngcontent-%COMP%]{height:auto;background:#fff;padding:50px 0}.going-text[_ngcontent-%COMP%]{font-weight:600;color:#222;width:100%;margin:26px auto}.going[_ngcontent-%COMP%], .not-going[_ngcontent-%COMP%]{background:#edf3f8;padding:80px 0;color:#fff}.going-button[_ngcontent-%COMP%]{font-weight:800;--background:#1baf88;--background-hover:#1baf88}.going-button[_ngcontent-%COMP%], .not-going-button[_ngcontent-%COMP%]{width:200px;font-size:1.2em;--color:#fff}.not-going-button[_ngcontent-%COMP%]{--background:#faa71b;--background-hover:#faa71b}ion-buttons[_ngcontent-%COMP%] > ion-button[_ngcontent-%COMP%]{color:#fff;height:45px;border-radius:5px;font-size:.9em;text-transform:none}@-webkit-keyframes slide-up{0%{width:0;transform:translateY(20%);opacity:0}to{transform:translateY(0);opacity:1}}@keyframes slide-up{0%{width:0;transform:translateY(20%);opacity:0}to{transform:translateY(0);opacity:1}}"]}),t})()}];let v=(()=>{class t{}return t.\u0275mod=h.Fb({type:t}),t.\u0275inj=h.Eb({factory:function(e){return new(e||t)},imports:[[a.j.forChild(u)],a.j]}),t})(),p=(()=>{class t{}return t.\u0275mod=h.Fb({type:t}),t.\u0275inj=h.Eb({factory:function(e){return new(e||t)},imports:[[o.b,i.d,s.Q,v]]}),t})()}}]);