// 获取元素
const btns = document.querySelectorAll('.circle-btn')
const container = document.querySelector('.container')

btns[1].addEventListener('click',function(){
    container.classList.add('show-nav')
    console.log(1);
})
btns[0].addEventListener('click',function(){
    container.classList.remove('show-nav')
    console.log(2);
})