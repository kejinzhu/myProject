/**
 * Created by Administrator on 2017/12/16/016.
 */
/*-------------------------------------------------------这是头部广告部分的JS------------------------------------------------------------------------*/
/**
 * 需求：当点击X按钮的时候关闭广告
 * 操作：
 * 1、给span标签绑定一个单击响应事件，
 * 2、当点击的时候把广告的高度设置为0就关闭广告
 */
window.onload = function () {
    var span = document.querySelectorAll("#ad>span");
    var ad = document.querySelector("#ad");
    span[0].onclick = function(){
        ad.style.height = "0px";
    }
};
/*--------------------------------------------------------头部广告部分的JS结束----------------------------------------------------------------------------*/

/*---------------------------------------------------------这是nav导航栏的JS--------------------------------------------------------------------*/
/**
 * 需求：在鼠标悬停在客户服务的时候，下拉菜单变为上拉菜单。
 * 然后把隐藏的内容显示出来
 * 1、给客户服务这个a标签绑定一个鼠标悬停和移开事件，
 * 2、当鼠标悬停的时候显示内容，并且修改图片src
 * 3、当鼠标移开的时候隐藏内容，并且修改图片src
 */
//获取id
var customer_service = document.querySelector("#customer_service");
var custom_service_img = document.querySelector("#customer_service_img");
//绑定鼠标移入事件
customer_service.parentNode.onmouseover = function(){
    custom_service_img.src = "img/nav_ul_li_img_up.png";
    customer_service.parentNode.style.border = "1px solid rgba(0,0,0,0.2)";
    customer_service.parentNode.style.background = "white";
    customer_service.nextElementSibling.style.display = "block";
};
//绑定鼠标移除事件
customer_service.parentNode.onmouseout = function(){
    custom_service_img.src = "img/nav_ul_li_img_down.png";
    customer_service.parentNode.style.border = "none";
    customer_service.parentNode.style.background = "#f3f3f3";
    customer_service.nextElementSibling.style.display = "none";
};

/*---------------------------------------------------------送货地址部分的JS---------------------------------------------------------------------*/
/**
 * 这里是送货地址的JS
 * 需求：当点击的时候送货地址的时候，显示下面的地址栏。
 * 当鼠标点击X符号的时候隐藏
 */
//给地址绑定一个单击响应事件
//获取id
var div = document.querySelector("#div_address");
var nav_ul_li_address_a = document.querySelector("#nav_ul_li_address>a");
nav_ul_li_address_a.addEventListener("click", function (event){
    div.style.display = "block";
    nav_ul_li_address_a.style.background = "white";
    nav_ul_li_address_a.style.border = "1px solid rgba(0,0,0,0.2)";
    nav_ul_li_address_a.style.borderBottom = "1px solid white";
    event.stopPropagation();//阻止冒泡事件
});
div.onclick = function (event) {
    event.stopPropagation();//阻止冒泡事件
};
//单击关闭符号的时候div隐藏,获取id、绑定事件
var close_div_address = document.querySelector("#close_div_address");
close_div_address.onclick = function(){
    var nav_ul_li_address_a = document.querySelector("#nav_ul_li_address>a");
    var div = document.querySelector("#div_address");
    div.style.display = "none";
    nav_ul_li_address_a.style.background = "#f3f3f3";
    nav_ul_li_address_a.style.border = "none";
};
/*点击其他地方关闭送货地址*/
var html = document.querySelectorAll("html");
html[0].onclick = function () {
    var nav_ul_li_address_a = document.querySelector("#nav_ul_li_address>a");
    var div = document.querySelector("#div_address");
    div.style.display = "none";
    nav_ul_li_address_a.style.background = "#f3f3f3";
    nav_ul_li_address_a.style.border = "none";
};
/**
 * 功能需求：改变送货地址的内容
 * 要求点击下面城市的时候上面送货地址中span的值变为点击的城市值
 * 由于下面字母我也用了a标签，所以我分两组，一组是热门城市的，另一组是按字母查找的
 * 1、获取a标签的数组。然后遍历数组，给数组每个元素绑定一个单击响应事件，每次单击都改变span的值
 */

