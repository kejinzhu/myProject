/**
 * Created by Administrator on 2017/12/16/016.
 */
/**
 * 下面是当点击的时候label里面的内容左移，右边提示框中的内容出现
 * 用onclick事件来做
 * 由于移动距离不一样，分五个函数来写
*/

/*左边label框左移、右边内容呈现*/
var flag_01 = 0;
var flag_02 = 0;
var flag_03 = 0;
var flag_04 = 0;
var flag_05 = 0;
var p = 0;
var register_content_form_item_input = document.querySelectorAll(".register_content_form_item>input");
var register_content_form_item = document.querySelectorAll(".register_content_form_item");
var register_content_form_tip = document.querySelectorAll(".register_content_form_tip");
var register_content_form_tip_02 = document.querySelectorAll(".register_content_form_tip_02");
var register_content_form_tip_03 = document.querySelectorAll(".register_content_form_tip_03");
var register_content_form_label = document.querySelectorAll(".register_content_form_label");
var register_content_form_item_short = document.querySelectorAll(".register_content_form_item_short");
var register_content_form_li_b = document.querySelectorAll("#register_content_form>ul>li>b");
var receive_msgCode_02 = document.querySelector("#receive_msgCode_02");
var strength_l = document.querySelectorAll(".strength_l");
var strength_m = document.querySelectorAll(".strength_m");
var strength_h = document.querySelectorAll(".strength_h");
/**
 * 正则表达式
 */
/*用户名*/
var regUser = /^[a-zA-Z0-9_-]{4,20}$/;
/*手机号*/
var regPhone = /^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/;
/*密码*/
var regPass = /^[a-zA-Z0-9_\-$]{6,18}$/;
var userName = document.querySelector("#userName");
var phone = document.querySelector("#phone");
var msgCode = document.querySelector("#msgCode");
var pwd_01 = document.querySelector("#pwd_01");
var pwd_02 = document.querySelector("#pwd_02");
/*用户名*/
function moveLabel_01(n){
    register_content_form_label[n].style.left = "-60px";
    if(flag_01 == 0){
        register_content_form_tip[0].style.display = "block";
        register_content_form_tip_02[0].style.display = "none";
        register_content_form_tip[0].style.top = "-3px";
        register_content_form_tip_03[0].style.display = "none";
        register_content_form_item[0].style.border = "1px solid #dedede";
        register_content_form_li_b[0].style.opacity = "0";
        flag_01 = 1;
    }else if(flag_01 == 1){
        register_content_form_tip[0].style.display = "none";
        register_content_form_tip_02[0].style.display = "block";
        register_content_form_tip_02[0].style.top = "6px";
        register_content_form_tip_03[0].style.display = "none";
        register_content_form_li_b[0].style.opacity = "0";
        flag_01 = 0;
    }
    if(regUser.test(userName.value)){
        register_content_form_tip[0].style.display = "none";
        register_content_form_tip_02[0].style.display = "none";
        register_content_form_tip_03[0].style.display = "none";
        register_content_form_item[0].style.border = "1px solid #dedede";
        register_content_form_li_b[0].style.opacity = "1";
        flag_01 = 0;
    }else if(!regUser.test(userName.value)&&userName.value != ""){
        register_content_form_tip[0].style.display = "none";
        register_content_form_tip_02[0].style.display = "none";
        register_content_form_tip_03[0].style.display = "block";
        register_content_form_item[0].style.border = "1px solid #dedede";
        register_content_form_li_b[0].style.opacity = "0";
    }
}
/*手机号*/
function moveLabel_02(n){
    register_content_form_label[n].style.left = "-60px";
    if(flag_02 == 0){
        register_content_form_tip[1].style.display = "block";
        register_content_form_tip_02[1].style.display = "none";
        register_content_form_tip[1].style.top = "-3px";
        register_content_form_item[1].style.border = "1px solid #dedede";
        register_content_form_li_b[1].style.opacity = "0";
        flag_02 = 1;
    }else if(flag_02 == 1){
        register_content_form_tip[1].style.display = "none";
        register_content_form_tip_02[1].style.display = "block";
        register_content_form_tip_02[1].style.top = "3px";
        register_content_form_li_b[1].style.opacity = "0";
    }
    if(regPhone.test(phone.value)){
        register_content_form_tip[1].style.display = "none";
        register_content_form_tip_02[1].style.display = "none";
        register_content_form_tip_02[1].style.top = "3px";
        register_content_form_li_b[1].style.opacity = "1";
    }
    for(var i = 0;i<1;i++){
        if(register_content_form_item_input[i].value == ""){
            register_content_form_item[i].style.border = "1px solid #f00";
            register_content_form_tip[i].style.display = "none";
            register_content_form_tip_02[i].style.display = "block";
        }
    }
}

