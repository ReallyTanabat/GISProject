import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-step5f1',
  templateUrl: './step5f1.component.html',
  styleUrls: ['./step5f1.component.css']
})
export class Step5f1Component implements OnInit {
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
