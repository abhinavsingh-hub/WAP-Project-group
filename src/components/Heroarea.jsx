export default function Heroarea() {
  const images = [
    "https://assets-in-gm.bmscdn.com/promotions/cms/creatives/1776147401672_popwebnew.jpg",
    "https://assets-in-gm.bmscdn.com/promotions/cms/creatives/1776495556236_jpd.jpeg",
    "https://assets-in-gm.bmscdn.com/promotions/cms/creatives/1776691487746_et00494860punweb.jpeg",
    "https://assets-in-gm.bmscdn.com/promotions/cms/creatives/1772173603264_zkmumbaidomebmsadaptsgeneric1240x300px.jpg",
  ];

  return (
    <div className="group relative overflow-hidden w-full bg-white h-[280px] cursor-pointer">

      <div className="pointer-events-none absolute left-0 top-0 h-full w-10 bg-gradient-to-r from-blue-100 to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-10 bg-gradient-to-l from-red-100 to-transparent z-10" />

      <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">

        <div className="flex gap-6 px-4 mt-2">
          {images.map((src, i) => (
            <img
              key={i}
              src={src}
              className="h-[260px] w-auto rounded-xl object-cover"
              alt=""
            />
          ))}
        </div>

        <div className="flex gap-6 px-4 mt-2">
          {images.map((src, i) => (
            <img
              key={`dup-${i}`}
              src={src}
              className="h-[260px] w-auto rounded-xl object-cover"
              alt=""
            />
          ))}
        </div>

      </div>
    </div>
  );
}