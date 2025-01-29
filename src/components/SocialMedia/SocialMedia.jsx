import "./style.css";
const SocialmediaLinks = () => {
  return (
    <ul className="wrapper">
      <li className="icon github">
        <span className="tooltip">GitHub</span>
        <svg
          height="1.6em"
          fill="currentColor"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
          className="github"
        >
          <path d="M8 0a8 8 0 0 0-2.53 15.59c.4.08.55-.17.55-.38v-1.34c-2.24.49-2.71-1.08-2.71-1.08-.36-.92-.89-1.16-.89-1.16-.73-.5.06-.49.06-.49.8.05 1.22.82 1.22.82.72 1.23 1.89.88 2.35.67.07-.52.28-.88.5-1.08-1.78-.2-3.64-.89-3.64-3.97 0-.88.31-1.6.82-2.16-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.69 7.69 0 0 1 4 0c1.52-1.03 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.28.82 2.16 0 3.09-1.87 3.77-3.65 3.97.29.25.54.74.54 1.49v2.21c0 .21.15.46.55.38A8 8 0 0 0 8 0z" />
        </svg>
      </li>
      <li className="icon facebook">
        <span className="tooltip">Facebook</span>
        <svg
          viewBox="0 0 320 512"
          height="1.2em"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
        </svg>
      </li>

      <li className="icon linkedin">
        <span className="tooltip">LinkedIn</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1.2em"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="linkedin"
        >
          <path d="M22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0zM7.09 20.48H3.56V9h3.53v11.48zM5.33 7.69c-1.14 0-2.06-.93-2.06-2.07 0-1.14.92-2.07 2.06-2.07 1.14 0 2.06.93 2.06 2.07 0 1.14-.92 2.07-2.06 2.07zM20.48 20.48h-3.53V14c0-1.54-.03-3.52-2.14-3.52-2.14 0-2.46 1.67-2.46 3.4v6.6H8.82V9h3.38v1.57h.05c.47-.89 1.62-1.82 3.33-1.82 3.56 0 4.23 2.34 4.23 5.38v6.35z"></path>
        </svg>
      </li>
    </ul>
  );
};

export default SocialmediaLinks;
