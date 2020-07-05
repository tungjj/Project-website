 $(function(){
 	$(window).scroll(function(event) {
 		/* Act on the event */
 		var vitribody = $(window).scrollTop();
 		var vitrihienlen = $('.noidung').offset().top;
 		if(vitribody >= vitrihienlen){
 			$('.nutlen a.fa.fa-chevron-up').addClass('hienra');
 			$('.khoimenu').addClass('thaydoi');

 		}
 		else {
 			$('.nutlen a.fa.fa-chevron-up').removeClass('hienra');
 			$('.khoimenu').removeClass('thaydoi');
 		}
 	});
 	$('.nutlen').click(function(event) {
 		/* Act on the event */
 		$('body').animate({'scrollTop':0});


 	});
 
})  
 