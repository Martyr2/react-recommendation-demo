type SlideType = {
    slideNum: number,
    author: string,
    authorTitle: string,
    text: string,
    avatar: string
}

const slides: SlideType[] = [
    { 
        slideNum: 0, 
        author: 'Anne Ngan', 
        authorTitle: 'Customer Success Manager - Henry Schein One | Exan', 
        text: 'Tim would be an asset to any team looking for someone with the ability to take an idea to execution - all while helping you mitigate any potential risks.',
        avatar: 'https://www.timhurd.com/wp-content/themes/portfolio/images/anne-avatar.jpg'
    },
    { 
        slideNum: 1, 
        author: 'Patrik Rose', 
        authorTitle: 'Full Stack Developer at Mark Anthony Group',
        text: 'Tim is not just a developer that is a master of his craft, but also a thought leader and a mentor.',
        avatar: 'https://www.timhurd.com/wp-content/themes/portfolio/images/patrik-avatar.jpg'
    },
    { 
        slideNum: 2, 
        author: 'Sophie Bujold', 
        authorTitle: 'Digital Marketer | Online Community Strategist - Cliqueworthy.com',
        text: 'Timothy was excellent at understanding our organization\'s business needs and translating them into web applications that were highly functional. ',
        avatar: 'https://www.timhurd.com/wp-content/themes/portfolio/images/sophie-avatar.jpg'
    },
    { 
        slideNum: 3, 
        author: 'Raha Vafaei', 
        authorTitle: 'Lead Marketing Manager at Ansys',
        text: 'Tim consistently demonstrated strong technical skills, proactive problem-solving abilities, and excellent communication, making him an invaluable asset to any organization.',
        avatar: 'https://www.timhurd.com/wp-content/themes/portfolio/images/raha-avatar.jpg'
    },
    { 
        slideNum: 4, 
        author: 'Coda Pathfinder', 
        authorTitle: 'System Administrator at Ansys',
        text: 'Tim is wonderful to work with. His attention to detail and methodical approach to problem solving is a key strength.',
        avatar: 'https://www.timhurd.com/wp-content/themes/portfolio/images/coda-avatar.jpg'
    }
];

export default slides;