window.onload = function(){
    var btn = document.querySelector('.btn');
    var username = document.querySelector('.username');
    var password = document.querySelector('.password');
    var nameError = document.querySelector('.name-error');
    var passwordError = document.querySelector('.password-error');
    btn.onclick = function(e){
        e.preventDefault();
        var str = username.value;
        var reg = /^\w{8,12}$/;
        var str1 = password.value;
        var reg1 = /^.{8,16}$/;
        if(reg.test(str)){
            if(reg1.test(str1)){

            }else{
                passwordError.style.visibility = 'visible';
            }
        }else{
            nameError.style.visibility = 'visible';
            passwordError.style.visibility = 'hidden';
        }


        $.ajax({
            url:'http://vebcoder.cn:9527/api/login',
            method:'GET',
            dataType:'json',
            data:{
                userName:str,
                password:str1,
            },
            success:function(data){
                if(data.code === 1){
                    username.value = ''
                    password.value = ''
                    var shopping = window.parent.document.querySelector('.shopping');
                    var login = window.parent.document.querySelector('.login');
                    var quiet = window.parent.document.querySelector('.quiet');
                    var register = window.parent.document.querySelector('.register');
                    shopping.style.display = 'block';
                    login.style.display = 'none';
                    quiet.style.display = 'block';
                    register.style.display = 'none';

                    load('../view/home.html');

                    var home1 = window.parent.document.querySelector('.home>a')
                    home1.style.color = 'violet';
                    home1.style.borderBottom = '3px solid violet'

                    tips('欢迎你的回来')

                    for(var x in data){
                        localStorage.setItem(x,data[x])
                    }
                    
                }else{
                    tips('哦豁 好像除了点错误哦^v^')
                }
            },
            error:function(err){
                console.log('系统错误');
            }
        })
        
        // if(str == localStorage.getItem('name') && str1 == localStorage.getItem('password')){
        //     localStorage.setItem('k',520);
        //     localStorage.removeItem('b');
        //     location.href = '../view/shopping.html'
        //     username.value = ''
        //     password.value = ''
        //     var shopping = window.parent.document.querySelector('.shopping');
        //     var login = window.parent.document.querySelector('.login');
        //     var quiet = window.parent.document.querySelector('.quiet');
        //     var register = window.parent.document.querySelector('.register');
        //     shopping.style.display = 'block';
        //     login.style.display = 'none';
        //     quiet.style.display = 'block';
        //     register.style.display = 'none';

        //     var shopping1 = window.parent.document.querySelector('.shopping>a')
        //     shopping1.style.color = 'violet';
        //     shopping1.style.borderBottom = '3px solid violet'
 


        // }
        // if(reg.test(str)&&reg1.test(str1)){
        //     passwordError.style.visibility = 'hidden';
        //     nameError.style.visibility = 'hidden';
        //     username.value = ''
        //     password.value = ''
        // }
    }
}
