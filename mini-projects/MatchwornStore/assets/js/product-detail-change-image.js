// Title page
document.title=document.querySelector(".product-info-nameset").innerText;


// Thay đổi ảnh show lên theo slide
var ImageSlideItem= document.querySelectorAll(".product-image-slide-item");

document.querySelector(".product-image-showed")

ImageSlideItem.forEach(function(item){

    item.onclick= function(e){
        if(document.querySelector(".product-image-slide-item.slide-item-selected")){
            document.querySelector(".product-image-slide-item.slide-item-selected").classList.remove("slide-item-selected");
            
        }
        e.target.classList.toggle("slide-item-selected");
        document.querySelector(".product-image-showed img").src=e.target.src;
        
    }
});