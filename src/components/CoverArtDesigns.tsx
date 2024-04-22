import { createSignal, type Setter } from "solid-js";

export default function CoverArtDesigns({ images }: { images: string[] }) {
  const [currentIndex, setCurrentIndex] = createSignal(0),
    getPrevIndex = () =>
      currentIndex() === 1 ? images.length - 1 : currentIndex() - 2,
    getNextIndex = () =>
      currentIndex() === images.length ? 1 : currentIndex(),
    setPrevIndex = () =>
      setCurrentIndex(
        currentIndex() === 1 ? images.length - 1 : currentIndex() - 1
      ),
    setNextIndex = () =>
      setCurrentIndex(
        currentIndex() === images.length ? 1 : currentIndex() + 1
      );

  return (
    <>
      <div class="flex-1 md:flex-none md:w-[70%] flex flex-col">
        <p class="opacity-0 info-item">
          What did I do before programming? Cover Art Design. Here are some of
          my favorite designs
        </p>

        <div class="flex flex-wrap gap-4 my-auto py-4">
          {Object.values(images).map((path, i) => (
            <button
              onClick={() => setCurrentIndex(i + 1)}
              class="md:w-[30%] aspect-square transition-all opacity-0 cover-image"
              aria-label={`Show image ${i + 1}`}
              aria-expanded={!!currentIndex()}
              aria-controls="expanded-image"
              id={`show-design-${i}`}
            >
              <img
                loading="lazy"
                class="rounded-sm"
                alt={`Cover art design ${i + 1}`}
                src={path.replace("/src/assets", "")}
              />
            </button>
          ))}
        </div>

        <a
          class="flex gap-2 hover:text-emerald-600 transition-colors md:text-xl w-max opacity-0 info-item"
          target="_blank"
          href="https://www.instagram.com/its_mdesigns"
        >
          See more <ExternalLinkIcon />
        </a>
      </div>

      <div
        class={`${
          currentIndex() ? "visible opacity-100" : "invisible opacity-0"
        } w-full h-[100dvh] absolute top-0 left-0 bg-black bg-opacity-80 transition-all grid z-[9999]`}
        aria-hidden={!!currentIndex()}
        aria-labelledby={`show-design-${currentIndex()}`}
        id="expanded-image"
      >
        <div class="m-auto w-[90%] md:w-3/4 relative group md:flex justify-center">
          <CloseButton setCurrentIndex={setCurrentIndex} />

          <MobileNavigation
            setNextIndex={setNextIndex}
            setPrevIndex={setPrevIndex}
          />

          <DesktopNavigation
            images={images}
            getPrevIndex={getPrevIndex}
            getNextIndex={getNextIndex}
            setNextIndex={setNextIndex}
            setPrevIndex={setPrevIndex}
          />

          {
            <img
              class="md:w-1/2 relative z-30"
              src={images[currentIndex() - 1]}
              alt="Opened cover design"
              aria-live="polite"
            />
          }
        </div>
      </div>
    </>
  );
}

function CloseButton({ setCurrentIndex }: { setCurrentIndex: Setter<number> }) {
  return (
    <button
      onClick={() => setCurrentIndex(0)}
      aria-label="Hide image"
      class="absolute -top-14 left-0 transition-all md:top-0 z-50"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        class="size-12 shadow-lg"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {" "}
          <path
            d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM15.36 14.3C15.65 14.59 15.65 15.07 15.36 15.36C15.21 15.51 15.02 15.58 14.83 15.58C14.64 15.58 14.45 15.51 14.3 15.36L12 13.06L9.7 15.36C9.55 15.51 9.36 15.58 9.17 15.58C8.98 15.58 8.79 15.51 8.64 15.36C8.35 15.07 8.35 14.59 8.64 14.3L10.94 12L8.64 9.7C8.35 9.41 8.35 8.93 8.64 8.64C8.93 8.35 9.41 8.35 9.7 8.64L12 10.94L14.3 8.64C14.59 8.35 15.07 8.35 15.36 8.64C15.65 8.93 15.65 9.41 15.36 9.7L13.06 12L15.36 14.3Z"
            fill="#fff"
          ></path>{" "}
        </g>
      </svg>
    </button>
  );
}

