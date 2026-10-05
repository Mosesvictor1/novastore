let productImages = document.querySelectorAll(".product-images img")
let coverImage = document.querySelector(".product-image-cover img");    
 
productImages.forEach((item)=>{
     item.addEventListener("click", ()=>{
        coverImage.src = item.src;
     })
})
