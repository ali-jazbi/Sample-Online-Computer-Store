var string = "π²β―πππΈβ΄πβ― πβ΄ πππΎ π₯πΆππ·πΎ'π π²β―π·ππΎπβ―"; /* type your text here */
var array = string.split("");
var timer;

function frameLooper () {
  if (array.length > 0) {
    document.getElementById("text").innerHTML += array.shift();
  } else {
    clearTimeout(timer);
      }
  loopTimer = setTimeout('frameLooper()',50); /* change 70 for speed */

}
frameLooper();