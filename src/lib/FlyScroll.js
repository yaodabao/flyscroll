import Move from "../util/animation"
export default {
  name: 'FlyScroll',
  data () {
    return {
      flyStyle:{
        width: "100%",            //宽度
        height: "100px",          //高度
        barWidth:"0px",           //滚动条的宽度 必填
        barColor:"#666",          //滚动条颜色
        railColor:"#eee",         //导轨颜色
        barMargin:"0px",          //垂直滚动条距离整个容器右侧距离
        type: "vertical",         //滚动条类型,纵向滚动和水平滚动 默认:纵向(vertical),可设置为横向(horizontal).
        hWidth: "0px",            //可移动区域的宽度 type: "horizontal" 必填
      },

      moveZb: 0,                  //移动占比

      dom: "",                    //显示区域dom
      domW: 0,                    //dom的宽度;
      domH: 0,                    //dom的高度;
      h: 0,                       //显示区域 高度
      allh: 0,                    //dom可以移动的高度
      domMoveH: 0,                //dom的移动的高度;

      barDom: "",                 //滚动条dom
      barH: 0,                    //滚动条的高度;
      barMoveNum: 0,              //滚动条的移动一次的距离;
      barMoveH: 0,                //滚动条的移动的高度;


    }
  },
  props:{
    fStyle: Object, //样式
  },
  mounted() {
    this.init();
  },
  created(){
  },
  methods:{
    //初始化
    init() {
      //初始 - 滚动插件的配置参数
      this.initStyle();


      //初始 - 计算
      this.dom = this.$refs.fly_conBox;
      this.barDom = this.$refs.fly_barHtml;

      if(this.flyStyle.type == "vertical"){
        // console.log(this.barDom.style)
        this.domH = this.dom.offsetHeight;
        // console.log(this.domH)

        //计算 - 滚动条的高
        this.h = this.flyStyle.height;
        this.h = Number(this.h.substring(0, this.h.length - 2));
        this.barH = this.h / this.domH * this.h;
        this.barMoveNum = this.barH * 0.1;

        //计算 - dom可以移动的高度
        this.allh = this.domH - this.h;
        //计算 - dom可以移动占比
        this.moveZb = this.barMoveNum/(this.h - this.barH);

      }else{

        this.domW = this.dom.offsetWidth;
        this.flyStyle.hWidth = Number(this.flyStyle.hWidth.replace(/px/g,""));

        //计算 - 滚动条的宽度
        this.h = this.flyStyle.width;
        //计算 - 数值为100% - 处理
        if(this.h.indexOf("%") >= 0){
          this.h = this.domW * Number(this.h.replace(/%/g,"")) / 100;
        }else if(this.h.indexOf("px") >= 0){
          this.h = Number(this.h.substring(0, this.h.length - 2));
        }
        this.barH = this.h / this.flyStyle.hWidth * this.h;
        this.barMoveNum = this.barH * 0.1;

        //计算 - dom可以移动的高度
        this.allh = this.flyStyle.hWidth - this.h;
        //计算 - dom可以移动占比
        this.moveZb = this.barMoveNum/(this.h - this.barH);
      }

    },
    //初始滚动插件基本样式
    initStyle(){
      if(this.fStyle == undefined)return;

      var _this = this;
      Object.keys(this.fStyle).forEach(function(key){
        _this.flyStyle[key] = _this.fStyle[key];
      });
    },
    //滚动监听事件
    flyScroll(e){
      // console.log(e)

      //滚动条移动
      var tag = 0;
      if(e.deltaY > 0){
        tag = -1;
        this.barMoveH += this.barMoveNum;
        this.domMoveH -= this.allh * this.moveZb;
        if((this.barH + this.barMoveH) >= this.h){
          this.barMoveH = this.h - this.barH;
          this.domMoveH = (-1) * this.allh;
        }

      }else{
        tag = 1;
        this.barMoveH -= this.barMoveNum;
        this.domMoveH += this.allh * this.moveZb;
        if(this.barMoveH <= 0){
          this.barMoveH = 0;
          this.domMoveH = 0;
        }
      }

      if(this.flyStyle.type == "vertical"){

        Move.animation(this.barDom, {
          top: this.barMoveH + "px",
        },10,tag)

        Move.animation(this.dom, {
          top: this.domMoveH + "px",
        },10,tag)

      }else{

        Move.animation(this.barDom, {
          left: this.barMoveH + "px",
        },10,tag)

        Move.animation(this.dom, {
          left: this.domMoveH + "px",
        },10,tag)
      }
    },

  }
}
