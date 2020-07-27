import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Location } from 'projects/giv-web-app/src/app/shared/models/location/location.model';
import { Country } from 'projects/giv-web-app/src/app/shared/models/location-part/location-part.model';
import { HttpClient } from '@angular/common/http';
import { BaseApi } from '../../../base/base.api';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class LocationApi extends BaseApi {
  constructor(private readonly httpClient: HttpClient) {
    super(httpClient);
  }

  fetchLocationDetails({
    countryId,
    stateId,
    cityId,
  }: {
    countryId: string;
    stateId: string;
    cityId: string;
  }): Observable<Location> {
    const params: {
      [param: string]: string | string[];
    } = {};

    /* tslint:disable:no-string-literal */
    if (countryId) {
      params['country_id'] = countryId;
    }

    if (stateId) {
      params['state_id'] = stateId;
    }

    if (cityId) {
      params['city_id'] = cityId;
    }
    /* tslint:enable:no-string-literal */

    return this.get('/locations/details', {
      params,
    }).pipe(
      map((data: any) => {
        return Location.fromJson(data);
      })
    );
  }
}