/*当获取验证码点击的时候验证码显示*/
function receive_msgCode_on_01(){
    if(p == 0){
        receive_msgCode_02.style.display = "block";
        receive_msgCode_02.innerHTML = parseInt(Math.random()*4000+1000);
        p = 1;
    }/*else if(p == 1){
     receive_msgCode_02.style.display = "none";
     /!*p = 0;*!/
     }*/
}
/*当验证码点击的时候验证码隐藏*/
function receive_msgCode_on_02(){
    if(p == 1){
        receive_msgCode_02.style.display = "none";
        p = 0;
    }
}

/*短信验证码*/
function moveLabel_03(n) {
    register_content_form_label[n].style.left = "-90px";
    if(flag_03 == 0){
        register_content_form_tip[2].style.display = "block";
        register_content_form_tip[2].style.top = "-3px";
        register_content_form_tip[3].style.display = "none";
        register_content_form_item_short[0].style.border = "1px solid #dedede";
        flag_03 = 1;
    }else if(flag_03 == 1){
        register_content_form_tip[2].style.display = "none";
        register_content_form_tip[3].style.display = "block";
    }
    if(msgCode.value != receive_msgCode_02.innerHTML){
        register_content_form_tip[2].style.display = "none";
        register_content_form_tip[3].style.display = "none";
        register_content_form_tip_02[2].style.display = "block";
    }else if(msgCode.value == receive_msgCode_02.innerHTML){
        register_content_form_tip[2].style.display = "none";
        register_content_form_tip[3].style.display = "none";
        register_content_form_tip_02[2].style.display = "none";
    }
    for(var i = 0;i<2;i++){
        if(register_content_form_item_input[i].value == ""){
            register_content_form_item[i].style.border = "1px solid #f00";
            register_content_form_tip[i].style.display = "none";
            register_content_form_tip_02[i].style.display = "block";
        }
    }
}

/*设置密码*/
function moveLabel_04(n){
    register_content_form_label[n].style.left = "-75px";
    if(flag_04 == 0){
        register_content_form_tip[4].style.display = "block";
        register_content_form_tip_02[3].style.display = "none";
        register_content_form_tip[4].style.top = "-3px";
        register_content_form_tip_02[5].style.display = "none";
        register_content_form_tip_02[4].style.display = "none";
        strength_l[0].style.display = "none";
        strength_m[0].style.display = "none";
        strength_h[0].style.display = "none";
        register_content_form_item[2].style.border = "1px solid #dedede";
        flag_04 = 1;
    }else if(flag_04 == 1){
        register_content_form_tip[4].style.display = "none";
        register_content_form_tip_02[3].style.display = "block";
        register_content_form_tip_02[3].style.top = "6px";
        register_content_form_tip_02[5].style.display = "none";
        register_content_form_tip_02[4].style.display = "none";
        strength_l[0].style.display = "none";
        strength_m[0].style.display = "none";
        strength_h[0].style.display = "none";
        flag_04 = 0;
    }
    if(regPass.test(pwd_01.value)){
        if(/^[A-Za-z0-9]+[_$][A-Za-z0-9]*$/.test(pwd_01.value)){
            strength_l[0].style.display = "block";
            strength_m[0].style.display = "none";
            strength_h[0].style.display = "none";
            register_content_form_tip[4].style.display = "none";
            register_content_form_tip_02[3].style.display = "none";
        }else if(/^([a-z].*[0-9])|([A-Z].*[0-9])|[0-9].*[a-zA-Z]$/.test(pwd_01.value)){
            strength_l[0].style.display = "none";
            strength_m[0].style.display = "block";
            strength_h[0].style.display = "none";
            register_content_form_tip[4].style.display = "none";
            register_content_form_tip_02[3].style.display = "none";
        }else if(/^([a-z].*[A-Z])|([A-Z].*[a-z])$/.test(pwd_01.value)){
            strength_l[0].style.display = "none";
            strength_m[0].style.display = "none";
            strength_h[0].style.display = "block";
            register_content_form_tip[4].style.display = "none";
            register_content_form_tip_02[3].style.display = "none";
        }else if(/^[0-9]*$/.test(pwd_01.value)){
            register_content_form_tip_02[4].style.display = "block";
            strength_l[0].style.display = "none";
            strength_m[0].style.display = "none";
            strength_h[0].style.display = "none";
            register_content_form_tip[4].style.display = "none";
            register_content_form_tip_02[3].style.display = "none";
        }else if(/^[a-zA-Z]*$/.test(pwd_01.value)){
            register_content_form_tip_02[5].style.display = "block";
            register_content_form_tip_02[4].style.display = "none";
            strength_l[0].style.display = "none";
            strength_m[0].style.display = "none";
            strength_h[0].style.display = "none";
            register_content_form_tip[4].style.display = "none";
            register_content_form_tip_02[3].style.display = "none";
        }
    }
    for(var i = 0;i<2;i++){
        if(register_content_form_item_input[i].value == ""){
            register_content_form_item[i].style.border = "1px solid #f00";
            register_content_form_tip[i].style.display = "none";
            register_content_form_tip_02[i].style.display = "block";
        }
    }
}
/*确认密码*/
function moveLabel_05(n){
    register_content_form_label[n].style.left = "-75px";
    if (flag_05 == 0){
        register_content_form_tip[5].style.display = "block";
        register_content_form_tip[5].style.top = "6px";
        register_content_form_tip_02[4].style.display = "none";
        register_content_form_item[3].style.border = "1px solid #dedede";
        register_content_form_li_b[2].style.opacity = "0";
        register_content_form_tip_02[6].style.display = "none";
        /*flag_05 = 1;*/
    }
    if(pwd_01.value != ""&&pwd_02.value != ""&&pwd_01.value != pwd_02.value){
        register_content_form_tip[4].style.display = "none";
        register_content_form_tip_02[3].style.display = "none";
        register_content_form_tip[5].style.display = "none";
        register_content_form_tip_02[6].style.display = "block";
        if(regPass.test(pwd_01.value)){
            if(/^[A-Za-z0-9]+[_$][A-Za-z0-9]*$/.test(pwd_01.value)){
                strength_l[0].style.display = "block";
                strength_m[0].style.display = "none";
                strength_h[0].style.display = "none";
                register_content_form_tip[4].style.display = "none";
                register_content_form_tip_02[3].style.display = "none";
            }else if(/^([a-z].*[0-9])|([A-Z].*[0-9])|[0-9].*[a-zA-Z]$/.test(pwd_01.value)){
                strength_l[0].style.display = "none";
                strength_m[0].style.display = "block";
                strength_h[0].style.display = "none";
                register_content_form_tip[4].style.display = "none";
                register_content_form_tip_02[3].style.display = "none";
            }else if(/^([a-z].*[A-Z])|([A-Z].*[a-z])$/.test(pwd_01.value)){
                strength_l[0].style.display = "none";
                strength_m[0].style.display = "none";
                strength_h[0].style.display = "block";
                register_content_form_tip[4].style.display = "none";
                register_content_form_tip_02[3].style.display = "none";
            }else if(/^[0-9]*$/.test(pwd_01.value)){
                register_content_form_tip_02[4].style.display = "block";
                strength_l[0].style.display = "none";
                strength_m[0].style.display = "none";
                strength_h[0].style.display = "none";
                register_content_form_tip[4].style.display = "none";
                register_content_form_tip_02[3].style.display = "none";
            }else if(/^[a-zA-Z]*$/.test(pwd_01.value)){
                register_content_form_tip_02[5].style.display = "block";
                register_content_form_tip_02[4].style.display = "none";
                strength_l[0].style.display = "none";
                strength_m[0].style.display = "none";
                strength_h[0].style.display = "none";
                register_content_form_tip[4].style.display = "none";
                register_content_form_tip_02[3].style.display = "none";
            }
        }
    }

    if(pwd_01.value == pwd_02.value&&pwd_01.value != ""){
        register_content_form_li_b[2].style.opacity = "1";
        register_content_form_tip[5].style.display = "none";
        register_content_form_tip[5].style.top = "6px";
        register_content_form_tip_02[6].style.display = "none";
    }
    for(var i = 0;i<4;i++) {
        if (register_content_form_item_input[i].value == "") {
            register_content_form_item[i].style.border = "1px solid #f00";
            register_content_form_tip[i].style.display = "none";
            register_content_form_tip_02[i].style.display = "block";
        }
    }
    register_content_form_item[3].style.border = "1px solid #dedede";
    register_content_form_tip_02[2].style.display = "none";
}

