function myFunctionOne(y) {
    // y.classList.toggle("change"); - NOT WORKING
    let x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }


}
