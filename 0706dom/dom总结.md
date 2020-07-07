## 选择器
选中html元素
- document.getElmentsByClassName
- ...

## 操作属性
元素对象.属性

## 修改中内容
元素对象.innerHTML = '新内容'

## 设置css样式
行内样式
    元素对象.style.css属性='值'
添加class 类名
    元素对象.className = 'class类名重新赋值'

## 获取html元素样式兼容性
~~~js
// 获取样式兼容性问题
        function getStyle(el){
            if(el.currentStyle){
                return el.currentStyle
            }else{
                return getComputedStyle(wrap,null)
            }
        }
        console.log(getStyle(wrap).width);
~~~