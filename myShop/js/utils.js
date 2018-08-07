/**
 * Created by Administrator on 2018/7/18/018.
 */
/*方法的封装*/
/**
 * 为了防止全局变量的污染、我们采用闭包的形式、用一个对象接收这些方法，并将变量暴露在全局作用域下
 */
(function () {
    /*拿到数据之后进行页面渲染*/
    function boundHtml(){
        /*用ES6的模板字符串进行拼接*/
        let str = '';
        data.forEach(function (item) {
            str += `<li>
            <img src="${item.img}" alt="">
            <p class="title">${item.title}</p>
            <p class="hot">热度:${item.hot}</p>
            <del>$9999</del>
            <span class="price">￥${item.price}</span>
            <p class="time">上架时间:${item.time}</p>
        </li>`;
        });
        ul.innerHTML = str;
    }
    /*写一个排序方法*/
    function sortMethod(val){
        if(val=="time"){
            data.sort(function (a,b) {
                return (new Date(a[val])-new Date(b[val]))*this.flag;
            }.bind(this));
        }else {
            data.sort(function (a,b) {
                return (a[val]-b[val])*this.flag;
            }.bind(this));
        }
        //排序完成之后重新渲染页面、
        boundHtml();
    }
    /*写一个添加上下箭头的样式方法*/
    function addArrowColor(){
        let up = this.children[0];//上箭头
        let down = this.children[1];//下箭头
        if(this.flag>0){
            //升序、上箭头添加bg样式、下箭头清除bg样式
            up.classList.add("bg");
            down.classList.remove("bg");
        }else{
            //降序、上箭头清除bg样式、下箭头添加bg样式
            up.classList.remove("bg");
            down.classList.add("bg");
        }
    }
    /*当点击当前按钮的时候，清除其他按钮上的箭头颜色*/
    function removeArrowColor(){
        for(let i = 0;i<allA.length;i++){
            let up = allA[i].children[0];//上箭头
            let down = allA[i].children[1];//下箭头
            if(this !=allA[i]){
                up.classList.remove("bg");
                down.classList.remove("bg");
                //修改flag回到初始状态
                allA[i].flag = -1;
            }
        }
    }
    let utils = {
        removeArrowColor:removeArrowColor,
        addArrowColor:addArrowColor,
        boundHtml:boundHtml,
        sortMethod:sortMethod
    };
    window.utils = utils;
})();