import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';

@Component({
  selector: 'app-step5',
  templateUrl: './step5.component.html',
  styleUrls: ['./step5.component.css']
})
export class Step5Component implements OnInit {
  showPop: boolean = false
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
  
  // mapOptions: google.maps.MapOptions = {
  //   center: { lat: 38.9987208, lng: -77.2538699 },
  //   zoom: 14
  // }
  // marker = {
  //   position:{lat: 38.9987208, lng: -77.2538699, }
    
  // }
  constructor(private http: HttpClient) { }
  
    ngOnInit(): void {
    }

    callAP(){
        this.http.get<any>(this.url+'/api/quest5/a/'+this.year).subscribe(data => {
        this.toShowData = data;
        this.object = data.data
        console.log("lat = ",this.object[1].latitude)
        this.toShow = true
        for(let i = 0; i<this.object.length;i++){
          this.positioning.push({ lat: this.object[i].latitude, lng: this.object[i].longitude})
        }
        console.log("current position = ",this.positioning)
    })
    }      

    @ViewChild(MapInfoWindow) infoWindow: MapInfoWindow | undefined;
    center: google.maps.LatLngLiteral = {
        lat: 24,
        lng: 12
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
