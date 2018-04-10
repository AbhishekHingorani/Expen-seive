import { Component, OnInit } from '@angular/core';
import { Select2OptionData } from 'ng-select2/ng-select2/ng-select2.interface';
import { BackEndCalls } from '../services/backendcalls.service';
import { NgForm } from '@angular/forms';

declare interface TableData {
  headerRow: string[];
  dataRows: string[][];
}

declare interface UserData{
  customerId: number;
  date: string;
  items: string[][];
  additionalExpText: string;
  additionalExpAmt: number;
  subTotalAmt: number;
  cgstAmt: number;
  sgstAmt: number;
  igstAmt: number;
  grandTotalAmt: number;
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
  public userData: UserData;
  private newTableRow: any = {};
  private fieldDataRow: any = {};
  

  private subTotal: number = 0.0;
  private cgst: number = 0;
  private sgst: number = 0;
  private igst:number = 0;
  private additionalExpense: number = 0;
  private grandTotal: number = 0;

  private cgstPer: number = 2.5;
  private sgstPer: number = 2.5;
  private igstPer: number = 2.5;


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

   this.userData = {
      customerId: 0,
      date: "",
      items: [],
      additionalExpText: '',
      additionalExpAmt: 0,
      subTotalAmt: 0,
      cgstAmt: 0,
      sgstAmt: 0,
      igstAmt: 0,
      grandTotalAmt: 0
   }
  }

  productNameChanged(event){
    console.log(JSON.stringify(["productId", event.value]));
    this.newTableRow[1] = event.data[0].text;
    this.fieldDataRow[1] = event.value;
  }

  companyChanged($event){
    //console.log(JSON.stringify(["companyId", event]));
    console.log($event);
    this.newTableRow[0] = $event.data[0].text;
    this.fieldDataRow[0] = $event.value;
  }

  addRow(){
    if(this.newTableRow[0]==null || this.newTableRow[1]==null || this.newTableRow[2]==null || this.newTableRow[3]==null || this.newTableRow[4]==null){
      this.notification.showNotification('top','center');
    }
    else{
      this.fieldDataRow[2] = this.newTableRow[2];
      this.fieldDataRow[3] = this.newTableRow[3];
      this.fieldDataRow[4] = this.newTableRow[4];

      this.tableData1.dataRows.push(this.newTableRow);
      this.userData.items.push(this.fieldDataRow);
      this.newTableRow = {};
      this.fieldDataRow = {};

      this.calcInvoiceSubTotal();
    }
  }

  deleteRow(index){
    this.tableData1.dataRows.splice(index, 1);
    this.userData.items.splice(index, 1);
    this.calcInvoiceSubTotal();
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

    this.cgst = this.subTotal * (this.cgstPer / 100);
    this.sgst = this.subTotal * (this.sgstPer / 100);
    this.igst = this.subTotal * (this.igstPer / 100);
    this.grandTotal = this.subTotal + this.cgst + this.sgst + this.igst + this.additionalExpense;
    console.log(this.subTotal);
  }

  submit(form: NgForm){
    this.userData.customerId = form.value.invoiceCustomer;
    this.userData.date = form.value.invoiceDate;
    this.userData.additionalExpText = form.value.additionalExpenseText;
    this.userData.additionalExpAmt = this.additionalExpense;
    this.userData.subTotalAmt = this.subTotal;
    this.userData.cgstAmt = this.cgst;
    this.userData.sgstAmt = this.sgst;
    this.userData.igstAmt = this.igst;
    this.userData.grandTotalAmt = this.grandTotal;

    console.log('Json : ' + JSON.stringify(this.userData));
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
