import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComissoesComponent } from './comissoes.component';

describe('ComissoesComponent', () => {
  let component: ComissoesComponent;
  let fixture: ComponentFixture<ComissoesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComissoesComponent]
    });
    fixture = TestBed.createComponent(ComissoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
