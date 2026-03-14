//duplicate for letter is in the output word function, (around line 51)
let words, x;
let count = 0;
let w;
let lineNumber = 0;
let tempString = "";
let c;
let stringtemp;
let text1 = "";

const globalArray = [];


const letterButtons = [];

function preload() {
  words = loadStrings("words.txt");
}


class DelClass {
  //all classes have a constructor
  //this is used to create objects of that class
  constructor(text2) {
    //console.log(buttonName + " created");
    this.buttonName = createButton(text2);
    if (text2 == "⌦") {
      console.log("bye");
      this.buttonName.mousePressed(delkey);
    } //else {
    //this.buttonName.mousePressed(commandButton);
    // }
  } // a bracke
} //class


function delkey() {
  if (tempString.length > 0) {
    lineNumber -= tempString.length;
    squares(floor(lineNumber / 5) + 1);
    for (let i = 0; i < 5; i++) {
      let c = tempString[i];
      tempString = tempString.slice(0, tempString.length - 1);
      text(c, 150 + (i % 5) * 35, 200 + floor((lineNumber / 5) * 40));
      squares(floor(lineNumber / 5) + 1);
      count = 0;
    }
  } //del key
}

function OutputWords() {
  console.log("globalArray[letterNumber('L')] == 0 is ");
  console.log(globalArray[letterNumber("L")]);
  //console.log("outputwords tempstring = " + tempString);
  if (count == 5 && words.indexOf(tempString) != -1) {
    console.log("789");
    fill("white");

    squares(floor(lineNumber / 5) + 1);
    for (i = 0; i < 5; i++) {
      let t1 = tempString[i];


      stringtemp = unchar(t1) - 65;

      if (w == tempString) {
        winnerCheck();
      }
      if (lineNumber / 5 == 6 && w != tempString) {
        loserCheck();
      }

      if (w.indexOf(t1) != -1) {
        letterButtons[stringtemp].buttonName.style("background-color:green");
        if (w[i] == t1) {
          if (
            globalArray[letterNumber(t1)] == 0 ||
            globalArray[letterNumber(t1)] == 1
          ) {
            stroke("green");
            fill("green");
          }
         
        //  globalArray[letterNumber(t1)] = 1;
          
        } else {
            
        if (globalArray[letterNumber(t1)] == 0) {
    globalArray[letterNumber(t1)] = 1;
            stroke("orange");
            fill("orange");
        
          letterButtons[stringtemp].buttonName.style(
              "background-color:orange"
            );
        
        }
      } //if
      }
      else {
        
        stroke("rgb(43,48,43)");
        fill("rgb(17,19,17)");
        letterButtons[stringtemp].buttonName.style("background-color:grey");
      } //else
      
      

      textSize(30);

      text(t1, 150 + (i % 5) * 35, 200 + floor((lineNumber - 5) / 5) * 40);

      stroke("black");
      fill("black");
    } //for i
  } //if length 5
  else {
    console.log("789");
    fill("white");

    squares(floor(lineNumber / 5) + 1);
    lineNumber -= tempString.length;
  }
  count = 0;
  tempString = "";
} //outputwords

class ButtonClass {
  //all classes have a constructor
  //this is used to create objects of that class
  constructor(text1, inUse) {
    //console.log(buttonName + " created");
    this.buttonName = createButton(text1);
    if (text1 == "ENTER") {
      console.log("*hi");
      this.buttonName.mousePressed(OutputWords);
    } else {
      this.buttonName.mousePressed(buttonCommand, false);
      //this.num = num;
    } // a bracket

    function buttonCommand() {
      if (count <= 4) {
        tempString += text1;

        console.log("count= " + count);
        stroke("black");
        fill("black");

        textSize(30);

        text(text1, 150 + count * 35, 200 + floor(lineNumber / 5) * 40);

        count++;
        lineNumber++;
      } //output words
    } //fn command
  } //constructor
} //class Lbtn

function letterCommand() {
  if (count <= 4) {
    tempString += text1;

    console.log("count= " + count);
    stroke("black");
    fill("black");

    textSize(30);

    text(text1, 150 + count * 35, 200 + floor(lineNumber / 5) * 40);

    count++;
    lineNumber++;
  } //output words
} //fn command

class againClass {
  //all classes have a constructor
  //this is used to create objects of that class
  constructor(revamp) {
    //console.log(buttonName + " created");
    this.buttonName = createButton(revamp);
    if (revamp == "PLAY AGAIN") {
      console.log("reset successful");
      this.buttonName.mousePressed(playAgain);
    } //if
  } //constructor
} //class

