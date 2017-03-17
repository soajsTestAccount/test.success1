'use strict';

module.exports = {
	type: 'service',
	serviceName: "samplesuccesssingle",
	serviceGroup: "test",
	servicePort: 2004,
	//serviceVersion: 1,
	requestTimeout: 30,
	requestTimeoutRenewal: 5,
	extKeyRequired: true,
	prerequisites: {
		memory: 500
	},
	main: 'index.js',
	"errors": {
		"600": "Database error",
		"601": "Missing info"
	},
	"schema": {

		"/getInfo": {
			"_apiInfo": {
				"l": "Get Info",
				"group": "Information",
				"groupMain": true
			},
			"email": {
				"source": ['query.email'],
				"required": false,
				"validation": {
					"type": "string",
					"format": "email"
				}
			}
		}
	}
};
