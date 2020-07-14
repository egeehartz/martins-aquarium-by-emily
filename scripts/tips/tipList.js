import {useTip} from './tipDataProvider.js'
import {tipAsHTML} from './tips.js'

export const tipList = () => {

    const contentElement = document.querySelector(".tip")
    const tips = useTip()

    let tipHTMLrepresentation = ""
    for (const currentTipObj of tips){
        tipHTMLrepresentation += tipAsHTML(currentTipObj)
    }

    contentElement.innerHTML += `
    <section class="tipList>
        ${tipHTMLrepresentation}
    </section>
    `
}