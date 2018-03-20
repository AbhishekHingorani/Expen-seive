import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class GetCompaniesService {

  url = 'https://my-json-server.typicode.com/dazzlervinu/MockBackend/company';
  constructor(private http : Http) { }

  getCompanies(){
    return this.http.get(this.url)
  }
}
