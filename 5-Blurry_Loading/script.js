const bg = document.querySelector('.bg')
const text = document.querySelector('#progress')

let load=0;

let timer = setInterval(blurring,20);

function blurring(){
    load++;
    // text.innerText = load + '%';
    // 可以用模板字符串来写
    text.innerText = `${load}%`;
    // 进度条文本透明度由1变为0
    text.style.opacity= 1-load/100;
    // 背景模糊度从30变为0
    bg.style.filter=`blur(${30-30*load/100}px)`
    if(load>99){
        clearInterval(timer)
    }
}