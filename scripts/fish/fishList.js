// FishList which renders individual fish objects as HTML 
//takes stuff from fish.js and fishDataProvider.js and combines them

import { mostHolyFish, soldierFish, nonHolyFish } from './fishDataProvider.js'
import {fishAsHTML} from "./fish.js"

const contentElement = document.querySelector(".fish-content")

const addFishToDOM = (arrayOfFish) => {
    let fishHTMLrepresentation = ""
    for(const currentFishObj of arrayOfFish){
        fishHTMLrepresentation += fishAsHTML(currentFishObj)
    }

    // Add to the existing HTML in the content element
    contentElement.innerHTML += `
        <section class="fishList">
            ${fishHTMLrepresentation}
        </section>
    `
}


export const fishList = () => {
    const holyFishes = mostHolyFish()
    addFishToDOM(holyFishes)

    const soldiers = soldierFish()
    addFishToDOM(soldiers)

    const plebs = nonHolyFish()
    addFishToDOM(plebs)
}
    
