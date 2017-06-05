console.log("hello");

$(function() {

$("a").click(function(event) {
  event.preventDefault();
});


$(".readmore").on("click", function() {
	$("#show-this-on-click").slideDown();
	$(".readmore").hide();
	$(".readless").show();
});

$(".readless").on("click", function() {
	$("#show-this-on-click").slideUp();
	$(".readless").hide();
	$(".readmore").show();	
});

});

$('document').ready(function(){

var cities = ["London", "Barcelona", "Paris", "Sydney", "Tokyo"];

for (var i = 0; i < cities.length; i++) {
  $('#city-type').append('<option>' + cities[i] + '<option')
}

$('#city-type').change(function(event){
  // event.preventDefault();
var selectedCity = $('#city-type option:selected').val();
	window.location.href = "" + selectedCity + ".html"

})

});
