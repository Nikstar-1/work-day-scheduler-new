$(document).ready(function(){

    var currentDateAndTime = moment();
    $("#currentDay").text(currentDateAndTime); 
 $(".saveBtn").on("click", function(){
     var timeId = $(this).parent().attr("id"); 
     var userInput = $(this).siblings(".description").val(); 
     localStorage.setItem(timeId, userInput)
 })

$(".time-block").each(function() {
    var currentTimeHour = moment().hours();
    var timeBlockId = $(this).attr("id");
    var thisTimeBlockHour = timeBlockId.slice(5); 
  

    if (thisTimeBlockHour < currentTimeHour){
        $(this).addClass("past")
    } else if (thisTimeBlockHour == currentTimeHour){
        $(this).addClass("present")
    } else {
        $(this).addClass("future")
    }
})


var localStorage9am = localStorage.getItem("hour-9");
$("#hour-9 .description").val(localStorage9am); 
var localStorage10am = localStorage.getItem("hour-10");
$("#hour-10 .description").val(localStorage10am); 
var localStorage11am = localStorage.getItem("hour-11");
$("#hour-11 .description").val(localStorage11am); 
var localStorage12am = localStorage.getItem("hour-12");
$("#hour-12 .description").val(localStorage12am); 
var localStorage1pm = localStorage.getItem("hour-13");
$("#hour-13 .description").val(localStorage1pm); 
var localStorage2pm = localStorage.getItem("hour-14");
$("#hour-14 .description").val(localStorage2pm); 
var localStorage3pm = localStorage.getItem("hour-15");
$("#hour-15 .description").val(localStorage3pm); 
var localStorage4pm = localStorage.getItem("hour-16");
$("#hour-16 .description").val(localStorage4pm); 
var localStorage5pm = localStorage.getItem("hour-17");
$("#hour-17 .description").val(localStorage5pm); 
})
