<template>
    <component
        :is="theme"
        :style="themeClass"
    >
        <slot />
    </component>
</template>

<script>

export default {
    name: 'AtomText',
    setup() {
        const {isDark, setIsDark} = useIsDark()
        const appConfig = useAppConfig().theme

        return {
            isDark,
            setIsDark,
            appConfig,
        }
    },
    props: {
        theme: {
            type: String,
            required: false,
            validator (value) {
                return [
                    'h1',
                    'h2',
                    'h3',
                    'h4',
                    'p',
                    'default',
                ].includes(value)
            } 
        },
        color: {
            type: String,
            required: true
        }
    },
    computed: {
        themeClass () {
            const darkOrLight = this.isDark
            ? this.appConfig['colorsDark'][this.color]
            : this.appConfig['colorsLight'][this.color]

            const classLookup = {
                h1: {
                    'font-size': this.appConfig.typography.fontSize.xxl,
                    'letter-spacing': this.appConfig.typography.letterSpacing
                },
                h2: {
                    'font-size': this.appConfig.typography.fontSize.xl,
                    'letter-spacing': this.appConfig.typography.letterSpacing
                },
                h3: {
                    'font-size': this.appConfig.typography.fontSize.lg,
                    'letter-spacing': this.appConfig.typography.letterSpacing
                },
                h4: {
                    'font-size': this.appConfig.typography.fontSize.md,
                    'letter-spacing': this.appConfig.typography.letterSpacing
                },

                p: {
                    'font-size': this.appConfig.typography.fontSize.sm,
                    'letter-spacing': this.appConfig.typography.letterSpacing
                },
                default: {
                    'font-size': this.appConfig.typography.fontSize.xs,
                    'letter-spacing': this.appConfig.typography.letterSpacing
                },
            }

            classLookup[this.theme]['color'] = darkOrLight

            return classLookup[this.theme]
        },
    },
}
</script>

<style>
</style>