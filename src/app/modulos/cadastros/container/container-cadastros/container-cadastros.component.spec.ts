import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerCadastrosComponent } from './container-cadastros.component';

describe('ContainerCadastrosComponent', () => {
  let component: ContainerCadastrosComponent;
  let fixture: ComponentFixture<ContainerCadastrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerCadastrosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerCadastrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
