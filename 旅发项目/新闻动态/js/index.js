/**
 * Created by Administrator on 2018/3/14/014.
 */
/*获取元素*/
var nav_lis = document.querySelectorAll("#nav li");
var nav_allA = document.querySelectorAll("#nav a");
var nav_b = document.querySelectorAll("#nav b");
var cons = document.querySelectorAll(".con");
/*点击事件、当点击的时候显示下面内容*/
function tabClick(num){
    for(var j = 0;j<nav_lis.length;j++){
        nav_allA[j].style.color = "#3e3a39";
        nav_b[j].style.display = "none";
        cons[j].style.display = "none";
    }
    nav_allA[num].style.color = "#ef8201";
    nav_b[num].style.display = "block";
    cons[num].style.display = "block";
}

/*换页下面的JS*/
var con1_uls = document.querySelectorAll(".con1-ul");
var nums = document.querySelectorAll(".num");
var next_page = document.querySelector("#next-page");
var pre_page = document.querySelector("#pre-page");
var preImg = document.querySelector("#pre-page>img");
var nextImg = document.querySelector("#next-page>img");
/*确定按钮*/
var submit = document.querySelector("#submit");
/*跳转到第几页*/
var turn_page = document.querySelector("#turn-page");

function pageClick1(k){
    turn_page.value = k+1;
    if(k != 0){
        preImg.src = "img/new_pre_page_org.png";
    }else if(k == 0){
        preImg.src = "img/new_pre_page.png";
    }
    if(k != 4){
        nextImg.src = "img/new_next_page_org.png";
    }else if(k == 4){
        nextImg.src = "img/new_next_page.png";
    }
    hid();
    nums[k].style.border = "1px solid #f08300";
    nums[k].style.color = "#f08300";
}
function hid(){
    nums[0].style.border = "1px solid #d3d3d3";
    nums[0].style.color = "#777";
    nums[1].style.border = "1px solid #d3d3d3";
    nums[1].style.color = "#777";
    nums[2].style.border = "1px solid #d3d3d3";
    nums[2].style.color = "#777";
    nums[3].style.border = "1px solid #d3d3d3";
    nums[3].style.color = "#777";
    nums[4].style.border = "1px solid #d3d3d3";
    nums[4].style.color = "#777";
}

/*点击上一页和下一页的时候跳转*/
pre_page.onclick = function () {
    if((turn_page.value-1)>0){
        turn_page.value = turn_page.value-1;
    }
    if((turn_page.value-1)==0){
        preImg.src = "img/new_pre_page.png";
    }else if((turn_page.value-1)!=0){
        preImg.src = "img/new_pre_page_org.png";
    }
    if((turn_page.value-1) != 4){
        nextImg.src = "img/new_next_page_org.png";
    }else if((turn_page.value-1) == 4){
        nextImg.src = "img/new_next_page.png";
    }
    for(var j = 0;j<nums.length;j++){
        nums[j].style.border = "1px solid #d3d3d3";
        nums[j].style.color = "#777";
    }
    nums[turn_page.value-1].style.border = "1px solid #f08300";
    nums[turn_page.value-1].style.color = "#f08300";
    /*con1_uls[c].style.display = "block";*/
};
/*下一页*/
next_page.onclick = function () {
    if((turn_page.value-1)<4){
        turn_page.value = parseInt(turn_page.value)+1;
    }
    if((turn_page.value-1)==0){
        preImg.src = "img/new_pre_page.png";
    }else if((turn_page.value-1)!=0){
        preImg.src = "img/new_pre_page_org.png";
    }
    if((turn_page.value-1) != 4){
        nextImg.src = "img/new_next_page_org.png";
    }else if((turn_page.value-1) == 4){
        nextImg.src = "img/new_next_page.png";
    }
    for(var j = 0;j<nums.length;j++){
        nums[j].style.border = "1px solid #d3d3d3";
        nums[j].style.color = "#777";
    }
    nums[turn_page.value-1].style.border = "1px solid #f08300";
    nums[turn_page.value-1].style.color = "#f08300";
    /*con1_uls[c].style.display = "block";*/
};

/*跳转到第几页*/
turn_page.onchange = function () {
    for(var j = 0;j<nums.length;j++){
        nums[j].style.border = "1px solid #d3d3d3";
        nums[j].style.color = "#777";
    }
    nums[turn_page.value-1].style.border = "1px solid #f08300";
    nums[turn_page.value-1].style.color = "#f08300";
};


