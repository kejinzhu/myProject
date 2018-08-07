/**
 * Created by Administrator on 2018/3/14/014.
 */
var nav_lis = document.querySelectorAll("#nav li");
var nav_allA = document.querySelectorAll("#nav a");
var nav_b = document.querySelectorAll("#nav b");
var cons = document.querySelectorAll(".con");
function tabClick2(m){
    for(var j = 0;j<nav_lis.length;j++){
        nav_allA[j].style.color = "#3e3a39";
        nav_b[j].style.display = "none";
        cons[j].style.display = "none";
    }
    nav_allA[m].style.color = "#ef8201";
    nav_b[m].style.display = "block";
    cons[m].style.display = "block";
}
