<template>
  <div class="fly-flyscroll"
    :style="'width:' + flyStyle.width +
          '; height:' + flyStyle.height"
    @mousewheel.stop="flyScroll"
    ref="fly_ksBox"
  >

    <!-- 纵向滚动 -->
    <div class="fly-bar" :class="flyStyle.type == 'vertical'?'vertical':'horizontal'"
        :style="
          flyStyle.type == 'vertical'?(
            'width:' + flyStyle.barWidth +
            '; background-color:' + flyStyle.railColor +
            ';right:' + flyStyle.barMarginRight +
            ';display: ' + (h < domH?'block':'none')
          ):(
            'width:' + flyStyle.width +
            ';height:' + flyStyle.barWidth +
            ';background-color:' + flyStyle.railColor +
            ';bottom:' + flyStyle.barMarginRight +
            ';display: ' + (allh > 0?'block':'none')
          )
          "
      >

      <div class="fly-bar-scrollBut"
         :style="
         flyStyle.type == 'vertical'?(
           'width:' + flyStyle.barWidth +
           '; height:' + barH +
           'px; background-color:' + flyStyle.barColor
         ):(
           'height:' + flyStyle.barWidth +
           '; width:' + barH +
           'px; background-color:' + flyStyle.barColor
         )"
         ref="fly_barHtml">
      </div>

    </div>

    <div class="fly-html"
      :style="flyStyle.type == 'vertical'?(
              'width: calc(100% - '+flyStyle.barWidth+')'+
              ';height: calc('+flyStyle.height+')'
            ):(
              'width: 100%'+
              ';height: calc('+flyStyle.height+' - '+flyStyle.barWidth+')'
            )" ref="fly_con">
      <div class="fly-html-con" ref="fly_conBox">
        <slot></slot>
      </div>
    </div>

  </div>
</template>

<script>
import frame from './FlyScroll'
export default frame
</script>

<style scoped>
  @import "./FlyScroll.css";
</style>
