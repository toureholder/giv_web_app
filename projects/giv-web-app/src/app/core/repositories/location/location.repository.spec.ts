import { TestBed } from '@angular/core/testing';

import { LocationRepository } from './location.repository';
import { LocationApi } from './api/location.api';
import { of } from 'rxjs';
import { Location } from 'projects/giv-web-app/src/app/shared/models/location/location.model';
import { Country } from '../../../shared/models/location-part/location-part.model';

describe('LocationRepository', () => {
  let repository: LocationRepository;
  let mockApi: jasmine.SpyObj<LocationApi>;

  beforeEach(() => {
    mockApi = jasmine.createSpyObj('LocationApi', ['fetchLocationDetails']);
    TestBed.configureTestingModule({
      providers: [{ provide: LocationApi, useValue: mockApi }],
    });
    repository = TestBed.inject(LocationRepository);
  });

  it('should be created', () => {
    expect(repository).toBeTruthy();
  });

  it('should get location details', () => {
    // Arrange / Given
    const testCountryId = '123';
    const testCountryName = 'Barbados';

    mockApi.fetchLocationDetails.and.returnValue(
      of(
        Location.getOneFake({
          country: new Country({ id: testCountryId, name: testCountryName }),
        })
      )
    );

    // Act / When
    const observable = repository.getLocation({
      countryId: '123',
      stateId: '3463504',
      cityId: '6324222',
    });

    // Assert / Then
    observable.subscribe((data) => {
      expect(data.country).toEqual(
        jasmine.objectContaining<Country>({
          id: testCountryId,
          name: testCountryName,
        })
      );
    });
  });
});
