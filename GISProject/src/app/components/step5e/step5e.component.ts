import { Component, OnInit, ViewChild } from '@angular/core';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-step5e',
  templateUrl: './step5e.component.html',
  styleUrls: ['./step5e.component.css']
})
export class Step5eComponent implements OnInit {showPop: boolean = false
  color: string = ""
  year: string = ""
  dataCheck: any[] = [];
  toShowData: any[] = []
  toShow: boolean = false
  object: any
  url: string = "https://438d-1-20-61-94.ap.ngrok.io"
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
        this.http.get<any>(this.url+'/api/quest5/e').subscribe(data => {
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
        lat: 46.31938391,
        lng: 6.936563608
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
