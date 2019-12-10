import Move from "../util/animation"
export default {
  name: 'FlyScroll',
  data () {
    return {
      flyStyle:{
        width: "100%",            //滚动区域 - 可视宽度
        height: "300px",          //滚动区域 - 可视高度
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

      initTag: false,             //动画效果计时器是否开启
      animationTimeTag: false,    //动画效果计时器是否开启


    }
  },
  props:{
    fStyle: Object, //样式
    dataChangeTag: Number, //如果外部数据变化,则需要传递一个永久自增的数字,以便于我们重绘滚动条
  },
  mounted() {
    this.init();
  },
  created(){
    // //初始化新增监听
    // var _this = this;
    // window.onresize = function(){
    //   // _this.$nextTick(()=>{
    //   // });
    //   _this.init();

    // }
  },
  watch:{
    dataChangeTag:function (){
      this.initTag = false;
      this.init();
    }
  },
  methods:{
    //初始化
    init() {
      if(!this.initTag){
        //初始 - 滚动插件的配置参数
        this.initStyle();
      }
      this.initTag = true;


      //初始 - 计算
      this.dom = this.$refs.fly_conBox;
      this.barDom = this.$refs.fly_barHtml;
      if(this.flyStyle.type == "vertical"){
        // console.log(this.barDom.style)
        this.domH = this.dom.offsetHeight;
        // console.log(this.domH)

        //计算 - 滚动条的高
        //计算 - 数值为100% - 处理
        this.h = this.flyStyle.height;
        if(this.h.indexOf("%") >= 0){
          this.h = document.documentElement.clientHeight * Number(this.h.replace(/%/g,"")) / 100;
        }else if(this.h.indexOf("px") >= 0){
          this.h = Number(this.h.substring(0, this.h.length - 2));
        }
        this.barH = this.h / this.domH * this.h;
        this.barMoveNum = this.barH * 0.5;

        //计算 - dom可以移动的高度
        this.allh = this.domH - this.h;
        //计算 - dom可以移动占比
        this.moveZb = this.barMoveNum/(this.h - this.barH);

      }else{
        this.domW = this.dom.offsetWidth;
        if(this.flyStyle.hWidth.toString().indexOf("px") > -1){
          this.flyStyle.hWidth = Number(this.flyStyle.hWidth.replace(/px/g,""));
        }

        //计算 - 滚动条的宽度
        this.h = this.flyStyle.width;
        //计算 - 数值为100% - 处理
        if(this.h.indexOf("%") >= 0){
          this.h = this.$refs.fly_con.offsetWidth * Number(this.h.replace(/%/g,"")) / 100;
        }else if(this.h.indexOf("px") >= 0){
          this.h = Number(this.h.substring(0, this.h.length - 2));
        }
        this.barH = this.h / this.flyStyle.hWidth * this.h;
        this.barMoveNum = this.barH * 0.5;

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
      //未超出的情况下无需滚动条及滚动功能
      if(this.flyStyle.type == "vertical"){
        if(this.h >= this.domH){
          return;
        }else{
          e.preventDefault();
        }
      }else{
        if(this.h >= this.flyStyle.hWidth){
          return;
        }else{
          e.preventDefault();
        }
      }
      //禁止重复的动画
      if(this.animationTimeTag){
        return;
      }

      //每次动画得时间
      var _this = this;
      setTimeout(function(){
        _this.animationTimeTag = false;
      },300);

      //滚动条移动
      if(e.deltaY > 0){
        this.barMoveH += this.barMoveNum;
        this.domMoveH -= this.allh * this.moveZb;
        if((this.barH + this.barMoveH) >= this.h){
          this.barMoveH = this.h - this.barH;
          this.domMoveH = (-1) * this.allh;
        }

      }else{
        this.barMoveH -= this.barMoveNum;
        this.domMoveH += this.allh * this.moveZb;
        if(this.barMoveH <= 0){
          this.barMoveH = 0;
          this.domMoveH = 0;
        }
      }

      this.animationTimeTag = true;
      if(this.flyStyle.type == "vertical"){

        Move.animation(this.barDom, {
          top: this.barMoveH + "px",
        },300)

        Move.animation(this.dom, {
          top: this.domMoveH + "px",
        },300)

      }else{

        Move.animation(this.barDom, {
          left: this.barMoveH + "px",
        },300)

        Move.animation(this.dom, {
          left: this.domMoveH + "px",
        },300)
      }
    },

  }
}
