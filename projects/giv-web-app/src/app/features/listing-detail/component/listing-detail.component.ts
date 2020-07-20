import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import {
  AsyncActionState,
  ComponentAsyncAction,
} from '../../../shared/models/component_async_action/component_async_action';
import { Listing } from '../../../shared/models/listing/listing.model';
import { ListingDetailService } from '../service/listing-detail.service';

@Component({
  selector: 'giv-listing-detail',
  templateUrl: './listing-detail.component.html',
  styleUrls: ['./listing-detail.component.css'],
})
export class ListingDetailComponent implements OnInit {
  listing: Listing;
  listingId: number;
  getListingRquest = new ComponentAsyncAction();

  constructor(
    private service: ListingDetailService,
    private activatedRoute: ActivatedRoute
  ) {}

  public swiperConfig: SwiperConfigInterface = {
    a11y: true,
    direction: 'horizontal',
    spaceBetween: 5,
    slidesPerView: 1,
    centeredSlides: true,
    keyboard: true,
    mousewheel: false,
    scrollbar: false,
    navigation: true,
    pagination: true,
  };

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
    this.getListingRquest.state = AsyncActionState.LOADING;
    this.service.getListing(id).subscribe((data) => {
      this.listing = data;
      this.getListingRquest.state = AsyncActionState.SUCCESS;
    });
  }
}