function ArrowIcon({ direction }: { direction?: string }) {
  return (
    <svg
      fill="white"
      viewBox="-8.5 0 32 32"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      class={`size-14 ${direction}`}
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <title>right</title>{" "}
        <path d="M7.75 16.063l-7.688-7.688 3.719-3.594 11.063 11.094-11.344 11.313-3.5-3.469z"></path>{" "}
      </g>
    </svg>
  );
}

function MobileNavigation({
  setPrevIndex,
  setNextIndex,
}: {
  setPrevIndex: () => {};
  setNextIndex: () => {};
}) {
  return (
    <div class="flex justify-between w-full absolute -bottom-14 md:hidden z-[999]">
      <button
        class="shadow-2xl hover:scale-110 transition-transform"
        onClick={setPrevIndex}
        aria-label="Next Image"
      >
        <ArrowIcon direction="rotate-180" />
      </button>

      <button
        class="shadow-2xl hover:scale-110 transition-transform"
        onClick={setNextIndex}
        aria-label="Next Image"
      >
        <ArrowIcon />
      </button>
    </div>
  );
}

function DesktopNavigation({
  images,
  getPrevIndex,
  getNextIndex,
  setPrevIndex,
  setNextIndex,
}: {
  images: string[];
  getPrevIndex: () => number;
  getNextIndex: () => number;
  setPrevIndex: () => {};
  setNextIndex: () => {};
}) {
  const [navigating, setNavigating] = createSignal(false);

  return (
    <div class="hidden md:flex absolute top-0 left-0 size-full justify-center z-0 overflow-hidden">
      <button
        aria-label="Show next image"
        class={`transition-all absolute w-1/2 blur-sm ${
          navigating()
            ? "-rotate-[5deg] -translate-x-10"
            : "-rotate-[15deg] -translate-x-16 group-hover:-translate-x-28 group-hover:-rotate-[10deg]"
        }`}
        onClick={() => {
          setNavigating(true);
          setTimeout(() => {
            setPrevIndex();
            setNavigating(false);
          }, 300);
        }}
      >
        <img src={images[getPrevIndex()]} alt="Next design" />
      </button>

      <button
        class={`transition-all absolute w-1/2 blur-sm ${
          navigating()
            ? "rotate-[5deg] translate-x-10"
            : "rotate-[15deg] translate-x-16 group-hover:translate-x-28 group-hover:rotate-[10deg]"
        }`}
        aria-label="Show next image"
        onClick={() => {
          setNavigating(true);
          setTimeout(() => {
            setNextIndex();
            setNavigating(false);
          }, 300);
        }}
      >
        <img src={images[getNextIndex()]} alt="Next design" />
      </button>
    </div>
  );
}

function ExternalLinkIcon() {
  return (
    <svg
      class="w-5"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <g id="Interface / External_Link">
          <path
            id="Vector"
            d="M10.0002 5H8.2002C7.08009 5 6.51962 5 6.0918 5.21799C5.71547 5.40973 5.40973 5.71547 5.21799 6.0918C5 6.51962 5 7.08009 5 8.2002V15.8002C5 16.9203 5 17.4801 5.21799 17.9079C5.40973 18.2842 5.71547 18.5905 6.0918 18.7822C6.5192 19 7.07899 19 8.19691 19H15.8031C16.921 19 17.48 19 17.9074 18.7822C18.2837 18.5905 18.5905 18.2839 18.7822 17.9076C19 17.4802 19 16.921 19 15.8031V14M20 9V4M20 4H15M20 4L13 11"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </g>
      </g>
    </svg>
  );
}
