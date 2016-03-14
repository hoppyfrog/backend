var express = require('express'),
    app = express();


app.get('/healthCheck', (req, res) => {
    res.status(200).send('OK');
});

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});

module.exports.getApp = app;
