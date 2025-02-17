import { MdEmail } from "react-icons/md";
import { FaPhone, FaLocationArrow } from "react-icons/fa";
import SocialmediaLinks from "../SocialMedia/SocialMedia";
import propTypes from "prop-types";

const Contact = ({
  sendEmail,
  form,
  formData,
  handleChange,
  isFormValid,
  loading,
}) => {
  return (
    <div id="contact" className="w-full xl:p-20 bg-white p-6 ">
      <h2 className="text-4xl font-extrabold text-slate-800 md:text-5xl mb-10 text-center">
        Get In <span className="text-blue-500">Touch</span>
      </h2>

      <div className="w-full flex md:flex-row flex-col-reverse justify-between gap-10">
        {/* Contact Info */}
        <div className="flex  flex-col md:w-1/2 w-full space-y-6 ">
          <h4 className="text-2xl font-bold text-slate-800">Contact Info</h4>

          <p className="text-slate-600 text-justify">
            I&apos;m currently open to new opportunities and collaborations. If
            you&apos;d like to work together or have any questions, feel free to
            reach out to me using the contact form below.
          </p>

          <p className="flex items-center gap-3">
            <MdEmail className="text-blue-600 text-lg" />
            <span className="text-blue-600">jmseroy@gmail.com</span>
          </p>

          <p className="flex items-center gap-3">
            <FaPhone className="text-blue-600 text-lg" />
            <span className="text-blue-600">+639757718249</span>
          </p>

          <p className="flex items-center gap-3">
            <FaLocationArrow className="text-blue-600 text-lg" />
            <span className="text-blue-600">
              Pagadian City, Zamboanga del Sur, Philippines
            </span>
          </p>

          <div className="flex flex-start space-x-6 mt-6">
            <SocialmediaLinks />
          </div>
        </div>

        <div className="md:w-1/2 w-full ">
          <h4 className="text-2xl mb-6 font-bold text-slate-800">
            Contact Form
          </h4>
          <div className="max-w-4xl mx-auto">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="grid grid-cols-1 gap-6"
            >
              <div className="flex flex-col space-y-2">
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="p-2.5 shadow-md border border-gray-300 rounded-lg   focus:ring-blue-500 focus:border-blue-600 focus:outline-none "
                />
              </div>
              <div className="flex flex-col space-y-2">
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="p-2.5 shadow-md border border-gray-300 rounded-lg   focus:ring-blue-500 focus:border-blue-600 focus:outline-none "
                />
              </div>

              <div className="flex flex-col space-y-2">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="p-2.5 shadow-md border border-gray-300 rounded-lg   focus:ring-blue-500 focus:border-blue-600 focus:outline-none "
                />
              </div>
              <div className="flex flex-col space-y-2">
                <textarea
                  rows={4}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Send message here..."
                  className="p-2.5 shadow-md border border-gray-300 rounded-lg   focus:ring-blue-500 focus:border-blue-600 focus:outline-none "
                />
              </div>
              <button
                type="submit"
                disabled={!isFormValid || loading}
                className={` ${
                  !isFormValid || loading
                    ? "cursor-not-allowed"
                    : "cursor-pointer"
                } w-fit px-4 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300`}
              >
                {loading ? (
                  <>
                    <svg
                      aria-hidden="true"
                      role="status"
                      className="inline w-4 h-4 me-3 text-white animate-spin"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="#E5E7EB"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentColor"
                      />
                    </svg>
                    Loading...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

Contact.propTypes = {
  sendEmail: propTypes.func.isRequired,
  form: propTypes.object.isRequired,
  formData: propTypes.object.isRequired,
  handleChange: propTypes.func.isRequired,
  isFormValid: propTypes.bool.isRequired,
  loading: propTypes.bool.isRequired,
};

export default Contact;
