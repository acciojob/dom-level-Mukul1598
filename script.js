//your JS code here. If required.

// Get the element with id 'level'
let element = document.getElementById('level');

// Recursive function to calculate the DOM level
function getDomLevel(element) {
    if (element.parentElement) {
        return 1 + getDomLevel(element.parentElement);
    } else {
        return 1; // Return 1 for the root element (html)
    }
}

// Get the level and display it using alert
let level = getDomLevel(element);
alert('The level of the element is: ' + level);
