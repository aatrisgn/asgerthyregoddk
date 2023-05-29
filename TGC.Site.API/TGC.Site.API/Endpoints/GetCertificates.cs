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

public class GetCertificates
{
	private readonly IAzureTableStorageRepository<CertificateItem> _azureTableStorageRepository;

	public GetCertificates(IAzureTableStorageRepository<CertificateItem> azureTableStorageRepository)
	{
		_azureTableStorageRepository = azureTableStorageRepository;
	}

	[Function("GetCertificates")]
	[OpenApiOperation(operationId: "GetCertificates", tags: new[] { "Certficates" })]
	[OpenApiResponseWithBody(statusCode: HttpStatusCode.OK, contentType: "application/json", bodyType: typeof(IEnumerable<CertificateResponse>), Description = "The OK response")]
	public async Task<IEnumerable<CertificateResponse>> Run(
		[HttpTrigger(AuthorizationLevel.Anonymous, "get", Route = "Certficates")] HttpRequest req)
	{
		var certifacteResponse = new List<CertificateResponse>();
		var certificatesDTOs = _azureTableStorageRepository.QueryAsync(c => c.Title != "").ToBlockingEnumerable();

		certifacteResponse.AddRange(certificatesDTOs.Select(c => new CertificateResponse(c)));

		return certifacteResponse;
	}
}

