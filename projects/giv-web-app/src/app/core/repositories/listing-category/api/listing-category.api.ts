import { BaseApi } from '../../../base/base.api';
import { Injectable } from '@angular/core';
import { ListingCategory } from 'projects/giv-web-app/src/app/shared/models/listing-category/listing-category.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ListingCategoryApi extends BaseApi {
  constructor(private readonly httpClient: HttpClient) {
    super(httpClient);
  }

  fetchFeaturedCategories(): Observable<ListingCategory[]> {
    return this.get('/home/categories/featured').pipe(
      map((response) => ListingCategory.fromJsonListToList(response))
    );
  }
}
