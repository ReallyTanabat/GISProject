import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LowIncomeComponent } from './components/low-income/low-income.component';
import { MBRComponent } from './components/mbr/mbr.component';
import { PartMatComponent } from './components/part-mat/part-mat.component';
import { PopulationsComponent } from './components/populations/populations.component';

const routes: Routes = [
  { path: 'lowin', component: LowIncomeComponent },
  { path: 'mbr', component: MBRComponent},
  { path: 'part-mat', component: PartMatComponent},
  { path: 'populations', component: PopulationsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const rountingComponents = [
 LowIncomeComponent,
 MBRComponent,
 PartMatComponent,
 PopulationsComponent,
];

