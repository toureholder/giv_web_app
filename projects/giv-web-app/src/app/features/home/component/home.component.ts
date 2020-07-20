import { Component, OnInit } from '@angular/core';
import { ListingCategory } from '../../../shared/models/listing-category/listing-category.model';
import { HomeService } from '../service/home.service';
import {
  ComponentAsyncAction,
  AsyncActionState,
} from '../../../shared/models/component_async_action/component_async_action';

@Component({
  selector: 'giv-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [HomeService],
})
export class HomeComponent implements OnInit {
  categories: ListingCategory[];
  getCategoriesRequest = new ComponentAsyncAction();

  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    this.loadCategories();
  }

  private loadCategories(): void {
    this.getCategoriesRequest.state = AsyncActionState.LOADING;

    this.homeService.getCategories().subscribe(
      (categories) => {
        this.categories = categories;
        this.getCategoriesRequest.state = AsyncActionState.SUCCESS;
      },
      (error) => {
        this.getCategoriesRequest.state = AsyncActionState.ERROR;
      }
    );
  }
}
