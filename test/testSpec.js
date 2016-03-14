var request = require('supertest'),
    express = require('express'),
    app = require("../app").getApp;


describe('GET /healthCheck', function(){
    it('MUST return health check message', function(done){
        request(app)
            .get('/healthCheck')
            .set('Accept', 'application/json')
            .expect(function(res) {
                res.body.message = 'OKs';
            })
            .expect(200, 'OK', done);
    });
});