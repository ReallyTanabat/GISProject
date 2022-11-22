import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-step5a',
  templateUrl: './step5a.component.html',
  styleUrls: ['./step5a.component.css']
})
export class Step5aComponent implements OnInit {

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
