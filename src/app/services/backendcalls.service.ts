import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {AppSettings} from './app-settings.service'

@Injectable()
export class BackEndCalls {

  login = '/login.php';

  getCompany = '/get_company.php';
  
  getProduct = '/get_product.php';
  
  getCustomer = '/get_customer.php';

  getProductType = "/productType";
  
  postVoucher = "/add_voucher_insert.php";
  getVoucherNamesURL = "/add_voucher_acmaster.php";
  getAllVouchersURL = "/get_voucher.php";

  postInvoice = "/demo_invoice_insert.php";
  getInvoiceProductURL = "/get_invoice_product.php"
  getInvoiceProductPriceURL = "/get_price_product.php";

  constructor(private http : Http) { }

  loginUser(loginData){
    return this.http.post(AppSettings.BACKEND_URL + this.login, loginData)    
  }

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


  postVoucherData(voucherJsonData){
    return this.http.post(AppSettings.BACKEND_URL + this.postVoucher, voucherJsonData)    
  }

  getVoucherNames(){
    return this.http.get(AppSettings.BACKEND_URL + this.getVoucherNamesURL)
  }

  getAllVouchers(){
    return this.http.get(AppSettings.BACKEND_URL + this.getAllVouchersURL)
  }

  postInvoiceData(invoiceJsonData){
    return this.http.post(AppSettings.BACKEND_URL + this.postInvoice, invoiceJsonData)    
  }

  getInvoiceProduct(data){
    return this.http.post(AppSettings.BACKEND_URL + this.getInvoiceProductURL, data)    
  }

  getInvoiceProductPrice(data){
    return this.http.post(AppSettings.BACKEND_URL + this.getInvoiceProductPriceURL, data)    
  }
}
