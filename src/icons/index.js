import Vue from 'vue'
import SvgIcon from '~/components/SvgIcon'// svg组件

import MySvgIcon from '~/components/SvgIcon2'// svg组件

import PcSvgIcon from '~/components/SvgIcon3'// svg组件

import HeSvgIcon from '~/components/SvgIcon4'// svg组件
// 注册到全局
Vue.component('svg-icon', SvgIcon)

Vue.component('my-svg-icon', MySvgIcon)

Vue.component('pc-svg-icon', PcSvgIcon)

Vue.component('he-svg-icon', HeSvgIcon)
const requireAll = requireContext => requireContext.keys().map(requireContext)
// eslint-disable-next-line
const req = require.context('./svg', false, /\.svg$/)
requireAll(req)