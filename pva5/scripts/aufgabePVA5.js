var paragraphs = document.getElementsByTagName("p");
var charCount = 0;
for (i=0; i<paragraphs.length; i++){
    charCount += paragraphs[i].innerHTML.split("").length;
}

document.getElementById("result").textContent = charCount;