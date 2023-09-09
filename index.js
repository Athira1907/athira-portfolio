const span=document.querySelectorAll('.progress-bar span')

span.forEach((span)=>{
    span.style.width=span.dataset.width;
    span.innerHTML=span.dataset.width;
})


window.addEventListener('scroll',reveal)
function reveal(){
    var reveals=document.querySelectorAll('.reveal')
for(var i=0;i<reveals.length;i++){
    //The innerHeight property returns the height of a window's content area.
//The innerHeight property is read only.

    var windowheight=window.innerHeight;

    //The getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
//The getBoundingClientRect() method returns a DOMRect object with 
//eight properties: left, top, right, bottom, x, y, width, height.

    var revealtop=reveals[i].getBoundingClientRect().top
    var revealpoint=150;

    if(revealtop<windowheight-revealpoint){
reveals[i].classList.add('active')
    }
    else{
        reveals[i].classList.remove('active')    
    }
}
}