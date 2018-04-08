import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {AppSettings} from './app-settings.service'

@Injectable()
export class BackEndCalls {

  getCompany = '/company';
  getProduct = '/product';
  getCustomer = '/customer';
  getProductType = "/productType"

  constructor(private http : Http) { }

  getCompanies(){
    return this.http.get(AppSettings.BACKEND_URL + this.getCompany)
  }

  getCustomers(){
    return this.http.get(AppSettings.BACKEND_URL + this.getCustomer)
  }

  getProducts(){
    return this.http.get(AppSettings.BACKEND_URL + this.getProduct)
  }

  getProductTypes(){
    return this.http.get(AppSettings.BACKEND_URL + this.getProductType)
  }

  getInvoiceCompany(){
    return this.http.get(AppSettings.BACKEND_URL + this.getCompany)
  }

  postNewProductsData(newProductJsonData){
    return this.http.post(AppSettings.BACKEND_URL + this.getProduct, newProductJsonData)
  }
}
