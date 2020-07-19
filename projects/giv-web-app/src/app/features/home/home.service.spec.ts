import { HomeService } from './home.service';
import { ListingCategoryRepository } from '../../core/repositories/listing-category/listing-category.repository';
import { of } from 'rxjs';
import { ListingCategory } from '../../shared/models/listing-category/listing-category.model';

describe('home service tests', () => {
  let service: HomeService;
  let mockRepository: jasmine.SpyObj<ListingCategoryRepository>;

  beforeEach(() => {
    mockRepository = jasmine.createSpyObj('ListingCategoryRepository', [
      'getFeaturedCategories',
    ]);
    service = new HomeService(mockRepository);
  });

  it('should get features categories from repository', () => {
    const fakeList = [
      ListingCategory.getOneFake({
        numberOfListings: 3,
      }),
    ];

    mockRepository.getFeaturedCategories.and.returnValue(of(fakeList));

    service.getCategories().subscribe((data) => {
      expect(data).toEqual(fakeList);
    });
  });
});
