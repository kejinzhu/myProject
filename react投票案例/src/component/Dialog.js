import React from "react";
export default function Dialog(props) {
    // 自己处理的样式
    let objStyle = {
        width:'50%',
        margin:'0 auto'
    };
    let {type,content,children} = props;
    // 类型处理
    let typeVal = type||'系统提示';
    if(typeof type ==="number"){
        switch (type) {
            case 0:
                typeVal = '系统提示';
                break;
            case 1:
                typeVal = '系统警告';
                break;
            case 2:
                typeVal = '系统错误';
                break;      
        }
    }
    return <section className="panel panel-default " style={objStyle}>
        <div className="panel-heading">
            <h3 className="panel-title">
                系统提示：
        </h3>
        </div>
        <div className="panel-body">
            {content}
        </div>
        {/*如果传入了children，我们把内容放到尾部，不传什么都不显示*/}
        {
            children?<div className="panel-footer">{React.Children.map(children,item=>item)}
        </div>:null}
    </section>
}

