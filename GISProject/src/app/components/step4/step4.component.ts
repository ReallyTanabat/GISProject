import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-step4',
  templateUrl: './step4.component.html',
  styleUrls: ['./step4.component.css']
})
export class Step4Component implements OnInit {
  dataCheck: any[] = []
  constructor() { }

  ngOnInit(): void {
    this.dataCheck = [
      {
      "No": 1,
      "Country": "Thailand",
      "City": "Bangkok",
      "PM": "High"
      },
      {
        "No": 1,
        "Country": "Thailand",
        "City": "Bangkok",
        "PM": "High"
      },
      {
        "No": 1,
        "Country": "Thailand",
        "City": "Bangkok",
        "PM": "High"
      },
        

    ]
    
  }

}
