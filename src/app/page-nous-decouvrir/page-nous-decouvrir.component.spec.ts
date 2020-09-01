import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNousDecouvrirComponent } from './page-nous-decouvrir.component';

describe('PageNousDecouvrirComponent', () => {
  let component: PageNousDecouvrirComponent;
  let fixture: ComponentFixture<PageNousDecouvrirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageNousDecouvrirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNousDecouvrirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
