
var persent = document.querySelector('.persent')
var progress = document.querySelector('.progress')
var count = 4;
var per = 16;
 var loading = setInterval(animate,50)  
  function animate(){
        if(count == 100 && per == 400){
  clearInterval(loading);
     }  
  else{
         per = per + 4;
         count = count + 1;
         progress.style.width = per + 'px';
         persent.textContent = count  + '%';
    }
 }

var btn = document.querySelector('.btn');
var loader = document.querySelector('#loader')
btn.addEventListener('click',function(){
    loader.style.display = 'none'

})
    


var loading = setTimeout(function(){
    btn.style.display = 'block';
    console.log(btn);

var tarck = document.getElementById('track');
var controlbtn = document.getElementById('play-pause');
var wave1 = document.querySelector('.wave1:before')
var wave2 = document.querySelector('.wave2')

function playPause(){
        if(tarck.paused)
        {
        tarck.play();
        // controlbtn.classList ='wave2'; 
        }
        else
        {
            tarck.pause();
            controlbtn.classList = "wave1";
        }
 } 
controlbtn.addEventListener("click" ,playPause);
 tarck.addEventListener('ended',function(){
 controlbtn.classList = "wave2"
})

 },4800);

var img1 = document.querySelector('#img1')
var img2 = document.querySelector('#img2')
var third= document.querySelector('#third') 
var  flag = 0
third.addEventListener('click',function(){   
      if(flag == 0){
     img1.style.opacity = 0;

     img2.style.opacity = 1
    flag = 1;
    }
    else{
        img2.style.opacity = 0
        img1.style.opacity = 1
        flag = 0
    }
})

Draggable.create(".dragme",{
    type: 'x',
    bounds:'#dragerbox',
});

function checkOverlap(){
    var div1 = document.querySelector('.cir')
    var div2 = document.querySelector('.dragme')
    var pos1 =  div1.getBoundingClientRect(); 
    var pos2 =  div2.getBoundingClientRect(); 
    var on = document.querySelector('.on')
    var lightline = document.querySelector('.lightline')
    if(pos1.left < pos2.right)
    {  
        lightline.style.opacity = '0'
        on.style.opacity = '0'
        document.querySelector("#img2").style.opacity = '1'
        
    }
    else
    {
        on.style.opacity = '1';
        lightline.style.opacity = '1'
        document.querySelector('#img2').style.opacity = '0'
    }
}
checkOverlap();

window.addEventListener("mousemove",checkOverlap)

document.addEventListener('mouseenter',function()
{
    div2.style.animation = 'none'
})