import React from 'react';
import _ from 'lodash';
import { sourcebitDataClient } from 'sourcebit-target-next';
import { withRemoteDataUpdates } from 'sourcebit-target-next/with-remote-data-updates';
//console.log('a Pasé por pages/...slug.js');

import pageLayouts from '../layouts';
class Page extends React.Component {
    render() {
        //console.log('b Pasé por pages/...slug.js');
        const modelName = _.get(this.props, 'page.__metadata.modelName');
        const PageLayout = pageLayouts[modelName];
        if (!PageLayout) {
            throw new Error(`no page layout matching the page model: ${modelName}`);
        }
        return <PageLayout {...this.props} />;
    }
}

export async function getStaticPaths() {
    const paths = await sourcebitDataClient.getStaticPaths();
    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    const pagePath = '/' + (params.slug ? params.slug.join('/') : '');
    const props = await sourcebitDataClient.getStaticPropsForPageAtPath(pagePath);
    return { props };
}

export default withRemoteDataUpdates(Page);
