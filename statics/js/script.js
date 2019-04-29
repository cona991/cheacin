
$(function () {

	
	var haveTouch = false;
	var isDesk = false;
	$('#header .lcbody').on({
		'touchstart': function () {
			haveTouch = true;
		},
		'click': function () {
			if (!haveTouch || isDesk) {
				isDesk = true;
				$(this).trigger('touchstart')
			}
		}
	});


	
	$('#mm-blocker').on({
		'touchstart': function () {
			haveTouch = true;
		},
		'click': function () {
			if (!haveTouch || isDesk) {
				isDesk = true;
				$(this).trigger('touchstart')
			}
		}
	});
	
	
	
	
});