import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  userLoggedIn:boolean=false;
  error:boolean=false;
  errorMessage:string="";
  dataLoading:boolean= false;

  constructor(private backendService:BackendService) { }

  ngOnInit() {
    // this.userLoggedIn=false;
    this.getAuthStatus()
  }

  login(filter,formData?){
    //filter is loggin type (email,google or facebook login
    
    console.log(filter)
    console.log(formData)
    this.backendService.login(filter,formData).then(result=>{
      console.log(result)
      this.userLoggedIn=true;
    }).catch(err=>{
      this.error=true;
      this.errorMessage=err.message;
      console.log(err);
      this.userLoggedIn=false;
      this.dataLoading=false;
    })   
    
  }

  logout(){
    this.dataLoading=true;
    this.backendService.logout().then(success=>{
      this.userLoggedIn=false;
      this.dataLoading=false;
    });
  }

  getAuthStatus(){
    this.dataLoading=true;
    this.backendService.redirectLogin().then(result=>{
      if(result.credential){
        console.log('credential')
        console.log(result.credential)
        if(result.credential["accessToken"]!=""){
          return this.userLoggedIn=true;
        }
        this.dataLoading=false;
      }
    }).catch(err=>{
      this.error=true;
      this.errorMessage=err.message;
      console.log(err);
      this.userLoggedIn=false;
      this.dataLoading=false;
    });
    this.dataLoading=false;
  }
}
