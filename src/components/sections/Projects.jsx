import propTypes from "prop-types";
import Modal from "../Modal";
import { AiOutlineGlobal } from "react-icons/ai";
import WebAppModal from "../WebAppModal";
const Projects = ({
  projects,
  gameApps,
  selectedProject,
  setSelectedProject,
  selectedWebApp,
  setSelectedWebApp,
}) => {
  return (
    <div id="projects" className="w-full xl:p-20   p-6">
      {/* <h2 className="text-4xl font-extrabold text-slate-800 md:text-5xl mb-10 text-center">
        Personal <span className="text-blue-500">Projects</span>
      </h2>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  justify-items-center gap-8">
          {projects?.map((project, index) => {
            return project.category === "Personal Projects" ? (
              <div
                onClick={() => setSelectedWebApp(project)}
                key={index}
                className="flex flex-col max-w-[400px] w-full bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105"
              >
        
                <div className="w-full h-52 mb-4">
                  <img
                    src={
                      Array.isArray(project.image)
                        ? project.image[0]
                        : project.image
                    }
                    alt={project.name}
                    className="w-full h-full sm:object-contain md:object-cover rounded-lg"
                  />
                </div>
    
                <h2 className="text-xl font-semibold text-slate-800 truncate">
                  {project.name}
                </h2>

                <p className="text-slate-600 mt-2 line-clamp-4">
                  {project.description}
                </p>

                <div className=" flex justify-between">
                  {project.link && (
                    <div className="mt-4">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-blue-600 font-medium hover:text-blue-800 transition"
                      >
                        <AiOutlineGlobal />
                        Live Demo
                      </a>
                    </div>
                  )}

         
                  {project.github && (
                    <div className="mt-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-blue-600 font-medium hover:text-blue-800 transition"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12 2a10 10 0 00-3.162 19.497c.5.092.682-.216.682-.481 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.341-3.369-1.341-.455-1.155-1.11-1.463-1.11-1.463-.907-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.34 1.088 2.91.832.091-.647.349-1.088.635-1.34-2.22-.252-4.555-1.11-4.555-4.938 0-1.091.39-1.984 1.029-2.683-.103-.253-.447-1.268.098-2.64 0 0 .84-.27 2.75 1.025a9.57 9.57 0 012.5-.337c.85.004 1.707.115 2.5.337 1.91-1.295 2.75-1.025 2.75-1.025.545 1.372.201 2.387.098 2.64.64.699 1.029 1.592 1.029 2.683 0 3.837-2.34 4.683-4.567 4.93.359.309.678.92.678 1.854 0 1.338-.012 2.415-.012 2.743 0 .268.18.576.688.48A10.001 10.001 0 0012 2z"
                            clipRule="evenodd"
                          />
                        </svg>
                        View on GitHub
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ) : null;
          })}
        </div>
      </div> */}

      <h2 className="text-4xl font-extrabold text-slate-800 md:text-5xl mb-10 text-center">
        Projects
      </h2>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  justify-items-center gap-8">
          {projects?.map((project, index) => (
            <div
              key={index}
              onClick={() => setSelectedWebApp(project)}
              className="flex flex-col max-w-[400px] w-full bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105"
            >
              {/* Image Section */}
              <div className="w-full h-52 mb-4">
                <img
                  src={
                    Array.isArray(project.image)
                      ? project.image[0]
                      : project.image
                  }
                  alt={project.name}
                  className="w-full h-full sm:object-contain md:object-cover rounded-lg"
                />
              </div>
              {/* Title */}
              <h2 className="text-xl font-semibold text-slate-800 truncate">
                {project.name}
              </h2>

              {/* Description with Ellipsis */}
              <p className="text-slate-600 mt-2 line-clamp-4">
                {project.description}
              </p>

              {/* View Project Button */}
              <div className=" flex justify-between">
                {project.link && (
                  <div className="mt-4">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-600 font-medium hover:text-blue-800 transition"
                    >
                      <AiOutlineGlobal />
                      Live Demo
                    </a>
                  </div>
                )}

                {/* GitHub Link */}
                {project.github && (
                  <div className="mt-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-600 font-medium hover:text-blue-800 transition"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 2a10 10 0 00-3.162 19.497c.5.092.682-.216.682-.481 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.341-3.369-1.341-.455-1.155-1.11-1.463-1.11-1.463-.907-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.34 1.088 2.91.832.091-.647.349-1.088.635-1.34-2.22-.252-4.555-1.11-4.555-4.938 0-1.091.39-1.984 1.029-2.683-.103-.253-.447-1.268.098-2.64 0 0 .84-.27 2.75 1.025a9.57 9.57 0 012.5-.337c.85.004 1.707.115 2.5.337 1.91-1.295 2.75-1.025 2.75-1.025.545 1.372.201 2.387.098 2.64.64.699 1.029 1.592 1.029 2.683 0 3.837-2.34 4.683-4.567 4.93.359.309.678.92.678 1.854 0 1.338-.012 2.415-.012 2.743 0 .268.18.576.688.48A10.001 10.001 0 0012 2z"
                          clipRule="evenodd"
                        />
                      </svg>
                      View on GitHub
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}

          {selectedWebApp && (
            <WebAppModal
              selectedWebApp={selectedWebApp}
              setSelectedWebApp={setSelectedWebApp}
            />
          )}

          {gameApps?.map((project, index) => (
            <div
              onClick={() => setSelectedProject(project)}
              key={index}
              className="flex cursor-pointer flex-col max-w-[400px] w-full bg-white shadow-lg rounded-2xl p-6 transition-transform transform hover:scale-105 hover:shadow-xl"
            >
              {/* Video Preview with Play Icon Overlay */}
              <div className="w-full h-52 mb-4 flex justify-center relative rounded-lg overflow-hidden group">
                <video
                  src={project.video}
                  alt={project.name}
                  className="h-full w-auto sm:object-contain md:object-contain rounded-lg cursor-pointer transition-all duration-300 group-hover:brightness-75"
                  controls
                  muted
                  onClick={(e) => e.target.requestFullscreen()}
                />

                {/* Play Icon (Shows on Hover) */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-black bg-opacity-50 p-4 rounded-full">
                    <svg
                      className="w-12 h-12 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Title */}
              <h2 className="text-xl font-semibold text-slate-800 truncate">
                {project.name}
              </h2>

              {/* Description with Ellipsis */}
              <p className="text-slate-600 mt-2 line-clamp-4">
                {project.description}
              </p>

              {/* GitHub Link */}
              {project.github && (
                <div className="mt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-600 font-medium hover:text-blue-800 transition"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2a10 10 0 00-3.162 19.497c.5.092.682-.216.682-.481 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.341-3.369-1.341-.455-1.155-1.11-1.463-1.11-1.463-.907-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.34 1.088 2.91.832.091-.647.349-1.088.635-1.34-2.22-.252-4.555-1.11-4.555-4.938 0-1.091.39-1.984 1.029-2.683-.103-.253-.447-1.268.098-2.64 0 0 .84-.27 2.75 1.025a9.57 9.57 0 012.5-.337c.85.004 1.707.115 2.5.337 1.91-1.295 2.75-1.025 2.75-1.025.545 1.372.201 2.387.098 2.64.64.699 1.029 1.592 1.029 2.683 0 3.837-2.34 4.683-4.567 4.93.359.309.678.92.678 1.854 0 1.338-.012 2.415-.012 2.743 0 .268.18.576.688.48A10.001 10.001 0 0012 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                    View on GitHub
                  </a>
                </div>
              )}
            </div>
          ))}

          {selectedProject && (
            <Modal
              selectedProject={selectedProject}
              setSelectedProject={setSelectedProject}
            />
          )}
        </div>
      </div>
    </div>
  );
};

Projects.propTypes = {
  projects: propTypes.array,
  gameApps: propTypes.array,
  selectedProject: propTypes.object,
  setSelectedProject: propTypes.func,
  selectedWebApp: propTypes.object,
  setSelectedWebApp: propTypes.func,
};

export default Projects;
