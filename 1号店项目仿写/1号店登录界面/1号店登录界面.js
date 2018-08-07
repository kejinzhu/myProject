/**
 * Created by Administrator on 2017/12/16/016.
 */
/**
 * 下面是自动登录部分的JS
 * 1、获取ID
 * 2、绑定单击相应事件
 */
var autoLogin_choose = document.querySelector("#autoLogin_choose");
var autoLogin_choose_img = document.querySelectorAll("#autoLogin_choose>img");
var autoLogin_choose_hidden = document.querySelector("#autoLogin_choose_hidden");
var flag_01 = 0;
function autoLogin1() {
    if(flag_01 == 0){
        autoLogin_choose_img[0].style.display = "block";
        autoLogin_choose.style.background = "#fd6601";
        autoLogin_choose_hidden.style.display = "block";
        autoLogin_choose.style.border = "1px solid #fd6601";
        flag_01 = 1;
    }else if(flag_01 == 1){
        autoLogin_choose_img[0].style.display = "none";
        autoLogin_choose.style.background = "#fff";
        autoLogin_choose_hidden.style.display = "none";
        autoLogin_choose.style.border = "1px solid #989898";
        flag_01 = 0;
    }
}
function autoLogin_on(){
    if(flag_01 == 0){
        autoLogin_choose.style.border = "1px solid #fd6601";
        /*flag_01 = 1;*/
    }
}
function autoLogin_out(){
    if(flag_01 == 0){
        autoLogin_choose.style.border = "1px solid #989898";
        /*flag_01 = 1;*/
    }
}


/**
 * 下面是更多合作网站部分
 */
var more_op_web_unfold = document.querySelector("#more_op_web_unfold");
var more_op_web_unfold_content = document.querySelector("#more_op_web_unfold_content");
var flag_02 = 0;
more_op_web_unfold.onclick = function () {
    if(flag_02 == 0){
        more_op_web_unfold_content.style.display = "block";
        flag_02 = 1;
    }else if(flag_02 == 1){
        more_op_web_unfold_content.style.display = "none";
        flag_02 = 0;
    }
};


/**
 *下面是用户名密码框的验证以及登录框点击的JS
 * 1、首先没有数据库，利用你正则来判断，就是当用户名的输入与正则匹配的时候，通过验证
 */
var userName = document.querySelector("#userName");
var passWord = document.querySelector("#passWord");
var tip = document.querySelector("#tip");
var errorInput = document.querySelector("#errorInput");
var loginSuccess = document.querySelector("#loginSuccess");
var login_button = document.querySelector("#login_button");
login_button.onclick = function () {
    /*邮箱*/
    var regEmail= /^[\w\-\.]{5,}\@[\w]+\.[\w]{2,4}$/;
    /*手机号码*/
    var regPhone = /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9]))\\d{8}$/;
    /*用户名*/
    var regUser = /^[a-zA-Z0-9_-]{3,16}$/;
    /*密码*/
    var regPass = /^[a-zA-Z0-9_\-$]{6,18}$/;
    if(userName.value == ""||passWord.value == ""){
        tip.style.display = "block";
        errorInput.style.display = "none";
        loginSuccess.style.display = "none";
    }else if((regEmail.test(userName.value)||regPhone.test(userName.value)||regUser.test(userName.value))&&regPass.test(passWord.value)){
        tip.style.display = "none";
        errorInput.style.display = "none";
        loginSuccess.style.display = "block";
    }else if(!regEmail.test(userName.value)||!regPass.test(passWord.value)||!regPhone.test(userName.value)||!regUser.test(userName.value)){
        tip.style.display = "none";
        errorInput.style.display = "block";
        loginSuccess.style.display = "none";
    }

}
