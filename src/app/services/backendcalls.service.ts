import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {AppSettings} from './app-settings.service'

@Injectable()
export class BackEndCalls {

  //login
  loginURL = '/login.php';

  //company
  getCompanyURL = '/get_company.php';
  
  //product
  getSingleProductURL = '/get_single_product.php';
  getProductTypeAndCompanyURL = "/get_producttype_company.php";
  postNewProductURL = "/add_product_insert.php";
  editProductURL = "/edit_product.php";
  getAllProductsURL = "/get_all_product.php";
  
  //customer
  getCustomerURL = '/get_customer.php';

  //product type
  getProductTypeURL = "/productType";
  
  //voucher
  postVoucherURL = "/add_voucher_insert.php";
  getVoucherNamesURL = "/add_voucher_acmaster.php";
  getAllVouchersURL = "/get_voucher.php";

  //invoice
  postInvoiceURL = "/demo_invoice_insert.php";
  getInvoiceProductURL = "/get_invoice_product.php"
  getInvoiceProductPriceURL = "/get_price_product.php";

  constructor(private http : Http) { }

  //login
  loginUser(loginData){
    return this.http.post(AppSettings.BACKEND_URL + this.loginURL, loginData)    
  }

  //company
  getCompanies(){
    return this.http.get(AppSettings.BACKEND_URL + this.getCompanyURL)
  }

  //customer
  getCustomers(){
    return this.http.get(AppSettings.BACKEND_URL + this.getCustomerURL)
  }

  //product
  getProductTypeAndCompany(){
    return this.http.get(AppSettings.BACKEND_URL + this.getProductTypeAndCompanyURL)
  }
  getSingleProduct(data){
    return this.http.post(AppSettings.BACKEND_URL + this.getSingleProductURL, data)
  }
  postNewProductsData(newProductJsonData){
    return this.http.post(AppSettings.BACKEND_URL + this.postNewProductURL, newProductJsonData)
  }
  editProduct(data){
    return this.http.post(AppSettings.BACKEND_URL + this.editProductURL, data)
  }
  getAllProducts(){
    return this.http.get(AppSettings.BACKEND_URL + this.getAllProductsURL)
  }

  //product type
  getProductTypes(){
    return this.http.get(AppSettings.BACKEND_URL + this.getProductTypeURL)
  }

  //invoice
  getInvoiceCompany(){
    return this.http.get(AppSettings.BACKEND_URL + this.getCompanyURL)
  }
  postInvoiceData(invoiceJsonData){
    return this.http.post(AppSettings.BACKEND_URL + this.postInvoiceURL, invoiceJsonData)    
  }
  getInvoiceProduct(data){
    return this.http.post(AppSettings.BACKEND_URL + this.getInvoiceProductURL, data)    
  }
  getInvoiceProductPrice(data){
    return this.http.post(AppSettings.BACKEND_URL + this.getInvoiceProductPriceURL, data)    
  }

  //voucher
  postVoucherData(voucherJsonData){
    return this.http.post(AppSettings.BACKEND_URL + this.postVoucherURL, voucherJsonData)    
  }
  getVoucherNames(){
    return this.http.get(AppSettings.BACKEND_URL + this.getVoucherNamesURL)
  }
  getAllVouchers(){
    return this.http.get(AppSettings.BACKEND_URL + this.getAllVouchersURL)
  }

  
}
