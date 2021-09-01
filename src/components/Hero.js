import React from 'react';
import Router from 'next/router';
import _ from 'lodash';

import { getPageUrl, classNames, Link, withPrefix } from '../utils';
import Action from './Action';
import ActionIcon from './ActionIcon';
//console.log('a Pasé por compo/Hero.js');

export default class Hero extends React.Component {
    constructor(props) {
        super(props);
        this.handleWindowResize = this.handleWindowResize.bind(this);
        this.handleRouteChange = this.handleRouteChange.bind(this);
        this.menuOpenRef = React.createRef();
    }

    componentDidMount() {
        window.addEventListener('resize', this.handleWindowResize, true);
        Router.events.on('routeChangeStart', this.handleRouteChange);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowResize, true);
        Router.events.off('routeChangeStart', this.handleRouteChange);
    }

    handleWindowResize() {
        const menuOpenElm = _.get(this.menuOpenRef, 'current.offsetParent');
        if (menuOpenElm === null) {
            document.body.classList.remove('menu--opened');
        }
    }

    handleRouteChange() {
        document.body.classList.remove('menu--opened');
    }

    handleMenuToggle(event) {
        event.preventDefault();
        document.body.classList.toggle('menu--opened');
    }

    renderNavLinks(navLinks, pageUrl) {
        return (
            <ul className="menu">
                {_.map(navLinks, (action, index) => {
                    const actionUrl = _.trim(_.get(action, 'url'), '/');
                    return (
                        <li
                            key={index}
                            className={classNames('menu-item', {
                                'current-menu-item': pageUrl === actionUrl
                            })}
                        >
                            <Action action={action} />
                        </li>
                    );
                })}
            </ul>
        );
    }

    renderSocialLinks(socialLinks) {
        return (
            <div className="social-links">
                {_.map(socialLinks, (action, index) => <ActionIcon key={index} action={action} />)}
            </div>
        );
    }

    render() {
        //console.log('b Pasé por compo/Header.js');

        const image = _.get(this.props, 'image');
        const page = _.get(this.props, 'page');
        const pageUrl = _.trim(getPageUrl(page), '/');
        const pageLayout = _.get(page, 'layout');
        const config = _.get(this.props, 'config');
        const hero = _.get(config, 'hero');
        const heroTitle = _.get(page, 'hero_title');
        const header = _.get(config, 'header');
        const logo = _.get(header, 'logo_img');
        const logoAlt = _.get(header, 'logo_img_alt', '');
        const title = _.get(header, 'title');
        const tagline = _.get(header, 'tagline');
        const hasNav = _.get(header, 'has_nav');
        const navLinks = _.get(header, 'nav_links');
        const hasSocial = _.get(header, 'has_social');
        const socialLinks = _.get(header, 'social_links');

        return (
            <section className="site-hero">
                {image && (
                    <div className="site-hero-bg">
                        <img src={withPrefix(image)} className="site-hero-bg-img" alt="" />
                    </div>
                )}
                {heroTitle && (
                      <h1 className="site-hero-title">{heroTitle}</h1>
                )}
                        <div className="site-header-vertical">
                            {/* {((hasNav && !_.isEmpty(navLinks)) || (hasSocial && !_.isEmpty(socialLinks))) && (
                                <React.Fragment>
                                    <nav id="main-navigation" className="site-navigation" aria-label="Main Navigation">
                                        <div className="site-nav-wrap">
                                            <div className="site-nav-inside">
                                                {hasNav && !_.isEmpty(navLinks) && this.renderNavLinks(navLinks, pageUrl)}
                                                {hasSocial && !_.isEmpty(socialLinks) && this.renderSocialLinks(socialLinks)}
                                            </div>
                                        </div>
                                    </nav>
                                    <button id="menu-toggle" className="menu-toggle" ref={this.menuOpenRef} onClick={this.handleMenuToggle.bind(this)}>
                                        <span className="screen-reader-text">Menu</span>
                                        <span className="icon-menu" aria-hidden="true" />
                                    </button>
                                </React.Fragment>
                            )} */}
                        </div>

            </section>
        );
    }
}
