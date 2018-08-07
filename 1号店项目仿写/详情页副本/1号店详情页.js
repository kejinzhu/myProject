/**
 * Created by Administrator on 2017/12/16/016.
 */

/*--------------------------------------------------------下面是客户服务部分的上下箭头的转换JS开始-----------------------------------*/
/*获取ID*/
var detail_page_head_customerServer = document.querySelector("#detail_page_head_customerServer");
var detail_page_head_customerServer_img = document.querySelector("#detail_page_head_customerServer_img");
/*绑定事件*/
detail_page_head_customerServer.onmouseover = function () {
    detail_page_head_customerServer_img.src = "img/detail_page_up.png";
};
detail_page_head_customerServer.onmouseout = function () {
    detail_page_head_customerServer_img.src = "img/detail_page_down.png";
};
/*---------------------------------------------------下面是客户服务部分的上下箭头的转换JS结束------------------------------------------*/


/*---------------------------------------------------下面是比价部分的JS开始-------------------------------------------------------------*/
/**
 * 当点击比价圆点的时候图片部分显示
 * 1、获取ID
 * 2、给比价圆点按钮绑定单击相应事件
 * @type {Element}
 */
var detail_page_compare_price_btn = document.querySelector("#detail_page_compare_price_btn");
var detail_page_compare_price_all = document.querySelector("#detail_page_compare_price_all");
detail_page_compare_price_btn.onclick = function () {
    detail_page_compare_price_all.style.display = "block";
    detail_page_compare_price_btn.style.display = "none";
};
/*当点击右侧关闭按钮的时候，里面内容隐藏、比价圆点显示*/
var close = document.querySelector("#close");
close.onclick = function () {
    var detail_page_compare_price_btn = document.querySelector("#detail_page_compare_price_btn");
    var detail_page_compare_price_all = document.querySelector("#detail_page_compare_price_all");
    detail_page_compare_price_btn.style.display = "block";
    detail_page_compare_price_all.style.display = "none";
};
/*自动轮播部分*/
var i = 0;
var detail_page_compare_price_all_content = document.querySelector("#detail_page_compare_price_all_content");
var detail_page_compare_price_all_content_uls = document.querySelectorAll("#detail_page_compare_price_all_content>ul");
var detail_page_compare_price_all_dot_lis = document.querySelectorAll("#detail_page_compare_price_all_dot>li");
function autoSlider() {
    i++;
    if(i >= 2){
        i = 0;
    }
    for(var j = 0;j<detail_page_compare_price_all_content_uls.length;j++){
        detail_page_compare_price_all_content_uls[j].style.display = "none";
        detail_page_compare_price_all_dot_lis[j].style.background = "rgba(0,0,0,0.2)";
        detail_page_compare_price_all_content_uls[j].style.transition = "display 0.4s linear";
    }
    detail_page_compare_price_all_content_uls[i].style.display = "block";
    detail_page_compare_price_all_dot_lis[i].style.background = "rgba(0,0,0,0.498)";
}
var timer = setInterval(autoSlider,3000);
/*当鼠标悬停于外容器的时候停止播放*/
detail_page_compare_price_all_content.onmouseover = function () {
    clearInterval(timer);
};
/*当鼠标移开的时候开始播放*/
detail_page_compare_price_all_content.onmouseout = function () {
    timer = setInterval(autoSlider,3000);
};
/*当点击两个小圆点的时候，对应的ul显示，并且小圆点的颜色加深*/
for(var k = 0;k<detail_page_compare_price_all_dot_lis.length;k++){
    detail_page_compare_price_all_dot_lis[k].onclick = function () {
        for(var j = 0;j<detail_page_compare_price_all_dot_lis.length;j++){
            detail_page_compare_price_all_content_uls[j].style.display = "none";
            detail_page_compare_price_all_dot_lis[j].style.background = "rgba(0,0,0,0.2)";
            detail_page_compare_price_all_content_uls[j].style.transition = "display 0.4s linear";
        }
        detail_page_compare_price_all_content_uls[k].style.display = "block";
        detail_page_compare_price_all_dot_lis[k].style.background = "rgba(0,0,0,0.498)";
    }
}
/*-----------------------------------------------------比价部分的JS结束-----------------------------------------------------------------*/


/*----------------------------------------------------下面是促销部分的JS----------------------------------------------------------------*/
var hidden_show_divs = document.querySelectorAll(".hidden");
function showDiv(n){
    for(var j = 0;j<hidden_show_divs.length;j++){
        hidden_show_divs[j].style.display = "none";
    }
    hidden_show_divs[n].style.display = "block";
}
/*单击关闭按钮的时候，隐藏*/
function closeDiv(m){
    hidden_show_divs[m].style.display = "none";
}

/*--------------------------------------------------促销部分的JS结束---------------------------------------------------------------------*/

