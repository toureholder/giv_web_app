import { fake } from '../../../../testing/fake-api-response';
import { Listing } from './listing.model';
import { ListingImage } from '../listing-image/listing-image.model';
import { User } from '../user/user.model';

describe('Listing model', () => {
  const fakekApiResponse = fake.homeCategoriesList;

  it('featuredImage should be image with lowest position', () => {
    // Arrange / Given
    const model = Listing.getOneFake();

    // Act / When
    const featuredImage = model.featuredImage;

    // Assert / Then
    expect(featuredImage?.position).toBe(0);
  });

  it('should order its images by position when constructed', () => {
    // Arrange / Given
    const unorderedImages = [
      new ListingImage({ url: 'https://picsum.photos/300', position: 3 }),
      new ListingImage({ url: 'https://picsum.photos/100', position: 1 }),
      new ListingImage({ url: 'https://picsum.photos/200', position: 2 }),
      new ListingImage({ url: 'https://picsum.photos/101', position: 0 }),
    ];

    // Act / When
    const newListing = new Listing({
      id: 1,
      title: 'New listing',
      description:
        'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incidicunt ut labore et dolore magna aliqua.',
      cityId: '6324222',
      stateId: '3463504',
      countryId: '3469034',
      listingImages: unorderedImages,
      user: User.getOneFake(),
    });

    // Assert / Then
    expect(newListing.listingImages[0].position).toEqual(0);
    expect(newListing.listingImages[1].position).toEqual(1);
    expect(newListing.listingImages[2].position).toEqual(2);
    expect(newListing.listingImages[3].position).toEqual(3);
  });

  it('should have a static method to deserialize a json object', () => {
    // Arrange / Given
    const json = fakekApiResponse[0].listings[0];
    const firstListingImageJson = json.listing_images[0];

    // Act / When
    const deserialized = Listing.fromJson(json);

    // Assert / Then
    expect(deserialized).toEqual(
      jasmine.objectContaining({
        id: json.id,
        title: json.title,
        description: json.description,
        listingImages: jasmine.arrayContaining([
          jasmine.objectContaining({
            url: firstListingImageJson.url,
            position: firstListingImageJson.position,
          }),
        ]),
      })
    );
  });

  it('should deserialize json objects with null cityID', () => {});

  it('should have a static method to deserialize a list of json objects', () => {
    // Arrange / Given
    const json = fakekApiResponse[0].listings;
    const firstListingJson = json[0];
    const firstListingImageJson = firstListingJson.listing_images[0];

    // Act / When
    const listings = Listing.fromJsonListtoList(json);

    // Assert / Then
    expect(listings).toEqual(
      jasmine.arrayContaining([
        jasmine.objectContaining({
          id: firstListingJson.id,
          title: firstListingJson.title,
          description: firstListingJson.description,
          listingImages: jasmine.arrayContaining([
            jasmine.objectContaining({
              url: firstListingImageJson.url,
              position: firstListingImageJson.position,
            }),
          ]),
        }),
      ])
    );
  });

  it('shoukd have a static method to generate a fake list with n items', () => {
    // Arrange / Given
    const numberOfItems = 10;

    // Act / When
    const items: Listing[] = Listing.getFakeList(numberOfItems);

    // Assert / Then
    expect(items.length).toBe(numberOfItems);
  });
});
