import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormGroup, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-fair-volunteer-register',
  templateUrl: './fair-volunteer-register.page.html',
  styleUrls: ['./fair-volunteer-register.page.scss'],
})
export class FairVolunteerRegisterPage implements OnInit {
  resgisterForm: FormGroup;

  constructor(
    private modal: ModalController,
    private formBuilder: FormBuilder) { }

    ngOnInit() {
      this.resgisterForm = this.formBuilder.group({
        fullName: ['', Validators.required, Validators.name],
        email: ['', [Validators.required, Validators.email]],
        lunch: ['', [Validators.required]],
        phone: ['', [Validators.required]],
        school: ['', [Validators.required]],
      });
    }

    cancel() {
      this.modal.dismiss();
   }

   confirm() {
    this.modal.dismiss();
   }

}