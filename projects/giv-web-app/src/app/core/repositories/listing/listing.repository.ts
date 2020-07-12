import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Listing } from '../../../shared/models/listing/listing.model';
import { ListingApi } from './api/listing.api';

@Injectable({
  providedIn: 'root',
})
export class ListingRepository {
  constructor(private api: ListingApi) {}

  getListing(id: number): Observable<Listing> {
    return this.api.fetchOne(id);
  }
}
