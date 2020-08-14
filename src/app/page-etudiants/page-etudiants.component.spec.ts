import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageEtudiantsComponent } from './page-etudiants.component';

describe('PageEtudiantsComponent', () => {
  let component: PageEtudiantsComponent;
  let fixture: ComponentFixture<PageEtudiantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageEtudiantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageEtudiantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
