import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObervabledemoComponent } from './obervabledemo.component';

describe('ObervabledemoComponent', () => {
  let component: ObervabledemoComponent;
  let fixture: ComponentFixture<ObervabledemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObervabledemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObervabledemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
