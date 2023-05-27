import { Component, OnInit } from '@angular/core';
import { experienceItem } from 'src/app/models/experienceItem';
import { JsonParserService } from 'src/app/Services/JsonParserService';

@Component({
  selector: 'section-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
  providers:[JsonParserService]
})
export class EducationComponent implements OnInit {
  public panelOpenState: boolean = false;
  private _jsonParserService:JsonParserService;

  parsedEducationData: Array<experienceItem> = [];

  constructor(private jsonParserService: JsonParserService) {
    this._jsonParserService = jsonParserService;
  }

  ngOnInit(): void {
    this.parsedEducationData = this._jsonParserService.PopulateParsedExperienceData(educationData);
  }
}

const educationData = [
  {
    "Title":"MSc in Business Administration and Information Systems (IT Management and Business Economics) with minor in Supply Chain Management",
    "SubTitle":"Copenhagen Business School",
    "Timespan":"2016 - 2018",
    "Summary":"Understanding the possibilities and challenges IT solutions provide from a management perspective with a focus on how and where to generate value."
  },
  {
    "Title":"Bachelor of Business Administration & Information Technology",
    "SubTitle":"Copenhagen Business School",
    "Timespan":"2013 - 2016",
    "Summary":"Understanding business economics and introduction to software development and how IT-systems can be utilized to provide value and cut costs."
  },
  {
    "Title":"Social Science & Language",
    "SubTitle":"Christianshavn Gymnasium",
    "Timespan":"2010 - 2013",
    "Summary":"Focus on social science, mathmatics and language (English & Spanish)"
  }
]