function memeGenerator() {

    let image = document.getElementById("url");

    // creating div to hold meme div
    let div = document.createElement("div");
    div.classList.add("meme")
    div.style = "position: relative";
    
    // retrieving upper text from user input
    let textElement = document.createElement("div");
    textElement.classList.add("styleTop");
    let answerToQuestionTwo = document.getElementById('answer2');
    textElement.innerHTML = answerToQuestionTwo.value;

    // retrieving lower text from user input
    let textElementBot = document.createElement("div");
    textElementBot.classList.add("styleBot");
    let answerToQuestionThree = document.getElementById('answer3');
    textElementBot.innerHTML = answerToQuestionThree.value;

    // creating delete button
    let deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.addEventListener("click", function() {
    deleteButton.parentElement.remove() 
    });

    // getting image from user link
    let img = document.createElement("img");
    img.src = image.value;
    img.width = 300;
    img.height = 300;
    img.alt = "picture";

    // adding user's image, upper text, lower text, and implementing delete button
    div.appendChild(img);
    div.appendChild(textElement);
    div.appendChild(textElementBot);
    div.appendChild(deleteButton);

    // adding new meme to memes div
    let memes = document.getElementById("memes");
    memes.appendChild(div);

    // resetting form after generating new meme
    image.value = "";
    answerToQuestionTwo.value = "";
    answerToQuestionThree.value = "";

}

let submit = document.getElementById("submit");

// waiting on user to click on submit button to create meme
submit.addEventListener("click", function () {

    memeGenerator();

});

