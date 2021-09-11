import _ from 'lodash';
////console.log('a Pasé por utils/pathParts.js');

export default function pathJoin(...pathParts) {
    ////console.log('b Pasé por utils/pathParts.js');
    const result = _.compact(pathParts)
        .join('/')
        .replace(/\/{2,}/g, '/');
    return result || '.';
}
