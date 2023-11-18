<template>
  <ul>
    <li 
      v-for="(item, index) in itemOptions"
      :key="index"
    >
      <a 
        aria-current="page"
        :href="`#${item}`"
        @mouseover="hover[index] = true"
        @mouseleave="hover[index] = false"
        :style="{
          backgroundColor: (hover[index] && !isTouch)
          ? colorHover
          : ''
        }"
        @click="isCollapsed
        ? setIsCollapsed()
        : ''"
      >
        <AtomText
          theme="p"
          color="textPrimaryColor"
        >
          {{ item }}
        </AtomText>
      </a>
    </li>
  </ul>
</template>
  
<script>

export default {
  name: 'OptionsNavBar',
  data() {
    const hover = {
      '0': false,
      '1': false,
      '2': false,
      '3': false,
    }
    const isTouch = false
    return {
      hover,
      isTouch
    }
  },
  props: {
    itemOptions: {
      type: Array,
      required: true
    }
  },
  setup() {
    const { isCollapsed, setIsCollapsed } = useIsCollapsed()
    const isDark = useIsDark().isDark
    const appConfig = useAppConfig().theme
    return {
      isCollapsed,
      setIsCollapsed,
      appConfig,
      isDark
    }
  },
  beforeMount() {
    window.addEventListener(
      'load',
      this.detectIsTouch
    )
  },
  computed: {
    colorHover() {
      if(this.isDark) {
        return this.appConfig.colorsDark.backgroundSecondaryColor_
      } else {
        return this.appConfig.colorsLight.backgroundSecondaryColor_
      }
    }
  },
  methods: {
    detectIsTouch() {
      if('ontouchstart' in window) {
        this.isTouch=true
      } else {
        this.isTouch=false
      }
    }
  }
}
</script>