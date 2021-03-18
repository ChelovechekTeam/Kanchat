
$(document).ready(function(){
	$('.textarea').click(function(event) {
		$('.font_textarea').addClass('active')
	});
});
$(document).ready(function(){
	$('.textarea').blur(function(event) {
		$('.font_textarea').removeClass('active')
	});
});
