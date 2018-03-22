import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss']
})
export class AddCustomerComponent implements OnInit {
  constructor() { }

  ngOnInit(){
    
  }

  addCustomer(form :NgForm)
  {
    let jsonData = JSON.stringify(form.value);
    console.log(jsonData);
    console.log("<----------------------->")
    // this.http.post('http://10.100.70.24/expen_seive/add_product_insert.php', jsonData)
    //   .subscribe((data)=>{
    //     console.log(data);
        
    //   });
  }
}
