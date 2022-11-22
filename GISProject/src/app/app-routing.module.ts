import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Step1Component } from './components/step1/step1.component';
import { HomeComponent } from './components/home/home.component';
import { Step3Component } from './components/step3/step3.component';
import { Step2Component } from './components/step2/step2.component';
import { Step4Component } from './components/step4/step4.component';
import { Step5Component } from './components/step5/step5.component';

const routes: Routes = [
  { path: 'step1', component: Step1Component },
  { path: 'home', component: HomeComponent},
  { path: 'step3', component: Step3Component},
  { path: 'step2', component: Step2Component},
  { path: 'step4', component: Step4Component},
  { path: 'step5', component: Step5Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const rountingComponents = [
 Step1Component,
 HomeComponent,
 Step3Component,
 Step2Component,
 Step4Component,
 Step5Component,
];

