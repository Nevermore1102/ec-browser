<template>
  <div id="app">
   <block-info></block-info>
   <!-- <new-query-block></new-query-block> -->
  </div>
</template>

<script>
import BlockInfo from '~/views/homepage/Home'
import NewQueryBlock from '~/views/query/NewQueryBlock'
export default {
  components:{
      BlockInfo,
      NewQueryBlock
  },
  methods: {
  }
}
</script>

<style>
#app {
  /*font-family: "Times New Roman",Georgia,Serif;*/
  font-family: "Helvetica Neue", Helvetica, "microsoft yahei", arial, STHeiTi, sans-serif;
  /*text-align: center;*/
}

body,td,th,p,span,h1,h2,h3,h4,h5 {   font-family: "Helvetica Neue", Helvetica, "microsoft yahei", arial, STHeiTi, sans-serif; }
</style>
