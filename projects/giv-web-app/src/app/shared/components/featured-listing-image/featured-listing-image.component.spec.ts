import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ListingImage } from '../../models/listing-image/listing-image.model';
import { Listing } from '../../models/listing/listing.model';
import { FeaturedListingImageComponent } from './featured-listing-image.component';

describe('FeaturedListingImageComponent', () => {
  let fixture: ComponentFixture<FeaturedListingImageComponent>;
  let component: FeaturedListingImageComponent;
  let template: HTMLElement;
  let featuredImage: ListingImage | undefined;
  const fakeListing = Listing.getOneFake();

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [FeaturedListingImageComponent],
    });

    // Arrange / Given
    fixture = TestBed.createComponent(FeaturedListingImageComponent);
    component = fixture.componentInstance;
    template = fixture.nativeElement;
    component.listing = fakeListing;
    featuredImage = component.listing.featuredImage;

    // Act / When
    fixture.detectChanges();
  });

  it('should render featured image', () => {
    expect(template.querySelector('img')?.src).toBe(featuredImage?.url);
  });

  it('should have a link to listing detail', () => {
    const a = template.querySelector('a') as any;
    expect(
      template.querySelector(`[href="/listing/${fakeListing.id}"]`)
    ).toBeTruthy();
  });
});
