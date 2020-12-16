import { APP_BASE_HREF } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppModule } from '../app.module';

import { ProjectComponent } from './project.component';

describe('ProjectComponent', () => {
  let component: ProjectComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppModule],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }, ProjectComponent],
    });
    component = TestBed.inject(ProjectComponent);
  });

  it('test viewProjects: should provide project data from backend ', () => {
    expect(component.viewProjects()).toEqual(component.backendService.projects);
  });

  it('test viewProjects: should call getProjects form backend.service ', () => {
    const spy = jest.spyOn(component.backendService, 'getProjects');
    expect(spy).toHaveBeenCalled;
  });

  it('test viewProjects: should not be empty ', () => {
    expect(component.viewProjects().length).toEqual(component.backendService.projects.length);
  });

  it('test addProject: should send new project data to backend.service', () => {
    const length = component.backendService.projects.length;
    component.addProject('test name');
    expect(component.backendService.projects.length).toEqual(length + 1);
  });

  it('test addProject: should call createProject from backend.service', () => {
    const spy = jest.spyOn(component.backendService, 'createProject');
    component.addProject('test spy');
    expect(spy).toHaveBeenCalled;
  });

  it('test addProject: should not create a new project if name is empty', () => {
    const length = component.backendService.projects.length;
    component.addProject('');
    expect(component.backendService.projects.length).toEqual(length);
  });
});
