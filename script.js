// var images;

// // Describe this function...
// function next() {
//   if(--window.LoopTrap <= 0) throw "Infinite loop.";
//   images.push(images.shift());
//   let element_img2 = document.getElementById('img');
//   element_img2.setAttribute("src", images[0]);
// }

// // Describe this function...
// function prev() {
//   if(--window.LoopTrap <= 0) throw "Infinite loop.";
//   images.unshift(images.pop());
//   let element_img3 = document.getElementById('img');
//   element_img3.setAttribute("src", images[0]);
// }


// images = [];
// let element_img = document.getElementById('img');
// element_img.setAttribute("src", images[0]);


// document.getElementById('next').addEventListener('click', (event) => {
//   next();

// });

// document.getElementById('prev').addEventListener('click', (event) => {
//   prev();

// });

var dice, rolls, total, item;

// Describe this function...
function check() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  if (total == 11) {
    let element_info = document.getElementById('info');
    element_info.innerText = 'You Win!';
  } else if (total > 11) {
    let element_info2 = document.getElementById('info');
    element_info2.innerText = 'You Lose!';
  } else if (total == 0) {
    let element_info3 = document.getElementById('info');
    element_info3.innerText = 'Start!';
  } else {
    let element_info4 = document.getElementById('info');
    element_info4.innerText = 'Keep Playing!';
  }
}

function randomInt(n) {
  // Return a random number from in [0, n[
  return Math.floor(Math.random()*n);
}

function randomMember(arr) {
  // Return a random member of the array
  return arr[randomInt(arr.length)]
}

// Describe this function...
function do_rolls() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  rolls.push(randomMember(dice));
  list();
}

// Describe this function...
function total2() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  total = rolls.reduce((a,b) => a+b, 0);
  let element_total = document.getElementById('total');
  element_total.innerText = total;
}

// Describe this function...
function restart() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  rolls = [];
  list();
}

// Describe this function...
function list() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  let element_list = document.getElementById('list');
  element_list.replaceChildren();
  rolls.forEach((item) => {
    let new_li = document.createElement('li');
    new_li.innerText = item;

    element_list.appendChild(new_li);
  });
}

// Describe this function...
function remove() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  rolls.pop();
  list();
}


dice = [1, 2, 3, 4, 5, 6];
rolls = [];


document.getElementById('button-roll').addEventListener('click', (event) => {
  if (!(total >= 11)) {
    do_rolls();
    total2();
    check();
  }

});

document.getElementById('button-restart').addEventListener('click', (event) => {
  restart();
  total2();
  check();

});

document.getElementById('button-remove').addEventListener('click', (event) => {
  if (total != 0) {
    remove();
    total2();
    check();
  }

});