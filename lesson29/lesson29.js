// ======================================
//                 TASK1
// ======================================



let playList = [
    {
        author: "LED ZEPPELIN",
        song: "STAIRWAY TO HEAVEN"
    },
    {
        author: "QUEEN",
        song: "BOHEMIAN RHAPSODY"
    },
    {
        author: "LYNYRD SKYNYRD",
        song: "FREE BIRD"
    },
    {
        author: "DEEP PURPLE",
        song: "SMOKE ON THE WATER"
    },
    {
        author: "JIMI HENDRIX",
        song: "ALL ALONG THE WATCHTOWER"
    },
    {
        author: "AC/DC",
        song: "BACK IN BLACK"
    },
    {
        author: "QUEEN",
        song: "WE WILL ROCK YOU"
    },
    {
        author: "METALLICA",
        song: "ENTER SANDMAN"
    }
];

// -------------------------------------------------------
//  Create a page that displays a numbered list of songs:
// -------------------------------------------------------


function showList(arr) {
    let list = document.getElementById("list");
    for (let i = 0; i < arr.length; i++) {
        let li = document.createElement('li');
        li.innerHTML = `AUTHOR: ${playList[i].author} SONG: ${playList[i].song} `;
        list.appendChild(li);
    };
};
showList(playList);



// ======================================
//                 TASK2
// ======================================

// ---------------------------
//  Function button - "Open":
// ---------------------------


let showModal = function (state) {
    document.getElementById(`modal_form`).style.display = state;
    document.getElementById(`filter`).style.display = state;
}

// ---------------------------
//  Function button - "Close":
// ---------------------------

let span = document.getElementsByClassName("close")[0];

span.onclick = function () {
    modal_form.style.display = "none";
    filter.style.display = "none";
}

// ======================================
//                 TASK3
// ======================================

function isColor(color) {
    return color.classList.contains('active');
}

function addRemoveColor(firstColor, secondColor = 0) {
    if (secondColor === 0) {
        firstColor.classList.add('active');
    } else {
        firstColor.classList.remove('active');
        secondColor.classList.add('active');
    }
}

function nextColor() {

    const trafficItems = document.querySelectorAll('.circle');
    const red = trafficItems[0], yellow = trafficItems[1], green = trafficItems[2];

    if (!isColor(red) && !isColor(yellow) && !isColor(green))
        addRemoveColor(red);
    else if (isColor(red))
        addRemoveColor(red, yellow);
    else if (isColor(yellow))
        addRemoveColor(yellow, green);
    else
        addRemoveColor(green, red);

}