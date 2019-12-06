
/*
 *  动画
 *  data:原型数据
 *  dom: dom
 *  style: 样式对象
 *  speed: 速度
 *  tag: 方向
 * */
export function animation(dom, style, speed, tag) {

  let fly_timer = null;
  let timerRunTag = false;
  let moveFX = 0;
  let animationParm = [];

  let MOVE_TIME_QJ = 10;  //移动时间区间,默认10毫秒

  function init(){

    //方向改变,动画停止开始新的动画,清空队列
    if(moveFX != tag){
      moveFX = tag;
      clearInterval(fly_timer);
      animationParm = [];
      timerRunTag = false;
    }
    let _this = this;
    Object.keys(style).forEach(function(key){
      if(key == "top" || key == "left"){

        if(!timerRunTag){
          dispersed(dom, key, style[key], speed);
        }else{
          //动画未完成,保存新的数据并且等待动画完成后排队执行
          let temp = {
            dom: dom,
            key: key,
            num: style[key],
            speed: speed,
          };
          animationParm.push(temp)
          return;
        }
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
    timerRunTag = true;
    let fen = speed/MOVE_TIME_QJ;

    num = Number(num.replace(/px/g,""));
    let time = speed/fen;
    let i = 1;
    let old = dom.style[key];
    old = Number(old.replace(/px/g,""));
    let move = (num - old)/fen;

    fly_timer = setInterval(function(){
      if(i > fen){
        clearInterval(fly_timer);
        timerRunTag = false;
        lineUp();
      }else{
        // console.log((old + move*i) , num)
        // if((old + move*i) < num){
        if(Math.abs((old + move*i)) < Math.abs(num)){
          dom.style[key] = (old + move*i) + "px";
        }else{
          dom.style[key] = num + "px";
        }
      }
      i++;
    }, time);
          
  }
  /*
   *  动画 - 排队
   * */
  let lineUp = function() {
    if(animationParm.length > 0){
      dispersed(animationParm[0].dom, animationParm[0].key, animationParm[0].num, animationParm[0].speed);
      animationParm.splice(0, 1);
    }
  }

  init();
}


export default {
  animation
}
