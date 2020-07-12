import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Listing } from '../../shared/models/listing/listing.model';
import { ListingRepository } from '../../core/repositories/listing/listing.repository';

@Injectable({
  providedIn: 'root',
})
export class ListingDetailService {
  constructor(private listingRepository: ListingRepository) {}

  getListing(id: number): Observable<Listing> {
    return this.listingRepository.getListing(id);
  }
}
