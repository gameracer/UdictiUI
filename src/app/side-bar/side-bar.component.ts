import { Component, OnInit } from '@angular/core';
import {menus} from './menus'

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
 menus=menus;
  constructor() { }

  
  ngOnInit() {
  
  }

}