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
import { DataTableModule } from 'angular-4-data-table-bootstrap-4';

import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { AddProductComponent } from './product/add-product/add-product.component';
import { NgSelect2Module } from 'ng-select2';
import { AddCustomerComponent } from './customer/add-customer/add-customer.component';
import { AddVoucherComponent } from './voucher/add-voucher/add-voucher.component';
import { AppSettings } from './services/app-settings.service';
import { InvoiceComponent } from './invoice/invoice.component';
import { BackEndCalls } from './services/backendcalls.service';
import { AddAccountingEntityComponent } from './account-entity/add-accounting-entity/add-accounting-entity.component';
import { AddProductTypeComponent } from './product/add-product-type/add-product-type.component';
import { ProductManagerComponent } from './product/product-manager/product-manager.component';
import { ViewProductsComponent } from './product/view-products/view-products.component';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './services/auth.loginguard';
import { ViewVouchersComponent } from './voucher/view-vouchers/view-vouchers.component';
import { VoucherManagerComponent } from './voucher/voucher-manager/voucher-manager.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddProductComponent,
    AddCustomerComponent,
    AddVoucherComponent,
    InvoiceComponent,
    AddAccountingEntityComponent,
    AddProductTypeComponent,
    ProductManagerComponent,
    ViewProductsComponent,
    LoginComponent,
    ViewVouchersComponent,
    VoucherManagerComponent
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
    NgSelect2Module,
    DataTableModule
  ],
  providers: [
    BackEndCalls,
    AppSettings,
    LoginGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
