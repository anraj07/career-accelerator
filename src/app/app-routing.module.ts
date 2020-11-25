import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CareernextComponent } from './pages/careernext/careernext.component';
import { CareerpresentComponent } from './pages/careerpresent/careerpresent.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProfileComponent } from './pages/profile/profile.component';

const routes: Routes = [
  { path: "", component: DashboardComponent },
  { path: "profile", component: ProfileComponent },
  { path: "careerpresent", component: CareerpresentComponent },
  { path: "careernext", component: CareernextComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
