/**
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
var $deleteBtn = $(".delete");
var checkbox = '<input type="checkbox" />';
var deleteElement = '<i class="delete">x</i>';
var label = "<label></label>";

//1. When the add-new button is clicked
$addBtn.on("click", function() {
  //a. Check to see if the input field has text
  if ($newTodoInput.val() != 0) {
    //i. if true create a new li with the users text
    var userInput = $(label).text($newTodoInput.val()).prepend(deleteElement);
    var listElement = $('<li class="todo"></li>').prepend(checkbox).append(userInput);
    //ii. Add it to the top of the list
    $list.prepend(listElement);
    //iii. Clear input filed
    $newTodoInput.val("");
  } else {
  //b. if false, Alert the user 'Fill out text'
    alert("Please enter text!");
  }
});
//2. When a user clicks the delete button
$deleteBtn.on("click", function() {
  //it should delete that li, with a prompt
  if (confirm("Are you sure you want to delete this item?")) {
    $(this).parent().remove();
    //3. When the user has deleted all the tasks, congratulate them
    if ($list.children().length == 0) {
      alert("Congrats on completing your list!")
    }
  }
});


