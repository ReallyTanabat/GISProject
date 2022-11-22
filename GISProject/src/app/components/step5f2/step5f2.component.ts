import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-step5f2',
  templateUrl: './step5f2.component.html',
  styleUrls: ['./step5f2.component.css']
})
export class Step5f2Component implements OnInit {

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
