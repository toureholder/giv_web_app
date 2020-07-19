import { ListingCategoryRepository } from './listing-category.repository';
import { ListingCategoryApi } from './api/listing-category.api';
import { of } from 'rxjs';
import { ListingCategory } from '../../../shared/models/listing-category/listing-category.model';

describe('listing category repository tests', () => {
  let repository: ListingCategoryRepository;
  let mockApi: jasmine.SpyObj<ListingCategoryApi>;

  beforeEach(() => {
    mockApi = jasmine.createSpyObj('ListingCategoryApi', [
      'fetchFeaturedCategories',
    ]);
    repository = new ListingCategoryRepository(mockApi);
  });

  it('should get featured categories from api', () => {
    const fakeList = [
      ListingCategory.getOneFake({
        numberOfListings: 3,
      }),
    ];

    mockApi.fetchFeaturedCategories.and.returnValue(of(fakeList));

    repository.getFeaturedCategories().subscribe((data) => {
      expect(data).toEqual(fakeList);
    });
  });
});
