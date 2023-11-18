<template>
    <AtomBox
    h="200px"
    w="350px"
    br_="12px"
    >
        <div :style="{width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center'}">
            <div
            :style="{
            display: 'flex',
            justifyContent: 'space-between'
            }"
            >
                <AtomText 
                theme="h4"
                color="textPrimaryColor"
                >
                    <slot
                    name="title"
                    >
                    </slot>
                </AtomText>
                <slot
                name="logoSkillCard"
                >
                </slot>
            </div>
            <AtomText
            theme="p"
            color="textSecondaryColor"
            >
                <slot
                name="skillDescription"
                >
                </slot>
            </AtomText>
            <div :style="{
            display: 'flex',
            justifyContent: 'space-around',
            padding: '20px 10px',
            flexWrap: 'wrap'
            }">
                <slot name="technologies">

                </slot>
            </div>
        </div>
    </AtomBox>
</template>

<script>
export default {
    name: 'SkillsCards',
    setup() {
        const {isDark, setIsDark} = useIsDark()
        const appConfig = useAppConfig().theme

        return {
            isDark,
            setIsDark,
            appConfig,
        }
    }
}
</script>