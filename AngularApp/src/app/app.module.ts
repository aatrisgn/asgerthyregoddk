import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

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
    CertificatesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}, NavbarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
