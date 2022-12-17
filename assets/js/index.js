var now = moment();
var container = document.querySelector('.container');
var timesArray = [ '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM' ];

// create loop to make timeblocks
var timeBlocks = function() {
    for ( var i = 0; i <timesArray.length; i++ ) {
        // div that holds each time
        var timeRows = document.createElement('div');
        timeRows.setAttribute('class', 'row timeRows');
        container.appendChild(timeRows);
        // hour display
        var hourDisplay = document.createElement('div');
        hourDisplay.setAttribute('class', 'col-sm-1');
        hourDisplay.textContent = timesArray[i];
        timeRows.appendChild(hourDisplay);
        // textarea for taskinput
        var taskInput = document.createElement('textarea');
        taskInput.setAttribute('class', 'col-sm-10');
        timeRows.appendChild(taskInput);
    }
}

// load timeblocks before loading storage
timeBlocks();

// save button; saves to localStorage 


// load from localStorage

