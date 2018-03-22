import { Component, OnInit, ElementRef, ChangeDetectorRef } from '@angular/core';
import { ROUTES } from '../../sidebar/sidebar.component';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

var PRODUCT_ROUTES: RouteInfo[] = [
    { path: 'dashboard', title: 'Dashboard',  icon: 'pe-7s-graph', class: '' },
    { path: 'add-product', title: 'Add Product',  icon: 'pe-7s-box2', class: '' }
];

var DEFAULT_ROUTES: RouteInfo[] = [
    
];

@Component({
    // moduleId: module.id,
    selector: 'navbar-cmp',
    templateUrl: 'navbar.component.html'
})

export class NavbarComponent implements OnInit{

    menuItems: any[];

    private listTitles: any[];
    location: Location;
    private toggleButton: any;
    private sidebarVisible: boolean;

    constructor(location: Location,  private element: ElementRef, private cdr: ChangeDetectorRef) {
      this.location = location;
          this.sidebarVisible = false;
    }

    ngOnInit(){
      this.listTitles = ROUTES.filter(listTitle => listTitle);
      const navbar: HTMLElement = this.element.nativeElement;
      this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
      this.menuItems = DEFAULT_ROUTES.filter(menuItem => menuItem);
    }

    ngAfterViewChecked() {
        this.cdr.detectChanges();
    }

    sidebarOpen() {
        const toggleButton = this.toggleButton;
        const body = document.getElementsByTagName('body')[0];
        setTimeout(function(){
            toggleButton.classList.add('toggled');
        }, 500);
        body.classList.add('nav-open');

        this.sidebarVisible = true;
    };
    sidebarClose() {
        const body = document.getElementsByTagName('body')[0];
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        body.classList.remove('nav-open');
    };
    sidebarToggle() {
        // const toggleButton = this.toggleButton;
        // const body = document.getElementsByTagName('body')[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        } else {
            this.sidebarClose();
        }
    };

    getTitle(){
      var titlee = this.location.prepareExternalUrl(this.location.path());
      titlee = titlee.split('/').pop();
      for(var item = 0; item < this.listTitles.length; item++){
          if(this.listTitles[item].path === titlee){
              let title = this.listTitles[item].title;
              if(title == "Product"){
                this.menuItems = null;
                this.menuItems = PRODUCT_ROUTES;//.filter(menuItem => menuItem);       
              }
              else if(title == "Dashboard"){
                this.menuItems = DEFAULT_ROUTES;
              }
              else if(title == "Customer"){
                this.menuItems = DEFAULT_ROUTES;
              }
              return title;
          }
      }
      this.menuItems = null;
      this.menuItems = DEFAULT_ROUTES;//DEFAULT_ROUTES.filter(menuItem => menuItem);
      return 'Dashboard';
    }
}