/*--------------------------------------------------下面是选择产品部分的JS----------------------------------------------------------------*/
var detail_page_product_intro_choose_product_divs = document.querySelectorAll("#detail_page_product_intro_choose_product>div");
var detail_page_product_intro_choose_product_divs_a = document.querySelectorAll("#detail_page_product_intro_choose_product>div>a");
var detail_page_product_intro_choose_product_divs_img = document.querySelectorAll("#detail_page_product_intro_choose_product>div>img");
var detail_page_product_intro_choose_num_wrap_hidden = document.querySelector("#detail_page_product_intro_choose_num_wrap_hidden");
var detail_page_product_intro_choose_num_wrap_hidden_con_divs = document.querySelectorAll("#detail_page_product_intro_choose_num_wrap_hidden_con>div");
var detail_page_product_intro_choose_product_hidden = document.querySelector("#detail_page_product_intro_choose_product_hidden");
var detail_page_product_intro_choose_num_wrap_show_con_divs = document.querySelectorAll("#detail_page_product_intro_choose_num_wrap_show_con>div");
var detail_page_product_intro_choose_product_hidden_divs = document.querySelectorAll("#detail_page_product_intro_choose_product_hidden>dd>div");
var detail_page_product_intro_choose_product_hidden_divs_a = document.querySelectorAll("#detail_page_product_intro_choose_product_hidden>dd>div>a");
var detail_page_product_intro_choose_product_hidden_divs_img = document.querySelectorAll("#detail_page_product_intro_choose_product_hidden>dd>div>img");
/*当点击产品的时候，产品的边框变为红色、右下角出现被选中的图标，对应的产品净含量被选中边框变为实线，字体颜色加深*/
function showHiddenNum(p){
    for(var j = 0;j<detail_page_product_intro_choose_product_divs.length;j++){
        detail_page_product_intro_choose_product_divs[j].style.border = "1px solid #dcdcdc";
        detail_page_product_intro_choose_product_divs[j].className = "unselected";
        detail_page_product_intro_choose_num_wrap_hidden_con_divs[j].style.border = "1px dashed #dcdcdc";
        detail_page_product_intro_choose_num_wrap_hidden_con_divs[j].style.color = "#cbcbcb";
    }
    detail_page_product_intro_choose_product_divs[p].style.border = "1px solid #e50021";
    detail_page_product_intro_choose_product_divs_a[p].style.color = "#333";
    detail_page_product_intro_choose_product_divs[p].className = "selected";
    detail_page_product_intro_choose_num_wrap_hidden.style.display = "block";
    detail_page_product_intro_choose_product_divs_img[p].style.opacity = "1";
    detail_page_product_intro_choose_num_wrap_hidden_con_divs[p].style.border = "1px solid #dcdcdc";
    detail_page_product_intro_choose_num_wrap_hidden_con_divs[p].style.color = "#333";
    detail_page_product_intro_choose_product_divs[1-p].onmouseover = function () {
        detail_page_product_intro_choose_product_divs[1-p].style.border = "1px solid #e50021";
    };
    detail_page_product_intro_choose_product_divs[p].onmouseover = function () {
        detail_page_product_intro_choose_product_divs[p].style.border = "1px solid #e50021";
    };
    detail_page_product_intro_choose_product_divs[1-p].onmouseout = function () {
        detail_page_product_intro_choose_product_divs[1-p].style.border = "1px solid #dcdcdc";
    }
    detail_page_product_intro_choose_product_divs[p].onmouseout = function () {
        detail_page_product_intro_choose_product_divs[p].style.border = "1px solid #e50021";
    }
    detail_page_product_intro_choose_num_wrap_hidden_con_divs[1-p].onmouseover = function () {
        detail_page_product_intro_choose_num_wrap_hidden_con_divs[1-p].style.border = "1px solid #e50021";
        detail_page_product_intro_choose_num_wrap_hidden_con_divs[1-p].style.color = "#333";
    };
    detail_page_product_intro_choose_num_wrap_hidden_con_divs[1-p].onmouseout = function () {
        detail_page_product_intro_choose_num_wrap_hidden_con_divs[1-p].style.border = "1px dashed #dcdcdc";
        detail_page_product_intro_choose_num_wrap_hidden_con_divs[1-p].style.color = "#cbcbcb";
    };
    detail_page_product_intro_choose_num_wrap_hidden_con_divs[p].onmouseover = function () {
        detail_page_product_intro_choose_num_wrap_hidden_con_divs[p].style.border = "1px solid #e50021";
    };
    detail_page_product_intro_choose_num_wrap_hidden_con_divs[p].onmouseout = function () {
        detail_page_product_intro_choose_num_wrap_hidden_con_divs[p].style.border = "1px solid #dcdcdc";
    };
}

/*当点击产品净含量的时候对应的产品的边框变为红色、右下角出现被选中的图标*/
function showProduct(p){
    for(var j = 0;j<detail_page_product_intro_choose_num_wrap_hidden_con_divs.length;j++){
        detail_page_product_intro_choose_product_divs[j].style.border = "1px solid #dcdcdc";
        detail_page_product_intro_choose_product_divs[j].className = "unselected";
        detail_page_product_intro_choose_num_wrap_hidden_con_divs[j].style.border = "1px dashed #dcdcdc";
        detail_page_product_intro_choose_num_wrap_hidden_con_divs[j].style.color = "#cbcbcb";
    }
    detail_page_product_intro_choose_product_divs[p].style.border = "1px solid #e50021";
    detail_page_product_intro_choose_product_divs[p].className = "selected";
    detail_page_product_intro_choose_num_wrap_hidden_con_divs[p].style.border = "1px solid #dcdcdc";
    detail_page_product_intro_choose_num_wrap_hidden_con_divs[p].style.color = "#333";
    detail_page_product_intro_choose_product_divs[1-p].onmouseover = function () {
        detail_page_product_intro_choose_product_divs[1-p].style.border = "1px solid #e50021";
    };
    detail_page_product_intro_choose_product_divs[p].onmouseover = function () {
        detail_page_product_intro_choose_product_divs[p].style.border = "1px solid #e50021";
    };
    detail_page_product_intro_choose_product_divs[1-p].onmouseout = function () {
        detail_page_product_intro_choose_product_divs[1-p].style.border = "1px solid #dcdcdc";
    }
    detail_page_product_intro_choose_product_divs[p].onmouseout = function () {
        detail_page_product_intro_choose_product_divs[p].style.border = "1px solid #e50021";
    }
}

