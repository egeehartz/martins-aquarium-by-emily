const tipCollection = [
    {
        text: "tip 1"
    },
    {
        text: "tip 2"
    },
    {
        text: "tip 3"
    }
]

export const useTip = () => {
    return tipCollection.slice()
}