var img = document.querySelector('.img>img');
var img1 = document.querySelector('.img');
var bigImg = document.querySelector('.bigImg>img');
var bigBox = document.querySelector('.bigImg');
var smImg = document.querySelector('.smImg');
var title1 = document.querySelector('.title');
var manufactor = document.querySelector('.manufactor');
var price1 = document.querySelector('.price');
var btn = document.querySelector('.back')
var mark = document.querySelector('.mark');
var item = document.querySelector('.section>ul')


var propage = JSON.parse(sessionStorage.getItem('shop'));
var { img_url, price, supplier, title, img_list_url, imgs,type_one } = propage;

// 遍历小图
var str = imgs.slice(2, imgs.length - 2);
var arr = str.split('","');
var str1 = ''
for (var i = 0; i < arr.length; i++) {
    str1 += `<img src="${arr[i]}">`
}
smImg.innerHTML = str1;
var moreImg = document.querySelectorAll('.smImg>img');
// 放大镜
for (var y = 0; y < moreImg.length; y++) {
    (function (y) {
        moreImg[y].onclick = function () {
            for (var j = 0; j < moreImg.length; j++) {
                moreImg[j].style.opacity = 0.8;
                moreImg[j].style.border = '';
            }
            moreImg[y].style.opacity = 0.8;
            moreImg[y].style.border = '1px solid purple';
            img.src = moreImg[y].src;
            bigImg.src = moreImg[y].src;
        }
    })(y)
}
img1.onmouseover = function () {
    mark.style.display = 'block';
    bigBox.style.display = 'block';
}
img1.onmouseout = function () {
    mark.style.display = 'none';
    bigBox.style.display = 'none';
}
img1.onmousemove = function (e) {
    // var x = e.pageX -170
    // var y = e.pageY -150
    var x = e.pageX - this.offsetLeft - mark.offsetWidth / 2 -80;
    var y = e.pageY - this.offsetTop - mark.offsetHeight / 2 -60;

    if(x<0){
        x = 0;
    }
    if(x > img1.offsetWidth - mark.offsetWidth){
        x = img1.offsetWidth - mark.offsetWidth
    }
    if(y<0){
        y=0;
    }
    if(y > img1.offsetHeight - mark.offsetHeight){
        y = img1.offsetHeight - mark.offsetHeight
    }
    mark.style.left = x +'px';
    mark.style.top = y +'px';

    var bigX = bigImg.offsetWidth - bigBox.offsetWidth;
    var bigY = bigImg.offsetHeight - bigBox.offsetHeight;

    var bx = x * bigX/(img1.offsetWidth - mark.offsetWidth)
    var by = y * bigY/(img1.offsetHeight - mark.offsetHeight)
    bigImg.style.left = - bx + 'px';
    bigImg.style.top = - by + 'px';
}


// 替换数据
img.src = `${img_list_url}`;
bigImg.src = `${img_url}`
title1.innerHTML = `${title}`
manufactor.innerHTML = `${supplier}`
price1.innerHTML = `￥ ${price}`


btn.onclick = function () {
    var scrolltop = localStorage.getItem('top')
    location.href = '../view/home.html'

}



// 相似内容
function shuffle(a) {
    var len = a.length;
    for(var i=0;i<len;i++){
        var end = len - 1 ;
        var index = (Math.random()*(end + 1)) >> 0;
        var t = a[end];
        a[end] = a[index];
        a[index] = t;
    }
    return a;
};

$.ajax({
    url: 'http://vebcoder.cn:9527/api/goodList',
    method: 'GET',
    data: {
        
    },
    dataType: 'json',
    success: function (data) {
        var arr = [];
        for(var x in data){
            if(type_one == data[x].type_one){
                arr.push(data[x].Id-1)
            }
        }
        $.ajax({
            url: 'http://vebcoder.cn:9527/api/goodList',
            method: 'GET',
            data: {
                
            },
            dataType: 'json',
            success: function (data) {
                var arr1 = shuffle(arr)
                var arr2 = []

                var list ='';
                for(var i = 0;i<10;i++){
                    arr2.push(arr1[i])
                }
                for(var j = 0;j<arr2.length;j++){
                    var { img_list_url,price,title,mack } = data[arr[j]];
                        list += `<li>
                        <img src="${img_list_url}" alt="">
                        <p class="content-title">${title}</p>
                        <p><span class="price">￥ ${price}</span><span class="label">${mack}<span></p>
                        </li>`
                }
                item.innerHTML = list
                // var list ='';
                // var num = 0;
                // for(var x in data){
                //     var { img_list_url,price,title,mack } = data[x];
                //             if(type_one == data[x].type_one){
                //                 num++
                //                 if(num<=10){
                //                     list += `<li>
                //                     <img src="${img_list_url}" alt="">
                //                     <p class="content-title">${title}</p>
                //                     <p><span class="price">￥ ${price}</span><span class="label">${mack}<span></p>
                //                     </li>`
                //                 }
                                
                //             }
                // }
                // item.innerHTML = list
            },
            error: function (err) {
                console.log('系统错误');
            }
        })


    },
    error: function (err) {
        console.log('系统错误');
    }
})





