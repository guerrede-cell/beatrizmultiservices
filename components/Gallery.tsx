import Image from "next/image";
import Reveal from "./Reveal";

export type GalleryPhoto = { src: string; alt: string; tall?: boolean };

export default function Gallery({ photos }: { photos: GalleryPhoto[] }) {
  return (
    <div className="mx-auto grid max-w-[1150px] auto-rows-[200px] grid-cols-2 gap-4 md:grid-cols-4 md:auto-rows-[220px]">
      {photos.map((p, i) => (
        <Reveal
          key={p.src}
          delay={(i % 8) * 60}
          className={`overflow-hidden rounded ${p.tall ? "md:row-span-2" : ""}`}
        >
          <div className="relative h-full w-full transition-transform duration-500 hover:scale-[1.06]">
            <Image src={p.src} alt={p.alt} fill className="object-cover object-[center_25%]" />
          </div>
        </Reveal>
      ))}
    </div>
  );
}
