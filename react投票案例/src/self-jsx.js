/**
 * createElement:创建JSX对象
 * 参数：至少两个type,props,(children这个部分可能没有，可能有多个)
 * @param {*} type 
 * @param {*} props 
 * @param {*} children 
 * 1.创建一个对象(默认有四个属性type/props/ref/key),最后要把这个对象返回
 * 2.根据传递的值修改这个对象
 * type=>传递的type
 * props=>需要做一些处理:大部分传递props中的属性都赋值给了对象props，有一些比较特殊
 * -> 如果是ref或者key，我们需要把传递的props中的这两个属性值，给创建对象的两个属性，而传递的props中把这两个值删除掉
 * -> 把传递的children作为新创建对象的props中的一个属性
 */

function createElement(type, props, children) {
    props = props || {};//处理props
    let obj = {
        type: null,
        props: {
            children: ''
        },
        ref: null,
        key: null
    }
    //=>用传递的type和props覆盖原有的默认值
    //obj = {...obj,type,props};//=>{type:type,props:props}
    obj = { ...obj, type, props: { ...props, children } };
    //=>把ref和key提取出来(并且删除props中的属性)
    'key' in obj.props ? (obj.key = obj.props.key, obj.props.key = undefined) : null;
    'ref' in obj.props ? (obj.ref = obj.props.ref, obj.props.ref = undefined) : null;
    return obj;
}

let objJSX = createElement('h1', {
    id: 'title',
    className: 'title',
    style: { color: 'green' },
    'key': 12,
    'ref': 23
}, '\u73E0\u5CF0\u5CF0\u8BAD');

console.log(objJSX);


/**
 * render:把创建的对象生成对应的DOM元素，最后插入到页面当中
 * 
 */

function render(obj, container, callback) {
    let { type, props } = obj || {},
        newElement = document.createElement(type);

    for (let attr in props) {
        // 不是私有的，直接结束遍历
        if (!props.hasOwnProperty(attr)) { break };
        // 如果当前属性没有值，直接不处理，跳到下一次循环
        if (!props[attr]) { continue };
        let val = props[attr];
        //=>className的处理
        if (attr === 'className') {
            newElement.setAttribute('class', val);
            continue
        };

        //=>style处理
        if (attr === 'style') {
            if (val === '') { continue; }
            for (let styleKey in val) {
                if (val.hasOwnProperty(styleKey)) {
                    newElement['style'][styleKey] = val[styleKey];
                }
            }
            continue;
        }

        //=>处理children
        if (attr === 'children') {
            if (typeof val === 'string') {
                let text = document.createTextNode(val);
                newElement.appendChild(text);
            }
            continue;
        }

        //=>

        //=>基于setAttribute可以让设置的属性表现在HTML的结构上
        newElement.setAttribute[attr] = val;
    }
    container.appendChild(newElement);
    callback && callback();
}

render(objJSX, root, () => {
    console.log('ok~');

})

export {
    createElement,
    render
}

/**
 * {
 * type:'h1',
 * props:{
 *  id:'title',
    className:'title',
    style:styleObj,
    children:'\73EO\u5CF0\u8BAD'
    }
 * },
 * key:null,
 * ref:null
 */