console.log('CONNECTED')
console.log('Here are the rules for the game: \n\n Rock crushes Scissors \n Scissors cuts Paper \n Paper covers Rock \n Rock crushes Lizard \n Lizard poisons Spock \n Spock smashes Scissors \n Scissors decapitates Lizard \n Lizard eats Paper \n Paper disproves Spock \n Spock vaporizes Rock\n\n')

// Initially only show rock image. Hide all others.
$("#paperImg, #scissorsImg, #lizardImg, #spockImg").hide();

// Click button to show rock image, and hide all others. Adapt buttons to rules.
$("#rockBtn").on("click", function () {
    refresh();
    rockRules();
    $("#paperImg, #scissorsImg, #lizardImg, #spockImg").hide();
    $("#rockImg").fadeIn(3000);
})

// Click button to show paper image, and hide all others. Adapt buttons to rules.
$("#paperBtn").on("click", function () {
    refresh();
    paperRules();
    $("#rockImg, #scissorsImg, #lizardImg, #spockImg").hide();
    $("#paperImg").fadeIn(3000);
})

// Click button to show scissor image, and hide all others. Adapt buttons to rules.
$("#scissorsBtn").on("click", function () {
    refresh();
    scissorRules();
    $("#rockImg, #paperImg, #lizardImg, #spockImg").hide();
    $("#scissorsImg").fadeIn(3000);
})

// Click button to show lizard image, and hide all others. Adapt buttons to rules.
$("#lizardBtn").on("click", function () {
    refresh();
    lizardRules();
    $("#rockImg, #paperImg, #scissorsImg, #spockImg").hide();
    $("#lizardImg").fadeIn(3000);
})

// Click button to show spock image, and hide all others. Adapt buttons to rules.
$("#spockBtn").on("click", function () {
    refresh();
    spockRules();
    $("#rockImg, #paperImg, #scissorsImg, #lizardImg").hide();
    $("#spockImg").fadeIn(3000);
})

// Remove all button colours. So we can add the correct colours when new buttons are clicked.
function refresh() {
    $("#rockBtn").removeClass("win");
    $("#rockBtn").removeClass("lose");

    $("#paperBtn").removeClass("win");
    $("#paperBtn").removeClass("lose");

    $("#scissorsBtn").removeClass("win");
    $("#scissorsBtn").removeClass("lose");

    $("#lizardBtn").removeClass("win");
    $("#lizardBtn").removeClass("lose");

    $("#spockBtn").removeClass("win");
    $("#spockBtn").removeClass("lose");
}

// Add the correct colours to the buttons depending on the rules
function rockRules() {
    $("#paperBtn").addClass("lose");
    $("#spockBtn").addClass("lose");
    $("#scissorsBtn").addClass("win");
    $("#lizardBtn").addClass("win");
}

function paperRules() {
    $("#rockBtn").addClass("win");
    $("#spockBtn").addClass("win");
    $("#scissorsBtn").addClass("lose");
    $("#lizardBtn").addClass("lose");
}

function scissorRules() {
    $("#rockBtn").addClass("lose");
    $("#spockBtn").addClass("lose");
    $("#paperBtn").addClass("win");
    $("#lizardBtn").addClass("win");
}

function lizardRules() {
    $("#rockBtn").addClass("lose");
    $("#spockBtn").addClass("win");
    $("#paperBtn").addClass("win");
    $("#scissorsBtn").addClass("lose");
}

function spockRules() {
    $("#rockBtn").addClass("win");
    $("#lizardBtn").addClass("lose");
    $("#paperBtn").addClass("lose");
    $("#scissorsBtn").addClass("win");
}

