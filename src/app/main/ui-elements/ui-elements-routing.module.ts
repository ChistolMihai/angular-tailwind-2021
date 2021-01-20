import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UiElementsComponent } from './ui-elements/ui-elements.component';

const routes: Routes = [
  { path: '', component: UiElementsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UiElementsRoutingModule { }
