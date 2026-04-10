/*
Name: Amanda Jones
File: p2.js
Date: April 10, 2026
Javascript File for part 2 of assignment 4
*/

const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");

const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");

//Images
const images = [
    {filename: "pic1.jpg", alt: "Closeup of a human eye."},
    {filename: "pic2.jpg", alt: "Rock that looks like a wave."},
    {filename: "pic3.jpg", alt: "Purple and white pansies."},
    {filename: "pic4.jpg", alt: "Section of wall from a pharaoh's tomb."},
    {filename: "pic5.jpg", alt: "Large moth on a leaf."}
];

const baseURL = "https://mdn.github.io/shared-assets/images/examples/learn/gallery/";

// For loop of images

for (const image of images){
    const newImage = document.createElement("img");
    newImage.alt = image.alt;
    newImage.src = `${baseURL}${image.filename}`;
    newImage.tabIndex = "0";

    //now that newImage is made, do the stuff with newImage
    thumbBar.appendChild(newImage);
    newImage.addEventListener("click", updateDisplayedImage);

    //I think this is how you do the enter key thing?
    newImage.addEventListener("keydown", (ent) => {
        if (ent.code === "Enter"){
            updateDisplayedImage(ent);
        }
    });
}

//Now we make updateDisplayedImage a thing  
function updateDisplayedImage(ent){
    displayedImage.alt = ent.target.alt;
    displayedImage.src = ent.target.src;
}

//And the last thing left is the button
btn.addEventListener("click", () =>{
    if (btn.classList.contains("dark")){
        btn.textContent = "Lighten";
        overlay.style.backgroundColor = "rgb(0 0 0 / 0.5)";
    }

    else{
        btn.textContent = "Darken";
        overlay.style.backgroundColor = "rgb(0 0 0 / 0)";
    }

    btn.classList.toggle("dark");
});