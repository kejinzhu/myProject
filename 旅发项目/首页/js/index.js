/**
 * Created by Administrator on 2018/3/2/002.
 */

/*右侧小圆点楼层跳跃部分*/

var big_text = document.querySelectorAll(".big-text")[0];
var small_text = document.querySelectorAll(".small-text")[0];
var videoImg = document.querySelector("#videoImg");
var videoBox = document.querySelector("#videoBox");
var section_all  = document.querySelectorAll(".section");
var page_dot_nav_a =document.querySelectorAll("#page-dot-nav a");
var distance_top1 = 0;
var distance_top2 = 0;
var floor_timer1;
var floor_timer2;
//获取可视区的宽度和高度
var h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;   //height
var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;      //width
//容器的高度等于当前可视区域的高度、宽度同理
var section1 = document.querySelector(".section1");
var section2 = document.querySelector(".section2");
var section3 = document.querySelector(".section3");
var section4 = document.querySelector(".section4");
var section5 = document.querySelector(".section5");
section1.style.height = h +"px";
section2.style.height = h +"px";
section3.style.height = h +"px";
section4.style.height = h +"px";
section5.style.height = h +"px";

for(var i = 0;i<page_dot_nav_a.length;i++){
    page_dot_nav_a[i].index = i;
    page_dot_nav_a[i].onclick = function () {
        console.log(section1.style.height);
        var target = section_all[this.index].offsetTop;
        floor_timer1 = setInterval(function(){
            if(target > distance_top1){
                distance_top1 += 5;
                document.body.scrollTop = distance_top1;
                if(target <= distance_top1){
                    clearInterval(floor_timer1);
                }
                page_animation_sec1();
                page_animation_sec2();
            }else{
                distance_top1 -= 5;
                document.body.scrollTop = distance_top1;
                if(target > distance_top1){
                    clearInterval(floor_timer1);
                }
                page_animation_sec1();
                page_animation_sec2();
            }
        },10);
        for(var j = 0;j < page_dot_nav_a.length;j++){
            page_dot_nav_a[j].style.background = "#fff";
        }
        this.style.background = "#F48120";
    }
}

/*点击向下箭头滑动部分*/
var goDown = document.querySelectorAll(".goDown");
for(var k = 0;k<goDown.length;k++){
    goDown[k].index = k;
    goDown[k].onclick = function () {
        var target = section_all[(this.index+1)%5].offsetTop;
        floor_timer2 = setInterval(function(){
            if(target > distance_top2){
                distance_top2 += 5;
                document.body.scrollTop = distance_top2;
                if(target <= distance_top2){
                    clearInterval(floor_timer2);
                }
                page_animation_sec1();
                page_animation_sec2();
            }else{
                distance_top2 -= 5;
                document.body.scrollTop = distance_top2;
                if(target > distance_top2){
                    clearInterval(floor_timer2);
                }
                page_animation_sec1();
                page_animation_sec2();
            }
        },10);
        for(var j = 0;j < page_dot_nav_a.length;j++){
            page_dot_nav_a[j].style.background = "#fff";
        }
        page_dot_nav_a[(this.index+1)%5].style.background = "#F48120";

    }
}

/*页面加载时第一版的字体实现动画效果*/
window.addEventListener("load", function () {
    /*window.scrollTop(0);*/
    var big_text = document.querySelectorAll(".big-text")[0];
    var small_text = document.querySelectorAll(".small-text")[0];
    big_text.style.transform = "scale(1,1)";
    small_text.style.opacity = "1";
    setTimeout(function () {
        document.body.scrollTop!==0?document.body.scrollTop=0:null;
    },300);
});

/*当滚动到当前页面时实现动画效果*/
function page_animation_sec1(){
    setTimeout(function () {
         if(document.body.scrollTop>=0&&document.body.scrollTop<h){
             big_text.style.transform = "scale(1,1)";
             small_text.style.opacity = "1";
         }else if(document.body.scrollTop>=h) {
             big_text.style.transform = "scale(0,0)";
             small_text.style.opacity = "0";
         }
    },300);
}
function page_animation_sec2(){

    setTimeout(function () {
        if(document.body.scrollTop>=h&&document.body.scrollTop<2*h){
            videoImg.style.display = "none";
            videoBox.style.display = "block";
        }else{
            videoImg.style.display = "block";
            videoBox.style.display = "none";
        }
     },300);
}
videoImg.onclick = function () {
    videoImg.style.display = "none";
    videoBox.style.display = "block";
};
