function getStyle(el, str) {
    var res;
    if (el.currentStyle) {
        // ie
        res = el.currentStyle[str]
    } else {
        // 非IE
        res = getComputedStyle(el, null)[str]
    }
    return res;
    
}


function ani(el, str, end, time,callback) {
    var start = getStyle(el, str);
    start = parseFloat(start);
    // console.log(str,start);//求过度值
    var s = end - start;
    time = time * 1000
    var timer = setInterval(function () {
        start += s / (time / 16.7)
        // el.style[str] = start +'px'

        
        if (str == 'opacity' || str == 'zIndex') {
            el.style[str] = start
        } else {
            el.style[str] = start + 'px'
        }
        
        if (s > 0) {
            if (start >= end) {
                str == 'opacity' || str == 'zIndex' ? (el.style[str] = end) : (el.style[str] = end + 'px')
                clearInterval(timer) //作用:标志动画执行完毕
                if(typeof callback === 'function'){
                    callback()
                }
            }
        } else {
            if (start <= end) {
                str == 'opacity' || str == 'zIndex' ? (el.style[str] = end) : (el.style[str] = end + 'px')
                clearInterval(timer)
                if(typeof callback === 'function'){
                    callback()
                }                    }
        }
    }, 16.7)
}