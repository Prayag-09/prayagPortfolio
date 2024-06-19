
import Portfolio from "../assets/images/portfolio.webp"
const data = [
    {
        name: "Portfolio Website",
        type: "Website",
        url: "https://rohitk06.site/",
        github: "https://github.com/DevRohit06/Portfolio-website",
        image: Portfolio,
        slug: "portfolio",
        description: "This is my Portfolio website made using Astro, Reactjs and Tailwind css. ",
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