/*确定按钮*/
submit.onclick = function () {
    for(var j = 0;j<con1_uls.length;j++){
        con1_uls[j].style.display = "none";
    }
    con1_uls[turn_page.value-1].style.display = "block";
};


/*下面是行业新闻部分的JS*/

var con2_uls = document.querySelectorAll(".con2-ul");
var num2s = document.querySelectorAll(".num2");
var next_page2 = document.querySelector("#next-page2");
var pre_page2 = document.querySelector("#pre-page2");
var preImg2 = document.querySelector("#pre-page2>img");
var nextImg2 = document.querySelector("#next-page2>img");
/*确定按钮*/
var submit2 = document.querySelector("#submit2");
/*跳转到第几页*/
var turn_page2 = document.querySelector("#turn-page2");
function pageClick2(n){
    turn_page2.value = n+1;
    if(n != 0){
        preImg2.src = "img/new_pre_page_org.png";
    }else if(n == 0){
        preImg2.src = "img/new_pre_page.png";
    }
    if(n != 2){
        nextImg2.src = "img/new_next_page_org.png";
    }else if(n == 2){
        nextImg2.src = "img/new_next_page.png";
    }
    hid2();
    num2s[n].style.border = "1px solid #f08300";
    num2s[n].style.color = "#f08300";
}
function hid2(){
    num2s[0].style.border = "1px solid #d3d3d3";
    num2s[0].style.color = "#777";
    num2s[1].style.border = "1px solid #d3d3d3";
    num2s[1].style.color = "#777";
    num2s[2].style.border = "1px solid #d3d3d3";
    num2s[2].style.color = "#777";
}

/*点击上一页和下一页的时候跳转*/
pre_page2.onclick = function () {
    if(turn_page2.value-1>0){
        turn_page2.value=turn_page2.value-1;
    }
    if((turn_page2.value-1)==0){
        preImg2.src = "img/new_pre_page.png";
    }else if((turn_page2.value-1)!=0){
        preImg2.src = "img/new_pre_page_org.png";
    }
    if((turn_page2.value-1) != 2){
        nextImg2.src = "img/new_next_page_org.png";
    }else if((turn_page2.value-1) == 2){
        nextImg2.src = "img/new_next_page.png";
    }
    for(var j = 0;j<num2s.length;j++){
        num2s[j].style.border = "1px solid #d3d3d3";
        num2s[j].style.color = "#777";
    }
    num2s[turn_page2.value-1].style.border = "1px solid #f08300";
    num2s[turn_page2.value-1].style.color = "#f08300";
    /*con1_uls[c].style.display = "block";*/
};
/*下一页*/
next_page2.onclick = function () {
    if((turn_page2.value-1)<2){
        turn_page2.value = parseInt(turn_page2.value)+1;
    }
    if((turn_page2.value-1)==0){
        preImg2.src = "img/new_pre_page.png";
    }else if((turn_page2.value-1)!=0){
        preImg2.src = "img/new_pre_page_org.png";
    }
    if((turn_page2.value-1) != 4){
        nextImg2.src = "img/new_next_page_org.png";
    }else if((turn_page2.value+1) == 4){
        nextImg2.src = "img/new_next_page.png";
    }
    for(var j = 0;j<num2s.length;j++){
        num2s[j].style.border = "1px solid #d3d3d3";
        num2s[j].style.color = "#777";
    }
    num2s[turn_page2.value-1].style.border = "1px solid #f08300";
    num2s[turn_page2.value-1].style.color = "#f08300";
    /*con1_uls[c].style.display = "block";*/
};

/*跳转到第几页*/
turn_page2.onchange = function () {
    for(var j = 0;j<num2s.length;j++){
        num2s[j].style.border = "1px solid #d3d3d3";
        num2s[j].style.color = "#777";
    }
    num2s[turn_page2.value+1].style.border = "1px solid #f08300";
    num2s[turn_page2.value+1].style.color = "#f08300";
};


/*确定按钮*/
submit2.onclick = function () {
    for(var j = 0;j<con2_uls.length;j++){
        con2_uls[j].style.display = "none";
    }
    con2_uls[turn_page2.value-1].style.display = "block";
};
