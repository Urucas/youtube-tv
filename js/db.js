
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
		this.exists(obj.id, function(exists){
			if(!exists) {
				nosql.insert(obj, cb);
			}
		});
	}
	
	this.exists = function(id, cb) {
		var find = function(obj) {
			if(obj.id == id) return obj;
		}
		nosql.all(find, function(r){
			cb(r.length ? true : false);
		});
	}

	this.getAll = function(cb) {
		nosql.all(cb);
	}
	
	this.search = function(q, cb) {
		var map = function(obj){
			if(obj.title.indexOf(q) !== -1) return obj;
		}
		nosql.all(map, cb)
	}

});
Database.init();
