import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { motion } from "framer-motion";
import { useRef } from "react";

interface Certificate {
  title: string;
  issuer?: string;
  image: string;
  link?: string;
}

const certificates: Certificate[] = [
  { image: "/certificates/aws.png", title: "AWS Certified Solutions Architect", issuer: "Amazon", link: "#" },
  { image: "/certificates/azure.png", title: "Azure Fundamentals", issuer: "Microsoft", link: "#" },
  { image: "/certificates/devops.png", title: "DevOps Essentials", issuer: "DevOps Institute", link: "#" },
  { image: "/certificates/docker.png", title: "Docker & Kubernetes", issuer: "Docker", link: "#" },
  { image: "/certificates/react.png", title: "React Developer", issuer: "Frontend Academy", link: "#" },
];

const Certificates = () => {
  const swiperRef = useRef<any>(null);

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
        viewport={{ once: false }}
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
                viewport={{ once: false }}
              >
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />

                {/* Animated Title */}
                <motion.h3
                  initial={{ opacity: 0, x: -60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: false }}
                  className="text-xl font-semibold mb-2"
                >
                  {cert.title}
                </motion.h3>

                {/* Animated Issuer */}
                {cert.issuer && (
                  <motion.p
                    initial={{ opacity: 0, x: -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    viewport={{ once: false }}
                    className="text-gray-300 text-sm mb-4"
                  >
                    {cert.issuer}
                  </motion.p>
                )}

                <a
                  href={cert.link ?? "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition"
                >
                  View Certificate
                </a>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Centered Controls with Arrows and Dots */}
        <div className="flex flex-col items-center mt-6">
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="text-2xl px-4 py-1 text-blue-500 hover:text-blue-400 transition"
              aria-label="Previous certificate"
            >
              ◀
            </button>

            <div className="certs-pagination flex items-center gap-2" />

            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="text-2xl px-4 py-1 text-blue-500 hover:text-blue-400 transition"
              aria-label="Next certificate"
            >
              ▶
            </button>
          </div>
        </div>

        {/* Bullet Styling */}
        <style>
          {`
            .certs-pagination .swiper-pagination-bullet {
              width: 12px;
              height: 12px;
            }

            /* ensure pagination bullets and controls do not overlap cards on small screens */
            @media (max-width: 640px) {
              .certs-pagination { margin: 0 6px; }
            }
          `}
        </style>
      </div>
    </section>
  );
};

export default Certificates;
