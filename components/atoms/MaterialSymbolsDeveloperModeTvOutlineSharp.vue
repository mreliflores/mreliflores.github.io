
<template>
  <svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" :style="{color: color}"><path fill="currentColor" d="M2 7V3h20v4h-2V5H4v2H2Zm6 14v-2H2v-4h2v2h16v-2h2v4h-6v2H8Zm4-10Zm-7.2 0l2.6-2.6L6 7l-4 4l4 4l1.4-1.4L4.8 11Zm14.4 0l-2.6 2.6L18 15l4-4l-4-4l-1.4 1.4l2.6 2.6Z"></path></svg>
</template>

<script>
export default {
  name: 'MaterialSymbolsDeveloperModeTvOutlineSharp',
  props: {
    color: {
      type: String,
      required: false,
      default: 'white'
    },
    size: {
      type: String,
      required: false,
      default: '1em'
    }
  }
}
</script>