let home = document.getElementsByClassName("part2_1_1")[0];
let menu = document.getElementsByClassName("part2_1_1")[1];
let about = document.getElementsByClassName("part2_1_1")[2];
let contact = document.getElementsByClassName("part2_1_1")[3];
let learnMore = document.getElementsByClassName("part1_2_4")[0];
let image = document.getElementById("image");

let x1 = () => { home.classList.toggle("jsnav"); }
let y1 = () => { home.classList.toggle("jsnav"); }
let x2 = () => { menu.classList.toggle("jsnav"); }
let y2 = () => { menu.classList.toggle("jsnav"); }
let x3 = () => { about.classList.toggle("jsnav"); }
let y3 = () => { about.classList.toggle("jsnav"); }
let x4 = () => { contact.classList.toggle("jsnav"); }
let y4 = () => { contact.classList.toggle("jsnav"); }

let image1 = () => {
    image.style.backgroundImage = "url('PS5.png')";
    console1.classList.toggle("jslogoposition");
}
let image2 = () => {
    image.style.backgroundImage = "url('Xbox.png')";
    console2.classList.toggle("jslogoposition");
}
let image3 = () => {
    image.style.backgroundImage = "url('Switch.png')";
    console3.classList.toggle("jslogoposition");
}
let imagereset1 = () => {
    console1.classList.toggle("jslogoposition");
    image.style.backgroundImage = "url('Xbox.png')";
}
let imagereset2 = () => {
    image.style.backgroundImage = "url('Xbox.png')";
    console2.classList.toggle("jslogoposition");
}
let imagereset3 = () => {
    image.style.backgroundImage = "url('Xbox.png')";
    console3.classList.toggle("jslogoposition");
}

home.addEventListener("mouseover", x1);
home.addEventListener("mouseleave", y1);
menu.addEventListener("mouseover", x2);
menu.addEventListener("mouseleave", y2);
about.addEventListener("mouseover", x3);
about.addEventListener("mouseleave", y3);
contact.addEventListener("mouseover", x4);
contact.addEventListener("mouseleave", y4);
learnMore.addEventListener("mouseover", () => {
    learnMore.classList.toggle("jsbutton");
});
learnMore.addEventListener("mouseleave", () => {
    learnMore.classList.toggle("jsbutton");
});

let console1 = document.getElementsByClassName("console")[0];
let console2 = document.getElementsByClassName("console")[1];
let console3 = document.getElementsByClassName("console")[2];
console1.addEventListener("mouseover", image1);
console2.addEventListener("mouseover", image2);
console3.addEventListener("mouseover", image3);
console1.addEventListener("mouseleave", imagereset1);
console2.addEventListener("mouseleave", imagereset2);
console3.addEventListener("mouseleave", imagereset3);
