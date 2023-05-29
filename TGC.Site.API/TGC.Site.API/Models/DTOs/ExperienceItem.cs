using TGC.AzureTableStorage;

namespace TGC.Site.API.Models.DTOs;

[TableItem("Experiences")]
public class ExperienceItem : AzureTableItem
{
	public string? Title { get; set; }
	public string? SubTitle { get; set; }
	public string? Timespan { get; set; }
	public string? Summary { get; set; }
}
