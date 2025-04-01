// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Sohan Mahadev",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Sohan Mahadev Portfolio",
    type: "website",
    url: "http://sohanmahadev.com/",
  },
};

//Home Page
const greeting = {
  title: "Sohan Mahadev",
  logo_name: "sohanmahadev",
  nickname: "Sohan",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://drive.google.com/file/d/1hfqJJ-UTzLoIomnlaN1LlyhjBVPnE9_n/view?usp=drivesdk",
  portfolio_repository: "https://github.com/SohanMahadev1", //yet to do
  githubProfile: "https://github.com/SohanMahadev1",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/SohanMahadev1",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/sohanmahadev",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },

  {
    name: "Gmail",
    link: "mailto:sohanmahadev10@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  // {
  //   name: "X-Twitter",
  //   link: "https://twitter.com/ashutosh_1919",
  //   fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
  //   backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  // },

  {
    name: "Instagram",
    link: "https://www.instagram.com/the_jungle_fury?igsh=bzdzZnpsdTZ0dDln",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React-Redux",
        "⚡ Developing mobile applications using Flutter, React Native and solo android apps using Kotlin",
        "⚡ Creating application backend in Node, Express & Flask",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },

        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
      ],
    },
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
        "⚡ Experience of working with Computer Vision and NLP projects",
        "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Deeplearning",
          imageSrc: "deeplearning_ai_logo.png",
        },
      ],
    },

    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Inkscape",
          fontAwesomeClassname: "simple-icons:inkscape",
          style: {
            color: "#000000",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [],
};

