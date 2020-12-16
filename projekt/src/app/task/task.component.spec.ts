import { APP_BASE_HREF } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppModule } from '../app.module';
import { Project } from '../models/project';
import { Status, Task } from '../models/task';

import { TaskComponent } from './task.component';

describe('TaskComponent', () => {
  let component: TaskComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppModule],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }, TaskComponent],
    });
    component = TestBed.inject(TaskComponent);
  });

  it('test viewTasks: should provide task data from backend.service', () => {
    expect(component.viewTasks(component.backendService.projects[0].name)).toEqual(
      component.backendService.projects[0].tasks
    );
  });

  it('test viewTasks: should call getTasks from backend.service', () => {
    const spy = jest.spyOn(component.backendService, 'getTasks');
    component.viewTasks(component.backendService.projects[0].name);
    expect(spy).toHaveBeenCalled;
  });

  it('test addTask: should send task name to backend.service', () => {
    const spy = jest.spyOn(component.backendService, 'createTask');
    const length = component.backendService.projects[0].tasks.length;
    component.addTask('test task', component.backendService.projects[0].name);
    expect(component.backendService.projects[0].tasks.length).toEqual(length + 1);
    expect(spy).toHaveBeenCalled;
  });

  it('test addTask: should call createTask from backend.service', () => {
    const spy = jest.spyOn(component.backendService, 'createTask');
    component.addTask('test task', component.backendService.projects[0].name);
    expect(spy).toHaveBeenCalled;
  });

  it('test addTask: should not add new task if empty string is given', () => {
    const spy = jest.spyOn(component.backendService, 'createTask');
    const length = component.backendService.projects[0].tasks.length;
    component.addTask('', component.backendService.projects[0].name);
    expect(component.backendService.projects[0].tasks.length).toEqual(length);
    expect(spy).toHaveBeenCalled;
  });

  it('test changeStatus: should send information to change status to backend.service', () => {
    component.changeStatus(
      Status.FINISHED,
      component.backendService.projects[0].tasks[1].description,
      component.backendService.projects[0].name
    );
    expect(component.backendService.projects[0].tasks[1].status).toEqual(1);
  });

  it('test changeStatus: should call updateStatus from backend.service', () => {
    const spy = jest.spyOn(component.backendService, 'updateStatus');
    component.changeStatus(
      Status.FINISHED,
      component.backendService.projects[0].tasks[1].description,
      component.backendService.projects[0].name
    );
    expect(spy).toHaveBeenCalled;
  });
});
