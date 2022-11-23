import { Component, OnInit, ViewChild } from '@angular/core';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-step5d',
  templateUrl: './step5d.component.html',
  styleUrls: ['./step5d.component.css']
})
export class Step5dComponent implements OnInit {showPop: boolean = false
  color: string = ""
  year: string = ""
  dataCheck: any[] = [];
  toShowData: any[] = []
  toShow: boolean = false
  object: any
  url: string = "http://f1ac-1-20-63-200.ap.ngrok.io"
  lati: any[] = []
  longti: any[] = []
  positioning: any[] = []
  showing: boolean = false
  
  // mapOptions: google.maps.MapOptions = {
  //   center: { lat: 38.9987208, lng: -77.2538699 },
  //   zoom: 14
  // }
  // marker = {
  //   position:{lat: 38.9987208, lng: -77.2538699, }
    
  // }
  constructor(private http: HttpClient) { }
  
    ngOnInit(): void {
      this.http.get<any>(this.url+'/api/quest5/d').subscribe(data => {
        this.toShowData = data;
        this.object = data.data
        console.log("lat = ",this.object[1].latitude)
        this.toShow = true
        for(let i = 0; i<this.object.length;i++){
          //this.positioning.push({ lat: this.object[i].latitude, lng: this.object[i].longitude})
          this.positioning.push({ lat: this.object[i].longitude, lng: this.object[i].latitude})
        }
        console.log("current position = ",this.positioning)
        this.showing = true
        
    })  
    }

   

  center: google.maps.LatLngLiteral = {
      lat: 13.74622118,
      lng: 100.5544779
  };
  zoom = 4;
  vertices: google.maps.LatLngLiteral[] = this.positioning
  checkFN(){
  }
}
