import { Component, OnInit } from '@angular/core';
import { Bank } from '../../models/bank';
import { NgForm } from '@angular/forms';
import { BackEndCalls } from '../../services/backendcalls.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'add-bank',
  templateUrl: './add-bank.component.html',
  styleUrls: ['./add-bank.component.scss']
})
export class AddBankComponent implements OnInit {

  bank: Bank = {} as Bank;

  constructor(private service: BackEndCalls, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap
      .subscribe(params => {
        this.bank.id = Number(params.get('bank-id'));
      });

    //this.service.getPinCodes(){
    //}

    if(this.bank.id != null){
      // this.service.getSingleBank(JSON.stringify({'bankId':this.bank.id}))
      //   .subscribe((data) => {
      //     let b = data.json().product[0];
          
      //     this.bank.name = b.name;
      //     this.bank.acNo = b.acNo;
      //     this.bank.gstNo = b.gstNo;
      //     this.bank.bsrCode = b.bsrCode;
      //     this.bank.pincode = b.pincode;
      //     this.bank.address = b.address;
      //   });
    }
  }

  submit(form: NgForm) {
    let data = JSON.stringify(form.value);
    console.log(data);

    if(this.bank.id == 0)
    {
      this.service.postNewBankData(data)
        .subscribe((data) => {
          console.log(data);
        });
    }
    else
    {
      this.service.editBank(data)
      .subscribe((data) => {
        console.log(data);
      });
    }
  }

}
