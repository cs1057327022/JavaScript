var http  = require('http');
var request = require('request')
var app = http.createServer(function(req,res){
    request('http://musicapi.leanapp.cn/artist/list',function(error,respost,body){
        // 添加响应头
        res.setHeader("Access-Control-Allow-Origin", "*");
        console.log(body)
        res.end(body);
    })
});


app.listen(3000,function(){
    console.log('node is ok');
})