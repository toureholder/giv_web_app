import { fake } from '../../../../testing/fake-api-response';
import { Location } from './location.model';

describe('Location model', () => {
  describe('#fromJson', () => {
    it('should have a static method to deserialize a json object', () => {
      // Arrange / Given
      const json = fake.getLocationDetails;

      // Act / When
      const deserialized = Location.fromJson(json);

      // Assert / Then
      expect(deserialized.country).toEqual(
        jasmine.objectContaining({
          id: json.country.id,
          name: json.country.name,
        })
      );

      expect(deserialized.state).toEqual(
        jasmine.objectContaining({
          id: json.state.id,
          name: json.state.name,
        })
      );

      expect(deserialized.city).toEqual(
        jasmine.objectContaining({
          id: json.city.id,
          name: json.city.name,
        })
      );
    });

    it('should be able to deserialize json objects with null location parts', () => {
      // Arrange / Given
      const json = {
        country: {
          id: '3469034',
          name: 'Brasil',
        },
        state: null,
        city: null,
      };

      // Act / When
      const deserialized = Location.fromJson(json);

      // Assert / Then
      expect(deserialized.country).toEqual(
        jasmine.objectContaining({
          id: json.country.id,
          name: json.country.name,
        })
      );

      expect(deserialized.state).toBeUndefined();

      expect(deserialized.city).toBeUndefined();
    });
  });
});
