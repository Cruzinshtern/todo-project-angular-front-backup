import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardItemComponent } from './board-item.component';

describe('BoardItemComponent', () => {
  let component: BoardItemComponent;
  let fixture: ComponentFixture<BoardItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoardItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BoardItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
