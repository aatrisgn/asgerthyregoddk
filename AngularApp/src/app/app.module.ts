import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule } from '@angular/material/expansion';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { NavbarService } from './Services/NavbarService';
import { FooterComponent } from './Components/footer/footer.component';
import { AboutComponent } from './Components/sections/about/about.component';
import { SkillsComponent } from './Components/sections/skills/skills.component';
import { ContactComponent } from './Components/sections/contact/contact.component';
import { WelcomeComponent } from './Components/sections/welcome/welcome.component';
import { ExperienceComponent } from './Components/sections/experience/experience.component';
import { EducationComponent } from './Components/sections/education/education.component';
import { CertificatesComponent } from './Components/sections/certificates/certificates.component';
import { HobbiesComponent } from './Components/sections/hobbies/hobbies.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    AboutComponent,
    SkillsComponent,
    ContactComponent,
    WelcomeComponent,
    ExperienceComponent,
    EducationComponent,
    CertificatesComponent,
    HobbiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}, NavbarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
