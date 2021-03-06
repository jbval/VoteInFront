import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VotePollComponent } from './votePoll.component';

describe('VoteComponent', () => {
  let component: VotePollComponent;
  let fixture: ComponentFixture<VotePollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VotePollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VotePollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
