import { Component, OnInit } from '@angular/core';
import { ProjectPortalData } from '../../data';

@Component({
  templateUrl: './project-portal.pug',
  styleUrls: ['./project-portal.scss']
})

export class ProjectPortalComponent implements OnInit {

  constructor(
    private data: ProjectPortalData
  ) {}

  ngOnInit() {
    console.log(this.data.projects);
  }

}
