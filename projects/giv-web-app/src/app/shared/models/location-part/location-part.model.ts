export interface ILocationPart {
  id: string;
  name: string;
}

export class LocationPart implements ILocationPart {
  private _id: string;
  private _name: string;

  constructor({ id, name }: ILocationPart) {
    this._id = id;
    this._name = name;
  }

  public get id(): string {
    return this._id;
  }

  public get name(): string {
    return this._name;
  }

  // Static methods

  static fromJson(json: any): LocationPart {
    return new LocationPart({
      id: json.id,
      name: json.name,
    });
  }
}

export class Country extends LocationPart {}
export class State extends LocationPart {}
export class City extends LocationPart {}
