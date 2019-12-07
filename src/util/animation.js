
/*
 *  动画
 *  data:原型数据
 *  dom: dom
 *  style: 样式对象
 *  speed: 速度
 * */
export function animation(dom, style, speed) {

  let fly_timer = null;

  let MOVE_TIME_QJ = 10;  //移动时间区间,默认10毫秒

  function init(){

    let _this = this;
    Object.keys(style).forEach(function(key){
      if(key == "top" || key == "left"){
        dispersed(dom, key, style[key], speed);
      }
    });
  }


  /*
   *  动画 - 数值拆分
   *  dom: dom
   *  key: 样式属性名称,如top
   *  num: 终点值
   *  speed: 速度
   * */
  let dispersed = function(dom, key, num, speed) {
    let fen = speed/MOVE_TIME_QJ;

    num = Number(num.replace(/px/g,""));
    let time = speed/fen;
    let i = 1;
    let old = dom.style[key];
    old = Number(old.replace(/px/g,""));
    let move = (num - old)/fen;

    fly_timer = setInterval(function(){
      if(i > fen){
        dom.style[key] = num + "px";
        old = num;
        clearInterval(fly_timer);
      }else{
        dom.style[key] = (old + move) + "px";
        old = old + move;
      }
      i++;
    }, time);

  }

  init();
}


export default {
  animation
}
