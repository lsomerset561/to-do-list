/******** BONUS ********
 * 
 * 6. Save tasks in local storage for persistence.     
 */

var $newTodoInput = $('.new-todo-input');

//1. When the add-new button is clicked
$('.add-btn').on("click", function() {
  //a. Check to see if the input field has text
  if ($newTodoInput.val() != 0) {
    //i. if true create a new li with the users text
    var userInput = $("<label></label>").text($newTodoInput.val());
    var listElement = $('<li class="todo"></li>').append(
      '<i class="delete">x</i>',
      '<input type="checkbox"/>', 
      userInput, 
      '<input type="text" />', 
      '<input type="submit" value="EDIT" class="edit" />'
    );
    //ii. Add it to the top of the list
    $(".list").prepend(listElement);
    //iii. Clear input filed
    $newTodoInput.val("");
  } else {
  //b. if false, Alert the user 'Fill out text'
    alert("Please enter text!");
  }
});

//2. When a user clicks the delete button
$(".list").on("click", ".delete", function() {
  //it should delete that li, with a prompt
  if (confirm("Are you sure you want to delete this item?")) {
    //BONUS 4. When user deletes to do, animate the height to 0.
    $(this).parent().animate({height: 0}, function() {
      $(this).remove();
      //3. When the user has deleted all the tasks, congratulate them
      if ($(".list").children().length === 0) {
        alert("Congrats on completing your list!");
      }
    });
  }
});

//BONUS 5. Figure out a way for the user to edit the text.
$(".list").on("click", ".edit", function() { //click 'edit'
  //text field becomes visible
  $(this).prev('input[type="text"]').toggleClass("editMode");
  //checkbox & delete button hidden
  $(this).prevAll('input[type="checkbox"]').toggle();
  $(this).prevAll('.delete').toggle();
  
  if ($(this).prev('input[type="text"]').hasClass("editMode")) {
    $(this).attr("value", "DONE");
    var oldValue = $(this).prevAll("label").text();
    $(this).prevAll('input[type="text"]').val(oldValue);
  } else {
    $(this).attr("value", "EDIT");
    var newValue = $(this).prevAll('input[type="text"]').val();
    $(this).prevAll('label').text(newValue);
  }
});

