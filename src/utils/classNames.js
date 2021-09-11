////console.log('a Pasé por utils/classNames.js');
import classnames from 'classnames';
// A simple wrapper around classNames to return null, if no classes were generated
// Otherwise, original classNames returns empty string which causes class="" to be generated
export default function classNames(...args) {
    ////console.log('b Pasé por utils/classNames.js');
    return classnames.call(this, ...args) || null;
}
