export class experienceItem {
    Title:string;
    Subtitle:string;
    TimeSpan:string;
    Summary:string;

    constructor(title:string, subtitle:string, timespan:string, summary:string){
        this.Title = title;
        this.Subtitle = subtitle;
        this.TimeSpan = timespan;
        this.Summary = summary;
    }

    static FromJsonString(jsonElement: { Title: string; SubTitle: string; Timespan: string; Summary: string; }) : experienceItem{
        return new experienceItem(jsonElement.Title, jsonElement.SubTitle, jsonElement.Timespan, jsonElement.Summary);
    }
}