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

