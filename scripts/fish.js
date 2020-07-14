/**
 *  Fish which renders individual fish objects as HTMl
 */
export const fishAsHTML = (fish) => {
    return `
        <div class="fish">
            <div>
                <img class="fish__image" src="${fish.image}" alt="">
            </div>
            <div class="fish__name">${fish.name}</div>
                <div>Species: ${fish.species}</div>
                <div>Location: ${fish.location}</div>
                <div>Length: ${fish.length}</div>
                <div class="fish__food">Food: ${fish.food}</div>

                
        </div>
    `
}