function biggerPressed() {
    alert("Hello World!");
    document.getElementById("usertext").style.fontSize = "24pt";
}

function fancyPressed() {
    alert("Fancy!!");
    document.getElementById("usertext").style.fontWeight = "bold";
    document.getElementById("usertext").style.color = "blue";
    document.getElementById("usertext").style.textDecoration = "underline";
}

function boringPressed() {
    document.getElementById("usertext").style.fontWeight = "normal";
    document.getElementById("usertext").style.color = "black";
    document.getElementById("usertext").style.textDecoration = "none";
}

function mooPressed() {
    var inputText = document.getElementById("usertext").value;
    inputText = inputText.toUpperCase();
    var parts = inputText.split(".");
    inputText = parts.join("-Moo.");
    document.getElementById("usertext").value = inputText;
}
