import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AddProductComponent } from './product/add-product/add-product.component';
import { AddCustomerComponent } from './customer/add-customer/add-customer.component';
import { AddVoucherComponent } from './voucher/add-voucher/add-voucher.component';

const routes: Routes =[
    { path: 'dashboard',      component: HomeComponent },
    { path: 'add-product',      component: AddProductComponent },
    { path: 'add-customer',      component: AddCustomerComponent },
    { path: 'add-voucher',      component: AddVoucherComponent },
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
