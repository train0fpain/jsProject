var heading = document.getElementById("title");
var year;
var yearOutput = document.getElementById("leapYearOutput");
var pangramm;
var pangrammOutput = document.getElementById("pangrammOutput")

// aufgabe 1
function reverseString(str){
    return str.split("").reverse().join("");
}
heading.textContent = reverseString(heading.textContent);

// aufgabe 2
year = window.prompt("Enter a year: ");
function isLeapYear(year) {
    if (year % 100 == 0){
        return year % 400 == 0;
    }else{
       return year % 4 == 0;
    }
}
yearOutput.textContent = year+" is a leap-year: "+isLeapYear(year);

// aufgabe 3
function creatAbcArray() {
    let abc = "abcdefghijklmnopqrstuvwxyz";
    abc = abc.split("");
    return abc;
}
function checkLetter(letter, abc) {
    for (let i=0; i <= abc.length-1; i++){
        if (letter == abc[i]){
            abc.splice(i, 1);
        }
    }
}
pangramm = window.prompt("Enter a string to check if it is a pangramm: ");
pangramm = pangramm.toLowerCase();
function isPangramm(string) {
    let abc = creatAbcArray();
    let str = string.split(" ").join("").split("");
    for (let i = 0; i <= str.length; i++) {
        checkLetter(str[i], abc);
    }
    return abc.length == 0;
}

pangrammOutput.textContent = pangramm+" was pangramm: "+isPangramm(pangramm);
