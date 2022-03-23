import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarOrgaoComponent } from './listar-orgao.component';

describe('ListarOrgaoComponent', () => {
  let component: ListarOrgaoComponent;
  let fixture: ComponentFixture<ListarOrgaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarOrgaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarOrgaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
