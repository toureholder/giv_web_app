import { Country, State, City } from '../location-part/location-part.model';

export interface ILocation {
  country: Country | undefined;
  state: State | undefined;
  city: City | undefined;
}

export class Location implements ILocation {
  private _country: Country | undefined;
  private _state: State | undefined;
  private _city: City | undefined;

  constructor({ country, state, city }: ILocation) {
    this._country = country;
    this._state = state;
    this._city = city;
  }

  public get country(): Country | undefined {
    return this._country;
  }

  public get state(): State | undefined {
    return this._state;
  }

  public get city(): City | undefined {
    return this._city;
  }

  /* Static methods */

  static fromJson(json: any): Location {
    const country = json.country
      ? new Country({ id: json.country.id, name: json.country.name })
      : undefined;
    const state = json.state
      ? new State({ id: json.state.id, name: json.state.name })
      : undefined;
    const city = json.city
      ? new City({ id: json.city.id, name: json.city.name })
      : undefined;

    return new Location({
      country,
      state,
      city,
    });
  }

  static getOneFake({
    country,
    state,
    city,
  }: {
    country?: Country;
    state?: State;
    city?: City;
  }): Location {
    return new Location({
      country: country || new Country({ id: '3469034', name: 'Brasil' }),
      state: state || new State({ id: '3463504', name: 'Distrito Federal' }),
      city: city || new City({ id: '6324222', name: 'Brasília' }),
    });
  }
}
