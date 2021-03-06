const express = require('express');
const path = require('path');

const ngApp = express();

ngApp.use(express.static('./dist/nglp'));

ngApp.get('/*', function (request, response) {
    response.sendFile(path.join(__dirname, '/dist/nglp/index.html'));
});

ngApp.listen(process.env.PORT || 8080);

//https://fascrs.org/patients/diseases-and-conditions/a-z/hemorrhoids