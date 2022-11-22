import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-step4d',
  templateUrl: './step4d.component.html',
  styleUrls: ['./step4d.component.css']
})
export class Step4dComponent implements OnInit {
  showPop: boolean = false
  color: string = ""
  year: string = ""
  dataCheck: any[] = [];
  toShowData: any[] = []
  toShow: boolean = false
  object: any
  url: string = "http://1769-1-20-61-94.ap.ngrok.io"
  constructor(private http: HttpClient) { }
  
    ngOnInit(): void {
  
    }

    callAP(){
        this.http.get<any>(this.url+'/api/quest4/d/'+this.year+'/'+this.color).subscribe(data => {
        this.toShowData = data;
        this.object = data.data
        console.log("pop = ",this.object)
        this.toShow = true
    })
    }

}
