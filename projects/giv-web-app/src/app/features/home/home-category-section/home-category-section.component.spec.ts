import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FeaturedListingImageComponent } from '../../../shared/components/featured-listing-image/featured-listing-image.component';
import { ListingCategory } from '../../../shared/models/listing-category/listing-category.model';
import { HomeCategorySectionComponent } from './home-category-section.component';
import { Listing } from '../../../shared/models/listing/listing.model';
import { RouterTestingModule } from '@angular/router/testing';

describe('HomeCategorySectionComponent', () => {
  let component: HomeCategorySectionComponent;
  let fixture: ComponentFixture<HomeCategorySectionComponent>;
  let template: HTMLElement;
  let numberOfListings: number;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [
        HomeCategorySectionComponent,
        FeaturedListingImageComponent,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    numberOfListings = 5;
    fixture = TestBed.createComponent(HomeCategorySectionComponent);
    component = fixture.componentInstance;
    template = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should render listings' featured images", () => {
    // Arrange / Given
    component.category = ListingCategory.getOneFake({
      numberOfListings: numberOfListings,
    });

    // Act / When
    fixture.detectChanges();

    // Assert / Then
    expect(template.querySelectorAll('giv-featured-listing-image').length).toBe(
      component.category.listings.length
    );
  });

  it('should set a data-index on each image div', () => {
    // Arrange / Given
    component.category = ListingCategory.getOneFake({
      numberOfListings: numberOfListings,
    });

    // Act / When
    fixture.detectChanges();

    // Assert / Then
    for (let index = 0; index < component.listings.length; index++) {
      expect(template.querySelector(`[data-index="${index}"]`)).toBeTruthy();
    }
  });

  it('should should render only the first 6 listings', () => {
    // Arrange / Given
    component.category = ListingCategory.getOneFake({
      numberOfListings: 10,
    });

    // Act / When
    fixture.detectChanges();

    // Assert / Then
    expect(component.category.listings.length).toBe(10);
    expect(template.querySelectorAll('giv-featured-listing-image').length).toBe(
      6
    );
  });

  it('should mantain template option if received as argument', () => {
    // Arrange / Given
    component.category = ListingCategory.getOneFake({
      numberOfListings: numberOfListings,
    });

    component.templateOption = '3';

    // Act / When
    fixture.detectChanges();

    //Then
    expect(component.computedTemplateOption).toBe('3');
    expect(template.querySelector('[data-template="3"]')).toBeTruthy();
  });
});
