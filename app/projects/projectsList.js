const projectsList = [
  {
    title: "AirBnB Clone",
    code: "https://github.com/mdesignscode/airbnb-clone-js",
    live: "https://airbnb-clone-js-beta.vercel.app/hbnb",
    preview: "/projects/airbnb-clone.png",
    description: "A full-stack clone of the popular web application, AirBnB.",
    keyFeatures: [
      "MySQL database for storing airbnb places",
      "Object Oriented Programming design",
      "User-friendly command line interpreter for performing create, read, update and delete (CRUD) operations on objects in storage",
      "Unit testing to ensure a well functional and robust backend",
      "API integration to provide a seamless interaction with the backend",
    ],
    techStack: [
      ["Sass", "/tech-stack/sass-svgrepo-com.svg"],
      ["MySQL", "/tech-stack/mysql-logo-svgrepo-com.svg"],
      ["ExpressJS", "/tech-stack/express-svgrepo-com.svg"],
      ["NextJS", "/tech-stack/nextjs-fill-svgrepo-com.svg"],
      ["NodeJS", "/tech-stack/nodejs-icon-svgrepo-com.svg"],
      ["PrismaJS", "/tech-stack/prisma-svgrepo-com.svg"],
      ["Mocha", "/tech-stack/mocha-svgrepo-com.svg"],
      ["Chai", "/tech-stack/chai-svgrepo-com.svg"]
    ],
  },
  {
    title: "25 + 5 Clock",
    code: "https://codepen.io/Marlon-B/pen/PoXqbKG",
    live: "https://codepen.io/Marlon-B/full/PoXqbKG",
    preview: "/projects/25+5_Clock.png",
    description: "A web application to help users manage their time effectively by providing a customizable timer for different activities.",
    keyFeatures: [
      "Users can set session and break lengths, start and stop the timer",
      "Audio notification indicating key event timer is up",
    ],
    techStack: [
      ["HTML", "/tech-stack/html-5-svgrepo-com.svg"],
      ["Sass", "/tech-stack/sass-svgrepo-com.svg"],
      ["React", "/tech-stack/reactjs-svgrepo-com.svg"],
    ],
  },
  {
    title: "JavaScript Calculator",
    live: "https://codepen.io/Marlon-B/full/NWeWEXV",
    code: "https://codepen.io/Marlon-B/pen/NWeWEXV",
    preview: "/projects/calculator.png",
    description:
      "A robust and visually appealing calculator application that performs basic arithmetic operations.",
    keyFeatures: [
      "Real-time calculation feedback with immediate execution logic",
      "Edge-case handling for input, such as consecutive operators and decimal input, and incomplete expressions",
    ],
    techStack: [
      ["HTML", "/tech-stack/html-5-svgrepo-com.svg"],
      ["Sass", "/tech-stack/sass-svgrepo-com.svg"],
      ["React", "/tech-stack/reactjs-svgrepo-com.svg"],
      ["JavaScript", "/tech-stack/javascript-svgrepo-com.svg"],
    ],
  },
  {
    title: "Drum Machine",
    live: "https://codepen.io/Marlon-B/full/OJrJZPL",
    code: "https://codepen.io/Marlon-B/pen/OJrJZPL",
    preview: "/projects/drum-machine.png",
    description:
      "A visually appealing and interactive web application that simulates a virtual drum set.",
    keyFeatures: [
      "Clickable elements that trigger a corresponding audio clip",
      "Keyboard triggering to allow users to play sounds from keyboard",
      "Controls for controlling volume and enabling/disabling sound",
    ],
    techStack: [
      ["HTML", "/tech-stack/html-5-svgrepo-com.svg"],
      ["Sass", "/tech-stack/sass-svgrepo-com.svg"],
      ["React", "/tech-stack/reactjs-svgrepo-com.svg"],
    ],
  },
  {
    title: "Markdown Previewer",
    live: "https://codepen.io/Marlon-B/full/MWZWVVK",
    code: "https://codepen.io/Marlon-B/pen/MWZWVVK",
    preview: "/projects/markdown-previewer.png",
    description:
      "A real-time markdown editor that allows users to write and preview GitHub-flavored markdown in a user-friendly interface.",
    keyFeatures: [
      "Real-time Markdown text to HTML convert and preview",
      "An intuitive, easy to use and responsive user interface",
      "A default markdown example on page load that covers a variety of markdown elements, such as headings, links, code blocks, lists, and more",
      "GitHub-flavored markdown syntax support",
    ],
    techStack: [
      ["React", "/tech-stack/reactjs-svgrepo-com.svg"],
      ["HTML", "/tech-stack/html-5-svgrepo-com.svg"],
      ["Bootstrap", "/tech-stack/icons8-bootstrap-48.png"],
    ],
  },
  {
    title: "Random Quote Machine",
    live: "https://codepen.io/Marlon-B/full/RwEwjaM",
    code: "https://codepen.io/Marlon-B/pen/RwEwjaM",
    preview: "/projects/random-quote-machine.png",
    description:
      "The Random Quote Machine is an engaging web application that delivers inspiration and thought-provoking quotes to users at the click of a button.",
    keyFeatures: [
      "Displays a random quote on page load",
      "Color theme changes on page load",
      "Color theme and Quote changes on user interaction",
      "User-friendly and responsive design",
    ],
    techStack: [
      ["HTML", "/tech-stack/html-5-svgrepo-com.svg"],
      ["Sass", "/tech-stack/sass-svgrepo-com.svg"],
      ["React", "/tech-stack/reactjs-svgrepo-com.svg"],
    ],
  }
  // {
  //   title: 'Full Stack Amazon Clone',
  //   description: <div className="slider__container_slideText">
  //     <p>
  //       This project replicates key features of the renowned Amazon platform, including a seamless checkout process, a robust add-to-cart functionality, and secure sign-in capabilities.
  //     </p>
  //     <p>
  //       Through meticulous implementation, the project delivers a user-friendly interface that allows customers to browse, select, and purchase products effortlessly. The Amazon Clone Project showcases proficiency in web development, highlighting skills in front-end design, back-end functionality, and user authentication for building a comprehensive e-commerce platform.
  //     </p>
  //   </div>,
  //   preview: [
  //     '/projects/amazon-clone.png',
  //     '/projects/amazon-clone1.png',
  //   ],
  //   code: 'https://github.com/mdesignscode/amazon-clone',
  //   live: 'https://challenge-1dc17.web.app/',
  // },
  // {
  //   title: 'Stardew Valley Info Page Clone',
  //   description: <div className="slider__container_slideText">
  //   <p>
  //     This project showcases dropdown menus, responsive design, quality code, and an image lightbox feature. Immerse yourself in a user-friendly interface that allows easy navigation through a variety of Nintendo games.
  //   </p>
  //   <p>
  //     The project&#39;s responsive design ensures seamless access on different devices, providing a consistent experience for users. With attention to detail and quality code, the Nintendo Game Info Page Clone offers a polished and optimized experience. The image lightbox feature enhances visual appeal, allowing users to view game images in a sleek and immersive manner.
  //   </p>
  // </div>,
  //   preview: [
  //     '/projects/stardew-valley-clone.png',
  //     '/projects/stardew-valley-clone1.png',
  //   ],
  //   code: 'https://github.com/mdesignscode/game-info-page',
  //   live: 'https://game-info-page.onrender.com'
  // }
];

export default projectsList;
