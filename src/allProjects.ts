interface IAllProjects {
  [key: string]: {
    [key: string]: TProjectInfo
  }
}

const allProjects: IAllProjects = {
  personal: {
    spots: {
      isFeatured: true,
      source: "https://github.com/mdesignscode/spots_flask",
      preview: "/src/assets/projects/personal/spots/Spots.png",
      title: "Spots",
      summary: "A Spotify and YouTube downloader.",
      description: "I love listening to music, and I love a visually appealing music library, like the one Spotify provides.\nBut I don't always have internet, so I created Spots, a web app that converts a Spotify or YouTube link to an mp3 file stored on a user's device.",
      techStack: [
        "Python",
        "Flask",
        "Jinja",
        "HTML",
        "CSS",
        "Javascript",
      ],
      features: [
        "Download all songs in a Spotify playlist or album, and YouTube playlist.",
        "Download all songs in a signed in user has liked.",
        "Download a single track, along with optional recommeded tracks",
        "Embed metadata such as cover image, lyrics, song title and more to a downloaded song",
        "Remove songs from a user's liked tracks",
      ],
      technicalDetails: [
        "The app takes quite a few steps before downloading a song. It first retrieves the metadata for a given track from Spotify, then searches for the track on YouTube, then the results are displayed to the user for selection. Finally, the track is again retrieved from YouTube for downloading.\nAll this can take a very long time to complete, for this reason I have implemented a json-file cache system that stores all retrieved metadata for immediate retrieval next time the same track is requested.",
        "I have also implemented a downloads history file to avoid duplicate downloads.",
        "Internet connections can sometimes be glitchy and cause downloads to fail, for this I have utilized Python's Tenacity library for retrying downloads.\nAnd if all downloads eventually fail because of some reason, the app will continue downloading from the last failed track because of the cache and history sysytem ;)",
        "The app is designed for personal use only, so it runs on a user's machine and downloads tracks to that machine.",
      ]
    },
    randomstuff: {
      live: "https://random-stuff-one.vercel.app/",
      source: "https://github.com/mdesignscode/passthetime/",
      preview: "/src/assets/projects/personal/randomstuff/Pass The Time.png",
      title: "Random Stuff",
      summary: "Play Rock Paper Scissors against the computer, explore poems, view recipes and much more.",
      description: "This web app just consumes multiple APIs to provide a neat and responsive UI, with various functionalities.\nIt is optimized for initial page loads and search engines, with a focus on accessibility, and follows best coding practices for a maintainable project structure.",
      techStack: [
        "Typescript",
        "Next.js",
        "Prisma.js",
        "Framer Motion",
        "Tailwind CSS"
      ]
    },
    triviamania: {
      isFeatured: true,
      live: "https://triviamania.vercel.app",
      source: "https://github.com/mdesignscode/trivia_mania",
      preview: "/src/assets/projects/personal/triviamania/Trivia Mania.png",
      title: "Trivia Mania",
      summary: "An engaging and competitive Trivia game",
      description: "This project was created as an attempt to gain experience building a complex multi-page, full-stack app, and includes features such as user authentication, keeping record of user's answered questions, animations for an engaging user experience, and hundreds of questions to answer.",
      techStack: [
        "Typescript",
        "Next.js",
        "Bun",
        "Hono",
        "Prisma.js",
        "React Query",
        "Framer Motion",
        "Headless UI",
        "Tailwind CSS"
      ],
      technicalDetails: [
        "It is built on Next.js, but initially had a bunch of issues at first, which I fixed a few months later.\nInitially I used a json file-based storage engine, which required complex filtering to display data in a user friendly way on the front end. I fixed this by adding a database storage engine, which allows for performing complex data filtering more easily.",
        "I wanted to implement a questions pool, by storing 5 questions at a time in the browser's local storage, but this also required complex Javascript logic to keep the UI in sync with the user's local storage and the backend. I realized since I am only rendering one question at a time, I don't need a complex question pool, and fixed this issue by submitting the user's answer straight to the backend, and only fetching new questions on the client when a user has answered a question, this eliminated need for complex client side Javascript, resulting in a smaller client bundle."
      ]
    },
    estore: {
      live: "https://mdesigns-estore.vercel.app/",
      source: "https://github.com/mdesignscode/ecommerce-store",
      preview: "/src/assets/projects/personal/estore/E-Commerce Store.png",
      title: "E-commerce store",
      summary: "My implementation of an E-commerce app",
      description: "This is a web app implementing features such Product listing, shopping cart, wish list, user authentication, a dashboard for managing products in storage, secure checkout payment using Stripe.js, user purchase history, tooltips, and attention-to-detail loading skeletons",
      techStack: [
        "Typescript",
        "Next.js",
        "Zustand",
        "Stripe.js",
        "Prisma.js",
        "Framer Motion",
        "Tailwind CSS"
      ]
    },
    portfolio: {
      description: "My portfolio, initially written in Next.js, but re-implemented in Astro",
      summary: "My portfolio website",
      preview: "/src/assets/projects/personal/portfolio/Marlon Baatjes.png",
      techStack: [
        "Astro",
        "Solid.js",
        "Tailwind CSS",
        "Typescript"
      ],
      title: "Portfolio"
    }
  },
  clones: {
    airbnb: {
      live: "https://airbnb-clone-js-beta.vercel.app/hbnb",
      source: "https://github.com/mdesignscode/airbnb-clone-js/",
      preview:
        "/src/assets/projects/clones/airbnb/airbnb-clone-js-beta.vercel.app.png",
      title: "AirBnB Clone",
      summary: "A full stack clone of the Airbnb site.",
      description: "Replicates: places filter UI functionality, object manipulation console, RESTful API.",
      techStack: [
        "Next.js",
        "Express.js",
        "Node.js",
        "MySQL",
        "Swagger-UI",
        "Mocha.js",
        "Chai.js"
      ]
    },
    amazon: {
      live: "https://challenge-1dc17.web.app/",
      preview: "/src/assets/projects/clones/amazon/Amazon Clone.png",
      title: "Amazon Clone",
      summary: "A full-stack clone of Amazon.",
      description: "Replicates: add to cart, checkout, user authentication, sidebar, products display, image carousel and payment gateway functionalities",
      techStack: [
        "React",
        "Sass"
      ]
    },
    "game-info": {
      live: "https://game-info-page.onrender.com/",
      source: "https://github.com/mdesignscode/game-info-page",
      preview: "/src/assets/projects/clones/game-info/Stardew Valley Info.png",
      title: "Game Info Page",
      summary: "A frontend clone of Nintendo's Stardew Valley game info page",
      description: "Replicates: responsive navbar, image carousel, and dropdown search input",
      techStack: [
        "React.js",
        "Sass",
        "Vite",
      ]
    },
  }
};

export default allProjects;
