import { Component, OnInit, OnDestroy } from '@angular/core';
import { ToastController, AlertController, LoadingController, NavController } from '@ionic/angular';
import { AuthService } from '../../services/auth.service';
import { ProfileService } from '../../services/profile.service';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { BehaviorSubject, Subscription } from 'rxjs';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-profile',
  templateUrl: 'profile.page.html',
  styleUrls: ['profile.page.scss']
})
export class ProfilePage implements OnInit, OnDestroy {
  detailsSub: Subscription;
  routerSub: Subscription;
  userObject: any = {
    fullName: '',
    about: '',
    city: '',
    state: '',
    zip: '',
    gender: '',
    dob: '',
    school: '',
    grade: '',
    profilePicture: '',
    resume: '',
    email: '',
    phone: ''
  };
  user: any;

  constructor(
    private auth: AuthService,
    private profile: ProfileService,
    private storage: Storage,
    private router: Router,
    private toast: ToastController,
    private alert: AlertController,
    private loading: LoadingController
    ) {
    }

    ngOnDestroy() {
      this.detailsSub.unsubscribe();
      this.profile.fullName.unsubscribe();
      this.profile.about.unsubscribe();
      this.profile.city.unsubscribe();
      this.profile.state.unsubscribe();
      this.profile.zip.unsubscribe();
      this.profile.gender.unsubscribe();
      this.profile.school.unsubscribe();
      this.profile.grade.unsubscribe();
      this.profile.profilePicture.unsubscribe();
      this.profile.email.unsubscribe();
      this.profile.phone.unsubscribe();
      this.profile.resume.unsubscribe();
    }

    ngOnInit() {
      this.trackRoute();
      this.detailsSub = this.profile.getUserDetails()
        .subscribe(
          res => {
            console.log(res);
            const fullName = res['fullName'];
            const about = res['about'];
            const city = res['city'];
            const state = res['state'];
            const zip = res['zip'];
            const gender = res['gender'];
            const dob = res['dob'];
            const school = res['school'];
            const grade = res['grade'];
            const profilePicture = res['profilePicture'];
            const resume = res['resume'];
            const email = res['email'];
            const phone = res['phone'];

            // Send initial profile values to Profile Service;
            // Have to initial these values from the Profile Component
            this.profile.fullName.next(fullName);
            this.profile.about.next(about);
            this.profile.city.next(city);
            this.profile.state.next(state);
            this.profile.zip.next(zip);
            this.profile.gender.next(gender);
            this.profile.dob.next(dob);
            this.profile.school.next(school);
            this.profile.grade.next(grade);
            this.profile.profilePicture.next(profilePicture);
            this.profile.resume.next(resume);
            this.profile.email.next(email);
            this.profile.phone.next(phone);

            // Subscribe to all the B.Subjects to get live updates of value changes.
            this.profile.fullName.subscribe(data => {this.userObject.fullName = data;
              }
            );
            this.profile.about.subscribe(data => {
                this.userObject.about = data;
              }
            );
            this.profile.city.subscribe(data => {this.userObject.city = data;
              }
            );
            this.profile.state.subscribe(data => {
                this.userObject.state = data;
              }
            );
            this.profile.zip.subscribe(data => {this.userObject.zip = data;
              }
            );
            this.profile.gender.subscribe(data => {
                this.userObject.gender = data;
              }
            );
            this.profile.dob.subscribe(data => {this.userObject.dob = data;
              }
            );
            this.profile.school.subscribe(data => {
                this.userObject.school = data;
              }
            );
            this.profile.grade.subscribe(data => {
                this.userObject.grade = data;
              }
            );
            this.profile.profilePicture.subscribe(data => {
                this.userObject.profilePicture = data;
              }
            );
            this.profile.resume.subscribe(data => {
                this.userObject.resume = data;
              }
            );
            this.profile.email.subscribe(data => {
                this.userObject.email = data;
              }
            );
            this.profile.phone.subscribe(data => {
              this.userObject.phone = data;
            }
          );
    });
  }
  trackRoute() {
    this.routerSub = this.router.events.pipe(
      filter(e => e instanceof NavigationEnd)).subscribe(
      data => {
        console.log(data['url']);
        let url = data['url'];
        if(url.includes('/home/profile/change') ||
           url.includes('/home/profile/view-resume') ||
           url.includes('/home/profile/update-resume')
        ) {
          console.log('Hide Tab Bar!');
          let tabBar = document.getElementById('tabBar');
          tabBar.style.height = '0px'
          tabBar.style.transition = '1s'
        } else {
          let tabBar = document.getElementById('tabBar');
          console.log(tabBar);
          tabBar.style.height = '50px'
          tabBar.style.transition = '1s'
        }
      });
  }
    clearToken() {
      // ONLY FOR TESTING!
      this.storage.remove('access_token');

      const toast = this.toast.create({
        message: 'JWT removed',
        duration: 3000
      });
      toast.then(toast => toast.present());
    }

    editPage() {
      this.router.navigate(['/home/profile/edit-profile-page']);
    }

    changeProfilePicture() {
      console.log('Navigating to Change Profile Page');
      this.router.navigate(['/home/profile/change-profile-picture', this.userObject.profilePicture]);
    }

    updateResume() {
      console.log('Navigating to Change Resume Page');
      this.router.navigate(['/home/profile/view-resume']);
    }

    async confirmLogout() {
      const toast = this.toast.create({
        message: 'User has been logged out',
        duration: 3000
      });

      const loading = await this.loading.create({
        message: 'Logging out...',
        duration: 1000
      });

      const alert = await this.alert.create({
        header: 'Logout',
        cssClass: 'alert',
        message: 'Are you sure you want to logout?',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            handler: () => {
              console.log('Canceling logout');
              this.profile.fullName.next('');
              this.profile.about.next('');
              this.profile.city.next('');
              this.profile.state.next('');
              this.profile.zip.next('');
              this.profile.gender.next('');
              this.profile.dob.next('');
              this.profile.school.next('');
              this.profile.grade.next('');
              this.profile.profilePicture.next('');
              this.profile.resume.next('');
              this.profile.email.next('');
              this.router.navigate(['/home/profile']);
            }
          },
          {
            text: 'Logout',
            handler: () => {
              console.log('Logging out');
              this.auth.logout();
              loading.present();
              toast.then(t => t.present());
            }}
        ]
      });

      await alert.present();
    }
    changeEmail() {
      console.log('Navigating to Change Email Page');
      this.router.navigate(['/home/profile/change-email']);
    }
    changePhone() {
      console.log('Navigating to Change Phone Page');
      this.router.navigate(['/home/profile/change-phone']);
    }
    changeAbout() {
      console.log('Navigating to Change About Page');
      // tslint:disable-next-line: max-line-length
      this.router.navigate(['/home/profile/change-about/', this.userObject.about]);
    }
    changePassword() {
      console.log('Navigating to Change Password Page');
      this.router.navigate(['/home/profile/change-password']);
    }
    changePhoneNumber() {
      console.log('Navigating to Change Phone Number Page');
      this.router.navigate(['/home/profile/change-phone', this.userObject.phone]);
    }
    changeSchool() {
      console.log('Navigating to Change School Page');
      this.router.navigate(['/home/profile/change-school', this.userObject.school, this.userObject.grade]);
    }
}
