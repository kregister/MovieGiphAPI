

	// Activates jQuery once page is loaded and doesnt require an on-click event
$(function() {

//movie title array
var movies = ["Harry Potter", "Die Hard", "Gone With The Wind", "Superman", "A Knights Tale", "The Little Mermaid", "The Dark Knight", "Lion King", "Top Gun", "Home Alone", "Finding Nemo", "Minions", "Ace Ventura", "Hocus Pocus", "Star Trek", "Grease", "Toy Story", "Captain America", "Iron Man", "Avatar", "Star Wars"];

    populateButtons(movies, 'movieButton', '#movieButton');
});


//functions to create buttons from above array and add new buttons inputed by user
function populateButtons(movieArray, newClass, newTitleDiv){
    $(newTitleDiv).empty();

    for (var i = 0; i < movieArray.length; i++){
        var newButton = $('<button>')
        newButton.addClass(newClass);
        newButton.attr('data-title', movieArray[i]);
        newButton.text(movieArray[i]);
        $(newTitleDiv).append(newButton);
    }

}

// Public API Key:  dc6zaTOxFJmzC

   // var title = $(this).data('title');
   // var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + title + "&api_key=dc6zaTOxFJmzC&limit=15";

// Movies is the Category
 
// and then close that at the bottom


// then

 
// 1. topics array

  
// 2. for loop going through topics array to create buttons

 
// 3. on click function to add a new button from the input form

 
// 4. on click function for what happens when you click on the button (this is the API call area, the creation of the image, etc)

 
// 5. on click function for what happens when you click on an image (this is the animate/still area)

 
// as you can see, it's in the order of how you would go through the page

 
// BIGGEST advice is revert to activities we did in class. This was huge when I did my assignment. I thought of what I wanted to accomplish and found the code those activities.

  //  return false;
//});