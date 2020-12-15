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

  it('test getTasks: should provide data from backend', () => {
    expect(service.getTasks(service.projects[0])).toEqual(service.projects[0].tasks);
  });
  it('test createTask: should create a new index to the tasks array ', () => {
    service.createTask('Test task name', service.projects[0]);
    expect(service.projects[0].tasks.length).toEqual(3);
  });

  it('test createTask: should not create a new task if no name is entered', () => {
    service.createTask('', service.projects[0]);
    expect(service.projects[0].tasks.length).toEqual(2);
  });

  it('test getProjects: should provide data from backend', () => {
    // create

    expect(service.getProjects()).toEqual(service.projects);
  });

  it('test createProject: should add a new index to the projects array ', () => {
    service.createProject('Test project name');
    expect(service.projects.length).toEqual(3);
  });

  it('test createProject: should not create a new project if no name is entered', () => {
    service.createProject('');
    expect(service.projects.length).toEqual(2);
  });

  it('test changeStatus: should change the status of a task', () => {
    service.changeStatus(1, service.projects[0].tasks[0]);
    expect(service.projects[0].tasks[0].status).toEqual(1);
  });
});
