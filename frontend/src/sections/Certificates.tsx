import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

interface Certificate {
  title: string;
  issuer?: string;
  image: string;
  link?: string;
  hasLink?: boolean;
  description?: string;
}

const certificates: Certificate[] = [
  {
    image: "/photo/azure.png",
    title: "Kubernetes Fundamentals on Azure",
    issuer: "Microsoft",
    hasLink: false,
    description:
      "This certificate confirms the ability to deploy, manage, and scale containerized applications using Kubernetes on the Azure cloud platform. Skills demonstrated include configuring AKS clusters, managing pod lifecycles, implementing services and ingress, and utilizing Azure Container Registry for image storage.",
  },
  {
    image: "/photo/ibm-ai.png",
    title: "AI Foundations for Everyone",
    issuer: "IBM",
    hasLink: false,
    description:
      "This certificate confirms the completion of IBM's AI Foundations program, validating understanding of artificial intelligence concepts and practical applications. Skills demonstrated include working with IBM Watson AI services, understanding machine learning fundamentals, exploring AI ethics and governance, and implementing AI solutions.",
  },
  {
    image: "/photo/KodeKloude.png",
    title: "Docker for Absolute Beginners",
    issuer: "KodeKloud",
    link: "https://learn.kodekloud.com/user/certificate/68c7b3a3-1f90-4a55-86bc-f8bd9ad2ffa8",
    hasLink: true,
    description:
      "This certificate confirms the successful completion of 43 hands-on lessons, validating the ability to build, ship, and run applications using Docker containers. The curriculum demonstrated skills in creating Dockerfiles, managing images, working with volumes, and deploying multi-container apps with Docker Compose.",
  },
];

const Certificates = () => {
  const swiperRef = useRef<any>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState<Certificate | null>(null);
  const [imageError, setImageError] = useState<{ [key: number]: boolean }>({});

  const handleImageError = (index: number) =>
    setImageError((prev) => ({ ...prev, [index]: true }));

  return (
    <section
      id="certificates"
      className="min-h-screen flex flex-col items-center justify-center px-4 md:px-12 py-16 text-white"
    >
      <motion.h2
        className="text-4xl font-bold mb-2 text-blue-400"
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        Certificates
      </motion.h2>
      <p className="text-gray-500 text-sm mb-12 tracking-wide">
        {currentIndex + 1} / {certificates.length}
      </p>

      <div className="w-full max-w-2xl relative">
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex)}
          effect="cards"
          grabCursor
          centeredSlides
          loop
          modules={[EffectCards]}
          className="w-full pb-4"
        >
          {certificates.map((cert, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className="bg-gray-900 border border-gray-700/50 rounded-2xl overflow-hidden shadow-2xl"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                {/* Image */}
                <div className="w-full h-52 bg-gray-800 flex items-center justify-center relative overflow-hidden">
                  {!imageError[index] ? (
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover"
                      onError={() => handleImageError(index)}
                    />
                  ) : (
                    <p className="text-gray-500 italic text-sm animate-pulse">
                      Image loading…
                    </p>
                  )}
                </div>

                {/* Body */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-1">
                    <h3 className="text-lg font-bold leading-tight">
                      {cert.title}
                    </h3>
                  </div>
                  {cert.issuer && (
                    <p className="text-blue-400 text-xs font-medium mb-3 uppercase tracking-wide">
                      {cert.issuer}
                    </p>
                  )}
                  <p className="text-gray-400 text-sm leading-relaxed mb-5 line-clamp-3">
                    {cert.description}
                  </p>
                  <button
                    onClick={() => setSelected(cert)}
                    className="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition font-medium"
                  >
                    <ExternalLink className="w-4 h-4" /> View Details
                  </button>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-6 mt-8">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="w-11 h-11 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:border-blue-500 hover:text-blue-400 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex gap-2">
            {certificates.map((_, i) => (
              <button
                key={i}
                onClick={() => swiperRef.current?.slideToLoop(i)}
                className={`rounded-full transition-all duration-300 ${i === currentIndex
                  ? "w-6 h-2 bg-blue-500"
                  : "w-2 h-2 bg-gray-600 hover:bg-gray-400"
                  }`}
              />
            ))}
          </div>

          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="w-11 h-11 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:border-blue-500 hover:text-blue-400 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Modal */}
      {selected && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black/75 backdrop-blur-sm z-50 px-4"
          onClick={(e) => e.target === e.currentTarget && setSelected(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-gray-900 border border-gray-700/50 rounded-2xl w-full max-w-md overflow-hidden shadow-2xl"
          >
            <div className="w-full h-48 bg-gray-800 overflow-hidden">
              {!imageError[certificates.indexOf(selected)] ? (
                <img
                  src={selected.image}
                  alt={selected.title}
                  className="w-full h-full object-cover"
                  onError={() =>
                    handleImageError(certificates.indexOf(selected))
                  }
                />
              ) : (
                <div className="flex items-center justify-center h-full text-gray-500 italic text-sm">
                  Certificate on process…
                </div>
              )}
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-1">{selected.title}</h3>
              {selected.issuer && (
                <p className="text-blue-400 text-xs uppercase tracking-wide mb-3">
                  Issued by {selected.issuer}
                </p>
              )}
              <p className="text-gray-300 text-sm leading-relaxed mb-5">
                {selected.description}
              </p>
              <div className="flex items-center justify-between">
                {selected.hasLink ? (
                  <a
                    href={selected.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-sm font-medium transition"
                  >
                    <ExternalLink className="w-4 h-4" /> View Certificate
                  </a>
                ) : (
                  <p className="text-gray-600 text-xs italic">
                    Verification link coming soon
                  </p>
                )}
                <button
                  onClick={() => setSelected(null)}
                  className="text-gray-500 hover:text-white text-sm transition"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default Certificates;
