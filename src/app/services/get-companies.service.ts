import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {AppSettings} from './app-settings.service'

@Injectable()
export class GetCompaniesService {

  //url = 'https://my-json-server.typicode.com/dazzlervinu/MockBackend/company';
  //url = 'http://192.168.43.251/expen_seive/add_product.php';
  constructor(private http : Http) { }

  getCompanies(){
    return this.http.get(AppSettings.BACKEND_URL)
  }

  postNewProductsData(newProductJsonData){
    return this.http.post(AppSettings.BACKEND_URL + '/add_product_insert.php', newProductJsonData)
  }
}
