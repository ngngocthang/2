 
 $(function(){
 	autoSlide = setInterval(function(){
 		$('.next').trigger('click');
 	},8000)

 	$(window).scroll(function(event){
 		var vitrimenu = $('html').scrollTop();
 	if (vitrimenu>=50) {
 		$('.menu-navtop').addClass('menu-fix');
 	}else{
 		$('.menu-navtop').removeClass('menu-fix');
 	}
 });

 	$('.nut-menu i').click(function(){
 		$('.menu').toggleClass('menu-hienra');
 	});

 	$('.next').click(function(event){
 		next = $('.active').next();
 		//nut chuyen slide +next
 		vitri = $('.active2').index()+1;
 		$('.nutchuyen ul li').removeClass('active2');
 		if (vitri== $('.nutchuyen ul li').length) {
 			vitri=0;
 		}
 		$('.nutchuyen ul li:nth-child('+(vitri+1)+')').addClass('active2');
 		// nut next
 		if (next.length == 0) {
 			$('.active').removeClass('active');
 			$('.slideBox .item:nth-child(1)').addClass('active');
 		}else{
 		$('.active').removeClass('active');
 		next.addClass('active');
 		}
 	 }); //het nut .next

 	$('.prev').click(function(event){
 		prev = $('.active').prev();

 		vitri = $('.active2').index()+1;
 		$('.nutchuyen ul li').removeClass('active2');
 		if (vitri==1) {
 			vitri=$('.nutchuyen ul li').length+1;
 		}
 		$('.nutchuyen ul li:nth-child('+(vitri-1)+')').addClass('active2');

 		if (prev.length == 1) {
 			$('.active').removeClass('active');
 			prev.addClass('active');
 		}else{
 			$('.active').removeClass('active');
 			$('.slideBox .item:last-child').addClass('active');
 		}

 	}); //het prev

 	$('.nutchuyen ul li').click(function(event){
 		// remove active2
 		$('.nutchuyen ul li').removeClass('active2');

 		//addclass active2
 		$(this).addClass('active2');

 		vitri = $(this).index()+1;

 		// $('.nutchuyen ul li:nth-child('+ $(this).index()+1+')').addclass('active');
 		 $('.active').removeClass('active');
 		$('.slideBox .item:nth-child('+ ($(this).index()+1) +')').addClass('active');
 	});
})  
 