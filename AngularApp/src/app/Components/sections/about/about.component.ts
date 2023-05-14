import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'section-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  emailAddress:string = "asger.thyregod@gmail.com";
  yearsOfExperience:number;
  age:number;

  constructor() {
    this.yearsOfExperience = this.calculateYearsOfExperience();
    this.age = this.calculateAge();
  }

  ngOnInit(): void {
  }

  private calculateAge() : number{
    return this.calculateYearsSinceDate("1994-04-26");
  }

  private calculateYearsOfExperience() : number{
    return this.calculateYearsSinceDate("2018-08-01");
  }

  private calculateYearsSinceDate(dateString:string) : number{
    let dateNow = Date.now();
    let birthDate = new Date(dateString).getTime();
    let timeDifference = Math.abs(dateNow - birthDate);
    let age = Math.floor((timeDifference / (1000 * 3600 * 24))/365.25);
    return age;
  }

}
