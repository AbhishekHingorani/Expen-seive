import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AddProductComponent } from './product/add-product/add-product.component';
import { AddCustomerComponent } from './customer/add-customer/add-customer.component';
import { AddVoucherComponent } from './voucher/add-voucher/add-voucher.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { AddAccountingEntityComponent } from './account-entity/add-accounting-entity/add-accounting-entity.component';
import { AddProductTypeComponent } from './product/add-product-type/add-product-type.component';
import { ProductManagerComponent } from './product/product-manager/product-manager.component';

const routes: Routes =[
    { path: 'dashboard',      component: HomeComponent },
    { path: 'add-product',      component: AddProductComponent },
    { path: 'add-customer',      component: AddCustomerComponent },
    { path: 'add-voucher',      component: AddVoucherComponent },
    { path: 'invoice',      component: InvoiceComponent},
    { path: 'add-accounting-entity',      component: AddAccountingEntityComponent},
    { path: 'add-product-type',      component: AddProductTypeComponent},
    { path: 'product-manager',      component: ProductManagerComponent},        
    { path: '',          redirectTo: 'dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
