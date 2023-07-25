import Image from "next/image";

export default function Loading() {
  return <div className="loader">
    <Image src="/Bean Eater-1s-200px.svg" alt="" width={200} height={200} />
  </div>
}
