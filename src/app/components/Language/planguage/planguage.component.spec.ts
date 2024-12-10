import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanguageComponent } from './planguage.component';

describe('PlanguageComponent', () => {
  let component: PlanguageComponent;
  let fixture: ComponentFixture<PlanguageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanguageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanguageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
