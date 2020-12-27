$(document).ready(function(){

    var currentDateAndTime = moment();
    $("#currentDay").text(currentDateAndTime); 
 $(".saveBtn").on("click", function(){
     var timeId = $(this).parent().attr("id"); 
     var userInput = $(this).siblings(".description").val(); 
     localStorage.setItem(timeId, userInput)
 })




var localStorage9am = localStorage.getItem("hour-9");
$("#hour-9 .description").val(localStorage9am); 
var localStorage9am = localStorage.getItem("hour-10");
$("#hour-10 .description").val(localStorage9am); 
var localStorage9am = localStorage.getItem("hour-11");
$("#hour-11 .description").val(localStorage9am); 
var localStorage9am = localStorage.getItem("hour-12");
$("#hour-12 .description").val(localStorage9am); 
var localStorage9am = localStorage.getItem("hour-13");
$("#hour-13 .description").val(localStorage9am); 
var localStorage9am = localStorage.getItem("hour-14");
$("#hour-14 .description").val(localStorage9am); 
var localStorage9am = localStorage.getItem("hour-15");
$("#hour-15 .description").val(localStorage9am); 
var localStorage9am = localStorage.getItem("hour-16");
$("#hour-16 .description").val(localStorage9am); 
var localStorage9am = localStorage.getItem("hour-17");
$("#hour-17 .description").val(localStorage9am); 
})
