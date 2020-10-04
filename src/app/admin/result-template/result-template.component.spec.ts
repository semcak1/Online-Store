import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultTemplateComponent } from './result-template.component';

describe('ResultTemplateComponent', () => {
  let component: ResultTemplateComponent;
  let fixture: ComponentFixture<ResultTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
