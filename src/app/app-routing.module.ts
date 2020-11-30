import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AskhrComponent } from './pages/askhr/askhr.component';
import { BlogComponent } from './pages/blog/blog.component';
import { CareernextComponent } from './pages/careernext/careernext.component';
import { CareerpresentComponent } from './pages/careerpresent/careerpresent.component';
import { CeochatComponent } from './pages/ceochat/ceochat.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HrblogComponent } from './pages/hrblog/hrblog.component';
import { NewsfeedComponent } from './pages/newsfeed/newsfeed.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { CertificationsComponent } from './pages/certifications/certifications.component';
import { ExploreijpComponent } from './pages/exploreijp/exploreijp.component';
import { CareerMapComponent } from './pages/career-map/career-map.component';
import { RewardsandrecognitionComponent } from './pages/rewardsandrecognition/rewardsandrecognition.component'

const routes: Routes = [
  { path: "", component: DashboardComponent },
  { path: "profile", component: ProfileComponent },
  { path: "careerpresent", component: CareerpresentComponent },
  { path: "careernext", component: CareernextComponent },
  { path: "blog", component: BlogComponent },
  { path: "hrblog", component: HrblogComponent },
  { path: "ceochat", component: CeochatComponent },
  { path: "askhr", component: AskhrComponent },
  { path: "certifications", component: CertificationsComponent },
  { path: "newsfeed", component: NewsfeedComponent },
  { path: "ijp", component: ExploreijpComponent },
  //{ path: "careermap", component: CareerMapComponent }
  { path: "randr", component: RewardsandrecognitionComponent },
  { path: "careermap", component: CareerMapComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
