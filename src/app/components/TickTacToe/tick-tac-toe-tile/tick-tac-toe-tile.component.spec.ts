import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TickTacToeTileComponent } from './tick-tac-toe-tile.component';

describe('TickTacToeTileComponent', () => {
  let component: TickTacToeTileComponent;
  let fixture: ComponentFixture<TickTacToeTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TickTacToeTileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TickTacToeTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
