import React from 'react';
import _ from 'lodash';
import moment from 'moment-strftime';

import { Layout } from '../components/index';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import { getPageUrl, Link, withPrefix, htmlToReact, markdownify } from '../utils';
console.log('a Pasé por layouts/home.js'); 

export default class Home extends React.Component {
    renderPost(post, index, hasMoreLink, moreLinkText) {
        const title = _.get(post, 'title');
        const thumbImage = _.get(post, 'thumb_img_path');
        const thumbImageAlt = _.get(post, 'thumb_img_alt', '');
        const excerpt = _.get(post, 'excerpt');
        const date = _.get(post, 'date');
        const dateTimeAttr = moment(date).strftime('%Y-%m-%d %H:%M');
        const formattedDate = moment(date).strftime('%B %d, %Y');
        const postUrl = getPageUrl(post, { withPrefix: true });

        return (
            <article key={index} className="post">
                {thumbImage && (
                    <Link className="post-thumbnail" href={postUrl}>
                        <img className="thumbnail" src={withPrefix(thumbImage)} alt={thumbImageAlt} />
                    </Link>
                )}
                <div className="post-content">
                    <header className="post-header">
                        <h2 className="post-title">
                            <Link href={postUrl}>{title}</Link>
                        </h2>
                        <div className="post-meta">
                            Published on <time className="published" dateTime={dateTimeAttr}>{formattedDate}</time>
                        </div>
                    </header>
                    {excerpt && (
                        <div className="post-content">
                            <p>{excerpt}</p>
                        </div>
                    )}
                    {hasMoreLink && moreLinkText && (
                        <p className="read-more">
                            <Link className="read-more-link" href={postUrl}>{moreLinkText} <span className="icon-arrow-right" aria-hidden="true" /></Link>
                        </p>
                    )}
                </div>
            </article>
        );
    }

    render() {
        const data = _.get(this.props, 'data');
        const config = _.get(data, 'config');
        const header = _.get(config, 'header');
        const headerImage = _.get(header, 'background_img');
        const hero = _.get(config, 'hero');
        const heroImage = _.get(hero, 'background_img');
        const page = _.get(this.props, 'page');
        const hasMoreLink = _.get(page, 'has_more_link');
        const moreLinkText = _.get(page, 'more_link_text');
        const posts = _.orderBy(_.get(this.props, 'posts', []), 'date', 'desc');
        const projects = _.orderBy(_.get(this.props, 'projects', []), 'date', 'desc');
        const papa = projects.splice(0,4);
        const title = _.get(page, 'title');
        const subtitle = _.get(page, 'subtitle');
        const markdownContent = _.get(page, 'markdown_content');

        console.log('Pasé por layouts/home.js'); 
        console.log(console.log(this.props));  
        return (
            <Layout page={page} config={config}>
                <Header config={config} page={page} image={headerImage} />
                <Hero config={config} page={page} image={heroImage}/>
                <div id="content" className="site-content">
                    <main id="main" className="site-main inner">
                        {subtitle && <div className="site-subtitle">{htmlToReact(subtitle)}</div>}
                        {markdownContent && <div className="site-container">{markdownify(markdownContent)}</div>}
                        <div className="post-feed gallery">
                            {_.map(papa, (post, index) => this.renderPost(post, index, hasMoreLink, moreLinkText))}
                        </div>
                    </main>
                    <Footer config={config} />
                </div>
            </Layout>
        );
    }
}
