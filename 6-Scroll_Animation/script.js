const boxes = document.querySelectorAll('.box')
window.addEventListener('scroll',function(){
    boxes.forEach((box)=>{
        const boxTop = box.getBoundingClientRect().top
        if(boxTop < window.innerHeight*4/5){
            box.classList.add('show')
        }else{
            box.classList.remove('show')
        }
    })
})