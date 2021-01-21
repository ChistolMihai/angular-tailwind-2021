import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire';

import { AppComponent } from './app.component';
import { AppRoutes } from './app-routes';
import { LayoutComponent } from './layout/layout.component';
import { environment } from 'src/environments/environment';
import { DashboardModule } from './main/dashboard/dashboard.module';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutes,
    AngularFireModule.initializeApp(environment.firebaseConfig),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
