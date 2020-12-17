import { TestBed } from '@angular/core/testing';

import { BackendService } from './backend.service';
import { AppModule } from '../app.module';
import { APP_BASE_HREF } from '@angular/common';
import { Status } from '../models/task';

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
    expect(service.getTasks(service.projects[0].name)).toEqual(service.projects[0].tasks);
  });

  it('test getTasks: should always give the updated data', () => {
    service.createProject('Test Project');
    expect(service.getTasks('Test Project')).toEqual([]);
    service.createTask('Test Task', 'Test Project');
    expect(service.getTasks('Test Project')).toEqual([{ description: 'Test Task', status: Status.OPEN }]);
  });

  it('test createTask: should create a new entree to the tasks array ', () => {
    service.createProject('Test Project');
    const length = service.getTasks('Test Project').length;
    service.createTask('Test task name', 'Test Project');
    expect(service.getTasks('Test Project').length).toEqual(length + 1);
  });

  it('test createTask: should set the new task name correctly ', () => {
    service.createProject('Test Project');
    service.createTask('Test task name', 'Test Project');
    expect(service.getTasks('Test Project')[0].description).toEqual('Test task name');
  });

  it('test createTask: should not create a new task if no name is entered', () => {
    service.createProject('Test Project');
    service.createTask('', 'Test Project');
    expect(service.getTasks('Test Project')).toEqual([]);
  });

  it('test getProjects: should provide data from backend', () => {
    service.createProject('Test Project');
    expect(service.getProjects()).toEqual(service.projects);
  });

  it('test getProjects: should not change if no new project is added', () => {
    service.createProject('');
    expect(service.getProjects()).toEqual(service.projects);
  });

  it('test createProject: should add a new index to the projects array ', () => {
    const length = service.projects.length;
    service.createProject('Test project name');
    expect(service.projects.length).toEqual(length + 1);
  });

  it('test createProjects: should apply the project name correctly', () => {
    service.createProject('Test Project');
    expect(service.projects.find((project) => project.name == 'Test Project')).toBeTruthy;
  });

  it('test createProject: should not create a new project if no name is entered', () => {
    service.createProject('');
    expect(service.projects.length).toEqual(2);
  });

  it('test updateStatus: should change the status of a task', () => {
    expect(service.projects[0].tasks[0].status).toEqual(Status.OPEN);
    service.updateStatus(Status.FINISHED, service.projects[0].tasks[0].description, service.projects[0].name);
    expect(service.projects[0].tasks[0].status).toEqual(Status.FINISHED);
  });

  it('test updateStatus: should set the choosen status for a task', () => {
    service.updateStatus(Status.FINISHED, service.projects[0].tasks[0].description, service.projects[0].name);
    expect(service.projects[0].tasks[0].status).toEqual(Status.FINISHED);
  });

  it('test calculateProjectProgress: should return 0 if tasks are empty', () => {
    // create new project with no tasks to test
    service.createProject('Test Project');

    // test
    expect(service.calculateProjectProgress('Test Project')).toEqual(0);
  });

  it('test calculateProjectProgress: should return 100 if all tasks are finished', () => {
    service.createProject('Test Project');
    service.createTask('Test Task', 'Test Project');
    service.updateStatus(Status.FINISHED, 'Test Task', 'Test Project');

    // test
    expect(service.calculateProjectProgress('Test Project')).toEqual(100);
  });

  it('test calculateProjectProgress: should return 50 if project progress is 50%', () => {
    service.createProject('Test Project');
    service.createTask('Test Task1', 'Test Project');
    service.createTask('Test Task2', 'Test Project');
    service.updateStatus(Status.FINISHED, 'Test Task1', 'Test Project');

    // test
    expect(service.calculateProjectProgress('Test Project')).toEqual(50);
  });

  it('test calculateProjectProgress: should return 75 if project progress is 75%', () => {
    service.createProject('Test Project');
    service.createTask('Test Task1', 'Test Project');
    service.createTask('Test Task2', 'Test Project');
    service.updateStatus(Status.FINISHED, 'Test Task1', 'Test Project');
    service.updateStatus(Status.REVIEW, 'Test Task2', 'Test Project');

    // test
    expect(service.calculateProjectProgress('Test Project')).toEqual(75);
  });
});
