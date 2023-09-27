import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FichesalarieComponent } from './fichesalarie.component';

describe('FichesalarieComponent', () => {
  let component: FichesalarieComponent;
  let fixture: ComponentFixture<FichesalarieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FichesalarieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FichesalarieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
