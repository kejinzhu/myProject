/**
 * Created by Administrator on 2018/3/14/014.
 */
/*获取导航条下面的li*/
var nav_allA = document.querySelectorAll("#nav a");
var nav_lis = document.querySelectorAll("#nav li");
var nav_b = document.querySelectorAll("#nav b");
/*获取内容*/
var cons = document.querySelectorAll(".con");
/*点击事件*/
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