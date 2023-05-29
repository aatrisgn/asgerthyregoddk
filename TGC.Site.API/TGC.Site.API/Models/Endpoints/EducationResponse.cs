﻿using TGC.Site.API.Models.DTOs;

namespace TGC.Site.API.Models.Endpoints;

public class EducationResponse
{
	public string? Title { get; set; }
	public string? SubTitle { get; set; }
	public string? Timespan { get; set; }
	public string? Summary { get; set; }

	public EducationResponse(string title, string subTitle, string timeSpan, string summary)
	{
		Title = title;
		SubTitle = subTitle;
		Timespan = timeSpan;
		Summary = summary;
	}

	public EducationResponse(EducationItem c)
	{
		Title = c.Title;
		SubTitle = c.SubTitle;
		Timespan = c.Timespan;
		Summary = c.Summary;
	}
}
