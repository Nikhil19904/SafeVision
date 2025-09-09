import React from "react";
import Gallery from "../components/Gallery";

export default function GalleryPage() {
  // यहाँ आप अपने real photos/videos डाल सकते हैं
  const items = [
    {
      id: 1,
      type: "image",
      src: "https://source.unsplash.com/random/900x600?nature",
      title: "Beautiful Nature",
    },
    {
      id: 2,
      type: "video",
      src: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
      title: "Flower Timelapse",
    },
    {
      id: 3,
      type: "image",
      src: "https://source.unsplash.com/random/900x600?technology",
      title: "Technology Image",
    },
    {
      id: 4,
      type: "video",
      src: "https://www.w3schools.com/html/mov_bbb.mp4",
      title: "Big Buck Bunny",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">My Work Gallery</h1>
        <p className="text-gray-600 mb-8">
          Here you can explore my work in the form of images and videos.
        </p>

        {/* Gallery Component */}
        <Gallery items={items} />
      </div>
    </div>
  );
}
