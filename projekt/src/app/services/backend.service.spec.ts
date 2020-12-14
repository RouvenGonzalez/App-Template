import { TestBed } from '@angular/core/testing';

import { BackendService } from './backend.service';
import { AppModule } from '../app.module';
import { APP_BASE_HREF } from '@angular/common';

describe('BackendService', () => {
  let service: BackendService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppModule],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
    });
    service = TestBed.inject(BackendService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('test getTasks: should provide data from backend', () => {
    expect(service.getTasks(service.projects[0])).toEqual(service.projects[0].tasks);
  });
  it('test addTask: should add a new index to the tasks array ', () => {
    service.addTask('Test task name', service.projects[0]);
    expect(service.projects[0].tasks.length).toEqual(3);
  });

  it('test addTask: should not add a new task if no name is entered', () => {
    service.addTask('', service.projects[0]);
    expect(service.projects[0].tasks.length).toEqual(2);
  });

  it('test getProjects: should provide data from backend', () => {
    expect(service.getProjects()).toEqual(service.projects);
  });
  it('test addProject: should add a new index to the projects array ', () => {
    service.addProject('Test project name');
    expect(service.projects.length).toEqual(3);
  });

  it('test addTask: should not add a new project if no name is entered', () => {
    service.addProject('');
    expect(service.projects.length).toEqual(2);
  });

  it('test changeStatus: sholud change the status of a task', () => {
    service.changeStatus(1, service.projects[0].tasks[0]);
    expect(service.projects[0].tasks[0].status).toEqual(1);
  });
});
