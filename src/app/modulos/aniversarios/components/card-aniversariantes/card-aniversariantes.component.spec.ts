import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAniversariantesComponent } from './card-aniversariantes.component';

describe('CardAniversariantesComponent', () => {
  let component: CardAniversariantesComponent;
  let fixture: ComponentFixture<CardAniversariantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardAniversariantesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardAniversariantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
