import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizarOrigemComponent } from './atualizar-origem.component';

describe('AtualizarOrigemComponent', () => {
  let component: AtualizarOrigemComponent;
  let fixture: ComponentFixture<AtualizarOrigemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtualizarOrigemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtualizarOrigemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
