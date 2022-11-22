import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-step4c2',
  templateUrl: './step4c2.component.html',
  styleUrls: ['./step4c2.component.css']
})
export class Step4c2Component implements OnInit {
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
        this.http.get<any>(this.url+'/api/quest4/c/'+this.year+'/'+this.color).subscribe(data => {
        this.toShowData = data;
        console.log("toShowData = ",data.data[1].id)
        this.object = data.data
        console.log(this.object.id)
        this.toShow = true
    })
    }
    
    

}
