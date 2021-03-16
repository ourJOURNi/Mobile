(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{o1Rv:function(t,e,n){"use strict";n.r(e),n.d(e,"MentorPagePageModule",function(){return m});var i=n("ofXK"),o=n("3Pt+"),a=n("TEn/"),r=n("tyNb"),s=n("fXoL");const c=[{path:"",component:(()=>{class t{constructor(t,e,n){this.activatedRoute=t,this.router=e,this.toastController=n}ngOnInit(){const t=this.activatedRoute.snapshot.paramMap.get("title"),e=this.activatedRoute.snapshot.paramMap.get("name"),n=this.activatedRoute.snapshot.paramMap.get("email"),i=this.activatedRoute.snapshot.paramMap.get("description"),o=this.activatedRoute.snapshot.paramMap.get("photo"),a=this.activatedRoute.snapshot.paramMap.get("city"),r=this.activatedRoute.snapshot.paramMap.get("state");this.mentorName=e,this.mentorTitle=t,this.mentorEmail=n,this.mentorDescription=i,this.mentorPhoto=o,this.mentorCity=a,this.mentorState=r}back(){this.router.navigate(["/home/mentors"])}contactMentor(){this.router.navigate(["/home/mentors/mentor-page/:name/:title/:email/:description/:photo/:city/:state/contact-mentor",this.mentorName,this.mentorEmail,this.mentorPhoto])}}return t.\u0275fac=function(e){return new(e||t)(s.Hb(r.a),s.Hb(r.f),s.Hb(a.Z))},t.\u0275cmp=s.Bb({type:t,selectors:[["app-mentor-page"]],decls:32,vars:5,consts:[[1,"ion-hide-lg-up"],["slot","start"],[1,"ion-hide-md-down","ion-align-items-center",2,"margin","5% 0% 3% 0%"],["offset","2","size","4"],["offset","2","size","2"],[1,"blue-button","ion-float-right",3,"click"],[1,"mentor","ion-justify-content-center"],["size-xs","9","size-sm","10","size-md","10","push-lg","1","size-lg","10"],["id","mentor-profile-picture"],["size-xs","9","size-sm","10","size-md","10","size-lg","8"],["id","mentor-name"],["id","mentor-title"],["id","mentor-location"],["id","mentor-description"],[1,"ion-justify-content-center"],["size-xs","9","size-md","2",1,"ion-text-center"],[1,"orange-button",3,"click"]],template:function(t,e){1&t&&(s.Mb(0,"ion-header",0),s.Mb(1,"ion-toolbar"),s.Mb(2,"ion-buttons",1),s.Ib(3,"ion-back-button"),s.Lb(),s.Mb(4,"ion-title"),s.mc(5,"Mentors"),s.Lb(),s.Lb(),s.Lb(),s.Mb(6,"ion-content"),s.Mb(7,"ion-grid"),s.Mb(8,"ion-row",2),s.Mb(9,"ion-col",3),s.Mb(10,"h1"),s.mc(11,"Mentor"),s.Lb(),s.Lb(),s.Mb(12,"ion-col",4),s.Mb(13,"ion-button",5),s.Ub("click",function(){return e.back()}),s.mc(14," Back "),s.Lb(),s.Lb(),s.Lb(),s.Mb(15,"ion-row",6),s.Mb(16,"ion-col",7),s.Ib(17,"div",8),s.Lb(),s.Mb(18,"ion-col",9),s.Mb(19,"p",10),s.mc(20),s.Lb(),s.Mb(21,"p",11),s.mc(22),s.Lb(),s.Mb(23,"p",12),s.mc(24),s.Lb(),s.Lb(),s.Mb(25,"ion-col",9),s.Mb(26,"p",13),s.mc(27),s.Lb(),s.Lb(),s.Lb(),s.Mb(28,"ion-row",14),s.Mb(29,"ion-col",15),s.Mb(30,"ion-button",16),s.Ub("click",function(){return e.contactMentor()}),s.mc(31," Contact "),s.Lb(),s.Lb(),s.Lb(),s.Lb(),s.Lb()),2&t&&(s.xb(20),s.nc(e.mentorName),s.xb(2),s.nc(e.mentorTitle),s.xb(2),s.pc("",e.mentorCity,", ",e.mentorState,""),s.xb(3),s.nc(e.mentorDescription))},directives:[a.u,a.P,a.h,a.e,a.f,a.O,a.o,a.t,a.G,a.n,a.g],styles:["ion-title[_ngcontent-%COMP%]{margin:0}ion-header[_ngcontent-%COMP%]{box-shadow:1px 1px 10px rgba(0,0,0,.1)}.header-wrapper[_ngcontent-%COMP%]{background:#fff;width:50%;height:100px;border-radius:100px}.blue-button[_ngcontent-%COMP%]{-webkit-animation:none;animation:none;opacity:unset}#mentor-profile-picture[_ngcontent-%COMP%]{margin-top:50px;height:50px;width:50px;background-image:url(aaron.51813457a867ebfcb7d8.jpg);background-repeat:no-repeat;background-size:contain;background-position:50%;border-radius:50px;opacity:0;-webkit-animation:slide-in-left 1s cubic-bezier(.175,.885,.32,1.275) .5s forwards;animation:slide-in-left 1s cubic-bezier(.175,.885,.32,1.275) .5s forwards}#mentor-name[_ngcontent-%COMP%]{font-size:2em;font-weight:900;opacity:0;-webkit-animation:slide-in-left 1s cubic-bezier(.175,.885,.32,1.275) 1s forwards;animation:slide-in-left 1s cubic-bezier(.175,.885,.32,1.275) 1s forwards}#mentor-title[_ngcontent-%COMP%]{-webkit-animation:slide-in-left 1s cubic-bezier(.175,.885,.32,1.275) 1.5s forwards;animation:slide-in-left 1s cubic-bezier(.175,.885,.32,1.275) 1.5s forwards}#mentor-location[_ngcontent-%COMP%], #mentor-title[_ngcontent-%COMP%]{font-size:1em;font-weight:500;color:#0055a5;opacity:0}#mentor-location[_ngcontent-%COMP%]{-webkit-animation:slide-in-left 1s cubic-bezier(.175,.885,.32,1.275) 1.6s forwards;animation:slide-in-left 1s cubic-bezier(.175,.885,.32,1.275) 1.6s forwards}#mentor-email[_ngcontent-%COMP%]{font-size:1em;color:#999;opacity:0;-webkit-animation:slide-in-left 1s cubic-bezier(.175,.885,.32,1.275) 1.7s forwards;animation:slide-in-left 1s cubic-bezier(.175,.885,.32,1.275) 1.7s forwards}#mentor-description[_ngcontent-%COMP%]{font-size:1.1em;color:#666;line-height:1.7em;opacity:0;-webkit-animation:slide-in-up .8s cubic-bezier(.15,.85,.75,.9) 1.9s forwards;animation:slide-in-up .8s cubic-bezier(.15,.85,.75,.9) 1.9s forwards}#contact-button[_ngcontent-%COMP%]{margin:50px 0 250px;--background:linear-gradient(#0672c4,#005191);--background-hover:linear-gradient(#0672c4,#222);--transition:0.5s;font-weight:800}@-webkit-keyframes slide-in-left{0%{transform:translateX(-20px)}to{opacity:1;transform:translateX(0)}}@keyframes slide-in-left{0%{transform:translateX(-20px)}to{opacity:1;transform:translateX(0)}}@-webkit-keyframes slide-in-up{0%{transform:translateY(100px)}to{opacity:1;transform:translateY(0)}}@keyframes slide-in-up{0%{transform:translateY(100px)}to{opacity:1;transform:translateY(0)}}"]}),t})()},{path:"contact-mentor/:name/:email/:photo",loadChildren:()=>n.e(21).then(n.bind(null,"pRc2")).then(t=>t.ContactMentorPageModule)}];let b=(()=>{class t{}return t.\u0275mod=s.Fb({type:t}),t.\u0275inj=s.Eb({factory:function(e){return new(e||t)},imports:[[r.j.forChild(c)],r.j]}),t})(),m=(()=>{class t{}return t.\u0275mod=s.Fb({type:t}),t.\u0275inj=s.Eb({factory:function(e){return new(e||t)},imports:[[i.b,o.d,a.Q,b]]}),t})()}}]);