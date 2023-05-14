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
    "Title":"Senior IT-Architect",
    "SubTitle":"Netcompony / TopDanmark",
    "Timespan":"September, 2022 - Present",
    "Summary":"Consultancy for Netcompany assisting TopDanmark with discovery and pre-analysis for modernizing their IT capabilities for commercial sector."
  },
  {
    "Title":"Senior IT-Architect",
    "SubTitle":"Netcompony / Domstolsstyrelsen",
    "Timespan":"December, 2021 - September, 2022",
    "Summary":"Consultancy for Netcompany assisting Domstolsstyrelsen (Danish government agency for the danish courts) with maintaining the IT-systems for the civil court system. I have the technical resposibility for the whole system making sure to deliver on time and stable releases."
  },
  {
    "Title":"IT Consultant",
    "SubTitle":"Netcompany / Domstolsstyrelsen",
    "Timespan":"August, 2019 - December, 2021",
    "Summary":"Consultancy for Netcompany assisting Domstolsstyrelsen (Danish government agency for the danish courts) with maintaining the IT-systems for the civil court system."
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