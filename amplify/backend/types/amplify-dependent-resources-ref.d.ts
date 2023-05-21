export type AmplifyDependentResourcesAttributes = {
  "api": {
    "rest1": {
      "ApiId": "string",
      "ApiName": "string",
      "RootUrl": "string"
    }
  },
  "function": {
    "bloghandler": {
      "Arn": "string",
      "LambdaExecutionRole": "string",
      "LambdaExecutionRoleArn": "string",
      "Name": "string",
      "Region": "string"
    }
  },
  "storage": {
    "articleDB": {
      "Arn": "string",
      "Name": "string",
      "PartitionKeyName": "string",
      "PartitionKeyType": "string",
      "Region": "string",
      "SortKeyName": "string",
      "SortKeyType": "string",
      "StreamArn": "string"
    }
  }
}