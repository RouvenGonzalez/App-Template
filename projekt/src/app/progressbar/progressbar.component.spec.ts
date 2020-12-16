import { APP_BASE_HREF } from '@angular/common';
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

  it('test getProgressOfTasks: should calculate finished percentage of a project', () => {
    expect(component.getProgressOfTasks(component.backendService.projects[0])).toEqual(0);
  });
});
