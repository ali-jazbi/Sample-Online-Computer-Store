var string = "𝒲ℯ𝓁𝓁𝒸ℴ𝓂ℯ 𝓉ℴ 𝒜𝓁𝒾 𝒥𝒶𝓏𝒷𝒾'𝓈 𝒲ℯ𝒷𝓈𝒾𝓉ℯ"; /* type your text here */
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