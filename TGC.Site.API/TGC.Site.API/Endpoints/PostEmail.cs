using System.Net;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.Azure.WebJobs.Extensions.OpenApi.Core.Attributes;
using Microsoft.Extensions.Logging;
using Microsoft.OpenApi.Models;
using TGC.Site.API.Models.Endpoints;

namespace TGC.Site.API.Endpoints;

public class PostEmail
{
	private readonly ILogger<PostEmail> _logger;

	public PostEmail(ILogger<PostEmail> log)
	{
		_logger = log;
	}

	[FunctionName("PostEmail")]
	[OpenApiOperation(operationId: "CreateEmail", tags: new[] { "Email" })]
	[OpenApiRequestBody(contentType: "application/json", bodyType: typeof(EmailRequest), Description = "The payload for sending a new email", Required = true)]
	[OpenApiResponseWithBody(statusCode: HttpStatusCode.OK, contentType: "text/plain", bodyType: typeof(string), Description = "The OK response")]
	public async Task<IActionResult> Run(
		[HttpTrigger(AuthorizationLevel.Anonymous, "post", Route = "Email")] HttpRequest req)
	{
		_logger.LogInformation("C# HTTP trigger function processed a request.");
		return new OkObjectResult("OK");
	}
}

