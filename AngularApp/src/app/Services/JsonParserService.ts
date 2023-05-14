import { Injectable } from "@angular/core";
import { experienceItem } from "../models/experienceItem";

@Injectable()
export class JsonParserService {

    constructor(){}

    PopulateParsedExperienceData(rawData:Array<{ Title: string; SubTitle: string; Timespan: string; Summary: string; }>):Array<experienceItem>{ 
        let parsedExperienceData:Array<experienceItem> = []

        rawData.forEach((jsonElement)=> {
          parsedExperienceData.push(experienceItem.FromJsonString(jsonElement));
        });

        return parsedExperienceData;
      }
}