//1、第一组：热门城市下面的a，返回的是数组
var allHotCityA = document.querySelectorAll("#p_city a");
//获取span的id
var nav_ul_li_address_span = document.querySelector("#nav_ul_li_address_span");
//绑定事件
for(var i = 0;i < allHotCityA.length;i++){
    allHotCityA[i].index = i;//确定索引号
    allHotCityA[i].onclick = function(){
        nav_ul_li_address_span.innerHTML = this.innerHTML;
        //关闭
        var nav_ul_li_address_a = document.querySelector("#nav_ul_li_address>a");
        var div = document.querySelector("#div_address");
        div.style.display = "none";
        nav_ul_li_address_a.style.background = "#f3f3f3";
        nav_ul_li_address_a.style.border = "none";
    }
}
//2、第二组：按字母查找下面的城市，返回数组
var allLetterCity = document.querySelectorAll("#div_address_city a");
for(var i = 0;i<allLetterCity.length;i++){
    allLetterCity[i].num = i;
    allLetterCity[i].onclick = function () {
        nav_ul_li_address_span.innerHTML = this.innerHTML;
        //关闭
        var nav_ul_li_address_a = document.querySelector("#nav_ul_li_address>a");
        var div = document.querySelector("#div_address");
        div.style.display = "none";
        nav_ul_li_address_a.style.background = "#f3f3f3";
        nav_ul_li_address_a.style.border = "none";
    }
}
//下面是送货地址栏下面搜索框的功能
/**
 * 功能需求：
 * 当用户输入城市的时候，与下面热门城市和按字母查找中的城市相匹配。
 * 当匹配成功后，直接把搜索框中的内容赋值给送货地址中span标签内的内容
 * 1、由于按字母查找也是用 a，我还是分成了两组
 * 2、分别遍历下面的数组，判断是否匹配，若匹配直接赋值
 */
    //获取id、添加onblur事件
var div_address_input = document.querySelector("#div_address_input");
div_address_input.onblur = function(){
    //第一组、热门城市
    for(var i = 0;i < allHotCityA.length;i++){
        if(div_address_input.value == allHotCityA[i].innerHTML){
            nav_ul_li_address_span.innerHTML = div_address_input.value;
        }
    }
    //第二组、按字母查找的城市
    for(var i = 0 ;i < allLetterCity.length;i++){
        if(div_address_input.value == allLetterCity[i].innerHTML){
            nav_ul_li_address_span.innerHTML = div_address_input.value;
        }
    }
    //关闭
    var nav_ul_li_address_a = document.querySelector("#nav_ul_li_address>a");
    var div = document.querySelector("#div_address");
    div.style.display = "none";
    nav_ul_li_address_a.style.background = "#f3f3f3";
    nav_ul_li_address_a.style.border = "none";
};


/*下面是点击字母自动滚动到相应字母下面的JS*/

//获取id，绑定事件，返回数组
var p_letter_allA = document.querySelectorAll("#p_letter>a");
for(var i = 0;i < p_letter_allA.length;i++){
    p_letter_allA[i].index = i;
    p_letter_allA[i].onclick = function () {
        target = this.offsetTop;
    }
}
/*点击字母滑动到指定地方*/
/**
 * 需求：当鼠标点击字母的时候，滚动条滑动到指定的地方
 * 1、需要使用定时器完成滑动部分
 * 2、获取ID，绑定事件
 */
//获取所有的字母
var p_letter_a = document.querySelectorAll("#p_letter a");
//获取所有的地址下面的p元素
var div_address_city_p = document.querySelectorAll("#div_address_city p");
//获取城市地址外部的div
var div_address_city = document.querySelector("#div_address_city");
//定义定时器的变量
var timer;
var distance = 0;
//获取滚动条的移动距离
for(var i = 0;i < p_letter_a.length;i++){
    p_letter_a[i].index = i;
    p_letter_a[i].addEventListener("click",function(event){
        var target = div_address_city_p[this.index].offsetTop-168;
        //使用定时器前先清除定时器
        clearInterval(timer);
        timer = setInterval(function(){
            if(target>distance){
                distance = distance+5;
                div_address_city.scrollTop = distance;
                if(target<=distance){
                    clearInterval(timer);
                }
            }else{
                distance = distance-5;
                div_address_city.scrollTop = distance;
                if(target>distance){
                    clearInterval(timer);
                }
            }
        },10);
        event.stopPropagation();
    })
}
/*---------------------------------------------------------------------------送货地址部分JS结束------------------------------------------------------------------*/


/*-------------------------------------------------------------------------头部导航栏nav部分JS结束---------------------------------------------------------------*/



