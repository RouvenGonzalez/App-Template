import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppModule } from '../app.module';
import { Project } from '../models/project';
import { Task, Status } from '../models/task';

import { ProgressbarComponent } from './progressbar.component';

describe('ProgressbarComponent', () => {
  let component: ProgressbarComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppModule],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }, ProgressbarComponent],
    });
    component = TestBed.inject(ProgressbarComponent);
  });

  it('test getProjectProgress: should calculate finished percentage of a project', () => {
    // create new project with 50% compeltion
    component.backendService.createProject('50% Project');
    component.backendService.createTask('Test Task 1', '50% Project');
    component.backendService.createTask('Test Task 2', '50% Project');
    component.backendService.updateStatus(Status.FINISHED, 'Test Task 2', '50% Project');

    //test
    expect(component.getProjectProgress('50% Project')).toEqual(50);
  });

  it('test getProjectProgress: should call calculateProjectProgress from backend.service', () => {
    const spy = jest.spyOn(component.backendService, 'calculateProjectProgress');

    // create new project with no tasks to test
    component.backendService.createProject('Test Project');

    // test
    expect(spy).toHaveBeenCalled;
  });

  it('test getProjectProgress: should return 0 if tasks are empty', () => {
    // create new project with no tasks to test
    component.backendService.createProject('Test Project');

    // test
    expect(component.getProjectProgress('Test Project')).toEqual(0);
  });
});
