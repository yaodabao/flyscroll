
<script>
import Move from "../util/animation"
export default {
  name: 'FlyScroll',
  data () {
    return {
      flyStyle:{
        width: "100%",            //滚动区域 - 可视宽度
        height: "100%",           //滚动区域 - 可视高度
        barWidth:"0px",           //滚动条的宽度 必填
        barColor:"#666",          //滚动条颜色
        railColor:"#eee",         //导轨颜色
        barMargin:"0px",          //垂直滚动条距离整个容器右侧距离
        type: "vertical",         //滚动条类型,纵向滚动和水平滚动 默认:纵向(vertical),可设置为横向(horizontal).
        hWidth: "0px",            //可移动区域的宽度 type: "horizontal" 必填
      },

      moveZb: 0,                  //移动占比

      box:"",

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

      mouseD_Tag: -1,  //鼠标按下 - 标记
      mouseX: 0,  //鼠标按下 - 初始X值
      mouseY: 0,  //鼠标按下 - 初始Y值
      mouseMX: 0, //鼠标移动 - X值
      mouseMY: 0, //鼠标移动 - Y值

    }
  },
  props:{
    fStyle: Object, //样式
    dataChangeTag: Number, //如果外部数据变化,则需要传递一个永久自增的数字,以便于我们重绘滚动条
  },
  render:function(createElement) {

    //内容的原型
    let gd_dom = createElement("div",{
      class: ['fly-html-con'],
      ref: "fly_conBox"
    }, this.$slots.default);

    let gd_dombox = createElement("div",{
      class: ['fly-html'],
      style: this.flyStyle.type == 'vertical'?(
              'width: calc(100% - '+this.flyStyle.barWidth+')'+
              ';height: calc('+this.flyStyle.height+')'
            ):(
              'width: 100%'+
              ';height: calc('+this.flyStyle.height+' - '+this.flyStyle.barWidth+')'
            ),
      ref: "fly_con"
    }, [gd_dom]);

    //滚动条的原型
    let gd_bar = createElement("div",{
      class: ['fly-bar-scrollBut'],
      style: this.flyStyle.type == 'vertical'?(
               'width:' + this.flyStyle.barWidth +
               '; height:' + this.barH +
               'px; background-color:' + this.flyStyle.barColor
             ):(
               'height:' + this.flyStyle.barWidth +
               '; width:' + this.barH +
               'px; background-color:' + this.flyStyle.barColor
             ),
      on:{
        'mousedown': this.mouseD
      },
      ref:"fly_barHtml"
    });
    let gd_barbox = createElement("div",{
      class: ['fly-bar', this.flyStyle.type == 'vertical'?'vertical':'horizontal'],
      style: this.flyStyle.type == 'vertical'?(
                'width:' + this.flyStyle.barWidth +
                '; background-color:' + this.flyStyle.railColor +
                ';right:' + this.flyStyle.barMarginRight +
                ';display: ' + (this.h < this.domH?'block':'none')
              ):(
                'width:' + this.flyStyle.width +
                ';height:' + this.flyStyle.barWidth +
                ';background-color:' + this.flyStyle.railColor +
                ';bottom:' + this.flyStyle.barMarginRight +
                ';display: ' + (this.allh > 0?'block':'none')
              ),
    }, [gd_bar]);

    let h = createElement('div',{
      class: 'fly-flyscroll',
      style: "width:" + this.flyStyle.width + "; height:" + this.flyStyle.height,
      on:{
        'mousewheel': this.mouseScroll
      },
      ref:"fly_ksBox"
    }, [gd_dombox, gd_barbox])

    return h;
  },
  mounted() {
    // this.$refs.fly_ksBox
    // this.newFlyScroll() {
    //   return this.$refs.fly_ksBox;
    // }
  },

  beforeDestroy() {
    if (this.native) return;
    !this.noresize && removeResizeListener(this.$refs.resize, this.update);
  },
  watch:{
    dataChangeTag:function (){
      this.initTag = false;
      this.$nextTick(function () {
        this.newFlyScroll();
      })
      // this.$nextTick(this.update);
      //初始化新增监听
      this.$refs.fly_ksBox.addEventListener("resize", this.newFlyScroll);
      // !this.noresize && addResizeListener(this.$refs.resize, this.update);
    }
  },
  beforeDestroy() {
    this.$refs.fly_ksBox.removeEventListener("resize",function(e){})
  },
  methods:{
    //初始化
    newFlyScroll() {

      if(!this.initTag){
        //初始 - 滚动插件的配置参数
        this.initStyle();

        //router跳转, 重绘
        this.dom = this.$refs.fly_conBox;
        this.barDom = this.$refs.fly_barHtml;
        if(this.flyStyle.type == "vertical"){
          this.barDom.style.top = 0 + "px";
          this.dom.style.top = 0 + "px";
        }else{
          this.barDom.style.left = 0 + "px";
          this.dom.style.left = 0 + "px";
        }
      }
      this.initTag = true;

      //初始 - 计算
      this.box = this.$refs.fly_ksBox;

      this.dom = this.$refs.fly_conBox;
      this.barDom = this.$refs.fly_barHtml;

      if(this.flyStyle.type == "vertical"){
        this.domH = this.dom.offsetHeight;

        //计算 - 滚动条的高
        //计算 - 数值为100% - 处理
        this.h = this.flyStyle.height;
        if(this.h.indexOf("%") >= 0){
          this.h = this.box.offsetHeight * Number(this.h.replace(/%/g,"")) / 100;
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
        this.domW = this.dom.childNodes[0].offsetWidth;

        //计算 - 滚动条的宽度
        this.h = this.flyStyle.width;
        //计算 - 数值为100% - 处理
        if(this.h.indexOf("%") >= 0){
          this.h = this.box.offsetWidth * Number(this.h.replace(/%/g,"")) / 100;
        }else if(this.h.indexOf("px") >= 0){
          this.h = Number(this.h.substring(0, this.h.length - 2));
        }
        this.barH = this.h / this.domW * this.h;
        this.barMoveNum = this.barH * 0.5;

        //计算 - dom可以移动的高度
        this.allh = this.domW - this.h;
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
    //鼠标 - 按下
    mouseD(e){
      e.preventDefault();

      this.mouseX = e.x;
      this.mouseY = e.y;
      this.mouseD_Tag = 0;
      document.addEventListener("mousemove",this.mouseM);
      document.addEventListener("mouseup",this.mouseU);
    },
    //鼠标 - 移动
    mouseM(e){
      if(this.mouseD_Tag == 0 || this.mouseD_Tag == 1){
        this.mouseD_Tag = 1;
        this.mouseMX = e.x;
        this.mouseMY = e.y;
        // console.log(e)

        var tempMove = 0;
        var tempMoveD = 0;
        //未超出的情况下无需滚动条及滚动功能
        if(this.flyStyle.type == "vertical"){
          //滚动条
          tempMove = this.barMoveH + (this.mouseMY - this.mouseY);

          //内容
          var temp_bf = this.allh/(this.h - this.barH);
          tempMoveD = this.domMoveH + (-1)*(this.mouseMY - this.mouseY)*temp_bf;

          //超过 最大值
          if((this.barH + tempMove) >= this.h){
            tempMove = this.h - this.barH;
            tempMoveD = (-1) * this.allh;
          }
          //小于 最小值
          if(tempMove <= 0){
            tempMove = 0;
            tempMoveD = 0;
          }

          this.barDom.style.top = tempMove + "px";
          this.dom.style.top = tempMoveD + "px";
        }else{
          //滚动条
          tempMove = this.barMoveH + (this.mouseMX - this.mouseX);

          //内容
          var temp_bf = this.allh/(this.h - this.barH);
          tempMoveD = this.domMoveH + (-1)*(this.mouseMX - this.mouseX)*temp_bf;

          //超过 最大值
          if((this.barH + tempMove) >= this.h){
            tempMove = this.h - this.barH;
            tempMoveD = (-1) * this.allh;
          }
          //小于 最小值
          if(tempMove <= 0){
            tempMove = 0;
            tempMoveD = 0;
          }

          this.barDom.style.left = tempMove + "px";
          this.dom.style.left = tempMoveD + "px";
        }
      }
    },
    //鼠标 - 弹起
    mouseU(e){
      if(this.mouseD_Tag == 0 || this.mouseD_Tag == 1){
        var tempMove = 0;
        var tempMoveD = 0;

        if(this.flyStyle.type == "vertical"){
          //滚动条
          tempMove = this.barMoveH + (this.mouseMY - this.mouseY);

          //内容
          var temp_bf = this.allh/(this.h - this.barH);
          tempMoveD = this.domMoveH + (-1)*(this.mouseMY - this.mouseY)*temp_bf;

          //超过 最大值
          if((this.barH + tempMove) >= this.h){
            tempMove = this.h - this.barH;
            tempMoveD = (-1) * this.allh;
          }
          //小于 最小值
          if(tempMove <= 0){
            tempMove = 0;
            tempMoveD = 0;
          }
          this.barMoveH = tempMove;
          this.domMoveH = tempMoveD;
          this.barDom.style.top = this.barMoveH + "px";
          this.dom.style.top = this.domMoveH + "px";
        }else{
          //滚动条
          tempMove = this.barMoveH + (this.mouseMX - this.mouseX);

          //内容
          var temp_bf = this.allh/(this.h - this.barH);
          tempMoveD = this.domMoveH + (-1)*(this.mouseMX - this.mouseX)*temp_bf;

          //超过 最大值
          if((this.barH + tempMove) >= this.h){
            tempMove = this.h - this.barH;
            tempMoveD = (-1) * this.allh;
          }
          //小于 最小值
          if(tempMove <= 0){
            tempMove = 0;
            tempMoveD = 0;
          }
          this.barMoveH = tempMove;
          this.domMoveH = tempMoveD;
          this.barDom.style.left = this.barMoveH + "px";
          this.dom.style.left = this.domMoveH + "px";
        }

        this.mouseX = 0;
        this.mouseY = 0;
        this.mouseMX = 0;
        this.mouseMY = 0;
        this.mouseD_Tag = -1;
        document.removeEventListener("mousemove",this.mouseM);
        document.removeEventListener("mouseup",this.mouseU);
      }
    },

    //滚动监听事件
    mouseScroll(e){
      this.newFlyScroll();
      //未超出的情况下无需滚动条及滚动功能
      if(this.flyStyle.type == "vertical"){
        if(this.h >= this.domH){
          this.barMoveH = 0;
          this.domMoveH = 0;
          return;
        }else{
          e.preventDefault();
        }
      }else{
        if(this.h >= this.flyStyle.hWidth){
          this.barMoveH = 0;
          this.domMoveH = 0;
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
</script>

<style scoped>
  @import "./FlyScroll.css";
</style>
