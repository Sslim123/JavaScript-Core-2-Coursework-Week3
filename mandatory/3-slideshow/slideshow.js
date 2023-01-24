//let slideshow = document.getElementById("slideshow");
let btn = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");

// Write your code here
let allImages = document.getElementById("allimg1");
let arrayOfImg = ["images/image1.png", "images/image2.jpg", "images/image3.jpg", "images/image4.jpg"]
let imgIndex = 0;
let imgIndex2 = 0;
function displayImage() {
    btn.addEventListener("click", () => {
        allImages.src = arrayOfImg[imgIndex++];
        if (imgIndex > arrayOfImg.length - 1) {
            imgIndex = 0;
        }
    })
} displayImage();

function displayImageBack() {

    btn2.addEventListener("click", () => {
        allImages.src = arrayOfImg[imgIndex2--];
        if (imgIndex2 < arrayOfImg.length - arrayOfImg.length) {
            imgIndex2 = arrayOfImg.length - 1;
        }
    })
}
displayImageBack();