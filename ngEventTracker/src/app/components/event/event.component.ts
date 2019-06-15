import { Event } from './../../model/event';
import { Component, OnInit } from '@angular/core';
import { EventServiceService } from 'src/app/services/event-service.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  showComplete = false;
  title = 'Events';
  newEvent :Event = new Event();
  editEvent: Event = null;
  selected = null;
  events: Event[] = []
  reload() {
    this.eventService.index().subscribe(
      good => {
        this.events = good;
        console.log(this.events);
      },
      bad => {
        console.log(bad);
      }
    )
  }
  getNumberOfEvents(): number {
    return this.events.length;
  }
  displayEvent(event: Event) {
    this.selected = event;
  }
  displayTable() {
    this.selected = null;
  }
  addEvent() {
    console.log(this.newEvent);
    this.eventService.create(this.newEvent).subscribe(
      good => {
        this.reload();
        this.newEvent = new Event();
      },
      bad => {
        console.log(bad);
      });
  }
  setEditEvent() {
    this.editEvent = Object.assign({}, this.selected);
    console.log(this.editEvent);
  }
  updateEvent(editEvent) {
    console.log(editEvent);
    this.eventService.update(editEvent).subscribe(
      good => {
        this.editEvent = null;
        this.reload();
      },
      bad => {
        console.log(bad);
      }
    );
  }
  deleteEvent(id) {
    this.eventService.destroy(id).subscribe(
      good => {
        this.reload();
      },
      bad => {
        console.log(bad);
      }
    );
  }

  
  constructor(private eventService: EventServiceService
  ) { }

  ngOnInit() {
    this.reload();



  }
}



