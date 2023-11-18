<template>
<AtomBox
    :w="'70%'"
    br_="12px"
>
    <div
        class="insideBox"
    >
        <div
        class="frameIcon"
        :style="{
            background: changeColorDMBanner
        }"
        >
        <slot name="icon" />
        </div>
        <div
        class="textField"
        >
        <div
            class="timeField"
            :style="{
            backgroundColor: colorInYear,
            }"
        >
            <AtomText
            theme="default"
            color="textPrimaryColor"
            >
            <slot name="time" />
            </AtomText>
        </div>
        <div
            :style="{
            width: '100%'
            }"
        >
            <AtomText
            theme="h4"
            color="textPrimaryColor"
            >
            <slot name="nameJob" />
            <AtomText
                theme="p"
                color="textSecondaryColor"
            >
                <slot name="placeJob" />
            </AtomText>
            </AtomText>
        </div>
        <div>
            <AtomText
            theme="default"
            color="textSecondaryColor"
            >
            <slot name="jobDescription" />
            </AtomText>
        </div>
        </div>
    </div>
</AtomBox>
</template>

<script lang="ts">
import '~/assets/css/expcard.css'
export default {
    name: 'ExpCard',
    setup() {
        const {isWidth, setIsWidth} = useIsWidth()
        const appConfig = useAppConfig().theme
        const isDark = useIsDark().isDark
        return {
            appConfig,
            isDark,
            isWidth,
            setIsWidth,
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
        colorInYear() {
            const color = this.isDark
            ? this.appConfig.colorsDark.backgroundSecondaryColor_
            : this.appConfig.colorsLight.backgroundSecondaryColor_

            return color
        },
        widthExpCard() {
            const w = this.isWidth>=800
            ? '40%'
            : '70%'

            return w
        }
    },
    beforeMounted() {
        this.setIsWidth(window.innerWidth)
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
            this.setIsWidth(w.innerWidth)
        }
    }
}
</script>