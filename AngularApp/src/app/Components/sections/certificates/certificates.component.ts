import { Component, OnInit } from '@angular/core';
import { experienceItem } from 'src/app/models/experienceItem';
import { JsonParserService } from 'src/app/Services/JsonParserService';

@Component({
  selector: 'section-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.css'],
  providers:[JsonParserService]
})
export class CertificatesComponent implements OnInit {
  
  public panelOpenState: boolean = false;
  public parsedCertificateData: Array<experienceItem> = [];

  private _jsonParserService:JsonParserService;

  constructor(private jsonParserService:JsonParserService) {
    this._jsonParserService = jsonParserService;
  }

  ngOnInit(): void {
    this.parsedCertificateData = this._jsonParserService.PopulateParsedExperienceData(certificateData);
  }
}

const certificateData = [
  {
    "Title":"Developing solutions for Microsoft Azure",
    "SubTitle":"Microsoft",
    "Timespan":"2023",
    "Summary":"Focus on how to develop and maintain software solutions in Microsoft Azure"
  },
  {
    "Title":"Azure Fundamentals",
    "SubTitle":"Microsoft",
    "Timespan":"2021",
    "Summary":"Introduction to Azure and the services it provides"
  },
  {
    "Title":"Programming in C#",
    "SubTitle":"Microsoft",
    "Timespan":"2020",
    "Summary":"Utilizing C# and understanding what is possible within the language and .Net Framework"
  }
]