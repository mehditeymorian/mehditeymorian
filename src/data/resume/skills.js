const skills = [
  {
    title: 'Linux',
    competency: 5,
    category: ['Tools'],
  },
  {
    title: 'Microservices',
    competency: 5,
    category: ['Backend Development'],
  },
  {
    title: 'Node.js',
    competency: 5,
    category: ['Backend Development', 'Web Development'],
  },
  {
    title: 'Go',
    competency: 5,
    category: ['Backend Development', 'Languages'],
  },
  {
    title: 'Python',
    competency: 5,
    category: ['Data Science', 'Languages'],
  },
  {
    title: 'Javascript',
    competency: 5,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'React',
    competency: 5,
    category: ['Web Development'],
  },
  {
    title: 'HTML',
    competency: 5,
    category: ['Web Development'],
  },
  {
    title: 'CSS',
    competency: 5,
    category: ['Web Development'],
  },
  {
    title: 'Java',
    competency: 5,
    category: ['Languages'],
  },
  {
    title: 'Matlab',
    competency: 5,
    category: ['Data Science', 'Languages'],
  },
  {
    title: 'Kotlin',
    competency: 5,
    category: ['Languages'],
  },
  {
    title: 'C/C++',
    competency: 5,
    category: ['Languages'],
  },
  {
    title: 'MYSQL',
    competency: 5,
    category: ['Databases'],
  },
  {
    title: 'MongoDB',
    competency: 5,
    category: ['Databases'],
  },
  {
    title: 'Redis',
    competency: 5,
    category: ['Databases'],
  },
  {
    title: 'Elasticsearch/ELK Stack',
    competency: 5,
    category: ['Data Science', 'Backend Development'],
  },
  {
    title: 'RabbitMQ',
    competency: 5,
    category: ['MessageBroker', 'Backend Development'],
  },
  {
    title: 'NATS',
    competency: 5,
    category: ['MessageBroker', 'Backend Development'],
  },
  {
    title: 'ActiveMQ',
    competency: 5,
    category: ['MessageBroker', 'Backend Development'],
  },
  {
    title: 'EMQX',
    competency: 5,
    category: ['MessageBroker', 'Backend Development'],
  },
  {
    title: 'NetworkX',
    competency: 5,
    category: ['Data Science'],
  },
  {
    title: 'Numpy',
    competency: 5,
    category: ['Data Science'],
  },
  {
    title: 'Matplotlib',
    competency: 5,
    category: ['Data Science'],
  },
  {
    title: 'PyQT5',
    competency: 5,
    category: ['Data Science'],
  },
  {
    title: 'Assembly',
    competency: 5,
    category: ['Languages'],
  },
  {
    title: 'Antlr',
    competency: 5,
    category: ['Tools'],
  },
  {
    title: 'Git',
    competency: 5,
    category: ['Tools'],
  },
  {
    title: 'Github/Gitlab',
    competency: 5,
    category: ['Tools'],
  },
  {
    title: 'Kubernetes',
    competency: 5,
    category: ['Devops'],
  },
  {
    title: 'Docker',
    competency: 5,
    category: ['Devops'],
  },
  {
    title: 'Grafana',
    competency: 5,
    category: ['Devops'],
  },
  {
    title: 'OpenShift RedHat',
    competency: 5,
    category: ['Devops'],
  },
  {
    title: 'Prometheus',
    competency: 5,
    category: ['Devops'],
  },
  {
    title: 'WebRTC',
    competency: 5,
    category: ['Web Development'],
  },
  {
    title: 'Bash',
    competency: 5,
    category: ['Languages'],
  },
  {
    title: 'Android',
    competency: 5,
    category: ['Android'],
  },
  {
    title: 'JetPack',
    competency: 5,
    category: ['Android'],
  },
  {
    title: 'Redux',
    competency: 5,
    category: ['Web Development'],
  },
  {
    title: 'Material UI',
    competency: 5,
    category: ['Web Development'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

const categories = [
  ...new Set(skills.reduce((acc, { category }) => acc.concat(category), [])),
]
  .sort()
  .map((category) => ({
    name: category,
  }));

export { categories, skills };
