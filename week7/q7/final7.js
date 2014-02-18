use final7

var images = db.images.find();
var start = new Date().getTime();

images.forEach(
	function(el){
		if (el._id !== 0 && el._id % 10000 === 0 ) {
			print("===============> " + el._id / 1000 + "%");
		}
		if (db.albums.find({images:el._id}).count() == 0) {
			db.images.remove({_id:el._id});
		}
	}
);

var stop = new Date().getTime();

print("Number a images with sunrises tags: " + db.images.find({"tags" : "sunrises"}).count());
print("time: " + ((stop-start) / 1000) + "s")