var pseudoizer = require('../lib/index.js');
require('chai').should();

describe('pseudoize()', function(){
	
	it('should pseudoize upper case characters', function(){
		pseudoizer.pseudoize('ABCDEFGHIJKLMNOPQRSTUVWXYZ').should.equal('ÅßCĐĒFĞĦĨĴĶĿMŃØPQŖŜŦŮVŴXŸŻ');
	});
	
	it('should pseudoize lower case characters', function(){
		pseudoizer.pseudoize('abcdefghijklmnopqrstuvwxyz').should.equal('äþčđęƒģĥįĵĸľmŉőpqřşŧūvŵχyž');
	});
	
	it('should ignore spaces', function(){
		pseudoizer.pseudoize('   ').should.equal('   ');
	});
	
	it('should ignore special characters', function(){
		pseudoizer.pseudoize('!@£#$%^&*()_+{}[]:"|;<>?,./"~`±§').should.equal('!@£#$%^&*()_+{}[]:"|;<>?,./"~`±§');
	});
	
	it('should pseudoize mixed character phrases', function(){
		pseudoizer.pseudoize('I suppose we all thought that, one way or another.').should.equal('Ĩ şūppőşę ŵę äľľ ŧĥőūģĥŧ ŧĥäŧ, őŉę ŵäy őř äŉőŧĥęř.');
	});
	
});
