import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { FeaturedListingImageComponent } from '../../shared/components/featured-listing-image/featured-listing-image.component';
import { ListingCategory } from '../../shared/models/listing-category/listing-category.model';
import { HomeCategorySectionComponent } from './home-category-section/home-category-section.component';
import { HomeComponent } from './home.component';
import { HomeService } from './home.service';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let homeServiceSpy: jasmine.SpyObj<HomeService>;
  let fakeList: ListingCategory[];

  beforeEach(() => {
    homeServiceSpy = jasmine.createSpyObj('HomeService', ['getCategories']);
    fakeList = [
      ListingCategory.getOneFake({
        numberOfListings: 3,
      }),
    ];
  });

  it('should get categories from service', () => {
    component = new HomeComponent(homeServiceSpy);
    homeServiceSpy.getCategories.and.returnValue(of(fakeList));
    component.ngOnInit();
    expect(homeServiceSpy.getCategories).toHaveBeenCalledTimes(1);
    expect(component.categories).toEqual(fakeList);
  });

  it('should render list of categories', () => {
    TestBed.configureTestingModule({
      declarations: [
        HomeComponent,
        HomeCategorySectionComponent,
        FeaturedListingImageComponent,
      ],
      providers: [HomeService],
    });

    TestBed.overrideProvider(HomeService, { useValue: homeServiceSpy });

    const fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;

    homeServiceSpy.getCategories.and.returnValue(of(fakeList));
    fixture.detectChanges();

    expect(homeServiceSpy.getCategories).toHaveBeenCalledTimes(1);
    expect(component.categories).toEqual(fakeList);

    const template: HTMLElement = fixture.nativeElement;
    expect(
      template.querySelectorAll('[data-test="home-category"]').length
    ).toBe(1);
  });
});