/*同意点击的时候*/
function agreementBtn() {
    if(flag_01 == 0&&flag_02 == 0&&flag_03 == 0&&flag_04 == 0&&flag_05 == 0){
        register_content_form_item[0].style.border = "1px solid #f00";
        register_content_form_tip_03[0].style.display = "block";
        register_content_form_tip[0].style.display = "none";
        register_content_form_tip_02[0].style.display = "none";
    }
    if(flag_01 != 0&&flag_02 != 0&&flag_04 != 0){
        register_content_form_item[0].style.border = "1px solid #f00";
        register_content_form_item[1].style.border = "1px solid #f00";
        register_content_form_item[2].style.border = "1px solid #f00";
        register_content_form_tip_03[0].style.display = "block";
        register_content_form_tip[0].style.display = "none";
        register_content_form_tip_02[0].style.display = "none";

        register_content_form_tip_02[3].style.display = "block";
        register_content_form_tip[4].style.display = "none";
        strength_l[0].style.display = "none";
        strength_m[0].style.display = "none";
        strength_h[0].style.display = "none";
        register_content_form_tip_02[5].style.display = "none";
        register_content_form_tip_02[4].style.display = "none";

        register_content_form_tip[1].style.display = "none";
        register_content_form_tip_02[1].style.display = "block";
        register_content_form_tip_02[1].style.top = "3px";
        register_content_form_li_b[1].style.opacity = "0";

        register_content_form_tip[5].style.display = "block";
        register_content_form_tip[5].style.top = "6px";
        register_content_form_tip_02[4].style.display = "none";
        register_content_form_item[3].style.border = "1px solid #dedede";
        register_content_form_li_b[2].style.opacity = "0";
        register_content_form_tip_02[6].style.display = "none";
    }
}




