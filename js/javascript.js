$(document).ready(function() {
	
$(document).scroll(function() {
	if($(this).scrollTop() > 600){
		colorChange();
		$("button.navigationButtons").hover(function(){
			$(this).css("background-color", "#003300");
			$(this).css("color", "white");
		}, function(){
			$(this).css("background-color", "white");
			$(this).css("color", "#003300");
		});
		
	}
	if($(this).scrollTop() < 600){
		$(document).ready(colorChangeBack());
		$("button.navigationButtons").hover(function(){
			$(this).css("color", "white");
			$(this).css("background-color", "#003300");
		}, function(){
			$(this).css("color", "white");
			$(this).css("background-color", "rgba(0,0,0,0)");
		});
	}
});
function colorChange(){
	$('#divNavigationBar').css("background-color", "white");
	$('button.navigationButtons').css("color", "#003300");
	
	
}
function colorChangeBack(){
	$('#divNavigationBar').css("background-color", "rgba(0,0,0,0)");
	$('button.navigationButtons').css("background-color", "rgba(0,0,0,0)");
	$('button.navigationButtons').css("color", "white");
}


});







