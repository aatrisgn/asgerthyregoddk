using System.Threading.Tasks;

namespace TGC.Site.API.Services;
public interface ISerializationService
{
	Task<string> SerializeObject(object serializableObject);
	Task<T?> DeserializeAsync<T>(string serializableObject) where T : class, new();
}
