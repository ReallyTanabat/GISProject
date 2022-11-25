import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Step1Component } from './components/step1/step1.component';
import { HomeComponent } from './components/home/home.component';
import { Step3Component } from './components/step3/step3.component';
import { Step2Component } from './components/step2/step2.component';
import { Step4Component } from './components/step4/step4.component';
import { Step5Component } from './components/step5/step5.component';
import { Step4bComponent } from './components/step4b/step4b.component';
import { Step4cComponent } from './components/step4c/step4c.component';
import { Step4c2Component } from './components/step4c2/step4c2.component';
import { Step4d2Component } from './components/step4d2/step4d2.component';
import { Step4dComponent } from './components/step4d/step4d.component';
import { MemberComponent } from './components/member/member.component';
import { Step5aComponent } from './components/step5a/step5a.component';
import { Step5bComponent } from './components/step5b/step5b.component';
import { Step5cComponent } from './components/step5c/step5c.component';
import { Step5dComponent } from './components/step5d/step5d.component';
import { Step5eComponent } from './components/step5e/step5e.component';
import { Step5f1Component } from './components/step5f1/step5f1.component';
import { Step5f2Component } from './components/step5f2/step5f2.component';
import { FooterComponent } from './components/footer/footer.component';

const routes: Routes = [
  { path: '', redirectTo:'home', pathMatch:'full'},
  { path: 'step1', component: Step1Component },
  { path: 'home', component: HomeComponent},
  { path: 'step3', component: Step3Component},
  { path: 'step2', component: Step2Component},
  { path: 'step4', component: Step4Component},
  { path: 'step5', component: Step5Component},
  { path: 'step5a', component: Step5aComponent},
  { path: 'step5b', component: Step5bComponent},
  { path: 'step5c', component: Step5cComponent},
  { path: 'step5d', component: Step5dComponent},
  { path: 'step5e', component: Step5eComponent},
  { path: 'step5f1', component: Step5f1Component},
  { path: 'step5f2', component: Step5f2Component},
  { path: 'step4b', component: Step4bComponent},
  { path: 'step4c', component: Step4cComponent},
  { path: 'step4c2', component: Step4c2Component},
  { path: 'step4d', component: Step4dComponent},
  { path: 'step4d2', component: Step4d2Component},
  { path: 'member', component: MemberComponent},
  { path: 'footer', component: FooterComponent}

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
 Step5aComponent,
 Step5bComponent,
 Step5cComponent,
 Step5dComponent,
 Step5eComponent,
 Step5f1Component,
 Step5f2Component,
 FooterComponent,
 Step4c2Component,
 Step4cComponent,
 Step4d2Component,
 Step4dComponent,

];

