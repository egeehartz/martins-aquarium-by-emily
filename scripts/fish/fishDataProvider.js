//this file manages the raw data

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



export const mostHolyFish = () => {
    // 3, 6, 9, 12, etc... fish
    const holyFish = []

    for (const theFish of fishCollection) {
        if (theFish.length % 3 === 0) {
            holyFish.push(theFish)
        }
    }
    return holyFish
}

export const soldierFish = () => {
    // 5, 10, 15, 20, 25, etc... fish
    const soldiers = []

    for(const theFish of fishCollection){
        //fix logic here
        if(theFish.length % 5 === 0 && theFish.length % 3 !== 0) {
            soldiers.push(theFish)
        }
    }
    return soldiers
}

export const nonHolyFish = () => {
    // Any fish not a multiple of 3 or 5
    const regularFish = []

    for(const theFish of fishCollection){
        if(theFish.length % 5 !== 0 && theFish.length % 3 !== 0) {
            regularFish.push(theFish)
        } 

    return regularFish
}
}