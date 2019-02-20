/*global  alert,$ */
$('#exampleModal').on('show.bs.modal', function (event) {
       
    "use strict";
    var button = $(event.relatedTarget); 
    var inputEmail = button.data('whatever'); 
    var modal = $(this);
    modal.find('.modal-title').text(' RiGster ');
    modal.find('.modal-body input').val(inputEmail);
    
});
function initialize() {
    "use strict";
    var mapProp = {
        center:new google.maps.LatLng(30.4660,31.1848),
        zoom:13,
        mapTypeId:google.maps.MapTypeId.ROADMAP
    };
    var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
}
google.maps.event.addDomListener(window, 'load', initialize);
/*Admin-page*/
$('#myTabs a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
})
$('#myTabs a[href="#profile"]').tab('show') // Select tab by name
$('#myTabs a:first').tab('show') // Select first tab
$('#myTabs a:last').tab('show') // Select last tab
$('#myTabs li:eq(2) a').tab('show') // Select third tab (0-indexed)