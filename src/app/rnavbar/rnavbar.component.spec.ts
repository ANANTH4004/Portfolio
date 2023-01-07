import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RnavbarComponent } from './rnavbar.component';

describe('RnavbarComponent', () => {
  let component: RnavbarComponent;
  let fixture: ComponentFixture<RnavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RnavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RnavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
