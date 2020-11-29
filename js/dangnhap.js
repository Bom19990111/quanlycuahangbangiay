	$(document).ready(function() {
	    $('.card-dn').mouseenter(function() {
	        $(this).css("background-color", "#e6b800");
	    });
	    $('.card-dn').mouseleave(function() {
	        $(this).css("background-color", "lightblue");
	    });

	    // Hiển thị và ẩn password 
	    $('#showPassword').on('click', function() {
	        var passwordField = $('#password');
	        var passwordFieldType = passwordField.attr('type');
	        if (passwordFieldType == 'password') {
	            passwordField.attr('type', 'text');

	        } else {
	            passwordField.attr('type', 'password');
	        }
	    });
	});