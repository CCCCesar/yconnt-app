import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AudvideoComponent } from './audvideo.component';

describe('AudvideoComponent', () => {
  let component: AudvideoComponent;
  let fixture: ComponentFixture<AudvideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AudvideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AudvideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
