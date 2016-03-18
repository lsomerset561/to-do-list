/**
 * 
 * 2. When a user clicks the delete button it should delete that li, with a prompt
 * 3. When the user has deleted all the tasks, congratulate them in some way
 *
 * ******** BONUS ********
 *
 * 4. When user deletes to do, animate the height to 0.
 * 5. Figure out a way for the user to edit the text.
 * 6. Save tasks in local storage for persistence.
 *     
 */

var $newTodoInput = $('.new-todo-input');
var $addBtn = $('.add-btn');
var $list = $('.list');
var checkbox = '<input type="checkbox" />';
var deleteBtn = '<i class="delete">x</i>';
var label = "<label></label>";
var currentMax = 6;

//1. When the add-new button is clicked
$addBtn.on("click", function() {
  //a. Check to see if the input field has text
  if ($newTodoInput.val() != 0) {
    //i. if true create a new li with the users text
    var userInput = $(label).text($newTodoInput.val()).prepend(deleteBtn);
    var listElement = $('<li class="todo"></li>').prepend(checkbox).append(userInput);
    //ii. Add it to the top of the list
    $list.prepend(listElement);
    //iii. Clear input filed
    $newTodoInput.val("");
  } else {
  //b. if false, Alert the user 'Fill out text'
    alert("Please enter text!");
  }
})
  
