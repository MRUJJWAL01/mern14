var elem = document.querySelectorAll(".elem");
elem.forEach(function(val){
    console.log(val.childNodes[3]);
    
    val.addEventListener("mouseenter",function(){
        val.childNodes[3].style.opacity= 1;
        
    })
    val.addEventListener("mouseleave",function(){
        val.childNodes[3].style.opacity= 0;
        
    })
    val.addEventListener("mousemove",function(ele){
        val.childNodes[3].style.left = ele.x+"px";
        val.childNodes[3].style.top = ele.y+"px";
    })
}
)
















// var elem1 = document.querySelector("#elem1");
// var img = document.querySelector("#elem1 img");



























// elem1.addEventListener('mousemove',function(ele){
//     img.style.left = ele.x+ "px";
//     img.style.top = ele.y+ "px";
    
// })
// elem1.addEventListener("mouseenter",function(){
//     img.style.opacity = 1;
    
// })
// elem1.addEventListener("mouseleave",function(){
//     img.style.opacity = 0;

// })
