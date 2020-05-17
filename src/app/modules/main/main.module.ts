import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { ProjectComponent } from './project/project.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectModalComponent } from './project-modal/project-modal.component';



@NgModule({
  declarations: [
    HomePageComponent, 
    ProjectComponent, 
    ContactComponent, 
    AboutComponent, 
    ProjectsComponent, ProjectModalComponent],
  exports: [
    HomePageComponent, 
    ProjectComponent,
    ContactComponent, 
    AboutComponent, 
    ProjectsComponent
  ],
  imports: [
    CommonModule
  ],
})
export class MainModule { }
