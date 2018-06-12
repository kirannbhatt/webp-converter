'use strict';

var _app = require('./app');

var _app2 = _interopRequireDefault(_app);

require('dotenv/config');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_app2.default.listen(process.env.APP_PORT, function (err) {
	if (err) {
		console.log(err);
	} else {
		console.log('App on ' + process.env.APP_PORT);
	}
});