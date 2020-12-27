$(document).ready(function(){

    var currentDateAndTime = moment();
    $("#currentDay").text(currentDateAndTime); 
 $(".saveBtn").on("click", function(){
     var timeId = $(this).parent().attr("id"); 
     var userInput = $(this).siblings(".description").val(); 
     localStorage.setItem(timeId, userInput)
 })





})
