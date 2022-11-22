import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-step5c',
  templateUrl: './step5c.component.html',
  styleUrls: ['./step5c.component.css']
})
export class Step5cComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  mapOptions: google.maps.MapOptions = {
    center: { lat: 38.9987208, lng: -77.2538699 },
    zoom: 14
  }
  marker = {
    position: { lat: 38.9987208, lng: -77.2538699 },
  }

}
