// lấy ra năm hiện tại

var currentYear= new Date();
document.querySelector(".copyright-container").innerText=`© ${currentYear.getFullYear()} xuanduong01vn`;

// click filter item

document.querySelectorAll(".filter-item").forEach(function(item){
    item.onclick= function(e){
        if(document.querySelector(".filter-item-selected")){
            document.querySelector(".filter-item-selected").classList.remove("filter-item-selected");
        }
        e.target.classList.add("filter-item-selected");
    }
});


// load sản phẩm lên giao diện

var jerseyApi ='http://localhost:3000/jerseys';



fetch(jerseyApi)
.then(function (response){
    return response.json();
})
.then(function(jerseys){
    jerseys.forEach(jersey => {
        var showProductsItem = document.createElement("div");
        var productItemLink = document.createElement("a");
        var productItemImage = document.createElement("div");
        var imgproductItemImage = document.createElement("img");
        var productItemInfo =document.createElement("div");
        var productItemNameset= document.createElement("div");
        var productItemPrice= document.createElement("div");
        imgproductItemImage.src=`${jersey.images[0]}`;
        productItemImage.classList.add("product-item-image");
        productItemImage.appendChild(imgproductItemImage);
        productItemNameset.classList.add("product-item-nameset");
        productItemNameset.innerText=jersey.nameset;
        productItemPrice.classList.add("product-item-price");
        productItemPrice.innerText=jersey.price;
        productItemInfo.classList.add("product-item-info");
        productItemInfo.appendChild(productItemNameset);
        productItemInfo.appendChild(productItemPrice);
        productItemLink.classList.add("product-item-link");
        productItemLink.href="product-detail.html"
        productItemLink.appendChild(productItemImage);
        productItemLink.appendChild(productItemInfo);
        showProductsItem.classList.add("show-products-item");
        productItemLink.classList.add("product-item-link");
        showProductsItem.appendChild(productItemLink);
        document.querySelector(".show-products-section").appendChild(showProductsItem);
    });
    // đếm số sản phẩm

    if(jerseys.length==0){
        document.querySelector(".amount-jerseys-line").innerText="There are no jerseys";
        document.querySelector(".amount-jerseys-line").style.marginBottom="300px";
    }
    else if(jerseys.length==1){
        document.querySelector(".amount-jerseys-line").innerText="There is a jersey";
    }
    else if(jerseys.length>1){
        document.querySelector(".amount-jerseys-line").innerText=`There are ${jerseys.length} jerseys`;
    }
})



