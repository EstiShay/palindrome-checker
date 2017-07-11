$(function() {


  $("form.palindrome").submit(function(event) {
    var userInput = $("input#palChecker").val();
    var inputArray = Array.from(userInput);
    var reverse= inputArray.reverse();
    var string = reverse.join('');
    // alert(string)

    if (userInput === string) {
      $(".answer").append("Yes")
    } else {
      $(".answer").append("No")
    }

    event.preventDefault();
  });


});
