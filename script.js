let cardArray = [
  { card: "King_C", value: 10 },
  { card: "Queen_C", value: 10 },
  { card: "Jack_C", value: 10 },
  { card: "Ace_C", value: 11 },
  { card: "King_D", value: 10 },
  { card: "Queen_D", value: 10 },
  { card: "Jack_D", value: 10 },
  { card: "Ace_D", value: 11 },
  { card: "King_S", value: 10 },
  { card: "Queen_S", value: 10 },
  { card: "Jack_S", value: 10 },
  { card: "Ace_S", value: 11 },
  { card: "King_H", value: 10 },
  { card: "Queen_H", value: 10 },
  { card: "Jack_H", value: 10 },
  { card: "Ace_H", value: 11 },
  { card: "2_C", value: 2 },
  { card: "2_D", value: 2 },
  { card: "2_S", value: 2 },
  { card: "2_H", value: 2 },
  { card: "3_C", value: 3 },
  { card: "3_D", value: 3 },
  { card: "3_S", value: 3 },
  { card: "3_H", value: 3 },
  { card: "4_C", value: 4 },
  { card: "4_D", value: 4 },
  { card: "4_S", value: 4 },
  { card: "4_H", value: 4 },
  { card: "5_C", value: 5 },
  { card: "5_D", value: 5 },
  { card: "5_S", value: 5 },
  { card: "5_H", value: 5 },
  { card: "6_C", value: 6 },
  { card: "6_D", value: 6 },
  { card: "6_S", value: 6 },
  { card: "6_H", value: 6 },
  { card: "7_C", value: 7 },
  { card: "7_D", value: 7 },
  { card: "7_S", value: 7 },
  { card: "7_H", value: 7 },
  { card: "8_C", value: 8 },
  { card: "8_D", value: 8 },
  { card: "8_S", value: 8 },
  { card: "8_H", value: 8 },
  { card: "9_C", value: 9 },
  { card: "9_D", value: 9 },
  { card: "9_S", value: 9 },
  { card: "9_H", value: 9 },
  { card: "10_C", value: 10 },
  { card: "10_D", value: 10 },
  { card: "10_S", value: 10 },
  { card: "10_H", value: 10 },
];

let player = document.getElementById("player-cards");
let playerTotal = 0;
let dealerTotal = 0;
let dealer = document.getElementById("dealer-cards");
let startBtn = document.getElementById("start");
let resetBtn = document.getElementById("reset");
let hitBtn = document.getElementById("hit");
let standBtn = document.getElementById("stand");
let dealerFaceDown = document.getElementsByClassName("dealer-facedown-card");
let playerScore = document.getElementById("player-score");
let dealerScore = document.getElementById("dealer-score");
let gameOverScreen = document.getElementById("gameover");
let playerHand = [];
let dealerHand = [];
let cardArrayLength = cardArray.length;
let usedPlayerCards = [];
let usedDealerCards = [];
let faceDown;
let dealersNextCard;
let cardValue = 0;
let safe = false;
let turn = player;

