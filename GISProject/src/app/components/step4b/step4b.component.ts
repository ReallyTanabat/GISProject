import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-step4b',
  templateUrl: './step4b.component.html',
  styleUrls: ['./step4b.component.css']
})
export class Step4bComponent implements OnInit { dataCheck: any[] = [];
  toShowData: any[] = []
  object: any
  url: string = "http://1769-1-20-61-94.ap.ngrok.io"
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  
    this.http.get<any>(this.url+'/api/quest4/b').subscribe(data => {
      this.toShowData = data;
      console.log("toShowData = ",data.data[1].id)
      this.object = data.data
      console.log(this.object.id)
  })
  }

}
