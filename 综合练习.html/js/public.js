var iframe = document.querySelector('iframe');
var shop = document.querySelector('.shopping');
var login = document.querySelector('.login');
var quiet = document.querySelector('.quiet');
var register = document.querySelector('.register');

var home1 = document.querySelector('.home>a')
// var shop1 = document.querySelector('.shopping>a');
// var login1 = document.querySelector('.login>a');
// var quiet1 = document.querySelector('.quiet>a');
// var register1 = document.querySelector('.register>a');

var underline = document.querySelectorAll('.underline>a')

if(localStorage.getItem('token')){
    shop.style.display = 'block';
    login.style.display = 'none';
    quiet.style.display = 'block';
    register.style.display = 'none';

    home1.style.color = 'violet';
    home1.style.borderBottom = '3px solid violet'
}else{
    shop.style.display = 'none';
    login.style.display = 'block';
    quiet.style.display = 'none';
    register.style.display = 'block';
    home1.style.color = 'violet';
    home1.style.borderBottom = '3px solid violet'
}

quiet.onclick = function(){
    localStorage.clear();
    tips('欢迎下次再来');
    if(!localStorage.getItem('token')){
        shop.style.display = 'none';
        login.style.display = 'block';
        quiet.style.display = 'none';
        register.style.display = 'block';
        
        home1.style.color = 'violet';
        home1.style.borderBottom = '3px solid violet'
    }
}

for(var i = 0;i<underline.length;i++){
    (function(i){
        var x = i
        underline[x].onclick = function(){
            for(var j = 0;j < underline.length;j++ ){
                underline[j].style.color = '';
                underline[j].style.borderBottom = '';
            }
            underline[x].style.color = 'violet';
            underline[x].style.borderBottom = '3px solid violet';
            loading()
        }
    })(i)
}

