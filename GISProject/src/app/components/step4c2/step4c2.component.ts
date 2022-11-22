import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-step4c2',
  templateUrl: './step4c2.component.html',
  styleUrls: ['./step4c2.component.css']
})
export class Step4c2Component implements OnInit {
texting: string = ""
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
