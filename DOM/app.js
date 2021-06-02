document.addEventListener("DOMContentLoaded", (function () {

    /* 1.*/
    let button = document.createElement("button");
    button.innerText = "Tell Me Something Nice!";
    // let btnText = document.createTextNode("Tell Me Something Nice!");
    // button.appendChild(btnText);
    document.body.appendChild(button);
    button.addEventListener("click", function () {
        alert("You did it!!!")
    });


    /* 2.*/
    let messageBtn = document.getElementById("boton");

    messageBtn.addEventListener("click", function () {
        let message = document.getElementById("textBox").value;
        alert(message);
    });


    /* 3.*/
    let div = document.createElement("div");
    div.innerText = "I'm the div!"
    document.body.appendChild(div);

    div.addEventListener("mouseenter", function(e){
        e.target.style.backgroundColor = "purple";
    });

    div.addEventListener("mouseleave", function (e){
        e.target.style.backgroundColor = "";
    });


    /* 4.*/
    let paragraph = document.createElement("p");
    paragraph.textContent = "I am a paragraph!";
    document.body.appendChild(paragraph);

    // paragraph.addEventListener("click", function (e){
    //     e.target.style.color = "red";
    // });

    // paragraph.addEventListener("click", function() {
    //     let randomColor = getRandomColor();
    //     paragraph.style.color = randomColor;
    // })

    // let color = [
    //     "purple",
    //     "blue",
    //     "green",
    //     "silver",
    //     "brown",
    // ];
    
    // function getRandomColor() {
    //     let randomColor = color[Math.floor(Math.random()*color.length)];
    //     return randomColor;
        
    // };

    paragraph.addEventListener("click", function () {
        let num1 = Math.floor(Math.random() * 255);
        let num2 = Math.floor(Math.random() * 255);
        let num3 = Math.floor(Math.random() * 255);
        let randomRGB = "rgb(" + num1 + "," + num2 + "," + num3 + ")";
        paragraph.style.color = randomRGB;
      });
      


    /* 5.*/
    let btnFive = document.createElement("button");
    btnFive.innerText = "Click Me To Know My Name!"
    let divFive = document.createElement("div");
    btnFive.appendChild(divFive);
    document.body.appendChild(btnFive);

    btnFive.addEventListener("click", function (){
        let span = document.createElement("span");
        span.textContent = "Daesy";
        document.body.appendChild(span);
    });


    /* 6.*/

    let friends = ["Daze", "Rico", "JC", "Javi", "Yari", "Olga", "Ale", "Elon", "Ruti", "Bruno", "Sosa"];

    let btnSix = document.getElementById("btnSix");
    btnSix.innerText = "MIGOS"
    let ulSix = document.getElementById("ulSix");
    
    btnSix.addEventListener("click", function() {
        for (let i = 0; i < friends.length; i++) {
            let li = document.createElement("li");
            let liText = document.createTextNode(friends[i]);
            li.appendChild(liText);
            ulSix.appendChild(li);
        };
        
    });




}));

