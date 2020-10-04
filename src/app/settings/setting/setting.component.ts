import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {

  settingTitle:string='Settings Conponent Help'

  constructor() { }

  ngOnInit() {
  }

}