/*-------------------------------------------------------------------------中间主体菜单、轮播图部分--------------------------------------*/
/*左侧菜单栏部分*/
//创建一个数组保存图片
var arrImgRed = ["img/全国进口_red.png","img/食品_red.png","img/母婴_red.png", "img/厨卫清洁_red.png","img/家居_red.png","img/美妆_red.png", "img/女装_red.png","img/箱包_red.png","img/手机数码_red.png", "img/家用电器_red.png","img/医药保健_red.png","img/图书_red.png"];
var arrImgGray = ["img/全国进口_gray.png","img/食品_gray.png","img/母婴_gray.png", "img/厨卫清洁_gray.png","img/家居_gray.png","img/美妆_gray.png", "img/女装_gray.png","img/箱包_gray.png","img/手机数码_gray.png", "img/家用电器_gray.png","img/医药保健_gray.png","img/图书_gray.png"];
/**
 * 需求：当鼠标悬停的时候图片改变
 * 遍历每个li给里面的img改变src，
 * 1、找id，绑定事件
 */
//获取id，找到所有的li标签
var body_center_container_ul_li = document.querySelectorAll("#body_center_container_ul>li");
//找到所有li下面的img
var body_center_container_ul_li_img = document.querySelectorAll("#body_center_container_ul>li>img");
for(var i = 0;i<body_center_container_ul_li.length;i++){
    body_center_container_ul_li[i].onmouseover = function () {
        for(var j = 0;j<body_center_container_ul_li.length;j++){
            body_center_container_ul_li_img[j].src = arrImgGray[j];
        }
        body_center_container_ul_li_img[i].src = arrImgRed[i];
    };
}


/*----------------------------------------------------------------------------中间；轮播图部分------------------------------------------------*/
var i = 0;
var body_center = document.querySelector("#body_center");
var back = ["#fd779c","#a03bfe","#fd1c57","#f2da55","#fdd9a5","#ae9b8a","#3d2ce9","#051ccb"];
var li = document.querySelectorAll("#slide li");//保存所有li
var img = document.querySelectorAll("#slide img");//找到img标签
var a = document.querySelectorAll("#slide a");//找到左右2个按钮
/*自动播放函数*/
function autoImg() {
    i++;
    if (i > 7) {
        i = 0;
    }
    for (var j = 0; j < img.length; j++) {
        li[j].style.background = "";
        img[j].style.opacity = "0";
    }
    li[i].style.background = "red";
    img[i].style.opacity = "1";
    body_center.style.background=back[i]
}
var setIn = setInterval(autoImg, 2500);
/*停止播放函数*/
function stopImg() {
    clearInterval(setIn);
    a[0].style.display = "block";
    a[1].style.display = "block";
}
/*开始自动播放函数*/
function startImg() {
    setIn = setInterval(autoImg, 2500);
    a[0].style.display = "none";
    a[1].style.display = "none";
}
/*鼠标点击远点时改变图片*/
function backColor(k) {
    for (var j = 0; j < li.length; j++) {
        li[j].style.background = "";
        img[j].style.opacity = "0";
    }
    li[k].style.background = "red";
    img[k].style.opacity = "1";
    body_center.style.background=back[k];
    i = k;
}
/*鼠标点击左右箭头时改变*/
function arrow(x) {
    if (x === "L") {
        i--;
        if (i < 0) {
            i = 7;
        }
    } else {
        i++;
        if (i > 7) {
            i = 0;
        }
    }
    for (var j = 0; j < img.length; j++) {
        li[j].style.background = "";
        img[j].style.opacity = "0";
    }
    li[i].style.background = "red";
    img[i].style.opacity = "1";
    body_center.style.background=back[i]
}
/*------------------------------------------------------------------轮播图结束--------------------------------------------*/


/*----------------------------------------------------------------下面是1号抢购、倒计时部分---------------------------------------------------*/
var hour = document.querySelector("#hour");
var min = document.querySelector("#min");
var sec = document.querySelector("#sec");
function countDown(){
    //获取当前时间
    var now = new Date();
    //设置截止时间
    var endDate = new Date("2019,2,16 23:00:00");
    //时间差
    var leftTime = endDate.getTime()-now.getTime();
    //定义变量h,m,s保存倒计时的时间
    var h, m,s;
    if(leftTime > 0){
        h = Math.floor(leftTime/1000/60/60%24);
        m = Math.floor(leftTime/1000/60%60);
        s = Math.floor(leftTime/1000%60);
    }
    //将倒计时的值赋值
    hour.innerHTML = h<10 ? "0"+h :h;
    min.innerHTML = m<10 ? "0"+ m : m;
    sec.innerHTML = s<10 ? "0"+s : s;
}
setInterval("countDown()",1000);



