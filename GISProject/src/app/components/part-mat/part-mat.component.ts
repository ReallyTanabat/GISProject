import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-part-mat',
  templateUrl: './part-mat.component.html',
  styleUrls: ['./part-mat.component.css']
})
export class PartMatComponent implements OnInit {

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
