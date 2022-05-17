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


// xử lý ẩn hiện filter

document.querySelector(".filter-navbar h2").onclick=function(e){
    e.target.classList.toggle("filter-navbar-open");
}
// click filter item

document.querySelectorAll(".filter-item").forEach(function(item){
    item.onclick= function(e){
        if(document.querySelector(".filter-item-selected")){
            document.querySelector(".filter-item-selected").classList.remove("filter-item-selected");
        }
        document.querySelector(".filter-navbar h2").classList.toggle("filter-navbar-open");
        e.target.classList.add("filter-item-selected");
    }
});


// xử lý ẩn hiện mini menu

document.querySelector(".mini-menu-button").onclick = function(e){
    e.target.classList.toggle("mini-menu-button-open");
};

if(document.querySelector(".mini-menu-button-open")){
    document.querySelector(".container").style.position="fixed";
}

// xử lý mini menu

document.querySelectorAll(".mini-menu-container-item span").forEach(function(item){
    item.onclick=function(e){
        if(document.querySelector(".mini-menu-container-item-selected")){
            document.querySelector(".mini-menu-container-item-selected").classList.remove("mini-menu-container-item-selected");
        }
        e.target.parentNode.classList.toggle(".mini-menu-container-item-selected");
    }
});



