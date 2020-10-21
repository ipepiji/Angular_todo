import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    weekends: true,
    eventClick: this.handleEventClick.bind(this),
    events: [
      { title: 'Repair', date: '2020-10-27', display: 'background' },
      { title: 'Checking', date: '2020-10-30', display: 'background' }
    ],
    height: "100%",
    buttonText: {
      today:    'Today',
    },
    themeSystem: 'bootstrap'
  };

  handleEventClick(arg): void {
    Swal.fire({
      text: arg.event.title,
      icon: 'success'
    });
  }

}
