import React from 'react';
import { Link } from 'react-router-dom';

const References = () => {
    return(
        <div className='references'>
            <div className='link-to' id='references' />
            <div className='title'>
                <Link to='/contact'>
                    <h3>References available upon request</h3>
                </Link>
            </div>
        </div>
    );
};

export default References;