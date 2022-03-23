import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarOrigemComponent } from './listar-origem.component';

describe('ListarOrigemComponent', () => {
  let component: ListarOrigemComponent;
  let fixture: ComponentFixture<ListarOrigemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarOrigemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarOrigemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
