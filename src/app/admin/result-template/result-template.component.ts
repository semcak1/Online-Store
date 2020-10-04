import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'result-template',
  templateUrl: './result-template.component.html',
  styleUrls: ['./result-template.component.css']
})
export class ResultTemplateComponent implements OnInit {

  @Output() toggleField = new EventEmitter<any>();
  @Output() id = new EventEmitter<string>();

  displayedColumns: string[] = ['id', 'name', 'category', 'scategory','price','action'];
  dataSource: MatTableDataSource<any>;
  savedChanges=false;
  error:boolean=false;
  errorMessage:string="";
  dataLoading:boolean=false;  
  private querySubscription;
  editingProduct;
  database;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  members:any[];

  constructor(private bakcendService:BackendService) {
    
  }

  ngOnInit() {
    this.database
    this.getData()
    
  
  
  }
  //componentler arası geçiş
  toggle(filter?){
    if(!filter){
      filter="searchMode"
    }else{
      filter=filter;
    }
    
    this.toggleField.emit(filter);
  }

  //dataların alınması
  getData(){
    this.dataLoading=true;
    this.bakcendService.getDocs('products')
    .subscribe(members=>{  
      console.log(members)    
      this.members=members;
      this.dataSource=new MatTableDataSource(members);
      this.dataSource.paginator=this.paginator;
      this.dataSource.sort=this.sort;
    })
  }



  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getDoc(id:string){
    console.log(id)
    this.id.emit(id)
  }
  
  deleteDoc(id:string){
    if(confirm('Are you sure to delete hids')){
    this.bakcendService.deleteProduct('product',id)
    }    
    this.getData()   
    
    
  }
}


