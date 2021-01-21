import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CrudComponent } from './dashboard/crud/crud.component';


@NgModule({
  declarations: [DashboardComponent, CrudComponent],
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule,
    DashboardRoutingModule,
  ]
})
export class DashboardModule { }
