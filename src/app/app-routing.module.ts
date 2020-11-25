import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AskhrComponent } from './pages/askhr/askhr.component';
import { BlogComponent } from './pages/blog/blog.component';
import { CareernextComponent } from './pages/careernext/careernext.component';
import { CareerpresentComponent } from './pages/careerpresent/careerpresent.component';
import { CeochatComponent } from './pages/ceochat/ceochat.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HrblogComponent } from './pages/hrblog/hrblog.component';
import { ProfileComponent } from './pages/profile/profile.component';

const routes: Routes = [
  { path: "", component: DashboardComponent },
  { path: "profile", component: ProfileComponent },
  { path: "careerpresent", component: CareerpresentComponent },
  { path: "careernext", component: CareernextComponent },
  { path: "blog", component: BlogComponent },
  { path: "hrblog", component: HrblogComponent },
  { path: "ceochat", component: CeochatComponent },
  { path: "askhr", component: AskhrComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
