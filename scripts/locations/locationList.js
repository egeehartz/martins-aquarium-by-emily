import {useLocation} from './locationDataProvider.js'
import {locationHTML} from './location.js'

export const locationList = () => {

    const contentElement = document.querySelector(".location")
    const locations = useLocation()

    let locationHTMLrepresentation = ""
    for (const currentLocationObj of locations){
        locationHTMLrepresentation += locationHTML(currentLocationObj)
    }

    contentElement.innerHTML += `
    <section class="locationList">
        ${locationHTMLrepresentation}
    </section>
    `
}
