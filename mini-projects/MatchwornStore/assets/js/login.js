// document.querySelector(".login-btn").onclick= history.back();

document.querySelectorAll(".section-heading").forEach(function(item){
    item.onclick=function(e){
        if(document.querySelector(".section-show")){
            document.querySelector(".section-show").classList.remove("section-show");
        }
            e.target.classList.toggle("section-show");
    }
})
