const btn_prev = document.querySelector(".btn_prev"),
        btn_next = document.querySelector(".btn_next"),
        images = document.querySelectorAll(".slider_img img");

let i = 0;

// btn_next.addEventListener("click", () => {
//     images[i].style.display = "none";
//     i++;
//     if(i >= images.length){
//         i = 0
//     }
//     console.log(i);
//     images[i].style.display = "block"
// })

// btn_prev.addEventListener("click", () => {
//     images[i].style.display = "none";
//     i--;
//     if(i < 0){
//         i = images.length - 1
//     }
//     console.log(i);
//     images[i].style.display = "block"
// })


// btn_next.addEventListener("click", () => {
//     images[i].classList.remove("active")
//     i++;
//     if(i >= images.length){
//         i = 0
//     }
//     console.log(i);    
//     images[i].classList.add("active")
// })

// btn_prev.addEventListener("click", () => {
//     images[i].classList.remove("active")
//     i--;
//     if(i < 0){
//         i = images.length - 1
//     }
//     console.log(i);
//     images[i].classList.add("active")
// })


const timer = setInterval(() => {
    images[i].classList.remove("active")
    i++;
    if(i >= images.length){
        i = 0
    }
    console.log(i);    
    images[i].classList.add("active")
}, 5000)

// const timer = setInterval(() => {
//     images[i].classList.remove("active")
//     i--;
//     if(i < 0){
//         i = images.lenght - 1
//     }
//     console.log(i);    
//     images[i].classList.add("active")
// }, 5000)