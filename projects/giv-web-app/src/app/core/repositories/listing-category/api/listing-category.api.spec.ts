import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { ListingCategoryApi } from './listing-category.api';
import { fake } from '../../../../../testing/fake-api-response';
import { ListingImage } from 'projects/giv-web-app/src/app/shared/models/listing-image/listing-image.model';
import { Listing } from 'projects/giv-web-app/src/app/shared/models/listing/listing.model';
import { ListingCategory } from 'projects/giv-web-app/src/app/shared/models/listing-category/listing-category.model';

describe('Base Api Tests', () => {
  let mockHttpClient: jasmine.SpyObj<HttpClient>;
  let api: ListingCategoryApi;
  let fakekApiResponse: any;

  beforeEach(() => {
    mockHttpClient = jasmine.createSpyObj('HttpClient', ['get']);
    api = new ListingCategoryApi(mockHttpClient);
    fakekApiResponse = fake.homeCategoriesList;
  });

  it('should return array of listing categories', () => {
    // Arrange / Given
    mockHttpClient.get.and.returnValue(of(fakekApiResponse));

    const firstCategoryJson = fakekApiResponse[0];
    const firstListingJson = firstCategoryJson.listings[0];
    const firstListingImageJson = firstListingJson.listing_images[0];

    // Assert / Then
    const firstlistingImage = jasmine.objectContaining<ListingImage>({
      url: firstListingImageJson.url,
      position: firstListingImageJson.position,
    });

    const firstlistingImageList = jasmine.arrayContaining([firstlistingImage]);

    const firstListing = jasmine.objectContaining<Listing>({
      id: firstListingJson.id,
      title: firstListingJson.title,
      description: firstListingJson.description,
      listingImages: firstlistingImageList,
    });

    const firstCategory = jasmine.objectContaining<ListingCategory>({
      id: firstCategoryJson.id,
      simpleName: firstCategoryJson.simple_name,
      listings: jasmine.arrayContaining([firstListing]),
    });

    const categories = jasmine.arrayContaining([firstCategory]);

    api.fetchFeaturedCategories().subscribe((data) => {
      expect(data).toEqual(categories);
    });
  });
});
