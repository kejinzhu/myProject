/**
 * Created by Administrator on 2018/3/15/015.
 */
/*下面是第三版轮播图部分的JS*/
var curPage = 0;
var slider_ul = document.querySelector("#slider_ul");
var slider_ul_li = document.querySelectorAll("#slider_ul li");
/*var sliders = document.querySelectorAll(".slider");*/
var slider_img = document.querySelectorAll("#slider_ul li img");
/*左右箭头*/

function slider_right(){

    if(curPage<3){
        curPage++;
    }
    var moveDistance = -(curPage)*328;
    for(var j = 0;j<slider_ul_li.length;j++){
        slider_ul_li[j].style.width = "280"+"px";
        slider_img[j].style.width = "270"+"px";
    }
    slider_ul.style.left = moveDistance + "px";
    slider_ul_li[curPage+1].style.width = "410" + "px";
    slider_img[curPage+1].style.width = "400" + "px";
}

function slider_left(){
    var moveDistance;
    if(curPage==0){
        moveDistance = 328;
        for(var k = 0;k<slider_ul_li.length;k++){
            slider_ul_li[k].style.width = "280"+"px";
            slider_img[k].style.width = "270"+"px";
        }
        slider_ul.style.left = moveDistance+"px";
        slider_ul_li[curPage].style.width = "410" + "px";
        slider_img[curPage].style.width = "400" + "px";
    }else if(curPage==1){
        moveDistance = 0;
        for(var k = 0;k<slider_ul_li.length;k++){
            slider_ul_li[k].style.width = "280"+"px";
            slider_img[k].style.width = "270"+"px";
        }
        slider_ul.style.left = moveDistance+"px";
        slider_ul_li[curPage].style.width = "410" + "px";
        slider_img[curPage].style.width = "400" + "px";
    }else if(curPage==2){
        moveDistance = -328;
        for(var k = 0;k<slider_ul_li.length;k++){
            slider_ul_li[k].style.width = "280"+"px";
            slider_img[k].style.width = "270"+"px";
        }
        slider_ul.style.left = moveDistance+"px";
        slider_ul_li[curPage].style.width = "410" + "px";
        slider_img[curPage].style.width = "400" + "px";
    }else if(curPage==3){
        moveDistance = -656;
        for(var k = 0;k<slider_ul_li.length;k++){
            slider_ul_li[k].style.width = "280"+"px";
            slider_img[k].style.width = "270"+"px";
        }
        slider_ul.style.left = moveDistance+"px";
        slider_ul_li[curPage].style.width = "410" + "px";
        slider_img[curPage].style.width = "400" + "px";
    }
    if(curPage>=1){
        curPage--;
    }

}
