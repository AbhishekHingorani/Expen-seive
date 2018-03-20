import { Component, OnInit } from '@angular/core';
import { Select2OptionData } from 'ng-select2/ng-select2/ng-select2.interface';
import { GetCompaniesService } from './../services/get-companies.service';   

@Component({
  selector: 'add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  public exampleData: Array<Select2OptionData>;
  public options: Select2Options;

  constructor(private service : GetCompaniesService) { }

  ngOnInit() {
    this.service.getCompanies()
      .subscribe(response => {
        console.log(response.json());
        this.exampleData = response.json();
        this.options = {
          placeholder:"Companies",
          allowClear:true
        }
      });
  }

  public companyValueChanged(event){
    console.log(event);
  }
}
