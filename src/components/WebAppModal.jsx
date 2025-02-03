import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { FaGithub } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const WebAppModal = ({ selectedWebApp, setSelectedWebApp }) => {
  // Carousel State
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!selectedWebApp) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex, selectedWebApp]);

  if (!selectedWebApp) return null;

  const { name, description, image, features, tech_stack, link, github } =
    selectedWebApp;

  // Handle Next Image
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === image.length ? 0 : prevIndex + 1
    );
  };

  // Handle Previous Image
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? image.length - 1 : prevIndex - 1
    );
  };

  return (
    <div
      onClick={() => setSelectedWebApp(null)}
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4 z-50"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-lg shadow-xl max-w-3xl w-full relative"
      >
        {/* Close Button */}
        <button
          onClick={() => setSelectedWebApp(null)}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          ✖
        </button>

        <div className="p-6 max-h-[90vh] overflow-y-auto">
          {/* Image Carousel */}
          <div className="relative w-full flex justify-center mb-4">
            <div className="relative w-full max-w-xl h-64 md:h-80">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentIndex}
                  src={image[currentIndex]}
                  alt={`${name} Preview ${currentIndex + 1}`}
                  className="w-full h-full object-contain rounded-lg"
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                />
              </AnimatePresence>

              {/* Navigation Buttons */}
              {image.length > 1 && (
                <>
                  <button
                    onClick={prevSlide}
                    className="absolute top-1/2 left-2 bg-gray-800 text-white p-2 rounded-full shadow-md transform -translate-y-1/2 hover:bg-gray-700"
                  >
                    ◀
                  </button>
                  <button
                    onClick={nextSlide}
                    className="absolute top-1/2 right-2 bg-gray-800 text-white p-2 rounded-full shadow-md transform -translate-y-1/2 hover:bg-gray-700"
                  >
                    ▶
                  </button>
                </>
              )}
            </div>
          </div>

          {/* Title */}
          <h2 className="text-xl font-bold text-gray-900">{name}</h2>

          {/* GitHub & Live Link */}
          <div className="flex gap-3 mt-2">
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gray-900 text-white py-2 px-4 rounded-lg text-sm font-medium transition duration-300 hover:bg-gray-800"
              >
                <FaGithub size={18} /> Get Code
              </a>
            )}
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-600 text-white py-2 px-4 rounded-lg text-sm font-medium transition duration-300 hover:bg-blue-500"
              >
                🔗 Live Demo
              </a>
            )}
          </div>

          {/* Description */}
          <p className="text-gray-700 mt-2">{description}</p>

          {/* Tech Stack */}
          <div className="mt-4">
            <h3 className="text-lg font-semibold text-gray-800">
              Technologies Used:
            </h3>
            <div className="flex flex-wrap gap-3 mt-2">
              {Array.isArray(tech_stack) &&
                tech_stack.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-gray-200 text-gray-800 py-1 px-3 rounded-full text-sm font-medium transition-all duration-300 ease-in-out transform hover:bg-gray-800 hover:text-white hover:scale-105"
                  >
                    {tech}
                  </span>
                ))}
            </div>
          </div>

          {/* Features */}
          <div className="mt-4">
            <h3 className="text-lg font-semibold text-gray-800">Features</h3>
            <ul className="list-disc list-inside text-gray-700 text-sm">
              {Array.isArray(features) &&
                features.map((feature, i) => <li key={i}>{feature}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

WebAppModal.propTypes = {
  selectedWebApp: PropTypes.object,
  setSelectedWebApp: PropTypes.func.isRequired,
};

export default WebAppModal;
