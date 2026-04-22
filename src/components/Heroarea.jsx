export default function Heroarea() {
  const images = [
    "https://assets-in-gm.bmscdn.com/promotions/cms/creatives/1776147401672_popwebnew.jpg",
    "https://assets-in-gm.bmscdn.com/promotions/cms/creatives/1776495556236_jpd.jpeg",
    "https://assets-in-gm.bmscdn.com/promotions/cms/creatives/1776691487746_et00494860punweb.jpeg",
    "https://assets-in-gm.bmscdn.com/promotions/cms/creatives/1772173603264_zkmumbaidomebmsadaptsgeneric1240x300px.jpg",
  ];

  return (
    <div className="relative overflow-hidden w-full bg-black text-white h-[280px]">
      
      {/* Gradient edges */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-black to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-black to-transparent z-10" />

      <div
        className="flex w-max animate-marquee hover:[animation-play-state:paused]"
        style={{ animationDuration: "10s" }}
      >
        {/* First set */}
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

        {/* Duplicate set */}
        <div className="flex gap-6 px-4">
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