<template>
<div :style="switchDM">
    <slot/>
</div>
</template>

<script>
export default {
    name: 'AtomBox',
    props: {
        h: {
            type: String
        },
        w: {
            type: String
        },
        br_: {
            type: String
        },
        just: {
            type: String
        }
    },
    setup() {
        const isDark = useIsDark().isDark
        const appConfig = useAppConfig().theme
        return {
            isDark,
            appConfig
        }
    },
    computed: {
        switchDM() {
            const darkOrLight = this.isDark
            ? this.appConfig.colorsDark.backgroundColor_
            : this.appConfig.colorsLight.backgroundColor_

            const primary = this.isDark
            ? this.appConfig.colorsDark.primaryColor_
            : this.appConfig.colorsLight.primaryColor_
            
            const secondary = this.isDark
            ? this.appConfig.colorsDark.secondaryColor_
            : this.appConfig.colorsLight.secondaryColor_

            const style = {
                'display': 'flex',
                'justify-content': 'center',
                'align-items': 'center',
                'flex-wrap': 'wrap',
                'margin': '1em',
                'background': 'linear-gradient('+darkOrLight+','+darkOrLight+') padding-box,linear-gradient(10deg, '+primary+', '+secondary+') border-box',
                'border-width': '2px',
                'border-color': 'transparent',
                'border-style': 'solid',
                'padding': '1em',
                'height': this.h,
                'width': this.w,
                'border-radius': this.br_
            }

            style['background-color'] = darkOrLight
            
            /*'linear-gradient(to right, ' + primary +', ' + secondary + ')'*/

            return style
        }
    }
}
</script>