import Image from "next/image";
import Link from "next/link";

export default function ActiveSlide ({ preview, description, title, live, code }) {
  return (
    <div className='slider__container_slide'>
      <div className='slider__container_slidePreview'>
        <Image width={1366} height={755} src={preview[0]} alt="" fetchPriority="high" />
        <Image width={1366} height={755} src={preview[1]} alt="" fetchPriority="high" />
      </div>

      <h1>{title}</h1>
      {description}

      <div className="slider__container_slideButtons">
        <Link href={live} target="_blank">
          <button>Live Demo</button>
        </Link>
        <Link href={code} target="_blank">
          <button>Source Code</button>
        </Link>
      </div>
    </div>
  );
};
