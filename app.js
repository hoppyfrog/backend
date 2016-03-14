var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000;


app.get('/healthCheck', (req, res) => {
    res.status(200).send('OK');
});

app.listen(port, () => {
    console.log('Example app listening on port 3000!');
});

module.exports.getApp = app;
