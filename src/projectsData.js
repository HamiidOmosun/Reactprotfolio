import boscotti from "../src/assets/boscottiImage.png";
import dashbaord from "../src/assets/Dashboard.png";
import movieapi from "../src/assets/movieapi.png";
import CryptoDark from "../src/assets/CryptoDark.png"



const projectsData = [
  {
    id: 1,
    title: "Boscotti",
    image: boscotti,
    description: "Ecommerce store for a perfume reseller, built with React.",
    liveLink: "https://boscotti.vercel.app/",
    githubLink: "https://github.com/HamiidOmosun/boscotti"
  },
  {
    id: 2,
    title: "sira admin dashboard",
    image: dashbaord,
    description: "Sira dashbaord is a client project created to be the super admin for a mobile appilcation that exchanges giftcards",
    liveLink: "https://github.com/HamiidOmosun/admin-panel-for-sira-mobile-app",
    githubLink: "https://github.com/HamiidOmosun/admin-panel-for-sira-mobile-app"
  },
  {
    id: 3,
    title: "Movie App",
    image: movieapi,
    description: "An api based web application used to check and look up trending movies, this projects was done to explore the use of api and mapping data to interface",
    liveLink : "https://movie-app-api-ruby.vercel.app/",
    githubLink: "https://github.com/HamiidOmosun/movie-app-api"
  },
  {
    id: 4,
    title: "Crypto wallet",
    image: CryptoDark,
    description: "Crypto wallet in progress created to showcase design skills and tech stack from projects to projects",
    liveLink: "unavailable",
    githubLink: "unavailable"
  }
]


export default projectsData;