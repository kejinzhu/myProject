//获取元素
let outer = $("#outer")[0];
let $swiper = $("#swiper");
let $dot = $("#dot");
let imgL;
//ajax获取数据
$.ajax({
    url:'json/data.json',
    type:'get',
    async:false,
    success: function (data) {
        //执行bindData函数
        bindData(data);
    }
});
//绑定数据
function bindData(data){
    let strImg = ``;
    let strDot = ``;
    $(data).each(function (index) {
        strImg+=`<img src="" alt="" data-src="img/${index+1}.jpg">`;
        strDot+=`<li></li>`;
    });
    //将获取到的数据渲染到页面中
    $swiper.html(strImg);
    $dot.html(strDot);
    loadImg(data);
    //获取图片长度
    imgL = data.length;
    //初始让第一个小圆点被选中
    $("#dot li").eq(0).addClass("selected");
    outer.timer = setInterval(slide,2000);//设置定时器
}
//加载图片
function loadImg(data){
    $("#swiper img").each(function (index) {
        let newImg = new Image();//实例化一个图片对象
        let trueAddress = data[index]["img"];
        let _this = this;
        newImg.src = trueAddress;
        //this.src = trueAddress;
        newImg.onload = function () {
            _this.src = trueAddress;
            newImg = null;
        };
    })
}
//图片渐隐渐现效果
//设置步长
outer.step=0;
function slide(n){
    outer.step++;
    outer.step = n!==undefined?n:outer.step%imgL;
    $("#swiper img").stop().eq(outer.step).fadeIn().siblings().fadeOut();
    $("#dot li").stop().eq(outer.step).addClass("selected").siblings().removeClass("selected");
}
//外容器鼠标移入移出的效果
$(outer).hover(function () {
    //鼠标移入
    clearInterval(outer.timer);
    $("a").css({
        display:"block"
    })
}, function () {
    //鼠标移出
    outer.timer = setInterval(slide,2000);
    $("a").css({
        display:"none"
    })
});
//设置小圆点的样式
$("#dot li").hover(function () {
    $(this).addClass("selected").siblings().removeClass("selected");
    slide($(this).index());
});
//控制左右箭头
$("#left").click(function () {
    outer.step-=2;
    if(outer.step<-1){
        outer.step = imgL-2;
    }
    slide();
});
//右箭头
$("#right").click(function () {
    slide();
});