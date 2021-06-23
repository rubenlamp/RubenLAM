import _ from 'lodash';

export default function pathJoin(...pathParts) {
    console.log('Pasé por utils/pathParts.js');
    const result = _.compact(pathParts)
        .join('/')
        .replace(/\/{2,}/g, '/');
    return result || '.';
}
