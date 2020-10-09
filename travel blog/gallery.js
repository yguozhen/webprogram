$(document).ready(function() {

    $.getJSON('js/data.json', function(data){
		$(data).each(function(key, val){
			$("ul.gallery").append("<li><img></li>");
			$("ul.gallery li:last").find("img").attr("src", "images/square/" + val.path);
			$("ul.gallery li:last").find("img").attr("alt", val.title);
			$("ul.gallery li:last").find("img").mouseenter(function(event) {
				$(this).addClass("gray");
				$("body").append("<div id='preview'><img><p></p></div>");
				$("#preview").find("img").attr("src","images/medium/" + val.path);
				$("#preview").find("p").html("Title: " + val.title + "; City: " + val.city + "; Data Taken: " + val.taken + ".");
				$("#preview").css("top", event.pageY + 50);
				$("#preview").css("left", event.pageX - 50);
				$("#preview").fadeIn('quick').delay(5000).fadeOut('quick');
			});
			$('ul.gallery li:last').find("img").mouseleave(function() {
				$(this).removeClass("gray");
				$("#preview").remove();

			});
			$('ul.gallery li:last').find("img").mousemove(function(event) {
				$("#preview").css("top", event.pageY + 50);
				$("#preview").css("left", event.pageX - 50);
			});
		})
	})

});