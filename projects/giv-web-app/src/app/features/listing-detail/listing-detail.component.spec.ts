import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingDetailComponent } from './listing-detail.component';

describe('ListingDetailComponent', () => {
  let component: ListingDetailComponent;
  let fixture: ComponentFixture<ListingDetailComponent>;
  let template: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListingDetailComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingDetailComponent);
    component = fixture.componentInstance;
    template = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render an image carousel', () => {
    expect(template.querySelector('[data-test="carousel"]')).toBeTruthy();
  });

  it('should render the title', () => {
    const titleElement = template.querySelector('[data-test="title"]');
    expect(titleElement).toBeTruthy();
  });

  it('should render the description', () => {
    const descriptionElement = template.querySelector(
      '[data-test="description"]'
    );
    expect(descriptionElement).toBeTruthy();
  });

  it('should render the user', () => {
    const userElement = template.querySelector('[data-test="user"]');
    expect(userElement).toBeTruthy();
  });

  it('should render the report', () => {
    const reportElement = template.querySelector('[data-test="report"]');
    expect(reportElement).toBeTruthy();
  });
});
