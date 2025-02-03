import propTypes from "prop-types";
import { FaGithub } from "react-icons/fa";
const Modal = ({ selectedProject, setSelectedProject }) => {
  return (
    <>
      {/* Modal */}
      {selectedProject && (
        <div
          onClick={() => setSelectedProject(null)}
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4 z-50"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white   rounded-lg shadow-xl  max-w-3xl w-full relative"
          >
            {/* Close Button */}
            <div className=" max-h-[90vh] overflow-y-auto  rounded-lg shadow-xl p-6 max-w-3xl w-full relative">
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              >
                ✖
              </button>
              <div className="flex md:flex-row flex-col w-full gap-6 justify-between">
                {/* Video */}
                <div className="md:w-1/2 w-full flex justify-center mb-4">
                  <div className="relative w-full h-[90vh] max-h-[550px]">
                    <video
                      src={selectedProject.video}
                      alt={selectedProject.name}
                      className="w-full h-full object-contain rounded-lg"
                      controls
                      autoPlay
                      loop
                      muted
                    />
                  </div>
                </div>
                <div className="md:w-1/2 w-full">
                  {/* Title */}
                  <h2 className="text-xl font-bold text-gray-900">
                    {selectedProject.name}
                  </h2>
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-2 bg-gray-900 text-white py-2 px-4 rounded-lg text-sm font-medium transition duration-300 hover:bg-gray-800"
                  >
                    <FaGithub size={18} /> Get Code
                  </a>

                  {/* Description */}
                  <p className="text-gray-700 mt-2">
                    {selectedProject.description}
                  </p>
                  <div className="mt-4">
                    {/* Tech Stack Title */}
                    <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                      <span>Technologies Used:</span>
                    </h3>

                    <div className="flex flex-wrap gap-3 mt-2">
                      {selectedProject.tech_stack
                        .split(",")
                        .map((tech, index) => (
                          <span
                            key={index}
                            className="bg-gray-200 text-gray-800 py-1 px-3 rounded-full text-sm font-medium transition-all duration-300 ease-in-out transform hover:bg-gray-800 hover:text-white hover:scale-105"
                          >
                            {tech.trim()}
                          </span>
                        ))}
                    </div>
                  </div>

                  <div className="mt-4">
                    {" "}
                    <h3 className="text-lg font-semibold text-gray-800">
                      Features{" "}
                    </h3>{" "}
                    <ul className="list-disc list-inside text-gray-700 text-sm">
                      {" "}
                      {selectedProject.features.map(
                        (feature, i) =>
                          feature.trim() && <li key={i}>{feature.trim()}</li>
                      )}{" "}
                    </ul>
                  </div>

                  {/* Game Mechanics */}
                  <div className="mt-4">
                    <h3 className="text-lg font-semibold text-gray-800">
                      Game Mechanics
                    </h3>
                    <ul className="list-disc list-inside text-gray-700 text-sm">
                      {selectedProject.game_mechanics.map(
                        (mechanic, i) =>
                          mechanic.trim() && <li key={i}>{mechanic.trim()}</li>
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

Modal.propTypes = {
  selectedProject: propTypes.object,
  setSelectedProject: propTypes.func,
};
export default Modal;
