let str = "";
let count_open = 0;
let count_close = 0;

buttonClicked = (id) => {
  let a = document.getElementById(id);
  if (a.innerHTML == "x") {
    str = str + "*";
  } else if (a.innerHTML == "÷") {
    str = str + "/";
  } else if (a.innerHTML == "AC") {
    str = "";
  } else if (a.innerHTML == "CE") {
    str = str.slice(0, str.length - 1);
  } else if (a.innerHTML == "=") {
    let iterate = str.matchAll(/\(/g);
    let arr = Array.from(iterate);
    count_open = arr.length;
    iterate = str.matchAll(/\)/g);
    arr = Array.from(iterate);
    count_close = arr.length;
    while (count_close < count_open) {
      str += ")";
      count_close++;
    }
    try {
      str = eval(str);
      document.getElementById("AC").innerHTML = "AC";
    } catch (error) {
      document.getElementById("display").innerHTML = "Error";
      document.getElementById("AC").innerHTML = "AC";
      str = "";
      return;
    }
  } else if (a.innerHTML == "(") {
    if (str.length == 0) {
      str = str + "(";
    } else {
      str = str + "*(";
    }
  } else if (a.innerHTML == ")") {
    str = str + ")";
  } else {
    str = str + a.innerHTML;
  }

  if (a.innerHTML != "=") {
    if (str.length == 0) {
      document.getElementById("AC").innerHTML = "AC";
    } else {
      document.getElementById("AC").innerHTML = "CE";
    }
  }

  let b = document.getElementById("display");
  b.innerHTML = str;
};
