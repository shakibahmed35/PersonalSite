import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import contact from '../../data/contact'

const ContactIcons = () => {
    return(
        <ul className="icons">
            {contact.map((s) => (
                <li key={s.label}>
                    <a href={s.link} aria-label={s.label}>
                        <FontAwesomeIcon icon={s.icon} />
                    </a>
                </li>
            ))}
        </ul>
    );
};

export default ContactIcons;