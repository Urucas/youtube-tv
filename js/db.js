
var Database = new (function(){
	
	var status = 'not ready';
	var nosql = require('nosql').load(process.cwd()+'/db/db.nosql');
	
	this.init = function(){
		var custom = nosql.custom();
		if(custom == undefined) {
			nosql.description('Youtubetv workshop');
			nosql.custom({ key: '123456' });
		}
		nosql.on('load', function(){
			console.log('nosql ready');
			status = 'ready';
		});
	};
	
	this.add = function(obj, cb) {
		nosql.insert(obj, cb);
	}
	
	this.getAll = function(cb) {
		console.log("getting all");
		nosql.all(cb);
	}
	
	this.search = function(q, cb) {
		var map = function(obj){
			if(obj.b == 3) return obj;
		}
		nosql.all(map, cb)
	}

	this.del = function(cb) {
		var filter = function(obj) {
			if(obj.b == 3) {
				console.log("found");
				return obj;
			}
		}
		nosql.remove(filter, cb);
	}

});

Database.init();
/*
Database.add({a:1, b:3}, function(r){
	console.log(r);
});
*/

/*
Database.getAll(function(r){
	console.log(r);
});

/*
Database.search(function(r){
	console.log(r);
});
*/
/*
Database.del(function(r){
	console.log(r);
});
*/