/*---------------------------------------------------------------------下面是1号闪购下面的排行榜tab页部分的JS-------------------------------------*/
/**
 *tab页的制作:
 * 需求：当鼠标悬停的时候胡，下面的div显示出来，其他的div隐藏
 * 1、获取id，然后绑定事件
 */
var firstShopping_container_ranking_tab_a = document.querySelectorAll("#firstShopping_container_ranking_tab>a");
var firstShopping_container_ranking_tab_div = document.querySelectorAll("#firstShopping_container_ranking_tab div");
function showTab(i){
    for(var j = 0;j<firstShopping_container_ranking_tab_div.length;j++){
        firstShopping_container_ranking_tab_div[j].style.display = "none";
        firstShopping_container_ranking_tab_a[j].style.borderBottom = "none";
    }
    firstShopping_container_ranking_tab_div[i].style.display = "block";
    firstShopping_container_ranking_tab_a[i].style.borderBottom = "1px solid red";
}
/*--------------------------------------------------------------------------1号闪购结束--------------------------------------------------*/


/*--------------------------------------------------------------下面是吸顶式导航条部分--------------------------------------------*/
/**
 * 需求：当滚动条滚动到一定位置的时候，导航条置顶，当滚动条滚动到小于导航条距离顶部的距离时消失
 * 获取id
 *绑定一个onscroll事件，并判断两者距离
 */
var topSuction_nav = document.querySelector("#topSuction_nav");
var target;
document.onscroll = function () {
    target = document.body.scrollTop||document.documentElement.scrollTop;
    if(target>720){
        topSuction_nav.style.position = "fixed";
        topSuction_nav.style.top = "0";
        topSuction_nav.style.left = "0";
        topSuction_nav.style.zIndex = "9";
    }
    else{
        topSuction_nav.style.position = "absolute";
        topSuction_nav.style.top = "720px";
        topSuction_nav.style.left = "-69px";
        topSuction_nav.style.zIndex = "-2";
    }

};
/*------------------------------------------------------------吸顶式导航条结束-------------------------------------------*/

/*------------------------------------------------------------下面是家居生活区域的JS-----------------------------------*/
/**
 * 家居生活区域的图片变化
 * 1、获取id找到元素
 * 2、改变top值
 * @type {Element}
 */
var home_life_1 = document.querySelector("#home_life_1");
var home_life_1_div = document.querySelectorAll(".div0");
var num = document.querySelector("#num");
var b = 0;
function show_pic(){
    b++;
    if(b > 2){
        b = 0;
    }
    if(b == 0){
        home_life_1_div[b].style.top = "112px";
        home_life_1_div[1].style.top = "102px";
        home_life_1_div[2].style.top = "92px";
        home_life_1_div[b].style.opacity = "1";
        home_life_1_div[1].style.opacity = "0.9";
        home_life_1_div[2].style.opacity = "0.8";
        home_life_1_div[b].style.zIndex = "2";
        home_life_1_div[1].style.zIndex = "1";
        home_life_1_div[2].style.zIndex = "0";
        home_life_1_div[b].style.transform = "scale(1,1)";
        home_life_1_div[1].style.transform = "scale(0.9,1)";
        home_life_1_div[2].style.transform = "scale(0.8,1)";
    }else if(b == 1){
        home_life_1_div[0].style.top = "92px";
        home_life_1_div[b].style.top = "112px";
        home_life_1_div[2].style.top = "102px";
        home_life_1_div[0].style.opacity = "0.8";
        home_life_1_div[b].style.opacity = "1";
        home_life_1_div[2].style.opacity = "0.9";
        home_life_1_div[0].style.zIndex = "0";
        home_life_1_div[b].style.zIndex = "2";
        home_life_1_div[2].style.zIndex = "1";
        home_life_1_div[0].style.transform = "scale(0.8,1)";
        home_life_1_div[b].style.transform = "scale(1,1)";
        home_life_1_div[2].style.transform = "scale(0.9,1)";
    }else if(b == 2){
        home_life_1_div[0].style.top = "102px";
        home_life_1_div[1].style.top = "92px";
        home_life_1_div[b].style.top = "112px";
        home_life_1_div[0].style.opacity = "0.9";
        home_life_1_div[1].style.opacity = "0.8";
        home_life_1_div[b].style.opacity = "1";
        home_life_1_div[0].style.zIndex = "1";
        home_life_1_div[1].style.zIndex = "0";
        home_life_1_div[b].style.zIndex = "2";
        home_life_1_div[0].style.transform = "scale(0.9,1)";
        home_life_1_div[1].style.transform = "scale(0.8,1)";
        home_life_1_div[b].style.transform = "scale(1,1)";
    }
    num.innerHTML = b+1;
}
var set_timer = setInterval("show_pic()",2000);
home_life_1.onmouseover = function (){
    clearInterval(set_timer);
};
home_life_1.onmouseout = function(){
    clearInterval(set_timer);
    set_timer = setInterval("show_pic()",2000);;
};

