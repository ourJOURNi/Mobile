(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{"8QiE":function(l,n,t){"use strict";t.r(n);var u=t("8Y7J");class e{}var o=t("pMnS"),i=t("oBZk"),s=t("ZZ/e"),r=t("s7LF"),b=t("SVse"),a=t("kcry"),c=t("u6v2"),p=t("ENZJ"),m=t("Aso2"),d=t("dneo"),g=t("84P7"),h=t("iInd"),f=t("mrSG"),x=t("sWYD"),k=t("7xvl"),z=t("DtjX");class w{constructor(l,n,t,u,e,o,i){this.router=l,this.posts=n,this.profile=t,this.toast=u,this.formBuilder=e,this.eventEmitterService=o,this.location=i,this.allFollowedPosts=[]}ngOnInit(){this.location.onPopState(()=>{this.eventEmitterService.onBackAction()}),this.profile.getUserDetails().subscribe(l=>{console.log("User ID from Following Page OnInit"),this.userID=l._id,this.userFullName=l.fullName,this.userEmail=l.email,this.userProfilePicture=l.profilePicture,this.posts.getFollowedPost(this.userID).subscribe(l=>{this.allFollowedPosts=Object.values(l).reverse(),console.log(l);for(const n of this.allFollowedPosts)n.date=Object(x.a)(new Date(n.date),"MMMM do, yyyy");return this.allFollowedPosts})}),console.log("Got Followed Posts"),this.commentForm=this.formBuilder.group({comment:[""]})}postPage(l){this.router.navigate(["/home/posts/post-page",l._id])}addPost(){this.router.navigate(["/home/posts/add-post"])}back(){this.eventEmitterService.onBackAction(),this.router.navigate(["/home/posts"])}comment(l,n,t,u,e){return f.b(this,void 0,void 0,(function*(){this.commentForm.reset(),yield Date.now(),console.log("Posting comment"),console.log("Post ID: "+l),yield this.posts.comment(l,this.userFullName,this.userEmail,this.userProfilePicture,e).subscribe(()=>{this.posts.getPostInfo(l).subscribe(n=>{this.posts.getPostInfo(l).subscribe(l=>{for(let n of l.comments)console.log(n),n.isUser=!1,n.canDeleteComment=!1,n.canReport=!0,n.userEmail===this.userEmail&&(n.isUser=!0,n.canDeleteComment=!0,n.canReport=!1),n.repliesLength=n.replies.length,n.date=Object(k.a)(new Date(n.date),{includeSeconds:!0,addSuffix:!1});this.posts.commentsSubject$.next(l.comments.reverse())})})}),yield this.posts.getPostInfo(l).subscribe(l=>{for(let n of l.comments)n.date=Object(k.a)(new Date(n.date),{includeSeconds:!0,addSuffix:!0});this.posts.commentsSubject$.next(l.comments.reverse())}),this.toast.create({message:"Your comment has been added.",duration:1500}).then(l=>l.present()),yield this.router.navigate(["/home/posts/post-page",l])}))}doRefresh(l){return f.b(this,void 0,void 0,(function*(){this.profile.getUserDetails().subscribe(l=>{console.log("User ID from Following Page OnInit"),this.userID=l._id,this.userFullName=l.fullName,this.userEmail=l.email,this.userProfilePicture=l.profilePicture,this.posts.getFollowedPost(this.userID).subscribe(l=>{this.allFollowedPosts=Object.values(l).reverse(),console.log(l);for(const n of this.allFollowedPosts)n.date=Object(x.a)(new Date(n.date),"MMMM do, yyyy");return this.allFollowedPosts})}),yield setTimeout(()=>{const n=this.toast.create({message:"Inspiration Page has been refreshed",duration:3e3});l.target.complete(),n.then(l=>l.present())},2e3)}))}}var P=u.pb({encapsulation:0,styles:[["ion-grid[_ngcontent-%COMP%]{background:#edf3f8}ion-title[_ngcontent-%COMP%]{margin:0}.post[_ngcontent-%COMP%]{padding:30px 0;margin-bottom:80px;border-radius:5px;box-shadow:1px 1px 10px rgba(0,0,0,.1);background:#fff;font-size:1.2em;line-height:35px}.post[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%]{background:#999;opacity:.4}.no-posts[_ngcontent-%COMP%]{height:70vh}form[_ngcontent-%COMP%]{width:100%}.comment[_ngcontent-%COMP%]{border:1px solid #005191;border-radius:5px;margin-top:20px;padding:10px;--padding-start:20px}.comment-post-button[_ngcontent-%COMP%]{--background:linear-gradient(#0672c4, #005191);opacity:0}.comment-input[_ngcontent-%COMP%]{box-shadow:none;transition:.5s}.comment-input[_ngcontent-%COMP%]:hover{box-shadow:1px 1px 3px #999;transition:.5s}.comment-input-mobile[_ngcontent-%COMP%]{background:rgba(247,248,248,.5);height:auto;margin:30px 0 60px;box-shadow:none;padding-left:10px;border:1px solid rgba(0,81,145,.4);border-radius:5px;-webkit-transition:1s cubic-bezier(.175,.885,.32,1.275);transition:1s;transition-timing-function:cubic-bezier(.175,.885,.32,1.275)}.comment-input-mobile[_ngcontent-%COMP%]:focus{background:rgba(247,248,248,.5);height:100px;margin:30px 0 150px;box-shadow:1px 1px 3px #999;border:1px solid #005191;border-radius:5px;-webkit-transition:1s cubic-bezier(.175,.885,.32,1.275);transition:1s;transition-timing-function:cubic-bezier(.175,.885,.32,1.275)}ion-item[_ngcontent-%COMP%]{--background:none}.toolbar[_ngcontent-%COMP%] > ion-buttons[_ngcontent-%COMP%] > ion-button[_ngcontent-%COMP%]{height:45px;border-radius:5px;padding:10px;--background:rgb(209,216,224,0.13);--color:white;width:140px;font-size:.6em}.toolbar[_ngcontent-%COMP%] > ion-buttons[_ngcontent-%COMP%] > ion-button[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{position:relative;left:-10px}.post-toolbar[_ngcontent-%COMP%]   ion-buttons[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{width:140px;font-size:1em;--color:#005191}.blue-button[_ngcontent-%COMP%]{-webkit-animation:none;animation:none;opacity:unset;width:100px;height:36px;margin-top:30px;margin-bottom:4px;position:unset;font-size:.7em}.add-button[_ngcontent-%COMP%]{--color:white;--background:linear-gradient(#5ad8b2, #40c59d);--background-hover:linear-gradient(#bffce9, #7efcd4);font-size:.7em;font-weight:800;display:block;width:100px;margin-top:30px}.comment-input[_ngcontent-%COMP%]{background:rgba(247,248,248,.5);height:auto;margin:10px 0 0;box-shadow:none;border:1px solid rgba(0,81,145,.4);border-radius:5px;padding-left:10px;-webkit-transition:.5s cubic-bezier(.175,.885,.32,1.275);transition:.5s;transition-timing-function:cubic-bezier(.175,.885,.32,1.275)}.comment-input[_ngcontent-%COMP%]:hover{background:rgba(247,248,248,.5);height:auto;margin:12px 0 0;box-shadow:1px 1px 3px #999;border:1px solid #005191;border-radius:5px;padding-left:10px;-webkit-transition:.5s cubic-bezier(.175,.885,.32,1.275);transition:.5s;transition-timing-function:cubic-bezier(.175,.885,.32,1.275)}.comment-post-button[_ngcontent-%COMP%]{--background:linear-gradient(#5ad8b2, #40c59d);height:40px;margin-top:40px;opacity:0;width:100%;-webkit-transform:.5s;transform:.5s;-webkit-transition-timing-function:cubic-bezier(.175,.885,.32,1.275);transition-timing-function:cubic-bezier(.175,.885,.32,1.275);-webkit-animation:.5s cubic-bezier(.175,.885,.32,1.275) forwards slide-up;animation:.5s cubic-bezier(.175,.885,.32,1.275) forwards slide-up}ion-fab-button[_ngcontent-%COMP%]{--background:#1baf88;--color-focused:white;--color-hover:white;--color-activated:white;position:relative;bottom:50px;right:10px}@-webkit-keyframes slide-up{0%{-webkit-transform:translateY(10px);transform:translateY(10px);opacity:0}100%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}}@keyframes slide-up{0%{-webkit-transform:translateY(10px);transform:translateY(10px);opacity:0}100%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}}"]],data:{}});function q(l){return u.Lb(0,[(l()(),u.rb(0,0,null,null,4,"ion-col",[["class","no-posts ion-align-items-center"],["size-lg","7"],["size-md","8"],["size-sm","9"],["size-xs","11"]],null,null,null,i.V,i.k)),u.qb(1,49152,null,0,s.t,[u.h,u.k,u.x],null,null),(l()(),u.rb(2,0,null,0,2,"div",[],null,null,null,null,null)),(l()(),u.rb(3,0,null,null,1,"p",[["style","font-size: 1.2em;"]],null,null,null,null,null)),(l()(),u.Jb(-1,null,["You are currently not following any posts. Please click the follow button on any Post to add it to this page."]))],null,null)}function v(l){return u.Lb(0,[(l()(),u.rb(0,0,null,null,2,"ion-button",[["class","comment-post-button"],["name","send"],["style","float: right;"],["type","submit"]],null,null,null,i.O,i.d)),u.qb(1,49152,null,0,s.k,[u.h,u.k,u.x],{type:[0,"type"]},null),(l()(),u.Jb(-1,0,["Post "]))],(function(l,n){l(n,1,0,"submit")}),null)}function y(l){return u.Lb(0,[(l()(),u.rb(0,0,null,null,58,"ion-row",[["class","post"]],null,null,null,i.kb,i.z)),u.qb(1,49152,null,0,s.jb,[u.h,u.k,u.x],null,null),(l()(),u.rb(2,0,null,0,14,"ion-col",[["size","11"]],null,null,null,i.V,i.k)),u.qb(3,49152,null,0,s.t,[u.h,u.k,u.x],{size:[0,"size"]},null),(l()(),u.rb(4,0,null,0,12,"ion-row",[["class","ion-align-items-center"]],null,null,null,i.kb,i.z)),u.qb(5,49152,null,0,s.jb,[u.h,u.k,u.x],null,null),(l()(),u.rb(6,0,null,0,2,"ion-col",[["offset-lg","0.25"],["size","1"]],null,null,null,i.V,i.k)),u.qb(7,49152,null,0,s.t,[u.h,u.k,u.x],{size:[0,"size"]},null),(l()(),u.rb(8,0,null,0,0,"img",[["style","background: #999; border-radius: 100px; height: 40px; width: 40px;"]],[[8,"src",4]],null,null,null,null)),(l()(),u.rb(9,0,null,0,3,"ion-col",[["size","4"]],null,null,null,i.V,i.k)),u.qb(10,49152,null,0,s.t,[u.h,u.k,u.x],{size:[0,"size"]},null),(l()(),u.rb(11,0,null,0,1,"h6",[["style","font-size: 1em; font-weight: 500;"]],null,null,null,null,null)),(l()(),u.Jb(12,null,["",""])),(l()(),u.rb(13,0,null,0,3,"ion-col",[["class","ion-float-right"],["push-lg","5"],["size","3"]],null,null,null,i.V,i.k)),u.qb(14,49152,null,0,s.t,[u.h,u.k,u.x],{size:[0,"size"]},null),(l()(),u.rb(15,0,null,0,1,"h6",[["style","opacity: 0.4; font-size: 0.8em;"]],null,null,null,null,null)),(l()(),u.Jb(16,null,["",""])),(l()(),u.rb(17,0,null,0,7,"ion-col",[["size","12"]],null,null,null,i.V,i.k)),u.qb(18,49152,null,0,s.t,[u.h,u.k,u.x],{size:[0,"size"]},null),(l()(),u.rb(19,0,null,0,5,"ion-row",[],null,null,null,i.kb,i.z)),u.qb(20,49152,null,0,s.jb,[u.h,u.k,u.x],null,null),(l()(),u.rb(21,0,null,0,3,"ion-col",[["push","0.25"],["size","11"]],null,null,null,i.V,i.k)),u.qb(22,49152,null,0,s.t,[u.h,u.k,u.x],{push:[0,"push"],size:[1,"size"]},null),(l()(),u.rb(23,0,null,0,1,"p",[["class","post-content"]],null,null,null,null,null)),(l()(),u.Jb(24,null,["",""])),(l()(),u.rb(25,0,null,0,21,"ion-col",[["size","12"]],null,null,null,i.V,i.k)),u.qb(26,49152,null,0,s.t,[u.h,u.k,u.x],{size:[0,"size"]},null),(l()(),u.rb(27,0,null,0,19,"ion-row",[["style","position: relative; right: 6px; top: -4px;"]],null,null,null,i.kb,i.z)),u.qb(28,49152,null,0,s.jb,[u.h,u.k,u.x],null,null),(l()(),u.rb(29,0,null,0,17,"ion-col",[["size","11.8"]],null,null,null,i.V,i.k)),u.qb(30,49152,null,0,s.t,[u.h,u.k,u.x],{size:[0,"size"]},null),(l()(),u.rb(31,0,null,0,15,"ion-item",[["lines","none"]],null,null,null,i.fb,i.u)),u.qb(32,49152,null,0,s.H,[u.h,u.k,u.x],{lines:[0,"lines"]},null),(l()(),u.rb(33,0,null,0,13,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],(function(l,n,t){var e=!0,o=l.component;return"submit"===n&&(e=!1!==u.Db(l,35).onSubmit(t)&&e),"reset"===n&&(e=!1!==u.Db(l,35).onReset()&&e),"ngSubmit"===n&&(e=!1!==o.comment(l.context.$implicit._id,o.userFullName,o.userEmail,o.userProfilePicture,o.commentForm.value)&&e),e}),null,null)),u.qb(34,16384,null,0,r.t,[],null,null),u.qb(35,540672,null,0,r.d,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),u.Gb(2048,null,r.a,null,[r.d]),u.qb(37,16384,null,0,r.l,[[4,r.a]],null,null),(l()(),u.rb(38,0,null,null,6,"ion-textarea",[["autocapitalize","true"],["autogrow","true"],["class","comment-input"],["formControlName","comment"],["placeholder","Add a Comment"],["rows","5"],["spellcheck","true"],["type","text"],["wrap","soft"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,t){var e=!0;return"ionBlur"===n&&(e=!1!==u.Db(l,39)._handleBlurEvent(t.target)&&e),"ionChange"===n&&(e=!1!==u.Db(l,39)._handleInputEvent(t.target)&&e),e}),i.tb,i.I)),u.qb(39,16384,null,0,s.Ob,[u.k],null,null),u.Gb(1024,null,r.i,(function(l){return[l]}),[s.Ob]),u.qb(41,671744,null,0,r.c,[[3,r.a],[8,null],[8,null],[6,r.i],[2,r.s]],{name:[0,"name"]},null),u.Gb(2048,null,r.j,null,[r.c]),u.qb(43,16384,null,0,r.k,[[4,r.j]],null,null),u.qb(44,49152,null,0,s.yb,[u.h,u.k,u.x],{autocapitalize:[0,"autocapitalize"],placeholder:[1,"placeholder"],rows:[2,"rows"],spellcheck:[3,"spellcheck"],wrap:[4,"wrap"]},null),(l()(),u.gb(16777216,null,null,1,null,v)),u.qb(46,16384,null,0,b.j,[u.M,u.J],{ngIf:[0,"ngIf"]},null),(l()(),u.rb(47,0,null,0,11,"ion-col",[["size","12"]],null,null,null,i.V,i.k)),u.qb(48,49152,null,0,s.t,[u.h,u.k,u.x],{size:[0,"size"]},null),(l()(),u.rb(49,0,null,0,9,"ion-row",[],null,null,null,i.kb,i.z)),u.qb(50,49152,null,0,s.jb,[u.h,u.k,u.x],null,null),(l()(),u.rb(51,0,null,0,3,"ion-col",[["size","4.7"]],null,null,null,i.V,i.k)),u.qb(52,49152,null,0,s.t,[u.h,u.k,u.x],{size:[0,"size"]},null),(l()(),u.rb(53,0,null,0,1,"app-up-down-vote-buttons",[],null,null,null,a.b,a.a)),u.qb(54,114688,null,0,c.a,[p.a,m.a,s.Pb],{postID:[0,"postID"]},null),(l()(),u.rb(55,0,null,0,3,"ion-col",[["push","0.75"],["size","6"]],null,null,null,i.V,i.k)),u.qb(56,49152,null,0,s.t,[u.h,u.k,u.x],{push:[0,"push"],size:[1,"size"]},null),(l()(),u.rb(57,0,null,0,1,"app-follow-comment-buttons",[],null,null,null,d.b,d.a)),u.qb(58,114688,null,0,g.a,[h.m,p.a,m.a,s.Pb],{postID:[0,"postID"],isUser:[1,"isUser"]},null)],(function(l,n){var t=n.component;l(n,3,0,"11"),l(n,7,0,"1"),l(n,10,0,"4"),l(n,14,0,"3"),l(n,18,0,"12"),l(n,22,0,"0.25","11"),l(n,26,0,"12"),l(n,30,0,"11.8"),l(n,32,0,"none"),l(n,35,0,t.commentForm),l(n,41,0,"comment"),l(n,44,0,"true","Add a Comment","5","true","soft"),l(n,46,0,!t.commentForm.get("comment").pristine&&t.commentForm.value.comment.length>=3),l(n,48,0,"12"),l(n,52,0,"4.7"),l(n,54,0,n.context.$implicit._id),l(n,56,0,"0.75","6"),l(n,58,0,n.context.$implicit._id,n.context.$implicit.isUser)}),(function(l,n){l(n,8,0,u.vb(1,"",n.context.$implicit.creatorProfilePicture,"")),l(n,12,0,n.context.$implicit.creatorName),l(n,16,0,n.context.$implicit.date),l(n,24,0,n.context.$implicit.post),l(n,33,0,u.Db(n,37).ngClassUntouched,u.Db(n,37).ngClassTouched,u.Db(n,37).ngClassPristine,u.Db(n,37).ngClassDirty,u.Db(n,37).ngClassValid,u.Db(n,37).ngClassInvalid,u.Db(n,37).ngClassPending),l(n,38,0,u.Db(n,43).ngClassUntouched,u.Db(n,43).ngClassTouched,u.Db(n,43).ngClassPristine,u.Db(n,43).ngClassDirty,u.Db(n,43).ngClassValid,u.Db(n,43).ngClassInvalid,u.Db(n,43).ngClassPending)}))}function C(l){return u.Lb(0,[(l()(),u.rb(0,0,null,null,4,"ion-col",[["class","no-posts ion-align-items-center"],["size-lg","7"],["size-md","8"],["size-sm","9"],["size-xs","11"]],null,null,null,i.V,i.k)),u.qb(1,49152,null,0,s.t,[u.h,u.k,u.x],null,null),(l()(),u.rb(2,0,null,0,2,"div",[],null,null,null,null,null)),(l()(),u.rb(3,0,null,null,1,"p",[["style","font-size: 1.2em;"]],null,null,null,null,null)),(l()(),u.Jb(-1,null,["You are currently not following any posts. Please click the follow button on any Post to add it to this page."]))],null,null)}function D(l){return u.Lb(0,[(l()(),u.rb(0,0,null,null,2,"ion-button",[["class","comment-post-button"],["name","send"],["style","float: right;"],["type","submit"]],null,null,null,i.O,i.d)),u.qb(1,49152,null,0,s.k,[u.h,u.k,u.x],{type:[0,"type"]},null),(l()(),u.Jb(-1,0,["Post "]))],(function(l,n){l(n,1,0,"submit")}),null)}function O(l){return u.Lb(0,[(l()(),u.rb(0,0,null,null,58,"ion-row",[["class","post"],["style","margin-top: 1%;"]],null,null,null,i.kb,i.z)),u.qb(1,49152,null,0,s.jb,[u.h,u.k,u.x],null,null),(l()(),u.rb(2,0,null,0,14,"ion-col",[["offset","0.5"],["size","11"]],null,null,null,i.V,i.k)),u.qb(3,49152,null,0,s.t,[u.h,u.k,u.x],{offset:[0,"offset"],size:[1,"size"]},null),(l()(),u.rb(4,0,null,0,12,"ion-row",[["style","position: relative; right: 5px; top: -4px;"]],null,null,null,i.kb,i.z)),u.qb(5,49152,null,0,s.jb,[u.h,u.k,u.x],null,null),(l()(),u.rb(6,0,null,0,2,"ion-col",[["size","1.3"]],null,null,null,i.V,i.k)),u.qb(7,49152,null,0,s.t,[u.h,u.k,u.x],{size:[0,"size"]},null),(l()(),u.rb(8,0,null,0,0,"img",[["style","background: #999; border-radius: 100px; height: 40px; width: 40px;"]],[[8,"src",4]],null,null,null,null)),(l()(),u.rb(9,0,null,0,3,"ion-col",[["size","5"]],null,null,null,i.V,i.k)),u.qb(10,49152,null,0,s.t,[u.h,u.k,u.x],{size:[0,"size"]},null),(l()(),u.rb(11,0,null,0,1,"h6",[["style","font-size: 0.9em; font-weight: 300; margin: 10px 0 10px 0px; color: #666;"]],null,null,null,null,null)),(l()(),u.Jb(12,null,["",""])),(l()(),u.rb(13,0,null,0,3,"ion-col",[["class","ion-text-right"],["push","1.5"],["size","3"]],null,null,null,i.V,i.k)),u.qb(14,49152,null,0,s.t,[u.h,u.k,u.x],{push:[0,"push"],size:[1,"size"]},null),(l()(),u.rb(15,0,null,0,1,"h6",[["style","opacity: 0.4; font-size: 0.5em; margin: 10px 0; position: relative; top: 10px;"]],null,null,null,null,null)),(l()(),u.Jb(16,null,["",""])),(l()(),u.rb(17,0,null,0,7,"ion-col",[["size","12"]],null,null,null,i.V,i.k)),u.qb(18,49152,null,0,s.t,[u.h,u.k,u.x],{size:[0,"size"]},null),(l()(),u.rb(19,0,null,0,5,"ion-row",[["class","ion-justify-content-center"]],null,null,null,i.kb,i.z)),u.qb(20,49152,null,0,s.jb,[u.h,u.k,u.x],null,null),(l()(),u.rb(21,0,null,0,3,"ion-col",[["size","11"],["style","height: auto; background: white"]],null,null,null,i.V,i.k)),u.qb(22,49152,null,0,s.t,[u.h,u.k,u.x],{size:[0,"size"]},null),(l()(),u.rb(23,0,null,0,1,"p",[["class","post-content"],["style","font-size: 1em; width: 100%; position: unset; line-height: unset;"]],null,null,null,null,null)),(l()(),u.Jb(24,null,["",""])),(l()(),u.rb(25,0,null,0,21,"ion-col",[["size","12"]],null,null,null,i.V,i.k)),u.qb(26,49152,null,0,s.t,[u.h,u.k,u.x],{size:[0,"size"]},null),(l()(),u.rb(27,0,null,0,19,"ion-row",[["class","ion-justify-content-center"],["style","position: relative; right: 6px; top: -4px;"]],null,null,null,i.kb,i.z)),u.qb(28,49152,null,0,s.jb,[u.h,u.k,u.x],null,null),(l()(),u.rb(29,0,null,0,17,"ion-col",[["size","12"]],null,null,null,i.V,i.k)),u.qb(30,49152,null,0,s.t,[u.h,u.k,u.x],{size:[0,"size"]},null),(l()(),u.rb(31,0,null,0,15,"ion-item",[["lines","none"],["style","height: auto;"]],null,null,null,i.fb,i.u)),u.qb(32,49152,null,0,s.H,[u.h,u.k,u.x],{lines:[0,"lines"]},null),(l()(),u.rb(33,0,null,0,13,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],(function(l,n,t){var e=!0,o=l.component;return"submit"===n&&(e=!1!==u.Db(l,35).onSubmit(t)&&e),"reset"===n&&(e=!1!==u.Db(l,35).onReset()&&e),"ngSubmit"===n&&(e=!1!==o.comment(l.context.$implicit._id,o.userFullName,o.userEmail,o.userProfilePicture,o.commentForm.value)&&e),e}),null,null)),u.qb(34,16384,null,0,r.t,[],null,null),u.qb(35,540672,null,0,r.d,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),u.Gb(2048,null,r.a,null,[r.d]),u.qb(37,16384,null,0,r.l,[[4,r.a]],null,null),(l()(),u.rb(38,0,null,null,6,"ion-textarea",[["autocapitalize","true"],["autogrow","true"],["class","comment-input-mobile"],["formControlName","comment"],["placeholder","Add a Comment"],["rows","5"],["spellcheck","true"],["type","text"],["wrap","soft"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,t){var e=!0;return"ionBlur"===n&&(e=!1!==u.Db(l,39)._handleBlurEvent(t.target)&&e),"ionChange"===n&&(e=!1!==u.Db(l,39)._handleInputEvent(t.target)&&e),e}),i.tb,i.I)),u.qb(39,16384,null,0,s.Ob,[u.k],null,null),u.Gb(1024,null,r.i,(function(l){return[l]}),[s.Ob]),u.qb(41,671744,null,0,r.c,[[3,r.a],[8,null],[8,null],[6,r.i],[2,r.s]],{name:[0,"name"]},null),u.Gb(2048,null,r.j,null,[r.c]),u.qb(43,16384,null,0,r.k,[[4,r.j]],null,null),u.qb(44,49152,null,0,s.yb,[u.h,u.k,u.x],{autocapitalize:[0,"autocapitalize"],placeholder:[1,"placeholder"],rows:[2,"rows"],spellcheck:[3,"spellcheck"],wrap:[4,"wrap"]},null),(l()(),u.gb(16777216,null,null,1,null,D)),u.qb(46,16384,null,0,b.j,[u.M,u.J],{ngIf:[0,"ngIf"]},null),(l()(),u.rb(47,0,null,0,11,"ion-col",[["size","12"]],null,null,null,i.V,i.k)),u.qb(48,49152,null,0,s.t,[u.h,u.k,u.x],{size:[0,"size"]},null),(l()(),u.rb(49,0,null,0,9,"ion-row",[["class","ion-justify-content-center"]],null,null,null,i.kb,i.z)),u.qb(50,49152,null,0,s.jb,[u.h,u.k,u.x],null,null),(l()(),u.rb(51,0,null,0,3,"ion-col",[["pull","1"],["size","4"],["size-xs","4.4"]],null,null,null,i.V,i.k)),u.qb(52,49152,null,0,s.t,[u.h,u.k,u.x],{pull:[0,"pull"],size:[1,"size"]},null),(l()(),u.rb(53,0,null,0,1,"app-up-down-vote-buttons",[],null,null,null,a.b,a.a)),u.qb(54,114688,null,0,c.a,[p.a,m.a,s.Pb],{postID:[0,"postID"]},null),(l()(),u.rb(55,0,null,0,3,"ion-col",[["size","6"]],null,null,null,i.V,i.k)),u.qb(56,49152,null,0,s.t,[u.h,u.k,u.x],{size:[0,"size"]},null),(l()(),u.rb(57,0,null,0,1,"app-follow-comment-buttons",[],null,null,null,d.b,d.a)),u.qb(58,114688,null,0,g.a,[h.m,p.a,m.a,s.Pb],{postID:[0,"postID"]},null)],(function(l,n){var t=n.component;l(n,3,0,"0.5","11"),l(n,7,0,"1.3"),l(n,10,0,"5"),l(n,14,0,"1.5","3"),l(n,18,0,"12"),l(n,22,0,"11"),l(n,26,0,"12"),l(n,30,0,"12"),l(n,32,0,"none"),l(n,35,0,t.commentForm),l(n,41,0,"comment"),l(n,44,0,"true","Add a Comment","5","true","soft"),l(n,46,0,!t.commentForm.get("comment").pristine&&t.commentForm.value.comment.length>=3),l(n,48,0,"12"),l(n,52,0,"1","4"),l(n,54,0,n.context.$implicit._id),l(n,56,0,"6"),l(n,58,0,n.context.$implicit._id)}),(function(l,n){l(n,8,0,u.vb(1,"",n.context.$implicit.creatorProfilePicture,"")),l(n,12,0,n.context.$implicit.creatorName),l(n,16,0,n.context.$implicit.date),l(n,24,0,n.context.$implicit.post),l(n,33,0,u.Db(n,37).ngClassUntouched,u.Db(n,37).ngClassTouched,u.Db(n,37).ngClassPristine,u.Db(n,37).ngClassDirty,u.Db(n,37).ngClassValid,u.Db(n,37).ngClassInvalid,u.Db(n,37).ngClassPending),l(n,38,0,u.Db(n,43).ngClassUntouched,u.Db(n,43).ngClassTouched,u.Db(n,43).ngClassPristine,u.Db(n,43).ngClassDirty,u.Db(n,43).ngClassValid,u.Db(n,43).ngClassInvalid,u.Db(n,43).ngClassPending)}))}function M(l){return u.Lb(0,[(l()(),u.rb(0,0,null,null,11,"ion-header",[["class","ion-hide-lg-up"]],null,null,null,i.cb,i.r)),u.qb(1,49152,null,0,s.B,[u.h,u.k,u.x],null,null),(l()(),u.rb(2,0,null,0,9,"ion-toolbar",[],null,null,null,i.vb,i.K)),u.qb(3,49152,null,0,s.Cb,[u.h,u.k,u.x],null,null),(l()(),u.rb(4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,i.P,i.e)),u.qb(5,49152,null,0,s.l,[u.h,u.k,u.x],null,null),(l()(),u.rb(6,0,null,0,2,"ion-back-button",[],null,[[null,"click"]],(function(l,n,t){var e=!0;return"click"===n&&(e=!1!==u.Db(l,8).onClick(t)&&e),e}),i.N,i.c)),u.qb(7,49152,null,0,s.g,[u.h,u.k,u.x],null,null),u.qb(8,16384,null,0,s.h,[[2,s.ib],s.Ib],null,null),(l()(),u.rb(9,0,null,0,2,"ion-title",[],null,null,null,i.ub,i.J)),u.qb(10,49152,null,0,s.Ab,[u.h,u.k,u.x],null,null),(l()(),u.Jb(-1,0,["Following"])),(l()(),u.rb(12,0,null,null,47,"ion-content",[],null,null,null,i.W,i.l)),u.qb(13,49152,null,0,s.u,[u.h,u.k,u.x],null,null),(l()(),u.rb(14,0,null,0,5,"ion-fab",[["class","ion-hide-lg-up"],["horizontal","end"],["slot","fixed"],["vertical","bottom"]],null,null,null,i.Z,i.n)),u.qb(15,49152,null,0,s.w,[u.h,u.k,u.x],{horizontal:[0,"horizontal"],vertical:[1,"vertical"]},null),(l()(),u.rb(16,0,null,0,3,"ion-fab-button",[],null,[[null,"click"]],(function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.addPost()&&u),u}),i.Y,i.o)),u.qb(17,49152,null,0,s.x,[u.h,u.k,u.x],null,null),(l()(),u.rb(18,0,null,0,1,"ion-icon",[["name","add"],["size","large"]],null,null,null,i.db,i.s)),u.qb(19,49152,null,0,s.C,[u.h,u.k,u.x],{name:[0,"name"],size:[1,"size"]},null),(l()(),u.rb(20,0,null,0,3,"ion-refresher",[["slot","fixed"]],null,[[null,"ionRefresh"]],(function(l,n,t){var u=!0;return"ionRefresh"===n&&(u=!1!==l.component.doRefresh(t)&&u),u}),i.jb,i.x)),u.qb(21,49152,null,0,s.db,[u.h,u.k,u.x],null,null),(l()(),u.rb(22,0,null,0,1,"ion-refresher-content",[],null,null,null,i.ib,i.y)),u.qb(23,49152,null,0,s.eb,[u.h,u.k,u.x],null,null),(l()(),u.rb(24,0,null,0,25,"ion-grid",[["class","ion-hide-md-down"]],null,null,null,i.bb,i.q)),u.qb(25,49152,null,0,s.A,[u.h,u.k,u.x],null,null),(l()(),u.rb(26,0,null,0,15,"ion-row",[["class","ion-hide-md-down"]],null,null,null,i.kb,i.z)),u.qb(27,49152,null,0,s.jb,[u.h,u.k,u.x],null,null),(l()(),u.rb(28,0,null,0,3,"ion-col",[["offset","2.5"],["size","2.5"],["style","margin: 3% 0% 2% 0%;"]],null,null,null,i.V,i.k)),u.qb(29,49152,null,0,s.t,[u.h,u.k,u.x],{offset:[0,"offset"],size:[1,"size"]},null),(l()(),u.rb(30,0,null,0,1,"h1",[],null,null,null,null,null)),(l()(),u.Jb(-1,null,["Following"])),(l()(),u.rb(32,0,null,0,4,"ion-col",[["class","ion-text-center"],["push","2.65"],["size","2"]],null,null,null,i.V,i.k)),u.qb(33,49152,null,0,s.t,[u.h,u.k,u.x],{push:[0,"push"],size:[1,"size"]},null),(l()(),u.rb(34,0,null,0,2,"ion-button",[["class","add-button"]],null,[[null,"click"]],(function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.addPost()&&u),u}),i.O,i.d)),u.qb(35,49152,null,0,s.k,[u.h,u.k,u.x],null,null),(l()(),u.Jb(-1,0,[" Add Post "])),(l()(),u.rb(37,0,null,0,4,"ion-col",[["class","ion-text-center"],["push","1"],["size","2"]],null,null,null,i.V,i.k)),u.qb(38,49152,null,0,s.t,[u.h,u.k,u.x],{push:[0,"push"],size:[1,"size"]},null),(l()(),u.rb(39,0,null,0,2,"ion-button",[["class","blue-button"]],null,[[null,"click"]],(function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.back()&&u),u}),i.O,i.d)),u.qb(40,49152,null,0,s.k,[u.h,u.k,u.x],null,null),(l()(),u.Jb(-1,0,[" Back "])),(l()(),u.rb(42,0,null,0,7,"ion-row",[["class","ion-justify-content-center"],["style","margin-top: 1%;"]],null,null,null,i.kb,i.z)),u.qb(43,49152,null,0,s.jb,[u.h,u.k,u.x],null,null),(l()(),u.gb(16777216,null,0,1,null,q)),u.qb(45,16384,null,0,b.j,[u.M,u.J],{ngIf:[0,"ngIf"]},null),(l()(),u.rb(46,0,null,0,3,"ion-col",[["size","7"]],null,null,null,i.V,i.k)),u.qb(47,49152,null,0,s.t,[u.h,u.k,u.x],{size:[0,"size"]},null),(l()(),u.gb(16777216,null,0,1,null,y)),u.qb(49,278528,null,0,b.i,[u.M,u.J,u.q],{ngForOf:[0,"ngForOf"]},null),(l()(),u.rb(50,0,null,0,9,"ion-grid",[["class","ion-hide-lg-up"]],null,null,null,i.bb,i.q)),u.qb(51,49152,null,0,s.A,[u.h,u.k,u.x],null,null),(l()(),u.rb(52,0,null,0,7,"ion-row",[["class","ion-justify-content-center"]],null,null,null,i.kb,i.z)),u.qb(53,49152,null,0,s.jb,[u.h,u.k,u.x],null,null),(l()(),u.gb(16777216,null,0,1,null,C)),u.qb(55,16384,null,0,b.j,[u.M,u.J],{ngIf:[0,"ngIf"]},null),(l()(),u.rb(56,0,null,0,3,"ion-col",[["pull-lg","2"],["size-lg","10"],["size-md","8"],["size-sm","10"],["size-xs","12"]],null,null,null,i.V,i.k)),u.qb(57,49152,null,0,s.t,[u.h,u.k,u.x],null,null),(l()(),u.gb(16777216,null,0,1,null,O)),u.qb(59,278528,null,0,b.i,[u.M,u.J,u.q],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){var t=n.component;l(n,15,0,"end","bottom"),l(n,19,0,"add","large"),l(n,29,0,"2.5","2.5"),l(n,33,0,"2.65","2"),l(n,38,0,"1","2"),l(n,45,0,0===t.allFollowedPosts.length),l(n,47,0,"7"),l(n,49,0,t.allFollowedPosts),l(n,55,0,0===t.allFollowedPosts.length),l(n,59,0,t.allFollowedPosts)}),null)}function _(l){return u.Lb(0,[(l()(),u.rb(0,0,null,null,1,"app-following",[],null,null,null,M,P)),u.qb(1,114688,null,0,w,[h.m,p.a,m.a,s.Pb,r.b,z.a,b.n],null,null)],(function(l,n){l(n,1,0)}),null)}var j=u.nb("app-following",w,_,{},{},[]),F=t("zAgk");class I{}t.d(n,"FollowingPageModuleNgFactory",(function(){return V}));var V=u.ob(e,[],(function(l){return u.Ab([u.Bb(512,u.j,u.Z,[[8,[o.a,j]],[3,u.j],u.v]),u.Bb(4608,b.l,b.k,[u.s,[2,b.s]]),u.Bb(4608,r.r,r.r,[]),u.Bb(4608,s.b,s.b,[u.x,u.g]),u.Bb(4608,s.Hb,s.Hb,[s.b,u.j,u.p]),u.Bb(4608,s.Lb,s.Lb,[s.b,u.j,u.p]),u.Bb(5120,u.d,(function(l,n,t){return[s.Rb(l,n,t)]}),[s.Qb,b.d,u.x]),u.Bb(4608,r.b,r.b,[]),u.Bb(1073742336,b.c,b.c,[]),u.Bb(1073742336,r.q,r.q,[]),u.Bb(1073742336,r.e,r.e,[]),u.Bb(1073742336,s.Eb,s.Eb,[]),u.Bb(1073742336,F.a,F.a,[]),u.Bb(1073742336,r.n,r.n,[]),u.Bb(1073742336,h.q,h.q,[[2,h.v],[2,h.m]]),u.Bb(1073742336,I,I,[]),u.Bb(1073742336,e,e,[]),u.Bb(256,s.Qb,void 0,[]),u.Bb(1024,h.k,(function(){return[[{path:"",component:w}]]}),[])])}))}}]);