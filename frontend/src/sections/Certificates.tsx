import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { motion } from "framer-motion";
import { useRef, useState } from "react";

interface Certificate {
  title: string;
  issuer?: string;
  image: string;
  link?: string;
  description?: string;
}

const certificates: Certificate[] = [
 
  {
    image: "/photo/azure.png",
    title: "Kubernetes Fundamentals on Azure",
    issuer: "Microsoft",
    link: "#",
    description:
      "This certificate confirms the ability to deploy, manage, and scale containerized applications using Kubernetes on the Azure cloud platform. Skills demonstrated include configuring AKS clusters, managing pod lifecycles, implementing services and ingress, and utilizing Azure Container Registry for image storage.",
  },
  {
    image: "/photo/ibm-ai.png",
    title: "AI Foundations for Everyone",
    issuer: "IBM",
    link: "#",
    description: "This certificate confirms the completion of IBM's AI Foundations program, validating understanding of artificial intelligence concepts and practical applications. Skills demonstrated include working with IBM Watson AI services, understanding machine learning fundamentals, exploring AI ethics and governance, and implementing AI solutions through hands-on projects with IBM's AI ecosystem.",
  },
   {
    image: "/photo/KodeKloude.png",
    title: "Docker for Absolute Beginners",
    issuer: "KodeKloude",
    link: "https://learn.kodekloud.com/user/certificate/68c7b3a3-1f90-4a55-86bc-f8bd9ad2ffa8",
    description:
      "This certificate confirms the successful completion of 43 hands-on lessons, validating the ability to build, ship, and run applications using Docker containers. The curriculum demonstrated skills in creating Dockerfiles, managing images, working with volumes, and deploying multi-container apps with Docker Compose.",
  }
];

const Certificates = () => {
  const swiperRef = useRef<any>(null);
  const [selected, setSelected] = useState<Certificate | null>(null);
  const [imageError, setImageError] = useState<{ [key: number]: boolean }>({});

  const closeModal = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if ((e.target as HTMLElement).id === "modal-background") setSelected(null);
  };

  const handleImageError = (index: number) => {
    setImageError((prev) => ({ ...prev, [index]: true }));
  };

  return (
    <section
      id="certificates"
      className="min-h-screen flex flex-col items-center justify-center px-4 md:px-12 py-16 bg-gray-900 text-white"
    >
      {/* Animated Heading */}
      <motion.h2
        className="text-4xl font-bold mb-12 text-blue-500"
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        Certificates
      </motion.h2>

      <div className="w-full max-w-6xl relative">
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          effect="coverflow"
          grabCursor
          centeredSlides
          loop
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          coverflowEffect={{
            rotate: 20,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{ clickable: true, el: ".certs-pagination" }}
          modules={[EffectCoverflow, Pagination]}
          className="w-full pb-20"
        >
          {certificates.map((cert, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className="bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="w-full h-40 rounded-lg mb-4 flex items-center justify-center bg-gray-700 relative overflow-hidden">
                  {!imageError[index] ? (
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover rounded-lg"
                      onError={() => handleImageError(index)}
                    />
                  ) : (
                    <div className="flex items-center justify-center w-full h-full text-gray-400 italic animate-pulse">
                      Image on process...
                    </div>
                  )}
                </div>

                {/* Title */}
                <motion.h3
                  initial={{ opacity: 0, x: -60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-xl font-semibold mb-2"
                >
                  {cert.title}
                </motion.h3>

                {/* Issuer */}
                {cert.issuer && (
                  <motion.p
                    initial={{ opacity: 0, x: -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="text-gray-300 text-sm mb-4"
                  >
                    {cert.issuer}
                  </motion.p>
                )}

                {/* Details Button */}
                <button
                  onClick={() => setSelected(cert)}
                  className="px-4 py-2 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition"
                >
                  Details
                </button>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Controls */}
        <div className="flex flex-col items-center mt-6">
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="text-2xl px-4 py-1 text-blue-500 hover:text-blue-400 transition"
            >
              ◀
            </button>
            <div className="certs-pagination flex items-center gap-2" />
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="text-2xl px-4 py-1 text-blue-500 hover:text-blue-400 transition"
            >
              ▶
            </button>
          </div>
        </div>

        <style>
          {`
            .certs-pagination .swiper-pagination-bullet {
              width: 12px;
              height: 12px;
            }
            @media (max-width: 640px) {
              .certs-pagination { margin: 0 6px; }
            }
          `}
        </style>
      </div>

      {/* Modal */}
      {selected && (
        <div
          id="modal-background"
          onClick={closeModal}
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 px-4"
        >
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg w-full max-w-md relative">
            <button
              onClick={() => setSelected(null)}
              className="absolute top-2 right-2 text-gray-400 hover:text-white text-lg"
            >
              ✖
            </button>
            <div className="w-full h-48 rounded-lg mb-4 flex items-center justify-center bg-gray-700 overflow-hidden">
              {!imageError[certificates.indexOf(selected)] ? (
                <img
                  src={selected.image}
                  alt={selected.title}
                  className="w-full h-full object-cover rounded-lg"
                  onError={() =>
                    handleImageError(certificates.indexOf(selected))
                  }
                />
              ) : (
                <div className="flex items-center justify-center w-full h-full text-gray-400 italic animate-pulse">
                  Certificate on process...
                </div>
              )}
            </div>

            <h3 className="text-2xl font-semibold mb-2">{selected.title}</h3>
            {selected.issuer && (
              <p className="text-gray-400 text-sm mb-3">
                Issued by {selected.issuer}
              </p>
            )}
            <p className="text-gray-300 mb-4">{selected.description}</p>
            <a
              href={selected.link ?? "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-white inline-block"
            >
              View Certificate
            </a>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates;
