var cron = require('node-cron');
var Client = require('node-rest-client').Client;
var client = new Client();

var apiUrlForTransfers = `${process.env.TRON_SCAN_URL}/api/transfer`;

cron.schedule('* * * * *', () => {
    client.get(apiUrlForTransfers, function (data, response) {
        // parsed response body as js object
        console.log(data);
        // raw response
        console.log(response);
    });
});