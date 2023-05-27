﻿
namespace TGC.Site.API.Models.Endpoints;

internal class CertificateResponse
{
	public string Title { get; set; }
	public string SubTitle { get; set; }
	public string Timespan { get; set; }
	public string Summary { get; set; }

	public CertificateResponse(string title, string subTitle, string timeSpan, string summary)
	{
		Title = title;
		SubTitle = subTitle;
		Timespan = timeSpan;
		Summary = summary;
	}
}
