function hide(el){
    var val = 1;
    el.style.opacity = 1;
    var timer = setInterval(function(){
        val -= 0.1;
        if(val<=0){
            el.style.opacity = 0;
            el.style.display = 'none';
            clearInterval(timer);
            return
        }
        el.style.opacity = val;
    },30)
    return el;
}

function show(el){
    var val = 0;
    el.style.display = 'block';
    el.style.opacity = val;
    var timer = setInterval(function(){
        val += 0.1;
        if(val>=1){
            el.style.opacity = 1;
            el.style.display = 'block';
            clearInterval(timer);
            return
        }
        el.style.opacity = val;
    },30)
}


function html(el,str){
    el.innerHTML = str
    return el
}



function getElement(str){
    if(str.charAt(0)==='.'){
        return document.getElementsByClassName(str)
    }else if(str.charAt(0)==='#'){
        return document.getElementById(str)
    }else{
        return document.getElementsByTagName(str)
    }
    
}