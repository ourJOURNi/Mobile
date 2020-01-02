import { Injectable, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Platform, AlertController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  BACKEND_URL = environment.url;
  activeEmail = '';
  user = {};

  fullName = new BehaviorSubject('');
  addressOne = new BehaviorSubject('');
  addressTwo = new BehaviorSubject('');
  phone = new BehaviorSubject('');
  city = new BehaviorSubject('');
  state = new BehaviorSubject('');
  zip = new BehaviorSubject('');
  gender = new BehaviorSubject('');
  dob = new BehaviorSubject('');
  school = new BehaviorSubject('');
  grade = new BehaviorSubject('');
  profilePicture = new BehaviorSubject('');
  resume = new BehaviorSubject('');
  email = new BehaviorSubject('');


  constructor(
    private http: HttpClient,
    private storage: Storage,
    private alertController: AlertController,
    private helper: JwtHelperService,
    private auth: AuthService,
    private router: Router,
    private toastController: ToastController) {

      // Needs the User's email address from the JSON Web Token stored on device.
      this.activeEmail = this.auth.user.email;
     }

    //  Gets User Details from Server to populate the Profile tab with User information.
   getUserDetails() {
      return this.http.post(`${this.BACKEND_URL}/api/home/user`, {email: this.activeEmail});
  }

    changeEmail(activeEmail, newEmail, password) {
      // tslint:disable-next-line: max-line-length
      return this.http.post(`${this.BACKEND_URL}/api/home/user/change-email`, {
        oldEmail: this.activeEmail,
        email: newEmail,
        password: password})
          .subscribe( data => {
            if ( data === true ) {
              this.email.next(newEmail);
              this.activeEmail = newEmail;
              this.router.navigate(['/home/user']);
              let toast = this.toastController.create({
                message: `You have changed your email address to ${this.activeEmail}.`,
                duration: 3000
              });
              toast.then(t => t.present());
             } else {
              return console.log('Passwords dont match');
            }
      });
    }

    async changePassword(activeEmail, oldPassword, newPassword, reTypeNewPassword ) {
      return await this.http.post(`${this.BACKEND_URL}/api/home/user/change-password`, {
        oldPassword,
        email: activeEmail,
        newPassword,
        reTypeNewPassword
      })
        .subscribe( data => {
          // if the passwords match, navigate back to landing page
          if ( data === true ) {
            console.log('TRUE');
            this.router.navigate(['']);
            let toast = this.toastController.create({
              message: 'Please login with your new Password',
              duration: 3000
            });
            toast.then(t => t.present());
           } else {
             console.log('Passwords dont match!');
           }
        });
    }

    async changePhone(email, newNumber, password) {
      return await this.http.post(`${this.BACKEND_URL}/api/home/user/change-phone`, {
        newNumber,
        password,
        email
      })
      .subscribe(data => {
        if ( data === true ) {
          console.log('Changing phone number...');
          this.phone.next(newNumber);
          this.router.navigate(['/home/user']);
          const toast = this.toastController.create({
            message: `Phone Number changed to ${newNumber}`,
            duration: 3000
          });
          toast.then(t => t.present());
         } else {
           console.log('Passwords dont match!');
         }
      });
    }

    async changeAddress(email, addressOne, addressTwo, city, state, zip, password) {
      return await this.http.post(`${this.BACKEND_URL}/api/home/user/change-address`, {
        email,
        addressOne,
        addressTwo,
        city,
        state,
        zip,
        password
      }).subscribe(data => {
        if ( data === true ) {
          this.addressOne.next(addressOne);
          this.addressTwo.next(addressTwo);
          this.city.next(city);
          this.state.next(state);
          this.zip.next(zip);
          this.router.navigate(['/home/user/change-address/:addressOne/:addressTwo/:city/:state/:zip/confirm']);
          let toast = this.toastController.create({
            // tslint:disable-next-line: max-line-length
            message: `You have changed your address to ${addressOne} ${addressTwo} ,${city}, ${state}, ${zip}.`,
            duration: 3000
          });
          toast.then(t => t.present());
         } else {
          return console.log('Passwords dont match');
        }
  });
    }

    async changeSchool(email, newSchool, newGrade, password) {
      return await this.http.post(`${this.BACKEND_URL}/api/home/user/change-school`, {
        email,
        newSchool,
        newGrade,
        password
      }).subscribe(data => {
        if ( data === true ) {
          this.school.next(newSchool);
          this.grade.next(newGrade);
          this.router.navigate(['/home/user/change-school/:school/:grade/confirm']);
         } else {
          return console.log('Passwords dont match');
        }
      });
    }

    async changeProfilePicture(email, newPicture, password) {
      return await this.http.post(`${this.BACKEND_URL}/api/home/user/change-school`, {
        email,
        newPicture,
        password
      }).subscribe(data => {
        if ( data === true ) {
          console.log('Changing Resume...');
          this.profilePicture.next(newPicture);
          this.router.navigate([`/home/user/change-school/:school/:grade/confirm`]);
         } else {
          return console.log('Passwords dont match');
        }
      });
    }

    async changeResume(email, newResume, password) {
      return await this.http.post(`${this.BACKEND_URL}/api/home/user/change-school`, {
        email,
        newResume,
        password
      }).subscribe(data => {
        if ( data === true ) {
          console.log('Changing Resume...');
          this.resume.next(newResume);
          this.router.navigate(['/home/user/change-school/:school/:grade/confirm']);
         } else {
          return console.log('Passwords dont match');
        }
      });
    }

    // Delete User
  delete() {
    console.log('Deleted User');
  }
}