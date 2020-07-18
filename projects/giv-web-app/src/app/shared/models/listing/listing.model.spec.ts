import { fake } from '../../../../testing/fake-api-response';
import { Listing } from './listing.model';

describe('Listing Model Tests', () => {
  const fakekApiResponse = fake.homeCategoriesList;

  it('"featuredImage should be image with lowest position', () => {
    // Arrange / Given
    const model = Listing.getOneFake();

    // Act / When
    const featuredImage = model.featuredImage;

    // Assert / Then
    expect(featuredImage?.position).toBe(0);
  });

  it('should be able to deserialize a json object', () => {
    // Arrange / Given
    const json = fakekApiResponse[0]['listings'][0];
    const firstListingImageJson = json['listing_images'][0];

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
            url: firstListingImageJson['url'],
            position: firstListingImageJson['position'],
          }),
        ]),
      })
    );
  });

  it('should be able to deserialize a list of json objects', () => {
    // Arrange / Given
    const json = fakekApiResponse[0]['listings'];
    const firstListingJson = json[0];
    const firstListingImageJson = firstListingJson['listing_images'][0];

    // Act / When
    const listings = Listing.fromJsonListtoList(json);

    // Assert / Then
    expect(listings).toEqual(
      jasmine.arrayContaining([
        jasmine.objectContaining({
          id: firstListingJson['id'],
          title: firstListingJson['title'],
          description: firstListingJson['description'],
          listingImages: jasmine.arrayContaining([
            jasmine.objectContaining({
              url: firstListingImageJson['url'],
              position: firstListingImageJson['position'],
            }),
          ]),
        }),
      ])
    );
  });

  it('shoukd be able to generate a fake list with n items', () => {
    // Arrange / Given
    const numberOfItems = 10;

    // Act / When
    const items: Listing[] = Listing.getFakeList(numberOfItems);

    // Assert / Then
    expect(items.length).toBe(numberOfItems);
  });
});
