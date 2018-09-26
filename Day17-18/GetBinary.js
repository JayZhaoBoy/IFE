"use strict";

let str = "";
function begin() {
    str = "";
    let number = document.getElementById("numberContent").value;
    console.log(typeof number)
    getBinary(number);
    parseInt()
    document.getElementById("testP").innerHTML = str.split("").reverse().join("");
}

function getBinary(num) {
    if (num == 0) {
        return;
    }
    str = str + (num % 2);
    num = Math.floor(num / 2);
    getBinary(num);
}

