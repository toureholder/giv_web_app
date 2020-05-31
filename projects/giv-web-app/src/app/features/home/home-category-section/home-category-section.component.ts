import { Component, Input, OnInit } from '@angular/core';
import { ListingCategory } from '../../../shared/models/listing-category/listing-category.model';
import { Listing } from '../../../shared/models/listing/listing.model';

@Component({
  selector: 'giv-home-category-section',
  templateUrl: './home-category-section.component.html',
  styleUrls: ['./home-category-section.component.css'],
})
export class HomeCategorySectionComponent implements OnInit {
  @Input() category: ListingCategory;
  randomTemplateOption: string;
  listings: Listing[];

  ngOnInit(): void {
    this.setTemplateOption();
    this.prepareListings();
  }

  private setTemplateOption() {
    const options = ['1', '2', '3', '4', '5', '6'];
    this.randomTemplateOption = options[~~(Math.random() * options.length)];
  }

  private prepareListings() {
    this.listings = this.category.listings.slice(0, 6);
  }
}
