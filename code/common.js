/**
 * Created by Administrator on 2018/5/14.
 */

// 文本对象
var txt = {

  // 封装了一个设置标签间文本内容的函数
  getText:function (ele){
    // 能力检测:就是要看当前的浏览器是否支持此标签对象的属性或是方法
    if(typeof ele.innerText == 'string'){  // if小括号 里面的判断条件 一般是boolean类型的值或是关系表达式或是逻辑 表达式
      return ele.innerText
    }else {  // 低版本的火狐 浏览器  textContent
      return ele.textContent
    }
  },

  // 封装了一个获得标签间文本内容的函数
  setText:function (ele,value){
    if(typeof ele.innerText == 'string'){
      ele.innerText = value
    }else {   // 火狐 浏览器的方式来设置
      ele.textContent = value
    }
  }

}

// 标签对象
var ele = {

  // 封装了一个兼容的获取下一个兄弟标签的函数
  getNextElement:function (ele){
    if(ele.nextElementSibling) { //谷歌或是火狐 或是高版本的IE浏览器支持的方式
      return ele.nextElementSibling  // 将获取到的下一个标签节点返回
    }else { // 低版本的IE浏览器    nextSibling
      ele = ele.nextSibling   // 获取当前标签的下一个节点
      while(ele&&ele.nodeType !=1){  // 判断一下当前的节点是否存在以及节点类型是什么
        ele = ele.nextSibling   // 在当前的节点基础上再次获取下一个节点
      }
      return ele    // 将找到的节点返回
    }
  },

  // 封装了一个兼容的获取上一个兄弟标签的函数
  getPrevElement:function (ele){
    if(ele&&ele.previousElementSibling) { // 标准的浏览器支持的方式 谷歌  火狐   高版本的IE浏览器
      return ele.previousElementSibling
    }else {
      ele = ele.previousSibling
      while(ele&&ele.nodeType!=1){
        ele = ele.previousSibling  // 在当前的节点的基础上，继承向前获取节点
      }
      return ele
    }
  },

  // 获得当前标签下面的第一个子标签节点的函数
  getFirstChild:function (ele){
    if(ele && ele.firstElementChild){  //标准浏览器支持的方式
      return ele.firstElementChild
    }else {
      ele = ele.firstChild   //先获取一下第一个子节点
      while(ele&&ele.nodeType!=1){
        ele = ele.nextSibling
      }
      return ele
    }
  },

  // 获得当前标签下面的最后一个子标签节点的函数
  getLastChild:function (ele){
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


}
