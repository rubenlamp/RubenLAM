import _ from 'lodash';
import withPrefix from './withPrefix';
console.log('a Pasé por utils/getPageUrl.js');

export default function getPageUrl(post, { withPrefix: addPrefix = false } = {}) {
    const urlPath = _.get(post, '__metadata.urlPath');
    
    console.log('b Pasé por utils/getPageUrl.js');
    console.log(post); 
    return addPrefix ? withPrefix(urlPath) : urlPath;
}
