import { Component, Input, OnInit } from '@angular/core';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() headTitle:string;
  @Input() iconTitle:string;
  @Input() helpTitle:string;
  socialLink;
  counter:string;
  userStatusColor=""
  constructor(private backendService:BackendService) { }

  ngOnInit() {
   
    this.socialLink=this.backendService.getSocial();
    this.getUserStatus();
    this.getCounter();
    console.log()
  }

  getCounter(){
    this.backendService.getCounter().subscribe(
      res=>{
        this.counter=res
      }
    )
  }


  getUserStatus(){
    this.backendService.getUserStatus().subscribe(res=>{
      this.userStatusColor = res ? "accent":"";
    })
  }


}
