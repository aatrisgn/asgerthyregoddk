using TGC.AzureTableStorage;
using TGC.Site.API.Models.Endpoints;

namespace TGC.Site.API.Models.DTOs;

[TableItem("Emails")]
public class EmailItem : AzureTableItem
{
	public string? Email { get; set; }
	public string? Name { get; set; }
	public string? Textarea { get; set; }

	public EmailItem()
	{
	}

	public EmailItem(EmailRequest emailRequest)
	{
		Email = emailRequest.Email;
		Name = emailRequest.Name;
		Textarea = emailRequest.Textarea;
	}
}
