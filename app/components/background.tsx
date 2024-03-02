export default function Background() {
  return (
    <div className="absolute h-full w-full z-0 top-0 left-0">
      <div className="bg-image blur-[8px]" />
      <div className="overlay opacity-80" />
    </div>
  );
}
