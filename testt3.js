var AWS = require('aws-sdk'); 

AWS.config = new AWS.Config();
// AWS.config.accessKeyId = "AKIA5WAEJ2C3T63FVBEH";
// AWS.config.secretAccessKey = "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";
AWS.config.region = "us-east-1";

//Read Items in Table

// Create the DynamoDB service object
var ddb = new AWS.DynamoDB({apiVersion: '2012-08-10'});

var params = {
  TableName: 'CUSTOMER_LIST',
  Key: {
    'CUSTOMER_ID': {N: "2"},
    'CUSTOMER_NAME': {S: "Shiva"}
  }
  //ProjectionExpression: 'ATTRIBUTE_NAME'
};

// Call DynamoDB to read the item from the table
ddb.getItem(params, function(err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Success", data.Item);
  }
});