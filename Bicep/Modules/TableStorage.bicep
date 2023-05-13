@allowed([
  'TST'
  'PRD'
])
@description('shortname for environment (TST & PRD)')
param deploymentEnvironment string = 'TST'
@description('Location for resources. Default is resource group location')
param location string = resourceGroup().location

// Storage account
resource storageAccount 'Microsoft.Storage/storageAccounts@2022-09-01' = {
  location: location
  name:'atdkstorage${toLower(deploymentEnvironment)}'
  sku:{
    name: 'Standard_LRS'
  }
  kind:'StorageV2'
  tags:{
    ENV:deploymentEnvironment
    System:'asgerthyregoddk'
  }
}

//Table service
resource tableStorage 'Microsoft.Storage/storageAccounts/tableServices@2022-09-01' = {
  parent: storageAccount
  name: 'default'
}

//Table
resource tableStorageTable 'Microsoft.Storage/storageAccounts/tableServices/tables@2022-09-01' = {
  parent:tableStorage
  name:'asgerthyregoddk'
}

output storageAccount object = {
  id: storageAccount.id
  name: storageAccount.name
  apiVersion: storageAccount.apiVersion
}
