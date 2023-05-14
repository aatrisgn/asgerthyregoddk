import { Component, OnInit } from '@angular/core';
import { ɵNgNoValidate } from '@angular/forms';
import { experienceItem } from 'src/app/models/experienceItem';
import { JsonParserService } from 'src/app/Services/JsonParserService';

@Component({
  selector: 'section-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
  providers:[JsonParserService]
})
export class ExperienceComponent implements OnInit {
  //Services
  private _jsonParserService:JsonParserService;

  parsedExperienceData: Array<experienceItem> = [];

  constructor(private jsonParserService:JsonParserService) { 
    this._jsonParserService = jsonParserService;
    
  }

  ngOnInit(): void {
    this.parsedExperienceData = this._jsonParserService.PopulateParsedExperienceData(experienceData);
  }
}

const experienceData = [
  {
    "Title":"Software Engineer",
    "SubTitle":"cVation / Financial Software",
    "Timespan":"January, 2023 - Present",
    "Summary":"Working as a software engineer consultant assisting a large danish finansial software provider with creating and maintaning modern cloud-first SaaS solutions within Azure and .Net."
  },
  {
    "Title":"Senior IT-Architect",
    "SubTitle":"Netcompany / Financial institution",
    "Timespan":"September, 2022 - January, 2023",
    "Summary":"Consultant for Netcompany assisting a large danish financial institution with discovery and pre-analysis for modernizing their IT capabilities for commercial sector."
  },
  {
    "Title":"Senior IT-Architect",
    "SubTitle":"Netcompany / Government Agency",
    "Timespan":"December, 2021 - September, 2022",
    "Summary":"Consultant for Netcompany assisting a government agency with maintaning and developing their IT-systems and capabilities within .Net ecosystem and Windows server. Primary focus was assisting with making architectural decisions and defining roadmap / milestones."
  },
  {
    "Title":"IT Consultant",
    "SubTitle":"Netcompany / Government Agency",
    "Timespan":"August, 2019 - December, 2021",
    "Summary":"Consultant for Netcompany assisting a government agency with maintaning and developing their IT-systems and capabilities within .Net ecosystem and Windows server. Primary focus was development and ensuring steady operation."
  },
  {
    "Title":"Software Developer",
    "SubTitle":"Nordic Insurance Software",
    "Timespan":"August, 2018 - August, 2019",
    "Summary":"Developing and automating internal processes utilizing Octopus Deploy and assisting with maintaining existing insurance products in .Net Framework."
  },
  {
    "Title":"Student Software Developer",
    "SubTitle":"Nordic Insurance Software",
    "Timespan":"Jan, 2018 - August, 2018",
    "Summary":"Developing and automating internal processes utilizing Octopus Deploy and assisting with maintaining existing insurance products in .Net Framework."
  },
  {
    "Title":"Online Marketing Consultant",
    "SubTitle":"AdNudging",
    "Timespan":"okt, 2014 - Jan, 2018",
    "Summary":"A position which initially started as a web developer for a clothing outlet company, developed into starting a consultancy firm for Online Marketing with one of my study-mates from university. We assisted online shops with online marketing and website optimization."
  },
  {
    "Title":"External Consultan",
    "SubTitle":"Oxfam Ibis",
    "Timespan":"Jan, 2017 - Jan, 2018",
    "Summary":"Assisted a grant manager implementing the global reporting standard IATI for NGO's."
  },
  {
    "Title":"Cashier",
    "SubTitle":"Amager Isenkræmmer",
    "Timespan":"Nov, 2009 - okt, 2014",
    "Summary":"Part-time cashier and general assistance at a local hardware store. This was my first stable job which I had for 5 years."
  }
]