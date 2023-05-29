using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.Azure.Functions.Worker;
using Microsoft.Azure.WebJobs.Extensions.OpenApi.Core.Attributes;
using Microsoft.OpenApi.Models;
using TGC.AzureTableStorage;
using TGC.Site.API.Models.DTOs;
using TGC.Site.API.Models.Endpoints;

namespace TGC.Site.API.Endpoints;

public class GetExperience
{
	private readonly IAzureTableStorageRepository<ExperienceItem> _azureTableStorageRepository;

	public GetExperience(IAzureTableStorageRepository<ExperienceItem> azureTableStorageRepository)
	{
		_azureTableStorageRepository = azureTableStorageRepository;
	}

	[Function("GetExperience")]
	[OpenApiOperation(operationId: "GetExperience", tags: new[] { "Experience" })]
	[OpenApiResponseWithBody(statusCode: HttpStatusCode.OK, contentType: "application/json", bodyType: typeof(IEnumerable<ExperienceResponse>), Description = "The OK response")]
	public async Task<IEnumerable<ExperienceResponse>> Run(
		[HttpTrigger(AuthorizationLevel.Anonymous, "get", Route = "Experience")] HttpRequest req)
	{
		var experienceResponse = new List<ExperienceResponse>();
		var experienceDTOs = _azureTableStorageRepository.QueryAsync(c => c.Title != "").ToBlockingEnumerable();

		experienceResponse.AddRange(experienceDTOs.Select(c => new ExperienceResponse(c)));

		return experienceResponse;
	}
}

