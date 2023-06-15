import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { BusinessComponent } from './services/business/business.component';
import { IndividualsComponent } from './services/individuals/individuals.component';
import { ProjectsComponent } from './services/projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { OurProjectsComponent } from './our-projects/our-projects.component';

const routes: Routes =[
    { path: 'home',             component: HomeComponent },
    { path: 'user-profile',     component: ProfileComponent },
    { path: 'register',           component: SignupComponent },
    { path: 'landing',          component: LandingComponent },
    { path: 'services',          component: OurServicesComponent },
    { path: 'login',          component: LoginComponent },
    { path: 'contact', component: ContactComponent},
    { path: 'projects', component: OurProjectsComponent},
    { path: 'services/business', component: BusinessComponent},
    { path: 'services/individuals', component: IndividualsComponent},
    { path: 'services/projects', component: ProjectsComponent},
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
