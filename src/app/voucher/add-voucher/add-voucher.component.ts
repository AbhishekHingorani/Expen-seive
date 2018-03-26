import { Component, OnInit } from '@angular/core';
import { Select2OptionData } from 'ng-select2/ng-select2/ng-select2.interface';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'add-voucher',
  templateUrl: './add-voucher.component.html',
  styleUrls: ['./add-voucher.component.scss']
})
export class AddVoucherComponent implements OnInit {

  public voucherFrom: Array<Select2OptionData>;
  public voucherTo: Array<Select2OptionData>;
  public options: Select2Options;

  constructor() { }

  ngOnInit() {
    this.voucherFrom = [{"id":"1","text":"arvind"},{"id":"2","text":"raymond"}];
    this.voucherTo = [{"id":"1","text":"arvind"},{"id":"2","text":"raymond"}];
    this.options = {
      allowClear: true
    }
  }

  submit(form: NgForm){
      console.log(form.value);
  }

}
