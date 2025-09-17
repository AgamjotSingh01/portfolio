export const projects = [
  {
    id: 1,
    title: 'GeoWater Insights',
    description: 'Engineered a scalable Flask backend API for groundwater level forecasting, enabling efficient data ingestion, preprocessing, and seamless communication with a React frontend. Integrated ML models (LSTM, CNN, and Random Forest) achieving 92% R-Score accuracy.',
    longDescription: 'A comprehensive water resource management system that provides farmers and local communities with real-time groundwater level predictions. The system processes historical data through advanced machine learning algorithms to forecast future water availability, supporting sustainable agricultural practices.',
    image: '/project-images/geowater.png',
    liveUrl: 'https://geowater-insights.vercel.app',
    githubUrl: 'https://github.com/agamjot/geowater-insights',
    technologies: ['Flask', 'React', 'Python', 'Machine Learning', 'LSTM', 'CNN', 'Random Forest', 'Data Science'],
    duration: '3 months',
    platform: 'VS Code',
    features: [
      'Real-time groundwater level predictions',
      'Advanced ML model integration (LSTM, CNN, Random Forest)',
      '92% forecasting accuracy',
      'Scalable Flask backend API',
      'React frontend with data visualization'
    ]
  },
  {
    id: 2,
    title: 'LearnSphere',
    description: 'Built a scalable backend with Flask and LangChain powering an AI-driven study planner. Features real-time scheduling, performance tracking, and Google Calendar synchronization with React/Next.js frontend.',
    longDescription: 'An intelligent study management platform that leverages AI and NLP to create personalized study schedules. The system adapts to individual learning patterns and integrates seamlessly with existing productivity tools.',
    image: '/project-images/learnsphere.jpeg',
    liveUrl: 'https://learnsphere.vercel.app',
    githubUrl: 'https://github.com/agamjot/learnsphere',
    technologies: ['Flask', 'LangChain', 'React', 'Next.js', 'AI/ML', 'NLP', 'Google Calendar API', 'Python'],
    duration: '3 months',
    platform: 'VS Code, Github',
    features: [
      'AI-driven personalized study schedules',
      'Google Calendar integration',
      'Performance tracking and analytics',
      '85% improvement in student engagement',
      'ML and NLP powered tutoring system'
    ]
  },
  {
    id: 3,
    title: 'AgroScan',
    description: 'Developed a full-stack Flask and React application for real-time plant disease detection, delivering instant diagnosis, treatment recommendations, and weather-based farming insights.',
    longDescription: 'A smart agriculture solution that uses computer vision and machine learning to identify plant diseases from leaf images. Provides farmers with instant diagnostic results and actionable treatment recommendations.',
    image: '/project-images/agroscan.png',
    liveUrl: 'https://agroscan.vercel.app',
    githubUrl: 'https://github.com/agamjot/agroscan',
    technologies: ['Flask', 'React', 'CNN', 'Transfer Learning', 'Computer Vision', 'Python', 'Machine Learning'],
    duration: 'Ongoing',
    platform: 'VS Code',
    features: [
      'Real-time plant disease detection',
      'CNN models with transfer learning',
      '95% accuracy on leaf image classification',
      'Instant diagnosis and treatment recommendations',
      'Weather-based farming insights'
    ]
  },
  {
    id: 4,
    title: 'ChatHive',
    description: "ChatHive is a real-time chat application inspired by Discord, built with Next.js, Node.js, Express, and MongoDB. It allows users to create servers, join channels, and chat instantly with a clean and modern UI.",
    longDescription: 'ChatHive is a real-time chat application inspired by Discord, built with Next.js, Node.js, Express, and MongoDB. It allows users to create servers, join channels, and chat instantly with a clean and modern UI."',
    image: '/project-images/chathive.png',
    liveUrl: 'https://agroscan.vercel.app',
    githubUrl: 'https://github.com/AgamjotSingh01/agroscan',
    technologies: ['Node.js', 'React', 'Express', 'MongoDB', 'Socket.io', 'bcrypt', 'Axios'],
    duration: 'Ongoing',
    platform: 'VS Code',
    features: [
    "Authentication & Authorization (JWT-based login & signup)",
    "Real-time Messaging with Socket.io",
    "Create & Join Servers like Discord communities" ,
    "Channel-based Conversations for organized discussions",
    "Modern UI with Bootstrap 5.0 & Custom Components"
    ]
  }
];
