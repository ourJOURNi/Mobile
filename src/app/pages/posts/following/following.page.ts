import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostsService } from '../../../services/post.service';
import { ProfileService } from 'src/app/services/profile.service';
import { ToastController } from '@ionic/angular';
import { format } from 'date-fns';
import { formatDistanceToNow } from 'date-fns';
import { FollowIconComponent } from '../../../components/follow-icon/follow-icon.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-following',
  templateUrl: './following.page.html',
  styleUrls: ['./following.page.scss'],
})
export class FollowingPage implements OnInit {

  commentForm: FormGroup;
  userEmail;
  userFullName;
  date;
  allFollowedPosts;
  userID;

  constructor(
    private router: Router,
    public posts: PostsService,
    private profile: ProfileService,
    private toast: ToastController,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
     // Get the User's Followed Posts
     this.profile.getUserDetails().subscribe(
      details => {
        this.userID = details['_id'];
        this.posts.getFollowedPost(this.userID).subscribe(
          posts => {
            this.allFollowedPosts = Object.values(posts).reverse();

            for (const post of this.allFollowedPosts) {
              post.date = format( new Date(post.date), 'MMMM do, yyyy');
            }
            console.log(this.allFollowedPosts);
          }
        );
      });

     console.log('Got Followed Posts');

      // To collect comment data
     this.commentForm = this.formBuilder.group({
      comment: ['']
    });


  }

  postPage(post) {
    // tslint:disable-next-line: max-line-length
    this.router.navigate(['/home/posts/post-page', post._id]);
  }

  addPost() {
    this.router.navigate(['/home/posts/add-post']);
  }

  back() {
    this.router.navigate(['/home/posts']);
  }

  async comment(comment, postID) {

    // Reset Comment Input
    this.commentForm.reset();
    const date = await Date.now();
    console.log('Posting comment');
    console.log('Post ID: ' + postID);

    await this.posts.comment(
      postID,
      date,
      this.userFullName,
      this.userEmail,
      comment
    );

    await this.posts.getPostInfo(postID).subscribe(
      post => {
        for (let postComments of post['comments']) {
          postComments.date = formatDistanceToNow( new Date(postComments.date), {
            includeSeconds: true,
            addSuffix: true
          });
         }
        this.posts.commentsSubject$.next(post['comments'].reverse());
      });

    const toast = this.toast.create({
      message: 'Your comment has been added.',
      duration: 1500
    });

    toast.then(toast => toast.present());

    await this.router.navigate(['/home/posts/post-page', postID]);
  }

}
