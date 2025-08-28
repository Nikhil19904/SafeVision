import { motion } from "framer-motion";

const installationVideos = [
  {
    id: 1,
    title: "Home CCTV Installation",
    src: "https://www.w3schools.com/html/mov_bbb.mp4", // Replace with your video URL
  },
  {
    id: 2,
    title: "Office CCTV Setup",
    src: "https://www.w3schools.com/html/movie.mp4", // Replace with your video URL
  },
  {
    id: 3,
    title: "Outdoor Camera Installation",
    src: "https://www.w3schools.com/html/mov_bbb.mp4", // Replace with your video URL
  },
];

export default function CCTVInstallation() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Our Work
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Watch our professional CCTV installation projects for homes and offices.
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {installationVideos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition"
            >
              <video
                src={video.src}
                controls
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{video.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
