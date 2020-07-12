import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Listing } from 'projects/giv-web-app/src/app/shared/models/listing/listing.model';
import { BaseApi } from '../../../base/base.api';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ListingApi extends BaseApi {
  constructor(private readonly httpClient: HttpClient) {
    super(httpClient);
  }

  fetchOne(id: number): Observable<Listing> {
    return this.get(`/listing/${id}`).pipe(
      map((response) => Listing.fromJson(response))
    );
  }
}
