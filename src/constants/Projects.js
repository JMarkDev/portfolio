import wmsuEsu from "../assets/document_tracker/landingpage.png";
import wmsuChatbot from "../assets/document_tracker/chatbot.png";
import wmsuEsu1 from "../assets/document_tracker/Screenshot 2025-02-01 033849.png";
import wmsuEsu2 from "../assets/document_tracker/Screenshot 2025-02-01 033938.png";
import wmsuEsu3 from "../assets/document_tracker/Screenshot 2025-02-01 034107.png";
import wmsuEsu4 from "../assets/document_tracker/Screenshot 2025-02-01 034428.png";

import taraKabataan from "../assets/tarakabataan/landingpage.png";
import tarakabataan1 from "../assets/tarakabataan/tara_kabataan1.png";
import tarakabataan2 from "../assets/tarakabataan/tara_kabataan2.png";
import tarakabataan3 from "../assets/tarakabataan/tara_kabataan3.png";
import tarakabataan4 from "../assets/tarakabataan/tara_kabataan4.png";

import chatbot from "../assets/PC_Chatbot/main.png";
import chatbot1 from "../assets/PC_Chatbot/Screenshot (236).png";
import chatbot2 from "../assets/PC_Chatbot/Screenshot (230).png";
import chatbot3 from "../assets/PC_Chatbot/Screenshot (231).png";

import passSlip from "../assets/DOH_Pass_Slip/main.png";
import passSlip1 from "../assets/DOH_Pass_Slip/Screenshot (100).png";
import passSlip2 from "../assets/DOH_Pass_Slip/Screenshot (101).png";
import passSlip3 from "../assets/DOH_Pass_Slip/Screenshot (102).png";
import passSlip4 from "../assets/DOH_Pass_Slip/Screenshot (98).png";

import healthcare from "../assets/medical_records/home.png";
import healthcare1 from "../assets/medical_records/medical_1.png";
import healthcare2 from "../assets/medical_records/medical_2.png";
import healthcare3 from "../assets/medical_records/medical_3.png";
import healthcare4 from "../assets/medical_records/medical_4.png";

import slaughter from "../assets/slaughterhouse/home.png";
import slaughter1 from "../assets/slaughterhouse/Screenshot 2025-02-01 035949.png";
import slaughter2 from "../assets/slaughterhouse/Screenshot 2025-02-01 040023.png";
import slaughter3 from "../assets/slaughterhouse/Screenshot 2025-02-01 040334.png";
import slaughter4 from "../assets/slaughterhouse/Screenshot 2025-02-01 040359.png";
import slaughter5 from "../assets/slaughterhouse/Screenshot 2025-02-01 040447.png";

import jcr_chatbot from "../assets/JCR CHATBOT/home.png";
import jcr_chatbot1 from "../assets/JCR CHATBOT/Screenshot 2025-01-28 161727.png";
import jcr_chatbot3 from "../assets/JCR CHATBOT/Screenshot 2025-01-28 162034.png";
import jcr_chatbot4 from "../assets/JCR CHATBOT/Screenshot 2025-01-28 162050.png";

import strand_recommender from "../assets/strand_recommender/home.png";
import strand_recommender1 from "../assets/strand_recommender/strand1.png";
import strand_recommender2 from "../assets/strand_recommender/strand2.png";
import strand_recommender3 from "../assets/strand_recommender/strand3.png";
import strand_recommender4 from "../assets/strand_recommender/strand4.png";

import grading_portal1 from "../assets/grading_portal/login.png";
import grading_portal2 from "../assets/grading_portal/dashboard.png";
import grading_portal3 from "../assets/grading_portal/students.png";
import grading_portal4 from "../assets/grading_portal/add student.png";
import grading_portal5 from "../assets/grading_portal/class.png";
import grading_portal6 from "../assets/grading_portal/manage class.png";
import grading_portal7 from "../assets/grading_portal/student grade.png";
import grading_portal8 from "../assets/grading_portal/instructor page.png";

