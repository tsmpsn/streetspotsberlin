window.onload = function() {
    setLanguage();
    let lm = document.getElementById('loading-mask');
    lm.style.display = 'none';
    let all = document.getElementById('all');
    all.style.display = 'block';
}

// Navigation

function showNav() {
    let x = document.getElementById("navContainer");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function setLanguage() {
    console.log("ran");
    let language = document.documentElement.lang;
    let arr_elms = [];

    arr_elms = document.getElementsByClassName("langitem");
    for (var i = 0; i < arr_elms.length; i++) {
        if(arr_elms[i].getAttribute("lang") != language)
            arr_elms[i].style.display = 'block';
        else
            arr_elms[i].style.display = 'none';
    }
}

function changeLanguage() {
    setLanguage();
    
    if (document.documentElement.lang == "en") {
        document.documentElement.lang = "de";
    } else {
        document.documentElement.lang = "en";
    }
}

// Functions