firstTwo = () => {
  if (playerHand.length < 2) {
    for (let i = 0; i < 1; i++) {
      cardRandom = Math.ceil(Math.random(0, 51) * 51);
      playerHand.push(cardArray[cardRandom]);
      usedPlayerCards.push(cardArray[cardRandom]);
      cardChosen = cardArray[cardRandom];
      playerFirstCard = cardChosen.value;
      playerTotal = playerTotal + cardChosen.value;
      console.log("PLAYER First Card: " + playerFirstCard);
      player.innerHTML +=
        `<img class='player-card'` + `src=/deck/${cardChosen.card}.png` + ">";
    }
    if (playerHand.length > 0) {
      cardRandom = Math.ceil(Math.random(0, 51) * 51);
      playerHand.push(cardArray[cardRandom]);
      usedPlayerCards.push(cardArray[cardRandom]);
      cardChosen = cardArray[cardRandom];
      playersCard = cardChosen;
      playerSecondCard = cardChosen;
      playerHand.pop(playersCard);
      playerTotal = playerTotal + cardChosen.value;
      console.log("PLAYER Second Card: " + playerSecondCard.value);
      player.innerHTML +=
        `<img class='player-card'` +
        `src="/deck/${cardChosen.card}.png"` +
        " id='facedown'" +
        ">";

      if (dealerHand.length === 0) {
        cardRandom = Math.ceil(Math.random(0, 51) * 51);
        dealerHand.push(cardArray[cardRandom]);
        usedDealerCards.push(cardArray[cardRandom]);
        cardChosen = cardArray[cardRandom];
        dealerFirstCard = cardChosen.value;
        dealerTotal = dealerTotal + cardChosen.value;
        console.log("DEALER Faceup: " + dealerFirstCard);

        dealer.innerHTML +=
          `<img class='dealer-card'` + `src=/deck/${cardChosen.card}.png` + ">";
        //}
        if (dealerHand.length > 0) {
          cardRandom = Math.ceil(Math.random(0, 51) * 51);
          dealerHand.push(cardArray[cardRandom]);
          usedDealerCards.push(cardArray[cardRandom]);
          cardChosen = cardArray[cardRandom];
          faceDown = cardChosen.value;
          dealersCard = cardChosen;
          dealerLastCard = cardChosen.value;
          dealerHand.pop(faceDown);
          dealerTotal = dealerTotal + cardChosen.value;
          console.log("DEALER Facedown: " + dealerLastCard);
          dealer.innerHTML +=
            `<img class='dealer-facedown-card hidden'` +
            `src="/deck/${cardChosen.card}.png"` +
            " id='facedown'" +
            ">";
        }
        if (dealerTotal === 21) {
          console.log("21 hit on first 2");
          dealerScore.innerText === "Card Total: 21";
          stand();
        }
        if (dealerTotal >= 17 && dealerTotal < 21) {
          console.log("Dealer doesn't need to draw");
          safe = true;
        }
      }
      if (playerTotal === 21) {
        console.log("21 hit on first 2");
        playerScore.innerText = "Card Total: " + `${playerTotal}`;
        stand();
      }
      if (dealerFirstCard === 11 && dealerLastCard === 11) {
        playerTotal = playerTotal - 10;
        playerScore.innerText = "Card Total: " + `${playerTotal}`;
        console.log("12!!!");
      }
    }
    if (
      playerHand.includes(
        usedDealerCards[cardRandom] || usedPlayerCards[cardRandom]
      )
    ) {
      console.log("Please RESET!");
      console.log("Please Restart! err: on deal CARD ALREADY USED");
    }
  }
  if (dealerTotal < 21) {
    dealerScore.innerText = "Card Total: " + `${dealerFirstCard}`;
    playerScore.innerText = "Card Total: " + `${playerTotal}`;
  }
  playerScore.innerText = "Card Total: " + `${playerTotal}`;
};
function hit() {
  if ((turn = player)) {
    cardRandom = Math.ceil(Math.random(0, 51) * 51);
    playerHand.push(cardArray[cardRandom]);
    usedPlayerCards.push(cardArray[cardRandom]);
    cardChosen = cardArray[cardRandom];
    playerTotal = playerTotal + cardChosen.value;
    playersNextCard = cardChosen.value;
    player.innerHTML +=
      `<img class='player-card'` + `src=/deck/${cardChosen.card}.png` + ">";
    playerScore.innerText = "Card Total: " + `${playerTotal}`;

    if (playerFirstCard === 11 && playerTotal > 21) {
      console.log("player first card was an ace");
      playerFirstCard = playerFirstCard + 21;
      playerTotal = playerTotal - 10;
      playerScore.innerText = "Card Total: " + `${playerTotal}`;

      console.log("new player total " + playerTotal);
      return;
    }
    if (playerSecondCard.value === 11 && playerTotal > 21) {
      console.log("player second card was an ace");
      playerSecondCard.value = playerSecondCard.value + 21;
      playerTotal = playerTotal - 10;
      playerScore.innerText = "Card Total: " + `${playerTotal}`;

      console.log("new player total " + playerTotal);
    }

    if (playersNextCard > 10) {
      if (playerTotal > 21) {
        playerTotal = playerTotal - 10;
        playerScore.innerText = "Card Total: " + `${playerTotal}`;

        console.log("player ace! Score after hit:" + playerTotal);
      }
    }
    console.log("Score after hit: " + playerTotal);
  }
  if (playerTotal > 21) {
    dealerFaceDown.className = "dealer-facedown-card visible";
    gameOver();
    return;
  }

  if (
    playerHand.includes(
      usedDealerCards[cardChosen] ||
        playerHand.includes(usedPlayerCards[cardChosen])
    )
  ) {
    alert("Please Restart");
    console.log("same card pulled on draw!");
    gameOver();
  }
}

