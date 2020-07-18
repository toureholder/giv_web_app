import { TestBed } from '@angular/core/testing';

import { ListingDetailService } from './listing-detail.service';
import { ListingRepository } from '../../core/repositories/listing/listing.repository';
import { Listing } from '../../shared/models/listing/listing.model';
import { of, Observable } from 'rxjs';

describe('ListingDetailService', () => {
  let service: ListingDetailService;
  let mockRepository: jasmine.SpyObj<ListingRepository>;

  beforeEach(() => {
    mockRepository = jasmine.createSpyObj<ListingRepository>(
      'ListingRepository',
      ['getListing']
    );

    TestBed.configureTestingModule({
      providers: [{ provide: ListingRepository, useValue: mockRepository }],
    });
    service = TestBed.inject(ListingDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('get listing from repository', () => {
    // Arrange / Given
    const fakeListing = Listing.getOneFake(23);
    mockRepository.getListing.and.returnValue(of(fakeListing));

    // Act / When
    const observable: Observable<Listing> = service.getListing(23);

    // Assert / Then
    observable.subscribe((data) => {
      expect(data).toBeInstanceOf(Listing);

      expect(data).toEqual(
        jasmine.objectContaining({
          ...fakeListing,
        })
      );
    });
  });
});
