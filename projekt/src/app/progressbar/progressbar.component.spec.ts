import { APP_BASE_HREF } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppModule } from '../app.module';
import { Project } from '../models/project';
import { Task } from '../models/task';

import { ProgressbarComponent } from './progressbar.component';

describe('ProgressbarComponent', () => {
  let component: ProgressbarComponent;

  // testdata for the tests
  const testProject = new Project('test Project');
  testProject.tasks = [new Task('test task 1'), new Task('test task 2')];
  testProject.tasks[0].status = 1;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppModule],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }, ProgressbarComponent],
    });
    component = TestBed.inject(ProgressbarComponent);
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('test getProgressOfTasks: should calculate finished percentage of a project', () => {
    expect(component.getProgressOfTasks(testProject)).toEqual(50);
  });
});