function dealerDraw() {
  for (let i = 0; dealerTotal < 17; i++) {
    cardRandom = Math.ceil(Math.random(0, 51) * 51);
    dealerHand.push(cardArray[cardRandom]);
    usedDealerCards.push(cardArray[cardRandom]);
    cardChosen = cardArray[cardRandom];
    dealersNextCard = cardChosen.value;
    if (safe === true) {
      stand();
      return;
    }
    if (dealerTotal < 18 < 50) {
      dealerTotal = dealerTotal + cardChosen.value;
      dealer.innerHTML +=
        `<img class='dealer-card'` + `src=/deck/${cardChosen.card}.png` + ">";
      console.log("draw" + cardChosen.card);
    }
    if (dealerFirstCard === 11 && dealerLastCard < 11) {
      let firstTwo = dealerFirstCard + dealerLastCard;
      if (firstTwo + dealersNextCard > 21) {
        dealerTotal = dealerTotal - 10;
        dealerFirstCard = dealerFirstCard - 11;
        console.log("Dealer total with first ace: " + dealerTotal);
      }
    }
    if (dealerLastCard === 11 && dealerFirstCard < 11) {
      let firstTwo = dealerFirstCard + dealerLastCard;
      if (firstTwo + dealersNextCard > 21) {
        dealerTotal = dealerTotal - 10;
        dealerLastCard = dealerLastCard - 11;
        console.log("Dealer total with first ace: " + dealerTotal);
      }
    }
    if (dealersNextCard === 11 && dealerTotal + dealersCard > 21) {
      dealerTotal = dealerTotal - 10;
      console.log("subtracted 10");
      console.log("dealers next card is was ace!");
    }

    if (dealersNextCard === 11) {
      if (dealerTotal > 10) {
        dealerTotal = dealerTotal - 10;
        console.log("subtracted 10 total >17 next card is an ace");
      }
    }

    if (usedDealerCards.length > 2) {
      if (dealerTotal > 17 && dealerTotal < 21) {
        console.log(
          "Dealer has: >17 in" +
            `${usedDealerCards.length}` +
            "cards " +
            dealerTotal
        );
      }
    }

    if (dealerLastCard > 10 && dealerTotal > 21) {
      dealerLastCard = dealerLastCard + 21;
      dealerTotal = dealerTotal - 10;
      console.log("Ace Loaded! subtracting 10! " + dealerTotal);
      console.log(`Dealer has ${usedDealerCards.length} cards`);
    }
    if (dealerFirstCard > 10 && dealerTotal > 21) {
      dealerFirstCard = dealerFirstCard + 21;
      dealerTotal = dealerTotal - 10;
      console.log("Ace Loaded! subtracting 10! " + dealerTotal);
      console.log(`Dealer has ${usedDealerCards.length} cards`);
    }
  }
  dealerScore.innerText = `Card Total: ${dealerTotal}`;
}

