/**
 * Created by Administrator on 2018/3/15/015.
 */
/*点击的提交按钮的时候、判断各个内容是否都符合要求
* 1、获取元素
* 2、绑定点击相应事件 */
/*留言人*/
var name_inp = document.querySelector("#name");
/*留言内容*/
var con_inp = document.querySelector("#con");
/*电话*/
var phone_inp = document.querySelector("#phone");
/*电子邮箱*/
var email_inp = document.querySelector("#email");
/*提示信息*/
var msg_tip = document.querySelector("#msg_tip");
/*提交按钮*/
var submit_btn = document.querySelector("#submit");
/*文字提示信息*/
var msg_txt_tip = document.querySelector("#msg_txt_tip");


/*留言信息*/
var con_inp_1 = con_inp.name;
con_inp.onfocus = function () {
    if(this.innerHTML == con_inp_1){
        //如果框中为默认值则清空
        this.innerHTML = "";
    }
    msg_tip.style.display = "none";
};
con_inp.onblur = function () {
    if(this.innerHTML == ""){
        //如果框中为空则填充默认值
        this.innerHTML = con_inp_1;
    }
};
/*姓名*/
var name_inp_1 = name_inp.value;
name_inp.onfocus = function () {
    if(this.value == name_inp_1){
        //如果框中为默认值则清空
        this.value = "";
    }
    msg_tip.style.display = "none";
};
name_inp.onblur = function () {
    if(this.value == ""){
        //如果框中为空则填充默认值
        this.value = name_inp_1;
    }
};

/*电话*/
var phone_inp_1 = phone_inp.value;
phone_inp.onfocus = function () {
    if(this.value == phone_inp_1){
        //如果框中为默认值则清空
        this.value = "";
    }
    msg_tip.style.display = "none";
};
phone_inp.onblur = function () {
    if(this.value == ""){
        //如果框中为空则填充默认值
        this.value = phone_inp_1;
    }
};

/*电子邮箱*/
var email_inp_1 = email_inp.value;
email_inp.onfocus = function () {
    if(this.value == email_inp_1){
        //如果框中为默认值则清空
        this.value = "";
    }
    msg_tip.style.display = "none";
};
email_inp.onblur = function () {
    if(this.value == ""){
        //如果框中为空则填充默认值
        this.value = email_inp_1;
    }
};

name_inp.onclick = function (event) {
    event.stopPropagation();//阻止冒泡事件
};

email_inp.onclick = function (event) {
    event.stopPropagation();//阻止冒泡事件
};

phone_inp.onclick = function (event) {
    event.stopPropagation();//阻止冒泡事件
};

con_inp.onclick = function (event) {
    event.stopPropagation();//阻止冒泡事件
};

submit_btn.onclick = function (event) {
    event.stopPropagation();//阻止冒泡事件
    if(con_inp.innerHTML == ""){
        con_inp.innerHTML  = con_inp_1;
    }
    if(phone_inp.value == ""){
        phone_inp.value = phone_inp_1;
    }
    if(email_inp.value == ""){
        email_inp.value = email_inp_1;
    }
    if(name_inp.value == ""){
        name_inp.value = name_inp_1;
    }

    /*电话*/
    var reg_phone = /^1[3|4|5|8]\d{9}$/;
    /*电子邮箱*/
    var reg_email = /^[\w\-\.]{5,}\@[\w]+\.[\w]{2,4}$/;
    /*当所有的都没有填的时候显示：您的电话格式有误，请重新输入*/
    if(!reg_phone.test(phone_inp.value)){
        console.log(reg_phone.test(phone_inp.value));
        msg_tip.style.display = "block";
        msg_txt_tip.innerHTML = "您的电话格式有误，请重新输入!";
    }else if(reg_phone.test(phone_inp.value)){
        /*console.log(reg_phone.test(phone_inp.value));*/
        if(!reg_email.test(email_inp.value)){
            msg_tip.style.display = "block";
            msg_txt_tip.innerHTML = "您的邮箱格式有误，请重新输入!";
        }else if(reg_email.test(email_inp.value)){
            console.log(reg_email.test(email_inp.value));
            if(name_inp.value == name_inp_1){
                msg_tip.style.display = "block";
                msg_txt_tip.innerHTML = "请填写您的姓名!";
            }else if(name_inp.value != name_inp_1){
                if(con_inp.innerHTML == con_inp_1){
                    msg_tip.style.display = "block";
                    msg_txt_tip.innerHTML = "请填写留言内容!";
                }
            }
        }
    }

    setTimeout(function () {
        document.body.scrollTop!==submit_btn.offsetTop?document.body.scrollTop=submit_btn.offsetTop:null;
    },300);
};
/*当点击其他地方的时候显示文字内容*/
var html = document.querySelectorAll("html");
html[0].onclick = function(){
    msg_tip.style.display = "none";
    if(con_inp.innerHTML == ""){
        con_inp.innerHTML  = con_inp_1;
    }
    if(phone_inp.value == ""){
        phone_inp.value = phone_inp_1;
    }
    if(email_inp.value == ""){
        email_inp.value = email_inp_1;
    }
    if(name_inp.value == ""){
        name_inp.value = name_inp_1;
    }
};