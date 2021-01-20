import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [
      {
        path: 'projects',
        loadChildren: () => import('./main/projects/projects.module').then(mod => mod.ProjectsModule)
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./main/dashboard/dashboard.module').then(mod => mod.DashboardModule)
      },
      {
        path: 'ui-elements',
        loadChildren: () => import('./main/ui-elements/ui-elements.module').then(mod => mod.UiElementsModule)
      },
      {
        path: 'calendar',
        loadChildren: () => import('./main/calendar/calendar.module').then(mod => mod.CalendarModule)
      },
    ]
  },
  {
    path: 'auth',
    loadChildren: () => import('./main/security/security.module').then(mod => mod.SecurityModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutes { }
