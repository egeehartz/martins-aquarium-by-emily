export const locationHTML = (location) => {
    return `
        <div class="location__images">
            <img class="location__image" src="${location.image}" />
        </div>
        <div>
            <h3>${location.name}</h3>
            <p>${location.description}</p>
        </div>
        <div>
            <a href="${location.url}">${location.urlText}</a>
        </div>

    `
}