import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPrazoComponent } from './listar-prazo.component';

describe('ListarPrazoComponent', () => {
  let component: ListarPrazoComponent;
  let fixture: ComponentFixture<ListarPrazoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarPrazoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarPrazoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
