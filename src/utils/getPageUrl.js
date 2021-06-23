import _ from 'lodash';
import withPrefix from './withPrefix';

export default function getPageUrl(post, { withPrefix: addPrefix = false } = {}) {
    const urlPath = _.get(post, '__metadata.urlPath');
    console.log('Pasé por utils/getPageUrl.js');
    return addPrefix ? withPrefix(urlPath) : urlPath;
}
