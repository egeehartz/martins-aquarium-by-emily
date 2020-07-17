// FishList which renders individual fish objects as HTML 
//takes stuff from fish.js and fishDataProvider.js and combines them

import { useFish } from './FishDataProvider.js'
import {fishAsHTML} from "./fish.js"


export const fishList = () => {

    // Get a reference to the element that holds the fish section
    const contentElement = document.querySelector(".fish-content")
    const fishes = useFish()

    let fishHTMLrepresentation = ""
    for(const currentFishObj of fishes){
        fishHTMLrepresentation += fishAsHTML(currentFishObj)
    }

    // Add to the existing HTML in the content element
    contentElement.innerHTML += `
        <section class="fishList">
            ${fishHTMLrepresentation}
        </section>
    `
}