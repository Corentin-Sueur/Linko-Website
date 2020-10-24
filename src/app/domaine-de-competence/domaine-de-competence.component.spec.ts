import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DomaineDeCompetenceComponent } from './domaine-de-competence.component';

describe('DomaineDeCompetenceComponent', () => {
  let component: DomaineDeCompetenceComponent;
  let fixture: ComponentFixture<DomaineDeCompetenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DomaineDeCompetenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DomaineDeCompetenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
