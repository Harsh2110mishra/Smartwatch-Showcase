let blue_btn =  document.getElementById("blue");
let purple_btn = document.getElementById("purple");
let black_btn = document.getElementById("black");
let red_btn = document.getElementById("red");
let pink_btn = document.getElementById("pink");
let watch_img=document.getElementById("watch_color");
let heart_rate_btn=document.getElementById("Heart-btn");
let watch_inner=document.getElementById("heart");

blue_btn.addEventListener("click",function(){
    watch_img.src="/images/watch-blue.png";   
})
purple_btn.addEventListener("click",function(){
    watch_img.src="/images/watch-purple.png";
})
black_btn.addEventListener("click",function(){
    watch_img.src="/images/watch-black.png";
})
red_btn.addEventListener("click",function(){
    watch_img.src="/images/watch-red.png";
})
pink_btn.addEventListener("click",function(){
    watch_img.src="/images/watch-pink.png";
})
heart_rate_btn.addEventListener("click",function(){
    timer.style.display="none";
    watch_inner.style.display="block";
    watch_inner.src="/images/heart_beat.gif"; 
})


let timer_btn=document.getElementById("time");
let hour_set=document.getElementById("hour");
let minutes_set=document.getElementById("minutes");
let seconds_set=document.getElementById("seconds");

timer_btn.addEventListener("click",function(){
    setInterval(function(){
        watch_inner.style.display="none";
        timer.style.display="inline-grid";
        let minutes =parseInt(minutes_set.innerHTML);
        let seconds=parseInt(seconds_set.innerHTML);
        seconds--;
        seconds_set.innerHTML=seconds;
        if(seconds==0){
            seconds_set.innerHTML=60; 
            minutes--;
            minutes_set.innerHTML=minutes;
            if(minutes==0){
            
            }
        
    }
    },1000);

})

let buy_btn=document.getElementById("Buy");
buy_btn.addEventListener("click",function(){
    alert("Added to your cart");
})
