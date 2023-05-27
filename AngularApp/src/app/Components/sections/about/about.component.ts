import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'section-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public emailAddress:string = "asger.thyregod@gmail.com";
  public yearsOfExperience:number = 0;
  public monthsOfExperience:number = 0;
  public age:number;

  constructor() {
    this.age = this.calculateAge();
    this.calculateYearsOfExperience();
  }

  ngOnInit(): void {
  }

  private calculateAge() : number{
    return this.calculateYearsSinceDate("1994-04-26");
  }

  private calculateYearsOfExperience() : void{
    this.calculateYearsAndMonthSinceDate("2018-08-01");
  }

  private calculateYearsSinceDate(dateString:string) : number{
    let dateNow = Date.now();
    let birthDate = new Date(dateString).getTime();
    let timeDifference = Math.abs(dateNow - birthDate);
    let age = Math.floor((timeDifference / (1000 * 3600 * 24))/365.25);
    return age;
  }

  private calculateYearsAndMonthSinceDate(dateString:string) : void{
    let dateNow = Date.now();
    let birthDate = new Date(dateString).getTime();
    let timeDifference = Math.abs(dateNow - birthDate);
    let months = Math.floor((timeDifference / (1000 * 3600 * 24))/30.5);
    
    this.yearsOfExperience = Math.floor(months / 12);
    this.monthsOfExperience = months % 12;
  }

}
