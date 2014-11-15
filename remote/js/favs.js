$(document).ready(function(){
	
	$(".tabs > .favs").click(function(){
		$(".tabs > button").hide();
		$(".tabs > .search").show();
		$(".video-list").hide();
		$("#favs-results").show();
	});

	$(".tabs > .search").click(function(){
		$(".tabs > button").hide();
		$(".tabs > .favs").show();
		$(".video-list").hide();
		$("#results").show();
	});

});

function searchFavs(q, cb){
	console.log(q);
	cb();
};
