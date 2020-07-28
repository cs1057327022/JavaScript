
function loading(){
    var loading = window.parent.document.querySelector('.loading');
    var cc = 0;
    loading.style.display = 'block';
    var timer = setInterval(() => {
        cc ++
        if(cc > 2){
            loading.style.display = 'none';
            clearInterval(timer);
        }
    }, 150);
}


function tips(str){
    var tip = window.parent.document.querySelector('.tips');
    var span = window.parent.document.querySelector('.tips>span');
    var cc = 0;
    tip.style.display = 'block'
    span.innerHTML = str;
    var timer = setInterval(() => {
        cc ++
        if(cc > 2){
            tip.style.display = 'none'
            clearInterval(timer);
        }
    }, 300);
}