/*当点击显示的产品净含量的时候，隐藏的产品显示，边框变为红色、右下角出现被选中的图标，并且对应的的边框变为实线，字体颜色加深*/
function showHiddenProduct(p){
    for(var j = 0;j<detail_page_product_intro_choose_num_wrap_show_con_divs.length;j++){
        detail_page_product_intro_choose_num_wrap_show_con_divs[j].style.border = "1px solid #dcdcdc";
        detail_page_product_intro_choose_num_wrap_show_con_divs[j].className = "unselected";
        detail_page_product_intro_choose_product_hidden_divs[j].style.border = "1px dashed #dcdcdc";
        detail_page_product_intro_choose_product_hidden_divs_a[j].style.color = "#ccc";
        detail_page_product_intro_choose_product_hidden_divs_img[j].style.opacity = "0.5";
    }
    detail_page_product_intro_choose_num_wrap_show_con_divs[p].style.border = "1px solid #e50021";
    detail_page_product_intro_choose_num_wrap_show_con_divs[p].className = "selected";
    detail_page_product_intro_choose_num_wrap_show_con_divs[p].style.color = "#333";
    detail_page_product_intro_choose_product_hidden.style.display = "block";
    detail_page_product_intro_choose_product_hidden_divs[p].style.border = "1px solid #dcdcdc";
    detail_page_product_intro_choose_product_hidden_divs_a[p].style.color = "#333";
    detail_page_product_intro_choose_product_hidden_divs_img[p].style.opacity = "1";
    detail_page_product_intro_choose_product_hidden_divs[p].onmouseover = function () {
        detail_page_product_intro_choose_product_hidden_divs[p].style.border = "1px solid #e50021";
    };
    detail_page_product_intro_choose_product_hidden_divs[p].onmouseout = function () {
        detail_page_product_intro_choose_product_hidden_divs[p].style.border = "1px solid #dcdcdc";
    };
    detail_page_product_intro_choose_product_hidden_divs[1-p].onmouseover = function () {
        detail_page_product_intro_choose_product_hidden_divs[1-p].style.border = "1px solid #e50021";
        detail_page_product_intro_choose_product_hidden_divs_a[1-p].style.color = "#333";
    };
    detail_page_product_intro_choose_product_hidden_divs[1-p].onmouseout = function () {
        detail_page_product_intro_choose_product_hidden_divs[1-p].style.border = "1px dashed #dcdcdc";
        detail_page_product_intro_choose_product_hidden_divs_a[1-p].style.color = "#ccc";
    };
    detail_page_product_intro_choose_num_wrap_show_con_divs[1-p].onmouseover = function(){
        detail_page_product_intro_choose_num_wrap_show_con_divs[1-p].style.border = "1px solid #e50021";
    };
    detail_page_product_intro_choose_num_wrap_show_con_divs[1-p].onmouseout = function () {
        detail_page_product_intro_choose_num_wrap_show_con_divs[1-p].style.border = "1px solid #dcdcdc";
    }
}

/*当影藏的产品点击的时候，隐藏的产品隐藏*/
function hiddenHiddenProduct(p){
    for(var j = 0;j<detail_page_product_intro_choose_num_wrap_show_con_divs.length;j++){
        detail_page_product_intro_choose_product_divs[j].style.border = "1px solid #dcdcdc";
        detail_page_product_intro_choose_product_divs[j].className = "unselected";
        detail_page_product_intro_choose_num_wrap_show_con_divs[j].style.border = "1px solid #dcdcdc";
        detail_page_product_intro_choose_num_wrap_show_con_divs[j].className = "unselected";
        detail_page_product_intro_choose_num_wrap_hidden_con_divs[j].style.border = "1px dashed #dcdcdc";
        detail_page_product_intro_choose_num_wrap_hidden_con_divs[j].style.color = "#cbcbcb";
        detail_page_product_intro_choose_product_divs_a[j].style.color = "#333";
    }
    detail_page_product_intro_choose_product_hidden.style.display = "none";
    detail_page_product_intro_choose_num_wrap_hidden.style.display = "block";
    detail_page_product_intro_choose_product_divs[p].style.border = "1px solid #e50021";
    detail_page_product_intro_choose_product_divs_a[p].style.color = "#333";
    detail_page_product_intro_choose_product_divs[p].className = "selected";
    detail_page_product_intro_choose_product_divs_img[p].style.opacity = "1";
    detail_page_product_intro_choose_num_wrap_hidden_con_divs[p].style.border = "1px solid #dcdcdc";
    detail_page_product_intro_choose_num_wrap_hidden_con_divs[p].style.color = "#333";
    detail_page_product_intro_choose_product_divs[1-p].onmouseover = function () {
        detail_page_product_intro_choose_product_divs[1-p].style.border = "1px solid #e50021";
    };
    detail_page_product_intro_choose_product_divs[p].onmouseover = function () {
        detail_page_product_intro_choose_product_divs[p].style.border = "1px solid #e50021";
    };
    detail_page_product_intro_choose_product_divs[1-p].onmouseout = function () {
        detail_page_product_intro_choose_product_divs[1-p].style.border = "1px solid #dcdcdc";
    }
    detail_page_product_intro_choose_product_divs[p].onmouseout = function () {
        detail_page_product_intro_choose_product_divs[p].style.border = "1px solid #e50021";
    }
    detail_page_product_intro_choose_num_wrap_hidden_con_divs[1-p].onmouseover = function () {
        detail_page_product_intro_choose_num_wrap_hidden_con_divs[1-p].style.border = "1px solid #e50021";
        detail_page_product_intro_choose_num_wrap_hidden_con_divs[1-p].style.color = "#333";
    };
    detail_page_product_intro_choose_num_wrap_hidden_con_divs[1-p].onmouseout = function () {
        detail_page_product_intro_choose_num_wrap_hidden_con_divs[1-p].style.border = "1px dashed #dcdcdc";
        detail_page_product_intro_choose_num_wrap_hidden_con_divs[1-p].style.color = "#cbcbcb";
    };
    detail_page_product_intro_choose_num_wrap_hidden_con_divs[p].onmouseover = function () {
        detail_page_product_intro_choose_num_wrap_hidden_con_divs[p].style.border = "1px solid #e50021";
    };
    detail_page_product_intro_choose_num_wrap_hidden_con_divs[p].onmouseout = function () {
        detail_page_product_intro_choose_num_wrap_hidden_con_divs[p].style.border = "1px solid #dcdcdc";
    }

}

