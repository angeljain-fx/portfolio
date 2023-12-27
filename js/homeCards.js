const cards = ["#hc1", "#hc2", "#hc3", "#hc4"];

for(let i = 1; i < cards.length; i++) {
  $(cards[i]).hide();
}

const active = [];

let i = 1;
const intId = setInterval(() => {
  if(i === 3) {
    $(cards[i-1]).fadeOut();
    active.pop();
    $(cards[i]).fadeIn();
    active.push("#hc" + (i+1));
    console.log(active);
    i = 0;
  } 
  else if(i === 0) {
    $(cards[cards.length-1]).fadeOut();
    active.pop();
    $(cards[i]).fadeIn();
    active.push("#hc" + (i+1));
    console.log(active);
    i++;
  }
  else {
    $(cards[i-1]).fadeOut();
    active.pop();
    $(cards[i]).fadeIn();
    active.push("#hc" + (i+1));
    console.log(active);
    i++;
  }
}, 2500);

const handleCardOnClick = (id) => {
  let el = "#hc" + id;

  if(el === active[0]) {
    return;
  }

  $(active[0]).fadeOut();
  active.pop();
  $(el).fadeIn();
  active.push(el);
}

const navigateCards = (cardId) => {
  clearInterval(intId);
  handleCardOnClick(cardId);
}

$(".num1").click(() => navigateCards(1));
$(".num2").click(() => navigateCards(2));
$(".num3").click(() => navigateCards(3));
$(".num4").click(() => navigateCards(4));

