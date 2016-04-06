'use strict';
var soajs = require('soajs');
var config = require('./config.js');

var collection = "data";

var service = new soajs.server.service(config);
service.init(function () {

	service.get("/getInfo", function (req, res) {

		return res.json(req.soajs.buildResponse(null, {}));
	});

	service.start();
});