/*-----------------------------------------------选择产品部分的JS结束-------------------------------------------------------------------*/


/*----------------------------------------------下面是送货至部分的JS--------------------------------------------------------------------*/
/*点击送货地址的时候出现详细地址内容框*/
var detail_page_product_intro_text_info_send_h3_span = document.querySelectorAll("#detail_page_product_intro_text_info_send>h3>span");
var send_selected = document.querySelector("#send_selected");
/*detail_page_product_intro_text_info_send_h3_span[0].onclick = function () {
    send_selected.style.display = "block";
};*/
/*当点击上面的区时，对应的详细地址显示，其他的未点击的地址隐藏*/
/*var send_selected_area = document.querySelector("#send_selected_area");*/
var send_selected_area_lis = document.querySelectorAll("#send_selected_area>li");
var send_selected_area_child_div_divs = document.querySelectorAll("#send_selected_area_child_div>div");
function showSelectedArea(n){
    for(var j = 0;j<send_selected_area_lis.length;j++){
        send_selected_area_child_div_divs[j].style.display = "none";
        send_selected_area_lis[j].style.background = "#f7f7f7";
        send_selected_area_lis[j].style.borderBottom = "1px solid #f7f7f7"
    }
    send_selected_area_child_div_divs[n].style.display = "block";
    send_selected_area_lis[n].style.background = "white";
    send_selected_area_lis[n].style.borderBottom = "2px solid #fff";
}
/*当点击省份中的a标签的时候，县区的显示，被点击的a标签的背景颜色和字体颜色均发生改变*/
var province_allA = document.querySelectorAll("#province a");
var tab_01 = document.querySelector("#tab_01");
var tab_02 = document.querySelector("#tab_02");
var tab_03 = document.querySelector("#tab_03");
var county_allDiv = document.querySelectorAll("#county>div");
var county_allA = document.querySelectorAll("#county a");
var district_allDiv = document.querySelectorAll("#district>div");
var district_allA = document.querySelectorAll("#district a");
function showSelectedCounty(c){
    for(var j = 0;j<province_allA.length;j++){
        province_allA[j].style.background = "#fff";
        province_allA[j].style.color = "#333";
        county_allDiv[j].style.display = "none";
    }
    for(var b = 0;b<send_selected_area_child_div_divs.length;b++){
        send_selected_area_child_div_divs[b].style.display = "none";
        send_selected_area_lis[b].style.background = "#f7f7f7";
        send_selected_area_lis[b].style.borderBottom = "1px solid #f7f7f7";
    }
    send_selected_area_lis[1].style.background = "#fff";
    send_selected_area_lis[1].style.borderBottom = "2px solid #fff";
    send_selected_area_child_div_divs[1].style.display = "block";
    county_allDiv[c].style.display = "block";
    province_allA[c].style.background = "#ff966e";
    province_allA[c].style.color = "#fff";
    tab_01.innerHTML = province_allA[c].innerHTML;
    tab_02.innerHTML = "请选择";
    tab_03.innerHTML = "请选择";
    tab_03.style.display = "none";
}
/*当点击县区中的a标签的时候，县区的显示，被点击的a标签的背景颜色和字体颜色均发生改变*/
function showSelectedDistrict(d){
    for(var j = 0;j<county_allA.length;j++){
        county_allA[j].style.background = "#fff";
        county_allA[j].style.color = "#333";
    }
    for(var b = 0;b<send_selected_area_child_div_divs.length;b++){
        send_selected_area_child_div_divs[b].style.display = "none";
        send_selected_area_lis[b].style.background = "#f7f7f7";
        send_selected_area_lis[b].style.borderBottom = "1px solid #f7f7f7"
    }
    for(var e = 0;e<district_allDiv.length;e++){
        district_allDiv[e].style.display = "none";
    }
    send_selected_area_child_div_divs[2].style.display = "block";
    tab_03.style.background = "#fff";
    tab_03.style.borderBottom = "2px solid #fff";
    tab_03.style.display = "block";
    district_allDiv[d].style.display = "block";
    county_allA[d].style.background = "#ff966e";
    county_allA[d].style.color = "#fff";
    tab_02.innerHTML = county_allA[d].innerHTML;
    tab_03.innerHTML = "请选择";
}
/*当点击第三块地址的时候，将送货地址改为tab栏的三个地址之和，并且关闭隐藏部分内容*/
for(var f = 0;f<district_allA.length;f++){
    district_allA[f].index = f;
    district_allA[f].onclick = function () {
        for(var j = 0;j<district_allA.length;j++){
            district_allA[j].style.background = "#fff";
            district_allA[j].style.color = "#333";
        }
        this.style.background = "#ff966e";
        this.style.color = "#fff";
        tab_03.innerHTML = this.innerHTML;
        send_selected.style.display = "none";
        detail_page_product_intro_text_info_send_h3_span[0].innerHTML = tab_01.innerHTML+tab_02.innerHTML+tab_03.innerHTML;
    }
}
/*点击送货至的时候展开隐藏区*/
detail_page_product_intro_text_info_send_h3_span[0].addEventListener("click",function(event){
    send_selected.style.display = "block";
    event.stopPropagation();//阻止冒泡事件
});
send_selected.onclick = function (event) {
    event.stopPropagation();//阻止冒泡事件
};
/*点击关闭按钮的时候隐藏详细地址内容框*/
var send_selected_close = document.querySelector("#send_selected_close");
send_selected_close.onclick = function () {
    send_selected.style.display = "none";
};
/*当点击网页除隐藏部分外的任何一处的时候均可以关闭隐藏部分的容器*/
var html = document.querySelectorAll("html");
html[0].onclick = function(){
    send_selected.style.display = "none";
};

