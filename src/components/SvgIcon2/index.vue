<template>
    <svg :class="svgClass" aria-hidden="false">
        <!--<text style="fill:#1296db;font-size:16pt" x="26" y="37">{{this.textString}}</text>-->
        <use :xlink:href="iconName"></use>
        <text style="z-index:-100;fill:black;font-size:12pt;font-weight: bold" x="20" y="34">{{this.textString}}</text>
    </svg>
</template>

<script>
    export default {
        name: 'my-svg-icon',
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
        fill: currentColor;
        #position: absolute;
        overflow: hidden;
    }
</style>