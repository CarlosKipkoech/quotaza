import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotesFormsComponent } from './quotes-forms.component';

describe('QuotesFormsComponent', () => {
  let component: QuotesFormsComponent;
  let fixture: ComponentFixture<QuotesFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuotesFormsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotesFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
