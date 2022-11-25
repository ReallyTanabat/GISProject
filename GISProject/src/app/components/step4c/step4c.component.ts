import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-step4c',
  templateUrl: './step4c.component.html',
  styleUrls: ['./step4c.component.css']
})
export class Step4cComponent implements OnInit {
texting: string = ""
dataCheck: any[] = [];
toShowData: any[] = []
toShow: boolean = false
object: any
url: string = "http://c778-1-20-63-32.ap.ngrok.io"
constructor(private http: HttpClient) { }

  ngOnInit(): void {

  }
  
  callAP(){
    console.log(this.texting)
      this.http.get<any>(this.url+'/api/quest4/c/'+this.texting).subscribe(data => {
      this.toShowData = data;
      console.log("toShowData = ",data.data[1].id)
      this.object = data.data
      console.log(this.object)
      this.toShow = true
  })
  }
  
  


}
