<template>
  <div>
    <div style="line-height: 60px; border-bottom: 1px solid #ccc;" v-for="(item, i) in list" :key="i">
      姓名：{{item.name}} - 年龄：{{item.age}}
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      list: [
        {
          name:"张三",
          age: 18,
        },
        {
          name:"李四",
          age: 18,
        },
        {
          name:"王五",
          age: 18,
        }]
    }
  },
  created(){
    var _this = this;

    setTimeout(function(){
      var newList = [
        {
          name:"溜溜",
          age: 18,
        },
        {
          name:"契丹",
          age: 18,
        },
        {
          name:"八爪",
          age: 18,
        },
        {
          name:"九狗屎",
          age: 18,
        }
      ];
      newList.forEach(function(item, i){
        _this.list.push(item)
      })
    },2000)
  },
}
</script>

<style>
</style>
