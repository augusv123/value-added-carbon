import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { ProfileComponent } from './profile/profile.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';

import { LoginComponent } from './login/login.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { BusinessComponent } from './services/business/business.component';
import { IndividualsComponent } from './services/individuals/individuals.component';
import { ProjectsComponent } from './services/projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { OurProjectsComponent } from './our-projects/our-projects.component';
import { ScrollParallaxComponent } from './scroll-parallax/scroll-parallax.component';
import { ProjectsCardsComponent } from './projects-cards/projects-cards.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LandingComponent,
    ProfileComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    OurServicesComponent,
    BusinessComponent,
    IndividualsComponent,
    ProjectsComponent,
    ContactComponent,
    OurProjectsComponent,
    ScrollParallaxComponent,
    ProjectsCardsComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