import restaurant_finder1 from "../assets/restaurant_finder/Screenshot 2025-06-18 123604.png";
import restaurant_finder2 from "../assets/restaurant_finder/Screenshot 2025-06-18 123729.png";
import restaurant_finder3 from "../assets/restaurant_finder/Screenshot 2025-06-18 123753.png";

export const projects = [
  {
    name: "LLM-Driven Restaurant Finder App",
    description:
      "An intelligent restaurant search application that converts natural language queries into structured restaurant searches using AI and the Foursquare Places API. Users can input queries like “Find me cheap sushi in downtown LA that’s open now” and get real-time restaurant data with detailed info such as name, address, cuisine, rating, price level, and operating hours.",
    image: [restaurant_finder1, restaurant_finder2, restaurant_finder3],
    features: [
      "Natural Language Processing with Google Gemini AI",
      "AI-powered query conversion to structured API calls",
      "Real-time restaurant data from Foursquare Places API",
      "Comprehensive restaurant info: rating, price, hours",
      "Search filters: location, cuisine, price, open now",
    ],
    tech_stack: [
      "React",
      "TypeScript",
      "Node.js",
      "Express.js",
      "Google Gemini AI",
      "Foursquare Places API",
    ],
    link: "",
    github: "https://github.com/JMarkDev/LLM-Driven-Restaurant-Finder-App.git",
    category: "Personal Projects",
  },
  {
    name: "WMSU-ESU Document Tracker System",
    description:
      "A web-based application developed for my thesis project to streamline document tracking across the 12 External Studies Unit (ESU) campuses of WMSU. Utilizing Model 2 QR Code technology, the system ensures efficient monitoring of document submissions, tracing their movement from faculty to administrative offices. With real-time tracking, arrival confirmation, and workflow automation, it enhances efficiency, accountability, and transparency in document processing. The system also have a chatbot integration for user queries and tracking updates.",
    image: [wmsuEsu, wmsuChatbot, wmsuEsu1, wmsuEsu2, wmsuEsu3, wmsuEsu4],
    features: [
      "Real-time document tracking and status updates",
      "QR code-based document processing",
      "Secure authentication with email verification",
      "Chatbot integration for user queries and tracking updates",
      "Responsive design for mobile and desktop access",
      "Search and filtering functionality",
      "Customizable user profiles and settings",
      "Real-time notifications and updates",
      "Document upload, update, download, and print metadata",
      "Detailed document history and tracking logs",
      "Default and Customizable routing for document processing",
      "User and office management system",
      "Dashboard analytics for workflow insights",
      "Generate and download document reports",
      "Dashboard analytics",
    ],
    tech_stack: [
      "React.js",
      "Redux",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "Jest JS",
      "MySQL",
      "Sequelize",
      "Socket.io",
      "Dialogflow",
      "Nodemailer",
    ],
    link: "https://wmsu-esu-document-tracking.com.tarakabataan.com/",
    github: "https://github.com/JMarkDev/Thesis-Document-Tracker.git",
    category: "Personal Projects",
  },
  {
    name: "DOH Pass Slip System",
    description:
      "A web application pass slip system developed during my internship for the Department of Health. The system provides real-time updates and generates pass slips for both personal and official purposes. It allows authorized personnel to issue and manage pass slips efficiently, ensuring smooth tracking and monitoring of movement within the organization. ",
    image: [passSlip, passSlip1, passSlip2, passSlip3, passSlip4],
    features: [
      "Real-time updates and tracking of pass slips",
      "Generate pass slips and print for personal and official use",
      "Real-time notifications for pass slip status updates",
      "Search and filtering functionality",
      "Responsive design for mobile and desktop access",
    ],
    tech_stack: [
      "React.js",
      "Bootstrap",
      "Node.js",
      "Express.js",
      "MySQL",
      "Socket.io",
    ],
    link: "",
    github: "https://github.com/JMarkDev/DOH_Pass_Slip_System.git",
    category: "Personal Projects",
  },
  {
    name: "Tara Kabataan Event Management System",
    description:
      "A web application that simplifies event planning, scheduling, and registration for the Tara Kabataan Organization. Featuring an intuitive event calendar, users can easily browse, register, and purchase tickets for both free and paid events, with options for discounted tickets on select events. The system have payment gateway integration with Paypal, chatbot integration for user queries, and secure authentication with email verification.",
    image: [
      taraKabataan,
      tarakabataan1,
      tarakabataan2,
      tarakabataan3,
      tarakabataan4,
    ],
    features: [
      "Event calendar for easy browsing and registration",
      "Payment gateway integration with Paypal",
      "Chatbot integration for user queries",
      "Secure authentication with email verification",
      "Responsive design for mobile and desktop access  with animated transitions",
      "Search and filtering functionality",
      "Customizable user profile",
      "Real-time notifications and updates",
      "Manage events, download attendee lists, and generate reports",
      "User reviews and feedback",
      "Dashboard analytics",
      "User Management",
    ],
    tech_stack: [
      "React.js",
      "Tailwind CSS",
      "Framer Motion",
      "Node.js",
      "Express.js",
      "MySQL",
      "Sequelize",
      "Socket.io",
      "Dialogflow",
      "Paypal Integration",
      "Nodemailer",
    ],
    link: "https://tarakabataan.com/",
    github: "https://github.com/JMarkDev/Tara-Kabataan-Event-Management.git",
    category: "Freelance Projects",
  },
  {
    name: "PC Wizard Chatbot",
    description:
      "A chatbot powered by Dialogflow, developed for PC Wizard to assist customers with troubleshooting common PC issues and answering product-related questions. It improves customer support by providing instant, automated assistance for a wide range of technical inquiries.",
    image: [chatbot, chatbot1, chatbot2, chatbot3],
    features: [
      "Automated responses to common technical inquiries about PC issues",
      "Chatbot integration for user queries",
      "Login and registration system",
      "Dark and light mode interface",
    ],
    tech_stack: [
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "Dialogflow",
    ],
    link: "",
    github: "https://github.com",
    category: "Personal Projects",
  },
  {
    name: "West Prime Grading Portal",
    description:
      "A web application designed to streamline the grading process for West Prime, providing an efficient platform for managing student performance. The system allows instructors to input and update grades, students to view and download their grades, and administrators to oversee all modules, including user management, class creation, adding students and instructors, managing courses, subjects, and school years.",
    image: [
      grading_portal2,
      grading_portal1,

      grading_portal3,
      grading_portal4,
      grading_portal5,
      grading_portal6,
      grading_portal7,
      grading_portal8,
    ],
    features: [
      "Real-time grading and performance monitoring",
      "Responsive design for mobile and desktop access",
      "Manage student grades and generate reports",
      "Search and filtering functionality",
      "Input and update student grades",
      "Student grade viewing and PDF downloads",
      "Dashboard analytics",
      "User management (Admin controls for student and instructor accounts)",
      "Class management (Add classes, assign instructors, and manage students)",
      "Course and subject management",
      "School year management",
      "Generate and download reports",
    ],
    tech_stack: [
      "React.js",
      "Tailwind CSS",
      "Redux",
      "Node.js",
      "Express.js",
      "MySQL",
      "Sequelize",
    ],
    link: "",
    github: "https://github.com/JMarkDev/West-Prime-Grading-Portal.git",
    category: "Freelance Projects",
  },
  {
    name: "HealthCare Medical Records System",
    description:
      "A web application that provides healthcare professionals with real-time access to patient records while streamlining healthcare operations through appointment scheduling and data analytics. The system supports three user roles, administrators, doctors, and nurses. Administrators have full control over all modules, allowing them to manage patient records, search, update, and archive patient data, as well as oversee doctor and nurse accounts. Doctors can upload lab results, prescribe and manage medications, and utilize voice-to-text functionality for prescriptions. Nurses are responsible for recording patient vitals, maintaining bladder and bowel diaries, and updating prescriptions based on doctors’ instructions.",
    image: [healthcare, healthcare1, healthcare2, healthcare3, healthcare4],
    features: [
      "Real-time access to patient records",
      "Secure authentication with email verification",
      "Upload lab results and manage Diagnosis and Medications",
      "Voice-to-text functionality for recording medication",
      "Appointment scheduling",
      "Data analytics for patient insights",
      "Responsive design for mobile and desktop access",
      "Search and filtering functionality",
      "Customizable user profile",
      "Real-time notifications and updates",
      "Dashboard analytics",
      "User Management",
      "Generate and download reports",
    ],
    tech_stack: [
      "React.js",
      "Tailwind CSS",
      "Redux",
      "Node.js",
      "Express.js",
      "MySQL",
      "Sequelize",
      "Socket.io",
      "Nodemailer",
      "AssemblyAI",
    ],
    link: "https://healtcare-medical-record-system.tarakabataan.com/",
    github: "https://github.com",
    category: "Freelance Projects",
  },
  {
    name: "Pagadian Slaughter Management System",
    description:
      "A web application developed to automate record-keeping and payment monitoring for Pagadian City’s slaughterhouse. It tracks animals brought for slaughter, records essential details, and automatically generates demand letters for unpaid transactions, streamlining the collection process and ensuring compliance.",
    image: [
      slaughter,
      slaughter1,
      slaughter2,
      slaughter3,
      slaughter4,
      slaughter5,
    ],
    features: [
      "Automated record-keeping for animals brought for slaughter",
      "Secure authentication with email verification",
      "Payment monitoring and generate and print demand letters",
      "Responsive design for mobile and desktop access",
      "Search and filtering functionality",
      "Customizable user profile",
      "Manage animal data and transactions",
      "Real-time notifications and updates",
      "Dashboard analytics",
      "User Management",
      "User authentication with email verification",
      "Generate and download reports",
    ],
    tech_stack: [
      "React.js",
      "Tailwind CSS",
      "Redux",
      "Node.js",
      "Express.js",
      "MySQL",
      "Sequelize",
      "Socket.io",
      "Nodemailer",
    ],
    link: "https://pagadian-slaughterhouse.tarakabataan.com/",
    github: "https://github.com",
    category: "Freelance Projects",
  },

  {
    name: "JCR AI Chatbot",
    description:
      "A versatile chatbot powered by the OpenAI API, developed for the JCR computer shop. It engages users in natural conversations, providing answers to various inquiries ranging from product details to general assistance. It offers a smooth user experience with options for both light and dark mode interfaces.",
    image: [jcr_chatbot, jcr_chatbot1, jcr_chatbot3, jcr_chatbot4],
    features: [
      "Chatbot integration using OpenAI API",
      "Secure authentication with email verification",
      "Dark and light mode interface",
      "Forgot password with email verification",
    ],
    tech_stack: [
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MySQL",
      "Sequelize",
      "OpenAI API",
    ],
    link: "",
    github: "https://github.com",
    category: "Freelance Projects",
  },
  {
    name: "Senior High School Strand Recommender",
    description:
      "A web application designed to recommend academic strands to senior high school students based on their grades and strand conditions. The system analyzes student performance data and offers personalized recommendations, helping students make informed decisions about their educational future.",
    image: [
      strand_recommender,
      strand_recommender1,
      strand_recommender2,
      strand_recommender3,
      strand_recommender4,
    ],
    features: [
      "Personalized academic strand recommendations",
      "Secure authentication with email verification",
      "Responsive design for mobile and desktop access",
      "Manage strand conditions and related courses",
      "Recommend strand based on student grades and strand conditions",
      "Search and filtering functionality",
      "Customizable user profile",
      "Real-time notifications and updates",
      "Dashboard analytics",
      "User Management",
      "Generate and download reports",
    ],
    tech_stack: [
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MySQL",
      "Socket.io",
      "Nodemailer",
    ],
    link: "",
    github: "https://github.com",
    category: "Freelance Projects",
  },
];
