// write jQuery or vanilla javascript to do the following:
//  - loop through the list items in the <ol> and change their text and color to be different from what it is now
//  - use js and html to create at least one custom accordion (by yourself, no copy paste)
//  - create a button in the html that, once clicked, will fire off the function described in the next buller point
//  - write a function that will fade out all of the html inside the body tag and replace it with a custom goodbye message when you click the button
//  - finally, write a function that makes you happy :D (as in, have some fun a write something cool, it's up to you!)

(function($){
	$(function() {
		var li = $('ol li');
		for(var i = 0; i < li.length; i++) {
			li[i].style.color = 'red';
			li[i].innerText = 'I\'m a whole new list item now';
		}
	});

	$('#accordion button').on('click', function() {
		var content = $('#accordionContent');
		if(content.css('display') === 'none') {
			$('#accordionContent').slideDown();
		}
		else {
			$('#accordionContent').slideUp();
		}
	});

	$('#goodbye').on('click', function() {
		$('body').children().fadeOut(400);
		setTimeout(function(){
			$('body').html('<h1>GOODBYE!!!!! SEEYA!</h1>').hide().fadeIn();
		}, 600);
	});

	$('#happy').on('click', function(){
		var page = $('body');
		for(var i = 0; i <= 10; i++) {
			page.append('<h2>I am very happy :)</h2>');
		}
	});

	$('.links li a').on('click', function(e) {
		e.preventDefault();
		alert('you clicked a link, good for you');
	});

	console.log("this is a message for you!!!")
})(jQuery);
