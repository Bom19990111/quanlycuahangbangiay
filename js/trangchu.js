$(document).ready(function() {
	$('.anh').hover(function() { 
		$(this).attr('src','../sanpham/img/nikem.jpg'); 
	}, function() {
		$(this).attr('src','../sanpham/img/quangcao6.jpg');
	});
	$('.event').click(function() {
		$('.anh').hide(); 

	});
	$('.event').dblclick(function() { 
		$('.anh').show(); 
	});

});
