import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: 'dashboard', title: 'Dashboard', icon: 'pe-7s-graph', class: '' },
    { path: 'product-manager', title: 'Product', icon: 'pe-7s-box2', class: '' },
    { path: 'customer-manager', title: 'Customer/Seller', icon: 'pe-7s-users', class: '' },
    { path: 'voucher-manager', title: 'Voucher', icon: 'pe-7s-news-paper', class: '' },
    { path: 'invoice-manager', title: 'Invoice', icon: 'pe-7s-note2', class: '' },
    { path: 'bank-manager', title: 'Bank', icon: 'pe-7s-piggy', class: '' },
    { path: 'add-accounting-entity', title: 'Accounts', icon: 'pe-7s-add-user', class: '' },
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
