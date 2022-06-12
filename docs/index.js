let oldScroll = 0;
let programScroll = false;
let navbar = document.getElementById("topbar");
let navbarHeight = navbar.scrollHeight;
function customScroll() {
    programScroll = true;
    console.log("Scroll!");
    var height = window.innerHeight + navbar.scrollHeight;
    console.log(height);
    scroll(0, height);
    setTimeout(function() {
        if(navbar.hidden) {
            navbar.hidden = false;
        }
    }, 500);
    programScroll = false;
}
function checkScroll() {
    if(!programScroll) {
        if (window.scrollY < 10) {
            console.log("at top");
            if(this.scrollY > oldScroll) {
                console.log("function!")
                customScroll();
            }
        } else {
            console.log("not at top");
        }
        oldScroll = this.scrollY
    } else {
        return;
    }
}

window.onload = function() {
    oldScroll = window.scrollY;
    navbar.hidden = false;
    navbarHeight = navbar.scrollHeight;
    navbar.hidden = true;
}
document.getElementsByClassName("getStartedButton")[0].onclick = customScroll; 
window.onscroll = checkScroll;