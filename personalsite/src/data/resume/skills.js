const skills = [
    {
        title: 'Javascript',
        competency: 4,
        category: ['Web Development', 'Languages', 'JavaScript'],
    },
    {
        title: 'Node.js',
        competency: 4,
        category: ['Web Development', 'JavaScript'],
    },
    {
        title: 'React',
        competency: 3,
        category: ['Web Development', 'JavaScript'],
    },
    {
        title: 'Next.js',
        competency: 2,
        category: ['Web Development', 'JavaScript'],
    },
    {
        title: 'Bash',
        competency: 3,
        category: ['Tools', 'Languages'],
    },
    {
        title: 'AWS',
        competency: 2,
        category: ['Web Development', 'Tools'],
    },
    {
        title: 'GCP',
        competency: 2,
        category: ['Web Development', 'Tools'],
    },
    {
        title: 'PostgreSQL/SQL/SQLite3',
        competency: 4,
        category: ['Web Development', 'Databases', 'Languages'],
    },
    {
        title: 'Data Mining',
        competency: 3,
        category: ['ML'],
    },
    {
        title: 'Flask',
        competency: 1,
        category: ['Web Development', 'Python'],
    },
    {
        title: 'Git',
        competency: 4,
        category: ['Tools'],
    },
    {
        title: 'Kubernetes',
        competency: 1,
        category: ['Tools'],
    },
    {
        title: 'Numpy',
        competency: 4,
        category: ['Data Science', 'Python', 'ML'],
    },
    {
        title: 'PyTorch',
        competency: 3,
        category: ['ML', 'Python'],
    },
    {
        title: 'Pandas',
        competency: 3,
        category: ['Data Science', 'Python', 'ML'],
    },
    {
        title: 'MatPlotLib',
        competency: 3,
        category: ['Data Science', 'Python']
    },
    {
        title: 'Scikit-learn',
        competency: 3,
        category: ['Data Science', 'Python'],
    },
    {
        title: 'Jupyter',
        competency: 3,
        category: ['Tools', 'Data Science', 'Python'],
    },
    {
        title: 'HTML + SASS/SCSS/CSS',
        competency: 2,
        category: ['Web Development', 'Languages'],
    },
    {
        title: 'C++',
        competency: 2,
        category: ['Languages'],
    },
    {
        title: 'Java',
        competency: 2,
        category: ['Languages'],
    },
    {
        title: 'MATLAB',
        competency: 1,
        category: ['Languages'],
    },
    {
        title: 'R',
        competency: 1,
        category: ['Languages'],
    },
    {
        title: 'SAS',
        competency: 2,
        category: ['Languages'],
    },
    {
        title: 'Data Visualization',
        competency: 3,
        category: ['Data Science', 'Python'],
    },
    {
        title: 'GraphQL',
        competency: 2,
        category: ['Web Development', 'Databases'],
    },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

const colors = [
    '#6968b3',
    '#37b1f5',
    '#40494e',
    '#515dd4',
    '#e47272',
    '#cc7b94',
    '#3896e2',
    '#c3423f',
    '#d75858',
    '#747fff',
    '#64cb7b',
];

const categories = [
    ...new Set(skills.flatMap(({ category }) => category)),
].sort().map((category, index) => ({
    name: category,
    color: colors[index],
}));

export { categories, skills };