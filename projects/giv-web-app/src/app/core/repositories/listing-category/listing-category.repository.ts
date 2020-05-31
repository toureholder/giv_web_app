import { ListingCategoryApi } from './api/listing-category.api';
import { Observable } from 'rxjs';
import { ListingCategory } from '../../../shared/models/listing-category/listing-category.model';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ListingCategoryRepository {
  constructor(private api: ListingCategoryApi) {}

  public getFeaturedCategories(): Observable<ListingCategory[]> {
    return this.api.fetchFeaturedCategories();
  }
}