function stand() {
  let dealerFaceDown = document.getElementById("facedown");
  if (safe === true) {
    dealerFaceDown.className = "dealer-facedown-card visible";
    console.log("safe");
    gameOver();
    return;
  }
  if (usedDealerCards.length === 2 && dealerTotal < 21 && playerTotal !== 21) {
    dealerFaceDown.className = "dealer-facedown-card visible";
    dealerDraw();
    turn = null;
  }

  if (dealerTotal === 22 && usedDealerCards.length === 2) {
    dealerFaceDown.className = "dealer-facedown-card visible";
    dealerTotal = dealerTotal - 10;
    console.log("double ace");
    dealerDraw();
  }

  dealerFaceDown.className = "visible";
  dealerDraw();
  gameOver();
}
function gameOver() {
  dealerScore.innerText = "Card Total: " + `${dealerTotal}`;

  if (dealerTotal > playerTotal && dealerTotal <= 21) {
    console.log("Dealer Wins!");
    hitBtn.className = "hit hidden";
    standBtn.className = "stand hidden";
    startBtn.className = "start hidden";
    gameOverScreen.innerHTML = "<h1 id='gameover-text'>Dealer Wins!<h1>";
    gameOverScreen.className = "visible";

    return;
  }
  if (playerTotal > dealerTotal && playerTotal <= 21) {
    console.log("Player Wins!");
    hitBtn.className = "hit hidden";
    standBtn.className = "stand hidden";
    startBtn.className = "start hidden";
    gameOverScreen.innerHTML = "<h1 id='gameover-text'>Player Wins!<h1>";
    gameOverScreen.className = "visible";
    return;
  }
  if (dealerTotal > playerTotal && dealerTotal > 21) {
    console.log("Player wins! Dealer Busted!");
    hitBtn.className = "hit hidden";
    standBtn.className = "stand hidden";
    startBtn.className = "start hidden";
    gameOverScreen.innerHTML =
      "<h1 id='gameover-text'>Player Wins! Dealer Busted!<h1>";
    gameOverScreen.className = "visible";

    return;
  }
  if (playerTotal > dealerTotal && playerTotal > 21) {
    console.log("Dealer Wins! Player Busted!");
    hitBtn.className = "hit hidden";
    standBtn.className = "stand hidden";
    startBtn.className = "start hidden";
    gameOverScreen.innerHTML =
      "<h1 id='gameover-text'>Dealer Wins! Player Busted!<h1>";
    gameOverScreen.className = "visible";

    return;
  }
  if (dealerTotal === 21 && usedDealerCards.length === 2) {
    console.log("Dealer BlackJack!");
    hitBtn.className = "hit hidden";
    standBtn.className = "stand hidden";
    startBtn.className = "start hidden";
    gameOverScreen.innerHTML = "<h1 id='gameover-text'>Dealer Blackjack!<h1>";
    gameOverScreen.className = "visible";

    return;
  }
  if (playerTotal === 21 && usedPlayerCards.length === 2) {
    console.log("Player BlackJack!");
    hitBtn.className = "hit hidden";
    standBtn.className = "stand hidden";
    startBtn.className = "start hidden";
    gameOverScreen.innerHTML = "<h1 id='gameover-text'>Player Blackjack!<h1>";
    gameOverScreen.className = "visible";

    return;
  }
  if (playerTotal === dealerTotal && dealerTotal <= 21) {
    hitBtn.className = "hit hidden";
    standBtn.className = "stand hidden";
    startBtn.className = "start hidden";
    gameOverScreen.innerHTML = "<h1 id='gameover-text'>Push!<h1>";
    console.log("Push!");
    gameOverScreen.className = "visible";
  }
  if (playerTotal < 21 && dealerTotal < 21) {
    if (dealerTotal > playerTotal) {
      console.log("dealer has a better count");
      hitBtn.className = "hit hidden";
      standBtn.className = "stand hidden";
      startBtn.className = "start hidden";
      gameOverScreen.innerHTML = "<h1 id='gameover-text'>Dealer Wins!<h1>";
      gameOverScreen.className = "visible";
    }
    if (playerTotal > dealerTotal) {
      console.log("dealer has a better count");
      hitBtn.className = "hit hidden";
      standBtn.className = "stand hidden";
      startBtn.className = "start hidden";
      gameOverScreen.innerHTML = "<h1 id='gameover-text'>Dealer Wins!<h1>";
      gameOverScreen.className = "visible";
    }
    if (dealerTotal > 21) {
      console.log("player wins! Dealer Busted");
      hitBtn.className = "hit hidden";
      standBtn.className = "stand hidden";
      startBtn.className = "start hidden";
      gameOverScreen.innerHTML =
        "<h1 id='gameover-text'>Player Wins! Dealer Busted!<h1>";
      gameOverScreen.className = "visible";
    }
    if (playerTotal < 17 && dealerTotal > 17 < 21) {
      console.log("dealer wins! > 17");
      hitBtn.className = "hit hidden";
      standBtn.className = "stand hidden";
      startBtn.className = "start hidden";
      gameOverScreen.innerHTML = "<h1 id='gameover-text'>Dealer Wins!<h1>";
      gameOverScreen.className = "visible";
    }
  }
}
function deal() {
  firstTwo();
  //startBtn.className = "hidden";
}

function reset() {
  window.location.reload();
}
startBtn.addEventListener("click", deal);
resetBtn.addEventListener("click", reset);
hitBtn.addEventListener("click", hit);
standBtn.addEventListener("click", stand);
