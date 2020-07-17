export const tipAsHTML = (tip) => {
    return `
        <section class="tip">
            <div class="tip__specific">${tip.text}</div>
        </section>
    `
}