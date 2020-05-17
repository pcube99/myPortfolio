import { Component, OnInit, Input } from '@angular/core';
declare let $: any;
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  @Input() projectDescriptionShort: any;
  @Input() projectTitle: any;
  @Input() projectDescriptionLong: any;
  @Input() githubLink: any;
  @Input() imagePath: any;
  @Input() mNumber: any;
  modalNumber: any;
  constructor() { }

  ngOnInit(): void {
    this.modalNumber = "1";
    $(document).ready(() => {
      // $('.modal').modal();
      console.log("#modal"+this.mNumber)
      $('.modal').modal();
      $('.materialboxed').materialbox();
      this.modalNumber = this.mNumber;
    });
            
  }

}
