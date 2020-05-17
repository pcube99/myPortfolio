import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  page: any;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  redirectTo(whichPage) {
    if(whichPage === "contact") {
      this.page = "contact";
    }  else if(whichPage === "about") {
      this.page = "about";
    }  else if(whichPage === "projects") {
      this.page = "projects";
    }  else if(whichPage === "home") {
      this.page = "home";
    }
    this.router.navigate([this.page]);
  }

}
