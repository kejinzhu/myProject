/**
 * Created by Administrator on 2018/3/15/015.
 */
/*获取元素*/
var nav_lis = document.querySelectorAll("#nav li");
var nav_allA = document.querySelectorAll("#nav a");
var nav_b = document.querySelectorAll("#nav b");
var cons = document.querySelectorAll(".con");
/*点击事件、当点击的时候显示下面内容*/
function tabClick3(num){
    for(var j = 0;j<nav_lis.length;j++){
        nav_allA[j].style.color = "#3e3a39";
        nav_b[j].style.display = "none";
        cons[j].style.display = "none";
    }
    nav_allA[num].style.color = "#ef8201";
    nav_b[num].style.display = "block";
    cons[num].style.display = "block";
}