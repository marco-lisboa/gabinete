/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RaspagemComponent } from './raspagem.component';

describe('RaspagemComponent', () => {
  let component: RaspagemComponent;
  let fixture: ComponentFixture<RaspagemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaspagemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaspagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
