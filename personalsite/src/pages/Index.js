import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main'

const Index = () => {
    return(
        <Main
            description={"Shakib's website. ASU Graduate. Basketball Legend. Software Developer"}
        >
            <article className='post' id='index'>
                <header>
                    <div className='title'>
                        <h2><Link to='/'>Welcome to my Website</Link></h2>
                        <p>
                            Shakib's website. ASU Graduate. Sports Legend. Software Developer
                        </p>
                    </div>
                </header>
                <p>
                    Welcome to my website. This was built out of React and hosted on GitHub Pages. 
                    Please feel free to read more <Link to='/about'>About me</Link>.
                    Also, please do check out my, {' '}
                    <Link to='/resume'>Resume</Link>, {' '} <Link to='/projects'>Projects</Link>, {' '} 
                    <Link to='/contact'>Contact</Link> Information.
                </p>
            </article>
        </Main>
    )
};

export default Index;