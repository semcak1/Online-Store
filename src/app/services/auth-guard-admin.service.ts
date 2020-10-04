import { Injectable } from '@angular/core';
import { Router,CanActivate } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';
import { BackendService } from './backend.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardAdminService implements CanActivate {

  constructor(private backendService:BackendService) { }

    canActivate()
    :Observable<boolean>{
    return this.backendService.isUserAdmin()
    .take()
    .map(res=>{
      if(res){
         return res.isAdmin;
      }else{
        return false;
      }
    })
    .do(isAdmin=>{
      console.log(isAdmin)
      return true;
    })
  }
}
