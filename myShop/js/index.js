/**
 * Created by Administrator on 2018/7/18/018.
 */
/*下面开始JS*/
//1.获取元素
let allA = document.querySelectorAll("#header a");
let ul = document.getElementById("shopList");
let data = null;//声明一个变量data用于接收AJAX返回的数据;
//2.通过AJAX获取数据
//2.1实例化一个AJAX对象
let xhr = new XMLHttpRequest();
//2.2打开一个AJAX地址、采用get的方式，并使用同步请求
xhr.open('get','json/product.json',false);
//2.3监听AJAX状态、必须放在open和send之间，绑定的时候状态为1
xhr.onreadystatechange = function () {
  let reg = /^(2|3)\d{2}$/;//用正则匹配2开头或者3开头的状态码
    if(xhr.readyState === 4&&reg.test(xhr.status)){
        //如果ajax的状态为4并且服务器返回的状态码以2或者3开头说明成功
        //由于返回的对象是字符串，用JSON转为对象的格式
        data = JSON.parse(xhr.responseText);
    }
};
//2.4发送AJAX请求
xhr.send();
/*拿到数据之后进行页面渲染*/
utils.boundHtml();
/*循环遍历a标签绑定事件*/
for(let i = 0;i<allA.length;i++){
    allA[i].flag = -1;//添加flag属性，监听升序还是降序
    allA[i].onclick = function () {
        this.flag *= -1;
        //获取a标签上面的排序方法属性
        let val = this.getAttribute("sortMethod");
        //排序call改变this指向
        utils.sortMethod.call(this,val);
        //添加上下箭头的样式
        utils.addArrowColor.call(this);
        //清除上下箭头的样式
        utils.removeArrowColor.call(this);
    }
}