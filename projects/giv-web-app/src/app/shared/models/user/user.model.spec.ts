import { fake } from '../../../../testing/fake-api-response';
import { User } from './user.model';

describe('User model', () => {
  it('should have a static method to deserialize json object', () => {
    // Arrange / Given
    const json = fake.listing.user;

    // Act / When
    const user = User.fromJson(json);

    // Assert / Then
    expect(user.name).toBe(json.name);
  });

  it('should have a static method to generate a fake instance', () => {
    expect(User.getOneFake()).toBeInstanceOf(User);
  });
});
