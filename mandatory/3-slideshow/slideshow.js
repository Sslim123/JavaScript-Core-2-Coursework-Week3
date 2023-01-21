// Write your code here
let allImages = document.getElementById("allimg");
let btn = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let arrayOfImg = ["images/image1.jpg", "images/image2.jpg", "images/image3.jpg", "images/image4.jpg"]
 let imgIndex = 1;
 let imgIndex2 = 2;
 function displayImage(){
btn.addEventListener("click", ()=>{
allImages.setAttribute('src', arrayOfImg[imgIndex]);
imgIndex++;
if(imgIndex > 3){
    imgIndex = 1;
}})
btn2.addEventListener("click", ()=>{
    allImages.setAttribute('src', arrayOfImg[imgIndex2]);
    imgIndex2--;
    if(imgIndex2 > 1){
        imgIndex2 = 2;
}
})
}
 displayImage();