import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventsService } from '../../../services/events.service';
import { ProfileService } from 'src/app/services/profile.service';
import { format, formatDistanceToNow } from 'date-fns';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-going',
  templateUrl: './going.page.html',
  styleUrls: ['./going.page.scss'],
})
export class GoingPage implements OnInit {
  goingToEvents;
  userEmail;
  id;

  constructor(
    private router: Router,
    private events: EventsService,
    private profile: ProfileService,
    private toast: ToastController) { }

  ngOnInit() {

    // Get the User's details
    this.profile.getUserDetails().subscribe(
     details => {
       this.id = details['_id'];
       this.userEmail = details['email'];

       console.log('getting event user ' + this.id + ' is going to');
       this.events.getEventsGoing(this.id).subscribe( events => {
        this.goingToEvents = Object.values(events);
        this.goingToEvents.reverse();
        console.log(this.goingToEvents);

        for (const event of this.goingToEvents) {
          event.date = format( new Date(event.date), 'MMMM dd, yyyy');
          event.time = format( new Date(event.date), 'hh:mm a');
          event.dateCreated = formatDistanceToNow( new Date(event.dateCreated), {
            includeSeconds: true,
            addSuffix: true
          });
        }

      // for (const event of this.goingToEvents) {
      //   event.date = format( new Date(event.date), 'MMMM-dd-yyyy');
      //   event.dateCreated = formatRelative( new Date(event.dateCreated), new Date(event.dateCreated));
      //   event.time = format( new Date(event.date), 'hh:mm a');
      // }
    });
     });
  }

  eventPage(event) {
    // tslint:disable-next-line: max-line-length
    this.router.navigate(['/home/events/events-page', event._id, event.title, event.addressOne,  event.addressOne,  event.city,  event.state, event.zip, event.dateCreated, event.date, event.time, event.photo, event.description]);
  }

  goBack() {
    this.router.navigate(['/home/events']);
  }

  cancel(eventID) {
    this.presentNotGoingToast();
    console.log(`Removing ${eventID} from this Users eventsGoing property`);;
    this.events.notGoingToEvent(eventID, this.userEmail, this.id).subscribe(
      events => {
        const eventsGoing = this.events.eventsGoing$.getValue();

        for (let i = 0; i < eventsGoing.length; i++) {
          if (eventsGoing[i] === eventID) {
            eventsGoing.splice(i, 1);
          }
        }
        console.log(eventsGoing);

        this.events.eventsGoing$.next(eventsGoing);
      }
    );
  }

  async presentNotGoingToast() {
    const toast = await this.toast.create({
      message: 'You are no longer going to event. It has been removed from your "Going" list',
      duration: 2000
    });
    toast.present();
  }

}
