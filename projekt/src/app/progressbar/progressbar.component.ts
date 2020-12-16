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

  getProgressOfTasks(currentProject: Project): number {
    // exaples:
    // - 10 tasks finished = 100%
    // - 5 of 10 tasks finished = 50%
    // - 1 open , 0 review , 0 finished = 0% : 0/1=0
    // - 0 open , 1 review , 0 finished = 50% : 0.5/1=0.5
    // - 0 open , 0 review , 1 finished = 100% :1/1=1
    // - 0 open , 1 review , 1 finished = 75% : (0.5+1)/2= 0.75
    // - 1 open , 1 review , 1 finished = 50% : (0+0.5+1)/3= 0.5

    // formel: (status1+status2+...statusN)/n
    // status : open = 0 , review = 0.5 , finished = 1

    //get tasks of this project
    const tasks = this.backendService.getTasks(currentProject.name);
    //get the value of all task.status
    const statusValues = tasks.map((task) => task.status);
    //get sum of the values
    const sumOfValues = statusValues.reduce((previous, current) => previous + current);

    // return calculate the percentage : sumOfValues/tasks.length *100
    return (sumOfValues / tasks.length) * 100;
  }
}
