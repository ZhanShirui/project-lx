const container = document.querySelector('.container')
const splits = document.querySelectorAll('.split')

splits[0].addEventListener('mouseenter',function(){
    container.classList.add('hover-left')
})
splits[0].addEventListener('mouseleave',function(){
    container.classList.remove('hover-left')
})
splits[1].addEventListener('mouseenter',function(){
    container.classList.add('hover-right')
})
splits[1].addEventListener('mouseleave',function(){
    container.classList.remove('hover-right')
})