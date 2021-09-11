import React from 'react';
import _ from 'lodash';
import { Link, withPrefix } from '../utils';
////console.log('a Pasé por compo/HeaderAlt.js');

export default class HeaderAlt extends React.Component {
    render() {
        const mainRoot = _.get(this.props, 'mainRoot');
        console.log(this.props);
        console.log(mainRoot);
        ////console.log('b Pasé por compo/HeaderAlt.js');
        return (
            <header className="site-header-alt">
                <nav className="site-navigation-alt" aria-label="Main Navigation">
                    <Link className="home-link" href={withPrefix(mainRoot)}><span className="icon-arrow-left" aria-hidden="true" /> Regresar</Link>
                </nav>
            </header>
        );
    }
}

