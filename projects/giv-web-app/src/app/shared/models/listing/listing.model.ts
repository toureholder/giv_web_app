import { ListingImage } from '../listing-image/listing-image.model';

export interface IListing {
  id: number;
  title: string;
  description: string;
  listingImages: ListingImage[];
}

export class Listing implements IListing {
  private _id: number;
  private _title: string;
  private _description: string;
  private _listingImages: ListingImage[];

  constructor({ id, title, description, listingImages }: IListing) {
    this._id = id;
    this._title = title;
    this._description = description;
    this._listingImages = listingImages;
  }

  public get id(): number {
    return this._id;
  }

  public get title(): string {
    return this._title;
  }

  public get description(): string {
    return this._description;
  }

  public get listingImages(): ListingImage[] {
    return this._listingImages;
  }

  get featuredImage(): ListingImage | undefined {
    return this.listingImages.length === 0
      ? undefined
      : this.listingImages.sort((a, b) => a.position - b.position)[0];
  }

  static fromJsonListtoList(json: any[]): Listing[] {
    return json.map((obj) => Listing.fromJson(obj));
  }

  static fromJson(json: any) {
    const listingImages = ListingImage.fromJsonListtoList(json.listing_images);

    return new Listing({
      id: json.id,
      title: json.title,
      description: json.description,
      listingImages,
    });
  }

  static getOneFake(id?: number): Listing {
    const fakeImages = ListingImage.getFakeList();
    return new Listing({
      id: id || 1,
      title: 'Fake Listing',
      description:
        'Lorem ipsum dolor sit amet consectetur adispiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      listingImages: fakeImages,
    });
  }

  static getFakeList(count?: number): Listing[] {
    count = count || 1;
    const list: Listing[] = [];

    for (let index = 0; index < count; index++) {
      list.push(Listing.getOneFake());
    }

    return list;
  }
}
