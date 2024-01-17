// ... other imports
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InspectionMainScreenComponent } from './inspection-main-screen/inspection-main-screen.component';
import { SubQuestionScreenComponent } from './sub-question-screen/sub-question-screen.component';

const routes: Routes = [
  { path: '', redirectTo: '/inspection-main', pathMatch: 'full' },
  { path: 'inspection-main', component: InspectionMainScreenComponent },
  { path: 'sub-question/:id', component: SubQuestionScreenComponent },
  // Add other routes here if needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