const degrees = {
  degrees: [
    {
      title: "Illinois Institute of Technology",
      subtitle: "Master's in Information Technology and Management",
      logo_path: "iitlogo.png",
      alt_name: "IIT",
      duration: "2023 - 2025",
      descriptions: [
        "⚡ I have Studied Advanced Programming & Software Development: Gained hands-on experience in multiple programming languages (e.g., Python, Java, C++) and learned best practices in software engineering, focusing on scalable and efficient application development.",
        "⚡ Cources on Data Structures & Algorithms: Acquired in-depth knowledge of both fundamental and advanced data structures, algorithms, and their computational complexities, applying them to solve performance-critical problems",
        "⚡ Expertized in Machine Learning & Artificial Intelligence: Explored machine learning models, neural networks, and AI techniques, utilizing them to solve real-world problems in areas like predictive analytics and pattern recognition",
      ],
      website_link: "https://www.iit.edu/",
    },
    {
      title: "Rajarajeswari College of Engineering (VTU)",
      subtitle: "Bachelor's in Computer Science",
      logo_path: "rrcelogo.png",
      alt_name: "Indiana University Bloomington",
      duration: "2018 - 2022",
      descriptions: [
        "⚡ Proficient in Java Development – Experienced in building scalable applications using Java, with expertise in object-oriented programming (OOP), multithreading, and backend development with frameworks like Spring Boot.",
        "⚡ Full-Stack Development Expertise – Hands-on experience in building scalable web and mobile applications using Java, Node.js, React, and database technologies like MySQL and MongoDB.",
        "⚡ Software Engineering & DevOps – Knowledge of agile methodologies, CI/CD pipelines, cloud services (AWS, Azure), and containerization tools like Docker for efficient software development and deployment.",
        "⚡ Offered Placements in Top IT Firms – Successfully received job offers from leading multinational companies, including Cognizant, TCS, Wipro, and Infosys, during campus recruitment, showcasing strong technical skills and problem-solving abilities.",
      ],
      website_link: "https://www.rrce.org/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Agile Scrum Master",
      subtitle: "Simpli Learn",
      logo_path: "scrum.png",
      certificate_link: "https://simpli-web.app.link/e/8JH23ZPb2Rb",
      alt_name: "SL",
      color_code: "#8C151599",
    },
    {
      title: "DevOps Tools",
      subtitle: "Simpli Learn",
      logo_path: "microsoft_logo.png",
      certificate_link: "https://simpli-web.app.link/e/dOMwmC2b2Rb",
      alt_name: "SL",
      color_code: "#00000099",
    },
    {
      title: "Master Data Structure & Algorithms in Java",
      subtitle: "Great Learning Academy",
      logo_path: "java.png",
      certificate_link:
        "https://dtmvamahs40ux.cloudfront.net/ComplementaryCourseCertificate/424056/original/SOHAN.M20210914-27368-1pnbss.jpg",
      alt_name: "java",
      color_code: "#0C9D5899",
    },
    {
      title: "Python for Data Science",
      subtitle: "Great Learning Academy",
      logo_path: "datascience.jpeg",
      certificate_link: "https://www.mygreatlearning.com/certificate/DMWXGVAG",
      alt_name: "GL",
      color_code: "#1F70C199",
    },
    {
      title: "Python for Machine learning",
      subtitle: "Great Learning",
      logo_path: "p.png",
      certificate_link: "https://www.mygreatlearning.com/certificate/PNWULWLR",
      alt_name: "ML",
      color_code: "#D83B0199",
    },
    {
      title: "Advanced Java",
      subtitle: "Great Learning",
      logo_path: "advancejava.png",
      certificate_link:
        "https://dtmvamahs40ux.cloudfront.net/ComplementaryCourseCertificate/409696/original/SOHAN.M20210905-7125-1055v2v.jpg",
      alt_name: "GL",
      color_code: "#1F70C199",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked in multiple roles, including Software Developer, DevOps Engineer, and AI/ML Specialist projects, contributing to both emerging startups and well-established companies. Beyond development, I enjoy organizing events and actively engage with open-source communities as a representative, fostering collaboration and innovation.",
  header_image_path: "experience.svg", // Path to header image
  sections: [
    {
      title: "Work", // Section title
      work: true,
      experiences: [
        {
          title: "Software Developer",
          company: "Entrix",
          company_url: "https://entrix.in/",
          logo_path: "Entrix.png",
          duration: "June 2022 - July 2023",
          location: "Mysore, Karnataka, IND",
          description:
            "● Developed a full-stack inventory management system for the Iron and Steel Industry using Node.js (Express.js), React.js, and React Native, enhancing operational efficiency by 40%. Improved API reliability through extensive Postman testing, reducing bug reports by 35% within the first month and ensuring seamless system stability for over 10,000 users.",
          color: "#FFFFFF", // You can use this color for styling elements specific to this experience
        },

        {
          title: "Programmer Analyst",
          company: "Cognizant Tecnology Solutions",
          company_url: "https://www.cognizant.com/us/en",
          logo_path: "cognizant.png",
          duration: "Feb 2021 - Apr 2022",
          location: "Bengaluru, Karnataka, IND",
          description:
            "● Championed Agile project delivery through Scrum methodologies, providing mentorship to 2 junior developers, resulting in a 20% improvement in team velocity and a 15% reduction in deployment rollbacks. Facilitated Agile development through Scrum methodologies, decreasing sprint completion times by 25% and increasing the volume of code deployments by 40% on weekly basis.",

          color: "#0879bf",
        },

        {
          title: "AI & ML Intern",
          company: " Quant Masters Technologies Pvt. Ltd",
          company_url: "https://www.quantmasters.in/home",
          logo_path: "Quant.png",
          duration: "Jun 2020 - Dec 2020",
          location: "Bengaluru, Karnataka, IND",
          description:
            "● Achieved hands-on experience implementing cutting-edge algorithms like CNNs and KNN within a collaborative setting presented findings that addressed crucial bottlenecks affecting model training efficiency during weekly reviews and Data Analysis. Spearheaded efforts in classifying musical compositions across six categories including country and hip-hop, leveraged SVM Classifier methodologies resulting in an impressive success rate of 82%",
          color: "#0879bf",
        },

        {
          title: "Full Stack Intern",
          company: " Thaniya Technologies",
          company_url: "https://thaniyatech.com/",
          logo_path: "Thaniya.png",
          duration: "Apr 2019 - May 2020",
          location: "Bengaluru, Karnataka, IND",
          description:
            "Engineered an interactive website dedicated to local milk producers. facilitated seamless integration with MySQL databases while deploying on AWS Elastic-Beanstalk to ensure 99.9% uptime and augmented user accessibility across platforms. Optimized API integrations within the Bus Booking app which resulted in processing up to 500 requests per minute. ",
          color: "#0879bf",
        },
        // Other experiences can go here...
      ],
    },
    // More sections like "Internships", "Volunteering", etc. can go here...
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

// const publications = {
//   data: [
//     {
//       id: "neuro-symbolic-sudoku-solver",
//       name: "Neuro-Symbolic Sudoku Solver",
//       createdAt: "2023-07-02T00:00:00Z",
//       description: "Paper published in KDD KiML 2023",
//       url: "https://arxiv.org/abs/2307.00653",
//     },
//     {
//       id: "mdp-diffusion",
//       name: "MDP-Diffusion",
//       createdAt: "2023-09-19T00:00:00Z",
//       description: "Blog published in Paperspace",
//       url: "https://blog.paperspace.com/mdp-diffusion/",
//     },
//     {
//       id: "consistency-models",
//       name: "Consistency Models",
//       createdAt: "2023-10-12T00:00:00Z",
//       description: "Blog published in Paperspace",
//       url: "https://blog.paperspace.com/consistency-models/",
//     },
//   ],
// };

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "s300.png",
    description:
      "I am available on almost every social media. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Around United States",
    subtitle:
      "I am currently seeking an opportunity to leverage my skills and experience in software development, AI, and cloud technologies. With a strong background in building scalable web and mobile applications using Java, Node.js, and React, along with expertise in API development, database management, and cloud integration, I am eager to contribute to innovative projects. My experience in agile methodologies, software testing, and AI-driven solutions positions me well for roles that involve cutting-edge technology and problem-solving. I am looking for a dynamic team where I can apply my knowledge, continue learning, and make a meaningful impact.",
    link: "https://medium.com/@sohanmahadev10",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Archer Ave, Chicago, IL, USA 60608",
    locality: "Chicago",
    country: "USA",
    region: "Illinois",
    postalCode: "60608",
    streetAddress: "Archer Avenue",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/SXfmkbgzSS4b5ZU17",
  },
  phoneSection: {
    title: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  //publications,
  contactPageData,
};
