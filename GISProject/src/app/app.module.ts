import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { GoogleMapsModule } from '@angular/google-maps'


import { AppComponent } from './app.component';
import { PartMatComponent } from './components/part-mat/part-mat.component';
import { PopulationsComponent } from './components/populations/populations.component';
import { LowIncomeComponent } from './components/low-income/low-income.component';
import { MBRComponent } from './components/mbr/mbr.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule, rountingComponents } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    PartMatComponent,
    PopulationsComponent,
    LowIncomeComponent,
    MBRComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbPaginationModule, 
    NgbAlertModule,
    GoogleMapsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

