(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{L8Dd:function(l,n,u){"use strict";u.r(n);var e=u("8Y7J");class i{}var t=u("pMnS"),o=u("oBZk"),b=u("ZZ/e"),s=u("Aso2");class r{constructor(l,n,u){this.router=l,this.profile=n,this.domSanitizer=u}ngOnInit(){this.profile.getUserDetails().subscribe(l=>{console.log(l),this.profile.resume.next(l.resume)}),this.profile.resume.subscribe(l=>{this.resume=l})}sanitizeImageUrl(l){return this.domSanitizer.bypassSecurityTrustResourceUrl(l)}back(){this.router.navigate(["/home/profile"])}updateResume(){console.log("Updating Resume from View Resume page"),this.router.navigate(["/home/profile/update-resume"])}}var c=u("iInd"),a=u("cUpR"),p=e.zb({encapsulation:0,styles:[["ion-title[_ngcontent-%COMP%]{margin:0}.orange-button[_ngcontent-%COMP%]{position:relative;top:4px;right:20px}"]],data:{}});function m(l){return e.Vb(0,[(l()(),e.Bb(0,0,null,null,11,"ion-header",[["class","ion-hide-lg-up"]],null,null,null,o.cb,o.r)),e.Ab(1,49152,null,0,b.C,[e.j,e.p,e.F],null,null),(l()(),e.Bb(2,0,null,0,9,"ion-toolbar",[],null,null,null,o.vb,o.K)),e.Ab(3,49152,null,0,b.Db,[e.j,e.p,e.F],null,null),(l()(),e.Bb(4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,o.P,o.e)),e.Ab(5,49152,null,0,b.m,[e.j,e.p,e.F],null,null),(l()(),e.Bb(6,0,null,0,2,"ion-back-button",[],null,[[null,"click"]],(function(l,n,u){var i=!0;return"click"===n&&(i=!1!==e.Nb(l,8).onClick(u)&&i),i}),o.N,o.c)),e.Ab(7,49152,null,0,b.h,[e.j,e.p,e.F],null,null),e.Ab(8,16384,null,0,b.i,[[2,b.jb],b.Jb],null,null),(l()(),e.Bb(9,0,null,0,2,"ion-title",[],null,null,null,o.ub,o.J)),e.Ab(10,49152,null,0,b.Bb,[e.j,e.p,e.F],null,null),(l()(),e.Tb(-1,0,["View Resume"])),(l()(),e.Bb(12,0,null,null,30,"ion-content",[],null,null,null,o.W,o.l)),e.Ab(13,49152,null,0,b.v,[e.j,e.p,e.F],null,null),(l()(),e.Bb(14,0,null,0,28,"ion-grid",[],null,null,null,o.bb,o.q)),e.Ab(15,49152,null,0,b.B,[e.j,e.p,e.F],null,null),(l()(),e.Bb(16,0,null,0,13,"ion-row",[["class","ion-hide-md-down"],["style","margin: 5% 0% 3% 0%;"]],null,null,null,o.kb,o.z)),e.Ab(17,49152,null,0,b.kb,[e.j,e.p,e.F],null,null),(l()(),e.Bb(18,0,null,0,3,"ion-col",[["push-lg","0.5"],["size","2"]],null,null,null,o.V,o.k)),e.Ab(19,49152,null,0,b.u,[e.j,e.p,e.F],{size:[0,"size"]},null),(l()(),e.Bb(20,0,null,0,1,"h1",[],null,null,null,null,null)),(l()(),e.Tb(-1,null,["View Resume"])),(l()(),e.Bb(22,0,null,0,7,"ion-col",[["push-lg","6.4"],["size","6"]],null,null,null,o.V,o.k)),e.Ab(23,49152,null,0,b.u,[e.j,e.p,e.F],{size:[0,"size"]},null),(l()(),e.Bb(24,0,null,0,2,"ion-button",[["class","orange-button"],["style","width: 150px;"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.updateResume()&&e),e}),o.O,o.d)),e.Ab(25,49152,null,0,b.l,[e.j,e.p,e.F],null,null),(l()(),e.Tb(-1,0,["UPDATE"])),(l()(),e.Bb(27,0,null,0,2,"ion-button",[["class","blue-button"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.back()&&e),e}),o.O,o.d)),e.Ab(28,49152,null,0,b.l,[e.j,e.p,e.F],null,null),(l()(),e.Tb(-1,0,[" Back "])),(l()(),e.Bb(30,0,null,0,4,"ion-row",[["class","ion-justify-content-center ion-hide-md-down"]],null,null,null,o.kb,o.z)),e.Ab(31,49152,null,0,b.kb,[e.j,e.p,e.F],null,null),(l()(),e.Bb(32,0,null,0,2,"ion-col",[["size","11"]],null,null,null,o.V,o.k)),e.Ab(33,49152,null,0,b.u,[e.j,e.p,e.F],{size:[0,"size"]},null),(l()(),e.Bb(34,0,null,0,0,"hr",[["style","background-color: #666;"]],null,null,null,null,null)),(l()(),e.Bb(35,0,null,0,7,"ion-row",[["class","ion-justify-content-center"]],null,null,null,o.kb,o.z)),e.Ab(36,49152,null,0,b.kb,[e.j,e.p,e.F],null,null),(l()(),e.Bb(37,0,null,0,2,"ion-col",[["size-lg","11"],["size-md","11"],["size-sm","11"],["size-xs","12"],["style","margin: 100px auto;"]],null,null,null,o.V,o.k)),e.Ab(38,49152,null,0,b.u,[e.j,e.p,e.F],null,null),(l()(),e.Bb(39,0,null,0,0,"object",[["height","700"],["type","application/pdf"],["width","100%"]],[[8,"data",5]],null,null,null,null)),(l()(),e.Bb(40,0,null,0,2,"ion-button",[["class","orange-button ion-hide-md-up"],["style","width: 150px;"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.updateResume()&&e),e}),o.O,o.d)),e.Ab(41,49152,null,0,b.l,[e.j,e.p,e.F],null,null),(l()(),e.Tb(-1,0,["UPDATE"]))],(function(l,n){l(n,19,0,"2"),l(n,23,0,"6"),l(n,33,0,"11")}),(function(l,n){var u=n.component;l(n,39,0,u.sanitizeImageUrl(u.resume))}))}function d(l){return e.Vb(0,[(l()(),e.Bb(0,0,null,null,1,"app-view-resume",[],null,null,null,m,p)),e.Ab(1,114688,null,0,r,[c.m,s.a,a.b],null,null)],(function(l,n){l(n,1,0)}),null)}var h=e.xb("app-view-resume",r,d,{},{},[]),g=u("SVse"),k=u("s7LF");class B{}u.d(n,"ViewResumePageModuleNgFactory",(function(){return f}));var f=e.yb(i,[],(function(l){return e.Kb([e.Lb(512,e.m,e.jb,[[8,[t.a,h]],[3,e.m],e.D]),e.Lb(4608,g.l,g.k,[e.z,[2,g.s]]),e.Lb(4608,k.r,k.r,[]),e.Lb(4608,b.c,b.c,[e.F,e.g]),e.Lb(4608,b.Ib,b.Ib,[b.c,e.m,e.w]),e.Lb(4608,b.Mb,b.Mb,[b.c,e.m,e.w]),e.Lb(1073742336,g.c,g.c,[]),e.Lb(1073742336,k.q,k.q,[]),e.Lb(1073742336,k.e,k.e,[]),e.Lb(1073742336,b.Fb,b.Fb,[]),e.Lb(1073742336,c.q,c.q,[[2,c.v],[2,c.m]]),e.Lb(1073742336,B,B,[]),e.Lb(1073742336,i,i,[]),e.Lb(1024,c.k,(function(){return[[{path:"",component:r}]]}),[])])}))}}]);