import { TestBed } from '@angular/core/testing';

import { ListingApi } from './listing.api';
import { HttpClient } from '@angular/common/http';

import { fake } from '../../../../../testing/fake-api-response';
import { of } from 'rxjs/internal/observable/of';
import { Observable } from 'rxjs';
import { Listing } from 'projects/giv-web-app/src/app/shared/models/listing/listing.model';

describe('ListingApi', () => {
  let api: ListingApi;
  let mockHttpClient: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    mockHttpClient = jasmine.createSpyObj<HttpClient>('HttpClient', ['get']);
    TestBed.configureTestingModule({
      providers: [{ provide: HttpClient, useValue: mockHttpClient }],
    });
    api = TestBed.inject(ListingApi);
  });

  it('should be created', () => {
    expect(api).toBeTruthy();
  });

  it('#getOne should get one listing', () => {
    //Arrange / Given
    const apiResponse = fake.listing;
    mockHttpClient.get.and.returnValue(of(apiResponse));

    //Act / When
    const observable: Observable<Listing> = api.fetchOne(1);

    //Assert / Then
    observable.subscribe((data) => {
      expect(data).toBeInstanceOf(Listing);

      expect(data).toEqual(
        jasmine.objectContaining<Listing>({
          id: apiResponse.id,
        })
      );
    });
  });
});
