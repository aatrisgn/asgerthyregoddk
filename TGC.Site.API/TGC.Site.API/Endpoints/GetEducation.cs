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

public class GetEducation
{
	private readonly IAzureTableStorageRepository<EducationItem> _azureTableStorageRepository;

	public GetEducation(IAzureTableStorageRepository<EducationItem> azureTableStorageRepository)
	{
		_azureTableStorageRepository = azureTableStorageRepository;
	}

	[Function("GetEducation")]
	[OpenApiOperation(operationId: "GetEducation", tags: new[] { "Education" })]
	[OpenApiResponseWithBody(statusCode: HttpStatusCode.OK, contentType: "application/json", bodyType: typeof(IEnumerable<EducationResponse>), Description = "The OK response")]
	public async Task<IEnumerable<EducationResponse>> Run(
		[HttpTrigger(AuthorizationLevel.Anonymous, "get", Route = "Education")] HttpRequest req)
	{
		var educationResponse = new List<EducationResponse>();
		var educationDTOs = _azureTableStorageRepository.QueryAsync(c => c.Title != "").ToBlockingEnumerable();

		educationResponse.AddRange(educationDTOs.Select(c => new EducationResponse(c)));

		return educationResponse;
	}
}
