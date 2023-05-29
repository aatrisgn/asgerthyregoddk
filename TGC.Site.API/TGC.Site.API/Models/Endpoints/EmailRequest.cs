namespace TGC.Site.API.Models.Endpoints;

public class EmailRequest
{
	public string? Email { get; set; }
	public string? Name { get; set; }
	public string? Textarea { get; set; }

	public EmailRequest(string email, string name, string textArea)
	{
		Email = email;
		Name = name;
		Textarea = textArea;
	}

	public EmailRequest()
	{
	}
}
