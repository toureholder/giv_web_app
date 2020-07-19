import { Component, Input, OnInit } from '@angular/core';
import { ListingCategory } from '../../../../shared/models/listing-category/listing-category.model';
import { Listing } from '../../../../shared/models/listing/listing.model';

@Component({
  selector: 'giv-home-category-section',
  templateUrl: './home-category-section.component.html',
  styleUrls: ['./home-category-section.component.css'],
})
export class HomeCategorySectionComponent implements OnInit {
  @Input() category: ListingCategory;
  @Input() templateOption: string;
  listings: Listing[];
  computedTemplateOption: string;

  ngOnInit(): void {
    this.computeTemplateOption();
    this.prepareListings();
  }

  private computeTemplateOption() {
    this.computedTemplateOption =
      this.templateOption || this.getRandomTemplateOption();
  }

  private getRandomTemplateOption(): string {
    const options = ['1', '2', '3', '4', '5', '6'];
    return options[Math.floor(Math.random() * options.length)];
  }

  private prepareListings() {
    this.listings = this.category.listings.slice(0, 6);
  }
}
