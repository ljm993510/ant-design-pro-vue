<template>
  <a-locale-provider :locale="locale">
    <div id="app">
      <router-view/>
    </div>
  </a-locale-provider>
</template>

<script>
	
import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN'

import { AppDeviceEnquire } from '@/utils/mixin'

export default {
  mixins: [AppDeviceEnquire],
  data () {
    return {
      locale:zhCN
    }
  },
  mounted () {
		console.log('this.$i18n.locale----')
		console.log(this.$i18n.locale)
		
		// this.$i18n.locale = 'en-US'  //更改语言

		console.log('this.$i18n.locale----')
  }
}
</script>
<style>
  #app {
    height: 100%;
  }
</style>
