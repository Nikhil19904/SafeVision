import { Shield, Video, Wifi, PhoneCall, Wrench, Cpu } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "CCTV Installation",
      description:
        "Professional installation of high-quality CCTV cameras at your home or business.",
      icon: <Video className="h-12 w-12 text-orange-500" />,
    },
    {
      title: "Surveillance Monitoring",
      description:
        "24/7 monitoring services to keep your property safe and secure.",
      icon: <Shield className="h-12 w-12 text-orange-500" />,
    },
    {
      title: "Wi-Fi Camera Setup",
      description:
        "Seamless setup of wireless cameras with remote mobile access.",
      icon: <Wifi className="h-12 w-12 text-orange-500" />,
    },
    {
      title: "Repair & Maintenance",
      description:
        "On-demand repair, servicing and regular maintenance of CCTV systems.",
      icon: <Wrench className="h-12 w-12 text-orange-500" />,
    },
    {
      title: "Smart Security Systems",
      description:
        "Integration of CCTV with IoT & smart devices for enhanced security.",
      icon: <Cpu className="h-12 w-12 text-orange-500" />,
    },
    {
      title: "Customer Support",
      description:
        "Dedicated 24/7 support to solve your CCTV and security queries.",
      icon: <PhoneCall className="h-12 w-12 text-orange-500" />,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Explore our wide range of professional CCTV & security solutions
            designed to keep your home and business safe.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center"
            >
              <div className="flex items-center justify-center mb-5">
                <div className="bg-orange-100 p-5 rounded-full">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-800">
                {service.title}
              </h3>
              <p className="text-gray-600 mt-3">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
