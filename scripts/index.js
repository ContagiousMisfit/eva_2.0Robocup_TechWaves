/*
----------PÁGINA 3----------
    WEAPONS ISABELA
----------------------------    
*/

let changeColor = () => $(document).ready(() => {
    $("button").click(function() {
        $("button").removeClass("active");
        $(this).addClass("active");
    });
});

changeColor();

/*Fazer o tab search*/
let openCity = (evt, cityName) => {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}