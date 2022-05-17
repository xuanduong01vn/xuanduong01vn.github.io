// lấy ra năm hiện tại

var currentYear= new Date();
document.querySelector(".copyright-container").innerText=`© ${currentYear.getFullYear()} xuanduong01vn`;

// var productItemImage = document.querySelector(".product-item-image");
// console.log(productItemImage.style.width); 
// alert(productItemImage.style.width);


// xử lý phần footer
var serviceItemButton = document.querySelectorAll(".service-item h5");

serviceItemButton.forEach(function(item,index){
    item.onclick=function(e){
        if(index!=2){
            e.target.classList.toggle("service-item-selected");
            if( e.target.parentNode.querySelector(".service-item-selected"))
                e.target.parentNode.lastElementChild.style.display="block";
            else
                e.target.parentNode.lastElementChild.style.display="none";
        }
        
    }
});

// xử lý ẩn hiện mini menu

document.querySelector(".mini-menu-button").onclick = function(e){
    e.target.classList.toggle("mini-menu-button-open");
};
// xử lý mini menu

document.querySelectorAll(".mini-menu-container-item-btn").forEach(function(item){
    item.onclick= function(e){
        if(document.querySelector(".mini-menu-container-item-btn-selected")){
            document.querySelector(".mini-menu-container-item-btn-selected").classList.remove("mini-menu-container-item-btn-selected");
        }
        e.target.classList.toggle("mini-menu-container-item-btn-selected");
    }
})

document.querySelectorAll(".mini-menu-container-league-list li").forEach(function(item){
    item.onclick=function(e){
        document.querySelector(".mini-menu-button-open").classList.remove("mini-menu-button-open");
    }
})



