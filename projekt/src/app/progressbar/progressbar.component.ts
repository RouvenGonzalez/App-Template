import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../models/project';
import { BackendService } from '../services/backend.service';

@Component({
  selector: 'app-progressbar',
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.css'],
})
export class ProgressbarComponent implements OnInit {
  constructor(public backendService: BackendService) {}

  ngOnInit(): void {}

  @Input() currentProject: Project;

  // get progress of tasks calculated in backend.service
  getProjectProgress(projectName: string): number {
    return this.backendService.calculateProjectProgress(projectName);
  }
}
