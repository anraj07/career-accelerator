import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/header/header.component';
import { FooterComponent } from './pages/footer/footer.component';
import { SidebarComponent } from './pages/sidebar/sidebar.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CareerpresentComponent } from './pages/careerpresent/careerpresent.component';
import { CareernextComponent } from './pages/careernext/careernext.component';
import { BlogComponent } from './pages/blog/blog.component';
import { HrblogComponent } from './pages/hrblog/hrblog.component';
import { CeochatComponent } from './pages/ceochat/ceochat.component';
import { AskhrComponent } from './pages/askhr/askhr.component';
import { CareerMapComponent } from './pages/career-map/career-map.component';
import { CertificationsComponent } from './pages/certifications/certifications.component';
import { NewsfeedComponent } from './pages/newsfeed/newsfeed.component';
import { ExploreijpComponent } from './pages/exploreijp/exploreijp.component';
import { RewardsandrecognitionComponent } from './pages/rewardsandrecognition/rewardsandrecognition.component';
import { CareerpathComponent } from './pages/careerpath/careerpath.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    LogoutComponent,
    ProfileComponent,
    DashboardComponent,
    CareerpresentComponent,
    CareernextComponent,
    BlogComponent,
    HrblogComponent,
    CeochatComponent,
    AskhrComponent,
    LogoutComponent,
    CareerMapComponent,
    CertificationsComponent,
    NewsfeedComponent,
    ExploreijpComponent,
    RewardsandrecognitionComponent,
    CareerpathComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
