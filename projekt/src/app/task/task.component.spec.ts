import { APP_BASE_HREF } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppModule } from '../app.module';
import { Project } from '../models/project';
import { Task } from '../models/task';

import { TaskComponent } from './task.component';

describe('TaskComponent', () => {
  let component: TaskComponent;

  // testdata for the tests
  const testProject = new Project('test Project');
  testProject.tasks = [new Task('test task 1'), new Task('test task 2')];
  testProject.tasks[0].status = 1;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppModule],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }, TaskComponent],
    });
    component = TestBed.inject(TaskComponent);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('test getTasks: should provide task data from backend.service', () => {
    expect(component.getTasks(testProject)).toEqual(testProject.tasks);
  });

  it('test addTask: should send task name to backend.service', () => {
    component.addTask({ description: 'test task', status: 0 }, testProject);
    expect(testProject.tasks.length).toEqual(3);
  });

  it('test changeStatus: should send information to change status to backend.service', () => {
    component.changeStatus(1, testProject.tasks[1]);
    expect(testProject.tasks[1].status).toEqual(1);
  });
});
