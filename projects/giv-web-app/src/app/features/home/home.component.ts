import { Component, OnInit } from '@angular/core';
import { ListingCategory } from '../../shared/models/listing-category/listing-category.model';
import { HomeService } from './home.service';

@Component({
  selector: 'giv-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [HomeService],
})
export class HomeComponent implements OnInit {
  categories: ListingCategory[];

  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    this.loadCategories();
  }

  private loadCategories(): void {
    this.homeService.getCategories().subscribe(
      (categories) => {
        this.categories = categories;
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
