import { Component, OnInit } from '@angular/core';
import { Listing } from '../../shared/models/listing/listing.model';
import { ListingDetailService } from './listing-detail.service';

@Component({
  selector: 'giv-listing-detail',
  templateUrl: './listing-detail.component.html',
  styleUrls: ['./listing-detail.component.css'],
})
export class ListingDetailComponent implements OnInit {
  listing: Listing;

  constructor(private service: ListingDetailService) {}

  ngOnInit(): void {
    this.loadListing(1);
  }

  private loadListing(id: number) {
    this.service.getListing(id).subscribe((data) => (this.listing = data));
  }
}
