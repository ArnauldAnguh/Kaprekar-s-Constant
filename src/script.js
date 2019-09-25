const display = document.getElementById("output");
const btn = document.querySelector("button");

btn.addEventListener("click", event => {
  const input = document.querySelector("input");
  let count;
  document.querySelector("#display").innerHTML = "";
  let inputVal = input.value;
  let value = inputVal.replace(/[\D\s\._\-]+/g, "");
  value = Number.parseInt(value);
  if (isNaN(value) || value == "")
    return (display.innerHTML = "<b>Sorry, input value not a Number!</b>");

  kaprekarConstant(value, count);
});

function kaprekarConstant(num, count) {
  if (typeof count === "undefined") count = 1;
  if (num === 6174) {
    return (display.innerHTML = "<b>" + num + " </b> is Kaprekar's constant");
  }
  let numArray = num
    .toString()
    .split("")
    .filter(function(a, b) {
      return a !== b;
    });

  if (numArray.length >= 5 || numArray.length <= 3) {
    return (display.innerHTML = "invalid number length");
  }

  let highNumber = numArray
    .sort()
    .reverse()
    .join("");
  let lowNumber = numArray.sort().join("");
  for (let i = 0; i < numArray.length; i++) {
    if (numArray[i - 1] === numArray[i]) {
      return (display.innerHTML =
        "<b>Sorry, identical numbers " +
        numArray[i - 1] +
        numArray[i] +
        " spotted in " +
        numArray.reverse().join("") +
        "!</b>");
    }
    if (highNumber[i - 1] === highNumber[i]) {
      return (display.innerHTML =
        "<b>Sorry, identical numbers found in " + highNumber + "</b>");
    }
  }
  let dNumber = highNumber - lowNumber;
  document.getElementById("display").innerHTML +=
    "<span>" + highNumber + " - " + lowNumber + " = " + dNumber + "</span><br>";
  if (dNumber === 6174) {
    document.getElementById("display").innerHTML +=
      "<span style='text-decoration: line-through'><b>" +
      highNumber +
      " - " +
      lowNumber +
      " = " +
      dNumber +
      "</b></span><br> <small>(Note: last line not counted!)</small>";
    return (display.innerHTML =
      "<li> it took <b>" + count + "</b> tries to reach <b>6174!</b></li>");
  }
  return kaprekarConstant(dNumber, count + 1);
}
