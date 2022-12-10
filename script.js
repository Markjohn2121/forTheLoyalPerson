var value = document.getElementById("values");
var range1Value = document.getElementById("range1-value");
var desc = document.getElementById("desc");
var data = document.getElementById("data");
var main1 = document.getElementById("main1");
var main = document.getElementById("main");
var outof = document.getElementById("outof");
var initialVal = 0;
var inter;
var speed = { value: 90 };
var dataVal = 1;
internationalFormat = new Intl.NumberFormat('en-us');

function setValue(val, pos) {
    if (val <= 40 && val < 41) {
        desc.innerHTML = "Searching for persons";

        data.innerHTML = internationalFormat.format(dataVal) + " persons";
        dataVal = dataVal + 3050;
    } else if (val > 40 && val < 75) {
        data.style.opacity = "0";
        desc.style.color = "green";
        desc.innerHTML = "Analyzing their loyalty";

        speed.value = 200;

    } else if (val > 75) {
        desc.style.color = "red";
        desc.innerHTML = "Compairing";



    }


    value.innerHTML = val + "%";




}

function range1(val) {
    range1Value.style.width = `${val}%`;

}


function startInterval(interValue) {

    inter = setInterval(() => {

        setValue(initialVal, 0);
        range1(initialVal);
        initialVal++;

        if (initialVal == 101) {
            outof.innerHTML = `5 out of ${internationalFormat.format(dataVal)} persons `;
            main1.style.display = "none";
            main.style.display = "flex";
            clearInterval(inter);
        }

    }, speed.value);

}


startInterval();
