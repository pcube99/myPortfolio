import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { ProjectComponent } from './project/project.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';



@NgModule({
  declarations: [
    HomePageComponent, 
    ProjectComponent, ContactComponent, AboutComponent],
  exports: [
    HomePageComponent, 
    ProjectComponent
  ],
  imports: [
    CommonModule
  ],
})
export class MainModule { }