/*-------------------------------------------送货至部分JS结束-----------------------------------------------------------------------*/


/*------------------------------------------下面是加入购物车部分的JS----------------------------------------------------------------*/
var detail_page_product_intro_text_info_shopCar_p = document.querySelectorAll("#detail_page_product_intro_text_info_shopCar>p");
detail_page_product_intro_text_info_shopCar_p[0].onmouseover = function () {
    detail_page_product_intro_text_info_shopCar_p[0].style.backgroundImage = "url(img/detail_sprit24.png)";
    detail_page_product_intro_text_info_shopCar_p[0].style.backgroundRepeat = "no-repeat";
    detail_page_product_intro_text_info_shopCar_p[0].style.backgroundPosition = "0 -643px";
};
detail_page_product_intro_text_info_shopCar_p[0].onmouseout = function () {
    detail_page_product_intro_text_info_shopCar_p[0].style.backgroundImage = "url(img/detail_sprit24.png)";
    detail_page_product_intro_text_info_shopCar_p[0].style.backgroundRepeat = "no-repeat";
    detail_page_product_intro_text_info_shopCar_p[0].style.backgroundPosition = "0 -692px";
};
/*点击购物车的时候显示隐藏背景*/
var shopCar_onclick_background = document.querySelector("#shopCar_onclick_background");
detail_page_product_intro_text_info_shopCar_p[0].onclick = function () {
    shopCar_onclick_background.style.display = "block";
};
/*点击关闭按钮的时候隐藏背景*/
var shopCar_onclick_background_content_span = document.querySelectorAll("#shopCar_onclick_background_content>span");
shopCar_onclick_background_content_span[0].onclick = function () {
    shopCar_onclick_background.style.display = "none";
};
/*当点击向上箭头的时候输入框的数字增加，当点击向下箭头的时候输入框的数字减少*/
var num = document.querySelector("#num");
var num_add = document.querySelector("#num_add");
var num_reduce = document.querySelector("#num_reduce");
num_add.onclick = function(){
    num.innerHTML = parseInt(num.innerHTML)+1;
    num_reduce.style.backgroundImage = "url(img/detail_sprit24.png)";
    num_reduce.style.backgroundRepeat = "no-repeat";
    num_reduce.style.backgroundPosition = "-124px -73px";
};
num_reduce.onclick = function () {
    /*当数字大于1时，向下箭头按钮变亮；当数字小于1时，向下箭头按钮变暗*/
    if(num.innerHTML > 1){
        num.innerHTML = num.innerHTML-1;
    }else{
        num_reduce.style.backgroundImage = "url(img/detail_sprit24.png)";
        num_reduce.style.backgroundRepeat = "no-repeat";
        num_reduce.style.backgroundPosition = "-148px -73px";
    }
};
/*--------------------------------------------------------加入购物车部分的JS结束--------------------------------------------------------*/


/*-------------------------------------------------------下面是右侧看了又看部分的JS-----------------------------------------------------*/
var detail_page_product_intro_look_change = document.querySelector("#detail_page_product_intro_look_change");
var detail_page_product_intro_look_uls = document.querySelectorAll("#detail_page_product_intro_look>div>ul");
var r = 0;
detail_page_product_intro_look_change.onclick = function(){
    r++;
    if(r > 2){
        r = 0;
    }
    for(var j = 0;j<detail_page_product_intro_look_uls.length;j++){
        detail_page_product_intro_look_uls[j].style.display = "none";
    }
    detail_page_product_intro_look_uls[r].style.display = "block";
};
/*--------------------------------------------------------右侧看了又看部分的JS结束-----------------------------------------------------*/


