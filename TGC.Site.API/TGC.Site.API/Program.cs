using System;
using System.Threading.Tasks;
using Microsoft.Azure.Functions.Worker.Extensions.OpenApi.Extensions;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using TGC.AzureTableStorage.IoC;
using TGC.Site.API.Models.DTOs;
using TGC.Site.API.Services;

namespace TGC.Site.API;
public class Program
{
	public static async Task Main()
	{
		var host = new HostBuilder()
			.ConfigureAppConfiguration(configuration =>
			{
				configuration.AddJsonFile("local.settings.json", optional: true, reloadOnChange: true);
			})
			.ConfigureFunctionsWorkerDefaults(workerApplication =>
			{
				//workerApplication.UseAspNetCoreIntegration();
				workerApplication.UseNewtonsoftJson();
			})
			//.ConfigureOpenApi()
			.ConfigureServices((hostContext, services) =>
			{
				var connecctionString = hostContext.Configuration["StorageConfiguration:AccountConnectionString"];

				if (connecctionString == null)
				{
					throw new ArgumentNullException("No connectionstring was found");
				}

				services.AddSingleton<ISerializationService, SerializationService>();
				services.AddAzureTableStorage(connecctionString);
				services.AddStorageRepository<CertificateItem>();
				services.AddStorageRepository<ExperienceItem>();
				services.AddStorageRepository<EducationItem>();
				services.AddStorageRepository<EmailItem>();
				//services.AddFunctionsWorkerCore();
			})
			//.ConfigureAspNetCoreIntegration()
			.Build();

		await host.RunAsync();
	}
}
