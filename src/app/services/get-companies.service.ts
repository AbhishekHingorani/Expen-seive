import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class GetCompaniesService {

  //url = 'https://my-json-server.typicode.com/dazzlervinu/MockBackend/company';
  url = 'http://10.100.70.24/expen_seive/add_product.php'
  constructor(private http : Http) { }

  getCompanies(){
    return this.http.get(this.url)
  }
}
