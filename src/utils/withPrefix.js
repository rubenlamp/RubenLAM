const _ = require('lodash');
const pathPrefix = require('../../content/data/config.json').path_prefix;
////console.log('a Pasé por utils/withPrefix.js');

export default function withPrefix(url) {
    ////console.log('b Pasé por utils/withPrefix.js');
    if (!url) {
        return url;
    }

    if (_.startsWith(url, '#') || _.startsWith(url, 'http://') || _.startsWith(url, 'https://')) {
        return url;
    }
    const basePath = _.trim(pathPrefix, '/');
    return '/' + _.compact([basePath, _.trimStart(url, '/')]).join('/');
}
