export const skillsToolsLearned = [
  {
    id: 1,
    title: "React & Component-Based UI",
    icon: "Component",
    level: "Intermediate",
    description: "This site is built as a React single-page application using functional components for each section like Hero, About, Skills, Projects, Timeline, and Contact. While building it, concepts like component composition, props, hooks (useState, useEffect for interactions and animations), and reusable UI patterns were applied across the app.",
    keyPoints: [
      "Created separate components for each section for modular code organization",
      "Implemented a global layout component to handle navbar and shared padding",
      "Used props to pass project and skills data as arrays into reusable card components"
    ]
  },
  {
    id: 2,
    title: "HTML, CSS & Responsive Design",
    icon: "Layout",
    level: "Advanced",
    description: "Semantic HTML tags such as header, section, nav, main, and footer are used within JSX to structure the page clearly and improve accessibility. CSS Flexbox and Grid were used heavily to create responsive two-column layouts on desktop and stacked layouts on mobile, ensuring the portfolio works well on all screen sizes.",
    keyPoints: [
      "Built responsive grids for skills and projects using repeat(auto-fit, minmax())",
      "Used media queries to adjust font sizes, spacing, and card layout for tablets and mobiles",
      "Implemented a sticky navigation bar and scrollable sections with consistent spacing"
    ]
  },
  {
    id: 3,
    title: "Animations, Transitions & Microinteractions",
    icon: "Sparkles",
    level: "Intermediate",
    description: "Smooth CSS transitions are applied to buttons, links, cards, and navigation elements, giving immediate visual feedback to user interactions. Scroll-triggered animations reveal sections and cards gracefully as the user moves down the page, improving perceived performance and making the portfolio feel dynamic.",
    keyPoints: [
      "Created hover animations for project cards with scale, shadow, and overlay effects",
      "Implemented scroll animations so sections fade and slide in when entering the viewport",
      "Used subtle page transitions (fade-in on initial load) to avoid jarring changes"
    ]
  }
];
