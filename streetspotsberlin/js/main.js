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
    let language = localStorage.getItem('lang');
    if (language == null) {
        language = document.documentElement.lang;
    }
    let arr_elms = [];

    arr_elms = document.getElementsByClassName("langitem");
    for (var i = 0; i < arr_elms.length; i++) {
        if (arr_elms[i].getAttribute("lang") != language)
            arr_elms[i].style.display = 'none';
        else
            arr_elms[i].style.display = 'block';
    }
}

function changeLanguage() {
    var language = localStorage.getItem('lang')
    if (language !== null) {
        
        if (language === "en") {
            document.documentElement.lang = "de";
            localStorage.setItem('lang', 'de')
        } else {
            document.documentElement.lang = "en";
            localStorage.setItem('lang', 'en')
        }
    } else {
        if (document.documentElement.lang === "en") {
            document.documentElement.lang = "de";
            localStorage.setItem('lang', 'de')
        } else {
            document.documentElement.lang = "en";
            localStorage.setItem('lang', 'en')
        }
    }
    setLanguage();
}

// Functions