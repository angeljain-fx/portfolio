$("#hc2").hide();
$("#hc3").hide();
$("#hc4").hide();

const showCard1 = () => {
  $("#hc2").fadeOut();
  $("#hc3").fadeOut();
  $("#hc4").fadeOut();
  $("#hc1").fadeIn();
} 
const showCard2 = () => {
  $("#hc1").fadeOut();
  $("#hc3").fadeOut();
  $("#hc4").fadeOut();
  $("#hc2").fadeIn();
} 
const showCard3 = () => {
  $("#hc1").fadeOut();
  $("#hc2").fadeOut();
  $("#hc4").fadeOut();
  $("#hc3").fadeIn();
} 
const showCard4 = () => {
  $("#hc1").fadeOut();
  $("#hc2").fadeOut();
  $("#hc3").fadeOut();
  $("#hc4").fadeIn();
} 

$(".num1").click(function () {
  clearInterval(intId);
  showCard1();
});

$(".num2").click(function () {
  clearInterval(intId);
  showCard2();
});

$(".num3").click(function () {
  clearInterval(intId);
  showCard3();
});

$(".num4").click(function () {
  clearInterval(intId);
  showCard4();
});

const arr = [showCard1, showCard2, showCard3, showCard4];

let i = 1;
const intId = setInterval(() => {
  if(i === 3) {
    arr[i]();
    i = 0;
  }
  
  else {
    arr[i]();
    i++;
  }
}, 2000);