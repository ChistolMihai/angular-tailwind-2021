import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiElementsRoutingModule } from './ui-elements-routing.module';
import { UiElementsComponent } from './ui-elements/ui-elements.component';


@NgModule({
  declarations: [UiElementsComponent],
  imports: [
    CommonModule,
    UiElementsRoutingModule
  ]
})
export class UiElementsModule { }
