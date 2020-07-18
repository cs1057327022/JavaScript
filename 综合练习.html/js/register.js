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
        if(reg.test(str)){

        }else{
            nameError.style.visibility = 'visible';
        }
        var str1 = password.value;
        var reg1 = /^.{8,16}$/;
        if(reg1.test(str1)){

        }else{
            passwordError.style.visibility = 'visible';
        }
        if(reg.test(str)&&reg1.test(str1)){
            username.value = ''
            password.value = ''
        }
    }
}