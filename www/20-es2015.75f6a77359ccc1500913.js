(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"84P7":function(l,n,t){"use strict";t.d(n,"a",(function(){return e}));var o=t("mrSG"),u=(t("Aso2"),t("ENZJ"),t("ZZ/e"),t("2Vo4"));class e{constructor(l,n,t,o){this.router=l,this.posts=n,this.profile=t,this.toast=o,this.comments=[],this.followers=[],this.following=!1,this.followingLength$=new u.a(null),this.followingLength=null}ngOnInit(){this.posts.getPostInfo(this.postID).subscribe(l=>{let n=l.comments,t=l.followers,o=!1;this.profile.getUserDetails().subscribe(l=>{let u=l.email;if(t.find((function(l){l===u&&(o=!0)})),u===this.postEmail)return!0===this.isUser;this.followers=t,this.comments=n,this.userEmail=u,this.following=o,this.followingLength$.next(t.length),this.followingLength$.subscribe(l=>{this.followingLength=l})})})}follow(l){return o.b(this,void 0,void 0,(function*(){yield console.log("Following Post"),yield console.log(l),yield this.posts.followPost(l,this.userEmail),this.following=!0,this.followingLength$.next(this.followingLength+1),yield this.followToast()}))}followToast(){return o.b(this,void 0,void 0,(function*(){(yield this.toast.create({cssClass:"followed-toast",message:"You are FOLLOWING this post",duration:2e3})).present()}))}unFollow(l){return o.b(this,void 0,void 0,(function*(){yield console.log("Unfollowing Post"),yield console.log(l),yield this.posts.unFollowPost(l,this.userEmail),this.following=!1,this.followingLength$.next(this.followingLength-1),yield this.unFollowToast()}))}unFollowToast(){return o.b(this,void 0,void 0,(function*(){(yield this.toast.create({cssClass:"unfollowed-toast",message:"You are UNFOLLOWING this post",duration:2e3})).present()}))}postPage(){this.router.navigate(["/home/posts/post-page",this.postID])}}},ZZ6A:function(l,n,t){"use strict";t.r(n);var o=t("8Y7J");class u{}var e=t("pMnS"),i=t("oBZk"),s=t("ZZ/e"),r=t("s7LF"),a=t("SVse"),c=t("kcry"),b=t("u6v2"),p=t("ENZJ"),d=t("Aso2"),g=t("dneo"),h=t("84P7"),m=t("iInd"),f=t("mrSG"),w=t("7xvl"),z=t("DtjX");class v{constructor(l,n,t,o,u,e){this.router=l,this.posts=n,this.profile=t,this.toast=o,this.formBuilder=u,this.postsEmitterService=e}ngOnInit(){null==this.postsEmitterService.subsVar&&(this.postsEmitterService.subsVar=this.postsEmitterService.invokePostsPageRefresh.subscribe(()=>{this.getPosts()})),this.commentForm=this.formBuilder.group({comment:[""]}),this.commentForm.controls.comment.valueChanges.subscribe(l=>{""===l&&(console.log("Value is empty"),this.commentForm.markAsPristine())}),this.getPosts(),this.getFollowingPosts()}postPage(l){this.router.navigate(["/home/posts/post-page",l._id])}getFollowingPosts(){this.profile.getUserDetails().subscribe(l=>{this.userEmail=l.email,this.profilePicture=l.profilePicture,this.userFullName=l.fullName,this.followedPost=l.followedPost,this.posts.followingSubject$.next(this.followedPost),this.posts.followingSubject$.subscribe(l=>{this.followedPostCount=l.length})})}doRefresh(l){return f.b(this,void 0,void 0,(function*(){this.getFollowingPosts(),yield this.posts.getPosts().subscribe(l=>{this.allPosts=Object.values(l).reverse();for(const n of this.allPosts)n.date=Object(w.a)(new Date(n.date),{includeSeconds:!0,addSuffix:!0})}),yield setTimeout(()=>{const n=this.toast.create({message:"Inspiration Page has been refreshed",duration:3e3});l.target.complete(),n.then(l=>l.present())},2e3)}))}getPosts(){return f.b(this,void 0,void 0,(function*(){yield this.posts.getPosts().subscribe(l=>{this.allPosts=Object.values(l).reverse(),this.posts.postsSubject$.next(this.allPosts);for(const n of this.allPosts)n.date=Object(w.a)(new Date(n.date),{includeSeconds:!0,addSuffix:!0})})}))}addPost(){this.router.navigate(["/home/posts/add-post"])}following(){this.router.navigate(["/home/posts/following"])}comment(l,n){return f.b(this,void 0,void 0,(function*(){this.commentForm.reset();const t=yield Date.now();console.log("Posting comment"),console.log("Post ID: "+n),yield this.posts.comment(n,t,this.userFullName,this.userEmail,l).subscribe(),yield this.posts.getPostInfo(n).subscribe(l=>{for(let n of l.comments)n.date=Object(w.a)(new Date(n.date),{includeSeconds:!0,addSuffix:!0});this.posts.commentsSubject$.next(l.comments.reverse())}),this.toast.create({message:"Your comment has been added.",duration:1500}).then(l=>l.present()),yield this.router.navigate(["/home/posts/post-page",n])}))}}var x=o.zb({encapsulation:0,styles:[[".post[_ngcontent-%COMP%]{padding:20px 0;margin-bottom:90px;border-radius:5px;box-shadow:1px 1px 10px rgba(0,0,0,.1);font-size:1.2em;line-height:35px}.post-content[_ngcontent-%COMP%]{font-size:1.05em}.user-details[_ngcontent-%COMP%]{position:fixed;background:0 0;height:200px}#username[_ngcontent-%COMP%]{color:#fff;font-size:1em;font-weight:600;position:relative;left:10px;opacity:0;-webkit-animation:.5s cubic-bezier(.175,.885,.32,1.275) forwards slide-up;animation:.5s cubic-bezier(.175,.885,.32,1.275) forwards slide-up}ion-toolbar[_ngcontent-%COMP%]{--background:none;height:60px}ion-toolbar[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#000;font-size:1.2em}form[_ngcontent-%COMP%]{width:95%;border-top:1px solid rgba(50,50,50,.2)}.comment[_ngcontent-%COMP%]{border:1px solid #005191;border-radius:5px;margin-top:20px;padding:10px}.comment-post-button[_ngcontent-%COMP%]{--background:linear-gradient(#0672c4, #005191);height:30px;margin-top:20px;opacity:0;width:80px;transform:.5s;transition-timing-function:cubic-bezier(.175,.885,.32,1.275);-webkit-animation:.5s cubic-bezier(.175,.885,.32,1.275) forwards slide-up;animation:.5s cubic-bezier(.175,.885,.32,1.275) forwards slide-up}ion-item[_ngcontent-%COMP%]{--backsground:none}.following-button[_ngcontent-%COMP%]{opacity:1;--background:rgba(255,255,255,0.1);--color:white;--border-style:solid;--border-width:1px;--border-color:white;box-shadow:1px 1px 10px rgba(0,0,0,.1);width:100px;height:40px;font-size:.6em;font-weight:600}.followed-button[_ngcontent-%COMP%]{--color:white;--background:linear-gradient(#0672c4, #005191);font-weight:800;display:block;width:200px;margin-top:20px}.add-button[_ngcontent-%COMP%]{--color:white;--background:linear-gradient(#24d8a8, #1baf88);font-weight:800;display:block;width:200px;margin-top:20px}.comment-input[_ngcontent-%COMP%]{background:rgba(247,248,248,.5);height:auto;margin:30px 0 60px;box-shadow:none;border:1px solid rgba(0,81,145,.4);border-radius:5px;padding-left:10px;transition:.5s;transition-timing-function:cubic-bezier(.175,.885,.32,1.275)}.comment-input[_ngcontent-%COMP%]:hover{background:rgba(247,248,248,.5);height:auto;margin:50px 0 80px;box-shadow:1px 1px 3px #999;border:1px solid #005191;border-radius:5px;padding-left:10px;transition:.5s;transition-timing-function:cubic-bezier(.175,.885,.32,1.275)}.comment-input-mobile[_ngcontent-%COMP%]{background:rgba(247,248,248,.5);height:auto;margin:30px 0 60px;box-shadow:none;padding-left:10px;border:1px solid rgba(0,81,145,.4);border-radius:5px;transition:1s;transition-timing-function:cubic-bezier(.175,.885,.32,1.275)}.comment-input-mobile[_ngcontent-%COMP%]:focus{background:rgba(247,248,248,.5);height:100px;margin:30px 0 150px;box-shadow:1px 1px 3px #999;border:1px solid #005191;border-radius:5px;transition:1s;transition-timing-function:cubic-bezier(.175,.885,.32,1.275)}ion-fab-button[_ngcontent-%COMP%]{--background:#797;--background-focused:#FFB351;--background-hover:#FFB351;--background-activated:#FFB351;--color-focused:white;--color-hover:white;--color-activated:white;position:relative;bottom:50px;right:10px}@-webkit-keyframes slide-up{0%{transform:translateY(10px);opacity:0}100%{transform:translateY(0);opacity:1}}@keyframes slide-up{0%{transform:translateY(10px);opacity:0}100%{transform:translateY(0);opacity:1}}@-webkit-keyframes username-slide-in{0%{transform:translateX(-20px)}100%{transform:translateX(0);opacity:1}}@keyframes username-slide-in{0%{transform:translateX(-20px)}100%{transform:translateX(0);opacity:1}}@-webkit-keyframes add-post-button-tap{0%{transform:scale(1)}50%{transform:scale(1.1)}100%{transform:scale(1);opacity:1}}@keyframes add-post-button-tap{0%{transform:scale(1)}50%{transform:scale(1.1)}100%{transform:scale(1);opacity:1}}"]],data:{}});function k(l){return o.Vb(0,[(l()(),o.Bb(0,0,null,null,2,"ion-button",[["class","comment-post-button"],["name","send"],["style","float: right;"],["type","submit"]],null,null,null,i.O,i.d)),o.Ab(1,49152,null,0,s.l,[o.j,o.p,o.F],{type:[0,"type"]},null),(l()(),o.Tb(-1,0,["Post "]))],(function(l,n){l(n,1,0,"submit")}),null)}function F(l){return o.Vb(0,[(l()(),o.Bb(0,0,null,null,58,"ion-row",[["class","post"]],null,null,null,i.kb,i.z)),o.Ab(1,49152,null,0,s.kb,[o.j,o.p,o.F],null,null),(l()(),o.Bb(2,0,null,0,14,"ion-col",[["size","11"]],null,null,null,i.V,i.k)),o.Ab(3,49152,null,0,s.u,[o.j,o.p,o.F],{size:[0,"size"]},null),(l()(),o.Bb(4,0,null,0,12,"ion-row",[["class","ion-align-items-center"]],null,null,null,i.kb,i.z)),o.Ab(5,49152,null,0,s.kb,[o.j,o.p,o.F],null,null),(l()(),o.Bb(6,0,null,0,2,"ion-col",[["offset-lg","0.5"],["size","1"]],null,null,null,i.V,i.k)),o.Ab(7,49152,null,0,s.u,[o.j,o.p,o.F],{size:[0,"size"]},null),(l()(),o.Bb(8,0,null,0,0,"img",[["style","background: #999; border-radius: 100px; height: 40px; width: 40px;"]],[[8,"src",4]],null,null,null,null)),(l()(),o.Bb(9,0,null,0,3,"ion-col",[["size","4"]],null,null,null,i.V,i.k)),o.Ab(10,49152,null,0,s.u,[o.j,o.p,o.F],{size:[0,"size"]},null),(l()(),o.Bb(11,0,null,0,1,"h6",[["style","font-size: 1em; font-weight: 500;"]],null,null,null,null,null)),(l()(),o.Tb(12,null,["",""])),(l()(),o.Bb(13,0,null,0,3,"ion-col",[["class","ion-float-right"],["push-lg","3"],["size","3"]],null,null,null,i.V,i.k)),o.Ab(14,49152,null,0,s.u,[o.j,o.p,o.F],{size:[0,"size"]},null),(l()(),o.Bb(15,0,null,0,1,"h6",[["style","opacity: 0.4; font-size: 0.8em;"]],null,null,null,null,null)),(l()(),o.Tb(16,null,["",""])),(l()(),o.Bb(17,0,null,0,7,"ion-col",[["size","12"]],null,null,null,i.V,i.k)),o.Ab(18,49152,null,0,s.u,[o.j,o.p,o.F],{size:[0,"size"]},null),(l()(),o.Bb(19,0,null,0,5,"ion-row",[],null,null,null,i.kb,i.z)),o.Ab(20,49152,null,0,s.kb,[o.j,o.p,o.F],null,null),(l()(),o.Bb(21,0,null,0,3,"ion-col",[["offset","0.5"],["size","11"]],null,null,null,i.V,i.k)),o.Ab(22,49152,null,0,s.u,[o.j,o.p,o.F],{offset:[0,"offset"],size:[1,"size"]},null),(l()(),o.Bb(23,0,null,0,1,"p",[["class","post-content"]],null,null,null,null,null)),(l()(),o.Tb(24,null,["",""])),(l()(),o.Bb(25,0,null,0,21,"ion-col",[["size","12"]],null,null,null,i.V,i.k)),o.Ab(26,49152,null,0,s.u,[o.j,o.p,o.F],{size:[0,"size"]},null),(l()(),o.Bb(27,0,null,0,19,"ion-row",[["style","position: relative; right: 6px; top: -4px;"]],null,null,null,i.kb,i.z)),o.Ab(28,49152,null,0,s.kb,[o.j,o.p,o.F],null,null),(l()(),o.Bb(29,0,null,0,17,"ion-col",[["offset","0.5"],["size","11"]],null,null,null,i.V,i.k)),o.Ab(30,49152,null,0,s.u,[o.j,o.p,o.F],{offset:[0,"offset"],size:[1,"size"]},null),(l()(),o.Bb(31,0,null,0,15,"ion-item",[["lines","none"]],null,null,null,i.fb,i.u)),o.Ab(32,49152,null,0,s.I,[o.j,o.p,o.F],{lines:[0,"lines"]},null),(l()(),o.Bb(33,0,null,0,13,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],(function(l,n,t){var u=!0,e=l.component;return"submit"===n&&(u=!1!==o.Nb(l,35).onSubmit(t)&&u),"reset"===n&&(u=!1!==o.Nb(l,35).onReset()&&u),"ngSubmit"===n&&(u=!1!==e.comment(e.commentForm.value,l.context.$implicit._id)&&u),u}),null,null)),o.Ab(34,16384,null,0,r.t,[],null,null),o.Ab(35,540672,null,0,r.d,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),o.Qb(2048,null,r.a,null,[r.d]),o.Ab(37,16384,null,0,r.l,[[4,r.a]],null,null),(l()(),o.Bb(38,0,null,null,6,"ion-textarea",[["autocapitalize","true"],["autogrow","true"],["class","comment-input"],["formControlName","comment"],["placeholder","Add a Comment"],["rows","5"],["spellcheck","true"],["type","text"],["wrap","soft"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"keydown.control.enter"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,t){var u=!0,e=l.component;return"ionBlur"===n&&(u=!1!==o.Nb(l,40)._handleBlurEvent(t.target)&&u),"ionChange"===n&&(u=!1!==o.Nb(l,40)._handleInputEvent(t.target)&&u),"keydown.control.enter"===n&&(u=!1!==e.comment(e.commentForm.value,l.context.$implicit._id)&&u),u}),i.tb,i.I)),o.Ab(39,49152,null,0,s.zb,[o.j,o.p,o.F],{autocapitalize:[0,"autocapitalize"],placeholder:[1,"placeholder"],rows:[2,"rows"],spellcheck:[3,"spellcheck"],wrap:[4,"wrap"]},null),o.Ab(40,16384,null,0,s.Pb,[o.p],null,null),o.Qb(1024,null,r.i,(function(l){return[l]}),[s.Pb]),o.Ab(42,671744,null,0,r.c,[[3,r.a],[8,null],[8,null],[6,r.i],[2,r.s]],{name:[0,"name"]},null),o.Qb(2048,null,r.j,null,[r.c]),o.Ab(44,16384,null,0,r.k,[[4,r.j]],null,null),(l()(),o.qb(16777216,null,null,1,null,k)),o.Ab(46,16384,null,0,a.j,[o.W,o.S],{ngIf:[0,"ngIf"]},null),(l()(),o.Bb(47,0,null,0,11,"ion-col",[["size","12"]],null,null,null,i.V,i.k)),o.Ab(48,49152,null,0,s.u,[o.j,o.p,o.F],{size:[0,"size"]},null),(l()(),o.Bb(49,0,null,0,9,"ion-row",[],null,null,null,i.kb,i.z)),o.Ab(50,49152,null,0,s.kb,[o.j,o.p,o.F],null,null),(l()(),o.Bb(51,0,null,0,3,"ion-col",[["offset","0.5"],["size","4"]],null,null,null,i.V,i.k)),o.Ab(52,49152,null,0,s.u,[o.j,o.p,o.F],{offset:[0,"offset"],size:[1,"size"]},null),(l()(),o.Bb(53,0,null,0,1,"app-up-down-vote-buttons",[],null,null,null,c.b,c.a)),o.Ab(54,114688,null,0,b.a,[p.a,d.a,s.Qb],{postID:[0,"postID"]},null),(l()(),o.Bb(55,0,null,0,3,"ion-col",[["size","6"]],null,null,null,i.V,i.k)),o.Ab(56,49152,null,0,s.u,[o.j,o.p,o.F],{size:[0,"size"]},null),(l()(),o.Bb(57,0,null,0,1,"app-follow-comment-buttons",[],null,null,null,g.b,g.a)),o.Ab(58,114688,null,0,h.a,[m.m,p.a,d.a,s.Qb],{postID:[0,"postID"],isUser:[1,"isUser"]},null)],(function(l,n){var t=n.component;l(n,3,0,"11"),l(n,7,0,"1"),l(n,10,0,"4"),l(n,14,0,"3"),l(n,18,0,"12"),l(n,22,0,"0.5","11"),l(n,26,0,"12"),l(n,30,0,"0.5","11"),l(n,32,0,"none"),l(n,35,0,t.commentForm),l(n,39,0,"true","Add a Comment","5","true","soft"),l(n,42,0,"comment"),l(n,46,0,!t.commentForm.get("comment").pristine&&t.commentForm.value.comment.length>=3),l(n,48,0,"12"),l(n,52,0,"0.5","4"),l(n,54,0,n.context.$implicit._id),l(n,56,0,"6"),l(n,58,0,n.context.$implicit._id,n.context.$implicit.isUser)}),(function(l,n){l(n,8,0,o.Fb(1,"",n.context.$implicit.creatorProfilePicture,"")),l(n,12,0,n.context.$implicit.creatorName),l(n,16,0,n.context.$implicit.date),l(n,24,0,n.context.$implicit.post),l(n,33,0,o.Nb(n,37).ngClassUntouched,o.Nb(n,37).ngClassTouched,o.Nb(n,37).ngClassPristine,o.Nb(n,37).ngClassDirty,o.Nb(n,37).ngClassValid,o.Nb(n,37).ngClassInvalid,o.Nb(n,37).ngClassPending),l(n,38,0,o.Nb(n,44).ngClassUntouched,o.Nb(n,44).ngClassTouched,o.Nb(n,44).ngClassPristine,o.Nb(n,44).ngClassDirty,o.Nb(n,44).ngClassValid,o.Nb(n,44).ngClassInvalid,o.Nb(n,44).ngClassPending)}))}function V(l){return o.Vb(0,[(l()(),o.Bb(0,0,null,null,2,"ion-button",[["class","comment-post-button"],["name","send"],["style","float: right;"],["type","submit"]],null,null,null,i.O,i.d)),o.Ab(1,49152,null,0,s.l,[o.j,o.p,o.F],{type:[0,"type"]},null),(l()(),o.Tb(-1,0,["Post "]))],(function(l,n){l(n,1,0,"submit")}),null)}function A(l){return o.Vb(0,[(l()(),o.Bb(0,0,null,null,58,"ion-row",[["class","post"],["style","margin-top: 3%;"]],null,null,null,i.kb,i.z)),o.Ab(1,49152,null,0,s.kb,[o.j,o.p,o.F],null,null),(l()(),o.Bb(2,0,null,0,14,"ion-col",[["offset","0.5"],["size","11"]],null,null,null,i.V,i.k)),o.Ab(3,49152,null,0,s.u,[o.j,o.p,o.F],{offset:[0,"offset"],size:[1,"size"]},null),(l()(),o.Bb(4,0,null,0,12,"ion-row",[["style","position: relative; right: 5px; top: -4px;"]],null,null,null,i.kb,i.z)),o.Ab(5,49152,null,0,s.kb,[o.j,o.p,o.F],null,null),(l()(),o.Bb(6,0,null,0,2,"ion-col",[["size","2"]],null,null,null,i.V,i.k)),o.Ab(7,49152,null,0,s.u,[o.j,o.p,o.F],{size:[0,"size"]},null),(l()(),o.Bb(8,0,null,0,0,"img",[["src","../../../assets/aaron.jpg"],["style","background: #999; border-radius: 100px; height: 40px; width: 40px;"]],null,null,null,null,null)),(l()(),o.Bb(9,0,null,0,3,"ion-col",[["size","5"]],null,null,null,i.V,i.k)),o.Ab(10,49152,null,0,s.u,[o.j,o.p,o.F],{size:[0,"size"]},null),(l()(),o.Bb(11,0,null,0,1,"h6",[["style","font-size: 0.9em; font-weight: 700; margin: 10px 0 10px 0px; color: #666;"]],null,null,null,null,null)),(l()(),o.Tb(12,null,["",""])),(l()(),o.Bb(13,0,null,0,3,"ion-col",[["class","ion-text-right"],["size","3"]],null,null,null,i.V,i.k)),o.Ab(14,49152,null,0,s.u,[o.j,o.p,o.F],{size:[0,"size"]},null),(l()(),o.Bb(15,0,null,0,1,"h6",[["style","opacity: 0.4; font-size: 0.7em; margin: 10px 0;"]],null,null,null,null,null)),(l()(),o.Tb(16,null,["",""])),(l()(),o.Bb(17,0,null,0,7,"ion-col",[["size","12"]],null,null,null,i.V,i.k)),o.Ab(18,49152,null,0,s.u,[o.j,o.p,o.F],{size:[0,"size"]},null),(l()(),o.Bb(19,0,null,0,5,"ion-row",[["class","ion-justify-content-center"]],null,null,null,i.kb,i.z)),o.Ab(20,49152,null,0,s.kb,[o.j,o.p,o.F],null,null),(l()(),o.Bb(21,0,null,0,3,"ion-col",[["size","11"],["style","height: auto; background: white"]],null,null,null,i.V,i.k)),o.Ab(22,49152,null,0,s.u,[o.j,o.p,o.F],{size:[0,"size"]},null),(l()(),o.Bb(23,0,null,0,1,"p",[["class","post-content"],["style","font-size: 1em; width: 100%; position: unset; line-height: unset;"]],null,null,null,null,null)),(l()(),o.Tb(24,null,["",""])),(l()(),o.Bb(25,0,null,0,21,"ion-col",[["size","12"]],null,null,null,i.V,i.k)),o.Ab(26,49152,null,0,s.u,[o.j,o.p,o.F],{size:[0,"size"]},null),(l()(),o.Bb(27,0,null,0,19,"ion-row",[["class","ion-justify-content-center"],["style","position: relative; right: 6px; top: -4px;"]],null,null,null,i.kb,i.z)),o.Ab(28,49152,null,0,s.kb,[o.j,o.p,o.F],null,null),(l()(),o.Bb(29,0,null,0,17,"ion-col",[["size","12"]],null,null,null,i.V,i.k)),o.Ab(30,49152,null,0,s.u,[o.j,o.p,o.F],{size:[0,"size"]},null),(l()(),o.Bb(31,0,null,0,15,"ion-item",[["lines","none"],["style","height: auto;"]],null,null,null,i.fb,i.u)),o.Ab(32,49152,null,0,s.I,[o.j,o.p,o.F],{lines:[0,"lines"]},null),(l()(),o.Bb(33,0,null,0,13,"form",[["novalidate",""],["style","border-top: 1px solid #999; padding-top: 20px;"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],(function(l,n,t){var u=!0,e=l.component;return"submit"===n&&(u=!1!==o.Nb(l,35).onSubmit(t)&&u),"reset"===n&&(u=!1!==o.Nb(l,35).onReset()&&u),"ngSubmit"===n&&(u=!1!==e.comment(e.commentForm.value,l.context.$implicit._id)&&u),u}),null,null)),o.Ab(34,16384,null,0,r.t,[],null,null),o.Ab(35,540672,null,0,r.d,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),o.Qb(2048,null,r.a,null,[r.d]),o.Ab(37,16384,null,0,r.l,[[4,r.a]],null,null),(l()(),o.Bb(38,0,null,null,6,"ion-textarea",[["autocapitalize","true"],["autogrow","true"],["class","comment-input-mobile"],["formControlName","comment"],["placeholder","Add a Comment"],["rows","5"],["spellcheck","true"],["type","text"],["wrap","soft"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"keydown.control.enter"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,t){var u=!0,e=l.component;return"ionBlur"===n&&(u=!1!==o.Nb(l,40)._handleBlurEvent(t.target)&&u),"ionChange"===n&&(u=!1!==o.Nb(l,40)._handleInputEvent(t.target)&&u),"keydown.control.enter"===n&&(u=!1!==e.comment(e.commentForm.value,l.context.$implicit._id)&&u),u}),i.tb,i.I)),o.Ab(39,49152,null,0,s.zb,[o.j,o.p,o.F],{autocapitalize:[0,"autocapitalize"],placeholder:[1,"placeholder"],rows:[2,"rows"],spellcheck:[3,"spellcheck"],wrap:[4,"wrap"]},null),o.Ab(40,16384,null,0,s.Pb,[o.p],null,null),o.Qb(1024,null,r.i,(function(l){return[l]}),[s.Pb]),o.Ab(42,671744,null,0,r.c,[[3,r.a],[8,null],[8,null],[6,r.i],[2,r.s]],{name:[0,"name"]},null),o.Qb(2048,null,r.j,null,[r.c]),o.Ab(44,16384,null,0,r.k,[[4,r.j]],null,null),(l()(),o.qb(16777216,null,null,1,null,V)),o.Ab(46,16384,null,0,a.j,[o.W,o.S],{ngIf:[0,"ngIf"]},null),(l()(),o.Bb(47,0,null,0,11,"ion-col",[["size","12"]],null,null,null,i.V,i.k)),o.Ab(48,49152,null,0,s.u,[o.j,o.p,o.F],{size:[0,"size"]},null),(l()(),o.Bb(49,0,null,0,9,"ion-row",[["class","ion-justify-content-center"]],null,null,null,i.kb,i.z)),o.Ab(50,49152,null,0,s.kb,[o.j,o.p,o.F],null,null),(l()(),o.Bb(51,0,null,0,3,"ion-col",[["pull","1"],["size","4"],["size-xs","4.4"]],null,null,null,i.V,i.k)),o.Ab(52,49152,null,0,s.u,[o.j,o.p,o.F],{pull:[0,"pull"],size:[1,"size"]},null),(l()(),o.Bb(53,0,null,0,1,"app-up-down-vote-buttons",[],null,null,null,c.b,c.a)),o.Ab(54,114688,null,0,b.a,[p.a,d.a,s.Qb],{postID:[0,"postID"]},null),(l()(),o.Bb(55,0,null,0,3,"ion-col",[["size","6"]],null,null,null,i.V,i.k)),o.Ab(56,49152,null,0,s.u,[o.j,o.p,o.F],{size:[0,"size"]},null),(l()(),o.Bb(57,0,null,0,1,"app-follow-comment-buttons",[],null,null,null,g.b,g.a)),o.Ab(58,114688,null,0,h.a,[m.m,p.a,d.a,s.Qb],{postID:[0,"postID"]},null)],(function(l,n){var t=n.component;l(n,3,0,"0.5","11"),l(n,7,0,"2"),l(n,10,0,"5"),l(n,14,0,"3"),l(n,18,0,"12"),l(n,22,0,"11"),l(n,26,0,"12"),l(n,30,0,"12"),l(n,32,0,"none"),l(n,35,0,t.commentForm),l(n,39,0,"true","Add a Comment","5","true","soft"),l(n,42,0,"comment"),l(n,46,0,!t.commentForm.get("comment").pristine&&t.commentForm.value.comment.length>=3),l(n,48,0,"12"),l(n,52,0,"1","4"),l(n,54,0,n.context.$implicit._id),l(n,56,0,"6"),l(n,58,0,n.context.$implicit._id)}),(function(l,n){l(n,12,0,n.context.$implicit.creatorName),l(n,16,0,n.context.$implicit.date),l(n,24,0,n.context.$implicit.post),l(n,33,0,o.Nb(n,37).ngClassUntouched,o.Nb(n,37).ngClassTouched,o.Nb(n,37).ngClassPristine,o.Nb(n,37).ngClassDirty,o.Nb(n,37).ngClassValid,o.Nb(n,37).ngClassInvalid,o.Nb(n,37).ngClassPending),l(n,38,0,o.Nb(n,44).ngClassUntouched,o.Nb(n,44).ngClassTouched,o.Nb(n,44).ngClassPristine,o.Nb(n,44).ngClassDirty,o.Nb(n,44).ngClassValid,o.Nb(n,44).ngClassInvalid,o.Nb(n,44).ngClassPending)}))}function B(l){return o.Vb(0,[o.Rb(402653184,1,{fabButton:0}),(l()(),o.Bb(1,0,null,null,19,"ion-header",[["class","ion-hide-lg-up"],["no-border",""]],null,null,null,i.cb,i.r)),o.Ab(2,49152,null,0,s.C,[o.j,o.p,o.F],null,null),(l()(),o.Bb(3,0,null,0,17,"ion-toolbar",[],null,null,null,i.vb,i.K)),o.Ab(4,49152,null,0,s.Db,[o.j,o.p,o.F],null,null),(l()(),o.Bb(5,0,null,0,15,"ion-grid",[],null,null,null,i.bb,i.q)),o.Ab(6,49152,null,0,s.B,[o.j,o.p,o.F],null,null),(l()(),o.Bb(7,0,null,0,13,"ion-row",[["class","ion-align-items-center"]],null,null,null,i.kb,i.z)),o.Ab(8,49152,null,0,s.kb,[o.j,o.p,o.F],null,null),(l()(),o.Bb(9,0,null,0,2,"ion-col",[["push-sm","2"],["push-xs",".45"],["size-xs","1.2"]],null,null,null,i.V,i.k)),o.Ab(10,49152,null,0,s.u,[o.j,o.p,o.F],null,null),(l()(),o.Bb(11,0,null,0,0,"img",[["style","background: #999; border-radius: 100px; height: 35px; width: 35px;"]],[[8,"src",4]],null,null,null,null)),(l()(),o.Bb(12,0,null,0,3,"ion-col",[["push-sm","1.45"],["size","7"]],null,null,null,i.V,i.k)),o.Ab(13,49152,null,0,s.u,[o.j,o.p,o.F],{size:[0,"size"]},null),(l()(),o.Bb(14,0,null,0,1,"p",[["id","username"]],null,null,null,null,null)),(l()(),o.Tb(15,null,["",""])),(l()(),o.Bb(16,0,null,0,4,"ion-col",[["size","2"]],null,null,null,i.V,i.k)),o.Ab(17,49152,null,0,s.u,[o.j,o.p,o.F],{size:[0,"size"]},null),(l()(),o.Bb(18,0,null,0,2,"ion-button",[["class","following-button"]],null,[[null,"click"]],(function(l,n,t){var o=!0;return"click"===n&&(o=!1!==l.component.following()&&o),o}),i.O,i.d)),o.Ab(19,49152,null,0,s.l,[o.j,o.p,o.F],null,null),(l()(),o.Tb(-1,0,[" Following "])),(l()(),o.Bb(21,0,null,null,50,"ion-content",[],null,null,null,i.W,i.l)),o.Ab(22,49152,null,0,s.v,[o.j,o.p,o.F],null,null),(l()(),o.Bb(23,0,null,0,5,"ion-fab",[["class","ion-hide-lg-up"],["horizontal","end"],["slot","fixed"],["vertical","bottom"]],null,null,null,i.Z,i.n)),o.Ab(24,49152,null,0,s.x,[o.j,o.p,o.F],{horizontal:[0,"horizontal"],vertical:[1,"vertical"]},null),(l()(),o.Bb(25,0,null,0,3,"ion-fab-button",[["id","add-post-button"]],null,[[null,"click"]],(function(l,n,t){var o=!0;return"click"===n&&(o=!1!==l.component.addPost()&&o),o}),i.Y,i.o)),o.Ab(26,49152,[[1,4]],0,s.y,[o.j,o.p,o.F],null,null),(l()(),o.Bb(27,0,null,0,1,"ion-icon",[["name","add"]],null,null,null,i.db,i.s)),o.Ab(28,49152,null,0,s.D,[o.j,o.p,o.F],{name:[0,"name"]},null),(l()(),o.Bb(29,0,null,0,3,"ion-refresher",[["slot","fixed"]],null,[[null,"ionRefresh"]],(function(l,n,t){var o=!0;return"ionRefresh"===n&&(o=!1!==l.component.doRefresh(t)&&o),o}),i.jb,i.x)),o.Ab(30,49152,null,0,s.eb,[o.j,o.p,o.F],null,null),(l()(),o.Bb(31,0,null,0,1,"ion-refresher-content",[],null,null,null,i.ib,i.y)),o.Ab(32,49152,null,0,s.fb,[o.j,o.p,o.F],null,null),(l()(),o.Bb(33,0,null,0,30,"ion-grid",[["class","ion-hide-md-down"]],null,null,null,i.bb,i.q)),o.Ab(34,49152,null,0,s.B,[o.j,o.p,o.F],null,null),(l()(),o.Bb(35,0,null,0,28,"ion-row",[["class","ion-justify-content-center"],["style","margin-top: 5%;"]],null,null,null,i.kb,i.z)),o.Ab(36,49152,null,0,s.kb,[o.j,o.p,o.F],null,null),(l()(),o.Bb(37,0,null,0,3,"ion-col",[["size","6"]],null,null,null,i.V,i.k)),o.Ab(38,49152,null,0,s.u,[o.j,o.p,o.F],{size:[0,"size"]},null),(l()(),o.qb(16777216,null,0,1,null,F)),o.Ab(40,278528,null,0,a.i,[o.W,o.S,o.x],{ngForOf:[0,"ngForOf"]},null),(l()(),o.Bb(41,0,null,0,22,"ion-col",[["push","0.5"],["size","2"]],null,null,null,i.V,i.k)),o.Ab(42,49152,null,0,s.u,[o.j,o.p,o.F],{push:[0,"push"],size:[1,"size"]},null),(l()(),o.Bb(43,0,null,0,20,"ion-row",[["class","user-details"],["style","position: fixed;"]],null,null,null,i.kb,i.z)),o.Ab(44,49152,null,0,s.kb,[o.j,o.p,o.F],null,null),(l()(),o.Bb(45,0,null,0,10,"ion-col",[["size","12"]],null,null,null,i.V,i.k)),o.Ab(46,49152,null,0,s.u,[o.j,o.p,o.F],{size:[0,"size"]},null),(l()(),o.Bb(47,0,null,0,8,"ion-row",[],null,null,null,i.kb,i.z)),o.Ab(48,49152,null,0,s.kb,[o.j,o.p,o.F],null,null),(l()(),o.Bb(49,0,null,0,2,"ion-col",[["size","2.1"]],null,null,null,i.V,i.k)),o.Ab(50,49152,null,0,s.u,[o.j,o.p,o.F],{size:[0,"size"]},null),(l()(),o.Bb(51,0,null,0,0,"img",[["style","background: #999; border-radius: 100px; height: 65px; width: 65px;"]],[[8,"src",4]],null,null,null,null)),(l()(),o.Bb(52,0,null,0,3,"ion-col",[["size","6"]],null,null,null,i.V,i.k)),o.Ab(53,49152,null,0,s.u,[o.j,o.p,o.F],{size:[0,"size"]},null),(l()(),o.Bb(54,0,null,0,1,"h6",[["style","font-size: 1.2em; font-weight: 700; position: relative; left: 10px;"]],null,null,null,null,null)),(l()(),o.Tb(55,null,["",""])),(l()(),o.Bb(56,0,null,0,7,"ion-col",[["size","12"]],null,null,null,i.V,i.k)),o.Ab(57,49152,null,0,s.u,[o.j,o.p,o.F],{size:[0,"size"]},null),(l()(),o.Bb(58,0,null,0,2,"ion-button",[["class","followed-button"]],null,[[null,"click"]],(function(l,n,t){var o=!0;return"click"===n&&(o=!1!==l.component.following()&&o),o}),i.O,i.d)),o.Ab(59,49152,null,0,s.l,[o.j,o.p,o.F],null,null),(l()(),o.Tb(60,0,[" Following (",") "])),(l()(),o.Bb(61,0,null,0,2,"ion-button",[["class","add-button"]],null,[[null,"click"]],(function(l,n,t){var o=!0;return"click"===n&&(o=!1!==l.component.addPost()&&o),o}),i.O,i.d)),o.Ab(62,49152,null,0,s.l,[o.j,o.p,o.F],null,null),(l()(),o.Tb(-1,0,[" Add Post "])),(l()(),o.Bb(64,0,null,0,7,"ion-grid",[["class","ion-hide-lg-up"]],null,null,null,i.bb,i.q)),o.Ab(65,49152,null,0,s.B,[o.j,o.p,o.F],null,null),(l()(),o.Bb(66,0,null,0,5,"ion-row",[["class","ion-justify-content-center"],["style","margin-top: 5%;"]],null,null,null,i.kb,i.z)),o.Ab(67,49152,null,0,s.kb,[o.j,o.p,o.F],null,null),(l()(),o.Bb(68,0,null,0,3,"ion-col",[["pull-lg","2"],["size-lg","10"],["size-md","8"],["size-sm","8"],["size-xs","12"]],null,null,null,i.V,i.k)),o.Ab(69,49152,null,0,s.u,[o.j,o.p,o.F],null,null),(l()(),o.qb(16777216,null,0,1,null,A)),o.Ab(71,278528,null,0,a.i,[o.W,o.S,o.x],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){var t=n.component;l(n,13,0,"7"),l(n,17,0,"2"),l(n,24,0,"end","bottom"),l(n,28,0,"add"),l(n,38,0,"6"),l(n,40,0,t.allPosts),l(n,42,0,"0.5","2"),l(n,46,0,"12"),l(n,50,0,"2.1"),l(n,53,0,"6"),l(n,57,0,"12"),l(n,71,0,t.allPosts)}),(function(l,n){var t=n.component;l(n,11,0,o.Fb(1,"",t.profilePicture,"")),l(n,15,0,t.userFullName),l(n,51,0,o.Fb(1,"",t.profilePicture,"")),l(n,55,0,t.userFullName),l(n,60,0,t.followedPostCount)}))}function P(l){return o.Vb(0,[(l()(),o.Bb(0,0,null,null,1,"app-posts",[],null,null,null,B,x)),o.Ab(1,114688,null,0,v,[m.m,p.a,d.a,s.Qb,r.b,z.a],null,null)],(function(l,n){l(n,1,0)}),null)}var j=o.xb("app-posts",v,P,{},{},[]),y=t("zAgk");const C=()=>t.e(46).then(t.bind(null,"ccua")).then(l=>l.AddPostPageModuleNgFactory),O=()=>Promise.all([t.e(0),t.e(49)]).then(t.bind(null,"E57e")).then(l=>l.PostPagePageModuleNgFactory),N=()=>Promise.all([t.e(3),t.e(48)]).then(t.bind(null,"8QiE")).then(l=>l.FollowingPageModuleNgFactory);class I{}t.d(n,"PostPageModuleNgFactory",(function(){return _}));var _=o.yb(u,[],(function(l){return o.Kb([o.Lb(512,o.m,o.jb,[[8,[e.a,j]],[3,o.m],o.D]),o.Lb(4608,a.l,a.k,[o.z,[2,a.s]]),o.Lb(4608,s.c,s.c,[o.F,o.g]),o.Lb(4608,s.Ib,s.Ib,[s.c,o.m,o.w]),o.Lb(4608,s.Mb,s.Mb,[s.c,o.m,o.w]),o.Lb(5120,o.d,(function(l,n,t){return[s.Sb(l,n,t)]}),[s.Rb,a.d,o.F]),o.Lb(4608,r.r,r.r,[]),o.Lb(4608,r.b,r.b,[]),o.Lb(1073742336,a.c,a.c,[]),o.Lb(1073742336,s.Fb,s.Fb,[]),o.Lb(1073742336,y.a,y.a,[]),o.Lb(1073742336,r.q,r.q,[]),o.Lb(1073742336,r.e,r.e,[]),o.Lb(1073742336,r.n,r.n,[]),o.Lb(1073742336,m.q,m.q,[[2,m.v],[2,m.m]]),o.Lb(1073742336,I,I,[]),o.Lb(1073742336,u,u,[]),o.Lb(256,s.Rb,void 0,[]),o.Lb(1024,m.k,(function(){return[[{path:"add-post",loadChildren:C},{path:"post-page/:_id",loadChildren:O},{path:"following",loadChildren:N}],[{path:"",component:v}]]}),[])])}))},dneo:function(l,n,t){"use strict";var o=t("8Y7J"),u=t("oBZk"),e=t("ZZ/e"),i=t("SVse");t("84P7"),t("iInd"),t("ENZJ"),t("Aso2"),t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return c}));var s=o.zb({encapsulation:0,styles:[[".comment-button[_ngcontent-%COMP%]{width:105px;--border-width:1px;--border-color:#005191;--border-style:solid;border-radius:5px;--color:#005191;font-size:.3em;margin-right:0}.follow-button[_ngcontent-%COMP%]{--color:white;--background:linear-gradient(#797, #799);font-size:.3em;width:105px}.unfollow-button[_ngcontent-%COMP%]{--color:white;--background:linear-gradient(#faa71b, #e99b14);font-size:.3em;width:105px}"]],data:{}});function r(l){return o.Vb(0,[(l()(),o.Bb(0,0,null,null,2,"ion-button",[["class","follow-button"]],null,[[null,"click"]],(function(l,n,t){var o=!0,u=l.component;return"click"===n&&(o=!1!==u.follow(u.postID)&&o),o}),u.O,u.d)),o.Ab(1,49152,null,0,e.l,[o.j,o.p,o.F],null,null),(l()(),o.Tb(2,0,[" Follow (",") "]))],null,(function(l,n){l(n,2,0,n.component.followingLength)}))}function a(l){return o.Vb(0,[(l()(),o.Bb(0,0,null,null,2,"ion-button",[["class","unfollow-button"]],null,[[null,"click"]],(function(l,n,t){var o=!0,u=l.component;return"click"===n&&(o=!1!==u.unFollow(u.postID)&&o),o}),u.O,u.d)),o.Ab(1,49152,null,0,e.l,[o.j,o.p,o.F],null,null),(l()(),o.Tb(2,0,[" Unfollow (",") "]))],null,(function(l,n){l(n,2,0,n.component.followingLength)}))}function c(l){return o.Vb(0,[(l()(),o.Bb(0,0,null,null,10,"ion-toolbar",[["style","--background: none;"]],null,null,null,u.vb,u.K)),o.Ab(1,49152,null,0,e.Db,[o.j,o.p,o.F],null,null),(l()(),o.Bb(2,0,null,0,8,"ion-buttons",[["slot","end"]],null,null,null,u.P,u.e)),o.Ab(3,49152,null,0,e.m,[o.j,o.p,o.F],null,null),(l()(),o.qb(16777216,null,0,1,null,r)),o.Ab(5,16384,null,0,i.j,[o.W,o.S],{ngIf:[0,"ngIf"]},null),(l()(),o.qb(16777216,null,0,1,null,a)),o.Ab(7,16384,null,0,i.j,[o.W,o.S],{ngIf:[0,"ngIf"]},null),(l()(),o.Bb(8,0,null,0,2,"ion-button",[["class","comment-button"]],null,[[null,"click"]],(function(l,n,t){var o=!0;return"click"===n&&(o=!1!==l.component.postPage()&&o),o}),u.O,u.d)),o.Ab(9,49152,null,0,e.l,[o.j,o.p,o.F],null,null),(l()(),o.Tb(10,0,[" Comments (",") "]))],(function(l,n){var t=n.component;l(n,5,0,!t.following&&!t.isUser),l(n,7,0,t.following&&!t.isUser)}),(function(l,n){l(n,10,0,n.component.comments.length)}))}},kcry:function(l,n,t){"use strict";var o=t("8Y7J"),u=t("oBZk"),e=t("ZZ/e"),i=t("SVse");t("u6v2"),t("ENZJ"),t("Aso2"),t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return p}));var s=o.zb({encapsulation:0,styles:[[".upvote[_ngcontent-%COMP%]{border-radius:5px;position:relative;--color:#005191}.upvote[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{color:#005191;font-size:40px}.downvote[_ngcontent-%COMP%]{border-radius:5px;padding-left:0;--color:#005191}.downvote[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{color:#005191;--font-size:40px}.upvoted-toast[_ngcontent-%COMP%]{--background:#005191}.downvoted-toast[_ngcontent-%COMP%]{--background:#FFB351}.followed-toast[_ngcontent-%COMP%]{--background:#24d8a8}.unfollowed-toast[_ngcontent-%COMP%]{--background:#FFB351}"]],data:{}});function r(l){return o.Vb(0,[(l()(),o.Bb(0,0,null,null,4,"ion-button",[["class","upvote"]],null,[[null,"click"]],(function(l,n,t){var o=!0;return"click"===n&&(o=!1!==l.component.upVotePost()&&o),o}),u.O,u.d)),o.Ab(1,49152,null,0,e.l,[o.j,o.p,o.F],null,null),(l()(),o.Bb(2,0,null,0,1,"ion-icon",[["size","large"],["src","../assets/icon/caret-up-outline.svg"]],null,null,null,u.db,u.s)),o.Ab(3,49152,null,0,e.D,[o.j,o.p,o.F],{size:[0,"size"],src:[1,"src"]},null),(l()(),o.Tb(4,0,[" "," "]))],(function(l,n){l(n,3,0,"large","../assets/icon/caret-up-outline.svg")}),(function(l,n){l(n,4,0,n.component.upVoteLength)}))}function a(l){return o.Vb(0,[(l()(),o.Bb(0,0,null,null,4,"ion-button",[["class","upvote"]],null,[[null,"click"]],(function(l,n,t){var o=!0;return"click"===n&&(o=!1!==l.component.upVotePost()&&o),o}),u.O,u.d)),o.Ab(1,49152,null,0,e.l,[o.j,o.p,o.F],null,null),(l()(),o.Bb(2,0,null,0,1,"ion-icon",[["size","large"],["src","../assets/icon/caret-up-outline-active.svg"]],null,null,null,u.db,u.s)),o.Ab(3,49152,null,0,e.D,[o.j,o.p,o.F],{size:[0,"size"],src:[1,"src"]},null),(l()(),o.Tb(4,0,[" "," "]))],(function(l,n){l(n,3,0,"large","../assets/icon/caret-up-outline-active.svg")}),(function(l,n){l(n,4,0,n.component.upVoteLength)}))}function c(l){return o.Vb(0,[(l()(),o.Bb(0,0,null,null,4,"ion-button",[["class","downvote"]],null,[[null,"click"]],(function(l,n,t){var o=!0;return"click"===n&&(o=!1!==l.component.downVotePost()&&o),o}),u.O,u.d)),o.Ab(1,49152,null,0,e.l,[o.j,o.p,o.F],null,null),(l()(),o.Bb(2,0,null,0,1,"ion-icon",[["size","large"],["src","../assets/icon/caret-down-outline.svg"]],null,null,null,u.db,u.s)),o.Ab(3,49152,null,0,e.D,[o.j,o.p,o.F],{size:[0,"size"],src:[1,"src"]},null),(l()(),o.Tb(4,0,[" "," "]))],(function(l,n){l(n,3,0,"large","../assets/icon/caret-down-outline.svg")}),(function(l,n){l(n,4,0,n.component.downVoteLength)}))}function b(l){return o.Vb(0,[(l()(),o.Bb(0,0,null,null,4,"ion-button",[["class","downvote"]],null,[[null,"click"]],(function(l,n,t){var o=!0;return"click"===n&&(o=!1!==l.component.downVotePost()&&o),o}),u.O,u.d)),o.Ab(1,49152,null,0,e.l,[o.j,o.p,o.F],null,null),(l()(),o.Bb(2,0,null,0,1,"ion-icon",[["size","large"],["src","../assets/icon/caret-down-outline-active.svg"]],null,null,null,u.db,u.s)),o.Ab(3,49152,null,0,e.D,[o.j,o.p,o.F],{size:[0,"size"],src:[1,"src"]},null),(l()(),o.Tb(4,0,[" "," "]))],(function(l,n){l(n,3,0,"large","../assets/icon/caret-down-outline-active.svg")}),(function(l,n){l(n,4,0,n.component.downVoteLength)}))}function p(l){return o.Vb(0,[(l()(),o.Bb(0,0,null,null,11,"ion-toolbar",[["style","--background: none"]],null,null,null,u.vb,u.K)),o.Ab(1,49152,null,0,e.Db,[o.j,o.p,o.F],null,null),(l()(),o.Bb(2,0,null,0,9,"ion-buttons",[["slot","start"]],null,null,null,u.P,u.e)),o.Ab(3,49152,null,0,e.m,[o.j,o.p,o.F],null,null),(l()(),o.qb(16777216,null,0,1,null,r)),o.Ab(5,16384,null,0,i.j,[o.W,o.S],{ngIf:[0,"ngIf"]},null),(l()(),o.qb(16777216,null,0,1,null,a)),o.Ab(7,16384,null,0,i.j,[o.W,o.S],{ngIf:[0,"ngIf"]},null),(l()(),o.qb(16777216,null,0,1,null,c)),o.Ab(9,16384,null,0,i.j,[o.W,o.S],{ngIf:[0,"ngIf"]},null),(l()(),o.qb(16777216,null,0,1,null,b)),o.Ab(11,16384,null,0,i.j,[o.W,o.S],{ngIf:[0,"ngIf"]},null)],(function(l,n){var t=n.component;l(n,5,0,!t.upVoted),l(n,7,0,t.upVoted),l(n,9,0,!t.downVoted),l(n,11,0,t.downVoted)}),null)}},u6v2:function(l,n,t){"use strict";t.d(n,"a",(function(){return e}));var o=t("mrSG"),u=(t("ENZJ"),t("Aso2"),t("ZZ/e"),t("2Vo4"));class e{constructor(l,n,t){this.posts=l,this.profile=n,this.toast=t,this.upVotes$=new u.a(null),this.downVotes$=new u.a(null),this.upVoters=[],this.downVoters=[],this.upVoted=!1,this.downVoted=!1}ngOnInit(){return o.b(this,void 0,void 0,(function*(){yield this.posts.getPostInfo(this.postID).subscribe(l=>{this.upVotes=l.upvotes,this.downVotes=l.downvotes,this.upVoters=l.upvoters,this.downVoters=l.downvoters,this.upVotes$.next(this.upVotes),this.downVotes$.next(this.downVotes),this.upVoteLength=this.upVotes$.getValue(),this.downVoteLength=this.downVotes$.getValue(),this.profile.getUserDetails().subscribe(l=>{let n=l.email,t=!1,o=!1;this.upVoters.find((function(l){if(l===n)return t=!0;console.log(`Upvoter: ${l}`)})),this.downVoters.find((function(l){if(l===n)return o=!0})),this.userEmail=n,this.upVoted=t,this.downVoted=o})})}))}upVotePost(){return o.b(this,void 0,void 0,(function*(){yield this.posts.upVotePost(this.postID,this.userEmail).subscribe(l=>{const n=l.upvotes,t=l.downvotes;if(console.log(l),this.upVotes$.next(n),this.downVotes$.next(t),this.upVoted=!0,this.upVoteLength=this.upVotes$.getValue(),this.downVoteLength=this.downVotes$.getValue(),!0===this.upVoted)return this.downVoted=!1}),this.upVotePostToast()}))}upVotePostToast(){return o.b(this,void 0,void 0,(function*(){(yield this.toast.create({cssClass:"upvoted-toast",message:"You have UPVOTED this post.",duration:2e3})).present()}))}downVotePost(){return o.b(this,void 0,void 0,(function*(){yield this.posts.downVotePost(this.postID,this.userEmail).subscribe(l=>{const n=l.upvotes,t=l.downvotes;if(console.log(l),this.upVotes$.next(n),this.downVotes$.next(t),this.downVoted=!0,this.upVoteLength=this.upVotes$.getValue(),this.downVoteLength=this.downVotes$.getValue(),!0===this.downVoted)return this.upVoted=!1}),this.downVoteToast()}))}downVoteToast(){return o.b(this,void 0,void 0,(function*(){(yield this.toast.create({cssClass:"downvoted-toast",message:"You have DOWNVOTED this post.",duration:2e3})).present()}))}}}}]);