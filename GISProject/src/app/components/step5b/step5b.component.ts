import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-step5b',
  templateUrl: './step5b.component.html',
  styleUrls: ['./step5b.component.css']
})
export class Step5bComponent implements OnInit {

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
