var changed = false;
window.addEventListener('load', (event) => {
    console.log("Ready.");
    
    let navbar = $(".navDiv");
    let middleLogo = document.querySelector(".navMidLogo");
    let middleLogoImage = document.querySelector(".navMidLogoImage");
    let expandButton = document.querySelector(".expandButtonDiv");
    let collapseMenu = $("#collapseMenu");

    let options = {
        threshold: 0.1
    }
    let callback = (entries, observer) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                console.log("ABC");
                navbar.removeClass("col-2");
                navbar.addClass("col-1");
                middleLogoImage.style.opacity = "0%";
                setTimeout(() => {middleLogoImage.setAttribute("src", "OnlyTextLogo.png")}, 500);
                setTimeout(() => {middleLogoImage.style.opacity = "100%"}, 500);
                middleLogo.classList.remove("navMidLogoWithBorders");
                expandButton.setAttribute("style", "width:60%; height:60%;")
                navbarColClass = "col-11";
                if(collapseMenu.hasClass("col-10")) {
                    collapseMenu.removeClass("col-10");
                    collapseMenu.addClass("col-11");
                }
                changed = true;
            }
            else if(changed) {
                navbar.addClass("col-2");
                navbar.removeClass("col-1");
                middleLogoImage.style.opacity = "0%";
                setTimeout(() => {middleLogoImage.setAttribute("src", "LogoFinal1Flipped.png")}, 500);
                setTimeout(() => {middleLogoImage.style.opacity = "100%"}, 500);
                setTimeout(() => {middleLogo.classList.add("navMidLogoWithBorders")}, 500);
                expandButton.setAttribute("style", "width:30%; height:30%;")
                navbarColClass = "col-10";
                if(collapseMenu.hasClass("col-11")) {
                    collapseMenu.removeClass("col-11");
                    collapseMenu.addClass("col-10");
                }
                start=false;
            }
        })
    }
    let observer = new IntersectionObserver(callback, options);
    
    let target = document.querySelector(".contentContainer");
    
    observer.observe(target);
})

var navbarColClass = "col-10";
$("[data-toggle='toggle']").click(function() {
    var selector = $(this).data("target");
    $(selector).toggleClass(navbarColClass);
    $(selector).toggleClass("collapsedMenu");
})
