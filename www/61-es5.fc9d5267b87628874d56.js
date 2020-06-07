function _defineProperties(l,n){for(var u=0;u<n.length;u++){var e=n[u];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(l,e.key,e)}}function _createClass(l,n,u){return n&&_defineProperties(l.prototype,n),u&&_defineProperties(l,u),l}function _classCallCheck(l,n){if(!(l instanceof n))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{EcO9:function(l,n,u){"use strict";u.r(n);var e=u("8Y7J"),o=function l(){_classCallCheck(this,l)},i=u("pMnS"),t=u("oBZk"),r=u("ZZ/e"),a=u("s7LF"),b=u("Aso2"),s=u("lGQG"),c=function(){function l(n,u,e,o,i){_classCallCheck(this,l),this.activatedRoute=n,this.formBuilder=u,this.profile=e,this.auth=o,this.router=i,this.activeEmail=this.profile.email.getValue(),this.school=this.profile.school.getValue(),this.grade=this.profile.grade.getValue(),this.activeEmail=this.auth.user.email}return _createClass(l,[{key:"ngOnInit",value:function(){this.changeSchool=this.formBuilder.group({newSchool:["".concat(this.school),a.p.required],newGrade:["",a.p.required],password:["",a.p.required]})}},{key:"back",value:function(){this.router.navigate(["/home/profile/edit-profile-page"])}},{key:"confirmChangedSchool",value:function(l,n,u,e){this.profile.changeSchool(l,n,u,e)}}]),l}(),h=u("iInd"),d=e.zb({encapsulation:0,styles:[["ion-title[_ngcontent-%COMP%]{margin:0}"]],data:{}});function g(l){return e.Vb(0,[(l()(),e.Bb(0,0,null,null,11,"ion-header",[["class","ion-hide-lg-up"]],null,null,null,t.cb,t.r)),e.Ab(1,49152,null,0,r.C,[e.j,e.p,e.F],null,null),(l()(),e.Bb(2,0,null,0,9,"ion-toolbar",[],null,null,null,t.vb,t.K)),e.Ab(3,49152,null,0,r.Db,[e.j,e.p,e.F],null,null),(l()(),e.Bb(4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,t.P,t.e)),e.Ab(5,49152,null,0,r.m,[e.j,e.p,e.F],null,null),(l()(),e.Bb(6,0,null,0,2,"ion-back-button",[],null,[[null,"click"]],(function(l,n,u){var o=!0;return"click"===n&&(o=!1!==e.Nb(l,8).onClick(u)&&o),o}),t.N,t.c)),e.Ab(7,49152,null,0,r.h,[e.j,e.p,e.F],null,null),e.Ab(8,16384,null,0,r.i,[[2,r.jb],r.Jb],null,null),(l()(),e.Bb(9,0,null,0,2,"ion-title",[],null,null,null,t.ub,t.J)),e.Ab(10,49152,null,0,r.Bb,[e.j,e.p,e.F],null,null),(l()(),e.Tb(-1,0,["Change School/Grade"])),(l()(),e.Bb(12,0,null,null,92,"ion-content",[],null,null,null,t.W,t.l)),e.Ab(13,49152,null,0,r.v,[e.j,e.p,e.F],null,null),(l()(),e.Bb(14,0,null,0,90,"ion-grid",[["class","ion-text-center"],["fixed",""]],null,null,null,t.bb,t.q)),e.Ab(15,49152,null,0,r.B,[e.j,e.p,e.F],{fixed:[0,"fixed"]},null),(l()(),e.Bb(16,0,null,0,10,"ion-row",[["class","ion-hide-md-down"],["style","margin: 5% 0% 3% 0%;"]],null,null,null,t.kb,t.z)),e.Ab(17,49152,null,0,r.kb,[e.j,e.p,e.F],null,null),(l()(),e.Bb(18,0,null,0,3,"ion-col",[["offset","2"],["size","3.5"]],null,null,null,t.V,t.k)),e.Ab(19,49152,null,0,r.u,[e.j,e.p,e.F],{offset:[0,"offset"],size:[1,"size"]},null),(l()(),e.Bb(20,0,null,0,1,"h1",[],null,null,null,null,null)),(l()(),e.Tb(-1,null,["Change School/Grade"])),(l()(),e.Bb(22,0,null,0,4,"ion-col",[["push","2.5"],["size","2"]],null,null,null,t.V,t.k)),e.Ab(23,49152,null,0,r.u,[e.j,e.p,e.F],{push:[0,"push"],size:[1,"size"]},null),(l()(),e.Bb(24,0,null,0,2,"ion-button",[["class","back-button"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.back()&&e),e}),t.O,t.d)),e.Ab(25,49152,null,0,r.l,[e.j,e.p,e.F],null,null),(l()(),e.Tb(-1,0,[" Back "])),(l()(),e.Bb(27,0,null,0,4,"ion-row",[["class","ion-justify-content-center ion-hide-md-down"]],null,null,null,t.kb,t.z)),e.Ab(28,49152,null,0,r.kb,[e.j,e.p,e.F],null,null),(l()(),e.Bb(29,0,null,0,2,"ion-col",[["size","10"]],null,null,null,t.V,t.k)),e.Ab(30,49152,null,0,r.u,[e.j,e.p,e.F],{size:[0,"size"]},null),(l()(),e.Bb(31,0,null,0,0,"hr",[["style","background-color: #00000044;"]],null,null,null,null,null)),(l()(),e.Bb(32,0,null,0,72,"ion-row",[["class","ion-justify-content-center"]],null,null,null,t.kb,t.z)),e.Ab(33,49152,null,0,r.kb,[e.j,e.p,e.F],null,null),(l()(),e.Bb(34,0,null,0,70,"ion-col",[["size-lg","6"],["size-md","8"],["size-sm","10"],["size-xs","11"]],null,null,null,t.V,t.k)),e.Ab(35,49152,null,0,r.u,[e.j,e.p,e.F],null,null),(l()(),e.Bb(36,0,null,0,1,"h6",[["class","text-header"],["style","width: unset;"]],null,null,null,null,null)),(l()(),e.Tb(37,null,["",", ",""])),(l()(),e.Bb(38,0,null,0,66,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],(function(l,n,u){var o=!0,i=l.component;return"submit"===n&&(o=!1!==e.Nb(l,40).onSubmit(u)&&o),"reset"===n&&(o=!1!==e.Nb(l,40).onReset()&&o),"ngSubmit"===n&&(o=!1!==i.confirmChangedSchool(i.activeEmail,i.changeSchool.controls.newSchool.value,i.changeSchool.controls.newGrade.value,i.changeSchool.controls.password.value)&&o),o}),null,null)),e.Ab(39,16384,null,0,a.t,[],null,null),e.Ab(40,540672,null,0,a.d,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),e.Qb(2048,null,a.a,null,[a.d]),e.Ab(42,16384,null,0,a.l,[[4,a.a]],null,null),(l()(),e.Bb(43,0,null,null,58,"ion-list",[["class","line-input"]],null,null,null,t.hb,t.w)),e.Ab(44,49152,null,0,r.P,[e.j,e.p,e.F],null,null),(l()(),e.Bb(45,0,null,0,10,"ion-item",[],null,null,null,t.fb,t.u)),e.Ab(46,49152,null,0,r.I,[e.j,e.p,e.F],null,null),(l()(),e.Bb(47,0,null,0,8,"ion-input",[["formControlName","newSchool"],["placeholder","Name of new school"],["required",""],["type",""]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var o=!0;return"ionBlur"===n&&(o=!1!==e.Nb(l,50)._handleBlurEvent(u.target)&&o),"ionChange"===n&&(o=!1!==e.Nb(l,50)._handleInputEvent(u.target)&&o),o}),t.eb,t.t)),e.Ab(48,16384,null,0,a.o,[],{required:[0,"required"]},null),e.Qb(1024,null,a.h,(function(l){return[l]}),[a.o]),e.Ab(50,16384,null,0,r.Pb,[e.p],null,null),e.Qb(1024,null,a.i,(function(l){return[l]}),[r.Pb]),e.Ab(52,671744,null,0,a.c,[[3,a.a],[6,a.h],[8,null],[6,a.i],[2,a.s]],{name:[0,"name"]},null),e.Qb(2048,null,a.j,null,[a.c]),e.Ab(54,16384,null,0,a.k,[[4,a.j]],null,null),e.Ab(55,49152,null,0,r.H,[e.j,e.p,e.F],{placeholder:[0,"placeholder"],required:[1,"required"],type:[2,"type"]},null),(l()(),e.Bb(56,0,null,0,34,"ion-item",[],null,null,null,t.fb,t.u)),e.Ab(57,49152,null,0,r.I,[e.j,e.p,e.F],null,null),(l()(),e.Bb(58,0,null,0,32,"ion-select",[["formControlName","newGrade"],["placeholder","Grade"],["required",""]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var o=!0;return"ionBlur"===n&&(o=!1!==e.Nb(l,61)._handleBlurEvent(u.target)&&o),"ionChange"===n&&(o=!1!==e.Nb(l,61)._handleChangeEvent(u.target)&&o),o}),t.nb,t.B)),e.Ab(59,16384,null,0,a.o,[],{required:[0,"required"]},null),e.Qb(1024,null,a.h,(function(l){return[l]}),[a.o]),e.Ab(61,16384,null,0,r.Ob,[e.p],null,null),e.Qb(1024,null,a.i,(function(l){return[l]}),[r.Ob]),e.Ab(63,671744,null,0,a.c,[[3,a.a],[6,a.h],[8,null],[6,a.i],[2,a.s]],{name:[0,"name"]},null),e.Qb(2048,null,a.j,null,[a.c]),e.Ab(65,16384,null,0,a.k,[[4,a.j]],null,null),e.Ab(66,49152,null,0,r.ob,[e.j,e.p,e.F],{placeholder:[0,"placeholder"]},null),(l()(),e.Bb(67,0,null,0,2,"ion-select-option",[["value","7th Grade"]],null,null,null,t.mb,t.C)),e.Ab(68,49152,null,0,r.pb,[e.j,e.p,e.F],{value:[0,"value"]},null),(l()(),e.Tb(-1,0,["Middle School - 7th Grade"])),(l()(),e.Bb(70,0,null,0,2,"ion-select-option",[["value","8th Grade"]],null,null,null,t.mb,t.C)),e.Ab(71,49152,null,0,r.pb,[e.j,e.p,e.F],{value:[0,"value"]},null),(l()(),e.Tb(-1,0,["Middle School - 8th Grade"])),(l()(),e.Bb(73,0,null,0,2,"ion-select-option",[["value","High School - Freshmen"]],null,null,null,t.mb,t.C)),e.Ab(74,49152,null,0,r.pb,[e.j,e.p,e.F],{value:[0,"value"]},null),(l()(),e.Tb(-1,0,["High School - Freshmen"])),(l()(),e.Bb(76,0,null,0,2,"ion-select-option",[["value","High School - Sophmore"]],null,null,null,t.mb,t.C)),e.Ab(77,49152,null,0,r.pb,[e.j,e.p,e.F],{value:[0,"value"]},null),(l()(),e.Tb(-1,0,["High School - Sophmore"])),(l()(),e.Bb(79,0,null,0,2,"ion-select-option",[["value","High School - Junior"]],null,null,null,t.mb,t.C)),e.Ab(80,49152,null,0,r.pb,[e.j,e.p,e.F],{value:[0,"value"]},null),(l()(),e.Tb(-1,0,["High School - Junior"])),(l()(),e.Bb(82,0,null,0,2,"ion-select-option",[["value","High School - Senior"]],null,null,null,t.mb,t.C)),e.Ab(83,49152,null,0,r.pb,[e.j,e.p,e.F],{value:[0,"value"]},null),(l()(),e.Tb(-1,0,["High School - Senior"])),(l()(),e.Bb(85,0,null,0,2,"ion-select-option",[["value","Collge - Freshmen"]],null,null,null,t.mb,t.C)),e.Ab(86,49152,null,0,r.pb,[e.j,e.p,e.F],{value:[0,"value"]},null),(l()(),e.Tb(-1,0,["College - Freshmen"])),(l()(),e.Bb(88,0,null,0,2,"ion-select-option",[["value","Collge - Sophmore"]],null,null,null,t.mb,t.C)),e.Ab(89,49152,null,0,r.pb,[e.j,e.p,e.F],{value:[0,"value"]},null),(l()(),e.Tb(-1,0,["College - Sophmore"])),(l()(),e.Bb(91,0,null,0,10,"ion-item",[],null,null,null,t.fb,t.u)),e.Ab(92,49152,null,0,r.I,[e.j,e.p,e.F],null,null),(l()(),e.Bb(93,0,null,0,8,"ion-input",[["formControlName","password"],["placeholder","Password"],["required",""],["type","password"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var o=!0;return"ionBlur"===n&&(o=!1!==e.Nb(l,96)._handleBlurEvent(u.target)&&o),"ionChange"===n&&(o=!1!==e.Nb(l,96)._handleInputEvent(u.target)&&o),o}),t.eb,t.t)),e.Ab(94,16384,null,0,a.o,[],{required:[0,"required"]},null),e.Qb(1024,null,a.h,(function(l){return[l]}),[a.o]),e.Ab(96,16384,null,0,r.Pb,[e.p],null,null),e.Qb(1024,null,a.i,(function(l){return[l]}),[r.Pb]),e.Ab(98,671744,null,0,a.c,[[3,a.a],[6,a.h],[8,null],[6,a.i],[2,a.s]],{name:[0,"name"]},null),e.Qb(2048,null,a.j,null,[a.c]),e.Ab(100,16384,null,0,a.k,[[4,a.j]],null,null),e.Ab(101,49152,null,0,r.H,[e.j,e.p,e.F],{placeholder:[0,"placeholder"],required:[1,"required"],type:[2,"type"]},null),(l()(),e.Bb(102,0,null,null,2,"ion-button",[["class","orange-button"],["style","width: unset;"],["type","submit"]],null,null,null,t.O,t.d)),e.Ab(103,49152,null,0,r.l,[e.j,e.p,e.F],{type:[0,"type"]},null),(l()(),e.Tb(-1,0,["CHANGE SCHOOL"]))],(function(l,n){var u=n.component;l(n,15,0,""),l(n,19,0,"2","3.5"),l(n,23,0,"2.5","2"),l(n,30,0,"10"),l(n,40,0,u.changeSchool),l(n,48,0,""),l(n,52,0,"newSchool"),l(n,55,0,"Name of new school","",""),l(n,59,0,""),l(n,63,0,"newGrade"),l(n,66,0,"Grade"),l(n,68,0,"7th Grade"),l(n,71,0,"8th Grade"),l(n,74,0,"High School - Freshmen"),l(n,77,0,"High School - Sophmore"),l(n,80,0,"High School - Junior"),l(n,83,0,"High School - Senior"),l(n,86,0,"Collge - Freshmen"),l(n,89,0,"Collge - Sophmore"),l(n,94,0,""),l(n,98,0,"password"),l(n,101,0,"Password","","password"),l(n,103,0,"submit")}),(function(l,n){var u=n.component;l(n,37,0,u.grade,u.school),l(n,38,0,e.Nb(n,42).ngClassUntouched,e.Nb(n,42).ngClassTouched,e.Nb(n,42).ngClassPristine,e.Nb(n,42).ngClassDirty,e.Nb(n,42).ngClassValid,e.Nb(n,42).ngClassInvalid,e.Nb(n,42).ngClassPending),l(n,47,0,e.Nb(n,48).required?"":null,e.Nb(n,54).ngClassUntouched,e.Nb(n,54).ngClassTouched,e.Nb(n,54).ngClassPristine,e.Nb(n,54).ngClassDirty,e.Nb(n,54).ngClassValid,e.Nb(n,54).ngClassInvalid,e.Nb(n,54).ngClassPending),l(n,58,0,e.Nb(n,59).required?"":null,e.Nb(n,65).ngClassUntouched,e.Nb(n,65).ngClassTouched,e.Nb(n,65).ngClassPristine,e.Nb(n,65).ngClassDirty,e.Nb(n,65).ngClassValid,e.Nb(n,65).ngClassInvalid,e.Nb(n,65).ngClassPending),l(n,93,0,e.Nb(n,94).required?"":null,e.Nb(n,100).ngClassUntouched,e.Nb(n,100).ngClassTouched,e.Nb(n,100).ngClassPristine,e.Nb(n,100).ngClassDirty,e.Nb(n,100).ngClassValid,e.Nb(n,100).ngClassInvalid,e.Nb(n,100).ngClassPending)}))}var p=e.xb("app-change-school",c,(function(l){return e.Vb(0,[(l()(),e.Bb(0,0,null,null,1,"app-change-school",[],null,null,null,g,d)),e.Ab(1,114688,null,0,c,[h.a,a.b,b.a,s.a,h.m],null,null)],(function(l,n){l(n,1,0)}),null)}),{},{},[]),m=u("SVse"),f=function(){return u.e(62).then(u.bind(null,"Ycba")).then((function(l){return l.ConfirmPageModuleNgFactory}))},C=function l(){_classCallCheck(this,l)};u.d(n,"ChangeSchoolPageModuleNgFactory",(function(){return v}));var v=e.yb(o,[],(function(l){return e.Kb([e.Lb(512,e.m,e.jb,[[8,[i.a,p]],[3,e.m],e.D]),e.Lb(4608,m.l,m.k,[e.z,[2,m.s]]),e.Lb(4608,a.r,a.r,[]),e.Lb(4608,r.c,r.c,[e.F,e.g]),e.Lb(4608,r.Ib,r.Ib,[r.c,e.m,e.w]),e.Lb(4608,r.Mb,r.Mb,[r.c,e.m,e.w]),e.Lb(4608,a.b,a.b,[]),e.Lb(1073742336,m.c,m.c,[]),e.Lb(1073742336,a.q,a.q,[]),e.Lb(1073742336,a.e,a.e,[]),e.Lb(1073742336,r.Fb,r.Fb,[]),e.Lb(1073742336,a.n,a.n,[]),e.Lb(1073742336,h.q,h.q,[[2,h.v],[2,h.m]]),e.Lb(1073742336,C,C,[]),e.Lb(1073742336,o,o,[]),e.Lb(1024,h.k,(function(){return[[{path:"",component:c},{path:"confirm",loadChildren:f}]]}),[])])}))}}]);