import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable()
export class ContactApiService {

  constructor(private http: HttpClient) { }
getContacts(){
  return this.http.get('https://jsonplaceholder.typicode.com/users');
 }
}
