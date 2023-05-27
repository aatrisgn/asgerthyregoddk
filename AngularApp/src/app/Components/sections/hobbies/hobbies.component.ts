import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'section-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.css']
})
export class HobbiesComponent implements OnInit {

  constructor() { }
  public panelOpenState: boolean = false;

  ngOnInit(): void {
  }

}
