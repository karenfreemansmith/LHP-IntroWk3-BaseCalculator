//alert("jQuery is working on " + $("h1").text()); //test for jQuery linked and loaded correctly

$("#convert").click(function() {
  alert($("#myNumber").val());
  alert($("input[name=base]:radio").val());
});
