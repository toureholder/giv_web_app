import { FeaturedListingImageComponent } from './featured-listing-image.component';
import { Listing } from '../../models/listing/listing.model';
import { TestBed } from '@angular/core/testing';

describe('FeaturedListingImageComponent', () => {
  it('should render featured image', () => {
    //Arrange / Given
    TestBed.configureTestingModule({
      declarations: [FeaturedListingImageComponent],
    });

    const fixture = TestBed.createComponent(FeaturedListingImageComponent);
    const component = fixture.componentInstance;
    component.listing = Listing.getOneFake();
    const featuredImage = component.listing.featuredImage;

    //Act / When
    fixture.detectChanges();

    //Assert / Then
    const template: HTMLElement = fixture.nativeElement;
    expect(template.querySelector('img')?.src).toBe(featuredImage?.url);
  });
});
