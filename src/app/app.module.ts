import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app.routing';
import { NavbarModule } from './shared/navbar/navbar.module';
import { FooterModule } from './shared/footer/footer.module';
import { SidebarModule } from './sidebar/sidebar.module';
import { LbdModule } from './lbd/lbd.module';

import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { AddProductComponent } from './product/add-product/add-product.component';
import { NgSelect2Module } from 'ng-select2';
import { AddCustomerComponent } from './customer/add-customer/add-customer.component';
import { AddVoucherComponent } from './voucher/add-voucher/add-voucher.component';
import { AppSettings } from './services/app-settings.service';
import { InvoiceComponent } from './invoice/invoice.component';
import { BackEndCalls } from './services/backendcalls.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddProductComponent,
    AddCustomerComponent,
    AddVoucherComponent,
    InvoiceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NavbarModule,
    FooterModule,
    SidebarModule,
    RouterModule,
    AppRoutingModule,
    LbdModule,
    NgSelect2Module
  ],
  providers: [
    BackEndCalls,
    AppSettings
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
