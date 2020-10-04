import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Output() toggleField = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }
  toggle(filter?){
    if(!filter){
      filter="searchMode"
    }else{
      filter=filter;
    }
    
    this.toggleField.emit(filter);
  }

  getFilterData(product){
    console.log(product)
    
  }
}
