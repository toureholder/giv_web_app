import { Component, OnInit } from '@angular/core';
import { Listing } from '../../shared/models/listing/listing.model';
import { ListingDetailService } from './listing-detail.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'giv-listing-detail',
  templateUrl: './listing-detail.component.html',
  styleUrls: ['./listing-detail.component.css'],
})
export class ListingDetailComponent implements OnInit {
  listing: Listing;
  listingId: number | null;

  constructor(
    private service: ListingDetailService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      const id = paramMap.get('id');
      if (id) {
        this.listingId = +id;
        this.loadListing(this.listingId);
      }
    });
  }

  private loadListing(id: number) {
    this.service.getListing(id).subscribe((data) => (this.listing = data));
  }
}
