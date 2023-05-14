import { Component, OnInit } from '@angular/core';
import { NavbarItem } from 'src/app/models/navbarItem';
import { NavbarService } from 'src/app/Services/NavbarService';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  private _navbarService:NavbarService;
  
  NavbarItems:Array<NavbarItem>

  constructor(navbarService:NavbarService) {
    this._navbarService = navbarService;
    this.NavbarItems = this._navbarService.GetNavbarItems();
  }

  ngOnInit(): void {
    
  }

}
