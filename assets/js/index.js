var now = moment();
var container = document.querySelector('.container');
var timesArray = [ '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM' ];

// currentDay display
var currentDay = document.getElementById('currentDay');
currentDay.textContent = (now.format("[Today is] dddd, [at] hA"));

// create loop to make timeblocks
var timeBlocks = function() {
    for ( var i = 0; i < timesArray.length; i++ ) {
        // div that holds each time
        var timeRows = document.createElement('div');
            timeRows.setAttribute('class', 'row time-block');
        container.appendChild(timeRows);

        // hour display
        var hourDisplay = document.createElement('div');
            hourDisplay.setAttribute('class', 'col-sm-1 hour');
            hourDisplay.textContent = timesArray[i];
        timeRows.appendChild(hourDisplay);
        // textarea for taskinput
        var taskInput = document.createElement('textarea');
            taskInput.setAttribute('class', 'col-sm-10 taskInput textarea');
            taskInput.setAttribute('data-taskId', i);
        timeRows.appendChild(taskInput);
        // save button
        var saveButton = document.createElement('button');
            saveButton.setAttribute('class', 'col-sm-1 saveBtn');
        timeRows.appendChild(saveButton);
            // save icon
            var saveIcon = document.createElement('i');
                saveIcon.setAttribute('class', 'fa-solid fa-floppy-disk');
            saveButton.appendChild(saveIcon);

        // just moment().hours();
        var hourNow = now.hours(); 
        var timeColorBG = $('.taskInput');
        // past present future colour assignment
        $(timeColorBG).each(function(i, timeColorBG) {
            // add 9 to i because i=0, timeArray starts at 9, use 24 hour clock
            var timeNow = i + 9;
            
            if ( timeNow < hourNow ) {
                $(timeColorBG).addClass('past');
            } else if ( timeNow === hourNow ) {
                $(timeColorBG).addClass('present');
            } else {
                $(timeColorBG).addClass('future');
            }
        });
    }
}
// load timeblocks before loading storage
timeBlocks();

// save button; saves to localStorage 
$('.saveBtn').on('click', function() {
    let taskInput = $(this).siblings(".taskInput").val();
    let taskId = $(this).siblings(".taskInput").attr("data-taskId");

    localStorage.setItem(taskId, JSON.stringify(taskInput));
    console.log(`Saved data for text box ${taskId}.`)
})

// load from localStorage
var loadTasks = function() {
    for ( i = 0; i < timesArray.length; i++ ) {
        var taskInput = $('.taskInput');
        taskInput.each(function(i, input) {
            var taskId = $(input).attr("data-taskId");
            var taskInput = JSON.parse(localStorage.getItem(taskId));

            $(input).text(taskInput);
        });
        //console.log(`Loaded save data for text box ${i}.`);
        //console.log(localStorage.getItem(i));
    }
    console.log('Data Loaded.')
}

loadTasks();