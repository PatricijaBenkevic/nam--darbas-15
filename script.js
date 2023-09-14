function openTab(event, tabName) {
   
    var tabcontent = document.getElementsByClassName("tabcontent");
    for (var i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    var tablinks = document.getElementsByClassName("tablink");
    for (var i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }

    document.getElementById(tabName).style.display = "block";
    event.currentTarget.classList.add("active");
}


document.getElementById("tab1").style.display = "block";
document.querySelector(".tablink").classList.add("active");


var photoContainers = document.querySelectorAll(".photo-container");

photoContainers.forEach(function (container) {
    container.addEventListener("mouseenter", function () {
        var caption = this.querySelector(".caption");
        caption.style.bottom = "0";
    });

    container.addEventListener("mouseleave", function () {
        var caption = this.querySelector(".caption");
        caption.style.bottom = "-30px";
    });
});
