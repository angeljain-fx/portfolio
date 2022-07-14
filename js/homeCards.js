$("#hc2").hide();
$("#hc3").hide();

$(".num2").click(function () {
  $("#hc1").fadeOut();
  $("#hc3").fadeOut();
  $("#hc2").fadeIn();
});

$(".num3").click(function () {
  $("#hc1").fadeOut();
  $("#hc2").fadeOut();
  $("#hc3").fadeIn();
});

$(".num1").click(function () {
  $("#hc2").fadeOut();
  $("#hc3").fadeOut();
  $("#hc1").fadeIn();
});
