let expect = require('unexpected');
let System = require('systemjs');

System.config({
	'baseURL': '.',
	'map': {
		'jst': 'jst.js',
		'underscore': './node_modules/underscore/underscore.js'
	}
});

describe('jst plugin', () => {

	it('should load jst template and return a function', () => {
		return System.import('test/sample.jst!').then((tpl) => {
			return expect(tpl, 'to be a function');
		});
	});

	it('should load jst template and return a function with arity 1', () => {
		return System.import('test/sample.jst!').then((tpl) => {
			return expect(tpl, 'to have arity', 1);
		});
	});

	it('should load jst template and translate it', () => {
		return System.import('test/sample.jst!').then((tpl) => {
			return expect(tpl({ name: 'hello world' }), 'to equal', '<div>hello world</div>\n');
		});
	});

});
