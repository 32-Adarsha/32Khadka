import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalenderTileComponent } from './calender-tile.component';

describe('CalenderTileComponent', () => {
  let component: CalenderTileComponent;
  let fixture: ComponentFixture<CalenderTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalenderTileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalenderTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
