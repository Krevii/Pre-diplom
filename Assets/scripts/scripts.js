let aElement = document.getElementsByClassName("text-contain");
let groundScroll = document.getElementsByClassName("scroll-background");
let hederTextUp = document.getElementsByClassName("header-up-text");
let tempScrollY = scrollY;
let LastScrollY = 0,
    ticking = false;

function update() {
    ticking = false;

    for (let i = 0; i < groundScroll.length; i++) {
        groundScroll[0].style = `transform: translate3d(${0}px,${LastScrollY/5}px,0px); filter: grayscale(0);`;
    }
    for (let i = 0; i < hederTextUp.length; i++) {
        hederTextUp[i].style = `transform: translate3d(${0}px,${(-LastScrollY) + 35}px,0px);`
        
    }
}

function onScroll() {
    LastScrollY = scrollY;
    requestTick();
}

function requestTick() {
    if (!ticking) {
        requestAnimationFrame(update)    
    }

    ticking = true;
}


let cardSection = document.getElementsByClassName("card-section");
// let cardSection = document.getElementsByClassName("content");
let textContain = document.getElementsByClassName("text-contain");

let HeaderRoadMap = document.getElementsByClassName("header-roadmap");
let roadMap = document.getElementsByClassName("roadmap");
let sliderScroll = document.getElementsByClassName("slider");
let header = document.getElementById("header");
let scrollRoadMap = 0;

let animationScroll = ()=>{
    let animionStartPositon = (window.innerHeight / window.innerHeight) + window.scrollY;
    //main text
    if (cardSection[0] !== undefined) {        
        if (animionStartPositon >= (cardSection[0].offsetTop - cardSection[0].offsetHeight)) {
            cardSection[0].classList.add("card-section-active");
            // console.log(cardSection[0].offsetTop - cardSection[0].offsetHeight);
        }
        else{
            cardSection[0].classList.remove("card-section-active"); 
        }
    }
    //about scroll content
    if (textContain[0] !== undefined) {        
        if (animionStartPositon >= (textContain[0].offsetTop - textContain[0].offsetHeight)) {
            textContain[0].classList.add("text-contain-active");
        }
        else{
            textContain[0].classList.remove("text-contain-active"); 
        }
    }
    //roadmap scroll
    if ((HeaderRoadMap[0] || sliderScroll[0]) !== undefined) {      
        let a = roadMap[0].offsetTop - roadMap[0].offsetHeight
        let b = a * 2.5;

        console.log("roadMap[0].offsetTop", roadMap[0].offsetTop);
        console.log("roadMap[0].offsetHeight", roadMap[0].offsetHeight);
        console.log("offsetTop:", roadMap[0].offsetTop * 2);
        // console.log("a:",a);
        // console.log("b:",b);
        console.log("scrollY:", window.scrollY);
        if (window.scrollY >= (HeaderRoadMap[0].offsetTop - HeaderRoadMap[0].offsetHeight) && window.scrollY <= (roadMap[0].offsetTop * 2.2 + window.innerHeight)) {
            // roadMap[0].style = `height: 100vh;`;
            header.classList.add("header-active");
            if (GetScrollDirection(tempScrollY) > 0) {
                sliderScroll[0].style = `transform: translate(${HeaderRoadMap[0].offsetTop - scrollY}px, ${0}px);`
            }
            else{
                sliderScroll[0].style = `transform: translate(${HeaderRoadMap[0].offsetTop - scrollY}px, ${0}px);`
            }
        }
        else{
            tempScrollY = scrollY;
            header.classList.remove("header-active");
        }
    }



}

function GetScrollDirection(scrollYPos){
    let direction = 1;
    if (scrollYPos > scrollY) {
        direction = -1;
    }
    return direction; 
}

// $(".line-root").hover(function () {
//         $(".line-menu:nth-child(odd)").first().css({"transform":"rotate(45deg)", "top":"+=7.5px"});
//         $(".line-menu:nth-child(odd)").last().css({"transform":"rotate(135deg)", "top":"-=7.5px"});
//         $(".line-menu:nth-child(even)").css("opacity","0");
//     }, function () {
//         $(".line-menu").css({"transform":"rotate(0deg)", "opacity": "1", "top":"0px"});
//     }
// );
let toggle = true;
$(".line-root").click(function(){
    if (toggle){
        $(".line-menu:nth-child(odd)").first().css({"transform":"rotate(45deg)", "top":"+=7.5px"});
        $(".line-menu:nth-child(odd)").last().css({"transform":"rotate(135deg)", "top":"-=7.5px"});
        $(".line-menu:nth-child(even)").css("opacity","0");
        
        $(".select-menu").css({"transform":"scale(1)", "opacity":"1"})
        toggle = !toggle;
    }
    else{
        $(".line-menu").css({"transform":"rotate(0deg)", "opacity": "1", "top":"0px"});
        $(".select-menu").css({"transform":"scale(0)", "opacity":"0"})
        toggle = !toggle;
    }
})


let isToggleTheme = (localStorage.getItem("isToggleTheme") === 'true');

function toggleTheme() {
    localStorage.setItem("isToggleTheme", isToggleTheme);
    
    if (isToggleTheme) {
        $("body").addClass("dark");
        isToggleTheme = !isToggleTheme;
    }
    else{
        $("body").removeClass("dark");
        isToggleTheme = !isToggleTheme;
    }

}

$(".theme-switch").bind("click", function (e) {
    toggleTheme();
    e.preventDefault();    
});

toggleTheme();
animationScroll();
onScroll();
let table = document.getElementsByClassName("table");

document.addEventListener("DOMContentLoaded", (e)=>{
    if (table[0] !== undefined) {
        table[0].classList.add("table-active");
    }
    tempScrollY = scrollY;
    window.addEventListener("scroll", (e)=>{
        onScroll();
        animationScroll();
    });

})