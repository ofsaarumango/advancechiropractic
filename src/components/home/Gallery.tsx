"use client";

import React, { useState } from "react";
import Image from "next/image";

const images = [
  "296472047_430048449139695_4875742578698156479_n.webp",
  "296493399_429314009213139_5706145132059892624_n.webp",
  "296760431_429314092546464_6084464519995851273_n-1.webp",
  "296804638_429313892546484_908788997255188836_n-1.webp",
  "296860200_429313922546481_8394405309514402548_n.webp",
  "296869604_429313972546476_5696168653793314395_n.webp",
  "296934696_429314045879802_2813955907489497945_n.webp",
  "297150297_430731472404726_307700522373696391_n.webp",
  "297273225_431755378969002_740489263202433599_n.webp",
  "301577787_451387930339080_7142014005449440304_n.webp",
  "302260599_454010070076866_1969430821137836856_n.webp",
  "302421203_454010026743537_1282873626246103951_n.webp",
  "302434034_455122783298928_3419878825723265585_n.webp",
  "306229881_457681983043008_2294503558828880672_n.webp",
  "WhatsApp-Image-2022-09-19-at-12.11.54-PM-1.webp",
  "WhatsApp-Image-2022-09-19-at-12.11.55-PM-1.webp",
  "WhatsApp-Image-2022-09-19-at-12.11.55-PM.webp"
];

const videos = [
  "WhatsApp-Video-2022-09-19-at-12.11.52-PM.mp4",
  "WhatsApp-Video-2022-09-19-at-12.11.59-PM.mp4"
];

export default function Gallery() {
  const [selectedMedia, setSelectedMedia] = useState<{type: 'image'|'video', src: string} | null>(null);

  // Combine items into a mixed array for the masonry grid
  const allMedia = [
    { type: 'video', src: videos[0] },
    { type: 'image', src: images[0] },
    { type: 'image', src: images[1] },
    { type: 'image', src: images[2] },
    { type: 'image', src: images[3] },
    { type: 'image', src: images[4] },
    { type: 'image', src: images[5] },
    { type: 'image', src: images[6] },
    { type: 'image', src: images[7] },
    { type: 'image', src: images[8] },
    { type: 'video', src: videos[1] },
    { type: 'image', src: images[9] },
    { type: 'image', src: images[10] },
    { type: 'image', src: images[11] },
    { type: 'image', src: images[12] },
    { type: 'image', src: images[13] },
    { type: 'image', src: images[14] },
    { type: 'image', src: images[15] },
    { type: 'image', src: images[16] },
  ];

  return (
    <section id="gallery" className="py-24 px-margin-mobile md:px-margin-desktop bg-surface max-w-max-width mx-auto">
      {/* Masonry Grid */}
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {allMedia.map((media, idx) => (
          <div 
            key={idx} 
            className="break-inside-avoid rounded-xl overflow-hidden shadow-sm hover:shadow-medical-hover border border-outline-variant/30 cursor-pointer relative group transition-all duration-300 transform hover:-translate-y-1"
            onClick={() => setSelectedMedia({ type: media.type as 'image'|'video', src: `/gallery/${media.src}` })}
          >
            {media.type === 'video' ? (
              <div className="relative">
                <video 
                  src={`/gallery/${media.src}`} 
                  className="w-full h-auto object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-300"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/80 rounded-full w-12 h-12 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="material-symbols-outlined text-deep-blue-primary text-2xl ml-1">play_arrow</span>
                </div>
              </div>
            ) : (
              <div className="relative w-full">
                <Image 
                  src={`/gallery/${media.src}`} 
                  alt={`Gallery image ${idx}`} 
                  width={600} 
                  height={800} 
                  className="w-full h-auto object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-deep-blue-primary/0 group-hover:bg-deep-blue-primary/20 transition-all duration-300 flex items-center justify-center">
                  <span className="material-symbols-outlined text-white text-4xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-50 group-hover:scale-100 transform">zoom_in</span>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedMedia && (
        <div 
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 md:p-12 backdrop-blur-sm"
          onClick={() => setSelectedMedia(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white bg-white/10 hover:bg-healthcare-teal rounded-full p-2 transition-colors duration-300"
            onClick={() => setSelectedMedia(null)}
          >
            <span className="material-symbols-outlined text-3xl block">close</span>
          </button>
          
          <div 
            className="relative w-full max-w-5xl max-h-[90vh] flex items-center justify-center shadow-2xl rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {selectedMedia.type === 'video' ? (
              <video 
                src={selectedMedia.src} 
                className="w-full h-full max-h-[90vh] object-contain bg-black"
                controls
                autoPlay
                playsInline
              />
            ) : (
              <img 
                src={selectedMedia.src} 
                alt="Enlarged gallery view" 
                className="w-auto h-auto max-w-full max-h-[90vh] object-contain rounded-lg"
              />
            )}
          </div>
        </div>
      )}
    </section>
  );
}
