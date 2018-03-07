global.ROOT_URL = process.env.NODE_ENV !== 'production' ? '' : 'https://cnodejs.org/api'; 

global.getQueryString = function(name){
    return decodeURIComponent((new RegExp('[?|&]'+name+'='+'([^&;]+?)(&|#|;|$)').exec(location.href)||[,""])[1].replace(/\+/g,'%20'))||null;
}    

global.addcookie = function(name, value,expireHours) { 
    var exp = new Date();  
    exp.setTime(exp.getTime() + 60 * 60 * 1000 * expireHours);//过期时间 1分钟   
    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();  
}  

global.getcookie = function (name){
    var strcookie = document.cookie;
    var arrcookie = strcookie.split("; ");
    for(var i=0;i<arrcookie.length;i++){
        var arr=arrcookie[i].split("=");
        if(arr[0]==name)return unescape(arr[1]); 
    }
    return "";
}

global.delcookie = function(name){
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval=getcookie(name);
    if(cval!=null) document.cookie= name + "="+cval+"; path=/;expires="+exp.toGMTString();
}

/**
 * 格式化时间
 * 
 * @param {any} t
 * @returns
 */
global.formatDate = function (str) {
    var date = new Date(str);
    var time = new Date().getTime() - date.getTime(); //现在的时间-传入的时间 = 相差的时间（单位 = 毫秒）
    if (time < 0) {
        return '';
    } else if (time / 1000 < 60) {
        return '刚刚';
    } else if ((time / 60000) < 60) {
        return parseInt((time / 60000)) + '分钟前';
    } else if ((time / 3600000) < 24) {
        return parseInt(time / 3600000) + '小时前';
    } else if ((time / 86400000) < 31) {
        return parseInt(time / 86400000) + '天前';
    } else if ((time / 2592000000) < 12) {
        return parseInt(time / 2592000000) + '月前';
    } else {
        return parseInt(time / 31536000000) + '年前';
    }
}