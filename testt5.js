var AWS = require('aws-sdk'); 

AWS.config = new AWS.Config();
// AWS.config.accessKeyId = "AKIA5WAEJ2C3T63FVBEH";
// AWS.config.secretAccessKey = "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";
AWS.config.region = "us-east-1";

//Delete Table

// Create the DynamoDB service object
var ddb = new AWS.DynamoDB({apiVersion: '2012-08-10'});

var params = {
  TableName: process.argv[2]
};

// Call DynamoDB to delete the specified table
ddb.deleteTable(params, function(err, data) {
  if (err && err.code === 'ResourceNotFoundException') {
    console.log("Error: Table not found");
  } else if (err && err.code === 'ResourceInUseException') {
    console.log("Error: Table in use");
  } else {
    console.log("Success", data);
  }
});