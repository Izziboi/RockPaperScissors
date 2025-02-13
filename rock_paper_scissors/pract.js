
let rockImg = document.querySelector('.js-rock-img');
let paperImg = document.querySelector('.js-paper-img');
let scissorsImg = document.querySelector('.js-scissors-img');

let winCount = 0;
let lossCount = 0;
let drawCount = 0;
let checks = 0;

// Initializing parameters
function initializeParams(){
  document.querySelector('.js-result-img-div').innerHTML = '';
  document.querySelector('.js-result-info-div').innerHTML = '';
  document.querySelector('.js-result-head-div').innerHTML = `<p>Computer choice</p><p>Your choice</p>`;
}

  
// Preconditions
function precheck(){
  const randomNum = Math.random();
  if(randomNum >= 0 && randomNum < (1/3)){
    return 'Rock';
  }
  else if(randomNum >= (1/3) && randomNum < (2/3)){
    return 'Paper';
  }
  else if(randomNum >= (2/3) && randomNum < 1){
    return 'Scissors';
  }
}


// About Rock button
function aboutRock(){
  rockImg.addEventListener('click', () => {

    initializeParams();
    
    checks = precheck();
    
    if(checks === 'Rock'){
      document.querySelector('.js-result-img-div').innerHTML = `<img src="./mytrialimage/rock.jpeg" alt="Rock Palm" /><img src="./mytrialimage/rock.jpeg" alt="Rock Palm" />`;
      document.querySelector('.js-result-info-div').innerHTML = `<p class="css-nowinner-p">No winner</p>`;
      drawCount++;
    }
    else if(checks === 'Paper'){
      document.querySelector('.js-result-img-div').innerHTML = `<img src="./mytrialimage/paper.jpeg" alt="Paper Palm" /><img src="./mytrialimage/rock.jpeg" alt="Rock Palm" />`;
      document.querySelector('.js-result-info-div').innerHTML = `<p class="css-lost-p">You lost</p>`;
      lossCount++;
    }
    else if(checks === 'Scissors'){
      document.querySelector('.js-result-img-div').innerHTML = `<img src="./mytrialimage/scissors.jpeg" alt="Scissors Palm" /><img src="./mytrialimage/rock.jpeg" alt="Rock Palm" />`;
      document.querySelector('.js-result-info-div').innerHTML = `<p class="css-won-p">You won</p>`;
      winCount++;
  }

    resultCounts();
  });
}
aboutRock();


// About Paper button
function aboutPaper(){
  paperImg.addEventListener('click', () => {

    initializeParams();
    
    checks = precheck();
    
    if(checks === 'Rock'){
      document.querySelector('.js-result-img-div').innerHTML = `<img src="./mytrialimage/rock.jpeg" alt="Rock Palm" /><img src="./mytrialimage/paper.jpeg" alt="Paper Palm" />`;
      document.querySelector('.js-result-info-div').innerHTML = `<p class="css-won-p">You won</p>`;
      winCount++;
    }
    else if(checks === 'Paper'){
      document.querySelector('.js-result-img-div').innerHTML = `<img src="./mytrialimage/paper.jpeg" alt="Paper Palm" /><img src="./mytrialimage/paper.jpeg" alt="Paper Palm" />`;
      document.querySelector('.js-result-info-div').innerHTML = `<p class="css-nowinner-p">No winner</p>`;
      drawCount++;
    }
    else if(checks === 'Scissors'){
      document.querySelector('.js-result-img-div').innerHTML = `<img src="./mytrialimage/scissors.jpeg" alt="Scissors Palm" /><img src="./mytrialimage/paper.jpeg" alt="Paper Palm" />`;
      document.querySelector('.js-result-info-div').innerHTML = `<p class="css-lost-p">You lost</p>`;
      lossCount++;
    }

    resultCounts();
  });
}
aboutPaper();


// About Scissors button
function aboutScissors(){
  scissorsImg.addEventListener('click', () => {

    initializeParams();

    checks = precheck();
    
    if(checks === 'Rock'){
      document.querySelector('.js-result-img-div').innerHTML = `<img src="./mytrialimage/rock.jpeg" alt="Rock Palm" /><img src="./mytrialimage/Scissors.jpeg" alt="Scissors Palm" />`;
      document.querySelector('.js-result-info-div').innerHTML = `<p class="css-lost-p">You lost</p>`;
      lossCount++;
    }
    else if(checks === 'Paper'){
      document.querySelector('.js-result-img-div').innerHTML = `<img src="./mytrialimage/paper.jpeg" alt="Paper Palm" /><img src="./mytrialimage/Scissors.jpeg" alt="Scissors Palm" />`;
      document.querySelector('.js-result-info-div').innerHTML = `<p class="css-won-p">You won</p>`;
      winCount++;
    }
    else if(checks === 'Scissors'){
      document.querySelector('.js-result-img-div').innerHTML = `<img src="./mytrialimage/scissors.jpeg" alt="Scissors Palm" /><img src="./mytrialimage/Scissors.jpeg" alt="Scissors Palm" />`;
      document.querySelector('.js-result-info-div').innerHTML = `<p class="css-nowinner-p">No winner</p>`;
      drawCount++;
    }

    resultCounts();
  });
}
aboutScissors();


// Result counts
function resultCounts(){
  document.querySelector('.js-won-count').innerHTML = `<p>${winCount} times</p>`;
  document.querySelector('.js-lost-count').innerHTML = `<p>${lossCount} times</p>`;
  document.querySelector('.js-drew-count').innerHTML = `<p>${drawCount} times</p>`;
}


// Clear button
function clearButton(){
  let clearBtn = document.querySelector('.js-clear-btn');
  clearBtn.addEventListener('click', () => {
    winCount = 0;
    lossCount = 0;
    drawCount = 0;
    document.querySelector('.js-result-img-div').innerHTML = '';
    document.querySelector('.js-result-info-div').innerHTML = '';
    document.querySelector('.js-won-count').innerHTML = '';
    document.querySelector('.js-lost-count').innerHTML = '';
    document.querySelector('.js-drew-count').innerHTML = '';
    document.querySelector('.js-result-head-div').innerHTML = '';
  });
}

clearButton();
