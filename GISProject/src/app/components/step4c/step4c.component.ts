import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-step4c',
  templateUrl: './step4c.component.html',
  styleUrls: ['./step4c.component.css']
})
export class Step4cComponent implements OnInit {
texting: string = ""
  constructor() { }

  ngOnInit(): void {
    console.log(this.texting)
  }
  title = 'mdb-angular-ui-kit-free';


}
