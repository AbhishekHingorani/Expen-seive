import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: 'dashboard', title: 'Dashboard',  icon: 'pe-7s-graph', class: '' },
    { path: 'product-manager', title: 'Product',  icon: 'pe-7s-box2', class: '' },
    { path: 'add-customer', title: 'Customer/Seller',  icon: 'pe-7s-users', class: '' },
    { path: 'add-voucher', title: 'Voucher',  icon: 'pe-7s-news-paper', class: '' },
    { path: 'invoice', title: 'Invoice',  icon: 'pe-7s-note2', class: '' }
    { path: 'add-accounting-entity', title: 'Accounts',  icon: 'pe-7s-note2', class: '' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
