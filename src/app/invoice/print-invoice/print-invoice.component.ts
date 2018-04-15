import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BackEndCalls } from '../../services/backendcalls.service';

@Component({
  selector: 'print-invoice',
  templateUrl: './print-invoice.component.html',
  styleUrls: ['./print-invoice.component.scss']
})
export class PrintInvoiceComponent implements OnInit {

  private invoiceNo: string;
  private customerName: string;
  private customerAddress: string;
  private customerState: string;
  private customerCity: string;
  private customerPincode: string;
  private invoiceDate: Date;
  private invoiceCashCredit: string;
  private cgstPer: number;
  private sgstPer: number;
  private igstPer: number;
  private cgstAmt: number;
  private sgstAmt: number;
  private igstAmt: number;
  private subTotal: number;
  private grandTotal: number;
  private additionalExpTxt: string;
  private additionalExpAmt: number;
  private itemRows: string[][];  //company, productName, price, qty, total

  constructor(private service: BackEndCalls, private route: ActivatedRoute) {  
    this.customerName= 'Mr Anthony Gonsalvis';
    this.customerAddress= '221-B Bakers Street';
    this.customerState= 'London';
    this.customerCity= 'UK';
    this.customerPincode= '123456';
    this.invoiceDate= new Date("2-10-2016");
    this.invoiceCashCredit= 'Cash';
    this.cgstPer= 2.5 ;
    this.sgstPer= 2.5;
    this.igstPer= 2.5;
    this.cgstAmt= 125;
    this.sgstAmt= 125;
    this.igstAmt= 125;
    this.subTotal= 5000;
    this.grandTotal= 5385;
    this.additionalExpTxt= 'Transport';
    this.additionalExpAmt= 10;
    this.itemRows= [ 
      ['Raymond','Blue Shirt','500', '2', '1000'],
      ['Arvind','Pink Suit','1800', '1', '1800'],
      ['Siyaram','Black Pant','600', '3', '1800'],
      ['Raymond','Green Shirt','400', '5', '2000'] 
    ];
  }

  ngOnInit() {
    this.route.paramMap
      .subscribe(params => {
        this.invoiceNo = params.get('invoice-id');
      });

    this.service.getSingleInvoice(JSON.stringify({'id':this.invoiceNo}))
      .subscribe((data) => {
        //let invoice = data.json();//.product[0];
        
        //assign values here
    });
      
  }

  print(){
    window.print();
  }

}
