import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'edit-template',
  templateUrl: './edit-template.component.html',
  styleUrls: ['./edit-template.component.css']
})
export class EditTemplateComponent implements OnInit {
  @Output() toggleValue = new EventEmitter<string>();
  editingProduct;
  // id:string="3";
  @Input() selectedProductId:string;
  savedChanges:boolean;
  dataLoading:boolean;
  error;
  errorMessage;
  constructor(private backendService:BackendService) { }

  ngOnInit() {
    this.getData(this.selectedProductId)
    
    
  }
  toggle(state){
    if(!state){
      state="searchMode"
    }else{
     state=state;
    }
    this.toggleValue.emit(state);
  }

  getData(id:string){    
    this.backendService.getDocs('product').subscribe(products=>{
      products.find(product=>{
       if(product.id===id){
         this.editingProduct=product         
       }       
      })
    })
  }

  setData(FormData){
    console.log(FormData)
    this.backendService.setDocs('product',FormData)
    .then(res=>{      
        this.savedChanges=true;
        this.dataLoading=false;      
    }).catch(error=>{
      this.error=true;
      this.errorMessage=error.message;
      this.dataLoading=false;
    });   
  }
}
