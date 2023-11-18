<template>
<AtomBox
h="80%"
w="70%"
br_="12px"
>
<div class="bannerLayout">
    <div class="bannerIntroduce">
        <AtomText
            :theme="'h1'"
            color="textPrimaryColor"
        >
            Welcome, I'm Elí Flores
        </AtomText>
        <AtomText
            :theme="'h4'"
            color="textSecondaryColor"
        >
            Physicist, beginner software dev with strong
            problem-solving skills.
            With a continuous learning mindset and a passion for innovation I am eager to contribute to the success of an organization that values professional growth and offers a competitive salary.
        </AtomText>
    </div>
    <div 
        class="frameBanner"
        :style="{
            background: changeColorDMBanner
        }"
    >
        <img 
            src="/img/3.png"
            alt="Discover Nuxt 3"
            class="avatarBanner"
        />
    </div>
</div>
</AtomBox>
</template>

<script lang="ts">
import '~/assets/css/banner.css'
export default {
    name: 'Banner',
    data() {
        const fontFeat = {
            themeTitle: '',
            themeSub: ''
        }
        return {
            fontFeat
        }
    },
    setup() {
        const {isWidth, setIsWidth} = useIsWidth()
        const appConfig = useAppConfig().theme
        const isDark = useIsDark().isDark
        const {isCollapsed, setIsCollapsed} = useIsCollapsed()
        return {
            appConfig,
            isDark,
            isCollapsed,
            isWidth,
            setIsWidth
        }
    },
    computed: {
        changeColorDMBanner() {
            const primary = this.isDark
            ? this.appConfig.colorsDark.primaryColor_
            : this.appConfig.colorsLight.primaryColor_

            const secondary = this.isDark
            ? this.appConfig.colorsDark.secondaryColor_
            : this.appConfig.colorsLight.secondaryColor_

            const color = 'linear-gradient(45deg, '+primary+', '+secondary+')'
            return color
        },
        changeInFont() {
            if (this.isWidth >= 800) {
                this.fontFeat.themeSub = 'h4'
                this.fontFeat.themeTitle = 'h1'
            } else {
                this.fontFeat.themeSub = 'p'
                this.fontFeat.themeTitle = 'h3'
            }
            return this.fontFeat
        }
    },
    beforeMount() {
        this.setIsWidth(window.innerWidth)
    },
}
</script>