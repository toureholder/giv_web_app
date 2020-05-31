import { HttpClient } from '@angular/common/http';
import { BaseApi } from './base.api';
import { Observable, of } from 'rxjs';

export class ExampleApi extends BaseApi {
  constructor(private readonly httpClient: HttpClient) {
    super(httpClient);
  }

  getData(path: string): Observable<any> {
    return this.get(path);
  }
}

describe('BaseApi', () => {
  let mockHttpClient: jasmine.SpyObj<HttpClient>;
  let api: ExampleApi;
  let path: string;
  let fakeApiResponse: any;
  let response: Observable<any>;

  beforeEach(() => {
    mockHttpClient = jasmine.createSpyObj<HttpClient>('HttpClient', ['get']);
    api = new ExampleApi(mockHttpClient);

    //Arrange / Given
    path = '/me';
    fakeApiResponse = { name: 'Tester' };
    mockHttpClient.get.and.returnValue(of(fakeApiResponse));

    //Act / When
    response = api.getData(path);
  });

  it('should get data httpClient', () => {
    //Assert / Then
    response.subscribe((data) => expect(data).toEqual(fakeApiResponse));
  });

  it('should call HttpClient.get', () => {
    //Assert / Then
    expect(mockHttpClient.get).toHaveBeenCalledTimes(1);
  });

  it('should concatenate path with base url', () => {
    //Assert / Then
    expect(mockHttpClient.get).toHaveBeenCalledWith(BaseApi.BASE_URL + path);
  });
});
