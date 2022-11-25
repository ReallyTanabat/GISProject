import { Component, OnInit, ViewChild } from '@angular/core';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-step5c',
  templateUrl: './step5c.component.html',
  styleUrls: ['./step5c.component.css']
})
export class Step5cComponent implements OnInit {showPop: boolean = false
  color: string = ""
  year: string = ""
  dataCheck: any[] = [];
  toShowData: any[] = []
  toShow: boolean = false
  object: any
  url: string = "http://c778-1-20-63-32.ap.ngrok.io"
  lati: any[] = []
  longti: any[] = []
  positioning: any[] = []
  
  // mapOptions: google.maps.MapOptions = {
  //   center: { lat: 38.9987208, lng: -77.2538699 },
  //   zoom: 14
  // }
  // marker = {
  //   position:{lat: 38.9987208, lng: -77.2538699, }
    
  // }
  constructor(private http: HttpClient) { }
  
    ngOnInit(): void {
      this.callAP()
    }

    callAP(){
        this.http.get<any>(this.url+'/api/quest5/c').subscribe(data => {
        this.toShowData = data;
        this.object = data.data
        console.log("lat = ",this.object[1].latitude)
        this.toShow = true
        for(let i = 0; i<this.object.length;i++){
          this.positioning.push({ lat: this.object[i].latitude, lng: this.object[i].longitude})
         // this.positioning.push({ lng: this.object[i].latitude, lat: this.object[i].longitude})
        }
        console.log("current position = ",this.positioning)
    })
    }      

    @ViewChild(MapInfoWindow) infoWindow: MapInfoWindow | undefined;
    center: google.maps.LatLngLiteral = {
        lat: 13.74622118,
        lng:100.5544779
    };
    markerPositions: google.maps.LatLngLiteral[] = this.positioning;
    zoom = 4;
    addMarker(event: google.maps.MapMouseEvent) {
        if (event.latLng != null) this.markerPositions.push(event.latLng.toJSON());
    }
    openInfoWindow(marker: MapMarker) {
        if (this.infoWindow != undefined) this.infoWindow.open(marker);
    }

}
