const menuItem=document.querySelectorAll('.menu-item');


const contentSection=document.getElementById('content-section');
const dropDown=document.getElementById('drop-down');

dropDown.onclick=function(){
    contentSection.classList.toggle("header-open");
    dropDown.classList.toggle("open");
}

menuItem.forEach(function(item){
    item.onclick=function(e){
        if(document.querySelector('.menu-item.active')){
            document.querySelector('.menu-item.active').classList.remove('active');
        }
        item.classList.add('active');
    }
})
