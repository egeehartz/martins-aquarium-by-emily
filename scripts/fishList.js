// FishList which renders individual fish objects as HTML 

import { useFish } from './FishDataProvider.js'

export const fishList = () => {

    // Get a reference to the element that holds the fish section
    const contentElement = document.querySelector(".fish-content")
    const fishes = useFish()

    // Add to the existing HTML in the content element
    contentElement.innerHTML += `
        <section class="fishList">
            All the fish go here!
        </section>
    `
}