import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mbr',
  templateUrl: './mbr.component.html',
  styleUrls: ['./mbr.component.css']
})
export class MBRComponent implements OnInit {

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
