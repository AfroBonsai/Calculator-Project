
// Author: George Zamfir
// Version 1.0



// -------------------- SCREEN CHANGE -------------------- //

const screenChange = (nextScreen) => {

    let screenSelect = ["screen1", "screen2", "screen3", "screen4"];

    screenSelect = screenSelect.filter(i => !nextScreen.includes(i));

    document.getElementById(nextScreen).style.display = "block";

    for (let position of screenSelect) {

        document.getElementById(position).style.display = "none";
    }
}


// -------------------- PLAYERS AND RACE -------------------- //

//---función randomizar

