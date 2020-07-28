
function load(str){
    var loading = window.parent.document.querySelector('.loading');
    var cc = 0;
    loading.style.display = 'block';
    var timer = setInterval(() => {
        cc ++
        if(cc > 2){
            loading.style.display = 'none';
            location.href= str;
            clearInterval(timer);
        }
    }, 150);
}