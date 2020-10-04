import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'add-template',
  templateUrl: './add-template.component.html',
  styleUrls: ['./add-template.component.css']
})
export class AddTemplateComponent implements OnInit {
  @Output() toggleField = new EventEmitter<string>();
  savedChanges: boolean;
  dataLoading: boolean;
  error: boolean;
  errorMessage: any;
  constructor(private backendService:BackendService) { }

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
  setData(formData){
    console.log(formData)
    this.backendService.setDocs('product',formData)
    .then(res=>{
      console.log(res)
      this.savedChanges=true;
      this.dataLoading=false;
    }).catch(error=>{
      this.error=true;
      this.errorMessage=error.message;
      this.dataLoading=false;
    })
  }
}