/*--------------------------------------------------------下面是第二部分商品介绍部分的JS-----------------------------------------------*/
/*查看更多部分、点击查看更多的按钮的时候隐藏第一部分内容、显示第二部分内容\并且规格及包装部的背景颜色和字体颜色发生改变*/
var look_more = document.querySelector("#look_more");
var detail_page_shop_info_right_product_intro_para_main = document.querySelector("#detail_page_shop_info_right_product_intro_para_main");
var detail_page_shop_info_right_product_intro_para_main_box_02 = document.querySelector("#detail_page_shop_info_right_product_intro_para_main_box_02");
var detail_page_shop_info_right_product_intro_hd_tab_a = document.querySelectorAll("#detail_page_shop_info_right_product_intro_hd_tab>li>a");
var detail_page_shop_info_right_product_intro_para_main_footer = document.querySelector("#detail_page_shop_info_right_product_intro_para_main_footer");
look_more.onclick = function(){
    detail_page_shop_info_right_product_intro_para_main.style.display = "none";
    detail_page_shop_info_right_product_intro_para_main_box_02.style.display = "block";
    for(var j = 0;j<detail_page_shop_info_right_product_intro_hd_tab_a.length;j++){
        detail_page_shop_info_right_product_intro_hd_tab_a[j].style.background = "#fafafa";
        detail_page_shop_info_right_product_intro_hd_tab_a[j].style.color = "#333";
    }
    detail_page_shop_info_right_product_intro_hd_tab_a[2].style.background = "#e60012";
    detail_page_shop_info_right_product_intro_hd_tab_a[2].style.color = "#fff";
};
/*点击售后服务的时候、第一部分和第二部分的内容均隐藏、并且售后服务的字体和背景颜色均发生改变*/
detail_page_shop_info_right_product_intro_hd_tab_a[3].onclick = function () {
    detail_page_shop_info_right_product_intro_para_main.style.display = "none";
    detail_page_shop_info_right_product_intro_para_main_box_02.style.display = "none";
    detail_page_shop_info_right_product_intro_para_main_footer.style.display = "block";
    for(var j = 0;j<detail_page_shop_info_right_product_intro_hd_tab_a.length;j++){
        detail_page_shop_info_right_product_intro_hd_tab_a[j].style.background = "#fafafa";
        detail_page_shop_info_right_product_intro_hd_tab_a[j].style.color = "#333";
    }
    detail_page_shop_info_right_product_intro_hd_tab_a[3].style.background = "#e60012";
    detail_page_shop_info_right_product_intro_hd_tab_a[3].style.color = "#fff";
};
/*点击规格及包装的效果跟查看更多的效果一样*/
detail_page_shop_info_right_product_intro_hd_tab_a[2].onclick = function () {
    detail_page_shop_info_right_product_intro_para_main.style.display = "none";
    detail_page_shop_info_right_product_intro_para_main_box_02.style.display = "block";
    for(var j = 0;j<detail_page_shop_info_right_product_intro_hd_tab_a.length;j++){
        detail_page_shop_info_right_product_intro_hd_tab_a[j].style.background = "#fafafa";
        detail_page_shop_info_right_product_intro_hd_tab_a[j].style.color = "#333";
    }
    detail_page_shop_info_right_product_intro_hd_tab_a[2].style.background = "#e60012";
    detail_page_shop_info_right_product_intro_hd_tab_a[2].style.color = "#fff";
};
/*点击评价的时候、就显示好评及客户评论、其他的都隐藏*/
detail_page_shop_info_right_product_intro_hd_tab_a[1].onclick = function () {
    detail_page_shop_info_right_product_intro_para_main.style.display = "none";
    detail_page_shop_info_right_product_intro_para_main_box_02.style.display = "none";
    detail_page_shop_info_right_product_intro_para_main_footer.style.display = "none";
    for(var j = 0;j<detail_page_shop_info_right_product_intro_hd_tab_a.length;j++){
        detail_page_shop_info_right_product_intro_hd_tab_a[j].style.background = "#fafafa";
        detail_page_shop_info_right_product_intro_hd_tab_a[j].style.color = "#333";
    }
    detail_page_shop_info_right_product_intro_hd_tab_a[1].style.background = "#e60012";
    detail_page_shop_info_right_product_intro_hd_tab_a[1].style.color = "#fff";
};
/*点击商品介绍的时候显示第一部分内容、隐藏第二部分内容*/
detail_page_shop_info_right_product_intro_hd_tab_a[0].onclick = function () {
    detail_page_shop_info_right_product_intro_para_main.style.display = "block";
    detail_page_shop_info_right_product_intro_para_main_box_02.style.display = "none";
    detail_page_shop_info_right_product_intro_para_main_footer.style.display = "block";
    for(var j = 0;j<detail_page_shop_info_right_product_intro_hd_tab_a.length;j++){
        detail_page_shop_info_right_product_intro_hd_tab_a[j].style.background = "#fafafa";
        detail_page_shop_info_right_product_intro_hd_tab_a[j].style.color = "#333";
    }
    detail_page_shop_info_right_product_intro_hd_tab_a[0].style.background = "#e60012";
    detail_page_shop_info_right_product_intro_hd_tab_a[0].style.color = "#fff";
};

/*评论头部的tab页*/
var detail_page_shop_info_right_product_intro_para_main_comment_con_tab_title_lis = document.querySelectorAll("#detail_page_shop_info_right_product_intro_para_main_comment_con_tab_title li");
var detail_page_shop_info_right_product_intro_para_main_comment_con_tab_title_i = document.querySelectorAll("#detail_page_shop_info_right_product_intro_para_main_comment_con_tab_title i");
var content_main_divs = document.querySelectorAll("#content_main>div");
function tabChange(l){
    for(var j = 0;j<detail_page_shop_info_right_product_intro_para_main_comment_con_tab_title_lis.length;j++){
        detail_page_shop_info_right_product_intro_para_main_comment_con_tab_title_lis[j].style.color = "#656565";
        detail_page_shop_info_right_product_intro_para_main_comment_con_tab_title_lis[j].style.borderBottom = "none";
        detail_page_shop_info_right_product_intro_para_main_comment_con_tab_title_i[j].style.backgroundImage = "url(img/detail_sprit24.png)";
        detail_page_shop_info_right_product_intro_para_main_comment_con_tab_title_i[j].style.backgroundRepeat = "no-repeat";
        detail_page_shop_info_right_product_intro_para_main_comment_con_tab_title_i[j].style.backgroundPosition = "-38px -17px";
        content_main_divs[j].style.display = "none";
    }
    detail_page_shop_info_right_product_intro_para_main_comment_con_tab_title_lis[l].style.color = "#ff3b3c";
    detail_page_shop_info_right_product_intro_para_main_comment_con_tab_title_lis[l].style.borderBottom = "2px solid #ff3b3c";
    detail_page_shop_info_right_product_intro_para_main_comment_con_tab_title_i[l].style.backgroundImage = "url(img/detail_sprit24.png)";
    detail_page_shop_info_right_product_intro_para_main_comment_con_tab_title_i[l].style.backgroundRepeat = "no-repeat";
    detail_page_shop_info_right_product_intro_para_main_comment_con_tab_title_i[l].style.backgroundPosition = "-56px -17px";
    content_main_divs[l].style.display = "block";
}

