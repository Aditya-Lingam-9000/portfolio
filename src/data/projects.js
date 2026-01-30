export const projects = [
  {
    id: 1,
    title: "AI Image Classifier",
    description: "Built a convolutional neural network to classify images across 10 categories with 92% accuracy using TensorFlow and Python.",
    longDescription: "A deep learning project focused on computer vision. I implemented a custom CNN architecture to process and classify high-resolution images. The model was trained on a dataset of 50,000+ images and optimized using techniques like data augmentation and transfer learning.",
    features: ["Custom CNN Architecture", "Data Augmentation", "Transfer Learning", "Real-time Classification"],
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "AI/ML",
    tech: ["Python", "TensorFlow", "NumPy", "OpenCV"],
    github: "https://github.com",
    demo: null
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "Designed and developed this responsive portfolio website with React, featuring smooth animations and modern UI patterns.",
    longDescription: "A personal branding project built to showcase my technical skills and creative vision. It leverages Framer Motion for high-end animations and Tailwind CSS for a responsive, modern design system.",
    features: ["Interactive 3D Elements", "Glassmorphic UI", "Custom Animations", "Responsive Design"],
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Web",
    tech: ["React", "JavaScript", "Framer Motion", "Tailwind"],
    github: "https://github.com",
    demo: null
  },
  {
    id: 3,
    title: "Task Manager App",
    description: "Full-stack task management application with user authentication, real-time updates, and cloud storage integration.",
    longDescription: "A productivity tool designed to help teams stay organized. It features a real-time collaborative dashboard, automated notifications, and a robust backend built with Node.js and MongoDB.",
    features: ["User Authentication", "Real-time Collaboration", "Task Scheduling", "Push Notifications"],
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Web",
    tech: ["React", "Firebase", "Node.js", "Express"],
    github: "https://github.com",
    demo: null
  },
  {
    id: 4,
    title: "Sentiment Analysis Tool",
    description: "NLP-based tool to analyze sentiment in text reviews using machine learning models trained on custom datasets.",
    longDescription: "A natural language processing utility that interprets emotional tone within text. It uses advanced tokenization and lemmatization techniques to achieve high precision in sentiment scoring.",
    features: ["Text Tokenization", "Emotion Mapping", "Batch Processing", "Visualization Dashboard"],
    image: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "AI/ML",
    tech: ["Python", "NLTK", "Pandas", "Scikit-learn"],
    github: "https://github.com",
    demo: null
  },
  {
    id: 5,
    title: "Weather Dashboard",
    description: "Interactive weather dashboard that fetches real-time weather data from APIs and displays forecasts with visualizations.",
    longDescription: "A dynamic dashboard providing localized weather insights. It integrates with multiple weather APIs to provide accurate, real-time data visualizations using Chart.js.",
    features: ["Real-time Geo-location", "7-Day Forecast", "UV Index Tracking", "Interactive Maps"],
    image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Web",
    tech: ["JavaScript", "React", "OpenWeather API", "Chart.js"],
    github: "https://github.com",
    demo: null
  },
  {
    id: 6,
    title: "Data Visualization Dashboard",
    description: "Created interactive data visualizations for analyzing large datasets with filtering, sorting, and export capabilities.",
    longDescription: "A big data analytics platform that transforms raw numbers into actionable insights. Built with a focus on performance and intuitive user experience for handling massive datasets.",
    features: ["Dynamic Filters", "CSV Export", "Interactive Heatmaps", "Performance Optimization"],
    image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Other",
    tech: ["Python", "Pandas", "Plotly", "Streamlit"],
    github: "https://github.com",
    demo: null
  }
];

export const categories = ["All", "AI/ML", "Web", "Other"];
