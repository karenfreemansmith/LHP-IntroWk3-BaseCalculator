//alert("jQuery is working on " + $("h1").text()); //test for jQuery linked and loaded correctly
//business logic
function convertBase(num, base) {
  var numberSet=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f","g","h","i","j"];
  var convertedNumber="";
  if (base>20) {
    convertedNumber = "Sorry, Base Calculator only works up to base 20.";
  } else {
    if (base===2) {
      convertedNumber = num.toString(2);
    }
    if (base===8) {
      convertedNumber = num.toString(8);
    }
    if (base===16) {
      convertedNumber = num.toString(16);
    }
/* to replace "toString" with calculated answer later...
    for(i=0; i<base; i++) {
      convertedNumber+=numberSet[i];
    }
*/
  }

  return convertedNumber;
}

//user interface logic
$("#convert").click(function() {
  var yourNumber = parseInt($("#myNumber").val());
  var yourBase = parseInt($("input[name=base]:checked").val());
//alert(yourBase);
  $("#results").text(convertBase(yourNumber, yourBase));
});
