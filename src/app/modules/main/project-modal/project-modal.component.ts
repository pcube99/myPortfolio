import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-project-modal',
  templateUrl: './project-modal.component.html',
  styleUrls: ['./project-modal.component.css']
})
export class ProjectModalComponent implements OnInit {
  @Input() projectDescriptionShort: any;
  @Input() projectTitle: any;
  @Input() projectDescriptionLong: any;
  @Input() githubLink: any;
  @Input() imagePath: any;
  @Input() mNumber: any;
  constructor() { }

  ngOnInit(): void {
  }

}
