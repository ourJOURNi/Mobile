!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{mEkD:function(n,o,i){"use strict";i.r(o),i.d(o,"ChatPagePageModule",function(){return f});var a,r,s,b=i("ofXK"),c=i("3Pt+"),l=i("TEn/"),u=i("rFvw"),h=i("tyNb"),m=i("mrSG"),d=i("pCvL"),p=i("fXoL"),M=[{path:"",component:(a=function(){function n(t,o){e(this,n),this.alert=t,this.modal=o,this.shouldBounce=!0,this.dockedHeight=400,this.distanceTop=56,this.drawerState=u.a.Bottom,this.states=u.a,this.minimumHeight=0}var o,i,a;return o=n,(i=[{key:"ngOnInit",value:function(){}},{key:"menu",value:function(){this.drawerState=this.drawerState===u.a.Bottom?u.a.Docked:u.a.Bottom}},{key:"delertAlert",value:function(){return Object(m.a)(this,void 0,void 0,regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.alert.create({cssClass:"",header:"Are you sure you want to delete this conversation?",buttons:[{text:"Yes",handler:function(){console.log("Deleting")}},{text:"Cancel",role:"cancel"}]});case 2:return t=e.sent,e.next=5,t.present();case 5:case"end":return e.stop()}},e,this)}))}},{key:"reportAlert",value:function(){return Object(m.a)(this,void 0,void 0,regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.alert.create({cssClass:"",header:"Are you sure you want to report this conversation?",buttons:[{text:"Yes",handler:function(){console.log("Reporting")}},{text:"Cancel",role:"cancel"}]});case 2:return t=e.sent,e.next=5,t.present();case 5:case"end":return e.stop()}},e,this)}))}},{key:"reportConvo",value:function(){return Object(m.a)(this,void 0,void 0,regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.modal.create({component:d.a,componentProps:{}});case 2:return t=e.sent,this.drawerState=u.a.Bottom,e.next=6,t.present();case 6:case"end":return e.stop()}},e,this)}))}}])&&t(o.prototype,i),a&&t(o,a),n}(),a.\u0275fac=function(e){return new(e||a)(p.Hb(l.a),p.Hb(l.T))},a.\u0275cmp=p.Bb({type:a,selectors:[["app-chat-page"]],decls:83,vars:5,consts:[[1,"ion-hide-lg-up"],["slot","start"],[1,"toolbar-title"],["slot","end"],[3,"click"],["src","../../../../../assets/icons/ellipsis.svg","alt","",1,"ellipsis"],["lines","none"],["src","../../../../assets/batman-pro-pic.png"],[1,"date-sent"],[3,"state","minimumHeight","dockedHeight","shouldBounce","distanceTop","stateChange"],[1,"drawer-content"],[1,"blue-button",3,"click"],[1,"grey-button",3,"click"]],template:function(e,t){1&e&&(p.Mb(0,"ion-header",0),p.Mb(1,"ion-toolbar"),p.Mb(2,"ion-buttons",1),p.Ib(3,"ion-back-button"),p.Mb(4,"p",2),p.lc(5,"Conversation"),p.Lb(),p.Lb(),p.Mb(6,"ion-buttons",3),p.Mb(7,"ion-button",4),p.Ub("click",function(){return t.menu()}),p.Ib(8,"img",5),p.Lb(),p.Lb(),p.Lb(),p.Lb(),p.Mb(9,"ion-content"),p.Mb(10,"ion-list"),p.Mb(11,"ion-item",6),p.Mb(12,"ion-avatar",1),p.Ib(13,"img",7),p.Lb(),p.Mb(14,"ion-label"),p.Mb(15,"h2"),p.lc(16,"Username "),p.Mb(17,"span",8),p.lc(18,"\xb7 date"),p.Lb(),p.Lb(),p.Mb(19,"p"),p.lc(20,"This is the message..."),p.Lb(),p.Lb(),p.Lb(),p.Mb(21,"ion-item",6),p.Mb(22,"ion-avatar",1),p.Ib(23,"img",7),p.Lb(),p.Mb(24,"ion-label"),p.Mb(25,"h2"),p.lc(26,"Username "),p.Mb(27,"span",8),p.lc(28,"\xb7 date"),p.Lb(),p.Lb(),p.Mb(29,"p"),p.lc(30,"This is the message..."),p.Lb(),p.Lb(),p.Lb(),p.Mb(31,"ion-item",6),p.Mb(32,"ion-avatar",1),p.Ib(33,"img",7),p.Lb(),p.Mb(34,"ion-label"),p.Mb(35,"h2"),p.lc(36,"Username "),p.Mb(37,"span",8),p.lc(38,"\xb7 date"),p.Lb(),p.Lb(),p.Mb(39,"p"),p.lc(40,"This is the message..."),p.Lb(),p.Lb(),p.Lb(),p.Mb(41,"ion-item",6),p.Mb(42,"ion-avatar",1),p.Ib(43,"img",7),p.Lb(),p.Mb(44,"ion-label"),p.Mb(45,"h2"),p.lc(46,"Username "),p.Mb(47,"span",8),p.lc(48,"\xb7 date"),p.Lb(),p.Lb(),p.Mb(49,"p"),p.lc(50,"This is the message..."),p.Lb(),p.Lb(),p.Lb(),p.Mb(51,"ion-item",6),p.Mb(52,"ion-avatar",1),p.Ib(53,"img",7),p.Lb(),p.Mb(54,"ion-label"),p.Mb(55,"h2"),p.lc(56,"Username "),p.Mb(57,"span",8),p.lc(58,"\xb7 date"),p.Lb(),p.Lb(),p.Mb(59,"p"),p.lc(60,"This is the message..."),p.Lb(),p.Lb(),p.Lb(),p.Mb(61,"ion-item",6),p.Mb(62,"ion-avatar",1),p.Ib(63,"img",7),p.Lb(),p.Mb(64,"ion-label"),p.Mb(65,"h2"),p.lc(66,"Username "),p.Mb(67,"span",8),p.lc(68,"\xb7 date"),p.Lb(),p.Lb(),p.Mb(69,"p"),p.lc(70,"This is the message..."),p.Lb(),p.Lb(),p.Lb(),p.Lb(),p.Lb(),p.Mb(71,"ion-bottom-drawer",9),p.Ub("stateChange",function(e){return t.drawerState=e}),p.Mb(72,"div",10),p.Mb(73,"ion-list"),p.Mb(74,"ion-item",6),p.Mb(75,"ion-button",11),p.Ub("click",function(){return t.delertAlert()}),p.lc(76," Delete "),p.Lb(),p.Lb(),p.Mb(77,"ion-item",6),p.Mb(78,"ion-button",11),p.Ub("click",function(){return t.reportConvo()}),p.lc(79," Report "),p.Lb(),p.Lb(),p.Mb(80,"ion-item",6),p.Mb(81,"ion-button",12),p.Ub("click",function(){return t.menu()}),p.lc(82," Cancel "),p.Lb(),p.Lb(),p.Lb(),p.Lb(),p.Lb()),2&e&&(p.xb(71),p.Zb("state",t.drawerState)("minimumHeight",t.minimumHeight)("dockedHeight",t.dockedHeight)("shouldBounce",t.shouldBounce)("distanceTop",t.distanceTop))},directives:[l.u,l.P,l.h,l.e,l.f,l.g,l.o,l.C,l.x,l.d,l.B,u.c],styles:["ion-avatar[_ngcontent-%COMP%]{height:1.3em;width:1.3em}.new-message[_ngcontent-%COMP%]{color:#faa71b}ion-label[_ngcontent-%COMP%]{font-weight:800;display:block}.date-sent[_ngcontent-%COMP%]{font-size:.8em;opacity:.5}.ellipsis[_ngcontent-%COMP%]{height:2.1em}"]}),a)}],L=((r=function t(){e(this,t)}).\u0275mod=p.Fb({type:r}),r.\u0275inj=p.Eb({factory:function(e){return new(e||r)},imports:[[h.j.forChild(M)],h.j]}),r),g=i("6kEE"),f=((s=function t(){e(this,t)}).\u0275mod=p.Fb({type:s}),s.\u0275inj=p.Eb({factory:function(e){return new(e||s)},imports:[[b.b,c.d,l.Q,L,g.ReportConvoPageModule,u.b]]}),s)}}])}();