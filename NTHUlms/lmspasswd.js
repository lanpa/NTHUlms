
document.getElementById("chk").onclick=function(){
    chrome.storage.sync.set({'account': document.getElementById("loginAccount").value}, function() {})
    chrome.storage.sync.set({'passwd': document.getElementById("loginPasswd").value}, function() {})
}

chrome.storage.sync.get(null,function(obj){
    if(obj.account){
        document.getElementById("loginAccount").value = obj.account;
        //alert(obj.account);
    }
    if(obj.passwd){
        document.getElementById("loginPasswd").value = obj.passwd;
        //alert(obj.passwd);
    }

})