/*下面的换页部分*/
var change_num_allA = document.querySelectorAll(".change_num a");
var first_page_a = document.querySelector("#first_page a");
var current_page_a = document.querySelectorAll(".current_page a");
var change_page_pre = document.querySelector("#change_page_pre");
var last_page_a = document.querySelector("#last_page a");
var change_page_next = document.querySelector("#change_page_next");
var a = 0;
/*不是当前页点击的时候*/
for(var m = 0;m<change_num_allA.length;m++){
    change_num_allA[m].index = m;
    change_num_allA[m].onclick = function () {
        for(var j = 0;j<change_num_allA.length;j++){
            change_num_allA[j].style.border = "1px solid #ccc";
            change_num_allA[j].style.color = "#666";
            change_num_allA[j].style.background = "#fff";
            current_page_a[0].style.border = "1px solid #ccc";
            current_page_a[0].style.color = "#666";
            current_page_a[0].style.background = "#fff";
        }
        this.style.border = "1px solid #c00";
        this.style.color = "#c00";
        this.style.background = "#ffe3e3";
        change_page_pre.style.display = "block";
        change_page_next.style.display = "block";
    };
}
/*第一页点击的时候*/
first_page_a.onclick = function () {
    var change_num_allA = document.querySelectorAll(".change_num a");
    for(var j = 0;j<change_num_allA.length;j++){
        change_num_allA[j].style.border = "1px solid #ccc";
        change_num_allA[j].style.color = "#666";
        change_num_allA[j].style.background = "#fff";
    }
    first_page_a.style.border = "1px solid #c00";
    first_page_a.style.color = "#c00";
    first_page_a.style.background = "#ffe3e3";
    change_page_pre.style.display = "none";
    change_page_next.style.display = "block";
};
/*最后一页点击的时候*/
last_page_a.onclick = function () {
    var change_num_allA = document.querySelectorAll(".change_num a");
    for(var j = 0;j<change_num_allA.length;j++){
        change_num_allA[j].style.border = "1px solid #ccc";
        change_num_allA[j].style.color = "#666";
        change_num_allA[j].style.background = "#fff";
    }
    last_page_a.style.border = "1px solid #c00";
    last_page_a.style.color = "#c00";
    last_page_a.style.background = "#ffe3e3";
    change_page_next.style.display = "none";
    change_page_pre.style.display = "block";
};
/*当上一页点击的时候*/
/*当下一页点击的时候*/



/*----------------------------------------------------------第二部分商品介绍部分的JS结束-----------------------------------------------*/


/*--------------------------------------------下面是第一、第二个吸顶式导航条的JS---------------------------------------------------------*/
var top_nav_bar_wrap_two = document.querySelector("#top_nav_bar_wrap_two");
var top_nav_bar_wrap = document.querySelector("#top_nav_bar_wrap");
document.onscroll = function(){
    var target = document.body.scrollTop||document.documentElement.scrollTop;
    if(target<137){
        top_nav_bar_wrap_two.style.display = "none";
        top_nav_bar_wrap.style.display = "none";
    }else if(target<1214){
        top_nav_bar_wrap_two.style.display = "block";
        top_nav_bar_wrap.style.display = "none";
    }else{
        top_nav_bar_wrap_two.style.display = "none";
        top_nav_bar_wrap.style.display = "block";
    }
};
/*第一个吸顶式导航条tab页的JS*/
var top_nav_bar_wrap_right_allA = document.querySelectorAll("#top_nav_bar_wrap_right a");
/*商品介绍*/
top_nav_bar_wrap_right_allA[0].onclick = function () {
    detail_page_shop_info_right_product_intro_para_main.style.display = "block";
    detail_page_shop_info_right_product_intro_para_main_box_02.style.display = "none";
    detail_page_shop_info_right_product_intro_para_main_footer.style.display = "block";
    for(var j = 0;j<detail_page_shop_info_right_product_intro_hd_tab_a.length;j++){
        top_nav_bar_wrap_right_allA[j].style.background = "#fafafa";
        top_nav_bar_wrap_right_allA[j].style.color = "#333";
    }
    top_nav_bar_wrap_right_allA[0].style.background = "#e60012";
    top_nav_bar_wrap_right_allA[0].style.color = "#fff";
};
/*评价*/
top_nav_bar_wrap_right_allA[1].onclick = function () {
    detail_page_shop_info_right_product_intro_para_main.style.display = "none";
    detail_page_shop_info_right_product_intro_para_main_box_02.style.display = "none";
    detail_page_shop_info_right_product_intro_para_main_footer.style.display = "none";
    for(var j = 0;j<detail_page_shop_info_right_product_intro_hd_tab_a.length;j++){
        top_nav_bar_wrap_right_allA[j].style.background = "#fafafa";
        top_nav_bar_wrap_right_allA[j].style.color = "#333";
    }
    top_nav_bar_wrap_right_allA[1].style.background = "#e60012";
    top_nav_bar_wrap_right_allA[1].style.color = "#fff";
};
/*规格及包装*/
top_nav_bar_wrap_right_allA[2].onclick = function () {
    detail_page_shop_info_right_product_intro_para_main.style.display = "none";
    detail_page_shop_info_right_product_intro_para_main_box_02.style.display = "block";
    for(var j = 0;j<detail_page_shop_info_right_product_intro_hd_tab_a.length;j++){
        top_nav_bar_wrap_right_allA[j].style.background = "#fafafa";
        top_nav_bar_wrap_right_allA[j].style.color = "#333";
    }
    top_nav_bar_wrap_right_allA[2].style.background = "#e60012";
    top_nav_bar_wrap_right_allA[2].style.color = "#fff";
};
/*售后服务*/
top_nav_bar_wrap_right_allA[3].onclick = function () {
    detail_page_shop_info_right_product_intro_para_main.style.display = "none";
    detail_page_shop_info_right_product_intro_para_main_box_02.style.display = "none";
    detail_page_shop_info_right_product_intro_para_main_footer.style.display = "block";
    for(var j = 0;j<detail_page_shop_info_right_product_intro_hd_tab_a.length;j++){
        top_nav_bar_wrap_right_allA[j].style.background = "#fafafa";
        top_nav_bar_wrap_right_allA[j].style.color = "#333";
    }
    top_nav_bar_wrap_right_allA[3].style.background = "#e60012";
    top_nav_bar_wrap_right_allA[3].style.color = "#fff";
};
/*--------------------------------------------第一、第二个吸顶式导航条结束---------------------------------------------------------------*/



