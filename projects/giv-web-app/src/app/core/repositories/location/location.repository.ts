import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Location } from '../../../shared/models/location/location.model';
import { LocationApi } from './api/location.api';

@Injectable({
  providedIn: 'root',
})
export class LocationRepository {
  constructor(private api: LocationApi) {}

  getLocation({
    countryId,
    stateId,
    cityId,
  }: {
    countryId: string;
    stateId: string;
    cityId: string;
  }): Observable<Location> {
    return this.api.fetchLocationDetails({ countryId, stateId, cityId });
  }
}
