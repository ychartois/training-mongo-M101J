use blog;

db.posts.aggregate([
	{
		$unwind:"$comments"
	},
	{
		$group:{
			_id:"$comments.author", 
			tot:{$sum:1}
		}
	},
	{
		$sort:{
			tot:1
		}
	},
	{
		$limit:1
	}
])