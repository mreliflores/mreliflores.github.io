
<template>
  <svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" aria-hidden="true" :style="{color: color}"><path fill="none" :stroke="color" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6h18M3 12h18M3 18h18"></path></svg>
</template>

<script>
export default {
  name: 'IconamoonMenuBurgerHorizontal',
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