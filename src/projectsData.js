import boscotti from "../src/assets/boscottiImage.png";
import dashbaord from "../src/assets/Dashboard.png";
import movieapi from "../src/assets/movieapi.png";
import CryptoDark from "../src/assets/CryptoDark.png"



const projectsData = [
  {
    id: 1,
    title: "Boscotti",
    image: boscotti,
    description: "A React-based mini e-commerce store for perfumes featuring a searchable and filterable product catalog, a dynamic shopping cart powered by Context API, and responsive design. Ideal for learning React state management and e-commerce functionality.",
    liveLink: "https://boscotti.vercel.app/",
    githubLink: "https://github.com/HamiidOmosun/boscotti"
  },
  {
    id: 2,
    title: "sira admin dashboard",
    image: dashbaord,
    description: "Lead Frontend Engineer for a large-scale admin dashboard, implementing 40+ pages based on Figma designs. Built modular, reusable components, a scalable folder and CSS architecture, and managed the frontend team to ensure maintainable, consistent, and production-ready UI.",
    liveLink: "https://github.com/HamiidOmosun/admin-panel-for-sira-mobile-app",
    githubLink: "https://github.com/HamiidOmosun/admin-panel-for-sira-mobile-app"
  },
  {
    id: 3,
    title: "Movie App",
    image: movieapi,
    description: "Movie App is a React-based web application that fetches and displays the latest movies from a public API. It features a responsive interface where users can browse trending films, search for specific titles with a debounced search to reduce unnecessary API calls, and explore movie details. This project demonstrates real-time API integration, efficient state management with React Hooks, and dynamic rendering of data in a modern frontend application.",
    liveLink : "https://movie-app-api-ruby.vercel.app/",
    githubLink: "https://github.com/HamiidOmosun/movie-app-api"
  },
  {
    id: 4,
    title: "Crypto wallet",
    image: CryptoDark,
    description: "Crypto wallet in progress created to showcase design skills and tech stack from design to production",
    liveLink: "unavailable",
    githubLink: "unavailable"
  }
]


export default projectsData;