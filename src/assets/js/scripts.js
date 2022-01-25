/*
jQuery(document).ready(function() {

    $('.page-container form').submit(function(){
        var username = $(this).find('.username').val();
        var password = $(this).find('.password').val();
        if(username == '') {
            $(this).find('.error').fadeOut('fast', function(){
                $(this).css('top', '27px');
            });
            $(this).find('.error').fadeIn('fast', function(){
                $(this).parent().find('.username').focus();
            });
            return false;
        }
        if(password == '') {
            $(this).find('.error').fadeOut('fast', function(){
                $(this).css('top', '96px');
            });
            $(this).find('.error').fadeIn('fast', function(){
                $(this).parent().find('.password').focus();
            });
            return false;
        }
    });

    $('.page-container form .username, .page-container form .password').keyup(function(){
        $(this).parent().find('.error').fadeOut('fast');
    });

});
*/

window.onload=function(){    
    
        //登录
        sessionStorage.setItem("qwe", "123");
        sessionStorage.setItem("asd", "123");
        sessionStorage.setItem("zxc", "123");
    
        function getVlu(name)
        {
               var query = window.location.search.substring(1);
               var vars = query.split("&");
               for (var i=0;i<vars.length;i++) {
                       var pair = vars[i].split("=");
                       if(pair[0] == name){return pair[1];}
               }
               return(false);
        }


        var  checkusername=function(){
            var reg=/^[a-zA-Z]{2,8}$/
            var username=document.getElementById("username").value
            var password=document.getElementById("password").value
             if(username==""||password==""){
               alert("用户名或密码不能为空！")
            }else if(reg.test(username)==false){
               alert("用户名由2-8位字母组成！")
            }else if(reg.test(username)){
                var lastname = sessionStorage.getItem(username);
                if(lastname==password){
                    document.getElementById("username").value="";
                    document.getElementById("password").value="";

                /*
                    var html=                   
				    '<strong><span style="font-weight: bold;font-size: 25px;">登  录</span></strong>'+
                    '<form id='+"logForm"+' class="form"'+' action="../html/main.html?userName'+username+'"+ method="get">'+
                    '<input id="username" type="text" name="name" placeholder="Username">'+
                    '<input id="password" type="password" name="password"  placeholder="Password">'+
				    '<button type="button" id="login-button">Login</button>' 
                    document.getElementById("conn").innerHTML=html
                */
                }else{
                    var flag=confirm("该用户不存在,是否跳转注册页面?")
                    if(flag){
                        //跳转注册
                    }
                }
            }
    /*
        var registed=function(){
            var reg=/^[a-zA-Z]{2,8}$/
            var username=document.getElementById("username").value
            var password=document.getElementById("password").value
            var tips=document.getElementById("tips")
             if(username==""||password==""){
                tips.innerText="用户名或密码不能为空！"
            }else if(reg.test(username)==false){
                tips.innerText="用户名由2-8位字母组成！"
            }else if(reg.test(username)){
                var flag=confirm("是否注册并登录?")
                if(flag){
                    sessionStorage.setItem(username, password);
                    tips.innerText=""
                    document.getElementById("username").value="";
                    document.getElementById("password").value="";
                    document.getElementById("logview").style.display="none";
                    document.getElementById("uname").innerText=username
                    document.getElementById("uname").style.display="inline";
                    document.getElementById("logSp").style.display="none";
                }
            }
        }
*/
    var logBtn=document.getElementById("login-button")
    logBtn.onclick=function(){
        checkusername();
    }

}

        
}