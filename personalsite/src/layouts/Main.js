import React from 'react';
import PropTypes from 'prop-types'
import { Helmet, HelmetProvider } from 'react-helmet-async';

import Navigation from '../components/templates/Navigation';
import SideBar from '../components/templates/SideBar';
import ScrollToTop from '../components/templates/ScrollToTop';

const Main = (props) => {
    return(
        <HelmetProvider>
            <ScrollToTop />
            <Helmet titleTemplate='%s | Shakib Ahmed' defaultTitle='Shakib Ahmed' defer={false}>
                {props.title && <title>{props.title}</title>}
                <meta name='description'  content={props.description} />
            </Helmet>
            <div id='wrapper'>
                <Navigation />
                <div id='main'>
                    {props.children}
                </div>
                {props.fullPage ? null : <SideBar />}
            </div>
        </HelmetProvider>
    );
};

Main.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]),
    fullPage: PropTypes.bool,
    title: PropTypes.string,
    description: PropTypes.string,
};

Main.defaultProps = {
    children: null,
    fullPage: false,
    title: null,
    description: "Shakib Ahmed's Personal Website",
};

export default Main;