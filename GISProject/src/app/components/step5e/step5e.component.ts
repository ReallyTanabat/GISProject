import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-step5e',
  templateUrl: './step5e.component.html',
  styleUrls: ['./step5e.component.css']
})
export class Step5eComponent implements OnInit {

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
