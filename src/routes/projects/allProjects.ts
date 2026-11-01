export type TProjectInfo = {
	live?: string;
	source?: string;
	preview: string;
	title: string;
	summary: string;
	description: string;
	techStack: string[];
	features?: string[];
	technicalDetails?: string[];
	isFeatured: boolean;
	images?: string[];
};

interface IAllProjects {
	personal: {
		[key: string]: TProjectInfo;
	};
	clones: {
		[key: string]: TProjectInfo;
	};
	fcc: {
		[key: string]: TProjectInfo;
	};
}

const allProjects = {
	personal: {
		spots: {
			isFeatured: true,
			source: 'https://github.com/mdesignscode/spots_flask',
			live: "https://pypi.org/project/spots-cli/",
			preview: '/projects/personal/spots/Spots.png',
			title: 'Spots',
			summary:
				'A Python package on PyPI that downloads music and video from Spotify and YouTube, with a CLI, a Flask API and a React web UI.',
			description:
				'Spots takes a Spotify or YouTube link, or plain search terms, and matches each song across Spotify, Deezer and YouTube. It saves the song as an mp3 tagged with cover art, album, year and lyrics, or saves the video as an mp4 at the resolution you pick.\nThe core is one installable library, used three ways: the spots_cli command, a Flask API, and a React web UI that runs on top of the API. It started as a Flask app with a React front end. I rebuilt the core as a package first, then put the API and the UI back on top of it.',
			techStack: [
				'Python',
				'Typer',
				'Flask',
				'yt-dlp',
				'Spotipy',
				'Deezer API',
				'Lyrics Genius',
				'Mutagen',
				'pytest',
				'React',
				'esbuild'
			],
			features: [
				'Install with pip install spots-cli, then run spots_cli download "Artist - Title" or paste a link',
				'Downloads single songs, playlists, albums and an artist\'s tracks as tagged mp3s',
				'Downloads any YouTube video as mp4, listing each resolution with its file size first',
				'Web UI: one field for links or search terms, a checklist to pick which playlist tracks to download, and a status on every row',
				'Flags tracks with no metadata match and lists videos that are unavailable, instead of skipping them silently',
				'Keeps a download history so nothing downloads twice, and can migrate your Spotify likes to YouTube'
			],
			technicalDetails: [
				'One library behind three interfaces: a dependency container wires the provider clients, the domain logic and a Spots facade that the CLI and the API both call',
				'Matching pipeline: provider metadata → YouTube search → scoring and filtering → download → tagging, with fallbacks when a provider fails',
				'Detects a JavaScript runtime (Deno, Bun, Node or QuickJS) at startup so yt-dlp can solve YouTube\'s download challenges, which fixed a wave of HTTP 403 errors',
				'A cache skips repeat API calls, and retries with backoff handle a dropping network',
				'The Flask API validates every request and returns clear errors, such as listing the resolutions that do exist when a requested one does not',
				'The web UI is React bundled by esbuild to ES6, so it still runs in older browsers, and it downloads playlist tracks one at a time because the API shares one yt-dlp client',
				'Bring your own credentials: Spotify, Genius and Google keys live in a per-user config folder, never in the package',
				'79 pytest tests cover the library, the CLI and the API, run on an isolated config folder'
			],
			images: [
				'/projects/personal/spots/Spots.png',
				'/projects/personal/spots/Spots-1.png',
				'/projects/personal/spots/Spots-2.png',
				'/projects/personal/spots/Spots-3.png',
				'/projects/personal/spots/Spots-4.png'
			]
		},
		randomstuff: {
			isFeatured: true,
			live: 'https://random-stuff-one.vercel.app/',
			source: 'https://github.com/mdesignscode/passthetime/',
			preview: '/projects/personal/randomstuff/Pass The Time.png',
			title: 'Random Stuff',
			summary:
				'Play Rock Paper Scissors against the computer, explore poems, view recipes and much more.',
			description:
				'This web app just consumes multiple APIs to provide a neat and responsive UI, with various functionalities.\nIt is optimized for initial page loads and search engines, with a focus on accessibility, and follows best coding practices for a maintainable project structure.',
			techStack: ['Typescript', 'Next.js', 'Prisma.js', 'Framer Motion', 'Tailwind CSS', 'Cypress'],
			technicalDetails: [
				'Framework: Built with Next.js, a React-based framework that enables server-side rendering and static site generation.',
				'Database Integration: Utilizes Prisma as an Object-Relational Mapping (ORM) tool to interact with the database, ensuring efficient data management.',
				'Styling: Employs Tailwind CSS for utility-first styling, facilitating responsive and customizable designs.',
				'API Integration: Incorporates external APIs, such as TheMealDB, to fetch and display dynamic content like recipes.',
				'Testing: Implements Cypress for end-to-end testing, ensuring the reliability and functionality of the application.'
			],
			features: [
				'Accessibility and SEO: The application is designed with a focus on accessibility and SEO, making it user-friendly and easily discoverable.'
			],
			images: [
				'/projects/personal/randomstuff/Pass The Time.png',
				'/projects/personal/randomstuff/Pass The Time-1.png',
				'/projects/personal/randomstuff/Pass The Time-2.png',
				'/projects/personal/randomstuff/Pass The Time-3.png',
				'/projects/personal/randomstuff/Pass The Time-4.png',
				'/projects/personal/randomstuff/Pass The Time-5.png',
				'/projects/personal/randomstuff/Pass The Time-6.png',
				'/projects/personal/randomstuff/Pass The Time-7.png',
				'/projects/personal/randomstuff/Pass The Time-8.png',
				'/projects/personal/randomstuff/Pass The Time-9.png'
			]
		},
		triviamania: {
			isFeatured: true,
			live: 'https://trivia-mania.onrender.com',
			source: 'https://github.com/mdesignscode/trivia_mania',
			preview: '/projects/personal/triviamania/Trivia Mania.png',
			title: 'Trivia Mania',
			summary: 'An engaging and competitive Trivia game',
			description:
				"This project was created as an attempt to gain experience building a complex multi-page, full-stack app, and includes features such as user authentication, keeping record of user's answered questions, animations for an engaging user experience, and hundreds of questions to answer.",
			techStack: ['Typescript', 'SvelteKit', 'Sequelize.js', 'Headless UI', 'Tailwind CSS'],
			technicalDetails: [
				'It is built on SvelteKit (ported from Next.js), but initially had a bunch of issues at first, which I fixed a few months later.',
				'Initially I used a json file-based storage engine, which required complex filtering to display data in a user friendly way on the front end.',
				'I fixed this by adding a database storage engine, which allows for performing complex data filtering more easily.',
				"I wanted to implement a questions pool, by storing 5 questions at a time in the browser's local storage",
				"But this also required complex Javascript logic to keep the UI in sync with the user's local storage and the backend.",
				"I realized since I am only rendering one question at a time, I don't need a complex question pool",
				"I fixed this issue by submitting the user's answer straight to the backend, and only fetching new questions on the client when a user has answered a question",
				'This eliminated need for complex client side Javascript, resulting in a smaller client bundle.'
			],
			images: [
				'/projects/personal/triviamania/Trivia Mania-1.png',
				'/projects/personal/triviamania/Trivia Mania-2.png',
				'/projects/personal/triviamania/Trivia Mania-3.png',
				'/projects/personal/triviamania/Trivia Mania.png'
			]
		},
		estore: {
			live: 'https://mdesigns-estore.vercel.app/',
			source: 'https://github.com/mdesignscode/ecommerce-store',
			preview: '/projects/personal/estore/E-Commerce Store.png',
			title: 'E-commerce store',
			summary: 'My implementation of an E-commerce app',
			description:
				'This is a web app implementing features such Product listing, shopping cart, wish list, user authentication, a dashboard for managing products in storage, secure checkout payment using Stripe.js, user purchase history, tooltips, and attention-to-detail loading skeletons',
			techStack: [
				'Typescript',
				'Next.js',
				'Zustand',
				'Stripe.js',
				'Prisma.js',
				'Framer Motion',
				'Tailwind CSS'
			],
			images: [
				'/projects/personal/estore/E-Commerce Store-1.png',
				'/projects/personal/estore/E-Commerce Store-2.png',
				'/projects/personal/estore/E-Commerce Store-3.png',
				'/projects/personal/estore/E-Commerce Store-4.png',
				'/projects/personal/estore/E-Commerce Store-5.png',
				'/projects/personal/estore/E-Commerce Store-6.png',
				'/projects/personal/estore/E-Commerce Store-7.png',
				'/projects/personal/estore/E-Commerce Store-8.png',
				'/projects/personal/estore/E-Commerce Store-9.png',
				'/projects/personal/estore/E-Commerce Store-10.png',
				'/projects/personal/estore/E-Commerce Store.png'
			],
			isFeatured: false,
		},
		portfolio: {
			description:
				"My portfolio, initially written in Next.js, but re-implemented in Astro, and now, a design I'm finally happy with, using Svelte.js",
			summary: 'My portfolio website',
			preview: '/projects/personal/portfolio/Marlon Baatjes.png',
			techStack: ['Svelte.js', 'Headless UI', 'Tailwind CSS', 'Typescript'],
			title: 'Portfolio',
			images: [
				'/projects/personal/portfolio/Marlon Baatjes.png',
				'/projects/personal/portfolio/Marlon Baatjes-1.png',
				'/projects/personal/portfolio/Marlon Baatjes-2.png',
				'/projects/personal/portfolio/Marlon Baatjes-3.png',
				'/projects/personal/portfolio/Marlon Baatjes-4.png',
				'/projects/personal/portfolio/Marlon Baatjes-5.png',
				'/projects/personal/portfolio/Marlon Baatjes-6.png'
			],
			isFeatured: false,
		},
		bmwi5: {
			description:
				'This project was developed to learn more about front end development and features parallex scroll.',
			summary: 'A showcase of the BMW i5',
			preview: '/projects/personal/bmwi5/BMW i5 eDrive-40-1.jpeg',
			techStack: ['Framer Motion', 'Headless UI', 'React.js', 'Tailwind CSS', 'Vite', 'Typescript'],
			title: 'BMW i5 eDrive40',
			live: 'https://bmw-i5.vercel.app/#',
			source: 'https://github.com/mdesignscode/bmw-i5',
			images: [
				'/projects/personal/bmwi5/BMW i5 eDrive-40-1.jpeg',
				'/projects/personal/bmwi5/BMW i5 eDrive-40-2.jpeg',
				'/projects/personal/bmwi5/BMW i5 eDrive-40-3.jpeg',
				'/projects/personal/bmwi5/BMW i5 eDrive-40-4.jpeg'
			],
			isFeatured: false,
		}
	},
	clones: {
		airbnb: {
			live: 'https://airbnb-clone-js-beta.vercel.app/hbnb',
			source: 'https://github.com/mdesignscode/airbnb-clone-js/',
			preview: '/projects/clones/airbnb/airbnb-clone-js-beta.vercel.app.png',
			title: 'AirBnB Clone',
			summary: 'A full stack clone of the Airbnb site.',
			description:
				'Replicates: places filter UI functionality, object manipulation console, RESTful API.',
			techStack: ['Next.js', 'Express.js', 'Node.js', 'MySQL', 'Swagger-UI', 'Mocha.js', 'Chai.js'],
			images: [
				'/projects/clones/airbnb/airbnb-clone-js-beta.vercel.app.png',
				'/projects/clones/airbnb/airbnb-clone-js-beta.vercel.app-2.png'
			],
			isFeatured: false,
		},
		amazon: {
			live: 'https://challenge-1dc17.web.app/',
			preview: '/projects/clones/amazon/Amazon Clone.png',
			title: 'Amazon Clone',
			summary: 'A full-stack clone of Amazon.',
			description:
				'Replicates: add to cart, checkout, user authentication, sidebar, products display, image carousel and payment gateway functionalities',
			techStack: ['React', 'Sass'],
			images: [
				'/projects/clones/amazon/Amazon Clone.png',
				'/projects/clones/amazon/Amazon Clone-1.png',
				'/projects/clones/amazon/Amazon Clone-2.png',
				'/projects/clones/amazon/Amazon Clone-3.png',
				'/projects/clones/amazon/Amazon Clone-4.png',
				'/projects/clones/amazon/Amazon Clone-5.png',
				'/projects/clones/amazon/Amazon Clone-6.png'
			],
			isFeatured: false,
		},
		'game-info': {
			live: 'https://game-info-page.onrender.com/',
			source: 'https://github.com/mdesignscode/game-info-page',
			preview: '/projects/clones/game-info/Stardew Valley Info.png',
			title: 'Game Info Page',
			summary: "A frontend clone of Nintendo's Stardew Valley game info page",
			description: 'Replicates: responsive navbar, image carousel, and dropdown search input',
			techStack: ['React.js', 'Sass', 'Vite'],
			images: [
				'/projects/clones/game-info/Stardew Valley Info.png',
				'/projects/clones/game-info/Stardew Valley Info-1.png',
				'/projects/clones/game-info/Stardew Valley Info-2.png',
				'/projects/clones/game-info/Stardew Valley Info-3.png',
				'/projects/clones/game-info/Stardew Valley Info-4.png',
				'/projects/clones/game-info/Stardew Valley Info-5.png'
			],
			isFeatured: false,
		},
		qrates: {
			live: 'https://qrates-clone-mauve.vercel.app/',
			source: 'https://github.com/mdesignscode/qrates-clone',
			preview: '/projects/clones/qrates/Qrates Clone For Artists.jpeg',
			title: 'For Artists Page',
			summary: "A front end clone of Qrates' For Artists page",
			description: 'Replicates: responsive design, css grid',
			techStack: ['React.js', 'Tailwind CSS', 'Vite', 'Typescript'],
			images: [
				'/projects/clones/qrates/Qrates Clone For Artists.jpeg',
				'/projects/clones/qrates/Qrates Clone For Artistshttp __localhost 5173_(2).jpeg',
				'/projects/clones/qrates/Qrates Clone For Artistshttp __localhost 5173_(3).jpeg',
				'/projects/clones/qrates/Qrates Clone For Artistshttp __localhost 5173_(4).jpeg',
				'/projects/clones/qrates/Qrates Clone For Artistshttp __localhost 5173_(5).jpeg',
				'/projects/clones/qrates/Qrates Clone For Artistshttp __localhost 5173_(6).jpeg',
				'/projects/clones/qrates/Qrates Clone For Artistshttp __localhost 5173_(7).jpeg',
				'/projects/clones/qrates/Qrates Clone For Artistshttp __localhost 5173_(8).jpeg',
				'/projects/clones/qrates/Qrates Clone For Artistshttp __localhost 5173_(9).jpeg',
				'/projects/clones/qrates/Qrates Clone For Artistshttp __localhost 5173_(10).jpeg',
				'/projects/clones/qrates/Qrates Clone For Artistshttp __localhost 5173_(11).jpeg'
			],
			isFeatured: false,
		}
	},
	fcc: {
		'random-quotes-machine': {
			title: 'Random Quotes Machine',
			preview: '/projects/fcc/Random Quote Machine.png',
			source: 'https://codepen.io/Marlon-B/pen/RwEwjaM',
			live: 'https://codepen.io/Marlon-B/full/PoXqbKG',
			summary:
				'A web application that displays random quotes and allows users to share them on social media.',
			description:
				'This project involves creating an interface that fetches and displays random quotes. Users can generate new quotes and share their favorite ones on platforms like Twitter.',
			techStack: ['React', 'Scss', 'JavaScript', 'HTML'],
			features: [
				'Fetch and display random quotes',
				'Share quotes on social media',
				'Responsive design for various screen sizes'
			],
			technicalDetails: [
				'Utilizes React state to manage quote data',
				'Incorporates external API for quote retrieval',
				'Implements Bootstrap for responsive layout and styling'
			],
			images: ['/projects/fcc/Random Quote Machine.png'],
			isFeatured: false,
		},
		'markdown-previewer': {
			title: 'Markdown Previewer',
			preview: '/projects/fcc/Markdown Previewer.png',
			live: 'https://codepen.io/Marlon-B/full/MWZWVVK',
			source: 'https://codepen.io/Marlon-B/pen/MWZWVVK',
			summary: 'An interactive editor that converts Markdown input into HTML preview in real-time.',
			description:
				'This application provides a text area for users to input Markdown syntax and displays the corresponding HTML output simultaneously.',
			techStack: ['React', 'Marked.js', 'JavaScript', 'HTML', 'CSS'],
			features: [
				'Real-time conversion of Markdown to HTML',
				'Syntax highlighting for code blocks',
				'Responsive and user-friendly interface'
			],
			technicalDetails: [
				'Integrates Marked.js library for Markdown parsing',
				'Manages input and output synchronization using React state',
				'Applies custom CSS for enhanced styling and layout'
			],
			images: ['/projects/fcc/Markdown Previewer.png'],
			isFeatured: false,
		},
		'drum-machine': {
			title: 'Drum Machine',
			preview: '/projects/fcc/Drum Machine.png',
			source: 'https://codepen.io/Marlon-B/pen/OJrJZPL',
			live: 'https://codepen.io/Marlon-B/full/OJrJZPL',
			summary:
				'A virtual drum kit that allows users to play different drum sounds using buttons or keyboard keys.',
			description:
				'This project simulates a drum machine where each button corresponds to a specific drum sound. Users can click the buttons or press designated keys to play sounds.',
			techStack: ['React', 'JavaScript', 'HTML', 'CSS'],
			features: [
				'Play drum sounds on button click or key press',
				'Display the name of the current sound',
				'Responsive design for various devices'
			],
			technicalDetails: [
				'Loads audio clips and associates them with React components',
				'Handles user interactions through event listeners',
				'Implements CSS Grid for layout arrangement'
			],
			images: ['/projects/fcc/Drum Machine.png'],
			isFeatured: false,
		},
		'javascript-calculator': {
			preview: '/projects/fcc/JavaScript Calculator.png',
			live: 'https://codepen.io/Marlon-B/full/eYdZxmz',
			source: 'https://codepen.io/Marlon-B/pen/eYdZxmz',
			title: 'JavaScript Calculator',
			summary: 'A functional calculator built with JavaScript.',
			description:
				'This project is a calculator app that supports basic arithmetic operations and provides a clean UI for user interaction.',
			techStack: ['React', 'JavaScript', 'HTML', 'CSS'],
			features: [
				'Perform basic arithmetic calculations',
				'Clear and reset calculator input',
				'Responsive and user-friendly interface'
			],
			technicalDetails: [
				'Manages calculation logic within React state',
				'Updates display based on user input',
				'Uses CSS Flexbox for layout'
			],
			images: ['/projects/fcc/JavaScript Calculator.png'],
			isFeatured: false,
		},
		'pomodoro-timer': {
			preview: '/projects/fcc/25 5 Clock.png',
			live: 'https://codepen.io/Marlon-B/full/YzYoWjj',
			source: 'https://codepen.io/Marlon-B/pen/YzYoWjj',
			title: 'Pomodoro Timer',
			summary: 'A timer based on the Pomodoro technique for productivity.',
			description:
				'This application allows users to set work and break intervals to manage time effectively using the Pomodoro technique.',
			techStack: ['React', 'JavaScript', 'HTML', 'CSS'],
			features: [
				'Set customizable work and break periods',
				'Start, pause, and reset timer controls',
				'Audible alerts at interval completion'
			],
			technicalDetails: [
				'Uses React state for timer management',
				'Implements setInterval for timing functionality',
				'CSS animations for visual feedback'
			],
			images: ['/projects/fcc/25 5 Clock.png'],
			isFeatured: false,
		}
	}
} satisfies IAllProjects;

export default allProjects;