function resetTest() {
  if (words[x] == tempString || lineNumber / 5 == 6) {
    return true;
  } else {
    return false;
  } //else
} //function

function playAgain() {
  clear();
  setup();
  lineNumber = 0;
}

function loserCheck() {
  fill("white");
  rect(30, 20, 440, 100);
  textSize(40);
    stroke("beige");
  fill("beige");
  rect(30, 410, 440, 50);

  fill("black");
  stroke("black");
  //textAlign(CENTER);
  text("You Lost", 175, 60);
  textSize(37);
  text("The Word Was : " + words[x], 40, 100);
}

function winnerCheck() {
  fill("white");
  rect(30, 20, 440, 50);
  textSize(40);
  stroke("beige");
  fill("beige");
  rect(30, 410, 440, 50);
  
  fill("black");
  stroke("black");
  //textAlign(CENTER);
  text("Winner!", 175, 60);
}

function squares(n) {
  stroke("black");
  fill("white");
  for (let i = 0; i < 5; i++) {
    rect(145 + 35 * i, 175 + (n - 1) * 40, 30, 30);
  } //for
} //square

function OutputButtons() {
  y = 0;
  x = 0;

  let ButtonCount = 0;
  let i = [81, 87, 69, 82, 84, 89, 85, 73, 79, 80];
  for (let m = 0; m < 10; m++) {
    letterButtons[i[m] - 65] = new ButtonClass(char(i[m]));
    /*button.buttonName.position(5+28*(something other than i))
 try declaring an "x" which you can reset to zero
 after 13 itrations of i*/
    letterButtons[i[m] - 65].buttonName.position(108 + 28 * x, 410 + y);
    x++;
    ButtonCount++;
    ButtonCount += 0;
  }
  let j = [65, 83, 68, 70, 71, 72, 74, 75, 76];
  x = 0;
  y = 0;
  for (let m = 0; m < j.length; m++) {
    letterButtons[j[m] - 65] = new ButtonClass(char(j[m]));
    letterButtons[j[m] - 65].buttonName.position(124 + 28 * x, 440 + y);
    x++;
    ButtonCount++;
    ButtonCount += 0;
  }
  let t = [90, 88, 67, 86, 66, 78, 77];
  for (let m = 0; m < t.length; m++) {
    letterButtons[t[m] - 65] = new ButtonClass(char(t[m]));

    letterButtons[t[m] - 65].buttonName.position(-100 + 28 * x, 470 + y);
    x++;
    ButtonCount++;
    ButtonCount += 0;
  }
  enterKey = new ButtonClass("ENTER");
  enterKey.buttonName.position(420, 400);
    delKey = new DelClass("⌦");
  delKey.buttonName.position(420, 430);
} //outputbuttons

function keyPressed() {
  if (keyCode === BACKSPACE) {
    delkey();
  } //if
  else if (keyCode === ENTER) {
    OutputWords();
  } //else if
  else {
    buttonCommand(char(keyCode));
  } //else
} //KeyPressed

function buttonCommand(s) {
  if (count <= 4) {
    tempString += s;

    console.log("count= " + count);
    stroke("black");
    fill("black");

    textSize(30);

    text(s, 150 + count * 35, 200 + floor(lineNumber / 5) * 40);

    count++;
    lineNumber++;
  } //output words
} //fn command

function letterNumber(n) {
  return n.charCodeAt(0) - 65;
}

function setup() {
  
  
  

  for (let i = 0; i < 26; i++) {
    globalArray[i] = 0;
  }

  createCanvas(500, 500);
  background("beige");
  textSize(45)
  stroke('black')
  fill('black')
  text("Wordle", 160, 165);
  for (let i = 1; i <= 6; i++) {
    squares(i);
  }
  //let button;
  OutputButtons();

  console.log("*" + letterButtons[0].buttonName.text1);

  if (resetTest) {
    playagain = new againClass("PLAY AGAIN");
    playagain.buttonName.position(400, 370);
    //playagain.mousePressed(playAgain);
  }
  


  x = round(random(words.length));
  console.log(x);
  w = words[x];

  //text(words[x], 100, 100);
  console.log(words[x]);
  console.log(words.indexOf(w));


  //see how we index our file
  //console.log(words.length)
} //setup
