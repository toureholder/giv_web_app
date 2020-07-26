import { fake } from '../../../../testing/fake-api-response';
import { LocationPart } from './location-part.model';

describe('LocationPart model', () => {
  it('should have a static method to deserialize a json object', () => {
    // Arrange / Given
    const json = fake.getLocationDetails.country;

    // Act / When
    const deserialized = LocationPart.fromJson(json);

    // Assert / Then
    expect(deserialized).toEqual(
      jasmine.objectContaining({
        id: json.id,
        name: json.name,
      })
    );
  });
});
