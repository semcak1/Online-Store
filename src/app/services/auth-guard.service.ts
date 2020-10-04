import { Injectable } from '@angular/core';
import { Router,CanActivate } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(public afAuth:AngularFireAuth,private router:Router) { }
  canActivate():Observable<boolean>{
    return Observable.call(this.afAuth.authState)
    .take(1)
    .map(state=> !!state)
    .do(authenticated => {
      if(!authenticated){
        this.router.navigate(['/login'])
      }
    })
  }
}
