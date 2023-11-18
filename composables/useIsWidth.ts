export const useIsWidth = () => {
    const isWidth = useState<number>(
        'width',
        () => 0
    )

    const setIsWidth = (newWidth: number) => {
        isWidth.value = newWidth
    }

    return {
        isWidth,
        setIsWidth
    }
}