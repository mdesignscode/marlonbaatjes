import { createSignal } from "solid-js";
import "./styles/hamburgers.css";
import "./styles/index.css";

const navLinks = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Projects",
    path: "/projects",
  },
  {
    name: "Contact Me",
    path: "/contact",
  },
  {
    name: "My skills",
    path: "/skills",
  },
  {
    name: "About me",
    path: "/about",
  },
];

export default function Navbar() {
  const [showNavbar, setShowNavbar] = createSignal(false),
    [isMobile, setIsMobile] = createSignal(window.innerWidth < 768);

  window.addEventListener("resize", () => setIsMobile(window.innerWidth < 768));

  return (
    <>
      <button
        aria-label={showNavbar() ? "Close menu" : "Open menu"}
        class={`hamburger hamburger--emphatic ${
          showNavbar() && " is-active"
        } absolute ${
          isMobile() ? "bottom-2 shadow-drop" : "top-2"
        } right-2 z-50`}
        onClick={() => setShowNavbar(!showNavbar())}
        type="button"
        id="hamburger"
        aria-controls="nav"
        aria-expanded={showNavbar()}
      >
        <span class="hamburger-box">
          <span class="hamburger-inner"></span>
        </span>
      </button>

      <nav
        id="nav"
        aria-hidden={showNavbar()}
        aria-labelledby="hamburger"
        class={`w-full absolute z-30 bg-neutral-700 ${
          !showNavbar() ? "h-0 invisible" : "h-full visible"
        }`}
      >
        <div
          class={`${
            showNavbar() ? "opacity-100" : "opacity-0"
          } transition-all duration-500 flex flex-col text-2xl justify-center items-center h-full w-3/6 m-auto text-center gap-6`}
        >
          {navLinks
            .sort((a, b) => (a.name > b.name ? 1 : 0))
            .map(({ name, path }) => (
              <a
                onClick={() => setShowNavbar(false)}
                class="nav-item px-4 py-2 w-full"
                href={path}
              >
                {name}
              </a>
            ))}
        </div>
      </nav>
    </>
  );
}
