import { Component, OnInit } from '@angular/core';
import { Select2OptionData } from 'ng-select2/ng-select2/ng-select2.interface';
import { GetCompaniesService } from './../../services/get-companies.service';   
import { Http } from '@angular/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  public companies: Array<Select2OptionData>;
  public productTypes: Array<Select2OptionData>;
  public options: Select2Options;

  constructor(private service : GetCompaniesService, private http : Http) { }

  ngOnInit() {
    this.service.getCompanies()
      .subscribe(response => {
        console.log(response.json().product_type);
        this.companies = response.json();
        this.productTypes = response.json();
        //this.companies = response.json().company;
        //this.productTypes = response.json().product_type;
        this.options = {
          allowClear:true
        }
      });
  }

  public companyValueChanged(event){
    console.log(event);
  }

  log(form :NgForm)
  {
    let jsonData = JSON.stringify(form.value);
    console.log(jsonData);
    console.log("<----------------------->")
    this.http.post('http://10.100.70.24/expen_seive/add_product_insert.php', jsonData)
      .subscribe((data)=>{
        console.log(data);
        
      });
  }
}
