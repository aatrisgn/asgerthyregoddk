using System.IO;
using System.Net;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.Functions.Worker;
using Microsoft.Azure.WebJobs.Extensions.OpenApi.Core.Attributes;
using Microsoft.Azure.WebJobs.Extensions.OpenApi.Core.Enums;
using Microsoft.Extensions.Logging;
using Microsoft.OpenApi.Models;
using TGC.AzureTableStorage;
using TGC.Site.API.Models.DTOs;
using TGC.Site.API.Models.Endpoints;
using Microsoft.Azure.Functions.Worker.Http;
using TGC.Site.API.Services;

namespace TGC.Site.API.Endpoints;

public class PostEmail
{
	private readonly ILogger<PostEmail> _logger;
	private readonly IAzureTableStorageRepository<EmailItem> _azureTableStorageRepository;
	private readonly ISerializationService _serializationService;

	public PostEmail(ILogger<PostEmail> log, IAzureTableStorageRepository<EmailItem> azureTableStorageRepository, ISerializationService serializationService)
	{
		_logger = log;
		_azureTableStorageRepository = azureTableStorageRepository;
		_serializationService = serializationService;
	}

	[Function("PostEmail")]
	[OpenApiOperation(operationId: "CreateEmail", tags: new[] { "Email" }, Visibility = OpenApiVisibilityType.Important)]
	[OpenApiRequestBody(contentType: "application/json", bodyType: typeof(EmailRequest), Description = "The payload for sending a new email", Required = true)]
	[OpenApiResponseWithBody(statusCode: HttpStatusCode.OK, contentType: "text/plain", bodyType: typeof(string), Description = "The OK response")]
	public async Task<IActionResult> Run(
		[HttpTrigger(AuthorizationLevel.Anonymous, "post", Route = "Email")] HttpRequestData req)
	{
		string requestBody = await new StreamReader(req.Body).ReadToEndAsync();

		if (requestBody != null)
		{
			var postBody = await _serializationService.DeserializeAsync<EmailRequest>(requestBody);

			if (postBody != null)
			{
				await _azureTableStorageRepository.Create(new EmailItem(postBody));

				return new OkObjectResult("OK");
			}

			return new BadRequestObjectResult(string.Empty);
		}
		return new BadRequestObjectResult(string.Empty);
	}
}

