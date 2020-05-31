import { Component, OnInit, Input } from '@angular/core';
import { Listing } from '../../models/listing/listing.model';

@Component({
  selector: 'giv-featured-listing-image',
  templateUrl: './featured-listing-image.component.html',
  styleUrls: ['./featured-listing-image.component.css'],
})
export class FeaturedListingImageComponent {
  @Input() listing: Listing;
}
