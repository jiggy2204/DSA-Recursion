const sumOf = function (list) {
  // Base case
  if (list.length === 1) {
    return list[0];
  }
  // General case
  return list[0] + sumOf(list.slice(1));
};

let lst = [2, 4, 6, 8, 10];
console.log(sumOf(lst));

sumOf(lst);

//Answer is 30

//COUNTING SHEEP

const countSheep = function (numSheep) {
  if (numSheep === 0) {
    return console.log("All sheep jumped over the fence");
  }

  if (numSheep > 0) {
    console.log(numSheep + ": Another sheep jumps over the fence");
    let oneJumped = numSheep - 1;
    return numSheep(oneJumped);
  }
};

let sheepInit = 3;
console.log(countSheep(sheepInit));

countSheep(sheepInit);

//POWER CALCULATOR

const powerCalculator = function (base, exp) {
  if (exp < 0) {
    return console.log("Exponent should be >= 0");
  }

  if (exp === 1) {
    return console.log(1);
  } else {
    return base * powerCalculator(base, exp - 1);
  }
};

let base = 5,
  exp = 3;
console.log(powerCalculator(base, exp));

powerCalculator(base, exp);

//REVERSE STRING

const reverseString = function (str) {
  return str ? reverseString(str.substr(1)) + str[0] : str;
};

console.log(reverseString("Hello, world!"));

reverseString("Hello, world!");

//NTH TRIANGULAR NUMBER

const triNum = function (n) {
  if (n <= 1) {
    return console.log(n);
  }

  return n + triNum(n - 1);
};

console.log(triNum(4));

triNum(4);

//STRING SPLITTER

const splitString = function (str) {
  if ((str = [])) {
    return str;
  }

  let output = splitString(str.split("/"));
  return output;
};

//FIBONACCI SEQUENCE

const fib = function (num) {
  if (num <= 1) {
    return console.log(1);
  }

  return fib(num - 1) + fib(num - 2);
};

console.log(fib(5));
fib(5);

//FACTORIAL

const factorial = function (num) {
  if ((num = 0)) {
    return console.log(1);
  }

  return console.log(num * factorial(num - 1));
};

console.log(factorial(5));
factorial(5);

//MAZE ESCAPE

let mySmallMaze = [
  [" ", " ", " "],
  [" ", "*", " "],
  [" ", " ", "e"],
];

let maze = [
  [" ", " ", " ", "*", " ", " ", " "],
  ["*", "*", " ", "*", " ", "*", " "],
  [" ", " ", " ", " ", " ", " ", " "],
  [" ", "*", "*", "*", "*", "*", " "],
  [" ", " ", " ", " ", " ", " ", "e"],
];

const traverseSmallMaze = function (col, row) {
  if (mySmallMaze[col][row] == "e") {
    return console.log("We solved the maze at (" + col + ", " + row + ")");
  } else if (mySmallMaze[col][row] == "*") {
    console.log("At valid position (" + col + ", " + row + ")");
    if (col < mySmallMaze.length - 1) {
      traverseSmallMaze(col + 1, row);
    }

    if (row < mySmallMaze[col].length - 1) {
      traverseSmallMaze(col, row + 1);
    }

    if (col > 0) {
      traverseSmallMaze(col - 1, row);
    }

    if (row > 0) {
      traverseSmallMaze(col, row - 1);
    }
  }
};

const traverseMaze = function (col, row) {
  if (mySmallMaze[col][row] == "e") {
    return console.log("We solved the maze at (" + col + ", " + row + ")");
  } else if (mySmallMaze[col][row] == "*") {
    console.log("At valid position (" + col + ", " + row + ")");
    if (col < mySmallMaze.length - 1) {
      traverseMaze(col + 1, row);
    }

    if (row < mySmallMaze[col].length - 1) {
      traverseMaze(col, row + 1);
    }

    if (col > 0) {
      traverseMaze(col - 1, row);
    }

    if (row > 0) {
      traverseMaze(col, row - 1);
    }
  }
};
