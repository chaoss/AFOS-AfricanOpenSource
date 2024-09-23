import chakara from "./src/assets/images/Project Logos/chakra.png";
import chaoss from "./src/assets/images/Project Logos/chaoss.png";
import osca from "./src/assets/images/Project Logos/os.png";
import igboapi from "./src/assets/images/Project Logos/igboapi.png";
import spaceyatech from "./src/assets/images/Project Logos/spaceyatech.png";
import windui from "./src/assets/images/Project Logos/windui.png";

export const projectCardsData = [
  {
    id: "id-01",
    title: "Chakra UI",
    image: chakara,
    category: "UI Library",
    description:
      "Chakra UI is a simple, modular and accessible component library that gives you the building blocks you need to build your React applications.",
    project_link: "https://chakra-ui.com/",
    country: "Nigeria",
  },
  {
    id: "id-02",
    title: "CHAOSS Africa",
    image: chaoss,
    category: "Community",
    description:
      "A chapter of the CHAOSS Project focusing on creating initiatives and metrics around solving challenges of Open Source Communities in Africa.",
    project_link: "https://chaoss.community/",
    country: "Nigeria",
  },
  {
    id: "id-03",
    title: "OSCA - Open Source Community Africa",
    image: osca,
    category: "Community",
    description:
      "A community of creative minds driving the Open Source movement in Africa.",
    project_link: "https://oscafrica.org/",
    country: "Nigeria",
  },
  {
    id: "id-04",
    title: "Igbo API",
    image: igboapi,
    category: "API",
    description:
      "Access thousands of Igbo words, audio pronunciations, and example sentences to power the future of Igbo technology.",
    project_link: "https://igboapi.com/",
    country: "Nigeria",
  },
  {
    id: "id-05",
    title: "SpaceYaTech",
    image: spaceyatech,
    category: "Community",
    description:
      "SpaceYaTech is the fastest growing African Open-Source Community Looking To Change The Way Young Africans Get Started In Technology.",
    project_link: "https://github.com/SpaceyaTech",
    country: "Nigeria",
  },
  {
    id: "id-06",
    title: "Windi UI",
    image: windui,
    category: "UI Library",
    description:
      "Beautiful and professionally crafted Windi UI components and templates.",
    project_link: "https://github.com/selemondev/windi-ui",
    country: "Nigeria",
  },
  {
    id: "id-07",
    title: "Demo Project 1",
    image:
      "https://images.pexels.com/photos/319968/pexels-photo-319968.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Robotics",
    description: "Get Started In Robotics.",
    project_link: "https://github.com/",
    country: "Kenya",
  },
  {
    id: "id-08",
    title: "Demo Project 2",
    image:
      "https://images.pexels.com/photos/8849295/pexels-photo-8849295.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Artificial Intelligence",
    description: "Get Started In Artificial Intelligence.",
    project_link: "https://github.com/",
    country: "Ghana",
  },
  {
    id: "id-09",
    title: "Demo Project 3",
    image:
      "https://images.pexels.com/photos/1476321/pexels-photo-1476321.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Hardware",
    description: "Get Started In Hardware.",
    project_link: "https://github.com/",
    country: "Kenya",
  },
  {
    id: "id-10",
    title: "Demo Project 4",
    image:
      "https://images.pexels.com/photos/26804169/pexels-photo-26804169/free-photo-of-white-dog-robot.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Artificial Intelligence",
    description: "Get Started In Artificial Intelligence.",
    project_link: "https://github.com/",
    country: "Uganda",
  },
];

export const categories = [
  { name: "API", count: 1 },
  { name: "UI Library", count: 2 },
  { name: "Community", count: 2 },
  { name: "Robotics", count: 1 },
  { name: "Artificial Intelligence", count: 2 },
  { name: "Hardware", count: 1 },
  { name: "Agriculture", count: 0 },
  { name: "eCommerce", count: 0 },
];

export const countries = [
  { name: "Ghana", count: 0 },
  { name: "Nigeria", count: 5 },
  { name: "Angola", count: 0 },
  { name: "Tanzania", count: 0 },
  { name: "Benin", count: 0 },
  { name: "Congo", count: 0 },
  { name: "Tunisia", count: 0 },
  { name: "Kenya", count: 2 },
  { name: "Uganda", count: 1 },
];
