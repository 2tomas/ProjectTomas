import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuegoAbmComponent } from './juego-abm.component';

describe('JuegoAbmComponent', () => {
  let component: JuegoAbmComponent;
  let fixture: ComponentFixture<JuegoAbmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JuegoAbmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JuegoAbmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
