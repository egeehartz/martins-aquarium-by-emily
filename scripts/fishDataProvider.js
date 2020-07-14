const fishCollection = [
    {
        name: "Martin Jr",
        food: "herring",
        species: "Atlantic Cod",
        length: "30 inches",
        location: "Atlantic Ocean",
        image: "./images/cod.jpeg"
    },
    {
        name: "Bruce",
        food: "fish... But he's trying to be vegetarian",
        species: "Great White Shark",
        length: "11 feet",
        location: "Pacific Ocean",
        image: "./images/bruce.jpeg"
    }
]

export const useFish = () => {
    //.slice() allows you to return a copy of fishCollection
    return fishCollection.slice()
}
