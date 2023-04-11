<template>
  <svg :class="svgClass" aria-hidden="false">
    <use :xlink:href="iconName"></use>
    <text style="fill:#000000;font-size:12pt;font-weight: bold" x="15.5" y="34">{{this.textString}}</text>
    <!--<text style="fill:#1296db;font-size:8pt" x="0" y="50">block123</text>-->
  </svg>
</template>

<script>
export default {
  name: 'query-svg-icon',
  props: ['iconClass', 'className', 'textString'],
  computed: {
    iconName() {
      return `#icon-${this.iconClass}`
    },
    svgClass() {
      if (this.className) {
        return 'svg-icon ' + this.className
      } else {
        return 'svg-icon'
      }
    }
  }
}
</script>

<style scoped>
.svg-icon {
  width: 3em;
  height: 3em;
  vertical-align: -0.15em;
  /*padding-top: 5px;*/
  overflow: hidden;
}
</style>