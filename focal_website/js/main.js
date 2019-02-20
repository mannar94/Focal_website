/*global $, alert, console*/

/*javascript site */
$(document).ready(function () {
    'use strict';
    $(window).scroll(function () {
      //if you hard code, then use console
      //.log to determine when you want the 
      //nav bar to stick.
        console.log($(window).scrollTop());
        if ($(window).scrollTop() > 200) {
            $('.navbar-nav').addClass('navbar-nav-fixed');
            $('.navbar').addClass('navbar-fixed');
            $('.nav li').removeClass('active');
            $(this).addClass('active');
        }
        if ($(window).scrollTop() < 201) {
            $('.navbar-nav').removeClass('navbar-nav-fixed');
            $('.navbar').removeClass('navbar-fixed');
            $('.nav li').removeClass('active');
            $(this).addClass('active');
        }
    });
    /*****************navbar********************/
    $('.logo .nav li').click(function () {
        $('.logo .nav li').removeClass('active');
        $(this).addClass('active');
    });
    
    $('.pin_reg_form').click(function () {
        $('.reg_form').animate("slow").show(1000);
        $('.log_form').animate("slow").hide(1000);
    });
    $('.pin_log_form').click(function () {
        $('.log_form').animate("slow").show(1000);
        $('.reg_form').animate("slow").hide(1000);
    });
      

});
/*********for all site**************/

$('#exampleModal').on('show.bs.modal', function (event) {
       
    "use strict";
    var  button = $(event.relatedTarget); 
    var  inputEmail = button.data('whatever'); 
    var modal = $(this);
    modal.find('.modal-title').text(' RiGster ');
    modal.find('.modal-body input').val(inputEmail);
    
});
function initialize() {
    "use strict";
    var mapProp = {
        center: new google.maps.LatLng(30.4660, 31.1848),
        zoom: 13,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}
google.maps.event.addDomListener(window, 'load', initialize);
/*Admin-page*/
$('#myTabs a').click(function (e) {
    'use strict';
    e.preventDefault();
    $(this).tab('show');
});
$('#myTabs a[href="#profile"]').tab('show'); // Select tab by name
$('#myTabs a:first').tab('show'); // Select first tab
$('#myTabs a:last').tab('show'); // Select last tab
$('#myTabs li:eq(2) a').tab('show'); // Select third tab (0-indexed)



/*******ِAll-medicine page*******/

$(function () {
		
		var filterList = {
		
			init: function () {
			
				// MixItUp plugin
				// http://mixitup.io
				$('#portfoliolist').mixItUp({
  				selectors: {
    			  target: '.portfolio',
    			  filter: '.filter'	
    		  },
    		  load: {
      		  filter: '.app'  
      		}     
				});								
			
			}

		};
		
		// Run the show!
		filterList.init();
		
		
	});	


/*Active-navbar*/

/********************/
/*Google Map*/
function initialize() {
    "use strict";
    var mapProp = {
        center: new google.maps.LatLng(30.4660, 31.1848),
        zoom: 13,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}
google.maps.event.addDomListener(window, 'load', initialize);