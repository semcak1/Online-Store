import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import * as firebase from 'firebase';

import { Observable } from 'rxjs';
import {environment} from '../../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class BackendService {

database=[{
  'id':"1",
  'price':"333",
  'name':"Buz dolabı",
  'category':'Beyaz Eşya',
  'scategory':"test",        
},{
  'id':"2",
  'price':"444",
  'name':"Mac Pro",
  'category':'Laptop',
  'scategory':"test 2",        
},{
  'id':"3",
  'price':"555",
  'name':"Zeee",
  'category':'Telefon',
  'scategory':"test 3",        
}
]
  
private itemsCollection:AngularFirestoreCollection<any>
private itemDoc:AngularFirestoreDocument<any>;
item:Observable<any>;
  constructor(public afAuth: AngularFireAuth,private afs:AngularFirestore) { }

  login(loginType,formData) {
    // this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    if(formData){
      return this.afAuth.auth.signInWithEmailAndPassword(formData.email,formData.password)
    }else{
      let loginMethod;
      if (loginType == 'FB'){loginMethod = new firebase.auth.FacebookAuthProvider();}
      if (loginType == 'GOOGLE'){loginMethod = new firebase.auth.GoogleAuthProvider();}
      return this.afAuth.auth.signInWithPopup(loginMethod);
    }
  }  

  //method to retreive firevase auth after logşn redirect
  redirectLogin(){
    return this.afAuth.auth.getRedirectResult();
  }
  logout() {
    return this.afAuth.auth.signOut();
  }

  isUserLoggedIn():Observable<boolean>{
    console.log(this.afAuth.authState)
    return Observable.call(this.afAuth.authState)
    .take(1)
    .map(state=>!!state)
    .do(authenticated=>{
      return authenticated;
    })
  }

  isUserAdmin(){
    let colUrl=!this.isUserLoggedIn()? "user is not logged in" : this.afAuth.auth.currentUser.uid;
    colUrl="onlineStore/semih/admins/"+colUrl;
    return this.getDoc(colUrl)
  }

  getDoc(colUrl:string){
    this.itemDoc = this.afs.doc<any>(colUrl);
    return  this.itemDoc.valueChanges();
    
  }

  get timeStamp(){
    var d=new Date();
    return d;
  }

  getCollectionUrl(filter){
    return "onlineStore/semih/"+filter;
  }

  setDocs(coll:string,data:any,docId?:any){
     const id=this.afs.createId();
     const item={id,name};
     const timeStamp=this.timeStamp
     var docRef=this.afs.collection(this.getCollectionUrl(coll)).doc(item.id);
     return docRef.set({
       ...data,id:id,
       updatedAt:timeStamp,
       createdAt:timeStamp,
       delete_flag:"N",
       authid:this.afAuth.auth.currentUser.uid,
       username:this.afAuth.auth.currentUser.displayName,
       useremail:this.afAuth.auth.currentUser.email
     });
  }

  getDocs(coll:string,filters?:any){
    this.itemsCollection=this.afs.collection<any>(this.getCollectionUrl(coll))
    return this.itemsCollection.valueChanges(); 
  }

  getSocial(){
    return environment.social
  }

  //fake functions Below
  getCounter(){
    let fakeResponse="10";
    return Observable.create(
      observer=>{
        setTimeout(() => {
          observer.next(fakeResponse)
        }, 3000);
      }
    )
  }

  getUserStatus(){
   let fakeRespone=true;
   return Observable.create(
     observer=>{
       setTimeout(() => {
         observer.next(fakeRespone)
       }, 2000);
     }
   )
  }
 
  getProducts(colType){
    let fakeResponse=this.database;
    return Observable.create(observer=>{
      setTimeout(() => {
        observer.next(fakeResponse)
      }, 200);
    })
  }

  getProduct(id:String){
    return this.database.find(products=>products.id===id)
  }

  setProducts(product){   
    const selectedProduct=this.database.find(products=>
      products.id===product.id)
    let index=this.database.indexOf(selectedProduct)
    this.database.splice(index,1,selectedProduct)  
  }

  addProduct(product){  
    const len=this.database.length;
    const index=len-1;
    this.database.splice(len,0,product)    
  }

  deleteProduct(colType,id){  
    
    const selectedProduct=this.database.find(product=>product.id===id)
    const index=this.database.indexOf(selectedProduct);
    return this.database.splice(index,1)
    
  }

  updateShoppingInterest(collType,data){
    let fakeResponse=true;
    return Observable.create(observer=> {
      setTimeout(() => {
        observer.next(fakeResponse)
      }, 2000);
    })
  }

  updateShoppingCart(collType,data){
    let fakeResponse=true;
    return Observable.create(observer=> {
      setTimeout(() => {
        observer.next(fakeResponse)
      }, 2000);
    })
  }
}
