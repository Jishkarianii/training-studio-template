
// -- Load animation --

const load = document.getElementById("load");

window.addEventListener("load", function(){
    load.style.visibility = "hidden";
});

// -- Header stylisation --

const chooseOption = document.getElementsByName("chooseOption");
const home = document.getElementById("homeOpt");
const about = document.getElementById("aboutOpt");
const classes = document.getElementById("classesOpt");
const schedules = document.getElementById("schedulesOpt");
const contact = document.getElementById("contactOpt");

// Change header style
function headerStyle() {
    if(scrollY > 700) {
        document.querySelector("header").classList.add("header-change");
        chooseOption.forEach(e => {
            e.classList.add("a-color-change");
        });
    } else {
        document.querySelector("header").classList.remove("header-change");
        chooseOption.forEach(e => {
            e.classList.remove("a-color-change");
        });
    }
}

// Remove all hover animation on a tag
function removeHoverClass() {
    chooseOption.forEach(e => {
        e.classList.remove("a-color-hover");
    });
}

// Change header option color on scroll
function headerOption() {
    if(scrollY < 700) {
        removeHoverClass();
        home.classList.add("a-color-hover");
    } else if(scrollY > 700 && scrollY < 2000) {
        removeHoverClass();
        about.classList.add("a-color-hover");
    } else if(scrollY > 2000 && scrollY < 3000) {
        removeHoverClass();
        classes.classList.add("a-color-hover");
    } else if(scrollY > 3000 && scrollY < 4000) {
        removeHoverClass();
        schedules.classList.add("a-color-hover");
    } else if(scrollY > 5200 && scrollY < 6000) {
        removeHoverClass();
        contact.classList.add("a-color-hover");
    }
}

// Function expression
headerOption();

// Scroll event
document.addEventListener("scroll", function(){
    headerStyle();
    headerOption();
});

// -- Choose Training Class --

const radio = document.getElementsByName("radio");
const img = document.getElementById("img");
const title = document.getElementById("title");
const text = document.getElementById("text");

// All option content is here
const optionArr = [
    {
        img: "assets/img/photos/training-image-01.jpg",
        title: "First Training Class",
        text: "Phasellus convallis mauris sed elementum vulputate. Donec posuere leo sed dui eleifend hendrerit. Sed suscipit suscipit erat, sed vehicula ligula. Aliquam ut sem fermentum sem tincidunt lacinia gravida aliquam nunc. Morbi quis erat imperdiet, molestie nunc ut, accumsan diam."
    }, {
        img: "assets/img/photos/training-image-02.jpg",
        title: "Second Training Class",
        text: "Integer dapibus, est vel dapibus mattis, sem mauris luctus leo, ac pulvinar quam tortor a velit. Praesent ultrices erat ante, in ultricies augue ultricies faucibus. Nam tellus nibh, ullamcorper at mattis non, rhoncus sed massa. Cras quis pulvinar eros. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
    }, {
        img: "assets/img/photos/training-image-03.jpg",
        title: "Third Training Class",
        text: "Fusce laoreet malesuada rhoncus. Donec ultricies diam tortor, id auctor neque posuere sit amet. Aliquam pharetra, augue vel cursus porta, nisi tortor vulputate sapien, id scelerisque felis magna id felis. Proin neque metus, pellentesque pharetra semper vel, accumsan a neque."
    }, {
        img: "assets/img/photos/training-image-04.jpg",
        title: "Fourth Training Class",
        text: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean ultrices elementum odio ac tempus. Etiam eleifend orci lectus, eget venenatis ipsum commodo et."
    }
]

// Set your choose option 
function optionCheck() {
    setTimeout(() => {        
        for(let i = 0; i < radio.length; i++) {
            if(radio[i].checked) {
                img.src = optionArr[i].img;
                title.innerText = optionArr[i].title;
                text.innerText = optionArr[i].text;
            }
        }
    }, 100);
}

// -- Schedules Table --

const rowCol = document.getElementsByName("row-col");
const Monday = document.getElementById("Monday")
const Tuesday = document.getElementById("Tuesday")
const Wednesday = document.getElementById("Wednesday")
const Thursday = document.getElementById("Thursday")
const Friday = document.getElementById("Friday")

// Function expression
allLightedTransparent();
lightedOption(1, 1);
lightedOption(3, 2);

// All lighted element extinguish
function allLightedTransparent() {
    rowCol.forEach(e => {
        e.style.color = "transparent";
    })
}

// Your choose day option
function lightedOption(row, col) {
    document.getElementById("row-" + row + "-col-" + col).style.color = "#fff";
}

Monday.addEventListener("click", function(){
    allLightedTransparent();
    lightedOption(1, 1);
    lightedOption(3, 2);
});

Tuesday.addEventListener("click", function(){
    allLightedTransparent();
    lightedOption(3, 1);
    lightedOption(1, 2);
});

Wednesday.addEventListener("click", function(){
    allLightedTransparent();
    lightedOption(4, 1);
    lightedOption(5, 2);
});

Thursday.addEventListener("click", function(){
    allLightedTransparent();
    lightedOption(5, 1);
    lightedOption(2, 2);
});

Friday.addEventListener("click", function(){
    allLightedTransparent();
    lightedOption(2, 1);
    lightedOption(4, 2);
});

// -- Responsive menu icon --

const check = document.getElementById("check");
const navBar = document.getElementById("navBar");

check.addEventListener("click", function(){
    if(check.checked) {
        navBar.style.marginTop = "0px";
    } else {
        navBar.style.marginTop = "-400px";
    }
});
