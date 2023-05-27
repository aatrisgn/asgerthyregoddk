namespace TGC.Site.API.Models.Endpoints;

internal class EmailRequest
{
	public string Email { get; }
	public string Name { get; }
	public string Textarea { get; }

	public EmailRequest(string email, string name, string textArea)
	{
		Email = email;
		Name = name;
		Textarea = textArea;
	}
}
