/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Muhammad Sheheryar Raza",
  title: "Hi all, I'm Sheheryar",
  subTitle: emoji(
    "A passionate .NET Developer 🚀 with expertise in C#, ASP.NET Core, Entity Framework Core, and SQL Server. Experienced in building RESTful APIs and delivering end-to-end web solutions with a focus on clean architecture principles."
  ),
  resumeLink: "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/SheheryarRaza",
  linkedin: "https://www.linkedin.com/in/muhammad-sheheryar-raza/",
  gmail: "m.sheheryarraza@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "PASSIONATE .NET DEVELOPER WHO BUILDS ROBUST AND SCALABLE WEB SOLUTIONS",
  skills: [
    emoji(
      "⚡ Develop backend modules for web and desktop applications using ASP.NET Core and C#"
    ),
    emoji(
      "⚡ Build and maintain RESTful APIs with Entity Framework Core and SQL Server"
    ),
    emoji(
      "⚡ Implement secure authentication systems with JWT and role-based authorization"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "C#",
      fontAwesomeClassname: "fab fa-microsoft"
    },
    {
      skillName: "ASP.NET Core",
      fontAwesomeClassname: "fas fa-terminal"
    },
    {
      skillName: "Entity Framework",
      fontAwesomeClassname: "fas fa-table"
    },
    {
      skillName: "SQL Server",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "HTML5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Angular",
      fontAwesomeClassname: "fab fa-angular"
    },
    {
      skillName: "MVC",
      fontAwesomeClassname: "fas fa-sitemap"
    },
    {
      skillName: "REST APIs",
      fontAwesomeClassname: "fas fa-cloud"
    },
    {
      skillName: "JWT",
      fontAwesomeClassname: "fas fa-key"
    },
    {
      skillName: "SignalR",
      fontAwesomeClassname: "fas fa-broadcast-tower"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "Clean Architecture",
      fontAwesomeClassname: "fas fa-layer-group"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Gift University",
      logo: require("./assets/images/Gift-UNIVERISTY-LOGO.png"), // You can replace this with your university logo
      subHeader: "BS Computer Science",
      duration: "2020 - 2024",
      desc: "Graduated with coursework in Data Structures and Algorithms, Database Management Systems, Software Engineering, and Web Development.",
      descBullets: [
        "Data Structures and Algorithms",
        "Database Management Systems",
        "Software Engineering",
        "Web Development"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "C# & .NET", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend Development",
      progressPercentage: "85%"
    },
    {
      Stack: "Database & APIs",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: ".NET Core Developer",
      company: "Eratech",
      companylogo: require("./assets/images/download.jpeg"), // You can replace this with company logo
      date: "October 2024 - July 2025",
      desc: "Developed backend modules for both web and desktop applications using ASP.NET Core and C#. Built and maintained APIs with Entity Framework Core and SQL Server.",
      descBullets: [
        "Developed backend modules for web and desktop applications using ASP.NET Core and C#",
        "Built and maintained APIs with Entity Framework Core and SQL Server",
        "Implemented JWT-based authentication and secure session handling",
        "Contributed to POS system features and worked on WPF UI integration"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set true to show GitHub projects section
};

// Some big projects you have worked on

const bigProjects = {
  title: "Featured Projects",
  subtitle:
    "PROJECTS THAT DEMONSTRATE MY TECHNICAL EXPERTISE AND PROBLEM-SOLVING SKILLS",
  projects: [
    {
      image: require("./assets/images/CopyHere.png"), // You can replace this with project screenshots
      projectName: "CopyHere - Cross-Device Clipboard Sync",
      projectDesc:
        "A real-time clipboard synchronization platform built with ASP.NET Core 8.0, SignalR, Entity Framework Core, and SQL Server. Features include real-time sync, clipboard history, device management, and rate limiting.",
      footerLink: [
        {
          name: "View Project",
          url: "https://github.com/SheheryarRaza/CopyHere" // Update with actual project link
        }
      ]
    },
    {
      image: require("./assets/images/TaskManagement.png"), // You can replace this with project screenshots
      projectName: "Task Management API",
      projectDesc:
        "A comprehensive task management system with ASP.NET Core, Entity Framework Core, SQL Server, JWT authentication, and role-based authorization. Features include task/subtask management, prioritization, tagging, and notifications.",
      footerLink: [
        {
          name: "View Project",
          url: "https://github.com/SheheryarRaza/TaskManagmentApi" // Update with actual project link
        }
      ]
    },
    {
      image: require("./assets/images/ECOM Store.png"), // You can replace this with project screenshots
      projectName: "E-Commerce Web Application",
      projectDesc:
        "Full-stack e-commerce solution built with ASP.NET Core, Entity Framework Core, .NET Identity, MVC Architecture, and SQL Server. Features secure authentication, product catalog, and order processing modules.",
      footerLink: [
        {
          name: "View Project",
          url: "https://github.com/SheheryarRaza/Bulky_MVC" // Update with actual project link
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Technical Expertise 🏆 "),
  subtitle:
    "Core competencies and technical achievements that define my development approach !",

  achievementsCards: [
    {
      title: "Backend Development",
      subtitle:
        "Expertise in building robust backend systems with ASP.NET Core, Entity Framework Core, and SQL Server. Implemented clean architecture principles and secure authentication systems.",
      image: require("./assets/images/Codeing.jpeg"),
      imageAlt: "Backend Development",
      footerLink: [
        {
          name: "View Projects",
          url: "https://github.com/SheheryarRaza"
        }
      ]
    },
    {
      title: "API Development",
      subtitle:
        "Experience in designing and implementing RESTful APIs with proper authentication, authorization, and error handling. Built scalable solutions for real-time communication using SignalR.",
      image: require("./assets/images/API DEV.png"),
      imageAlt: "API Development",
      footerLink: [
        {
          name: "View Projects",
          url: "https://github.com/SheheryarRaza"
        }
      ]
    },

    {
      title: "Database Design",
      subtitle:
        "Proficient in database design and management using SQL Server and Entity Framework Core. Experience with data modeling, optimization, and implementing efficient data access patterns.",
      image: require("./assets/images/Database.jpeg"),
      imageAlt: "Database Design",
      footerLink: [
        {name: "View Projects", url: "https://github.com/SheheryarRaza"}
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Technical Writing",
  subtitle:
    "I believe in sharing knowledge and documenting my learning journey in software development.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://github.com/SheheryarRaza",
      title: "Building RESTful APIs with ASP.NET Core",
      description:
        "A comprehensive guide to building scalable and maintainable RESTful APIs using ASP.NET Core and Entity Framework Core."
    },
    {
      url: "https://github.com/SheheryarRaza",
      title: "Implementing Clean Architecture in .NET",
      description:
        "Best practices and patterns for implementing clean architecture principles in .NET applications for better maintainability and testability."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TECHNICAL PRESENTATIONS",
  subtitle: emoji(
    "SHARING KNOWLEDGE AND EXPERIENCES IN SOFTWARE DEVELOPMENT 🎯"
  ),

  talks: [
    {
      title: "Introduction to ASP.NET Core",
      subtitle: "Technical presentation on modern .NET development",
      slides_url: "https://github.com/SheheryarRaza",
      event_url: "https://github.com/SheheryarRaza"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set to false since you don't have podcast content yet
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  // number: "+92-306-6105428",
  email_address: "m.sheheryarraza@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set to false since you don't have Twitter mentioned in your resume
};

const isHireable = true; // Set to true since you're actively looking for opportunities

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
