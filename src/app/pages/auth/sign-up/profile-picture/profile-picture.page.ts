import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from '../../../../services/auth.service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { File } from '@ionic-native/file/ngx';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';



@Component({
  selector: 'app-profile-picture',
  templateUrl: './profile-picture.page.html',
  styleUrls: ['./profile-picture.page.scss'],
  providers: [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}]
})
export class ProfilePicturePage implements OnInit {
  //  +++ Brainstorm +++
  //  Maybe I need to notify the server that this user didnt upload a profile picture?

  // Image of camera that is compatible with HTML
  profilePicture = '<image url>';

  constructor(
    private router: Router,
    private alertController: AlertController,
    private auth: AuthService,
    private camera: Camera,
    private location: Location) { }

  ngOnInit() {
    this.profilePicture = '';
  }

  goToUploadResumePage(data) {
    this.auth.getProfilePicture(data);
    console.log('Going to Resume Page >>');
    this.router.navigate(['/personal-info/profile-picture/upload-resume']);
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Skip',
      message: 'Are you sure you want to skip? You can always upload a picture in the future by going to your Profile.',
      buttons: [
        {
          text: 'Skip',
          handler: () => {
            this.router.navigate(['/personal-info/profile-picture/upload-resume']);
            console.log('Skipping Profile Picture...');
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancelling Profile Picture Upload Skip...');
          }
        }
      ]
    });

    await alert.present();
  }

  skip() {
    console.log('Skipping to Upload Resume >>');
    this.presentAlert();
    // this.router.navigate(['/personal-info/profile-picture/upload-resume']);
  }

  cancel() {
    console.log('Sign up cancelled');
    this.auth.clearUserInfo();
    // this.router.navigate(['']);
    this.location.back();
  }

  getPhotoFromCamera() {

    let options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true,
    };

    //  Get Picture from Camera
    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.profilePicture = (window as any).Ionic.WebView.convertFileSrc(imageData);
       //  Add this profile picture to UserInfo in AuthService
      this.auth.getProfilePicture(this.profilePicture);
     }, (err) => {
      alert('error ' + JSON.stringify(err));
     });
  }

  getPhotoFromGallery(selection) {

}


}
