import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgselectpocComponent } from './ngselectpoc.component';

describe('NgselectpocComponent', () => {
  let component: NgselectpocComponent;
  let fixture: ComponentFixture<NgselectpocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgselectpocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgselectpocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
