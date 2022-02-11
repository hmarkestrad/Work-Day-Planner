// Display today's day and date
var today = new Date();
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let month = months[today.getMonth()];
var date = month + ' ' + today.getDate() + ', ' + today.getFullYear();

// Gets todays time and day for local storage in 12 hour format
let displayTime = weekday[today.getDay()];
var time = today.toLocaleString('en-US', {
    hour: 'numeric',
    minute: "numeric",
    hour12: true
});

// Displays the current day word and month, day and year
document.getElementById('currentDay').innerHTML = date + " " + displayTime + " " + time;

$(document).ready(function() {
    // saveBtn click listener 
    $(".saveBtn").on("click", function() {

        // Get nearby values of the description in JQuery
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        // Save item and time in local storage
        localStorage.setItem(time, text);
    })

    function timeTrack() {
        
        //get current number of hours.
        var timeNow = moment().hour();

        // loop over time blocks
        $(".time-block").each(function() {
            var blockTime = parseInt($(this).attr("id").split("hour")[1]);

            // To check the time and add the classes for background indicators
            if (blockTime < timeNow) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            } else if (blockTime === timeNow) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            } else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");

            }
        })
    }

    // local storage Get Items
    $("#hour8 .description").val(localStorage.getItem("hour8"));
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));

    timeTrack();
})