var i = 1;

function slide() {
    if (i == 1) {
        imageslidernext();

    } else {
        imagesliderprev();
    }
    resettime();

}

function resettime() {
    clearTimeout(taime);
    taime = setInterval(slide, 5000);
}

function imageslidernext() {
    document.getElementById("sliderdiv").style.backgroundImage = 'url("https://hackernoon.com/hn-images/0*IqWjd9Oy8CX3ay5E.jpg")';
    document.getElementById("sliderdiv").style.transition = '0.5s';
    i = 2;

}

function imagesliderprev() {
    document.getElementById("sliderdiv").style.backgroundImage =
        'url("https://images.arcadis.com/media/3/1/3/%7B313057E5-A615-4930-8F21-03C355B78953%7DElectricalEngineeringMain-2000x995.jpg?width=1920&height=0&mode=crop&anchor=top")';
    i = 1;

}
var taime = setInterval(function() {
    if (i == 1) {
        imageslidernext();

    } else {
        imagesliderprev();
    }
}, 5000);

function funcsineout() {
    var a;
    a = document.getElementById('sinein').value;
    var c = ((a) / 180) * Math.PI;
    var b = Math.sin(c);
    var g = b.toFixed(4);
    var d = 10000 * g / 10000;
    document.getElementById('sineout').innerHTML = "The sine of " + a + " degrees is " + d;
}

window.onscroll = function() { scrollFunction() };

function scrollLockDiv() {
    var opendiv = document.getElementById('opening');

    opendiv.style.borderBottom = '2px solid white';
}

function resettopheader() {
    var opendiv = document.getElementById('opening');

    opendiv.style.borderBottom = 'none';

}

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        //scrollLockDiv();
        displayToTop();
    } else {
        // resettopheader();
        hideToTop();
    }

}

function topFunction() {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
}

function displayToTop() {

    topButton.style.display = 'inline-block';
}

function hideToTop() {
    topButton.style.display = 'none';
}
var topButton = document.getElementById('topbut');

function scrollUp() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}