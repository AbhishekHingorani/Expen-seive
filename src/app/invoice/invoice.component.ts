import { Component, OnInit } from '@angular/core';
import { Select2OptionData } from 'ng-select2/ng-select2/ng-select2.interface';
import { BackEndCalls } from '../services/backendcalls.service';

declare interface TableData {
  headerRow: string[];
  dataRows: string[][];
}

@Component({
  selector: 'invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit {

  public invoiceCustomer: Array<Select2OptionData>;
  public invoiceProduct: Array<Select2OptionData>;
  public invoiceCompany: Array<Select2OptionData>;
  
  public options: Select2Options;

  public tableData1: TableData;
  private newTableRow: any = {};

  private subTotal: number = 0.0;


  constructor(private service: BackEndCalls) { }

  ngOnInit() {
    this.service.getCustomers()
      .subscribe(response => {
        console.log(response.json());
        this.invoiceCustomer = response.json();
        this.options = {
          allowClear: true
        }
      });
    
      this.service.getProducts()
    .subscribe(response => {
      console.log(response.json());
      this.invoiceProduct = response.json();
      this.options = {
        allowClear: true
      }
    });

    this.service.getInvoiceCompany()
    .subscribe(response => {
      console.log(response.json());
      this.invoiceCompany = response.json();
      this.options = {
        allowClear: true
      }
    });
      
    this.tableData1 = {
      headerRow: [ '#', 'Company', 'Product', 'Price', 'Qty', 'Total', 'Remove'],
      dataRows: []
   };
  }

  productNameChanged(event){
    console.log(JSON.stringify(["productId", event.value]));
    this.newTableRow[1] = event.data[0].text;
  }

  companyChanged($event){
    //console.log(JSON.stringify(["companyId", event]));
    console.log($event);
    this.newTableRow[0] = $event.data[0].text;
  }

  addRow(){
    if(this.newTableRow[0]==null || this.newTableRow[1]==null || this.newTableRow[2]==null || this.newTableRow[3]==null || this.newTableRow[4]==null){
      this.notification.showNotification('top','center');
    }
    else{
      console.log('new Row : ' + this.newTableRow.product);
      this.tableData1.dataRows.push(this.newTableRow);
      this.newTableRow = {};

      this.calcInvoiceSubTotal();
    }
  }

  deleteRow(index){
    this.tableData1.dataRows.splice(index, 1);
  }

  calcTotal(){
    this.newTableRow[4] = this.newTableRow[3] * this.newTableRow[2];
  }

  calcInvoiceSubTotal(){
    this.subTotal = 0.0;
    this.tableData1.dataRows.forEach(element => {
      this.subTotal = this.subTotal + Number(element[4]);
      console.log(element[4]);
    });

    console.log(this.subTotal);
  }



  notification = {
      showNotification: function(from, align){
        
        $['notify']({
          icon: "pe-7s-info",
          message: "Fields must not be empty."

      },{
        type: 'danger',
        timer: 20,
        placement: {
          from: from,
          align: align
        }
      });
        
    }
  }
}
