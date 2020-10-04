import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products;
  toggle:boolean=true;
  savedChanges=false;
  error:boolean=false;
  errorMessage:string="";
  dataLoading:boolean=false;
  private querySubstring;
  // profilUrl:Observable<string | null>
  profilUrl:string;
  counter: number;
  myDocData;

  constructor(private backendService:BackendService) { }

  ngOnInit() {
    this.getData()
    
  }


  getData(){
    console.log("it works")
    return this.products=this.backendService.database
    console.log(this.products)   
  }

  
  matchedArr=this.getData()
  applyFilter(filterValue: string) {
    this.matchedArr=[]; 
    this.products.forEach(product=>
   {     
     const productArr=Object.values(product)
     const productStr=productArr.join('').toLocaleLowerCase()  
     const isLetterMatched=productStr.includes(filterValue)    

    if(isLetterMatched){      
      this.matchedArr.push(product)
    }
   }
  )}

  
  getPic(picId){
    this.profilUrl=""
  }
  showDetails(product){
    this.counter=0;
    this.myDocData=product;
    this.getPic(product.path);
    this.dataLoading=true;
    let data = product ;
    console.log(this.myDocData)
    return this.backendService.updateShoppingInterest('interest',data).subscribe(success=>{
      this.dataLoading=false;
    })
    
  }

  countProd(filter){
    if(filter=="add"){
      this.counter=this.counter+1;
    }else{
      if(this.counter>0){
        this.counter=this.counter-1;
      }
    }
  }

  addToCart(item,counter){
    this.dataLoading=true;
    let data=item;
    data.qty=counter;
    return this.backendService.updateShoppingCart('cart',data).subscribe(success=>{this.dataLoading=false;
    this.counter=0;
    this.savedChanges=true;})
  }
}
