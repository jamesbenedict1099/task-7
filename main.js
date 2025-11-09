let nameInput = document.getElementById("nameInput");
let greeting = document.getElementById("greeting");
let moodBox = document.getElementById("moodBox");
let growBtn = document.getElementById("growBtn");
let shrinkBtn = document.getElementById("shrinkBtn");
let toggleMode = document.getElementById("toggleMode");
let secretBtn = document.getElementById("secretBtn");
let secretMessage = document.getElementById("secretMessage");


nameInput.addEventListener("input", function () {
    let name = nameInput.value.trim();
    if (name === "") {
        greeting.innerText = "Hello, friend!";
        greeting.style.color = "black";
        greeting.style.fontWeight = "normal";
    } else {
        greeting.innerText = "Hello, " + name + "!";
        greeting.style.color = "green";
        greeting.style.fontWeight = "bold";
    }
});


growBtn.addEventListener("click", function () {
    let currentWidth = moodBox.offsetWidth;
    let currentHeight = moodBox.offsetHeight;
    moodBox.style.width = currentWidth + 20 + "px";
    moodBox.style.height = currentHeight + 20 + "px";
});

shrinkBtn.addEventListener("click", function () {
    let currentWidth = moodBox.offsetWidth;
    let currentHeight = moodBox.offsetHeight;
    moodBox.style.width = currentWidth - 20 + "px";
    moodBox.style.height = currentHeight - 20 + "px";
});

toggleMode.addEventListener("click", function () {
    if (document.body.style.backgroundColor === "black") {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
    } else {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
    }
});

secretBtn.addEventListener("click", function () {
    if (secretMessage.style.display === "none") {
        secretMessage.style.display = "block";
    } else {
        secretMessage.style.display = "none";
    }
});
