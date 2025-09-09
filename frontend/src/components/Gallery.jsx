import React, { useState } from "react";
import { X, ChevronLeft, ChevronRight, Play } from "lucide-react";

const sampleItems = [
  {
    id: 1,
    type: "image",
    src: "https://source.unsplash.com/random/800x600?nature",
    title: "Nature Image",
  },
  {
    id: 2,
    type: "video",
    src: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
    title: "Flower Video",
  },
  {
    id: 3,
    type: "image",
    src: "https://source.unsplash.com/random/800x600?tech",
    title: "Tech Image",
  },
];

export default function Gallery({ items = sampleItems }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const openViewer = (index) => setActiveIndex(index);
  const closeViewer = () => setActiveIndex(null);
  const showPrev = () =>
    setActiveIndex((i) => (i - 1 + items.length) % items.length);
  const showNext = () =>
    setActiveIndex((i) => (i + 1) % items.length);

  const activeItem = activeIndex !== null ? items[activeIndex] : null;

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Gallery</h2>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {items.map((item, index) => (
          <div
            key={item.id}
            className="relative cursor-pointer group overflow-hidden rounded-lg shadow hover:shadow-lg transition"
            onClick={() => openViewer(index)}
          >
            {item.type === "image" ? (
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-60 object-cover group-hover:scale-105 transition-transform"
              />
            ) : (
              <div className="relative w-full h-60 bg-black flex items-center justify-center">
                <video
                  src={item.src}
                  className="w-full h-60 object-cover opacity-70"
                  muted
                />
                <Play className="absolute text-white h-12 w-12 opacity-90" />
              </div>
            )}
            <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-sm p-2 truncate">
              {item.title}
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Viewer */}
      {activeItem && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">
          {/* Close */}
          <button
            className="absolute top-4 right-4 text-white p-2"
            onClick={closeViewer}
          >
            <X className="h-6 w-6" />
          </button>

          {/* Prev */}
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white p-2"
            onClick={showPrev}
          >
            <ChevronLeft className="h-8 w-8" />
          </button>

          {/* Next */}
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white p-2"
            onClick={showNext}
          >
            <ChevronRight className="h-8 w-8" />
          </button>

          {/* Content */}
          <div className="max-w-4xl max-h-[80vh]">
            {activeItem.type === "image" ? (
              <img
                src={activeItem.src}
                alt={activeItem.title}
                className="max-h-[80vh] mx-auto rounded"
              />
            ) : (
              <video
                src={activeItem.src}
                controls
                autoPlay
                className="max-h-[80vh] mx-auto rounded"
              />
            )}
            <p className="text-center text-white mt-2">
              {activeItem.title}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
