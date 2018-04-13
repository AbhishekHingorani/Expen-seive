import { Component, OnInit } from '@angular/core';
import { DataTableResource } from 'angular-4-data-table-bootstrap-4';
import { Product } from '../../models/product';

@Component({
  selector: 'view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.scss']
})
export class ViewProductsComponent implements OnInit {

  p: Product[] = [
    {
    id: 1,
    company: 'Raymond',
    name: 'polkaDot',
    type: 'shirt',
    mtrQty: 'mtr',
    hsnCode: '998877',
    stock: 30,
    reorderLevel: 20,
    price: 500
   },
   {
    id: 1,
    company: 'Qmax',
    name: 'stripes',
    type: 'pant',
    mtrQty: 'mtr',
    hsnCode: '998877',
    stock: 30,
    reorderLevel: 20,
    price: 1500
   },
   {
    id: 1,
    company: 'Arvind',
    name: 'Checks',
    type: 'box',
    mtrQty: 'qty',
    hsnCode: '998877',
    stock: 30,
    reorderLevel: 20,
    price: 600
   },
   {
    id: 1,
    company: 'Siyaram',
    name: 'suit',
    type: 'suit',
    mtrQty: 'mtr',
    hsnCode: '998877',
    stock: 30,
    reorderLevel: 20,
    price: 12500
   },
   {
    id: 1,
    company: 'Siyaram',
    name: 'shirt',
    type: 'shirting',
    mtrQty: 'mtr',
    hsnCode: '998877',
    stock: 30,
    reorderLevel: 20,
    price: 12500
   }
  ];

  products: Product[] = [];  //Complete list of products
  items: Product[] = [];     ///list of products only in current page
  itemCount: number;
  tableResourse: DataTableResource<Product>;

  constructor() { }

  ngOnInit() {
    this.products = this.p;
    //this.products.push(this.p);
    this.initializeTable(this.products);
  }

  private initializeTable(products: Product[]){
    this.tableResourse = new DataTableResource(products);
    this.tableResourse.query({offset: 0})
      .then(items => this.items = items);
    this.tableResourse.count()
      .then(count => this.itemCount = count);
  }

  reloadProducts(params){

    if(!this.tableResourse) return;

    this.tableResourse.query(params)
      .then(items => this.items = items);
  }

  filter(query: string){
    let filteredProducts = (query) ?
      this.products.filter(p => p.name.toLowerCase().includes(query.toLowerCase())) : 
      this.products;

      this.initializeTable(filteredProducts);
  }
}
