import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-low-income',
  templateUrl: './low-income.component.html',
  styleUrls: ['./low-income.component.css']
})
export class LowIncomeComponent implements OnInit {

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
