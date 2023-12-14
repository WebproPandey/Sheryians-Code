var pink = document.querySelector("#pink")
var green = document.querySelector("#green")
var black = document.querySelector("#black")
var blue = document.querySelector('#blue')
var white = document.querySelector("#white")
var midimg = document.querySelector(".midimg")
var rightimg = document.querySelector(".rightimg")
var main = document.querySelector(".main")

pink.addEventListener("click",function(){
rightimg.innerHTML = `<img src="./image/pinkheadphone-removebg-preview.png" alt="" srcset="">`
})

green.addEventListener("click",function(){
    main.style.backgroundColor = 'lightgreen'
    rightimg.innerHTML = `<img src="./image/greenhead-removebg-preview.png" alt="" srcset="">`
})
black.addEventListener("click",function(){
    main.style.backgroundColor = 'gainsboro'
    rightimg.innerHTML = `<img src="./image/OIP_2_-removebg-preview.png" alt="" srcset="">`
})
blue.addEventListener("click",function(){
    main.style.backgroundColor = 'lightskyblue'
    rightimg.innerHTML = `<img src="./image/bluehead-removebg-preview.png" alt="" srcset="">`
})
white.addEventListener("click",function(){
     main.style.backgroundColor = '#666'
    rightimg.innerHTML = `<img src="./image/whitehead-removebg-preview.png" alt="" srcset="">`
})