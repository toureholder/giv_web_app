import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingDetailComponent } from './listing-detail.component';
import { ListingRepository } from '../../core/repositories/listing/listing.repository';
import { of, Observable } from 'rxjs';
import { Listing } from '../../shared/models/listing/listing.model';
import { ListingDetailService } from './listing-detail.service';

describe('ListingDetailComponent', () => {
  let component: ListingDetailComponent;
  let fixture: ComponentFixture<ListingDetailComponent>;
  let template: HTMLElement;
  let mockService: jasmine.SpyObj<ListingDetailService>;

  beforeEach(async(() => {
    mockService = jasmine.createSpyObj<ListingDetailService>(
      'ListingDetailService',
      ['getListing']
    );

    TestBed.configureTestingModule({
      providers: [{ provide: ListingDetailService, useValue: mockService }],
      declarations: [ListingDetailComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingDetailComponent);
    component = fixture.componentInstance;
    template = fixture.nativeElement;
  });

  describe('ui', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should render an image carousel', () => {
      expect(template.querySelector('[data-test="carousel"]')).toBeTruthy();
    });

    it('should render the title', () => {
      const titleElement = template.querySelector('[data-test="title"]');
      expect(titleElement).toBeTruthy();
    });

    it('should render the description', () => {
      const descriptionElement = template.querySelector(
        '[data-test="description"]'
      );
      expect(descriptionElement).toBeTruthy();
    });

    it('should render the user', () => {
      const userElement = template.querySelector('[data-test="user"]');
      expect(userElement).toBeTruthy();
    });

    it('should render the report', () => {
      const reportElement = template.querySelector('[data-test="report"]');
      expect(reportElement).toBeTruthy();
    });
  });

  describe('data flow', () => {
    it('should get listing from service', () => {
      //Arrange / Given
      const fakeListing = Listing.getOneFake(23);
      mockService.getListing.and.returnValue(of(fakeListing));

      //Act / When
      fixture.detectChanges();

      //Assert / Then
      expect(component.listing).toEqual(
        jasmine.objectContaining<Listing>({
          ...fakeListing,
        })
      );
    });
  });
});