/*------------------------------------------下面是放大镜部分的JS------------------------------------------------------------------------*/
var arrImg = ['img/detail_page_product_intro_preview_big_01.jpg','img/detail_page_product_intro_preview_big_02.jpg','img/detail_page_product_intro_preview_big_03.jpg','img/detail_page_product_intro_preview_big_04.jpg','img/detail_page_product_intro_preview_big_05.jpg'];
var detail_page_product_intro_preview_bigImg_img = document.querySelectorAll("#detail_page_product_intro_preview_bigImg>img");
/*当鼠标悬停的时候切换到对应的图片*/
function changeImg(m){
    detail_page_product_intro_preview_bigImg_img[0].src = arrImg[m];
}
/*下面是放大镜效果*/
/*获取大图盒子*/
var detail_page_product_intro_preview_bigImg_border = document.querySelector("#detail_page_product_intro_preview_bigImg_border");
/*获取大图盒子里面的内容*/
var detail_page_product_intro_preview_bigImg = document.querySelector("#detail_page_product_intro_preview_bigImg");
/*获取大图图片*/
var detail_page_product_intro_preview_bigImg_pic = document.querySelectorAll("#detail_page_product_intro_preview_bigImg>img");
/*获取鼠标可以移动的盒子*/
var float_wrap = document.querySelector("#float_wrap");
/*获取隐藏的大图盒子*/
var bigImg_hidden = document.querySelector("#bigImg_hidden");
/*获取大图隐藏的图片*/
var bigImg_hidden_img = document.querySelectorAll("#bigImg_hidden>img");
/*获取鼠标拖动的对象*/
var pic_pointed = document.querySelector("#pic_pointed");
/*设置鼠标悬停后的样式*/
float_wrap.onmouseover = function(){
    pic_pointed.style.display = "block";
    bigImg_hidden.style.display = "block";
    bigImg_hidden_img[0].src = detail_page_product_intro_preview_bigImg_pic[0].src;
};
/*设置鼠标移开后的样式*/
float_wrap.onmouseout = function () {
    pic_pointed.style.display = "none";
    bigImg_hidden.style.display = "none";
};
/*获取鼠标移动时的事件，获取鼠标的坐标*/
float_wrap.onmousemove = function(ev){
    var event = ev||window.event;
    var left = event.clientX-detail_page_product_intro_preview_bigImg_border.offsetLeft-detail_page_product_intro_preview_bigImg.offsetLeft-pic_pointed.offsetWidth/2;
    var top = event.clientY-detail_page_product_intro_preview_bigImg_border.offsetTop-detail_page_product_intro_preview_bigImg.offsetTop-pic_pointed.offsetHeight/2;
    //限制盒子移动的区域不能越过小盒子
    if(left<0){
        left = 0;
    }else if(left>detail_page_product_intro_preview_bigImg.offsetWidth-pic_pointed.offsetWidth){
        left = detail_page_product_intro_preview_bigImg.offsetWidth-pic_pointed.offsetWidth;
    }
    if(top<0){
        top = 0;
    }else if(top>detail_page_product_intro_preview_bigImg.offsetHeight-pic_pointed.offsetHeight){
        top = detail_page_product_intro_preview_bigImg.offsetHeight-pic_pointed.offsetHeight;
    }
    //设置其随鼠标移动而改变
    pic_pointed.style.left = left + "px";;
    pic_pointed.style.top = top + "px";
    //计算大图应该移动的距离
    var x = left/(detail_page_product_intro_preview_bigImg.offsetWidth - pic_pointed.offsetWidth);
    var y = top/(detail_page_product_intro_preview_bigImg.offsetHeight-pic_pointed.offsetHeight);
    //图片的位置发生改变
    bigImg_hidden_img[0].style.left = -x*(detail_page_product_intro_preview_bigImg.offsetWidth - pic_pointed.offsetWidth)+"px";
    bigImg_hidden_img[0].style.top = -y*(detail_page_product_intro_preview_bigImg.offsetHeight-pic_pointed.offsetHeight)+"px";
};
/*-----------------------------------------------------------放大镜部分的JS结束-----------------------------------------------------------------------------------------*/


/*----------------------------------------------------------下面是右侧返回顶部的JS------------------------------------------------------------------------------------*/
/*当鼠标点击的时候滚动条滚动到顶部，利用定时器来做*/
var detail_page_right_nav_bottom_back = document.querySelector("#detail_page_right_nav_bottom_back");
var back_timer;
var distance = 0;
/*获取当前滚动条距离顶部的距离*/
detail_page_right_nav_bottom_back.onclick = function () {
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