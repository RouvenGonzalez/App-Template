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

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('test getProject: should provide project data from backend ', () => {
    expect(component.getProject()).toEqual(component.backendService.projects);
  });

  it('test addProject: should send new project data to backend.service', () => {
    component.addProject({ name: 'test name', tasks: [] });
    expect(component.backendService.projects.length).toEqual(3);
  });
});
