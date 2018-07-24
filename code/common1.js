/**
 * Created by Administrator on 2018/5/14.
 */

/**
 * 封装了一个兼容版本的使用innerText/textContent来获取标签间文本内容的函数
 * @param ele
 * @returns {*}
 */
function getText(ele){
  // 能力检测:就是要看当前的浏览器是否支持此标签对象的属性或是方法
  if(typeof ele.innerText == 'string'){  // if小括号 里面的判断条件 一般是boolean类型的值或是关系表达式或是逻辑 表达式
    return ele.innerText
  }else {  // 低版本的火狐 浏览器  textContent
    return ele.textContent
  }
}

/**
 * 封装了一个兼容版本的设置标签间文本内容的函数
 * @param ele
 * @param value
 */
function setText(ele,value){
  // 能力检测  就是要看当前的浏览器是否支持此对象的属性或是方法
//    if(ele.innerText){ // 这个判断条件不严谨，会带来问题
  if(typeof ele.innerText == 'string'){
    ele.innerText = value
  }else {   // 火狐 浏览器的方式来设置
    ele.textContent = value
  }
}


/**
 * 封装了一个兼容版本的获取下一个标签节点的函数
 * @param ele
 * @returns {*}
 */
function getNextElement(ele){
  // 能力检测:要看当前的浏览器是否支持此对象的属性或是方法
  if(ele.nextElementSibling) { //谷歌或是火狐 或是高版本的IE浏览器支持的方式
    return ele.nextElementSibling  // 将获取到的下一个标签节点返回
  }else { // 低版本的IE浏览器    nextSibling
    ele = ele.nextSibling   // 获取当前标签的下一个节点
    while(ele&&ele.nodeType !=1){  // 判断一下当前的节点是否存在以及节点类型是什么
      ele = ele.nextSibling   // 在当前的节点基础上再次获取下一个节点
    }
    return ele    // 将找到的节点返回
  }
}


/**
 * 封装了一个兼容版本的获取上一个标签节点的函数
 * @param ele
 * @returns {*}
 */
function getPrevElement(ele){
  // ele是这个函数的一个形参，相当于是变量，只能在函数内部使用
  if(ele&&ele.previousElementSibling) { // 标准的浏览器支持的方式 谷歌  火狐   高版本的IE浏览器
    return ele.previousElementSibling
  }else {
    ele = ele.previousSibling
    while(ele&&ele.nodeType!=1){
      ele = ele.previousSibling  // 在当前的节点的基础上，继承向前获取节点
    }
    return ele
  }
}

/**
 * 封装了一个兼容版本的获取当前元素第一个子标签节点的函数
 * @param ele
 * @returns {*}
 */
function getFirstChild(ele){
  if(ele && ele.firstElementChild){  //标准浏览器支持的方式
    return ele.firstElementChild
  }else {
    ele = ele.firstChild   //先获取一下第一个子节点
    while(ele&&ele.nodeType!=1){
      ele = ele.nextSibling
    }
    return ele
  }
}

/**
 * 封装了一个兼容版本的获取当前元素的最后一个子标签节点的函数
 * @param ele
 * @returns {*}
 */
function getLastChild(ele){
  if(ele && ele.lastElementChild){
    return ele.lastElementChild
  }else {
    if(ele){
      ele = ele.lastChild    // 先获取一下最后一个节点
      while(ele && ele.nodeType !=1){
        ele = ele.previousSibling
      }
      return ele
    }
  }
}






var obj = {
  getNextElement:function (){
    
  },
  getPreviousElemnet:function (){
    
  },
  // 对象是无序属性的集合或键值对的集合
}

var foo = {
  getNextElement:function (){
    
  }
}

//  concat     slice()   slice()