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


        if(reg.test(str)&&reg1.test(str1)){

            $.ajax({
                url:'http://vebcoder.cn:9527/api/register',
                method:'GET',
                dataType:'json',
                data:{
                    userName:str,
                    password:str1,
                },
                success:function(data){
                    // console.log(data);
                    if(data.code === 1){
                        passwordError.style.visibility = 'hidden';
                        nameError.style.visibility = 'hidden';
                        username.value = ''
                        password.value = ''

                        load('../view/login.html');
                        tips('恭喜你注册成功');

                        var login2 = window.parent.document.querySelector('.login>a')
                        login2.style.color = 'violet';
                        login2.style.borderBottom = '3px solid violet'
                        var register2 = window.parent.document.querySelector('.register>a')
                        register2.style.color = '';
                        register2.style.borderBottom = ''

                    }else{
                        tips('已经存在了');
                    }
                },
                error:function(err){
                    console.log(err);
                }
            })
            
        }
    }
    // $.ajax({
    //     url:'http://vebcoder.cn:9527/api/register',
    //     data:{
    //         username:11,
    //         password:11,
    //     },
    //     dataType:'json',
    //     method:'get',
    //     success:function(data){
    //         console.log(data);
    //         if(data.code === 1){
    //             alert('注册成功')
    //         }else{
    //             alert('注册失败')
    //         }
    //     },
    //     error:function(err){
    //         console.log(err);
    //     }
    // })

    
    
}
