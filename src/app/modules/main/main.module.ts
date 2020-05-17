import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { ProjectComponent } from './project/project.component';



@NgModule({
  declarations: [
    HomePageComponent, 
    ProjectComponent],
  exports: [
    HomePageComponent, 
    ProjectComponent
  ],
  imports: [
    CommonModule
  ],
})
export class MainModule { }
