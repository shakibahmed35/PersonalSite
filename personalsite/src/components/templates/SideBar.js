import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../contact/ContactIcons';

const { PUBLIC_URL } = process.env;

const SideBar = () => {
    return(
        <section id="sidebar">
            <section id="intro">
                <Link to="/" className="logo">
                    <img src={`${PUBLIC_URL}/images/me.jpeg`} alt='' />
                </Link>
                <header>
                    <h2>Shakib Ahmed</h2>
                    <p><a href='mailto:shakibahmed4352@gmail.com'>shakibahmed4352@gmail</a></p>
                </header>
            </section>

            <section id='blurb'>
                <h2>About</h2>
                <p>Hi, I&apos;m Shakib. I am a <a href='https://degrees.apps.asu.edu/masters-phd/major/ASU00/ESCOMSCMS/computer-science-ms'>
                    Arizona State </a> graduate. I have both my Bachelors and Masters in Computer Science. I am passionate about data science
                    and software development. On top of that, I have worked as a developer at <a href='https://privoro.com/'>Privoro</a>
                    and <a href='https://www.schwab.com/'>Charles Schwab</a>
                </p>
                <ul className='actions'>
                    <li>
                        {!window.location.pathname.includes('/resume') ? <Link to ='/resume' className='button'>Learn More</Link> : <Link to='/about' className='button'>About Me</Link>}

                    </li>
                </ul>
            </section>

            <section id='footer'>
                <ContactIcons />
            </section>
        </section>
    );
};

export default SideBar;