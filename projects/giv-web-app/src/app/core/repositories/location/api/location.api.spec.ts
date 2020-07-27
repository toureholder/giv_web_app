import { TestBed } from '@angular/core/testing';

import { LocationApi } from './location.api';
import { HttpClient } from '@angular/common/http';

import { fake } from '../../../../../testing/fake-api-response';
import { of } from 'rxjs';
import { Location } from 'projects/giv-web-app/src/app/shared/models/location/location.model';
import { Country } from 'projects/giv-web-app/src/app/shared/models/location-part/location-part.model';

describe('LocationApi', () => {
  let api: LocationApi;
  let mockHttp: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    mockHttp = jasmine.createSpyObj('HttpClient', ['get']);
    TestBed.configureTestingModule({
      providers: [{ provide: HttpClient, useValue: mockHttp }],
    });
    api = TestBed.inject(LocationApi);
  });

  it('should be created', () => {
    expect(api).toBeTruthy();
  });

  it('should fetch location details', () => {
    // Arrange / Given
    const fakeLocationApiResponse = fake.getLocationDetails;
    mockHttp.get.and.returnValue(of(fakeLocationApiResponse));

    // Act / When
    const observable = api.fetchLocationDetails({
      countryId: '3469034',
      stateId: '3463504',
      cityId: '6324222',
    });

    // Assert / Then
    observable.subscribe((data) => {
      expect(data).toBeInstanceOf(Location);
      expect(data.country).toEqual(
        jasmine.objectContaining<Country>({
          id: fakeLocationApiResponse.country.id,
          name: fakeLocationApiResponse.country.name,
        })
      );
    });
  });
});
