// FishList which renders individual fish objects as HTML

import { useFish } from './FishDataProvider.js'

export const FishList = () => {

    // Get a reference to the `<article class="content">` element 
    const contentElement = document.querySelector("insert selector here")
    const fishes = useFish()

    // Add to the existing HTML in the content element
    contentElement.innerHTML += `
        <section class="fishList">
            All the fish go here!
        </section>
    `
}