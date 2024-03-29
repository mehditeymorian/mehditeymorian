const data = [
  {
    title: 'Evaluation of Double DQN method in the Othello game',
    subtitle: 'Evaluation of Double DQN method in the Othello game with purpose of creating an intelligent agent',
    link: 'https://github.com/mehditeymorian/othello-intelligent-agent',
    images: [],
    date: '2023',
    desc: 'Applying Double DQN method to assess the performance of the agent in game play and developing strategies and comparing the results against my previous attempts using the Minimax algorithm and heuristic functions.',
    tags: ['Python', 'Pytorch', 'TensorBoard', 'Matplotlib', 'Deep Reinforcement Learning', 'Double DQN'],
  },
  {
    title: 'Idea Management System',
    subtitle: '',
    link: 'https://github.com/Idea-Thrive',
    images: [],
    date: '2022',
    desc: 'An idea management system, a service for suggesting and voting ideas for universities and companies.',
    tags: ['Go', 'React', 'MySQL', 'Typescript'],
  },
  {
    title: 'Tag Recommendation System for Stackoverflow Questions',
    subtitle: 'Suggests the top N tags with the highest similarity to the given tag',
    link: 'https://github.com/mehditeymorian/JNotes/tree/main/stackoverflow',
    images: [],
    date: '2022',
    desc: 'A matrix of tags is created and filled by Confidence(Tag1, Tag2). Confidence is a type of association rule for calculating closeness of items in a dataset. Confidence is the percentage of all transactions satisfying X that also satisfy Y.',
    tags: ['Python', 'Pandas'],
  },
  {
    title: 'Complex Network Analysis',
    subtitle: 'Analyzing a complex graph, which represents interaction between a group of people, using node fitness and connection count',
    link: 'https://github.com/mehditeymorian/JNotes/tree/main/complex-network/characteristics-analysis',
    images: [],
    date: '2022',
    desc: 'Analyzing random graph characteristics including average node degree, degree count, and degree change during cycles after applying an initial fitness to each node. These graphs represent an abstract overview of relationships in social media applications like facebook, instagram, and etc.',
    tags: ['Python', 'NetworkX'],
  },
  {
    title: 'QSSE',
    subtitle: 'SSE Over QUIC Protocol in Go',
    link: 'https://github.com/snapp-incubator/qsse',
    images: [],
    date: '2022',
    desc: 'Implementation of Server Sent Events by QUIC. A faster replacement for traditional SSE over HTTP/2.',
    tags: ['QUIC', 'Go', 'SSE'],
  },
  {
    title: 'WebRTC Video Call',
    subtitle: 'Group Video Call using WebRTC',
    link: 'https://github.com/mehditeymorian/webrtc-video-call',
    images: [],
    date: '2022',
    desc: 'This project is a video calling application using WebRTC technology. It contains minimum requirements to provide a group video call. WebRTC is a free and open-source project providing web browsers and mobile applications with real-time communication via application programming interfaces.',
    tags: ['JS', 'Go', 'WebRTC'],
  },
  {
    title: 'Etefagh',
    subtitle: 'HTTP server receives events and publishes them to STAN',
    link: 'https://github.com/mehditeymorian/Etefagh',
    images: [],
    date: '2021',
    desc: 'Publishes events to Nats Streaming(STAN) synchornously and asynchronously. Cache events\'s publish-state using Redis and Store events using MongoDB.',
    tags: ['Go', 'Nats.io', 'Redis', 'MongoDB'],
  },
  {
    title: 'Cool Compiler',
    subtitle: 'Compiler for Cool Programming Language',
    link: 'https://github.com/mehditeymorian/Cool-Compiler',
    images: [],
    date: '2021',
    desc: 'I wrote this project for Compiler course at Shahid Beheshti University Summer 2021. Java, PGen, ANTLR are the tools that I\'ve leveraged to do this project.',
    tags: ['Java', 'Assembly'],
  },
  {
    title: 'Microcontroller Based Oscillator',
    subtitle: 'Generating different types of waves using a Microcontroller',
    link: 'https://github.com/mehditeymorian/Microcontroller-Oscillator',
    images: [],
    date: '2021',
    desc: 'A Microcontroller based Oscillator that produces a periodic, oscillating electronic signal, often a sine wave or a square wave. I used Stm32f microcontroller to complete this project. You can generate up to 8 different types of waves. Also Wave period and frequency are adjustable.',
    tags: ['C', 'Signal Processing', 'STM32F', 'ARM'],
  },
  {
    title: 'Computer Network Simulation',
    subtitle: 'This is a simulation of a computer network from scratch.',
    link: 'https://github.com/mehditeymorian/Network-Simulation',
    images: [],
    date: '2021',
    desc: 'This is a network simulation project written for the Computer Networks Course. Link-State protocol is used as network topology. Routers connect using UDP c and connection between a Router and NetworkManager is based on TCP protocol. Dijkstra algorithm is used to update the forwarding table.',
    tags: ['Java', 'Dijkstra Algorithm', 'TCP/UDP', 'Link-State protocol'],
  },
  {
    title: 'Twitter Frontend',
    subtitle: 'Twitter-ish Frontend wirtten with React',
    link: 'https://github.com/mehditeymorian/twitter-react',
    images: [],
    date: '2020',
    desc: 'This is a Twitter-like social media with pretty much everything Twitter has and more',
    tags: ['React', 'JS'],
  },
  {
    title: 'Othello Game',
    subtitle: 'Othello Game With Intelligent agent developed by Genetic Algorithms',
    link: 'https://github.com/mehditeymorian/Othello-Game',
    images: [],
    date: '2020',
    desc: 'Implementation of Othello game with model training using evolutionary alogrithms. This project consists of three section, game logic, Minimax tree for AI model and training using evolutionary algorithms.',
    tags: ['Kotlin', 'Genetic Algorithms', 'Evolutionary Algorithms'],
  },
  {
    title: 'HTTP Client Library',
    subtitle: 'HTTP Client Library for sending http request',
    link: 'https://github.com/mehditeymorian/HttpClient',
    images: [],
    date: '2020',
    desc: 'Simple Http Client written for Internet Engineering Lecture.',
    tags: ['Java', 'HTTP'],
  },
  {
    title: 'Smart Task',
    subtitle: 'odo list application with ability to categorized tasks.',
    link: 'https://github.com/mehditeymorian/SmartTask',
    images: [],
    date: '2019',
    desc: 'Todo list application with ability to categorized tasks. each task consist of a title, description, deadline, priority and etc. it support persian and english language. and also compatible with darker theme.',
    tags: ['Android', 'Java', 'Jetpack'],
  },
];

export default data;
