import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizarOrgaoComponent } from './atualizar-orgao.component';

describe('AtualizarOrgaoComponent', () => {
  let component: AtualizarOrgaoComponent;
  let fixture: ComponentFixture<AtualizarOrgaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtualizarOrgaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtualizarOrgaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
