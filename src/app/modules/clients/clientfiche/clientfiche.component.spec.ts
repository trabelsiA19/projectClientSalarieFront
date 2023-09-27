import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientficheComponent } from './clientfiche.component';

describe('ClientficheComponent', () => {
  let component: ClientficheComponent;
  let fixture: ComponentFixture<ClientficheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientficheComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientficheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
