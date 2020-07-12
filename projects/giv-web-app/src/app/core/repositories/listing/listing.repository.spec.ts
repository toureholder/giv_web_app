import { TestBed } from '@angular/core/testing';

import { ListingRepository } from './listing.repository';
import { ListingApi } from './api/listing.api';
import { Listing } from '../../../shared/models/listing/listing.model';
import { fake } from '../../../test/fake-api-response';
import { of, Observable } from 'rxjs';

describe('ListingService', () => {
  let repository: ListingRepository;
  let mockApi: jasmine.SpyObj<ListingApi>;

  beforeEach(() => {
    mockApi = jasmine.createSpyObj<ListingApi>('LisingApi', ['fetchOne']);

    TestBed.configureTestingModule({
      providers: [{ provide: ListingApi, useValue: mockApi }],
    });
    repository = TestBed.inject(ListingRepository);
  });

  it('should be created', () => {
    expect(repository).toBeTruthy();
  });

  it('should get listing by id from api', () => {
    //Arrange / Given
    const id = 271;
    const fakeListing = Listing.getOneFake(id);
    mockApi.fetchOne.and.returnValue(of(fakeListing));

    //Act / When
    const observable: Observable<Listing> = repository.getListing(1);

    //Assert / Then
    observable.subscribe((data) => {
      expect(data).toBeInstanceOf(Listing);
      expect(data).toEqual(jasmine.objectContaining<Listing>(fakeListing));
    });
  });
});
