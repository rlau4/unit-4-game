var playerscore = 0;
var targetnum = 0;
var wins = 0;
var losses = 0;
var RedcrystalValue = 0;
var BluecrystalValue = 0;
var YellowcrystalValue = 0;
var GreencrystalValue = 0;
$(document).ready(function () {
    //Gives target number and displays     
    function TarNum() {
        targetnum = Math.floor(Math.random() * 101) + 19;
        console.log(targetnum);
        $("#target-score").text("Target Number: " + targetnum);
    };
    TarNum();

    // Creates   random value for each button

    function crystalvalues() {
        RedcrystalValue = Math.floor(Math.random() * 12) + 1;
        console.log(RedcrystalValue);

        BluecrystalValue = Math.floor(Math.random() * 12) + 1;
        console.log(BluecrystalValue);


        YellowcrystalValue = Math.floor(Math.random() * 12) + 1;
        console.log(YellowcrystalValue);

        GreencrystalValue = Math.floor(Math.random() * 12) + 1;
        console.log(GreencrystalValue);
    };
    crystalvalues();

    $("#red").on("click", function RedVal() {
        playerscore += RedcrystalValue;
        $("#playerScore").text(playerscore);
        console.log(playerscore);
   });

   $("#blue").on("click", function BlueVal() {
        playerscore += BluecrystalValue;
        $("#playerScore").text(playerscore);
        console.log(playerscore);
   });

    $("#yellow").on("click", function YellowVal() {
        playerscore += YellowcrystalValue;
        $("#playerScore").text(playerscore);
        console.log(playerscore);
    });

    $("#green").on("click", function GreenVal() {
        playerscore += GreencrystalValue;
        $("#playerScore").text(playerscore);
        console.log(playerscore);
    });

   // var crystalValue = ($("#red", "#blue" , "#yellow" , "#green").attr("RedcrystalValue", "BluecrystalValue", "YellowcrystalValue", "GreencrystalValue"));
    //crystalValue = parseInt(crystalValue);
   // playerscore += crystalValue;

    if (playerscore > targetnum) {
        losses ++;
        console.log("you lost");
        $("#losses-tracker").text("Losses: " + losses);
    }
    else if (playerscore === targetnum) {
        wins ++;
        console.log("you win");
        $("#wins-tracker").text("Wins: " + wins);
    };

    console.log(typeof playerscore);
    console.log(typeof targetnum);

});

