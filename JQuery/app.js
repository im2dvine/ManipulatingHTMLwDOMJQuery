$(document).ready(function () {

    /* 1.*/
    let $btnOne = $("<button class='btnOne'>Tell Me Something Nice</button>");
    $("body").append($btnOne);

    $btnOne.on("click", function () {
        alert("You did it!!");
    });



    /* 2.*/
    $("#btnTwo").on("click", function () {
        $("form").submit(function () {
            alert($("input[type='text']").val());
        });
    })


    /* 3.*/
    let $div = $("<div>I'm the div!</div>");
    $("body").append($div);

    $div.mouseenter(function () {
        $(this).css({ "background-color": "purple" });
    })

    $div.mouseleave(function () {
        $(this).css({ "background-color": "" });
    })


    /* 4.*/
    let $paragraph = $("<p>I am a paragraph!</p>")
    $("body").append($paragraph);

    $paragraph.on("click", function () {

        // $(this).css("color", "red");

        let red = Math.floor(Math.random() * 255);
        let green = Math.floor(Math.random() * 255);
        let blue = Math.floor(Math.random() * 255);
        let randomColor = `rgb(${red}, ${green}, ${blue})`; //random color
        $(this).css("color", randomColor);
    });


    /* 5.*/
    let $btnFive = $("<button>Click Me To Know My Name</button>");
    let $divFive = $("<div></div>");
    $btnFive.append($divFive);
    $("body").append($btnFive);

    $btnFive.on("click", function () {
        let $span = $("<span>Daesy</span>");
        $("body").append($span);
    });


    /* 6.*/
    let friends = ["Daze", "Rico", "JC", "Javi", "Yari", "Olga", "Ale", "Elon", "Ruti", "Bruno", "Sosa"];

    let $btnSix = $("#btnSix");
    let $ulSix = $("#ulSix");

    $btnSix.on("click", function () {
        for (let i = 0; i < friends.length; i++) {
            let $Migos = $("<li>" + friends[i] + "</li>");
            $Migos.appendTo($ulSix);
        };
    });

});