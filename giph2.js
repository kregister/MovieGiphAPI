// Activates jQuery once page is loaded and doesnt require an on-click event
$(function() {

// Movies is the Category
    titleButtons(movies, 'movieButton', '#movieButton');
});

// 1. topics array
// Movie title array
var movies = ["Harry Potter", "Die Hard", "Superman", "A Knights Tale", "The Little Mermaid", "The Dark Knight", "Lion King", "Top Gun", "Home Alone", "Finding Nemo", "Minions", "Ace Ventura", "Hocus Pocus", "Star Trek", "Grease", "Toy Story", "Captain America", "Iron Man", "Avatar", "Star Wars"];

// 2. for loop going through topics array to create buttons
//functions to create buttons from above array and add new buttons inputed by user
function titleButtons(movieArray, newClass, newTitleDiv){
    $(newTitleDiv).empty();

    for (var i = 0; i < movieArray.length; i++){
        
        var newButton = $('<button>')
        newButton.addClass(newClass);
        newButton.attr('data-title', movieArray[i]);
        newButton.text(movieArray[i]);
        $(newTitleDiv).append(newButton);

        // console.log(titleButtons);
        // console.log(newTitleDiv);
        // console.log(newButton);
        // console.log(newClass);
    }

}



//When I click on my button, what do I do?!?!
$(document).on('click', '.movieButton', function(){
    $('#movies').empty();
    $('.movieButton').removeClass('active');
    $(this).addClass('active');

    var type = $(this).data('title');
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + type + "&api_key=dc6zaTOxFJmzC&limit=10";

    $.ajax({url: queryURL, method: 'GET'})
     .done(function(response) {
         var results = response.data;

         for(var i=0; i < results.length; i++){
            
             //make a new div and append the gifs to your screen
             //through images
             //so 
             //<div class="movie-item">
             //<img src="" data-still="" data-animate="" class="movieImages">
             //</div>

             //then append this div to your #movies div 
           
         }
        
    }); 
});


//make image still or animate when you click it 
$(document).on('click', '.movieImage', function(){
    var state = $(this).attr('data-state'); 
    
    if ( state == 'still'){
        //change attribute to animate
    }else{
        //change attribute to still
    }
})


//Adding a new movie through the form
$('#addMovie').on('click', function(){

    //grab the value of the input of the user and make a variable


    //push that new movie value in the array movies
   
   //call your titleButtons
    titleButtons(movies, 'movieButton', '#movieButton');

    return false;
});
