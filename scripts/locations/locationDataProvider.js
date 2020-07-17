const locationCollection = [
    {
        image: "./images/wineIsland.jpeg",
        name: "Wine Island Pass, Louisiana",
        url: "https://www.usharbors.com/harbor/louisiana/wine-island-terrebonne-bay-la/map/",
        urlText: "Click here for more info!",
        description: "While you're in Louisiana, come fish in beautiful Wine Island Pass!"
    }
]

export const useLocation = () => {
    return locationCollection.slice()
}