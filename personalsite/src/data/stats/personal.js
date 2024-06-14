import React, { useState, useEffect} from 'react';

const Age = () => {
    const [age, setAge] = useState();

    const tick = () => {
        const divisor = 1000 * 60 * 60 * 24 * 365.2421897;
        const birthTime = new Date('2000-06-09T00:00:00');
        setAge(((Date.now() - birthTime) / divisor).toFixed(2));
    };

    useEffect(() => {
        const timer = setInterval(() => tick(), 25);
        return() => {
            clearInterval(timer);
        };
    }, {});
    return <>{age}</>
};

const data = [
    {
        key: 'age',
        label: 'Current age',
        value: <Age />,
    },
    {
        key: 'countries',
        label: 'Countries visited',
        value: 7,
    },
    {
        key: 'location',
        label: 'Current city',
        value: 'Phoenix, AZ',
    },
    {
        key: 'languages',
        label: 'Languages I Speak',
        value: 'English, Spanish, Bengali'
    },
    {
        key: 'book',
        label: 'Favorite book',
        value: 'Cloud Cuckoo Land',
        link: 'https://www.goodreads.com/book/show/56783258-cloud-cuckoo-land',
    },
    {
        key: 'show',
        label: 'Favorite Show',
        value: 'Breaking Bad',
    },
];

export default data;