import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerAniversariosComponent } from './container-aniversarios.component';

describe('ContainerAniversariosComponent', () => {
  let component: ContainerAniversariosComponent;
  let fixture: ComponentFixture<ContainerAniversariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerAniversariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerAniversariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
