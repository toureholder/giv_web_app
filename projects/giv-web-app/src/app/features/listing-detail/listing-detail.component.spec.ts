import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { ActivatedRouteStub } from '../../../testing/activated-route-stub';
import { Listing } from '../../shared/models/listing/listing.model';
import { ListingDetailComponent } from './listing-detail.component';
import { ListingDetailService } from './listing-detail.service';

describe('ListingDetailComponent', () => {
  let component: ListingDetailComponent;
  let fixture: ComponentFixture<ListingDetailComponent>;
  let template: HTMLElement;
  let mockService: jasmine.SpyObj<ListingDetailService>;
  let activatedRouteStub: ActivatedRouteStub;

  beforeEach(() => {
    mockService = jasmine.createSpyObj<ListingDetailService>(
      'ListingDetailService',
      ['getListing']
    );

    activatedRouteStub = new ActivatedRouteStub({ id: '20' });

    TestBed.configureTestingModule({
      providers: [
        { provide: ListingDetailService, useValue: mockService },
        { provide: ActivatedRoute, useValue: activatedRouteStub },
      ],
      declarations: [ListingDetailComponent],
    });
  });

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
      // Arrange / Given
      const fakeListing = Listing.getOneFake(23);
      mockService.getListing.and.returnValue(of(fakeListing));

      // Act / When
      fixture.detectChanges();

      // Assert / Then
      activatedRouteStub.paramMap.subscribe((map) =>
        // Then
        expect(component.listing).toEqual(
          jasmine.objectContaining<Listing>({
            ...fakeListing,
          })
        )
      );
    });
  });

  describe('routing params', () => {
    it('should fetch listing that corresponds to the "id" paramater', () => {
      // Given
      const fakeListing = Listing.getOneFake(23);
      mockService.getListing.and.returnValue(of(fakeListing));

      // When
      fixture.detectChanges();

      activatedRouteStub.paramMap.subscribe((map) =>
        // Then
        expect(component.listingId).toBe(20)
      );
    });
  });
});
