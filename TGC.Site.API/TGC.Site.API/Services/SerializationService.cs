using System;
using System.Text.Json;
using System.Threading.Tasks;

namespace TGC.Site.API.Services;
public class SerializationService : ISerializationService
{
	private static JsonSerializerOptions Options = new JsonSerializerOptions
	{
		PropertyNameCaseInsensitive = true
	};

	public Task<string> SerializeObject(object serializableObject)
	{
		return Task.FromResult(JsonSerializer.Serialize(serializableObject));
	}

	public Task<T?> DeserializeAsync<T>(string serializableObject) where T : class, new()
	{
		if (serializableObject != null)
		{
			var serializedObject = JsonSerializer.Deserialize<T>(serializableObject, Options);

			return Task.FromResult(serializedObject as T);
		}

		throw new ArgumentNullException(new string(serializableObject));
	}
}
