import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'setproduct',
  templateUrl: './setproduct.component.html',
  styleUrls: ['./setproduct.component.css']
})
export class SetproductComponent implements OnInit {
toggleField:string;
selectedProductId:string;

  constructor() { }

  ngOnInit() {
    this.toggleField="searchMode"

    
  }
  toggle(filter?){
    if(!filter){
      filter="searchMode"
    }else{
      filter=filter;
    }
    this.toggleField=filter
  }

// iconlara tıkladığında ilgili sayfaları açan kod.
  redirectToMode(event){
    this.toggleField=event;
  }

  getFilterData(value){
    console.log(value)
  }

  productId(id){
    console.log(id)
    this.selectedProductId=id
  }
}
