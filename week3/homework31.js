var students = db.students.find();
students.map(
	function(el){
		var low = 100;
		el.scores.map(
			function(score){
				if ( score.type == "homework" && score.score < low ) {
					low = score.score;
				}
			}		
		);
		var newScore = [];
		el.scores.map(
			function(score){
				if ( score.score != low ) {
					newScore.push(score);
				}
			}		
		);
		db.students.update({_id:el._id},{$set:{scores:newScore}})
	}
);
