import { ListingImage } from '../listing-image/listing-image.model';
import { User } from '../user/user.model';

export interface IListing {
  id: number;
  title: string;
  description: string;
  listingImages: ListingImage[];
  user: User;
}

export class Listing implements IListing {
  private _id: number;
  private _title: string;
  private _description: string;
  private _listingImages: ListingImage[];
  private _user: User;

  constructor({ id, title, description, listingImages, user }: IListing) {
    this._id = id;
    this._title = title;
    this._description = description;
    this._listingImages = this.sortByPostion(listingImages);
    this._user = user;
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

  public get user(): User {
    return this._user;
  }

  get featuredImage(): ListingImage | undefined {
    return this.listingImages.length === 0
      ? undefined
      : this.sortByPostion(this.listingImages)[0];
  }

  static fromJsonListtoList(json: any[]): Listing[] {
    return json.map((obj) => Listing.fromJson(obj));
  }

  static fromJson(json: any) {
    const listingImages = ListingImage.fromJsonListtoList(json.listing_images);
    const user = User.fromJson(json.user);

    return new Listing({
      id: json.id,
      title: json.title,
      description: json.description,
      listingImages,
      user,
    });
  }

  static getOneFake(id?: number): Listing {
    const fakeImages = ListingImage.getFakeList();
    const fakeUser = User.getOneFake();
    return new Listing({
      id: id || 1,
      title: 'Fake Listing',
      description:
        'Lorem ipsum dolor sit amet consectetur adispiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      listingImages: fakeImages,
      user: fakeUser,
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

  private sortByPostion(images: ListingImage[]): ListingImage[] {
    return images.sort((a, b) => a.position - b.position);
  }
}