/*给左右箭头添加JS*/
var left = document.querySelector("#left");
var right = document.querySelector("#right");
right.onclick = show_pic;
left.onclick = function () {
    b--;
    if(b < 0){
        b = 2;
    }
    if(b == 0 ){
        home_life_1_div[b].style.top = "112px";
        home_life_1_div[1].style.top = "102px";
        home_life_1_div[2].style.top = "92px";
        home_life_1_div[b].style.opacity = "1";
        home_life_1_div[1].style.opacity = "0.9";
        home_life_1_div[2].style.opacity = "0.8";
        home_life_1_div[b].style.zIndex = "2";
        home_life_1_div[1].style.zIndex = "1";
        home_life_1_div[2].style.zIndex = "0";
        home_life_1_div[b].style.transform = "scale(1,1)";
        home_life_1_div[1].style.transform = "scale(0.9,1)";
        home_life_1_div[2].style.transform = "scale(0.8,1)";
    }else if(b == 1){
        home_life_1_div[0].style.top = "92px";
        home_life_1_div[b].style.top = "112px";
        home_life_1_div[2].style.top = "102px";
        home_life_1_div[0].style.opacity = "0.8";
        home_life_1_div[b].style.opacity = "1";
        home_life_1_div[2].style.opacity = "0.9";
        home_life_1_div[0].style.zIndex = "0";
        home_life_1_div[b].style.zIndex = "2";
        home_life_1_div[2].style.zIndex = "1";
        home_life_1_div[0].style.transform = "scale(0.8,1)";
        home_life_1_div[b].style.transform = "scale(1,1)";
        home_life_1_div[2].style.transform = "scale(0.9,1)";
    }else if(b == 2){
        home_life_1_div[0].style.top = "102px";
        home_life_1_div[1].style.top = "92px";
        home_life_1_div[b].style.top = "112px";
        home_life_1_div[0].style.opacity = "0.9";
        home_life_1_div[1].style.opacity = "0.8";
        home_life_1_div[b].style.opacity = "1";
        home_life_1_div[0].style.zIndex = "1";
        home_life_1_div[1].style.zIndex = "0";
        home_life_1_div[b].style.zIndex = "2";
        home_life_1_div[0].style.transform = "scale(0.9,1)";
        home_life_1_div[1].style.transform = "scale(0.8,1)";
        home_life_1_div[b].style.transform = "scale(1,1)";
    }
    num.innerHTML = b+1;
};

/*-------------------------------------------------给下面新闻部分添加JS-------------------------------*/
/**
 * 需求：向上无缝滚动新闻字幕
 * 1、获取ID，然后让容器的顶部距离线性变化，调用移动的函数，
 * 2、在向上移动函数中，先删除第一个孩子，然后再在后面添加上
 * @type {Element}
 */
var home_life_1_div_div_ul = document.querySelector("#home_life_1_div_div_ul");
function moveUp(){
    home_life_1_div_div_ul.style.transition = "top 1s linear";
    home_life_1_div_div_ul.style.top = "-26px";
    setTimeout("moveOperate()",1000);
}
/*这是移动操作函数，也就是当top移动到适当距离的时候先删除第一个孩子，然后在后面加上第一个孩子*/
function moveOperate(){
    var li = home_life_1_div_div_ul.removeChild(home_life_1_div_div_ul.firstElementChild);
    home_life_1_div_div_ul.appendChild(li);
    home_life_1_div_div_ul.style.transition = "none";
    home_life_1_div_div_ul.style.top = "0";
}
setInterval("moveUp()",3000);

/*------------------------------------------------家居生活部分结束----------------------------------*/


/*-----------------------------------------------下面开始母婴玩具、厨卫清洁部分的JS----------------*/

/*--------------------------------------------首先是母婴部分---------------------------------*/
/**
 * 首先是自动轮播部分
 * 1、获取ID，绑定鼠标悬停事件
 */
