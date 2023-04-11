<template>
    <svg :class="svgClass" aria-hidden="false">
        <!--<text style="fill:#1296db;font-size:10pt;font-weight: bold" x="20" y="32">{{this.textString}}</text>-->
        <!--<text style="fill:#1296db;font-size:16pt" x="26" y="37">{{this.textString}}</text>-->
        <use :xlink:href="iconName"></use>
    </svg>
</template>

<script>
    export default {
        name: 'pc-svg-icon',
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
        width: 2.5em;
        height: 2.5em;
        vertical-align: -0.15em;
        fill: currentColor;
        #position: absolute;
        /*overflow: hidden;*/
        /*padding-top: 50px;*/
    }
</style>