@allowed([
  'TST'
  'PRD'
])
@description('shortname for environment (TST & PRD)')
param deploymentEnvironment string = 'TST'
@description('Location for resources. Default is resource group location')
param location string = resourceGroup().location

module tableStorage 'Modules/TableStorage.bicep' = {
  name: 'TableStorageModule'
  params: {
    deploymentEnvironment: deploymentEnvironment
    location:location
  }
}

module swaModule 'Modules/StaticWebApp.bicep' = {
  name: 'SWAModule'
  params: {
    deploymentEnvironment: deploymentEnvironment
    location:location
  }
}
