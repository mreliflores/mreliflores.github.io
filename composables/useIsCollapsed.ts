export const useIsCollapsed = () => {
    const isCollapsed = useState<Boolean>(
        'collapseNavBar',
        () => false
    )

    const setIsCollapsed = () => {
        isCollapsed.value = !isCollapsed.value
    }

    return {
        isCollapsed,
        setIsCollapsed
    }
}