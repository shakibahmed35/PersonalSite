import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import EmailLink from '../components/contact/EmailLink';
import ContactIcons from '../components/contact/ContactIcons';

const Contact = () => {
    return (
        <Main
            title='Contact'
            description="Contact Shakib Ahmed via email @ shakibahmed4352@gmail.com"
        >
            <article className='post' id='contact'>
                <header>
                    <div className='title'>
                        <h2><Link to='/contact'>Contact</Link></h2>
                    </div>
                </header>
                <div className='email-at'>
                    <p>Feel free to get in touch. You can email me at: </p>
                    <EmailLink />
                </div>
                <ContactIcons />
            </article>
        </Main>
    );
};

export default Contact;