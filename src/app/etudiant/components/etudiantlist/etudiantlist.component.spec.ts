import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtudiantlistComponent } from './etudiantlist.component';

describe('EtudiantlistComponent', () => {
  let component: EtudiantlistComponent;
  let fixture: ComponentFixture<EtudiantlistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EtudiantlistComponent]
    });
    fixture = TestBed.createComponent(EtudiantlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
