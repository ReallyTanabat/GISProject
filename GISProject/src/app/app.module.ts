import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { GoogleMapsModule } from '@angular/google-maps'
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { Step3Component } from './components/step3/step3.component';
import { Step2Component } from './components/step2/step2.component';
import { Step1Component } from './components/step1/step1.component';
import { HomeComponent } from './components/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule, rountingComponents } from './app-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { Step4Component } from './components/step4/step4.component';
import { Step5Component } from './components/step5/step5.component';
import { Step4bComponent } from './components/step4b/step4b.component';
import { Step4cComponent } from './components/step4c/step4c.component';
import { Step4c2Component } from './components/step4c2/step4c2.component';
import { Step4dComponent } from './components/step4d/step4d.component';
import { Step4d2Component } from './components/step4d2/step4d2.component';
import { MemberComponent } from './components/member/member.component';
import { HttpClientModule } from '@angular/common/http';
import { Step5bComponent } from './components/step5b/step5b.component';
import { Step5cComponent } from './components/step5c/step5c.component';
import { Step5dComponent } from './components/step5d/step5d.component';
import { Step5eComponent } from './components/step5e/step5e.component';
import { Step5f1Component } from './components/step5f1/step5f1.component';
import { Step5f2Component } from './components/step5f2/step5f2.component';
import { Step5aComponent } from './components/step5a/step5a.component';
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    Step3Component,
    Step2Component,
    Step1Component,
    HomeComponent,
    NavbarComponent,
    Step4Component,
    Step5Component,
    Step4bComponent,
    Step4cComponent,
    Step4c2Component,
    Step4dComponent,
    Step4d2Component,
    MemberComponent,
    Step5bComponent,
    Step5cComponent,
    Step5dComponent,
    Step5eComponent,
    Step5f1Component,
    Step5f2Component,
    Step5aComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbPaginationModule, 
    NgbAlertModule,
    GoogleMapsModule,
    MdbCheckboxModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

