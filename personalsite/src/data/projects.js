const data = [
    {
        title: 'This Website',
        subtitle: 'A personal website',
        image: '/images/projects/personalSite.jpeg',
        date: '2024-06-11',
        desc:
            'Built as a display of my previous works, '
            + 'to act as a more visual resume. '
            + 'It also acts as a way for me to sharpen React skills I have not used recently. '
            + 'This was built in React, and hosted on github pages',
    },
    {
        title: 'Music Matcher',
        subtitle: 'An Academic Project',
        image: '/images/projects/musicmatcher.jpeg',
        link: 'https://youtu.be/eJ3bmfE8unM',
        date: '2022-05-01',
        desc:
            'Built out an application that was designed for music suggestions. '
            + 'Front end was designed with React, back end was a model '
            + 'that was half lyrical sentiment analysis, half CNN classifying music via sound. '
            + 'This was done with 3 other people for my senior capstone.',
    },
    {
        title: 'Basketball Predictions Model',
        subtitle: 'An Academic Project',
        image: '/images/projects/basketball.jpeg',
        link: 'https://drive.google.com/file/d/14c8bIL8RJd6zFX0zxRWUZ2E8Lmom-ciS/view?usp=sharing',
        date: '2021-12-10',
        desc:
            'Developed a model that predicted NBA games with 80% accuracy. '
            + 'Data was scraped using BeautifulSoup from Basketball Reference. '
            + 'Players were clustered using Kmeans and used as input. '
            + 'The model was a blend of an NN using the player clusters as input '
            + 'and sentiment analysis used on articles written about the game. '
            + 'This was worked on with one other individual.',
    },
    {
        title: 'control-alt-delete',
        subtitle: 'Opportunity Hackathon',
        image: '/images/projects/cntlAltDel.jpeg',
        date: '2019-10-01',
        desc:
            'Control-Alt-Delete is a non-profit in AZ that aims to aid '
            + 'people in domestic abuse situations, and was present at a Hackathon in downtown Arizona. At this hackathon '
            + 'we built an app for them which allowed users to secretly '
            + 'call for help to get them out of danger. '
            + 'We built this using React as a frontend and MongoDB as the backend. '
            + 'I worked on this with 3 other people.'
    },
    {
        title: 'Bluetooh Bike Device',
        subtitle: 'Sundevil Hackathon',
        image: '/images/projects/nkk.jpeg',
        link: 'https://www.nkkswitches.com/nkk-smartdisplay-featured-engineering-design-challenge-arizona-state-university/',
        date: '2018-10-03',
        desc:
            'This was a hackathon hosted by ASU with the task of implementing '
            + "NKK's digital switches. For this, we built a device for that "
            + 'attatches to your bike to allow you to use your phone safely. '
            + 'This was made with an arduino and c++. '
    },
];

export default data;