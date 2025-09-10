import { Shield, Video, Wifi, PhoneCall, Wrench, Cpu } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "CCTV Installation",
      description:
        "Professional installation of high-quality CCTV cameras at your home or business.",
      icon: <Video className="h-10 w-10 text-orange-600" />,
    },
    {
      title: "Surveillance Monitoring",
      description:
        "24/7 monitoring services to keep your property safe and secure.",
      icon: <Shield className="h-10 w-10 text-orange-600" />,
    },
    {
      title: "Wi-Fi Camera Setup",
      description:
        "Seamless setup of wireless cameras with remote mobile access.",
      icon: <Wifi className="h-10 w-10 text-orange-600" />,
    },
    {
      title: "Repair & Maintenance",
      description:
        "On-demand repair, servicing and regular maintenance of CCTV systems.",
      icon: <Wrench className="h-10 w-10 text-orange-600" />,
    },
    {
      title: "Smart Security Systems",
      description:
        "Integration of CCTV with IoT & smart devices for enhanced security.",
      icon: <Cpu className="h-10 w-10 text-orange-600" />,
    },
    {
      title: "Customer Support",
      description:
        "Dedicated 24/7 support to solve your CCTV and security queries.",
      icon: <PhoneCall className="h-10 w-10 text-orange-600" />,
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Our Services
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Explore our wide range of professional CCTV & security solutions
            designed to keep your home and business safe.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg p-6 bg-white shadow-sm hover:shadow-md hover:border-orange-500 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-orange-100 p-3 rounded-full">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {service.title}
                </h3>
              </div>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
