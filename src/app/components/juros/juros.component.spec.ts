import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JurosComponent } from './juros.component';

describe('JurosComponent', () => {
  let component: JurosComponent;
  let fixture: ComponentFixture<JurosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JurosComponent]
    });
    fixture = TestBed.createComponent(JurosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
