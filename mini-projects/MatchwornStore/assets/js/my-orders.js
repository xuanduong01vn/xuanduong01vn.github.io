// var accMenuItems= document.querySelectorAll(".account-menu-item");

// var accOverviewItems=document.querySelectorAll(".account-overview-item");

// accMenuItems.forEach(function(item,index){
//     item.onclick=function(e){
//         if(document.querySelector(".account-menu-item-selected")){
//             document.querySelector(".account-menu-item-selected").classList.remove("account-menu-item-selected");
//         }
//         e.target.classList.add("account-menu-item-selected");
//         if(document.querySelector(".account-overview-item-showed")){
//             document.querySelector(".account-overview-item-showed").classList.remove("account-overview-item-showed");
//         }
//         accOverviewItems[index].classList.add("account-overview-item-showed");
//     }
// })

// lọc trạng thái đơn hàng

var stateOrder = document.querySelectorAll(".state-order");
stateOrder.forEach(function(item,index){
    item.onclick= function(e){
        if(document.querySelector(".state-order-selected")){
            document.querySelector(".state-order-selected").classList.remove("state-order-selected");
        }
        e.target.classList.add("state-order-selected");
        
        if(e.target.firstElementChild.innerText==0){
            document.querySelector(".no-order-notify").classList.add("no-order-notify-show")
            console.log(document.querySelector(".account-overview-box").children.length);
            
        }else{
            if(document.querySelector(".no-order-notify-show")){
                document.querySelector(".no-order-notify-show").classList.remove("no-order-notify-show");
                
            }
            console.log(document.querySelector(".account-overview-box").children.length);
        }
        
    }
})

if(document.querySelector(".state-order-selected").firstElementChild.innerText==0){
    document.querySelector(".no-order-notify").classList.add("no-order-notify-show")
}
else{
    if(document.querySelector(".no-order-notify-show")){
        document.querySelector(".no-order-notify-show").classList.remove("no-order-notify-show");
    }
}