/*获取所有的li*/
var infant_toys_left_ul_li = document.querySelectorAll("#infant_toys_left>ul>li");
/*获取所有的轮播图的div*/
var infant_toys_left_div = document.querySelectorAll("#infant_toys_left>div");
var infant_toys_left = document.querySelector("#infant_toys_left");
var p = 0;
var timer_slider1;
function autoSlider1(){
    p++;
    if(p > 2){
        p = 0;
    }
    for(var j = 0;j < 3;j++){
        infant_toys_left_div[j].style.opacity = "0";
        infant_toys_left_ul_li[j].style.background = "#cbcbcb";
    }
    infant_toys_left_div[p].style.opacity = "1";
    infant_toys_left_ul_li[p].style.background = "#fc8181";
}
/*开始定时器*/
timer_slider1 = setInterval("autoSlider1()",3000);
/*鼠标悬停的时候关闭定时器*/
infant_toys_left.onmouseover = function(){
    clearInterval(timer_slider1);
};
/*鼠标移开的时候开启定时器*/
infant_toys_left.onmouseout = function(){
    timer_slider1 = setInterval("autoSlider1()",3000);
};
/*--------------------------------------------母婴部分结束--------------------------------*/

/*-------------------------------------------下面是厨卫清洁部分------------------------------*/
/**
 * 首先是自动轮播图部分
 */
/*获取所有的li*/
var kitchen_left_ul_li = document.querySelectorAll("#kitchen_left>ul>li");
/*获取所有的div*/
var kitchen_left_div = document.querySelectorAll("#kitchen_left>div");
var kitchen_left = document.querySelector("#kitchen_left");
var q = 0;
var timer_slider2;
function autoSlider2(){
    q++;
    if(q > 2){
        q = 0;
    }
    for(var j = 0;j < 3;j++){
        kitchen_left_ul_li[j].style.background = "#cbcbcb";
        kitchen_left_div[j].style.opacity = "0";
    }
    kitchen_left_ul_li[q].style.background = "#6ac4fe";
    kitchen_left_div[q].style.opacity = "1";
}
timer_slider2 = setInterval("autoSlider2()",3000);
/*鼠标悬停的时候关闭定时器*/
kitchen_left.onmouseover = function(){
    clearInterval(timer_slider2);
};
/*鼠标移开的时候开启定时器*/
kitchen_left.onmouseout = function(){
    timer_slider2 = setInterval("autoSlider2()",3000);
};
/*---------------------------------------------厨卫清洁部分结束------------------------------------------*/
/*--------------------------------------------母婴玩具、厨卫清洁部分结束-----------------------------*/

/*-------------------------------------------下面是左侧的楼层定位部分--------------------------------*/
/**
 * 需求：当点击对应的楼层，滑动到相应的位置
 * 1、获取ID
 * 2、绑定单击相应事件
 */
var allFloor = document.querySelectorAll(".floor");
var floor_ul_li = document.querySelectorAll("#floor>ul>li");
var floor = document.querySelector("#floor");
var distance_top = 0;
var floor_timer;
for(var i = 0;i < floor_ul_li.length;i++){
    floor_ul_li[i].index = i;
    floor_ul_li[i].onclick = function(){
        var target = allFloor[this.index].offsetTop;
        clearInterval(floor_timer);
        floor_timer = setInterval(function(){
            if(target > distance_top){
                distance_top += 5;
                document.body.scrollTop = distance_top;
                if(target <= distance_top){
                    clearInterval(floor_timer);
                }
            }else{
                distance_top -= 5;
                document.body.scrollTop = distance_top;
                if(target > distance_top){
                    clearInterval(floor_timer);
                }
            }
        },10);
        for(var j = 0;j < floor_ul_li.length-1;j++){
            floor_ul_li[j].style.background = "#fdfdfe";
            floor_ul_li[j].style.color = "#666666";
        }
        this.style.background = "red";
        this.style.color = "white";
    }
}
/*当滚动条滚动到一定位置的时候，楼层部分出现*/
document.onscroll = function () {
    var target = document.body.scrollTop||document.documentElement.scrollTop;
    if(target > 1242){
        floor.style.display = "block";
    }else{
        floor.style.display = "none";
    }
};


/*---------------------------------------------下面是返回顶部的JS-----------------------------------*/
/*获取ID、绑定事件*/
var backTop = document.querySelector("#backTop");
backTop.onclick = function () {
    var back_timer;
    var distance = 0;
    clearInterval(back_timer);
    back_timer = setInterval(function () {
        distance = window.pageYOffset;
        if(distance>0){
            window.scrollTo(0,distance-10);
        }else{
            clearInterval(back_timer);
        }
    },20);
};