import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizarPrazoComponent } from './atualizar-prazo.component';

describe('AtualizarPrazoComponent', () => {
  let component: AtualizarPrazoComponent;
  let fixture: ComponentFixture<AtualizarPrazoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtualizarPrazoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtualizarPrazoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
