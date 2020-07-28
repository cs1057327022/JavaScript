var ul = document.querySelector('.content>ul')
var coffee = document.querySelector('.coffee');
var banar = document.querySelector('.banar');
var content = document.querySelector('.content')
var fix = document.querySelector('.fix>ul');
var fixBox = document.querySelector('.fix');
var titleItem = document.querySelector('nav>ul')
var backTop = document.querySelector('.top');

var num = 1;




var left = document.querySelector('.left')
var right = document.querySelector('.right')
var banar1 = document.querySelectorAll('.warp>img')


var index = 0;
var sum = 1;

var timer = setInterval(function () {
    star();
}, 3000);

banar1.onmouseover = function () {
    clearInterval(timer)
}
banar1.onmouseout = function () {
    star()
}

right.onclick = function () {
    // for (var i = 0; i < banar1.length; i++) {
    //     banar1[i].className =''
    // }
    // index++
    // if(index>banar1.length-1){
    //     index = 0
    // }
    // banar1[index].className = 'show'

    banar1[index].style.opacity = sum;
    var timer = setInterval(function () {
        sum -= 0.1

        banar1[index].style.opacity = sum;
        if (sum <= 0) {
            banar1[index].style.opacity = 0;


            for (var i = 0; i < banar1.length; i++) {
                banar1[i].className = ''
            }
            index++
            if (index > banar1.length - 1) {
                index = 0
            }
            console.log(index);
            banar1[index].className = 'show'
            sum = 1
            banar1[index].style.opacity = 1;
            clearInterval(timer)
        }

    }, 150)

}


left.onclick = function () {
    banar1[index].style.opacity = sum;
    var timer = setInterval(function () {
        sum -= 0.1

        banar1[index].style.opacity = sum;
        if (sum <= 0) {
            banar1[index].style.opacity = 0;


            for (var i = 0; i < banar1.length; i++) {
                banar1[i].className = ''
            }
            index--
            if (index < 0) {
                index = banar1.length - 1
            }
            banar1[index].className = 'show'
            sum = 1
            banar1[index].style.opacity = 1;
            clearInterval(timer)
        }

    }, 150)


}





function star() {
    banar1[index].style.opacity = sum;
    var timer = setInterval(function () {
        sum -= 0.1

        banar1[index].style.opacity = sum;
        if (sum <= 0) {
            banar1[index].style.opacity = 0;


            for (var i = 0; i < banar1.length; i++) {
                banar1[i].className = ''
            }
            index--
            if (index < 0) {
                index = banar1.length - 1
            }
            banar1[index].className = 'show'
            sum = 1
            banar1[index].style.opacity = 1;
            clearInterval(timer)
        }

    }, 150)
}

// url获取数据操作
$.ajax({
    url: 'http://vebcoder.cn:9527/api/goodList',
    method: 'GET',
    data: {
        page: num
    },
    dataType: 'json',
    success: function (data) {
        var res = '';
        for (var k in data) {
            var { img_list_url, mack, price, title, Id } = data[k]
            res += `<li>
            <img src="${img_list_url}" alt="">
            <p class="content-title">${title}</p>
            <p><span class="price">￥ ${price}</span><span class="label">${mack}<span></p>
        
    </li>`
        }
        ul.innerHTML = res;

        var li = document.querySelectorAll('.content>ul>li');
        for (var i = 0; i < li.length; i++) {
            (function (i) {
                li[i].onclick = function (e) {
                    $.ajax({
                        url: `http://vebcoder.cn:9527/api/detail?goodId=${i + 1}}`,
                        method: 'GET',
                        data: {

                        },
                        dataType: 'json',
                        success: function (data) {
                            data = JSON.stringify(data[0])
                            sessionStorage.setItem('shop', data)
                            location.href = '../view/productpage.html'
                        },
                        error: function (err) {
                            console.log('系统错误');
                        }
                    })
                }
            })(i)
        }
        // 触底加载操作
        window.onscroll = function () {
            var H = innerHeight;
            var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            var pageH = document.body.offsetHeight - 1;

            if (H + scrollTop >= pageH) {

                num++
                $.ajax({
                    url: 'http://vebcoder.cn:9527/api/goodList',
                    method: 'GET',
                    data: {
                        page: num
                    },
                    dataType: 'json',
                    async: false,
                    success: function (data) {
                        setTimeout(function () {

                            for (var key in data) {
                                var { img_list_url, mack, price, title } = data[key]
                                res += `<li>
                        <img src="${img_list_url}" alt="">
                        <p class="content-title">${title}</p>
                        <p><span class="price">￥ ${price}</span><span class="label">${mack}<span></p>
                        </li>`
                            }
                            ul.innerHTML = res;


                            var li = document.querySelectorAll('.content>ul>li');
                            for (var i = 0; i < li.length; i++) {
                                (function (i) {
                                    li[i].onclick = function () {
                                        $.ajax({
                                            url: `http://vebcoder.cn:9527/api/detail?goodId=${i + 1}}`,
                                            method: 'GET',
                                            data: {

                                            },
                                            dataType: 'json',
                                            success: function (data) {
                                                data = JSON.stringify(data[0])
                                                sessionStorage.setItem('shop', data)
                                                location.href = '../view/productpage.html'
                                            },
                                            error: function (err) {
                                                console.log('系统错误');
                                            }
                                        })
                                    }
                                })(i)
                            }



                        }, 0)
                    },
                    error: function (err) {
                        console.log(err);
                    }
                })


            }
        }
    },
    error: function (err) {
        console.log('系统错误');
    }
})




