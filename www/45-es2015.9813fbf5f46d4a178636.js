(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{txkh:function(t,o,n){"use strict";n.r(o),n.d(o,"FollowingPageModule",function(){return k});var e=n("ofXK"),i=n("3Pt+"),s=n("zAgk"),r=n("TEn/"),c=n("tyNb"),a=n("mrSG"),b=n("ENZJ"),l=n("Aso2"),p=n("sWYD"),g=n("7xvl"),d=n("DtjX"),m=n("fXoL"),u=n("u6v2"),h=n("84P7");function f(t,o){1&t&&(m.Mb(0,"ion-col",16),m.Mb(1,"div"),m.Mb(2,"p",17),m.nc(3,"You currently do not have any posts. Please click the Add Post button to create a Post."),m.Lb(),m.Lb(),m.Lb())}function x(t,o){if(1&t&&(m.Mb(0,"p",43),m.nc(1),m.Lb()),2&t){const t=o.$implicit;m.xb(1),m.pc(" #",t," ")}}function M(t,o){1&t&&(m.Mb(0,"p",44),m.nc(1," No #hashtags for this post "),m.Lb())}function P(t,o){1&t&&(m.Mb(0,"span",45),m.nc(1,"..."),m.Lb())}function w(t,o){if(1&t){const t=m.Nb();m.Mb(0,"button",46),m.Ub("click",function(){return m.gc(t),m.Wb(2).alterDescriptionText()}),m.nc(1),m.Lb()}if(2&t){const t=m.Wb(2);m.xb(1),m.pc(" ",t.showShortDesciption?"SHOW ALL":"SHOW LESS"," ")}}function O(t,o){1&t&&(m.Mb(0,"ion-button",47),m.nc(1,"Post Comment "),m.Lb())}const C=function(t){return{"show-less":t}};function _(t,o){if(1&t){const t=m.Nb();m.Mb(0,"div",18),m.Mb(1,"ion-row",19),m.Mb(2,"ion-col",20),m.Ib(3,"img",21),m.Lb(),m.Mb(4,"ion-col",22),m.Mb(5,"p",23),m.nc(6),m.Lb(),m.Mb(7,"p",24),m.nc(8),m.Lb(),m.Lb(),m.Lb(),m.Mb(9,"ion-row",19),m.Mb(10,"ion-col",25),m.Mb(11,"p",26),m.nc(12),m.Lb(),m.Mb(13,"div",27),m.mc(14,x,2,1,"p",28),m.Lb(),m.mc(15,M,2,0,"p",29),m.Mb(16,"p",30),m.nc(17),m.Lb(),m.mc(18,P,2,0,"span",31),m.mc(19,w,2,1,"button",32),m.Lb(),m.Lb(),m.Mb(20,"ion-row",19),m.Mb(21,"ion-col",33),m.Mb(22,"ion-item",34),m.Mb(23,"form",35),m.Ub("ngSubmit",function(){m.gc(t);const n=o.$implicit,e=m.Wb();return e.comment(n._id,e.userFullName,e.userEmail,e.userProfilePicture,e.commentForm.value)}),m.Ib(24,"ion-textarea",36,37),m.mc(26,O,2,0,"ion-button",38),m.Lb(),m.Lb(),m.Lb(),m.Lb(),m.Mb(27,"ion-row",19),m.Mb(28,"ion-col",39),m.Ib(29,"app-up-down-vote-buttons",40),m.Lb(),m.Mb(30,"ion-col",41),m.Ib(31,"app-follow-comment-buttons",42),m.Lb(),m.Lb(),m.Lb()}if(2&t){const t=o.$implicit,n=m.fc(25),e=m.Wb();m.xb(3),m.ac("src",t.creatorProfilePicture,m.ic),m.xb(3),m.oc(t.creatorName),m.xb(2),m.oc(t.date),m.xb(4),m.oc(t.title),m.xb(2),m.Zb("ngForOf",t.hashtags),m.xb(1),m.Zb("ngIf",0===t.hashtags.length),m.xb(1),m.Zb("ngClass",m.dc(16,C,e.showShortDesciption)),m.xb(1),m.oc(t.post),m.xb(1),m.Zb("ngIf",t.post.length>400&&e.showShortDesciption),m.xb(1),m.Zb("ngIf",t.post.length>400),m.xb(4),m.Zb("formGroup",e.commentForm),m.xb(3),m.Zb("ngIf",n.value.length>=2),m.xb(3),m.Zb("postID",t._id)("postEmail",t.creatorEmail),m.xb(2),m.Zb("postID",t._id)("commentLength",t.comments.length)}}const v=[{path:"",component:(()=>{class t{constructor(t,o,n,e,i,s,r,c){this.router=t,this.posts=o,this.profile=n,this.toast=e,this.formBuilder=i,this.eventEmitterService=s,this.modal=r,this.location=c,this.showShortDesciption=!0,this.allFollowedPosts=[]}ngOnInit(){this.location.onPopState(()=>{this.eventEmitterService.onBackAction()}),this.profile.getUserDetails().subscribe(t=>{console.log("User ID from Following Page OnInit"),this.userID=t._id,this.userFullName=t.fullName,this.userEmail=t.email,this.userProfilePicture=t.profilePicture,this.posts.getFollowedPost(this.userID).subscribe(t=>{this.allFollowedPosts=Object.values(t).reverse(),console.log(t);for(const o of this.allFollowedPosts)o.date=Object(p.a)(new Date(o.date),"MMMM do, yyyy");return this.allFollowedPosts})}),console.log("Got Followed Posts"),this.commentForm=this.formBuilder.group({comment:[""]})}alterDescriptionText(){this.showShortDesciption=!this.showShortDesciption}postPage(t){this.router.navigate(["/home/posts/post-page",t._id])}addPost(){this.router.navigate(["/home/posts/add-post"])}back(){this.eventEmitterService.onBackAction(),this.router.navigate(["/home/posts"])}comment(t,o,n,e,i){return Object(a.a)(this,void 0,void 0,function*(){this.commentForm.reset(),yield Date.now(),console.log("Posting comment"),console.log("Post ID: "+t),yield this.posts.comment(t,this.userFullName,this.userEmail,this.userProfilePicture,i).subscribe(()=>{this.posts.getPostInfo(t).subscribe(o=>{this.posts.getPostInfo(t).subscribe(t=>{for(let o of t.comments)console.log(o),o.isUser=!1,o.canDeleteComment=!1,o.canReport=!0,o.userEmail===this.userEmail&&(o.isUser=!0,o.canDeleteComment=!0,o.canReport=!1),o.repliesLength=o.replies.length,o.date=Object(g.a)(new Date(o.date),{includeSeconds:!0,addSuffix:!1});this.posts.commentsSubject$.next(t.comments.reverse())})})}),yield this.posts.getPostInfo(t).subscribe(t=>{for(let o of t.comments)o.date=Object(g.a)(new Date(o.date),{includeSeconds:!0,addSuffix:!0});this.posts.commentsSubject$.next(t.comments.reverse())}),this.toast.create({message:"Your comment has been added.",duration:1500}).then(t=>t.present()),yield this.router.navigate(["/home/posts/post-page",t])})}doRefresh(t){return Object(a.a)(this,void 0,void 0,function*(){this.profile.getUserDetails().subscribe(t=>{console.log("User ID from Following Page OnInit"),this.userID=t._id,this.userFullName=t.fullName,this.userEmail=t.email,this.userProfilePicture=t.profilePicture,this.posts.getFollowedPost(this.userID).subscribe(t=>{this.allFollowedPosts=Object.values(t).reverse(),console.log(t);for(const o of this.allFollowedPosts)o.date=Object(p.a)(new Date(o.date),"MMMM do, yyyy");return this.allFollowedPosts})}),yield setTimeout(()=>{const o=this.toast.create({message:"Inspiration Page has been refreshed",duration:3e3});t.target.complete(),o.then(t=>t.present())},2e3)})}}return t.\u0275fac=function(o){return new(o||t)(m.Hb(c.f),m.Hb(b.a),m.Hb(l.a),m.Hb(r.eb),m.Hb(i.a),m.Hb(d.a),m.Hb(r.W),m.Hb(e.l))},t.\u0275cmp=m.Bb({type:t,selectors:[["app-following"]],decls:28,vars:2,consts:[[1,"ion-hide-lg-up"],["slot","start"],["vertical","bottom","horizontal","end","slot","fixed",1,"ion-hide-lg-up"],[3,"click"],["name","add","size","large"],["slot","fixed",3,"ionRefresh"],[1,"ion-hide-md-down"],[1,"ion-hide-lg-down","ion-justify-content-center",2,"padding-top","80px","margin-bottom","40px"],["size-xs","11","size-sm","10","size-md","10","size-lg","8","size-xl","6"],[1,"desktop-toolbar"],["slot","end"],[1,"add-button",3,"click"],[1,"blue-button",3,"click"],[1,"ion-justify-content-center",2,"margin-top","1%"],["class","no-posts ion-align-items-center","size-xs","11","size-sm","9","size-md","8","size-lg","7",4,"ngIf"],["class","post","style","margin-top: 1%;",4,"ngFor","ngForOf"],["size-xs","11","size-sm","9","size-md","8","size-lg","7",1,"no-posts","ion-align-items-center"],[2,"font-size","1.2em"],[1,"post",2,"margin-top","1%"],[1,"ion-justify-content-center"],["size","1"],[2,"background","#999","border-radius","100px","height","35xpx","width","35px",3,"src"],["size","10"],[1,"post-name"],[1,"post-date"],["size","11"],[1,"post-title"],[1,"hashtags"],["class","hashtag",4,"ngFor","ngForOf"],["class","no-tags",4,"ngIf"],[1,"post-content",3,"ngClass"],["class","ellipsis",4,"ngIf"],["class","show-more-or-less-button","type","button",3,"click",4,"ngIf"],["size","12"],["lines","none",2,"height","auto"],[3,"formGroup","ngSubmit"],["autogrow","true","autocapitalize","true","rows","5","spellcheck","true","wrap","soft","type","text","placeholder","Add a Comment","formControlName","comment",1,"comment-input-mobile"],["postComment",""],["style","float: right;","class","comment-post-button","name","send","type","submit",4,"ngIf"],["size","8"],[3,"postID","postEmail"],["size","3"],[3,"postID","commentLength"],[1,"hashtag"],[1,"no-tags"],[1,"ellipsis"],["type","button",1,"show-more-or-less-button",3,"click"],["name","send","type","submit",1,"comment-post-button",2,"float","right"]],template:function(t,o){1&t&&(m.Mb(0,"ion-header",0),m.Mb(1,"ion-toolbar"),m.Mb(2,"ion-buttons",1),m.Ib(3,"ion-back-button"),m.Lb(),m.Mb(4,"ion-title"),m.nc(5,"Following"),m.Lb(),m.Lb(),m.Lb(),m.Mb(6,"ion-content"),m.Mb(7,"ion-fab",2),m.Mb(8,"ion-fab-button",3),m.Ub("click",function(){return o.addPost()}),m.Ib(9,"ion-icon",4),m.Lb(),m.Lb(),m.Mb(10,"ion-refresher",5),m.Ub("ionRefresh",function(t){return o.doRefresh(t)}),m.Ib(11,"ion-refresher-content"),m.Lb(),m.Mb(12,"ion-grid",6),m.Mb(13,"ion-row",7),m.Mb(14,"ion-col",8),m.Mb(15,"ion-toolbar",9),m.Mb(16,"ion-buttons",1),m.Mb(17,"h1"),m.nc(18,"Following"),m.Lb(),m.Lb(),m.Mb(19,"ion-buttons",10),m.Mb(20,"ion-button",11),m.Ub("click",function(){return o.addPost()}),m.nc(21," Add Post "),m.Lb(),m.Mb(22,"ion-button",12),m.Ub("click",function(){return o.back()}),m.nc(23," Back "),m.Lb(),m.Lb(),m.Lb(),m.Lb(),m.Lb(),m.Mb(24,"ion-row",13),m.mc(25,f,4,0,"ion-col",14),m.Mb(26,"ion-col",8),m.mc(27,_,32,18,"div",15),m.Lb(),m.Lb(),m.Lb(),m.Lb()),2&t&&(m.xb(25),m.Zb("ngIf",0===o.allFollowedPosts.length),m.xb(2),m.Zb("ngForOf",o.allFollowedPosts))},directives:[r.u,r.S,r.h,r.e,r.f,r.R,r.o,r.q,r.r,r.v,r.F,r.G,r.t,r.I,r.n,r.g,e.j,e.i,e.h,r.x,i.o,i.j,i.c,r.Q,r.db,i.i,i.b,u.a,h.a],styles:["ion-title[_ngcontent-%COMP%]{margin:0}.desktop-toolbar[_ngcontent-%COMP%]{--background:none;padding-bottom:16px;border-bottom:1px solid rgba(51,51,51,.14901960784313725)}.desktop-toolbar[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{color:#0055a5}.post[_ngcontent-%COMP%]{padding:24px 0;margin-bottom:80px;border-radius:11px;box-shadow:1px 10px 26px rgba(0,0,0,.05);font-size:1.1em;line-height:35px;background:#fff}.post-content[_ngcontent-%COMP%]{font-size:1em}.post-title[_ngcontent-%COMP%]{font-weight:800;color:#0055a5;font-size:.9em;position:relative;top:-20px;line-height:25px;margin:10px 0 0}.post-buttons[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]{--background:none}.post-name[_ngcontent-%COMP%]{font-size:.9em;font-weight:700;color:#666}.post-date[_ngcontent-%COMP%], .post-name[_ngcontent-%COMP%]{margin:0;line-height:18px}.post-date[_ngcontent-%COMP%]{opacity:.4;font-size:.65em}.show-less[_ngcontent-%COMP%]{height:auto;overflow:hidden}.show-more-or-less-button[_ngcontent-%COMP%]{float:right;position:relative;right:0;margin-top:35px;padding:.5em;background:#0055a5;color:#fff;border-radius:5px;font-size:.6em;font-weight:600}.ellipsis[_ngcontent-%COMP%]{float:right;position:relative;right:20px;top:-18px}@media screen and (max-width:567px){.post[_ngcontent-%COMP%]{padding:30px 0}}.no-posts[_ngcontent-%COMP%]{height:70vh}form[_ngcontent-%COMP%]{width:100%}.hashtags[_ngcontent-%COMP%]{position:relative;top:-32px}.hashtag[_ngcontent-%COMP%]{font-size:.55em;color:#ea8400}.hashtag[_ngcontent-%COMP%], .no-tags[_ngcontent-%COMP%]{font-weight:600;display:inline-block;margin-right:5px}.no-tags[_ngcontent-%COMP%]{font-size:.7em;color:#333;opacity:.5;position:relative;top:-32px}.comment[_ngcontent-%COMP%]{border:1px solid #005191;--padding-start:20px}.comment-post-button[_ngcontent-%COMP%]{--background:linear-gradient(#0672c4,#005191);height:30px;margin-top:20px;opacity:0;width:80px;transform:.5s;transition-timing-function:cubic-bezier(.175,.885,.32,1.275);-webkit-animation:slide-up .5s cubic-bezier(.175,.885,.32,1.275) forwards;animation:slide-up .5s cubic-bezier(.175,.885,.32,1.275) forwards}.comment-input[_ngcontent-%COMP%]{margin:30px 0 60px}.comment-input[_ngcontent-%COMP%]:hover{margin:50px 0 80px}.comment-input-mobile[_ngcontent-%COMP%]{background:rgba(247,248,248,.5);margin:30px 0 60px;border:1px solid rgba(0,81,145,.4);border-radius:5px}ion-item[_ngcontent-%COMP%]{--background:none}.toolbar[_ngcontent-%COMP%] > ion-buttons[_ngcontent-%COMP%] > ion-button[_ngcontent-%COMP%]{height:45px;border-radius:5px;padding:10px;--background:rgba(209,216,224,0.13);--color:#fff;width:140px;font-size:.6em}.toolbar[_ngcontent-%COMP%] > ion-buttons[_ngcontent-%COMP%] > ion-button[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{position:relative;left:-10px}.post-toolbar[_ngcontent-%COMP%]   ion-buttons[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{width:140px;font-size:1em;--color:#005191}.blue-button[_ngcontent-%COMP%]{--background:#0055a5;--background-hover:linear-gradient(#0055a5,#0055a2)}.add-button[_ngcontent-%COMP%], .blue-button[_ngcontent-%COMP%]{--color:#fff;height:24px;width:100px;font-size:.5em;font-weight:600;display:block}.add-button[_ngcontent-%COMP%]{--background:linear-gradient(#5ad8b2,#40c59d);--background-hover:linear-gradient(#bffce9,#7efcd4)}.comment[_ngcontent-%COMP%]{border:1px solid #0055a5;border-radius:5px;margin-top:20px;padding:10px}.comment-button[_ngcontent-%COMP%]{font-size:1em;font-weight:600;position:relative;right:-20px;top:5px}.comment-post-button[_ngcontent-%COMP%]{--border-color:#40c59d;--border-width:2px;--border-style:solid;--background:#40c59d;--color:#fff;height:40px;margin:29px auto;font-weight:600;font-size:.6em;border-radius:5px;width:100px}.comment-input[_ngcontent-%COMP%]{margin:10px 0 0;box-shadow:none;border:1px solid rgba(0,81,145,.4);border-radius:5px}.comment-input[_ngcontent-%COMP%], .comment-input[_ngcontent-%COMP%]:hover{background:rgba(247,248,248,.5);height:auto;padding-left:10px;transition:.5s;transition-timing-function:cubic-bezier(.175,.885,.32,1.275)}.comment-input[_ngcontent-%COMP%]:hover{margin:12px 0 4px;box-shadow:1px 1px 3px #999;border:1px solid #005191;border-radius:5px}.comment-input-mobile[_ngcontent-%COMP%]{background:rgba(213,232,236,.3);height:auto;margin:20px 0 10px;box-shadow:none;padding-left:10px;border:3px solid #0055a5;border-radius:2px}.comment-input-mobile[_ngcontent-%COMP%], .comment-input-mobile[_ngcontent-%COMP%]:focus{transition:1s;transition-timing-function:cubic-bezier(.175,.885,.32,1.275)}.comment-input-mobile[_ngcontent-%COMP%]:focus{background:rgba(247,248,248,.5);height:100px;margin:30px 0 150px;box-shadow:1px 1px 3px #999;border:1px solid #005191;border-radius:5px}.comment-button[_ngcontent-%COMP%]{width:130px;--background:#0055a5;--background-hover:#0055a5;--color:#fff;font-size:.6em;font-size:800;border-radius:5px}ion-fab-button[_ngcontent-%COMP%]{--background:#1baf88;--color-focused:#fff;--color-hover:#fff;--color-activated:#fff;position:relative;bottom:50px;right:10px}@-webkit-keyframes slide-up{0%{transform:translateY(10px);opacity:0}to{transform:translateY(0);opacity:1}}@keyframes slide-up{0%{transform:translateY(10px);opacity:0}to{transform:translateY(0);opacity:1}}"]}),t})()}];let L=(()=>{class t{}return t.\u0275mod=m.Fb({type:t}),t.\u0275inj=m.Eb({factory:function(o){return new(o||t)},imports:[[c.j.forChild(v)],c.j]}),t})(),k=(()=>{class t{}return t.\u0275mod=m.Fb({type:t}),t.\u0275inj=m.Eb({factory:function(o){return new(o||t)},imports:[[e.b,i.d,s.a,i.l,r.T,L]]}),t})()}}]);