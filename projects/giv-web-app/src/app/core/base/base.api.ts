import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

export abstract class BaseApi {
  constructor(private readonly http: HttpClient) {}

  static BASE_URL = 'https://giv-api.herokuapp.com';

  protected get(
    path: string,
    options?: {
      headers?:
        | HttpHeaders
        | {
            [header: string]: string | string[];
          };
      params?:
        | HttpParams
        | {
            [param: string]: string | string[];
          };
    }
  ): Observable<any> {
    return this.http.get(BaseApi.BASE_URL + path);
  }
}
