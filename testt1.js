var AWS = require('aws-sdk'); 

AWS.config = new AWS.Config();
// AWS.config.accessKeyId = "AKIA5WAEJ2C3T63FVBEH";
// AWS.config.secretAccessKey = "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";
AWS.config.region = "us-east-1";

//List of Tables in Dynamodb

// Create the DynamoDB service object
var ddb = new AWS.DynamoDB({apiVersion: '2012-08-10'});

// Call DynamoDB to retrieve the list of tables
ddb.listTables({Limit: 10}, function(err, data) {
  if (err) {
    console.log("Error", err.code);
  } else {
    console.log("Table names are ", data.TableNames);
  }
});