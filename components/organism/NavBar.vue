<template>
<nav
  :style="{
    backgroundColor: isDark
    ? appConfig.colorsDark.backgroundColor_
    : appConfig.colorsLight.backgroundColor_,
    'borderBottom': '1px solid #555'
  }"
>
  <a href="">
    <AtomText
      theme='h4'
      color="textPrimaryColor"
    >
      DevElí
    </AtomText>
  </a>
  <div class="topNavBarOptions">
    <AtomToggleBox 
      height="25px"
      width="40px"
    />
    <button
      @click="setIsCollapsed()"
      class="collapsedButton"
    >
      <IconamoonMenuBurgerHorizontal
        :color="!isDark
        ? appConfig.colorsLight.textPrimaryColor
        : appConfig.colorsDark.textPrimaryColor"
        size="20px"
      />
    </button>
    <div
      :class="isCollapsed
      ? 'collapsed'
      : 'noCollapsed'"
    >
      <OptionsNavBar
        :itemOptions="[
            'Home',
            'Skills',
            'Experience',
            'Projects',
            'Contact'
        ]"
        :style="{
          backgroundColor: isDark
          ? appConfig.colorsDark.backgroundColor_
          : appConfig.colorsLight.backgroundColor_,
          'width': '100%',
          'height': '100%'
        }"
      />
    </div>
  </div>
</nav>
</template>

<script lang="ts">
import '~/assets/css/navbar.css'

export default {
    name: 'NavBar',
    setup() {
      const {isDark, setIsDark} = useIsDark()
      const {isCollapsed, setIsCollapsed} = useIsCollapsed()
      const appConfig = useAppConfig().theme

      return {
        isDark,
        setIsDark,
        appConfig,
        isCollapsed,
        setIsCollapsed
      }
  },
  computed: {
    ss() {
      if(! this.isCollapsed) {
        const pos = {
          'position': 'none'
        }
        return pos
      } 
    }
  },
  mounted() {
    window.addEventListener(
      "resize",
      this.handlerResize
    )
  },
  methods: {
    handlerResize(this, e: Event) {
      const w = e.currentTarget as Window;

      if (w.innerWidth >= 800) {
        this.isCollapsed = false;
      }
    }
  }
}
</script>

<style>
</style>

