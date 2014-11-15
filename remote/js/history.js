$(document).ready(function(){
	
	$(".tabs > .history-btt").click(function(){
		$(".tabs > button").hide();
		$(".tabs > .search-btt").show();
		$(".video-list").hide();
		$("#history").show();

		getRecents();
	});

	$(".tabs > .search-btt").click(function(){
		$(".tabs > button").hide();
		$(".tabs > .history-btt").show();
		$(".video-list").hide();
		$("#results").show();
	});

});

function getRecents() {
	socket.emit("get recents");
}

socket.on("recents", function(videos){

	$('#history').html('');
  var $template = $(".__templates .video");

	if( typeof videos === 'undefined' || videos.length <= 0 ){ return; }

	videos.forEach(function(video){
    // You should really use something like handlebars here
    var $video = $template.clone();
		console.log(video);
    $video.data('id', video.id);
    $video.data('title', video.title);
    $video.data('thumbnail', video.thumbnail.hqDefault);

    $video.find('img').attr('src', video.thumbnail.hqDefault );
    $video.find('h2').text( video.title );

    $('#history').append($video);
  });

})