$.ajax({
    url: 'http://vebcoder.cn:9527/api/goodList',
    method: 'GET',
    data: {

    },
    success: function (data) {
        var arr = [];
        var arr1 = [];
        var li = ''
        for (var i in data) {
            var { type_one } = data[i]
            arr.push(type_one)
        }
        for (var k = 0; k < arr.length; k++) {
            if (arr1.indexOf(arr[k]) == -1) {
                arr1.push(arr[k])
                li += `<li>${arr[k]}</li>`
            }
        }
        titleItem.innerHTML = li

        var liItem = document.querySelectorAll('nav>ul>li')

        for (j = 0; j < liItem.length; j++) {
            (function (j) {
                liItem[j].onclick = function () {
                    loading()
                    content.style.display = 'none';
                    banar.style.display = 'none';
                    coffee.style.display = 'block'
                    for (var m = 0; m < liItem.length; m++) {
                        liItem[m].style.backgroundColor = '';
                        liItem[m].style.color = '';
                    }
                    liItem[j].style.backgroundColor = 'purple';
                    liItem[j].style.color = '#fff';

                    fixBox.style.display = 'block'
                    $.ajax({
                        url: 'http://vebcoder.cn:9527/api/goodList',
                        method: 'GET',
                        data: {

                        },
                        success: function (data) {
                            var Arr = []
                            var Arr1 = []

                            var contr = ''
                            for (var key in data) {
                                var { type_one, type_two } = data[key]
                                if (liItem[j].innerText == type_one) {
                                    Arr.push(type_two);
                                }


                            }

                            for (var z = 0; z < Arr.length; z++) {
                                if (Arr1.indexOf(Arr[z]) == -1) {
                                    Arr1.push(Arr[z])
                                    contr += ` <li>${Arr[z]}</li>`
                                }
                            }
                            fix.innerHTML = contr


                            $.ajax({
                                url: 'http://vebcoder.cn:9527/api/goodList',
                                method: 'GET',
                                data: {

                                },
                                success: function (data) {
                                    var val = 0
                                    var qrr = []
                                    for (var a in data) {
                                        var { type_one, type_two } = data[a]
                                        if (liItem[j].innerText == type_one) {
                                            for (var c = 0; c < Arr1.length; c++) {
                                                if (Arr1[c] == type_two) {
                                                    qrr.push(data[a])

                                                }
                                            }
                                        }
                                    }
                                    var it = ''
                                    for (var n = 0; n < Arr1.length; n++) {
                                        it += `
                                        <div class="title">${Arr1[n]}</div>`
                                        for (var p = 0; p < qrr.length; p++) {
                                            if (Arr1[n] == qrr[p].type_two) {
                                                val++
                                                it += `<div class ='information' value="${val}">
                                                    <img src="${qrr[p].img_list_url}" alt="">
                                                    <p class="content-title">${qrr[p].title}</p>
                                                    <p><span class="price">￥ ${qrr[p].price}</span><span class="label">${qrr[p].mack}<span></p>
                                                
                                            </div>`

                                            }

                                        }
                                    }
                                    coffee.innerHTML = it


                                    var te = document.querySelectorAll('.information');
                                    var title2 = document.querySelectorAll('.content-title')
                                    for (var s in data) {

                                        var { type_one } = data[s]

                                        if (liItem[j].innerText == type_one) {

                                            for (var w = 0; w < te.length; w++) {
                                                (function (w) {
                                                    te[w].onclick = function (e) {
                                                        
                                                       

                                                        // if(title2[w].innerText == title){
                                                        //     $.ajax({
                                                        //         url: `http://vebcoder.cn:9527/api/detail?goodId=${Id}`,
                                                        //         method: 'GET',
                                                        //         data: {

                                                        //         },
                                                        //         dataType: 'json',
                                                        //         success: function (data) {
                                                        //             data = JSON.stringify(data[0])
                                                        //             sessionStorage.setItem('shop', data)
                                                        //             location.href = '../view/productpage.html'
                                                        //         },
                                                        //         error: function (err) {
                                                        //             console.log('系统错误');
                                                        //         }
                                                        //     })
                                                        // }


                                                    }
                                                })(w)
                                            }
                                        }



                                    }




                                    var fixs = document.querySelectorAll('.fix>ul>li');
                                    var fixTop = document.querySelectorAll('.title');
                                    for (var y = 0; y < fixs.length; y++) {
                                        (function (y) {
                                            fixs[y].onclick = function () {
                                                for (var h = 0; h < fixs.length; h++) {
                                                    fixs[h].style.textShadow = ''
                                                }
                                                fixs[y].style.textShadow = '5px 5px 8px purple'

                                                var r = 0;
                                                for (var g = 0; g < y + 1; g++) {
                                                    r = fixTop[g].offsetTop
                                                }
                                                window.scrollTo({
                                                    top: r
                                                })
                                            }
                                        })(y)
                                    }

                                    window.onscroll = function (e) {
                                        var scrollH = document.documentElement.scrollTop || document.body.scrollTop;
                                        for (var e = 0; e < fixTop.length; e++) {
                                            if (scrollH >= fixTop[e].offsetTop - 110) {
                                                for (var k = 0; k < fixTop.length; k++) {
                                                    fixs[k].style.textShadow = ''
                                                }
                                                fixs[e].style.textShadow = '5px 5px 8px purple'

                                            }
                                        }
                                    }
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
                }
            })(j)
        }
    },
    error: function (err) {
        console.log('系统错误');
    }
})


backTop.onclick = function () {
    window.scrollTo({
        top: 0
    })
}

