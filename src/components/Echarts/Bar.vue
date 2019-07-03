<template>
  <div :class="className" :id="id" :style="{height:height,width:width}">
  </div>
</template>
<script>

export default {
	name:'Ebar',
  props: {
    className: {
      type: String,
      default: 'yourClassName'
    },
    id: {
      type: String,
      default: 'yourID'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '400px'
    }
  },
}
</script>