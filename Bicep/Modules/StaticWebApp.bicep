@allowed([
  'TST'
  'PRD'
])
@description('shortname for environment (TST & PRD)')
param deploymentEnvironment string = 'TST'
@description('Location for resources. Default is resource group location')
param location string = resourceGroup().location

resource staticWebApp 'Microsoft.Web/staticSites@2022-03-01' = {
  name: 'asgerthyregoddk-${deploymentEnvironment}-swa'
  location: location
  tags:{
    ENV:deploymentEnvironment
    System:'asgerthyregoddk'
  }
  sku:{
    name:'free'
    tier:'free'
  }
  properties:{
    stagingEnvironmentPolicy:'Enabled'
    allowConfigFileUpdates:true
    provider:'None'
    enterpriseGradeCdnStatus:'Disabled'
    repositoryToken: ''
  } 
}

output swaName string = staticWebApp.name
