import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtudiantajoutComponent } from './etudiantajout.component';

describe('EtudiantajoutComponent', () => {
  let component: EtudiantajoutComponent;
  let fixture: ComponentFixture<EtudiantajoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EtudiantajoutComponent]
    });
    fixture = TestBed.createComponent(EtudiantajoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
