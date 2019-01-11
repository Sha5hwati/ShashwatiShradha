$(document).ready(function(){
        var url = window.location.href.split("/");
        var navLinks = document.getElementsById("nav").getElementsByTagName("a");
        var currentPage = url[url.length - 1];
        document.getElementById("text").innerHTML = "Found: " + currentPage.toString() + "\n"
        for(var i=0;i<navLinks.length;i++){
            var lb = navLinks[i].href.split("/");
            document.getElementById("text").innerHTML += "Others: " + lb[lb.length-1].toString() + "\n"
            if(lb[lb.length-1] == currentPage) {
                navLinks[i].className = "current";
            }
        }
    });

