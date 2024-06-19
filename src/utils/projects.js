
import Portfolio from "../assets/images/portfolio.webp"
const data = [
    {
        name: "Portfolio Website",
        type: "Website",
        url: "#",
        github: "https://github.com/Prayag-09/prayagPortfolio",
        image: Portfolio,
        slug: "portfolio",
        description: "This is my Portfolio website made using Astro, Reactjs and Tailwind CSS. ",
        tech: ['Javascript', 'Tailwind css', 'Astro', 'Reactjs']
    },
    {
        name: "Forge Story",
        type: "Website",
        url: "#",
        github: 'https://github.com/Prayag-09/ForgeStory',
        image: Portfolio,
        slug: "",
        description: "A medium clone website for Blogging",
        tech: ['Typescript', 'HonoJS', 'Tailwind CSS', 'ReactJS']
    },
]

export function getData(){
    return data;
}