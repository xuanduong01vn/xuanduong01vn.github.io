var accOverviewLines= document.querySelectorAll(".account-overview-line");

var inputEmpty = accOverviewLines.forEach(function(item){
    console.log(item.lastElem);
});

if(document.querySelector(".mini-menu-button-open")){
    document.querySelector(".header-section").style.position="fixed";
}
else{
    document.querySelector(".header-section").style.position="relative";
}





