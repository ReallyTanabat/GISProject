import { Component, OnInit, ViewChild } from '@angular/core';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-step5f1',
  templateUrl: './step5f1.component.html',
  styleUrls: ['./step5f1.component.css']
})
export class Step5f1Component implements OnInit {showPop: boolean = false
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
      if(this.positioning.length != 0){
        this.positioning = []
        this.markerPositions = []
      }

    }

    callAP(){
      if(this.positioning.length != 0){
        this.positioning = []
        this.markerPositions = []
      }
     
        this.http.get<any>(this.url+'/api/quest5/f/'+this.year).subscribe(data => {
        this.toShowData = data;
        this.object = data.data
        this.toShow = true
        this.markerPositions = this.positioning
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
