import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListingCategoryRepository } from '../../core/repositories/listing-category/listing-category.repository';
import { ListingCategory } from '../../shared/models/listing-category/listing-category.model';

@Injectable()
export class HomeService {
  constructor(private listingCategoryRepository: ListingCategoryRepository) {}

  getCategories(): Observable<ListingCategory[]> {
    return this.listingCategoryRepository.getFeaturedCategories();
  }
}
