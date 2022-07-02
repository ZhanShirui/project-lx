const btns = document.querySelectorAll('.btn')
btns.forEach(btn=>{
    btn.addEventListener('click',function(){
        stop();
        document.getElementById(btn.innerText).play()
    })
})

// btns[btns.length-1].addEventListener('click',function(){
//     stop()
// })
// btn
function stop(){
    btns.forEach(btn=>{
        const audio =  document.getElementById(btn.innerText)
        audio.pause();
        audio.currentTime=0
    })
}