import { useRef, useState } from "react";
import profileImg from "./assets/profile.png";
import Navbar from "./components/Navbar";
import webDesignImg from "./assets/web design.png";
import webDevelopmentImg from "./assets/web development.png";
import appDevelopmentImg from "./assets/app dev.png";
import { skills } from "./constants/Skills";
import { projects } from "./constants/Projects";

import SocialmediaLinks from "./components/SocialMedia/SocialMedia";
import { gameApps } from "./constants/GameApp";

import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import Contact from "./components/sections/Contact";
import Projects from "./components/sections/Projects";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openLink, setOpenLink] = useState("home");
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedWebApp, setSelectedWebApp] = useState(null);
  const form = useRef();
  const [loading, setLoading] = useState(false);
  // Handle input change
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Check if all fields have values
  const isFormValid = Object.values(formData).every(
    (value) => value.trim() !== ""
  );

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    setOpenLink(id);

    if (section) {
      let offset = 0;

      if (window.innerWidth < 768) {
        offset = 80;
      }
      const sectionPosition =
        section.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({
        top: sectionPosition,
        behavior: "smooth",
      });

      setIsMenuOpen(false);
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_062t1cp",
        "template_mgoaa6k",
        form.current,
        "OqB_WEesAYPPFtxbT"
      )
      .then(
        () => {
          toast.success("Message sent successfully!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          setLoading(false);
          setFormData({ name: "", email: "", subject: "", message: "" });
          form.current.reset();
        },
        (error) => {
          setLoading(false);
          toast.error(error.text || "An error occurred, please try again.");
        }
      );
  };

  return (
    <>
      <ToastContainer />
      <Navbar
        scrollToSection={scrollToSection}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        openLink={openLink}
      />
      <div
        id="home"
        style={{ minHeight: "calc(100vh - 60px)" }}
        className="flex h-screen xl:p-20  p-6 gap-5  lg:flex-row flex-col-reverse items-center justify-center  space-y-8 md:space-x-16 md:space-y-0 bg-white"
      >
        {/* Text Section */}
        <div className="text-left flex flex-col gap-3 ">
          <h2 className="text-xl w-fit md:text-2xl font-extrabold text-slate-800">
            Hello, I&apos;m{" "}
            <span className="typed-text text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">
              Josiel Mark
            </span>
          </h2>

          <h1 className="text-3xl py-2 md:text-5xl font-extrabold text-blue-600">
            Full-Stack Web Developer
          </h1>
          <p className="text-justify  md:text-lg text-gray-600 leading-relaxed mb-6">
            I&apos;m a developer with a passion for building beautiful and
            functional web applications. I combine clean design with efficient
            code to deliver exceptional user experiences.
          </p>

          <div className="flex gap-5">
            {/* Contact Me Button */}

            <div className="relative group">
              <button
                onClick={() => scrollToSection("contact")}
                className="hover:bg-blue-600 relative text-nowrap px-4 py-2.5 flex items-center justify-center gap-3 md:text-lg text-sm text-blue-600 rounded-lg shadow-lg transition-all duration-300 border-blue-600 border-2 "
              >
                <span className="text-nowrap transition-all  duration-300 group-hover:text-white">
                  Contact Me
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 64 64"
                  className="fill-current  transition-all duration-300 group-hover:text-white"
                >
                  <path d="M8.216 36.338L26.885 32.604C28.552 32.271 28.552 31.729 26.885 31.396L8.216 27.662C7.104 27.44 6.021 26.356 5.799 25.245L2.065 6.576C1.731 4.908 2.714 4.133 4.259 4.846L61.228 31.139C62.257 31.614 62.257 32.386 61.228 32.861L4.259 59.154C2.714 59.867 1.731 59.092 2.065 57.424L5.799 38.755C6.021 37.644 7.104 36.56 8.216 36.338Z"></path>
                </svg>
              </button>
            </div>

            {/* Download Resume Button */}
            <div className="relative group">
              <button className="hover:bg-blue-600 relative text-nowrap px-4 py-2.5 flex items-center justify-center gap-3 md:text-lg text-sm text-blue-600 rounded-lg shadow-lg transition-all duration-300 border-blue-600 border-2 ">
                <span className="text-nowrap transition-all duration-300 group-hover:text-white">
                  Download Resume
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-6 h-6  transition-all duration-300 group-hover:text-white"
                >
                  <path d="M12 16l4-5h-3V4h-2v7H8l4 5zm7-1v4H5v-4H3v4c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-4h-2z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Profile Image Section */}
        {/* Profile Image Section */}
        <div className="flex flex-col items-center">
          <div className="w-40 sm:w-44 lg:w-80 relative">
            <img
              src={profileImg}
              alt="profile"
              className="rounded-full w-full object-cover shadow-lg hover:scale-105 transition-transform"
            />
            <div className="absolute inset-0 rounded-full border-4 border-blue-500 animate-pulse"></div>
          </div>

          <div className="flex justify-center md:justify-start space-x-6 ">
            <SocialmediaLinks />
          </div>
        </div>
      </div>

      {/* About Section */}
      <div
        id="about"
        className="flex  flex-col items-center justify-between  bg-white"
      >
        <div className="flex flex-col gap-12 xl:p-20  p-6 lg:flex-row items-center justify-between w-full ">
          {/* Profile Section */}
          <div className="w-full lg:w-1/2 flex flex-col items-center text-center">
            <img
              src={profileImg}
              alt="profile"
              className="w-40 h-40 rounded-full border-4 border-blue-500 shadow-lg"
            />
            <h1 className="text-3xl font-bold text-blue-500 mt-6">
              Josiel Mark Seroy
            </h1>
            <p className="text-slate-600 mt-2 text-lg">jmseroy@gmail.com</p>
          </div>

          {/* About Section */}
          <div className="w-full lg:w-1/2 space-y-4">
            {/* About Heading */}
            <h2 className="text-4xl font-extrabold text-slate-800 md:text-5xl">
              About <span className="text-blue-500">Me</span>
            </h2>

            {/* About Content */}
            <p className="text-slate-600 text-justify leading-relaxed ">
              I am a results-driven Full-Stack Developer with two years of
              experience building dynamic and scalable web applications. I
              specialize in crafting intuitive, high-performance digital
              solutions tailored to user needs and project requirements. With
              expertise in both front-end and back-end technologies, I ensure
              seamless functionality, clean and efficient code, and exceptional
              user experiences. Whether collaborating in a team or working
              independently, I am committed to delivering innovative and
              impactful applications.
            </p>

            {/* Stats Section */}
            <div className="grid sm:grid-cols-2 grid-cols-1 mt-8 gap-8">
              {/* Stat Card 1 */}
              <div className="text-center rounded-lg p-6 bg-white border border-gray-200 shadow-md w-full  transition-transform transform hover:scale-105">
                <h1 className="text-5xl font-bold text-blue-500">+2</h1>
                <p className="text-slate-600 mt-2">Years of Experience</p>
              </div>

              {/* Stat Card 2 */}
              <div className="text-center rounded-lg p-6 bg-white border border-gray-200 shadow-md w-full transition-transform transform hover:scale-105">
                <h1 className="text-5xl font-bold text-blue-500">+10</h1>
                <p className="text-slate-600 mt-2">Projects Completed</p>
              </div>

              {/* Stat Card 3 */}
              <div className="text-center rounded-lg p-6 bg-white border border-gray-200 shadow-md w-full transition-transform transform hover:scale-105">
                <h1 className="text-5xl font-bold text-blue-500">+10</h1>
                <p className="text-slate-600 mt-2">Satisfied Clients</p>
              </div>
            </div>
          </div>
        </div>

        <div className="xl:p-20 p-6 w-full">
          <h2 className="text-4xl font-extrabold text-slate-800 md:text-5xl mb-10 text-center">
            My <span className="text-blue-500">Services</span>
          </h2>
          <div className=" mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 gap-8">
              {/* Web Design */}
              <div className="flex flex-col items-center border border-gray-100 shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105">
                <div className="w-16 h-16 mb-4">
                  <img
                    src={webDesignImg}
                    alt="Web Design"
                    className="w-full h-full"
                  />
                </div>
                <h2 className="lg:text-xl text-lg font-bold text-slate-800">
                  Web Design
                </h2>
                <p className="text-center text-slate-600 mt-2">
                  Crafting visually stunning, intuitive, and user-friendly web
                  designs that captivate and engage audiences.
                </p>
              </div>

              {/* Web Development */}
              <div className="flex flex-col items-center border border-gray-100 shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105">
                <div className="w-16 h-16 mb-4">
                  <img
                    src={webDevelopmentImg}
                    alt="Web Development"
                    className="w-full h-full"
                  />
                </div>
                <h2 className="lg:text-xl text-lg font-bold text-slate-800">
                  Web App Development
                </h2>
                <p className="text-center text-slate-600 mt-2">
                  Designing scalable, responsive, and high-performance web
                  applications that provide engaging and seamless user
                  experiences.
                </p>
              </div>

              {/* App Development */}
              <div className="flex flex-col items-center border border-gray-100 shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105">
                <div className="w-16 h-16 mb-4">
                  <img
                    src={appDevelopmentImg}
                    alt="App Development"
                    className="w-full h-full"
                  />
                </div>
                <h2 className="lg:text-xl text-lg font-bold text-slate-800">
                  Mobile App Development
                </h2>
                <p className="text-center text-slate-600 mt-2">
                  Building intuitive, cross-platform mobile apps for iOS and
                  Android, designed to meet diverse user needs.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div id="skills" className="w-full xl:p-20  p-6">
          <h2 className="text-4xl font-extrabold text-slate-800 md:text-5xl mb-10 text-center">
            My <span className="text-blue-500">Skills</span>
          </h2>
          <div className="w-full  mx-auto">
            <ul className="flex flex-wrap justify-center gap-8">
              {skills?.map((skill, index) => (
                <li
                  key={index}
                  className="w-[150px] h-[150px] sm:w-44 sm:h-44 flex flex-col items-center border border-gray-100 p-6 rounded-lg shadow-md transition-all hover:shadow-lg hover:-translate-y-2"
                >
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-[80px] h-[80px] mb-3"
                  />
                  <span className="text-sm text-nowrap font-medium text-slate-700">
                    {skill.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Projects Section */}
        <Projects
          projects={projects}
          gameApps={gameApps}
          selectedProject={selectedProject}
          setSelectedProject={setSelectedProject}
          selectedWebApp={selectedWebApp}
          setSelectedWebApp={setSelectedWebApp}
        />

        <Contact
          form={form}
          formData={formData}
          handleChange={handleChange}
          isFormValid={isFormValid}
          loading={loading}
          sendEmail={sendEmail}
        />

        {/* Footer Section */}
        <div className="w-full p-4 text-center">
          <p className="text-slate-600">
            &copy; 2025 Josiel Mark. All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
