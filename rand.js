var pickButton;
var header;
var body;
var choice;
var aList;

var students = [
  "Kevin",
  "Jonathan",
  "Angel",
  "Eric",
  "Janette",
  "Desmond",
  "Ashiya",
  "Monica",
  "Susana",
  "Deborah",
  "Thomas",
  "Julissa",
  "Kyla",
  "John",
  "Shonica",
  "Krystal"
];

var colors = [
  'peachpuff',
  'pink',
  'plum', 0,
  'powderblue', 0,
  'mediumvioletred',
  'purple',
];
var cur = 0;

document.addEventListener('DOMContentLoaded', () => {
  console.log('hello rand.js');

  body = document.getElementById('body');
  header = document.getElementById('header');
  pickButton = document.getElementById('pickButton');
  pickButton2 = document.getElementById('pickButton2');
  choice = document.getElementById('choice');
  aList = document.getElementById('aList');

  pickButton.addEventListener('click', pickOnClick );
  aList.addEventListener('click', aListOnClick );
  pickButton2.addEventlistener('click', clickHere);

  // build the attendance list
  for (let i=0; i<students.length; i++) {
    let li = document.createElement('li');
    li.innerText = students[i];
    aList.append(li);
  }
});

var pickOnClick = function (event) {
  choice.innerHTML = '&nbsp;'
  var rand = students[Math.floor(Math.random() * students.length)];
  var rand2 = students[Math.floor(Math.random() * students.length)];
  var studentsRemove = students.splice(students.indexOf(rand),1);
  var x = window.setInterval(() => {
    if (colors[cur] === undefined) {
      window.clearInterval(x);
      cur = 0;
      choice.innerText = rand + "," + rand2;
      return;
    }
    if (colors[cur]) header.style.color = colors[cur];
    if (colors[cur-1]) body.style.backgroundColor = colors[cur-1];
    cur += 1;
  }, 200);
}

var clickHere - function (event) {
    alert ('just chilling!')
}

var aListOnClick = function (event) {
  if (event.target.tagName === 'LI') {
    event.target.style.textDecoration = 'line-through';
  }
}
